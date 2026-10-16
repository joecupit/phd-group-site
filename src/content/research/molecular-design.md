---
title: Generative AI for Molecular and Formulation Design
shortTitle: Molecular Design
subtitle: Designing molecules with targeted properties through AI and chemical knowledge
summary:
  We develop AI methods to generate molecules with targeted properties and assess
  their practical accessibility. Our work spans surfactant design and cost-aware
  molecular screening, connecting candidate generation with the challenges of
  making or purchasing promising compounds.
pos: 6
focus:
  - Inverse molecular design
  - Chemical language models
  - Structural fidelity and candidate diversity
applications:
  - title: Surfactant and formulation development
    description:
      "Generate surfactant candidates against multiple performance targets and
      structural constraints to support ingredient selection for formulated products."
  - title: Cost-aware molecular screening
    description:
      "Prioritise molecular candidates using predicted price as a proxy for
      synthetic accessibility, helping focus further assessment on potentially
      affordable and accessible compounds."
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

Molecular design starts with a desired set of properties and seeks structures that could provide them. Many different molecules may meet a target, but useful candidates must also be practical to make or purchase.

We develop AI methods to generate molecular candidates and assess their potential for further investigation. Our work combines property-driven design, demonstrated in surfactants, with tools that bring molecular cost and synthetic accessibility into candidate selection.

## Our approach

### Surfactant design

We use chemical language models to generate surfactant candidates with a target critical micelle concentration: the concentration at which surfactant molecules begin to form micelles. Our framework optimises molecular representations and checks whether they remain consistent when converted into structures and encoded again. Candidate re-ranking and minimal structural repairs help address invalid structures or deviations from the target, while interpretability analysis examines whether the designs follow established physical relationships.

### Assessing molecular cost and accessibility

Promising molecular designs must also be practical to obtain. We developed MolPrice, a machine learning model that predicts molecular price as a proxy for synthetic accessibility. Trained on supplier data and extended through contrastive learning to distinguish purchasable molecules from synthetically complex structures, it supports rapid assessment of large candidate libraries. By bringing cost and accessibility into molecular screening, MolPrice helps prioritise candidates for further investigation.
