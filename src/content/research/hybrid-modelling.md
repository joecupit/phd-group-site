---
title: Hybrid Modelling & Digital Twins
shortTitle: Hybrid Modelling
subtitle: Combining physical understanding and machine learning to predict process behaviour
summary: We combine physical models with machine learning to predict chemical and biological
  process behaviour. Our work investigates how hybrid models can be developed with limited
  data, adapted between systems and scales, and used as a foundation for process digital twins.
pos: 1
focus:
- Hybrid physical and data-driven models
- Model transfer across systems and scales
- Bioprocess digital twin development
applications:
- title: Bioprocess prediction
  description: Hybrid models combine biological kinetics with process data to predict production
    dynamics, including microalgal growth and yeast fermentation.
- title: Model transfer and scale-up
  description: Information from laboratory and pilot-scale studies is used to adapt models
    and investigate predictions at industrial scale.
- title: Chemical reaction kinetics
  description: Hybrid kinetic modelling is investigated for methanol synthesis and the water–gas
    shift reaction, including how the physical model structure affects predictions.
projects: []
# Add 1–3 active projects on hybrid models, digital twins or model transfer. For each,
# provide the project title, research question, application, researcher names, dates
# or status, approved partner or funder details, and a link to the project page.
# Project entry format:
# - title: "[Project title]"
#   description: "[Research question, application and project status]"
#   people: "[Researcher names]"
#   href: "[Project page URL]"

publications:
- title: Enabling Bioprocess Upscaling Prediction Through Hybrid Modelling and Transfer Learning
    Under Small-Data Scenarios
  authors: Al-Ramadhan et al.
  year: 2026
  venue: Biotechnology and Bioengineering
  href: https://doi.org/10.1002/bit.70385
- title: Accelerating bioprocess digital twin development by integrating hybrid modelling
    with transfer learning
  authors: Riezzo et al.
  year: 2025
  venue: Chemical Engineering Journal
  href: https://doi.org/10.1016/j.cej.2025.162018
- title: Developing a Hybrid Modeling Framework for Enhanced Prediction in Chemical Reaction
    Kinetics
  authors: Kay et al.
  year: 2025
  venue: Industrial and Engineering Chemistry Research
  href: https://doi.org/10.1021/acs.iecr.5c01597
- title: A review and perspective on hybrid modeling methodologies
  authors: Schweidtmann et al.
  year: 2024
  venue: Digital Chemical Engineering
  href: https://doi.org/10.1016/j.dche.2023.100136
- title: Hybrid physics-based and data-driven modeling for bioprocess online simulation and
    optimization
  authors: Zhang et al.
  year: 2019
  venue: Biotechnology and Bioengineering
  href: https://doi.org/10.1002/bit.27120
related:
- title: Interpretable AI & Scientific Discovery
  href: /research/interpretable-ai/
- title: Bioprocess Engineering & Scale-Up
  href: /research/bioprocess-engineering/
researchHref: /research/

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
