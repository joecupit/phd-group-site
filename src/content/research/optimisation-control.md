---
title: Process Optimisation & Intelligent Control
shortTitle: Optimisation & Control
subtitle: Using models and data to make better engineering decisions
summary: We connect predictive models with decisions about process operation. Our research
  investigates flexible operating regions, optimisation under uncertainty and intelligent
  control strategies for batch processes and biological production systems.
pos: 4
focus:
- Flexible operating regions under uncertainty
- Constraint-aware batch process control
- Dynamic metabolic control
applications:
- title: Quality-constrained batch operation
  description: Operating conditions are selected while accounting for process requirements,
    uncertainty and differences between models and the systems they represent.
- title: Flexible operating-region identification
  description: Surrogate models and dynamic optimisation help identify ranges of conditions
    that can meet process requirements and locate favourable subregions.
- title: Dynamic bioprocess control
  description: Control policies are investigated for simulated fatty-acid and lactate production
    systems, balancing productive metabolic activity against cellular burden.
projects: []
# Add active optimisation and control projects. Specify the decision variables,
# engineering objectives and main constraints, together with the application,
# researchers, project status and approved partners. State whether each demonstration
# is simulated, experimental or deployed.
# Project entry format:
# - title: "[Project title]"
#   description: "[Research question, application and project status]"
#   people: "[Researcher names]"
#   href: "[Project page URL]"

publications:
- title: A Surrogate-Enhanced Framework for flexible and optimal operational space identification
    under uncertainty
  authors: Kay et al.
  year: 2026
  venue: Chemical Engineering Science
  href: https://doi.org/10.1016/j.ces.2025.122973
- title: Reinforcement Learning for Robust Dynamic Metabolic Control
  authors: Espinel-Rios et al.
  year: 2026
  venue: Biotechnology and Bioengineering
  href: https://doi.org/10.1002/bit.70077
- title: 'Safe chance constrained reinforcement learning for batch process control: A data-driven
    framework for learning control of uncertain batch process systems'
  authors: Mowbray et al.
  year: 2022
  venue: Computers and Chemical Engineering
  href: https://doi.org/10.1016/j.compchemeng.2021.107630
related:
- title: Hybrid Modelling & Digital Twins
  href: /research/hybrid-modelling/
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

Process performance depends on decisions about operating conditions and how those
conditions change over time. A decision that performs well for a nominal model may be
unsuitable when raw materials, measurements or process behaviour vary. Quality
requirements and operating constraints therefore need to be considered alongside
productivity.

We investigate how predictive models, optimisation and intelligent control can support
these decisions. Our work includes identifying acceptable operating regions and
developing control strategies that account for uncertainty and differences between a
model and the process it represents.

## Our approach

### Identifying flexible operating regions

Operational-space methods identify ranges of operating conditions that can meet process
requirements. Our surrogate-enhanced framework uses computationally efficient
approximations to help identify flexible operating regions and then locate favourable
subregions through dynamic optimisation. This provides alternatives to relying on a
single nominal operating point.

### Learning control policies under uncertainty

We also investigate reinforcement learning for batch process control. A controller
learns a decision policy by interacting with a process model and evaluating the
consequences of its actions. Our chance-constrained framework uses Gaussian-process
uncertainty estimates to account for constraints and plant–model mismatch, with
performance assessed against nonlinear model predictive control in case studies.

### Controlling metabolic activity over time

In dynamic metabolic control, operating decisions can extend to changes in enzyme
expression during a bioprocess. Published work trains control policies using surrogate
models and varies system parameters during training to assess robustness. The
demonstrations use simulated fatty-acid and lactate production systems, where productive
metabolic activity must be balanced against cellular burden.
