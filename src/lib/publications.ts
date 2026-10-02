import type { CollectionEntry } from "astro:content";

export type Publication = CollectionEntry<"publications">;
export type Member = CollectionEntry<"members">;
export type ResearchArea = CollectionEntry<"research">;
export type OneOrMany<T> = T | T[];

// Use the same map in your main publications page if any IDs differ.
export const authorMemberAliases: Record<string, string> = {};
export const memberIDFor = (id: string, aliases = authorMemberAliases) =>
  aliases[id] ?? id;
export const topicID = (topic: string | { id: string }) =>
  typeof topic === "string" ? topic : topic.id;
export const asArray = <T>(value?: OneOrMany<T>): T[] =>
  value === undefined ? [] : Array.isArray(value) ? value : [value];
export const normalise = (text: string) =>
  text
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export interface PublicationFilters {
  author?: OneOrMany<string>; // Group member filename ID, or an external author's ID.
  researchArea?: OneOrMany<string>;
  topicMatch?: "any" | "all";
  year?: OneOrMany<string | number>;
  type?: OneOrMany<string>;
  query?: string;
  filter?: (publication: Publication) => boolean;
  includeDrafts?: boolean;
  includeDuplicates?: boolean;
}

export function selectPublications(
  entries: Publication[],
  options: PublicationFilters = {},
  aliases: Record<string, string> = authorMemberAliases,
): Publication[] {
  const authors = asArray(options.author).map((id) => memberIDFor(id, aliases));
  const areas = asArray(options.researchArea);
  const years = asArray(options.year).map(String);
  const types = asArray(options.type);
  const terms = normalise(options.query ?? "")
    .split(/\s+/)
    .filter(Boolean);
  return entries.filter((entry) => {
    const data = entry.data;
    if (!options.includeDrafts && data.draft) return false;
    if (!options.includeDuplicates && data.duplicateOf) return false;
    if (
      authors.length &&
      !data.authors.some((id) => authors.includes(memberIDFor(id, aliases)))
    )
      return false;
    const topics = data.researchTopics.map(topicID);
    if (
      areas.length &&
      !(options.topicMatch === "all"
        ? areas.every((id) => topics.includes(id))
        : areas.some((id) => topics.includes(id)))
    )
      return false;
    if (
      years.length &&
      !years.includes(data.publicationDate?.slice(0, 4) ?? "undated")
    )
      return false;
    if (types.length && !types.includes(data.type)) return false;
    const searchable = normalise(
      [
        data.title,
        ...data.authors.map((id) => data.authorNames[id] ?? id),
        data.journal ?? data.venue ?? "",
        data.doi ?? "",
      ].join(" "),
    );
    if (!terms.every((term) => searchable.includes(term))) return false;
    return options.filter?.(entry) ?? true;
  });
}

export function sortPublications(
  entries: Publication[],
  order: "newest" | "oldest" | "provided" = "newest",
) {
  const copy = [...entries];
  if (order === "provided") return copy;
  return copy.sort((a, b) => {
    const left = a.data.publicationDate ?? "";
    const right = b.data.publicationDate ?? "";
    // Unknown dates stay last for both orders.
    if (!left && right) return 1;
    if (left && !right) return -1;
    return (
      (order === "oldest"
        ? left.localeCompare(right)
        : right.localeCompare(left)) || a.data.title.localeCompare(b.data.title)
    );
  });
}

export function formatPublicationDate(
  date: string,
  format: "month-year" | "year" | "iso" = "month-year",
) {
  if (format === "iso") return date;
  const [year, month] = date.split("-");
  if (format === "year" || !month) return year;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[Number(month) - 1]
    ? `${months[Number(month) - 1]} ${year}`
    : date;
}

// Adds filters to ANY destination, preserving its existing query and hash.
// Pass these filters explicitly to PublicationList's viewAllHref; links are never guessed.
export function publicationFilterHref(
  href: string,
  filters: {
    author?: string;
    topic?: string;
    year?: string | number;
    q?: string;
  } = {},
) {
  const url = new URL(href, "https://placeholder.invalid");
  for (const [key, value] of Object.entries(filters)) {
    if (value !== undefined) url.searchParams.set(key, String(value));
  }
  if (/^[a-z][a-z\d+.-]*:/i.test(href) || href.startsWith("//"))
    return url.href;
  return `${url.pathname}${url.search}${url.hash}`;
}
