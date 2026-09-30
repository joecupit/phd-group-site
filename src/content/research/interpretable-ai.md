---
title: Interpretable AI & Scientific Discovery
shortTitle: Interpretable AI
subtitle: Discovering equations, mechanisms and physical knowledge from data
summary: We develop methods that discover mathematical relationships and candidate physical
  explanations from data. By combining symbolic regression, engineering knowledge and experimental
  design, we investigate how interpretable models can support scientific understanding and
  process development.
pos: 2
focus:
- Symbolic regression and equation discovery
- Interpretable model structural transfer
- Experimental design and kinetic insight
applications:
- title: Biochemical model development
  description: Symbolic regression identifies and refines kinetic relationships, while structural
    transfer adapts existing equations to different biochemical systems.
- title: Formulation process development
  description: Knowledge-guided equation discovery and experimental design are combined to
    investigate processing mechanisms and distinguish competing models in simulated formulation
    studies.
- title: Catalytic reaction analysis
  description: Relationships between reaction orders, activation energies and surface coverages
    connect measurable kinetics with catalyst behaviour.
projects: []
# Add active projects on equation discovery, reaction mechanisms, interpretable models
# or experimental design. Include the system studied, the specific knowledge gap, the
# researchers involved, project status and approved links.
# Project entry format:
# - title: "[Project title]"
#   description: "[Research question, application and project status]"
#   people: "[Researcher names]"
#   href: "[Project page URL]"

publications:
- title: Automated Data-Efficient Symbolic Regression for Interpretable Bioprocess Model Development
  authors: Riezzo et al.
  year: 2026
  venue: Biotechnology and Bioengineering
  href: https://doi.org/10.1002/bit.70328
- title: Interpretable-AI-Based Model Structural Transfer Learning to Accelerate Bioprocess
    Model Construction
  authors: Rogers et al.
  year: 2025
  venue: Biotechnology and Bioengineering
  href: https://doi.org/10.1002/bit.70026
- title: 'Cracking the physical insight of power law models: Bridging the gap between macroscopic
    kinetics and surface coverages'
  authors: Vega-Ramon et al.
  year: 2025
  venue: AIChE Journal
  href: https://doi.org/10.1002/aic.18616
- title: Integrating knowledge-guided symbolic regression and model-based design of experiments
    to automate process flow diagram development
  authors: Rogers et al.
  year: 2024
  venue: Chemical Engineering Science
  href: https://doi.org/10.1016/j.ces.2024.120580
related:
- title: Hybrid Modelling & Digital Twins
  href: /research/hybrid-modelling/
- title: Industrial Analytics & Process Monitoring
  href: /research/industrial-analytics/
- title: Molecular Design & Discovery
  href: /research/molecular-design/
researchHref: /research/

# Optional cover image: add the relative path to your image file.
# coverImage: "[Relative image path]"

# Add the theme contact and links to relevant researcher profiles.
# contact:
#   label: "[Contact name or invitation]"
#   href: "[Contact page URL or mailto address]"
---

## The challenge

An accurate prediction does not necessarily explain why a process behaves as it does.
Engineers also need relationships they can inspect, compare with established knowledge
and use to guide further experiments. This is especially important when data are limited
or when a model will be applied beyond the conditions used to develop it.

We develop methods that turn process measurements into candidate equations and physical
explanations. Our work connects interpretable AI with reaction engineering and
biochemical modelling, with an emphasis on understanding the relationships behind
observed behaviour.

## Our approach

### Discovering equations from small datasets

Symbolic regression searches for mathematical expressions that describe relationships in
data. We combine this search with engineering knowledge and kinetic model structures so
that the resulting expressions can be assessed as parts of a process model. Recent
bioprocess work investigates how individual kinetic terms can be identified and refined
when only small datasets are available.

### Transferring model structure

We also investigate structural model transfer: modifying the equations of an existing
model when applying it to a different biochemical system. Combining neural-network
feature attribution with symbolic regression helps identify where the original model
needs revision. This approach has been demonstrated through an in-silico case study.

### Choosing informative experiments

Experimental design is another part of the discovery process. Our published framework
combines symbolic regression with model-based design of experiments to choose
measurements that distinguish competing expressions while considering process
performance. In simulated formulation studies, this iterative approach recovered the
mechanisms used to generate the data.

### Connecting kinetics with physical mechanisms

Complementary reaction-engineering work links measurable kinetic characteristics to
otherwise inaccessible surface behaviour. Analytical relationships between reaction
orders, activation energies and catalyst surface coverages help connect macroscopic
measurements with microscopic mechanisms. The framework was tested in simulated
water–gas shift reaction studies. Candidate explanations still require validation
against independent evidence.
