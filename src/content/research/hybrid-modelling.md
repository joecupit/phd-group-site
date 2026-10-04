---
title: Hybrid Modelling and Digital Twins
shortTitle: Hybrid Modelling
subtitle: Combining physical understanding and machine learning to predict process behaviour
summary:
  We combine physical models with machine learning to predict chemical and biological
  process behaviour. Our work investigates how hybrid models can be developed with limited
  data, adapted between systems and scales, and used as a foundation for process digital twins.
pos: 1
focus:
  - Hybrid physical and data-driven models
  - Model transfer across systems and scales
  - Bioprocess digital twin development
applications:
  - title: Bioprocess prediction
    description:
      Hybrid models combine biological kinetics with process data to predict production
      dynamics, including microalgal growth and yeast fermentation.
  - title: Model transfer and scale-up
    description:
      Information from laboratory and pilot-scale studies is used to adapt models
      and investigate predictions at industrial scale.
  - title: Chemical reaction kinetics
    description:
      Hybrid kinetic modelling is investigated for methanol synthesis and the water–gas
      shift reaction, including how the physical model structure affects predictions.
related:
  - interpretable-ai
  - bioprocess-engineering

# Optional cover image: add the relative path to your image file.
# coverImage: "[Relative image path]"

# Add the theme contact and links to relevant researcher profiles.
# contact:
#   label: "[Contact name or invitation]"
#   href: "[Contact page URL or mailto address]"
---

## The challenge

Reliable process models support the design of experiments, prediction of product quality
and selection of operating conditions. Building them is difficult when reaction
mechanisms or biological behaviour are only partly understood. Industrial measurements
can also be noisy, and experiments at larger scales are expensive.

We investigate how physical knowledge and machine learning can be combined to build
useful models under these conditions. A central question is how much mechanistic detail
to retain, and where a data-driven component can add information that the physical model
does not capture.

## Our approach

### Combining engineering knowledge with data

Our hybrid models combine engineering relationships, such as material balances and
kinetic expressions, with statistical or machine-learning components. These components
can represent uncertain reaction rates, correct missing behaviour or provide predictions
that support a mechanistic simulation. The structure is chosen around the available
knowledge, measurements and intended use of the model.

### Adapting models between processes and scales

We also examine how models can be adapted between related bioprocesses and reactor
scales. Rather than constructing each model independently, transfer methods reuse
information from an existing system and update it with measurements from the new
setting. Published work investigates this approach for bioprocess digital twin
development and for industrial-scale prediction using limited laboratory and pilot-scale
data.

### Building a foundation for digital twins

These models provide a foundation for digital twins: computational representations that
can support monitoring, prediction and operational decisions. Our research addresses
model development and adaptation, including the balance between mechanistic structure
and data-driven flexibility.
