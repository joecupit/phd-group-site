---
title: Stochastic data-driven model predictive control using gaussian processes
authors:
- eric-bradford
- lars-imsland
- dongda-zhang
- ehecatl-del-rio-chanona
authorNames:
  eric-bradford: Eric Bradford
  lars-imsland: Lars Imsland
  dongda-zhang: Dongda Zhang
  ehecatl-del-rio-chanona: Ehecatl Antonio del Río Chanona
journal: Computers & Chemical Engineering
venue: Computers & Chemical Engineering
publicationDate: 2020-08
datePrecision: month
doi: https://doi.org/10.1016/j.compchemeng.2020.106844
researchTopics:
- hybrid-modelling
- optimisation-control
type: journal-article
abstractStatus: original
draft: false
scholarUrl: https://scholar.google.com/citations?view_op=view_citation&hl=en&oe=ASCII&user=g25KQLwAAAAJ&pagesize=100&citation_for_view=g25KQLwAAAAJ:RHpTSmoSYBkC
retrievedOn: '2026-09-30'
dateSource: crossref:published
abstractSource: https://openalex.org/W3025528584
license: http://creativecommons.org/licenses/by/4.0/
reviewNotes: []
---

Nonlinear model predictive control (NMPC) is one of the few control methods that can handle multivariable nonlinear control systems with constraints. Gaussian processes (GPs) present a powerful tool to identify the required plant model and quantify the residual uncertainty of the plant-model mismatch. It is crucial to consider this uncertainty, since it may lead to worse control performance and constraint violations. In this paper we propose a new method to design a GP-based NMPC algorithm for finite horizon control problems. The method generates Monte Carlo samples of the GP offline for constraint tightening using back-offs. The tightened constraints then guarantee the satisfaction of chance constraints online. Advantages of our proposed approach over existing methods include fast online evaluation, consideration of closed-loop behaviour, and the possibility to alleviate conservativeness by considering both online learning and state dependency of the uncertainty. The algorithm is verified on a challenging semi-batch bioprocess case study.

*Abstract reproduced from the cited publication. [Source](https://doi.org/10.1016/j.compchemeng.2020.106844); [reuse licence](http://creativecommons.org/licenses/by/4.0/). Attribution: Eric Bradford, Lars Imsland, Dongda Zhang, Ehecatl Antonio del Río Chanona.*
