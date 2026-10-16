---
title: Generative AI for Molecular and Formulation Design
shortTitle: Molecular Design
subtitle: Designing molecules with targeted properties through AI and chemical knowledge
summary:
  We investigate how chemical language models can generate molecular candidates for
  targeted properties. Our work focuses on the fidelity, validity and diversity of generated
  structures, with a demonstrated application in surfactant design.
pos: 6
focus:
  - Inverse molecular design
  - Chemical language models
  - Structural fidelity and candidate diversity
applications:
  - title: Surfactant design
    description:
      "Molecular candidates are generated for a target critical micelle concentration:
      the concentration at which surfactant molecules begin to form micelles."
  - title: Molecular candidate assessment
    description:
      Round-trip fidelity, candidate re-ranking and structural repairs help assess
      generated molecules against their intended property target and chemical validity.
related:
  - interpretable-ai
  - industrial-analytics

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

### Surfactant design

We use chemical language models to generate surfactant candidates with a target critical micelle concentration: the concentration at which surfactant molecules begin to form micelles. Our framework optimises molecular representations and checks whether they remain consistent when converted into structures and encoded again. Candidate re-ranking and minimal structural repairs help address invalid structures or deviations from the target, while interpretability analysis examines whether the designs follow established physical relationships.

### Assessing molecular cost and accessibility

Promising molecular designs must also be practical to obtain. We developed MolPrice, a machine learning model that predicts molecular price as a proxy for synthetic accessibility. Trained on supplier data and extended through contrastive learning to distinguish purchasable molecules from synthetically complex structures, it supports rapid assessment of large candidate libraries. By bringing cost and accessibility into molecular screening, MolPrice helps prioritise candidates for further investigation.
