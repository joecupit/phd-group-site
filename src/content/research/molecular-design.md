---
title: Molecular Design & Discovery
shortTitle: Molecular Design
subtitle: Designing molecules with targeted properties through AI and chemical knowledge
summary: We investigate how chemical language models can generate molecular candidates for
  targeted properties. Our work focuses on the fidelity, validity and diversity of generated
  structures, with a demonstrated application in surfactant design.
pos: 6
focus:
- Inverse molecular design
- Chemical language models
- Structural fidelity and candidate diversity
applications:
- title: Surfactant design
  description: 'Molecular candidates are generated for a target critical micelle concentration:
    the concentration at which surfactant molecules begin to form micelles.'
- title: Molecular candidate assessment
  description: Round-trip fidelity, candidate re-ranking and structural repairs help assess
    generated molecules against their intended property target and chemical validity.
projects: []
# Add active molecular-design projects and any additional demonstrated molecular
# classes or properties. Specify researchers and project status. Add experimental
# synthesis, validation or sustainability objectives only where these are confirmed
# parts of the work.
# Project entry format:
# - title: "[Project title]"
#   description: "[Research question, application and project status]"
#   people: "[Researcher names]"
#   href: "[Project page URL]"

publications:
- title: Improving Fidelity and Diversity in Chemical Language Transformers for Inverse Molecular
    Design
  authors: Rogers et al.
  year: 2026
  venue: Journal of Chemical Information and Modeling
  href: https://doi.org/10.1021/acs.jcim.5c03062
related:
- title: Interpretable AI & Scientific Discovery
  href: /research/interpretable-ai/
- title: Industrial Analytics & Process Monitoring
  href: /research/industrial-analytics/
researchHref: /research/

# Optional cover image: add the relative path to your image file.
# coverImage: "[Relative image path]"

# Add the theme contact and links to relevant researcher profiles.
# contact:
#   label: "[Contact name or invitation]"
#   href: "[Contact page URL or mailto address]"
---

## The challenge

Inverse molecular design starts with a desired property and seeks structures that could
provide it. Many different molecules may meet the target, so useful methods need to
consider diversity as well as predicted performance.

Our molecular-design work investigates how chemical language models can generate
candidates for specified properties, with particular attention to chemical validity and
consistency between the design target and the decoded structure.

## Our approach

### Generating and refining molecular candidates

The published framework optimises molecular representations within a chemical language
model. A round-trip fidelity measure assesses how those representations change when
converted into structures and encoded again. Candidate re-ranking and minimal structural
repairs address molecules that are invalid or miss the intended target.

### Interpreting generated structures

Interpretability analysis examines whether generated structures follow established
physical design relationships. The outputs are computational candidates for further
assessment; their generation alone does not establish synthesis feasibility or
experimentally measured performance.
