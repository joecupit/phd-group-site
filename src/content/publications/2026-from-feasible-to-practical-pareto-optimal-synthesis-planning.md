---
title: 'From Feasible to Practical: Pareto-Optimal Synthesis Planning'
authors:
- friedrich-hastedt
- dongda-zhang
- ehecatl-del-rio-chanona
authorNames:
  friedrich-hastedt: Friedrich Hastedt
  dongda-zhang: Dongda Zhang
  ehecatl-del-rio-chanona: Ehecatl Antonio del Río Chanona
journal: null
venue: arXiv
publicationDate: '2026-05-08'
datePrecision: day
doi: https://doi.org/10.48550/arxiv.2605.07521
researchTopics:
- optimisation-control
- molecular-design
type: preprint
abstractStatus: original
draft: false
scholarUrl: https://scholar.google.com/citations?view_op=view_citation&hl=en&oe=ASCII&user=g25KQLwAAAAJ&cstart=100&pagesize=100&citation_for_view=g25KQLwAAAAJ:nrtMV_XWKgEC
retrievedOn: '2026-09-30'
dateSource: openalex
abstractSource: https://arxiv.org/abs/2605.07521
license: https://creativecommons.org/licenses/by/4.0/
reviewNotes: []
---

Current computer-aided synthesis planning (CASP) methods often treat retrosynthesis as solved once a single feasible route is identified, focusing primarily on convergence or shortest-path metrics. This view is misaligned with real-world practice, where chemists must balance competing objectives such as cost, sustainability, toxicity, and overall yield. To address this, we formulate synthesis planning as a multi-objective search problem and introduce MORetro*, an algorithm that generates a Pareto front of synthesis routes to explicitly capture trade-offs among user-defined criteria. MORetro* uses weighted scalarization and BO-informed sampling to efficiently navigate the combinatorial search space and prioritize promising trade-offs. Building on multi-objective A*-search, we provide optimality guarantees showing that, for a fixed single-step model, MORetro* recovers the true Pareto front under admissibility. Across multiple retrosynthesis benchmarks, MORetro* produces diverse, high-quality Pareto fronts, uncovering solutions overlooked by single-objective approaches and better aligning CASP outputs with industrial decision-making.

*Abstract reproduced from the cited publication. [Source](https://doi.org/10.48550/arxiv.2605.07521); [reuse licence](https://creativecommons.org/licenses/by/4.0/). Attribution: Friedrich Hastedt, Dongda Zhang, Ehecatl Antonio del Río Chanona.*
