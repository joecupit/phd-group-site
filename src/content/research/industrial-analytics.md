---
title: Industrial Analytics and Process Monitoring
shortTitle: Industrial Analytics
subtitle: Turning operational data into insight about product quality and equipment health
summary:
  We turn industrial measurements and operating histories into models of product quality,
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
    description:
      Process measurements are used to predict quality indicators, including final
      viscosity in personal-care manufacturing, and identify informative variables and time
      regions.
  - title: Understanding batch operations
    description:
      Historical records are used to reconstruct and group process flow diagrams,
      helping compare processing sequences across batches.
  - title: Equipment degradation and remaining useful life
    description:
      Studies use an industrial compressed-air filter-degradation dataset and the
      NASA C-MAPSS turbofan benchmark to investigate how unlabelled trajectories can support
      predictive-maintenance models.
related:
  - interpretable-ai
  - optimisation-control

# Optional cover image: add the relative path to your image file.
# coverImage: "./_images/1.1.png"

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
