---
title: Industrial Analytics & Process Monitoring
shortTitle: Industrial Analytics
subtitle: Turning operational data into insight about product quality and equipment health
summary: We turn industrial measurements and operating histories into models of product quality,
  batch behaviour and equipment condition. Our work includes soft sensors, interpretable quality
  models, reconstruction of batch operations and predictive maintenance using limited labelled
  data.
pos: 3
focus:
- Soft sensing and product quality prediction
- Reconstruction of batch operating histories
- Predictive maintenance with scarce failure labels
applications:
- title: Formulation quality prediction
  description: Process measurements are used to predict quality indicators, including final
    viscosity in personal-care manufacturing, and identify informative variables and time
    regions.
- title: Understanding batch operations
  description: Historical records are used to reconstruct and group process flow diagrams,
    helping compare processing sequences across batches.
- title: Equipment degradation and remaining useful life
  description: Studies use an industrial compressed-air filter-degradation dataset and the
    NASA C-MAPSS turbofan benchmark to investigate how unlabelled trajectories can support
    predictive-maintenance models.
projects: []
# Add current industrial analytics and predictive-maintenance projects. Identify the
# process or equipment, intended prediction or insight, researcher names and status.
# Add partner names, datasets, figures and results only where approved for public
# release.
# Project entry format:
# - title: "[Project title]"
#   description: "[Research question, application and project status]"
#   people: "[Researcher names]"
#   href: "[Project page URL]"

publications:
- title: Data-driven digitalisation of batch operations through automated reconstruction and
    clustering of process flow diagrams
  authors: Wyrwoll et al.
  year: 2026
  venue: Digital Chemical Engineering
  href: https://doi.org/10.1016/j.dche.2026.100313
- title: A Semi-Supervised Framework for Optimisation-Based Label Inference in RUL Prediction
  authors: Cupit et al.
  year: 2026
  venue: ENBIS-26 conference contribution
  href: https://conferences.enbis.org/event/82/contributions/1189/
- title: Constructing a Symbolic Regression-Based Interpretable Soft Sensor for Industrial
    Data Analytics and Product Quality Control
  authors: Kay et al.
  year: 2024
  venue: Industrial and Engineering Chemistry Research
  href: https://doi.org/10.1021/acs.iecr.3c04021
- title: A two-step multivariate statistical learning approach for batch process soft sensing
  authors: Hicks et al.
  year: 2021
  venue: Digital Chemical Engineering
  href: https://doi.org/10.1016/j.dche.2021.100003
related:
- title: Interpretable AI & Scientific Discovery
  href: /research/interpretable-ai/
- title: Process Optimisation & Intelligent Control
  href: /research/optimisation-control/
researchHref: /research/

# Optional cover image: add the relative path to your image file.
# coverImage: "[Relative image path]"

# Add the theme contact and links to relevant researcher profiles.
# contact:
#   label: "[Contact name or invitation]"
#   href: "[Contact page URL or mailto address]"
---

## The challenge

Manufacturing processes generate sensor histories, operating records and laboratory
measurements. These sources capture different parts of a process, often at different
frequencies, and important outcomes may only be measured at the end of a batch.
Equipment degradation data present a related challenge: operating histories are
abundant, but reliable failure labels are scarce.

We develop analytical methods that make these records useful for understanding
operations and predicting outcomes. Our work addresses product quality, the
reconstruction of batch activity and the use of unlabelled sensor histories for
predictive maintenance.

## Our approach

### Identifying informative process measurements

A soft sensor estimates a property that is difficult or costly to measure directly from
other available process measurements. Our batch-analysis work uses partial least squares
to identify informative variables and time regions, followed by multiway modelling to
predict final product quality. This helps reduce the complexity of industrial datasets
and identify which parts of the operating history matter.

### Developing interpretable soft sensors

We also develop interpretable soft sensors using symbolic regression alongside feature
engineering and dimensionality reduction. The resulting equations connect quality
indicators with process variables, allowing their relationships to be examined.
Published studies evaluate this approach using industrial formulation datasets.

### Reconstructing batch operating structures

Beyond quality prediction, our work reconstructs and groups process flow diagrams from
historical batch records. This provides a way to compare how batches were operated and
explore differences in their processing sequences.

### Using unlabelled data for predictive maintenance

Our predictive-maintenance research addresses the scarcity of Remaining Useful Life
labels. A semi-supervised framework combines temporal modelling with optimisation to
infer labels for unlabelled trajectories, making more of the existing operational data
available for model training. This work has been presented at ENBIS as a conference
contribution.
