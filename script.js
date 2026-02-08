const dictionary = {
  en: {
    brandName: "Datalloy.ai",
    footerBrand: "Datalloy.ai",
    navSolution: "Platform",
    navIndustries: "Industries",
    navUseCases: "Use Cases",
    navCapabilities: "Workflow",
    navValidation: "Comparison",
    navChoose: "Why Datalloy",
    navSecurity: "Security",
    navTeam: "Team",
    navCta: "Request Demo",
    floatingDemo: "Demo",
    eyebrow: "AI-Driven High-Fidelity Synthetic Data Platform",
    heroTitle: "Generate plug-and-play, production-grade data on demand.",
    heroTitleHtml:
      "<span class='brand-accent'>Generate</span> plug-and-play, production-grade <span class='brand-accent'>data</span> on demand.",
    heroSubtitle:
      "Datalloy.ai uses generative AI to synthesize high-fidelity, protocol-compliant raw operational data for training, testing, and compliance validation. We do not just match summary statistics; we output complete raw records directly usable by standard tools.",
    heroTarget: "Built for ML, data, and security teams in highly regulated industries.",
    heroPrimary: "Get a private pilot",
    heroSecondary: "See workflow",
    heroProof:
      "Core results have been published at top-tier conferences including USENIX Security, NSDI, SIGMETRICS, NDSS, CoNEXT, and UbiComp, with continued focus on network data analytics, security/privacy, and ML systems.",
    heroProofLink1: "NAISS Lab homepage",
    heroProofLink2: "Google Scholar",
    heroProofLink3: "NetDiffusion (SIGMETRICS'24)",
    heroProofLink4: "NetSSM (CoNEXT'26)",
    panelTitle: "Datalloy Core Engine",
    panelBody:
      "Generate tabular data, time-series, system logs, and network traffic as complete raw datasets with deterministic controls and rare-event generation.",
    panelMetricValue1: "Protocol-true",
    panelMetric1: "Tool-ready outputs",
    panelMetricValue2: "Deterministic",
    panelMetric2: "Seed + version pinning",
    panelMetricValue3: "Rare-event ready",
    panelMetric3: "Scenario-level control",

    validationTitle: "One platform for multimodal operational data",
    validationBody:
      "Generate protocol-compliant raw outputs across PCAP, logs, time-series, and tabular from one workflow.",
    validationCard1Title: "Network traffic (PCAP)",
    validationCard1Body: "Packet-level generation with protocol-aware structure and post-generation verification.",
    validationCard1Metric: "Outputs: PCAP, tool-ready for Wireshark/Scapy/TCPReplay",
    validationCard2Title: "System logs and traces",
    validationCard2Body: "Structured and semi-structured operational logs with schema constraints and event-order controls.",
    validationCard2Metric: "Outputs: JSONL / Syslog-style records with validation reports",
    validationCard3Title: "Time-series telemetry",
    validationCard3Body: "Multi-sensor and multi-flow sequence synthesis with long-range dependency controls.",
    validationCard3Metric: "Outputs: CSV / Parquet for monitoring and ML pipelines",
    validationCard4Title: "Tabular records",
    validationCard4Body: "High-coverage synthetic records for risk analytics, forecasting, and compliance workflows.",
    validationCard4Metric: "Outputs: schema-constrained tables with field-level steering",
    validationCard5Title: "NetDiffusion packet-scale detail",
    validationCard5Body:
      "Public technical coverage reports packet-level generation with max flow length 1,024 packets and 17-byte packet feature vectors.",
    validationCard5Metric: "Reference: NetDiffusion paper + UChicago research release",
    validationNote:
      "Core generation stack uses diffusion and SSM families, plus task-specific adaptation and validation layers.",

    solutionTitle: "Break data bottlenecks and accelerate model deployment.",
    solutionBody:
      "In critical industries, data is often the scarcest and most sensitive asset. Datalloy generates protocol-compliant complete raw data on demand, not just fitted statistics, so validation, hardening, and launch cycles move faster than competitors.",
    value1: "Cover complete raw data across tabular, time-series, system logs, and network traffic.",
    value2: "Protocol-compliant outputs plug directly into IDS, SIEM, ETL, and ML toolchains.",
    value3: "Control attributes on demand and batch-generate statistically rare edge cases.",
    pillar1Title: "Break data silos",
    pillar1Body: "Enable cross-team training collaboration without exposing sensitive information.",
    pillar2Title: "Rare-event generation",
    pillar2Body: "Generate edge cases on demand to improve robustness of critical models.",
    pillar3Title: "Replay with lineage",
    pillar3Body: "Store lightweight models and replay historical scenarios anytime.",

    howTitle: "Workflow",
    howBody:
      "Models are selectable objects in step 2. Choose the model family per task, then run one unified workflow from constraints to validation and deployment.",
    flow1Title: "1. Data definition",
    flow1Body: "Define modality, schema, volume, time horizon, and target export formats.",
    flow2Title: "2. Model selection",
    flow2Body: "Choose model_family per task: diffusion | ssm | adapt | compress.",
    flow3Title: "3. Constraint configuration",
    flow3Body: "Set protocol rules, field constraints, correlation structure, rarity targets, and boundary conditions.",
    flow4Title: "4. Data validation",
    flow4Body: "Run protocol, schema, statistical, and downstream-task checks with validation reports.",
    flow5Title: "5. Multi-party deployment",
    flow5Body: "Deliver to SaaS, customer VPC, or on-prem, then route outputs to IDS, SIEM, ETL, and ML toolchains.",
    apiTitle: "Executable workflow surface",
    apiBody: "Minimal executable Python example.",
    apiCode0: "import datalloy  # SDK import",
    apiCode1: 'spec = datalloy.define(modality="pcap", schema=pcap_schema, volume=1_000_000)  # data definition',
    apiCode2: 'job = datalloy.generate(spec=spec, model_family="ssm", constraints=policy)  # generation',
    apiCode3: 'report = datalloy.validate(job.id, checks=["protocol", "schema", "task"])  # validation',
    apiCode4: 'artifact = datalloy.export(job.id, format="pcap")  # export',
    apiCode5: 'datalloy.deploy(artifact, target="vpc", tools=["ids", "siem", "ml"])  # deployment',
    apiItem1: "Define: modality, schema, volume, time horizon, and export format.",
    apiItem2: "Select: model_family=diffusion|ssm|adapt|compress.",
    apiItem3: "Constrain: protocol rules, field-level constraints, rarity targets, and correlations.",
    apiItem4: "Validate: protocol/schema/statistical/downstream checks with reports.",
    apiItem5: "Deploy: SaaS | VPC | on-prem and export pcap|jsonl|csv|parquet.",
    example1Title: "PCAP output summary",
    example1Code: "flows=12,480 packets=1,248,002 protocols=tcp,dns,tls\nparse_check=pass(99.8%) zeek_conn_rows=188,220",
    example2Title: "Log sample",
    example2Code:
      '{"ts":"2026-02-07T03:21:44Z","service":"auth","event":"mfa_fail","user_id":"u_9121"}\n{"ts":"2026-02-07T03:21:47Z","service":"auth","event":"token_refresh","user_id":"u_9121"}',
    example3Title: "Time-series segment",
    example3Code: "t=00:31 speed=58.1 battery_temp=35.2 torque=122\nt=00:32 speed=57.9 battery_temp=35.4 torque=124",
    example4Title: "Tabular schema excerpt",
    example4Code: "transaction_id:string  amount:decimal(10,2)\nrisk_score:float  alert_label:int  geo_region:string",

    capabilitiesTitle: "Use Cases",
    capabilitiesBody: "Each use case maps to a business objective, deployment scenario, deliverable data mode, and measurable outcome.",
    useCaseGoalLabel: "Objective",
    useCaseScenarioLabel: "Scenario",
    useCaseModeLabel: "Data mode",
    useCaseMetricLabel: "Metric shift",
    case1Title: "Automotive: rare-event enhancement",
    case1Goal: "Fill critical long-tail scenarios faster to reduce model validation and release risk.",
    case1Scenario: "Pre-release safety regression for rainy-night sensor dropout and control anomalies.",
    case1Mode: "Combined generation of vehicle telemetry time-series, event logs, and protocol-level traffic traces.",
    case1Metric: "Typical pilot outcome: critical-scenario coverage improves by 20%-35%, and regression cycles drop by 30%+.",
    case2Title: "Cybersecurity: model adaptation",
    case2Goal: "Keep detection quality stable under evolving attacks while lowering labeling cost.",
    case2Scenario: "SOC drift handling on UGR'16 (Train: July -> Test: August) with only 1% labeling budget.",
    case2Mode: "Multi-flow network traffic and system logs with active sampling plus synthetic augmentation.",
    case2Metric: "Typical pilot outcome: alert quality improves by 10%-25%, while manual review effort drops by 20%-40%.",
    case3Title: "Systems: wide-area testing",
    case3Goal: "Accelerate cross-region integration tests and catch protocol or rule issues earlier.",
    case3Scenario: "Multi-site replay tests for detection engineering, attack replay, and rule acceptance.",
    case3Mode: "Raw PCAP generation with protocol field constraints and strict temporal-order checks.",
    case3Metric: "Typical pilot outcome: issue discovery moves 1-2 iterations earlier, and replay preparation time drops by 50%+.",
    case4Title: "Cloud and service providers: data retention",
    case4Goal: "Cut long-term storage and replay cost without sacrificing operational usability.",
    case4Scenario: "High-throughput operations traffic archiving, audit sampling, and on-demand replay.",
    case4Mode: "Deep generative compression (model-as-data-proxy) with on-demand reconstruction.",
    case4Metric: "Typical pilot outcome: retention cost drops by 40%-80%, and audit replay preparation time drops by 60%+.",
    case5Title: "Cross-industry: collaboration and sharing",
    case5Goal: "Enable joint validation and training without directly exchanging sensitive raw records.",
    case5Scenario: "Cross-team and ecosystem collaboration through executable scenario templates.",
    case5Mode: "Share scenario configs, constraint policies, and model versions instead of raw records.",
    case5Metric: "Typical pilot outcome: cross-team data collaboration cycle shortens by 30%-50%, with higher scenario reuse.",

    deploymentTitle: "Deployment and operations",
    deploymentBody: "Select the operating model that fits your security and procurement path.",
    deploy1Title: "Flexible deployment",
    deploy1Body: "Managed SaaS, customer VPC, or on-prem with isolated pipelines.",
    deploy2Title: "Reproducible replay",
    deploy2Body: "Deterministic seeds, pinned model versions, and dataset lineage IDs.",
    deploy3Title: "Security and audit controls",
    deploy3Body: "OIDC SSO, project-level RBAC, immutable audit logs, and retention policies.",
    deploy4Title: "Integration-ready exports",
    deploy4Body: "PCAP, CSV, JSONL, and Parquet for IDS, SIEM, ETL, and ML pipelines.",

    privacyTitle: "Privacy and compliance, defined clearly",
    privacyBody:
      "We define threat model, data boundaries, leakage tests, retention policy, and audit artifacts explicitly to reduce security review ambiguity.",
    privacyItem1:
      "Threat model covers record linkage, membership inference, and nearest-neighbor leakage; reports include attack success rate and overlap metrics against agreed policy thresholds.",
    privacyItem2:
      "Synthetic outputs are generated from model weights + scenario configs. Runtime generation does not query private source rows; optional customer calibration runs in isolated environments.",
    privacyItem3:
      "Each release includes an audit package: model/version ID, seed, scenario template hash, validator outputs, operator activity log, and retention/deletion receipts.",
    securityCard1Title: "Deployment options",
    securityCard1Body: "Managed SaaS, customer VPC (AWS/GCP/Azure), or on-prem Kubernetes clusters.",
    securityCard2Title: "Identity and key management",
    securityCard2Body: "SSO via OIDC/SAML, customer-managed keys (KMS/BYOK), and scoped service accounts.",
    securityCard3Title: "Operational observability",
    securityCard3Body: "Structured audit events, SIEM export hooks, and policy-driven data retention.",

    industriesTitle: "Built for high-compliance, revenue-critical scenarios",
    industriesBody:
      "Where real-world data is scarce, sensitive, or extremely expensive to collect.",
    industryAxisX: "Data sensitivity",
    industryAxisY: "Operational risk",
    industryPrimaryTag: "Scenario",
    industry1Title: "Cybersecurity and SOC",
    industry1Body: "Protocol-true PCAP and logs for detection engineering, threat replay, and QA.",
    industry1Scenario: "Scenario: Lateral movement replay with controlled rarity.",
    industry2Title: "Vehicle telemetry and ADAS",
    industry2Body: "Rare-event generation for fault injection, safety regression, and edge-condition replay.",
    industry2Scenario: "Scenario: Rainy-night sensor dropout with correlated CAN events.",
    industry3Title: "IoT and smart manufacturing",
    industry3Body: "Model equipment degradation and rare failures before they occur.",
    industry3Scenario: "Scenario: Motor overheating before failure.",
    industry4Title: "Cloud service providers",
    industry4Body: "Generate resilient operations scenarios while protecting tenant privacy.",
    industry4Scenario: "Scenario: Multi-tenant traffic surge and control-plane anomaly replay.",

    comparisonTitle: "Comparison",
    comparisonBody:
      "Beyond statistical feature fitting, Datalloy delivers protocol-level fidelity with complete raw records directly usable by standard tools.",
    comparisonHeadSynth: "Datalloy",
    comparisonHeadAnon: "Anonymized data",
    comparisonHeadEncrypted: "Encrypted data",
    comparisonHeadLlm: "General-purpose LLMs",
    comparisonRow1: "Raw data completeness",
    comparisonRow1Synth: "Complete records",
    comparisonRow1Anon: "Low",
    comparisonRow1Encrypted: "Partial",
    comparisonRow1Llm: "Partial",
    comparisonRow2: "Rare-event controllability",
    comparisonRow2Synth: "High",
    comparisonRow2Anon: "Low",
    comparisonRow2Encrypted: "Low",
    comparisonRow2Llm: "Medium",
    comparisonRow3: "Compliance risk",
    comparisonRow3Synth: "Low",
    comparisonRow3Anon: "Medium",
    comparisonRow3Encrypted: "Low",
    comparisonRow3Llm: "High",
    comparisonRow4: "Directly usable in standard tools",
    comparisonRow4Synth: "Yes",
    comparisonRow4Anon: "Yes",
    comparisonRow4Encrypted: "Partial",
    comparisonRow4Llm: "Partial",
    comparisonRow5: "Cost",
    comparisonRow5Synth: "Low",
    comparisonRow5Anon: "Medium",
    comparisonRow5Encrypted: "High",
    comparisonRow5Llm: "High",
    comparisonNote: "Assessment based on typical enterprise deployment scenarios.",

    chooseTitle: "Why teams choose Datalloy.ai",
    chooseBody:
      "We built a domain-specific raw-data generation system, not a generic synthesizer that only fits statistical features.",
    chooseCard1Title: "Modeling + protocol constraints",
    chooseCard1Body: "Directly encode schema, protocol, and system constraints into generation workflows.",
    chooseCard2Title: "Scalable synthesis",
    chooseCard2Body: "Generate large volumes of raw data while covering statistically rare edge events.",
    chooseCard3Title: "Co-validated with customers",
    chooseCard3Body: "Jointly evaluate real downstream impact with early partners.",

    timelineTitle: "SMB-friendly pilot playbook",
    timelineBody: "A practical sequence to move from idea to validated use case without heavy process overhead.",
    timeline1Title: "Scope one downstream KPI",
    timeline1Body: "Pick one task (classification, drift adaptation, replay testing, or retention) and define the target metric.",
    timeline1Metric: "Week 1 deliverable: KPI + data contract + deployment target",
    timeline2Title: "Run generation and validation",
    timeline2Body: "Generate synthetic data with the selected model family, then run protocol/schema/task validators.",
    timeline2Metric: "Week 2 deliverable: baseline vs augmented comparison report",
    timeline3Title: "Integrate and decide rollout",
    timeline3Body: "Connect outputs to IDS/SIEM/ML pipeline, verify uplift, then decide production or next iteration.",
    timeline3Metric: "Week 3 deliverable: go/no-go decision with acceptance checklist",

    teamTitle: "Team depth and execution plan",
    teamBody:
      "<a href='https://www.shinan.info' target='_blank' rel='noopener noreferrer'>Shinan Liu</a> is a tenure-track Assistant Professor and PhD advisor in the Department of Data and Systems Engineering at The University of Hong Kong, and leads the <a href='https://naisslab.github.io' target='_blank' rel='noopener noreferrer'>Networked AI Systems and Security (NAISS) Lab</a>.",
    founderName: "Shinan Liu",
    founderTitle: "Founder and CEO",
    founderBody:
      "PhD in Computer Science from the University of Chicago (advised by Nick Feamster). Focuses on multimodal operational-data modeling, cybersecurity, and generative systems engineering across tabular, time-series, system logs, and network traffic, with emphasis on protocol consistency, interpretable controls, and standard-tool integration. Recipient of new-star awards in ML and systems, CBI Fellowship, ACTION AI Fellowship, and Daniels Fellowship. Work covered by Forbes, The Wall Street Journal, and ACM TechNews.",
    teamFocusTitle: "Current staffing model",
    teamFocusBody:
      "No full-time company employees yet. The NAISS lab has 15 members, and 13 currently work on compliant synthetic-data generation projects.",
    teamProgressTitle: "Hiring plan",
    teamProgressBody:
      "Current allocation: 5 contributors at full-time intensity (PI + 1 postdoc + 2 PhD + 1 MS, ~40 hours/week each); remaining contributors support at >=10 hours/week. Planned next hires: operations/management and product engineers.",
    teamAdvisorsTitle: "Contributor profile",
    teamAdvisorsBody:
      "Contributor mix spans postdoc, PhD, MPhil, MS, and undergrad tracks from HIT, ZJU, THU, SYSU, UESTC, BU, USTC, UToronto, CMU, Tongji, HKU, and RUC.",
    teamAdvisorBoardTitle: "Senior advisory professors",
    teamAdvisorBoardBody:
      "Senior advisory support includes professors from University of Chicago, CMU, UCSB, and Tsinghua University, together with business advisors from Verizon, NetMicroscope, Conviva, and Alibaba.",
    teamJoinCta: "Join us",

    evidenceTitle: "Evidence and references",
    evidenceBody: "Verifiable links for publications and technical background.",
    evidenceLink1: "NAISS Lab homepage",
    evidenceLink2: "NetDiffusion (SIGMETRICS'24)",
    evidenceLink3: "NetSSM (CoNEXT'26)",
    evidenceLink4: "Generative Active Adaptation",
    evidenceLink5: "NetDiffusion GitHub",
    evidenceLink6: "NetSSM GitHub",

    contactTitle: "Start with your most critical data scenario.",
    contactBody:
      "Share your use case and we will follow up with a focused deployment and validation path for your team.",
    contactKicker: "Enterprise pilot intake",
    contactPilotTitle: "What the pilot includes",
    contactPilot1: "30-minute technical scoping call",
    contactPilot2: "Threat model and compliance checklist",
    contactPilot3: "Validation plan per modality (PCAP/logs/time-series/tabular)",
    contactPilot4: "Integration path for your SIEM/IDS/ML stack",
    contactSchedule: "Schedule a 30-minute intro call",
    contactButton: "Request demo",
    contactNote:
      "FormSubmit endpoint is enabled (GitHub Pages compatible). We respond within 48 hours with pilot scope, validation checklist, and next-step options.",
    contactStatusReady: "Form is ready. Submission metadata includes timestamp, language, and source page.",
    contactStatusSending: "Submitting request...",
    contactStatusSuccess: "Request submitted successfully. We will contact you within 48 hours.",
    contactStatusError: "Submission failed. Please retry or email shinan6@hku.hk directly.",
    contactName: "Name",
    contactEmail: "Work email",
    contactCompany: "Company",
    contactRole: "Role / team",
    contactMessage: "Tell us about your data needs",
    contactDataTypeDefault: "Primary data type",
    contactDataType1: "PCAP / network traffic",
    contactDataType2: "System logs / traces",
    contactDataType3: "Time-series telemetry",
    contactDataType4: "Tabular records",
    contactDataType5: "Other",
    contactDeployDefault: "Deployment preference",
    contactDeploy1: "Managed SaaS",
    contactDeploy2: "Customer VPC",
    contactDeploy3: "On-prem",
    contactDeploy4: "Other",
    contactTimelineDefault: "Target timeline",
    contactTimeline1: "0-1 month",
    contactTimeline2: "1-3 months",
    contactTimeline3: "3+ months",

    footerTag: "Protocol-compliant synthetic data infrastructure for operational systems",
    footerCity: "Hong Kong",
    footerContact: "shinan6@hku.hk"
  },

  zh: {
    brandName: "数据合金",
    footerBrand: "数据合金",
    navSolution: "平台",
    navIndustries: "行业",
    navUseCases: "用例",
    navCapabilities: "工作流",
    navValidation: "方案对比",
    navChoose: "为什么选我们",
    navSecurity: "安全",
    navTeam: "团队",
    navCta: "预约演示",
    floatingDemo: "演示",
    eyebrow: "AI驱动的高保真合成数据平台",
    heroTitle: "按需生成开箱即用的生产级数据",
    heroTitleHtml:
      "按需<span class='brand-accent'>生成</span>开箱即用的生产级<span class='brand-accent'>数据</span>",
    heroSubtitle:
      "数据合金（Datalloy.ai）使用生成式AI技术合成高保真、协议合规的原始运营数据，用于训练、测试与合规验证。我们不只拟合统计特征，而是输出可被标准工具直接使用的完整原始记录。",
    heroTarget: "面向高合规行业的机器学习、数据与安全团队。",
    heroPrimary: "申请私有试点",
    heroSecondary: "查看工作流",
    heroProof:
      "核心成果发表于USENIX Security、NSDI、SIGMETRICS、NDSS、CoNEXT、UbiComp等顶级学术会议，持续聚焦网络数据分析、安全隐私、机器学习系统。",
    heroProofLink1: "NAISS 实验室主页",
    heroProofLink2: "Google Scholar",
    heroProofLink3: "NetDiffusion（SIGMETRICS'24）",
    heroProofLink4: "NetSSM（CoNEXT'26）",
    panelTitle: "Datalloy Core Engine",
    panelBody: "统一生成表格、时序、系统日志与网络流量等完整原始数据，支持可复现控制与稀有事件生成。",
    panelMetricValue1: "协议级保真",
    panelMetric1: "工具链即插即用",
    panelMetricValue2: "可复现",
    panelMetric2: "种子与版本锁定",
    panelMetricValue3: "稀有事件可控",
    panelMetric3: "场景级精确控制",

    validationTitle: "一套平台覆盖多类运营数据",
    validationBody: "在统一流程下生成协议合规的 PCAP、日志、时序和表格原始数据。",
    validationCard1Title: "网络流量（PCAP）",
    validationCard1Body: "包级生成，具备协议结构控制和生成后校验。",
    validationCard1Metric: "输出：PCAP，可直接用于 Wireshark/Scapy/TCPReplay",
    validationCard2Title: "系统日志与追踪",
    validationCard2Body: "结构化与半结构化日志，支持模式约束和事件顺序控制。",
    validationCard2Metric: "输出：JSONL / 类 Syslog 记录与验证报告",
    validationCard3Title: "时序遥测数据",
    validationCard3Body: "多传感器、多流序列生成，支持长程依赖控制。",
    validationCard3Metric: "输出：CSV / Parquet，用于监控与 ML 流程",
    validationCard4Title: "表格记录",
    validationCard4Body: "面向风险、预测与合规场景的高覆盖合成记录。",
    validationCard4Metric: "输出：模式受约束的表格，支持字段级可控生成",
    validationCard5Title: "NetDiffusion 包级规模细节",
    validationCard5Body: "公开技术报道指出其支持包级生成，单条流最大长度为 1,024 个包，并使用 17 字节包特征向量。",
    validationCard5Metric: "参考：NetDiffusion 论文与芝加哥大学研究新闻",
    validationNote: "核心生成栈由 Diffusion 与 SSM 家族组成，并叠加任务自适应与验证层。",

    solutionTitle: "打破数据瓶颈，加速模型落地。",
    solutionBody:
      "关键行业的数据往往最稀缺、最敏感。数据合金按需生成协议合规的完整原始数据，而非只合成统计特征，让验证、加固与上线速度领先竞争对手。",
    value1: "覆盖表格、时序、系统日志、网络流量的完整原始数据。",
    value2: "协议合规输出，可直接接入IDS、SIEM、ETL与ML工具链。",
    value3: "按需控制属性，批量生成统计稀有的边缘案例。",
    pillar1Title: "打破数据孤岛",
    pillar1Body: "在不泄露敏感信息的情况下实现跨团队协作训练。",
    pillar2Title: "生成稀有事件",
    pillar2Body: "按需生成边缘案例，提升关键模型的鲁棒性。",
    pillar3Title: "降低数据成本",
    pillar3Body: "存储轻量模型，随时回放历史场景。",

    howTitle: "工作流",
    howBody: "模型是可选对象。在第 2 步按任务选择模型家族，然后统一执行约束、验证与部署流程。",
    flow1Title: "1. 数据定义",
    flow1Body: "定义数据模态、模式、规模、时间范围和目标导出格式。",
    flow2Title: "2. 模型选择",
    flow2Body: "按任务选择 model_family：diffusion | ssm | adapt | compress。",
    flow3Title: "3. 条件约束",
    flow3Body: "配置协议规则、字段约束、相关结构、稀有事件比例与边界条件。",
    flow4Title: "4. 数据验证",
    flow4Body: "执行协议、模式、统计与下游任务验证，并生成验证报告。",
    flow5Title: "5. 多方部署",
    flow5Body: "按需交付到 SaaS、客户 VPC 或本地部署，并接入 IDS、SIEM、ETL 与 ML 工具链。",
    apiTitle: "可执行工作流接口",
    apiBody: "Python 最小可执行示例。",
    apiCode0: "import datalloy  # SDK 引入",
    apiCode1: 'spec = datalloy.define(modality="pcap", schema=pcap_schema, volume=1_000_000)  # 数据定义',
    apiCode2: 'job = datalloy.generate(spec=spec, model_family="ssm", constraints=policy)  # 生成',
    apiCode3: 'report = datalloy.validate(job.id, checks=["protocol", "schema", "task"])  # 验证',
    apiCode4: 'artifact = datalloy.export(job.id, format="pcap")  # 导出',
    apiCode5: 'datalloy.deploy(artifact, target="vpc", tools=["ids", "siem", "ml"])  # 部署',
    apiItem1: "定义：模态、模式、规模、时间范围和导出格式。",
    apiItem2: "选择：model_family=diffusion|ssm|adapt|compress。",
    apiItem3: "约束：协议规则、字段约束、稀有事件目标和相关关系。",
    apiItem4: "验证：协议/模式/统计/下游任务校验并输出报告。",
    apiItem5: "部署：SaaS | VPC | 本地，并导出 pcap|jsonl|csv|parquet。",
    example1Title: "PCAP 输出摘要",
    example1Code: "flows=12,480 packets=1,248,002 protocols=tcp,dns,tls\nparse_check=pass(99.8%) zeek_conn_rows=188,220",
    example2Title: "日志样例",
    example2Code:
      '{"ts":"2026-02-07T03:21:44Z","service":"auth","event":"mfa_fail","user_id":"u_9121"}\n{"ts":"2026-02-07T03:21:47Z","service":"auth","event":"token_refresh","user_id":"u_9121"}',
    example3Title: "时序片段",
    example3Code: "t=00:31 speed=58.1 battery_temp=35.2 torque=122\nt=00:32 speed=57.9 battery_temp=35.4 torque=124",
    example4Title: "表格模式片段",
    example4Code: "transaction_id:string  amount:decimal(10,2)\nrisk_score:float  alert_label:int  geo_region:string",

    capabilitiesTitle: "用例",
    capabilitiesBody: "每个用例对应业务目标、落地场景、可交付数据模式与可量化结果，点击展开查看。",
    useCaseGoalLabel: "用例目的",
    useCaseScenarioLabel: "场景",
    useCaseModeLabel: "数据模式",
    useCaseMetricLabel: "指标变化",
    case1Title: "车企场景：稀有事件增强",
    case1Goal: "在真实事故样本稀缺时，快速补齐关键长尾数据，缩短模型上线周期。",
    case1Scenario: "面向发布前安全回归，例如雨夜传感器失效与控制异常工况。",
    case1Mode: "车载时序遥测、事件日志与协议级网络流量的组合生成。",
    case1Metric: "试点常见结果：关键场景覆盖率提升 20%-35%，回归轮次减少 30%+。",
    case2Title: "网络安全场景：模型自适应",
    case2Goal: "在攻击手法变化时维持检测效果，减少频繁重标注成本。",
    case2Scenario: "SOC 漂移治理（UGR'16：Train July -> Test August），仅需 1% 标注预算。",
    case2Mode: "多流网络流量 + 系统日志，结合主动采样和合成增强。",
    case2Metric: "试点常见结果：告警质量提升 10%-25%，人工复核工时下降 20%-40%。",
    case3Title: "系统场景：广域测试",
    case3Goal: "加快跨区域联调测试，提前发现协议和规则问题。",
    case3Scenario: "多站点回放测试、检测规则验收与发布前压测。",
    case3Mode: "PCAP 原始流生成，附协议字段约束与时序校验。",
    case3Metric: "试点常见结果：问题发现前移 1-2 个迭代周期，回放准备时间下降 50%+。",
    case4Title: "云商与服务商场景：数据留存",
    case4Goal: "在保留可回放能力的同时显著降低长期存储成本。",
    case4Scenario: "高吞吐运维流量的长期归档、审计抽检和按需追溯。",
    case4Mode: "生成式压缩（模型即数据代理）+ 按需重建。",
    case4Metric: "试点常见结果：留存成本下降 40%-80%，审计回放准备时间下降 60%+。",
    case5Title: "跨行业场景：协同与数据分享",
    case5Goal: "在不直接交换敏感原始数据前提下推进联合验证与联合建模。",
    case5Scenario: "企业多团队与上下游合作方通过可执行场景模板协同。",
    case5Mode: "共享场景配置、约束策略和模型版本，不共享原始记录。",
    case5Metric: "试点常见结果：跨团队数据协作周期缩短 30%-50%，场景复用率显著提升。",

    deploymentTitle: "部署与运维能力",
    deploymentBody: "根据安全和采购路径选择最合适的交付模式。",
    deploy1Title: "灵活部署",
    deploy1Body: "支持托管 SaaS、客户 VPC、本地部署，流程隔离。",
    deploy2Title: "可复现回放",
    deploy2Body: "支持确定性种子、模型版本锁定与数据集血缘 ID。",
    deploy3Title: "安全与审计控制",
    deploy3Body: "支持 OIDC SSO、项目级 RBAC、不可篡改审计日志与保留策略。",
    deploy4Title: "集成就绪导出",
    deploy4Body: "支持 PCAP、CSV、JSONL、Parquet，接入 IDS、SIEM、ETL 与 ML 流程。",

    privacyTitle: "隐私与合规，给出明确定义",
    privacyBody: "明确威胁模型、数据边界、泄露测试、保留策略与审计产物，降低安全审查不确定性。",
    privacyItem1: "威胁模型覆盖记录关联、成员推断与最近邻泄露；报告包含攻击成功率与重叠度，并对照双方约定阈值。",
    privacyItem2: "合成输出由模型权重与场景配置生成，运行时不直接查询私有原始记录；客户校准可在隔离环境执行。",
    privacyItem3: "每次交付包含审计包：模型/版本 ID、种子、场景模板哈希、验证输出、操作日志与保留/删除凭据。",
    securityCard1Title: "部署选项",
    securityCard1Body: "支持托管 SaaS、客户 VPC（AWS/GCP/Azure）与本地 Kubernetes。",
    securityCard2Title: "身份与密钥管理",
    securityCard2Body: "支持 OIDC/SAML 单点登录、客户托管密钥（KMS/BYOK）与权限隔离账号。",
    securityCard3Title: "运行可观测性",
    securityCard3Body: "提供结构化审计事件、SIEM 导出接口与策略化数据保留。",

    industriesTitle: "面向高合规、营收关键行业",
    industriesBody: "真实数据稀缺、敏感或获取成本极高的场景。",
    industryAxisX: "数据敏感度",
    industryAxisY: "业务风险",
    industryPrimaryTag: "场景",
    industry1Title: "网络安全与 SOC",
    industry1Body: "协议级 PCAP 与日志生成，用于检测工程、攻击回放与规则验证。",
    industry1Scenario: "场景：可控稀有度的横向移动攻击回放。",
    industry2Title: "车载遥测与 ADAS",
    industry2Body: "面向故障注入、安全回归与边缘工况回放的稀有事件生成。",
    industry2Scenario: "场景：雨夜传感器失效并伴随 CAN 关联异常。",
    industry3Title: "物联网与智能制造",
    industry3Body: "提前建模设备衰退与罕见故障。",
    industry3Scenario: "场景：电机过热至故障前兆。",
    industry4Title: "云服务商",
    industry4Body: "在租户隐私保护前提下生成高韧性运维场景。",
    industry4Scenario: "场景：多租户流量突增与控制平面异常回放。",

    comparisonTitle: "方案对比",
    comparisonBody: "不止统计特征拟合，而是协议级保真、标准工具可直用的完整原始数据。",
    comparisonHeadSynth: "数据合金",
    comparisonHeadAnon: "脱敏数据",
    comparisonHeadEncrypted: "加密数据",
    comparisonHeadLlm: "通用大模型（LLM）",
    comparisonRow1: "原始数据完整性",
    comparisonRow1Synth: "完整记录",
    comparisonRow1Anon: "低",
    comparisonRow1Encrypted: "部分",
    comparisonRow1Llm: "部分",
    comparisonRow2: "稀有事件可控性",
    comparisonRow2Synth: "高",
    comparisonRow2Anon: "低",
    comparisonRow2Encrypted: "低",
    comparisonRow2Llm: "中",
    comparisonRow3: "合规风险",
    comparisonRow3Synth: "低",
    comparisonRow3Anon: "中",
    comparisonRow3Encrypted: "低",
    comparisonRow3Llm: "高",
    comparisonRow4: "标准工具直接可用",
    comparisonRow4Synth: "是",
    comparisonRow4Anon: "是",
    comparisonRow4Encrypted: "部分",
    comparisonRow4Llm: "部分",
    comparisonRow5: "成本",
    comparisonRow5Synth: "低",
    comparisonRow5Anon: "中",
    comparisonRow5Encrypted: "高",
    comparisonRow5Llm: "高",
    comparisonNote: "评估基于典型企业部署场景。",

    chooseTitle: "为什么团队选择Datalloy.ai",
    chooseBody: "我们构建的是领域专用的原始数据生成系统，而非只做特征拟合的通用造数工具。",
    chooseCard1Title: "建模模式与协议约束",
    chooseCard1Body: "将模式、协议与系统约束直接融入生成流程。",
    chooseCard2Title: "规模化合成",
    chooseCard2Body: "高效生成海量原始数据并覆盖统计稀有边缘事件。",
    chooseCard3Title: "客户共创验证",
    chooseCard3Body: "与早期伙伴联合评测真实效果。",

    timelineTitle: "中小团队友好的试点路径",
    timelineBody: "从想法到验证用例的轻量流程，避免过重流程负担。",
    timeline1Title: "先定一个下游 KPI",
    timeline1Body: "先选一个任务（分类、漂移适配、回放测试或留存）并定义目标指标。",
    timeline1Metric: "第 1 周交付：KPI + 数据约定 + 部署目标",
    timeline2Title: "执行生成与验证",
    timeline2Body: "按模型家族生成数据，并运行协议/模式/任务验证器。",
    timeline2Metric: "第 2 周交付：基线对比与增强效果报告",
    timeline3Title: "集成后做上线决策",
    timeline3Body: "接入 IDS/SIEM/ML 流程，验证提升后决定上线或迭代。",
    timeline3Metric: "第 3 周交付：带验收清单的 go/no-go 决策",

    teamTitle: "团队深度与执行路径",
    teamBody:
      "<a href='https://www.shinan.info' target='_blank' rel='noopener noreferrer'>刘诗楠</a>现任香港大学数据与系统工程系长聘轨助理教授、博士生导师，领导<a href='https://naisslab.github.io' target='_blank' rel='noopener noreferrer'>网络智能系统与安全（NAISS）实验室</a>。",
    founderName: "刘诗楠",
    founderTitle: "创始人兼 CEO",
    founderBody:
      "芝加哥大学计算机科学博士（师从 Nick Feamster），聚焦多模态运营数据建模、网络安全与生成系统工程化，覆盖表格、时序、系统日志与网络流量，强调协议一致性、可解释控制与标准工具可集成。获机器学习与系统领域新星奖、CBI奖学金、ACTION人工智能奖学金、Daniels奖学金，研究成果被福布斯、华尔街日报与 ACM TechNews 报道。",
    teamFocusTitle: "当前用人模式",
    teamFocusBody: "目前暂无全职公司员工。NAISS 实验室共 15 人，其中 13 人正在做合规合成数据相关项目。",
    teamProgressTitle: "招聘计划",
    teamProgressBody: "当前投入：5 人按全职强度（PI + 1 位博后 + 2 位博士 + 1 位硕士，每周约 40 小时）；其余成员每周至少 10 小时。下一阶段计划补充全职运营/管理与产品工程岗位。",
    teamAdvisorsTitle: "贡献者结构",
    teamAdvisorsBody:
      "贡献者覆盖博后、博士、MPhil、硕士与本科层级，来源于 HIT、ZJU、THU、SYSU、UESTC、BU、USTC、多伦多大学、CMU、同济、HKU、RUC。",
    teamAdvisorBoardTitle: "顾问团队",
    teamAdvisorBoardBody: "顾问团队包括来自芝加哥大学、CMU、UCSB、清华大学的资深教授，以及来自 Verizon、NetMicroscope、Conviva、Alibaba 的商业顾问。",
    teamJoinCta: "加入我们",

    evidenceTitle: "证据与参考链接",
    evidenceBody: "一键验证的论文与技术资料。",
    evidenceLink1: "NAISS 实验室主页",
    evidenceLink2: "NetDiffusion（SIGMETRICS'24）",
    evidenceLink3: "NetSSM（CoNEXT'26）",
    evidenceLink4: "Generative Active Adaptation",
    evidenceLink5: "NetDiffusion GitHub",
    evidenceLink6: "NetSSM GitHub",

    contactTitle: "从你最关键的数据场景开始。",
    contactBody: "提交需求后，我们会给出面向你团队的部署与验证落地路径。",
    contactKicker: "企业试点咨询",
    contactPilotTitle: "试点包含内容",
    contactPilot1: "30 分钟技术范围沟通",
    contactPilot2: "威胁模型与合规检查清单",
    contactPilot3: "按模态定义验证计划（PCAP/日志/时序/表格）",
    contactPilot4: "对接 SIEM/IDS/ML 工具链的集成路径",
    contactSchedule: "预约 30 分钟介绍电话",
    contactButton: "预约演示",
    contactNote:
      "已启用 FormSubmit 表单端点（兼容 GitHub Pages）。我们将在 48 小时内回复试点范围、验证清单与下一步选项。",
    contactStatusReady: "表单已就绪。提交元数据包含时间戳、语言和来源页面。",
    contactStatusSending: "正在提交请求...",
    contactStatusSuccess: "请求提交成功。我们将在 48 小时内联系你。",
    contactStatusError: "提交失败，请重试或直接发送邮件至 shinan6@hku.hk。",
    contactName: "姓名",
    contactEmail: "工作邮箱",
    contactCompany: "公司",
    contactRole: "岗位 / 团队",
    contactMessage: "请描述你的数据需求",
    contactDataTypeDefault: "主要数据类型",
    contactDataType1: "PCAP / 网络流量",
    contactDataType2: "系统日志 / Trace",
    contactDataType3: "时序遥测",
    contactDataType4: "表格记录",
    contactDataType5: "其他",
    contactDeployDefault: "部署偏好",
    contactDeploy1: "托管 SaaS",
    contactDeploy2: "客户 VPC",
    contactDeploy3: "本地部署",
    contactDeploy4: "其他",
    contactTimelineDefault: "目标时间",
    contactTimeline1: "0-1 个月",
    contactTimeline2: "1-3 个月",
    contactTimeline3: "3 个月以上",

    footerTag: "面向运营系统的协议合规合成数据基础设施",
    footerCity: "中国香港",
    footerContact: "shinan6@hku.hk"
  }
};

const langButtons = document.querySelectorAll(".lang-btn");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const i18nHtmlNodes = document.querySelectorAll("[data-i18n-html]");
const i18nPlaceholders = document.querySelectorAll("[data-i18n-placeholder]");
const nav = document.querySelector(".nav");
const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");
const sourceField = document.getElementById("source-page");
const submittedAtField = document.getElementById("submitted-at");
const formLangField = document.getElementById("form-lang");
const formNextField = document.getElementById("form-next");
const utmSourceField = document.getElementById("utm-source");
const utmMediumField = document.getElementById("utm-medium");
const utmCampaignField = document.getElementById("utm-campaign");
const referrerField = document.getElementById("referrer");
const mobileNavMedia = window.matchMedia("(max-width: 960px)");

let currentLang = "zh";

function t(key) {
  return dictionary[currentLang]?.[key] ?? dictionary.en[key] ?? key;
}

function setLanguage(lang) {
  const strings = dictionary[lang];
  if (!strings) return;

  currentLang = lang;

  i18nNodes.forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (Object.prototype.hasOwnProperty.call(strings, key)) {
      node.textContent = strings[key];
    }
  });

  i18nHtmlNodes.forEach((node) => {
    const key = node.getAttribute("data-i18n-html");
    if (Object.prototype.hasOwnProperty.call(strings, key)) {
      node.innerHTML = strings[key];
    }
  });

  i18nPlaceholders.forEach((node) => {
    const key = node.getAttribute("data-i18n-placeholder");
    if (Object.prototype.hasOwnProperty.call(strings, key)) {
      node.setAttribute("placeholder", strings[key]);
    }
  });

  if (formLangField) {
    formLangField.value = currentLang;
  }

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";

  if (formNextField) {
    formNextField.value = buildThankYouUrl(currentLang);
  }
}

function buildThankYouUrl(lang) {
  const url = new URL("thank-you.html", window.location.href);
  url.searchParams.set("lang", lang);
  return url.toString();
}

function stampFormMetadata() {
  const params = new URLSearchParams(window.location.search);
  if (sourceField) sourceField.value = window.location.href;
  if (submittedAtField) submittedAtField.value = new Date().toISOString();
  if (formLangField) formLangField.value = currentLang;
  if (formNextField) formNextField.value = buildThankYouUrl(currentLang);
  if (utmSourceField) utmSourceField.value = params.get("utm_source") || "";
  if (utmMediumField) utmMediumField.value = params.get("utm_medium") || "";
  if (utmCampaignField) utmCampaignField.value = params.get("utm_campaign") || "";
  if (referrerField) referrerField.value = document.referrer || "";
}

function updateCompactNav() {
  const shouldCompact = mobileNavMedia.matches && window.scrollY > 28;
  if (nav) {
    nav.classList.toggle("compact", shouldCompact);
  }
  document.body.classList.toggle("show-mobile-demo", shouldCompact);
}

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    stampFormMetadata();

    if (formStatus) {
      formStatus.textContent = t("contactStatusSending");
      formStatus.dataset.state = "sending";
    }

    const submitButton = contactForm.querySelector("button[type='submit']");
    if (submitButton) submitButton.disabled = true;

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`submission_failed_${response.status}`);
      }

      contactForm.reset();
      stampFormMetadata();

      if (formStatus) {
        formStatus.textContent = t("contactStatusSuccess");
        formStatus.dataset.state = "success";
      }

      window.setTimeout(() => {
        window.location.href = buildThankYouUrl(currentLang);
      }, 220);
    } catch (error) {
      if (formStatus) {
        formStatus.textContent = t("contactStatusError");
        formStatus.dataset.state = "error";
      }
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

window.addEventListener("scroll", updateCompactNav, { passive: true });
window.addEventListener("resize", updateCompactNav);

if (typeof mobileNavMedia.addEventListener === "function") {
  mobileNavMedia.addEventListener("change", updateCompactNav);
} else if (typeof mobileNavMedia.addListener === "function") {
  mobileNavMedia.addListener(updateCompactNav);
}

setLanguage("zh");
updateCompactNav();
