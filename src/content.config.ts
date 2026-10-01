import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

const group = defineCollection({
  loader: glob({
    base: "./src/content/group",
    pattern: "**/*.{md,mdx}",
  }),

  schema: ({ image }) =>
    z.object({
      name: z.string(),
      position: z.string(),
      email: z.string(),
      summary: z.string().optional(),
      profileImage: image().optional(),
      links: z.record(z.string().url()).optional(),
    }),
});

export const publications = defineCollection({
  loader: glob({
    base: "./src/content/publications",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    // Plain IDs allow external coauthors to remain unlinked when no member file exists.
    authors: z.array(z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)),
    authorNames: z.record(z.string(), z.string()),
    journal: z.string().nullable(),
    venue: z.string().nullable(),
    // Keep partial dates as strings: 2024, 2024-03 or 2024-03-15.
    publicationDate: z
      .string()
      .regex(/^\d{4}(?:-\d{2}(?:-\d{2})?)?$/)
      .nullable(),
    datePrecision: z.enum(["year", "month", "day"]).nullable(),
    doi: z.string().url().nullable(),
    // Markdown stores filename IDs; Astro resolves these to collection references.
    researchTopics: z.array(reference("research")).default([]),
    type: z.string(),
    authorRole: z.enum(["authors", "editors"]).optional(),
    abstractStatus: z.enum(["original", "summary", "unavailable", "duplicate"]),
    draft: z.boolean().default(false),
    duplicateOf: z.string().optional(),
    scholarUrl: z.string().url(),
    retrievedOn: z.string(),
    dateSource: z.string().nullable(),
    abstractSource: z.string().url().nullable(),
    license: z.string().url().nullable(),
    reviewNotes: z.array(z.string()).default([]),
  }),
});

const research = defineCollection({
  loader: glob({
    base: "./src/content/research",
    pattern: "**/*.{md,mdx}",
  }),

  schema: ({ image }) =>
    z.object({
      title: z.string(),
      shortTitle: z.string(),
      subtitle: z.string(),
      summary: z.string(),
      pos: z.number(),
      coverImage: image().optional(),

      focus: z.array(z.string()).default([]),

      applications: z
        .array(
          z.object({
            title: z.string(),
            description: z.string(),
          }),
        )
        .default([]),

      projects: z
        .array(
          z.object({
            title: z.string(),
            description: z.string(),
            people: z.string().optional(),
            href: z.string().optional(),
          }),
        )
        .default([]),

      publications: z
        .array(
          z.object({
            title: z.string(),
            authors: z.string(),
            year: z.number().int(),
            venue: z.string().optional(),
            href: z.string(),
          }),
        )
        .default([]),

      related: z
        .array(
          z.object({
            title: z.string(),
            href: z.string(),
          }),
        )
        .default([]),

      contact: z
        .object({
          label: z.string(),
          href: z.string(),
        })
        .optional(),

      researchHref: z.string().default("/research/"),
    }),
});

export const collections = { group, publications, research };
