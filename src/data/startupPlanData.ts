import { 
  ExecutiveRoleProfile, 
  RaciEntry, 
  HeadcountRole, 
  ProductPortfolioItem, 
  ComplianceFramework, 
  ActionItem,
  HealthCareRevenueModel
} from '../types';

export const FUNDING_METRICS = {
  roundName: "$10M Seed / Scale Round",
  preMoneyValuation: 40000000,
  postMoneyValuation: 50000000,
  dilutionPercent: 20,
  targetRunwayMonths: 27,
  profitabilityCrossoverMonth: "December 2027 (Month 14)",
  targetARRByDec2028: 25890000,
  startingHeadcount: 2,
  targetHeadcount: 55,
  allocation: {
    marketing: { percent: 60, amount: 6000000, label: "Marketing & Acquisition (Global Paid & Demand Gen)" },
    team: { percent: 20, amount: 2000000, label: "Team Build (Expand 2 to 55 people)" },
    infrastructure: { percent: 9, amount: 900000, label: "Infrastructure (AWS Multi-Region & API Connector Layer)" },
    compliance: { percent: 6, amount: 600000, label: "Compliance & Audits (SOC 2, StateRAMP, HIPAA, ISO)" },
    reserves: { percent: 5, amount: 500000, label: "Contingency Reserves & Working Capital" }
  },
  financialStrategy: {
    equityFocus: "Pure Distribution & Top-Line Growth Fuel (Apple/Google Ads, Demand Gen)",
    opexStrategy: "Contract Factoring & ARR-Backed Venture Debt against UN & US Gov pipelines to protect equity",
    healthCarePolicy: "60% of Employee Health Care Premiums Covered Directly from Live SaaS Application Subscription Inflows"
  }
};

export const HEALTHCARE_REVENUE_CONFIG: HealthCareRevenueModel = {
  coverageTargetPercent: 60,
  averagePremiumPerEmployeeMonth: 780,
  dependentMultiplier: 1.25,
  subscriptionTiers: [
    {
      name: "IAI Survival Guide",
      product: "Career Changers & IAM Learners",
      monthlyPrice: 4,
      activeSubscribers: 3500,
      projectedSubscribersMonth6: 18000,
      projectedSubscribersMonth14: 65000,
      allocatedToHealthBenefitsPercent: 100
    },
    {
      name: "IAI Business Manager",
      product: "Solo Consultants & Boutiques (Sept 2026)",
      monthlyPrice: 32,
      activeSubscribers: 120,
      projectedSubscribersMonth6: 850,
      projectedSubscribersMonth14: 3400,
      allocatedToHealthBenefitsPercent: 50
    },
    {
      name: "DineKey Medical Credentials",
      product: "Allergy Patients & Dining Groups",
      monthlyPrice: 28,
      activeSubscribers: 450,
      projectedSubscribersMonth6: 2200,
      projectedSubscribersMonth14: 8500,
      allocatedToHealthBenefitsPercent: 40
    },
    {
      name: "Command Suites (VDMS / HMDS / UDMS / RDMS)",
      product: "Agency & NGO Tier ($3,526/yr)",
      monthlyPrice: 294,
      activeSubscribers: 14,
      projectedSubscribersMonth6: 85,
      projectedSubscribersMonth14: 340,
      allocatedToHealthBenefitsPercent: 25
    }
  ]
};

export const EXECUTIVE_ROLES: Record<string, ExecutiveRoleProfile> = {
  CEO: {
    id: "CEO",
    title: "Chief Executive Officer",
    currentStatus: "Occupied",
    tagline: "Vision, Capital Allocation, Investor Relations & Institutional Authority",
    primaryMandate: "Lead overall company vision, steer $10M capital deployment, command high-level UN/Federal executive relationships, and ensure company hits the Dec 2027 profitability crossover.",
    budgetOwnership: "Total Capital Allocation ($10M) & Equity Pool Governance",
    keyResponsibilities: [
      "Investor Relations & Board Management: Quarterly board decks, investor updates, cap table health, and Series A prep on founders' terms.",
      "High-Level Institutional Alliances: Executive diplomacy with UN Under-Secretariats, U.S. Federal Cabinet departments, and state governors.",
      "Executive Team Leadership: Recruit and directly manage COO, CDO, CTO, and CMO; align cross-functional OKRs.",
      "Corporate Narrative & Brand Gravitas: Serve as the primary public voice for Identity AI, tokenization ethics, and humanitarian identity protection.",
      "Financial Strategy Alignment: Oversee equity defense, venture debt structuring, and factoring mechanics."
    ],
    first90DaysGoals: [
      "Finalize $10M wire closings, 409A valuation update, and board establishment (2 founders + 1 lead investor).",
      "Lead recruitment and closing for CDO, CTO, and CMO with 10-15% unallocated ESOP allocation.",
      "Keynote or sponsor first major humanitarian identity summit to initiate dual-funnel catalyst.",
      "Establish weekly executive operating rhythm and monthly board reporting template."
    ],
    kpis: [
      "Series A Readiness / Runway Buffer (>24 months maintained)",
      "Executive Hiring Timelines (<45 days to fill C-Suite)",
      "High-Level Strategic Partnership Approvals (UN/Federal MOUs)",
      "Valuation Multiple & Equity Preservation (>80% founder retention pre-Series A)"
    ],
    weeklyCadence: "Monday Executive Sync (90m), Bi-weekly 1:1s with C-Suite, Monthly Investor Brief, Quarterly Board Meeting",
    dependenciesOnOthers: [
      { role: "COO", interaction: "Relies on COO for seamless back-office execution, financial audits, and payroll/benefits stability." },
      { role: "CDO", interaction: "Co-pitches multi-million dollar UN/Federal institutional contracts and policy alignments." },
      { role: "CTO", interaction: "Reviews technical roadmap feasibility, security moat certifications, and infrastructure spend." },
      { role: "CMO", interaction: "Ensures public brand narrative matches the $0.18 CAC funnel and high-level enterprise positioning." }
    ]
  },
  COO: {
    id: "COO",
    title: "Chief Operating Officer",
    currentStatus: "Occupied",
    tagline: "Operational Engine, Scaled Infrastructure, People, Payroll, Benefits & Contract Factoring",
    primaryMandate: "Architect and execute scalable back-office operations: multi-state payroll, benefits (including 60% healthcare revenue matching), corporate governance, legal risk mitigation, HR/people ops, and OPEX factoring cash flow.",
    budgetOwnership: "OPEX, Payroll ($2.0M allocated), Benefits, HR, Facilities, and Operational Vendors",
    keyResponsibilities: [
      "Payroll & PEO/HR Architecture: Deploy multi-state payroll (Rippling/Deel), automated tax filings, contractor management, and global PEO/EOR capabilities.",
      "Comprehensive Benefits & 60% Healthcare Coverage: Implement 60% health/dental/vision employer subsidy funded directly via app subscription cash flows, Safe Harbor 401(k), and Carta equity pool.",
      "Financial Operations & Factoring Engine: Manage commercial banking (Mercury/Brex), 409A valuations, accounts payable/receivable, and invoice factoring against government purchase orders.",
      "Corporate & Legal Compliance: Oversee Delaware C-Corp governance, IP assignment agreements, D&O/Cyber/Tech E&O insurance, and procurement compliance.",
      "Hiring & People Scaling Operations: Drive onboarding, HR policies, performance reviews, and scaled office/remote tooling for 2→55 team expansion."
    ],
    first90DaysGoals: [
      "Migrate to unified HRIS/PEO (Rippling or Deel) with 50-state compliance, auto-tax withholdings, and international contractor support.",
      "Roll out 60% employer-covered health package backed by subscription revenue escrow account.",
      "Secure $5M D&O insurance and $5M Cyber Liability insurance required for UN/Gov vendor SLAs.",
      "Establish venture debt/contract factoring facility with silicon bank or specialty fintech (e.g., Pipe/Capchase) to fund OPEX off SaaS ARR."
    ],
    kpis: [
      "Onboarding Velocity (<5 days from offer signed to fully equipped employee)",
      "Payroll & Tax Compliance (100% zero-penalty multi-state compliance)",
      "Healthcare Subscription Coverage Ratio (Live App MRR covering ≥ 120% of 60% employer benefit obligations)",
      "OPEX Cash Flow Optimization (Factoring margin < 3.5%, runway extension +6 months)"
    ],
    weeklyCadence: "Daily Standup with Operations & Talent, Weekly Financial Review with CFO/Controller, Bi-weekly C-Suite Sync",
    dependenciesOnOthers: [
      { role: "CEO", interaction: "Translates strategic vision into operational budgets and executes board-approved equity grants." },
      { role: "CDO", interaction: "Provides rapid vendor contract review, insurance COIs, and procurement onboarding for UN/Gov deals." },
      { role: "CTO", interaction: "Coordinates SOC 2 compliance vendor contracts, IT hardware procurement, and security training platforms." },
      { role: "CMO", interaction: "Monitors app subscription MRR inflows dedicated to funding employee healthcare subsidies." }
    ]
  },
  CDO: {
    id: "CDO",
    title: "Chief Development Officer",
    currentStatus: "Priority Hire (Month 1-2)",
    tagline: "Public Sector Pipeline, UN Procurement, NGO Alliances & Grant Multipliers",
    primaryMandate: "Monetize the Pre-Cleared Vendor status across 30 UN Agencies, U.S. Federal/State buyers, and humanitarian NGOs to drive enterprise multi-year contracts ($3,526/yr licenses to 7-figure agency deployments).",
    budgetOwnership: "Public Sector Business Development, Agency Sponsorships ($400k), Grant Operations",
    keyResponsibilities: [
      "UN & Federal Pipeline Monetization: Convert 30 UN Agency and US Gov approved vendor status into active paid pilots and multi-year agency contracts.",
      "Impact Sponsorship Multiplier: Execute the dual-funnel strategy by sponsoring major humanitarian, civic, and identity events to turn NGO directors into $3,526/yr champions.",
      "POC Acquisition Bypass Hack: Coordinate with technical teams to deploy instant zero-PII synthetic data pilots (UNICEF UNITE model) avoiding multi-year procurement delays.",
      "State & Local Government Expansion: Target veteran (VDMS), displaced (HMDS), and refugee (RDMS) state casework agencies.",
      "Grant & Public Innovation Funding: Secure non-dilutive SBIR, DARPA, and international development grants."
    ],
    first90DaysGoals: [
      "Build pipeline of 40+ qualified institutional prospects across UN Agencies (UNHCR, UNICEF, IOM) and State Veteran/Human Services departments.",
      "Structure 5 instant synthetic-data pilots that require zero security audit delays.",
      "Establish pricing architecture for agency tiers ($3,526/yr base command suite up to $250k enterprise county license).",
      "Hire 2 Federal Sales Directors and 1 UN/NGO Procurement Specialist."
    ],
    kpis: [
      "Qualified Institutional Pipeline Volume ($15M+ pipeline by M6)",
      "Contract Velocity (Time to close Gov/UN deals reduced from 18 months to 45 days via synthetic POC hack)",
      "Average Contract Value (ACV > $45,000/yr)",
      "Public Sector Annual Recurring Revenue ($5.2M by Dec 2027)"
    ],
    weeklyCadence: "Weekly Pipeline Review, Bi-weekly Gov Procurement Sync, Monthly Event Sponsorship Strategy",
    dependenciesOnOthers: [
      { role: "CEO", interaction: "Leverages CEO for executive closes and ministerial-level delegations." },
      { role: "COO", interaction: "Works with COO on FAR compliance, SAM.gov filings, and contract factoring against booked POs." },
      { role: "CTO", interaction: "Requires CTO to deliver customized synthetic data demos and API connector scopes for government RFPs." },
      { role: "CMO", interaction: "Aligns event sponsorships with digital campaigns targeting humanitarian practitioners." }
    ],
    jobSpecSummary: {
      idealBackground: "Former Senior VP of Public Sector / GovTech Sales (Palantir, Tyler Technologies, Salesforce Public Sector, or UN Procurement Director) with 10+ years selling to Federal/State/UN buyers.",
      targetComp: "$220,000 - $260,000 Base + Performance OTE ($450,000)",
      equityRange: "1.5% - 2.5% Equity Grant (4-year vesting, 1-year cliff)",
      interviewScorecard: [
        "Track record of closing $1M+ government or multilateral agency contracts",
        "Deep familiarity with FAR, FedRAMP, StateRAMP, UNGM procurement rules",
        "Understanding of tokenization, zero-PII architectures, and civil liberties protection",
        "Proven ability to recruit and lead a 10+ person GovTech BD team"
      ]
    }
  },
  CTO: {
    id: "CTO",
    title: "Chief Technology Officer",
    currentStatus: "Priority Hire (Month 1-2)",
    tagline: "VouchKey Tokenization Hub, AWS Multi-Region, Zero-PII Security & API Connector Layer",
    primaryMandate: "Scale engineering from prototype to enterprise-grade infrastructure: lead VouchKey hub, AWS multi-region deployments, Zero raw SSN tokenization, API connector integrations, and SOC 2 / StateRAMP / HIPAA engineering audits.",
    budgetOwnership: "Cloud Infrastructure ($900k AWS budget), Security Audits ($600k compliance budget), Engineering Salaries",
    keyResponsibilities: [
      "VouchKey Cryptographic Tokenization Hub: Maintain zero-raw-SSN storage, per-organization cryptographic keys, need-to-know access control, and VAWA-safe sealing.",
      "API Connector Layer Engineering: Build secure REST/GraphQL connectors for State/County agencies, warrant-scoped law enforcement lockups, legal aid, and health networks.",
      "Regulatory & Security Moat Implementation: Architect Entra ID SSO, SCIM automated provisioning, role governance, and achieve SOC 2 Type II, ISO 27001, and StateRAMP High certifications.",
      "Unified Codebase Architecture: Maintain the 'One Platform, One Codebase' paradigm supporting all 9 product modules (VDMS, HMDS, UDMS, RDMS, IAI Connect, DineKey, etc.).",
      "Engineering Team Scaling: Recruit and lead 20+ senior engineers, security researchers, and DevOps architects."
    ],
    first90DaysGoals: [
      "Migrate AWS infrastructure to multi-region High Availability with Terraform IaC and 99.99% uptime SLA.",
      "Complete SOC 2 Type II audit readiness gap assessment with compliance automation platform (Vanta / Drata).",
      "Ship Entra ID SSO & SCIM role management integration for enterprise UN/Gov clients.",
      "Release API Connector Layer v1.0 specifications for health clinics, shelters, and justice systems."
    ],
    kpis: [
      "Platform Uptime & Availability (>99.99%)",
      "Zero Security Breaches / 100% Cryptographic Isolation Compliance",
      "API Response Latency (<80ms P99 globally on token validation)",
      "Audit Milestones (SOC 2 Type II + HIPAA BAA signed in Q2)"
    ],
    weeklyCadence: "Weekly Sprint Planning & Architecture Review, Bi-weekly Security & Threat Modeling, Monthly Cloud Cost Audit",
    dependenciesOnOthers: [
      { role: "CEO", interaction: "Aligns technology roadmap with core investor narratives and strategic IP moat." },
      { role: "COO", interaction: "Coordinates on SOC 2 policies, employee background checks, and hardware MDM security (Jamf/Kandji)." },
      { role: "CDO", interaction: "Builds instant synthetic data sandboxes and custom API scopes for agency prospects." },
      { role: "CMO", interaction: "Ensures developer documentation, Cyber Club learning portals, and API developer playgrounds thrive." }
    ],
    jobSpecSummary: {
      idealBackground: "Former Principal Engineer / VP Engineering / CTO at high-security GovTech/Fintech/HealthTech company (Okta, Cloudflare, Palantir, Duo Security, Anduril) with expertise in cryptography, tokenization, and multi-tenant AWS.",
      targetComp: "$240,000 - $280,000 Base",
      equityRange: "2.0% - 3.5% Equity Grant (4-year vesting, 1-year cliff)",
      interviewScorecard: [
        "Mastery of zero-knowledge architectures, tokenization, and HSM encryption",
        "Proven experience taking systems through SOC 2 Type II, FedRAMP/StateRAMP, and HIPAA",
        "Expertise in distributed AWS architectures, API gateway design, and microservices",
        "Exemplary engineering leadership: ability to scale an engineering team to 25+ developers"
      ]
    }
  },
  CMO: {
    id: "CMO",
    title: "Chief Marketing Officer",
    currentStatus: "Priority Hire (Month 1-2)",
    tagline: "The $0.18 CAC Funnel, Global Paid Scaling, Brand Authority & Community Engine",
    primaryMandate: "Deploy the $6.0M Marketing & Acquisition budget to scale global paid acquisition (Apple Search Ads, Google, LinkedIn) from 3,500 users in 20+ countries to 500,000+ practitioners, driving the $4/mo to $3,526/yr conversion staircase and funding benefits.",
    budgetOwnership: "Marketing & Paid Acquisition ($6.0M budget), Creative, Content, PR & Events",
    keyResponsibilities: [
      "Global Paid User Acquisition: Scale the proven $0.18 blended CAC funnel across Apple Search Ads, Google Ads, LinkedIn B2B, and Meta campaigns with rigorous ROAS optimization.",
      "The Product Conversion Staircase: Drive users smoothly through the funnel: Land ($4/mo Survival Guide) → Discover ($0 CAC Cyber Club) → Expand ($322-$405/yr Business Manager) → Multiply ($3,526/yr Command Suites).",
      "Dual-Funnel Humanitarian Brand Marketing: Produce top-tier creative assets, documentary case studies, and PR campaigns around undocumented, veteran, and refugee identity rights.",
      "Community & Educational Growth: Scale Cyber Club into the premier global learning community for IAM, access governance, and tokenization practitioners.",
      "Marketing Ops & Attribution Analytics: Build multi-touch attribution, conversion rate optimization (CRO), and enterprise ABM targeting civic agencies."
    ],
    first90DaysGoals: [
      "Deploy first $500k tranche of paid acquisition budget maintaining blended CAC under $0.35 across 30+ countries.",
      "Launch relaunch campaign for IAI Business Manager (Sept 2026 launch) with 10,000+ waitlist.",
      "Publish comprehensive 'State of Humanitarian Identity & Tokenization' whitepaper picked up by major tech & policy media.",
      "Hire Performance Marketing Lead, Content/Brand Director, and Community Growth Manager."
    ],
    kpis: [
      "Blended CAC (<$0.30 at scale on entry products)",
      "Top-of-Funnel User Volume (Reach 50,000 active users in 6 months)",
      "Expansion Conversion Rate (>8.5% transition from $4/mo to $322+/yr tier)",
      "Organic Inbound Enterprise Inquiries (>150 agency demo requests/month)"
    ],
    weeklyCadence: "Weekly Growth & Ad Spend ROAS Review, Bi-weekly Creative Sprint, Monthly Funnel Conversion Retro",
    dependenciesOnOthers: [
      { role: "CEO", interaction: "Ensures brand positioning reinforces the $50M post-money valuation and public authority." },
      { role: "COO", interaction: "Monitors ad spend credit limits, agency contractor agreements, and marketing tooling budgets." },
      { role: "CDO", interaction: "Partners on co-marketing humanitarian sponsorships that generate qualified agency leads." },
      { role: "CTO", interaction: "Works closely on product onboarding analytics, tracking telemetry, and website speed." }
    ],
    jobSpecSummary: {
      idealBackground: "Former VP Growth / Head of Marketing at high-growth PLG + Enterprise SaaS unicorn (Notion, Figma, Canva, 1Password, Ramp) with proven mastery of low-CAC performance marketing + enterprise account-based marketing.",
      targetComp: "$210,000 - $250,000 Base + Growth Bonus",
      equityRange: "1.25% - 2.25% Equity Grant (4-year vesting, 1-year cliff)",
      interviewScorecard: [
        "Proven experience deploying $5M+ digital advertising budgets at sub-dollar CACs",
        "Deep expertise in Product-Led Growth (PLG) and B2B expansion funnels",
        "Mastery of viral loop mechanics, community building, and organic content distribution",
        "Strong analytical rigor: SQL, attribution modeling, LTV:CAC optimization"
      ]
    }
  }
};

export const RACI_MATRIX: RaciEntry[] = [
  {
    taskArea: "Capital Allocation & Board Governance ($10M deployment, Series A prep)",
    category: "Corporate & Capital",
    CEO: "A",
    COO: "R",
    CDO: "C",
    CTO: "I",
    CMO: "I",
    notes: "CEO accounts to Board; COO executes treasury allocations and banking rails."
  },
  {
    taskArea: "Payroll & PEO Setup (50-State compliance, auto-tax withholdings, international contractor EOR)",
    category: "HR & Operations",
    CEO: "I",
    COO: "A",
    CDO: "I",
    CTO: "C",
    CMO: "I",
    notes: "COO owns PEO selection (Rippling/Deel), payroll execution, and state registrations."
  },
  {
    taskArea: "60% Health Care Coverage Plan Funded by App Subscriptions",
    category: "Benefits & Finance",
    CEO: "C",
    COO: "A",
    CDO: "I",
    CTO: "I",
    CMO: "C",
    notes: "COO architects the 60% subsidy and PEO enrollment; CMO drives subscription revenue inflow."
  },
  {
    taskArea: "Employee Benefits & 401(k) (Dental/Vision, Safe Harbor 401(k), 4-yr vesting equity pool)",
    category: "HR & Operations",
    CEO: "C",
    COO: "A",
    CDO: "I",
    CTO: "I",
    CMO: "I",
    notes: "COO leads broker RFP, plan design, and Carta equity plan administration."
  },
  {
    taskArea: "2-to-55 Headcount Recruiting & Onboarding Engine",
    category: "People & Talent",
    CEO: "A",
    COO: "R",
    CDO: "R",
    CTO: "R",
    CMO: "R",
    notes: "COO builds recruiting ops pipeline; each C-level executes departmental hiring."
  },
  {
    taskArea: "UN & US Government Vendor Pipeline (SAM.gov, UNGM, FAR compliance, multi-year contracts)",
    category: "Public Sector & Sales",
    CEO: "C",
    COO: "C",
    CDO: "A",
    CTO: "C",
    CMO: "I",
    notes: "CDO owns 30 UN agency relationships and Federal agency sales quotas."
  },
  {
    taskArea: "The $0.18 CAC Funnel & $6.0M Paid Ad Deployment (Apple, Google, LinkedIn)",
    category: "Growth & Acquisition",
    CEO: "I",
    COO: "C",
    CDO: "I",
    CTO: "C",
    CMO: "A",
    notes: "CMO manages $6M acquisition spend, campaign creative, and ROAS optimization."
  },
  {
    taskArea: "VouchKey Tokenization Hub & Zero-Raw-SSN Cryptography",
    category: "Engineering & Security",
    CEO: "I",
    COO: "I",
    CDO: "C",
    CTO: "A",
    CMO: "I",
    notes: "CTO holds absolute technical authority over encryption, keys, and data isolation."
  },
  {
    taskArea: "Security Certifications (SOC 2 Type II, StateRAMP, HIPAA, ISO 27001, NIST 800-53)",
    category: "Compliance & Security",
    CEO: "I",
    COO: "R",
    CDO: "C",
    CTO: "A",
    CMO: "I",
    notes: "CTO implements controls and architecture; COO coordinates external auditor contracts."
  },
  {
    taskArea: "Instant POC Bypass Hack (Synthetic Data Demo pipeline for UN/Gov without PII audit)",
    category: "Product & Sales Integration",
    CEO: "I",
    COO: "I",
    CDO: "A",
    CTO: "R",
    CMO: "I",
    notes: "CDO identifies agency pain points; CTO engineers the synthetic compliance bypass demo."
  },
  {
    taskArea: "API Connector Layer (Health clinics, law enforcement warrant locks, shelter networks)",
    category: "Engineering & Integrations",
    CEO: "I",
    COO: "I",
    CDO: "C",
    CTO: "A",
    CMO: "I",
    notes: "CTO leads development of API gateway and token-scoped consent boundaries."
  },
  {
    taskArea: "Product Conversion Staircase ($4/mo → $322/yr → $3,526/yr upsell mechanics)",
    category: "Growth & Monetization",
    CEO: "C",
    COO: "I",
    CDO: "C",
    CTO: "C",
    CMO: "A",
    notes: "CMO drives in-app onboarding nudges, lifecycle email campaigns, and upgrade prompts."
  },
  {
    taskArea: "Contract Factoring & ARR Venture Debt (OPEX debt financing to protect equity)",
    category: "Financial Engineering",
    CEO: "A",
    COO: "R",
    CDO: "C",
    CTO: "I",
    CMO: "I",
    notes: "CEO & COO establish credit lines against booked UN/Gov contracts and SaaS MRR."
  },
  {
    taskArea: "Corporate Insurance (D&O $5M, Cyber $5M, Tech E&O, General Liability)",
    category: "Legal & Risk",
    CEO: "I",
    COO: "A",
    CDO: "I",
    CTO: "C",
    CMO: "I",
    notes: "COO negotiates policies with Vouch/Founder Shield to fulfill enterprise SLAs."
  },
  {
    taskArea: "Cyber Club Community & IAM Practitioner Academy",
    category: "Community & Education",
    CEO: "I",
    COO: "I",
    CDO: "C",
    CTO: "C",
    CMO: "A",
    notes: "CMO creates courseware, certification credentials, and community engagement."
  }
];

export const HEADCOUNT_ROSTER: HeadcountRole[] = [
  // Executive
  { id: "exec-1", title: "Chief Executive Officer", department: "Executive", phase: "Phase 1 (M1-M3: 2→12)", headcountCount: 1, avgBaseSalary: 180000, equityPoolPercent: 0, priority: "Immediate", keyFocus: "Vision, fundraising, board, high-level diplomatic alliances" },
  { id: "exec-2", title: "Chief Operating Officer", department: "Executive", phase: "Phase 1 (M1-M3: 2→12)", headcountCount: 1, avgBaseSalary: 180000, equityPoolPercent: 0, priority: "Immediate", keyFocus: "Ops, payroll, compliance, HR, contract factoring" },
  { id: "exec-3", title: "Chief Development Officer (CDO)", department: "Executive", phase: "Phase 1 (M1-M3: 2→12)", headcountCount: 1, avgBaseSalary: 230000, equityPoolPercent: 2.0, priority: "Immediate", keyFocus: "UN procurement, US Gov pipelines, NGO sponsorships" },
  { id: "exec-4", title: "Chief Technology Officer (CTO)", department: "Executive", phase: "Phase 1 (M1-M3: 2→12)", headcountCount: 1, avgBaseSalary: 250000, equityPoolPercent: 2.5, priority: "Immediate", keyFocus: "VouchKey hub, AWS multi-region, Zero-PII security, API layer" },
  { id: "exec-5", title: "Chief Marketing Officer (CMO)", department: "Executive", phase: "Phase 1 (M1-M3: 2→12)", headcountCount: 1, avgBaseSalary: 220000, equityPoolPercent: 1.75, priority: "Immediate", keyFocus: "$6M paid acquisition, $0.18 CAC engine, brand, Cyber Club" },
  
  // Phase 1 Core Leads (M1-M3)
  { id: "lead-1", title: "Lead Security & Cryptography Architect", department: "Engineering & Security", phase: "Phase 1 (M1-M3: 2→12)", headcountCount: 1, avgBaseSalary: 200000, equityPoolPercent: 0.75, priority: "Immediate", keyFocus: "SOC 2 Type II, zero-SSN encryption, key management" },
  { id: "lead-2", title: "Senior Full-Stack Platform Engineer (x2)", department: "Engineering & Security", phase: "Phase 1 (M1-M3: 2→12)", headcountCount: 2, avgBaseSalary: 165000, equityPoolPercent: 0.8, priority: "Immediate", keyFocus: "9 products unified codebase, UI performance, React/Node" },
  { id: "lead-3", title: "Public Sector Procurement Director", department: "Public Sector & Sales", phase: "Phase 1 (M1-M3: 2→12)", headcountCount: 1, avgBaseSalary: 175000, equityPoolPercent: 0.5, priority: "Immediate", keyFocus: "UNGM and Federal agency bidding & RFP response execution" },
  { id: "lead-4", title: "Senior Growth & Performance Marketing Lead", department: "Growth & Marketing", phase: "Phase 1 (M1-M3: 2→12)", headcountCount: 1, avgBaseSalary: 155000, equityPoolPercent: 0.4, priority: "Immediate", keyFocus: "Apple Search Ads, Google Ads scaling, LTV/CAC cohort tracking" },
  { id: "lead-5", title: "Head of People & Talent Acquisition", department: "Operations & People", phase: "Phase 1 (M1-M3: 2→12)", headcountCount: 1, avgBaseSalary: 140000, equityPoolPercent: 0.35, priority: "Immediate", keyFocus: "Manage 2→55 hiring funnel, technical sourcing, onboarding" },

  // Phase 2 (M4-M9: 13→30)
  { id: "eng-p2-1", title: "Cloud DevOps & SRE Engineer (x2)", department: "Engineering & Security", phase: "Phase 2 (M4-M9: 13→30)", headcountCount: 2, avgBaseSalary: 160000, equityPoolPercent: 0.4, priority: "Fast Follow", keyFocus: "AWS multi-region failover, Terraform, automated CI/CD" },
  { id: "eng-p2-2", title: "API Connector Integration Engineers (x3)", department: "Engineering & Security", phase: "Phase 2 (M4-M9: 13→30)", headcountCount: 3, avgBaseSalary: 150000, equityPoolPercent: 0.6, priority: "Fast Follow", keyFocus: "Health, casework, legal aid API integration pipelines" },
  { id: "prod-p2-1", title: "Staff AI & Synthetic Data Engineer", department: "Product & AI", phase: "Phase 2 (M4-M9: 13→30)", headcountCount: 1, avgBaseSalary: 185000, equityPoolPercent: 0.35, priority: "Fast Follow", keyFocus: "UNICEF UNITE synthetic demo generation, privacy engines" },
  { id: "sales-p2-1", title: "Enterprise Account Executives - GovTech (x4)", department: "Public Sector & Sales", phase: "Phase 2 (M4-M9: 13→30)", headcountCount: 4, avgBaseSalary: 130000, equityPoolPercent: 0.6, priority: "Fast Follow", keyFocus: "Closing State Veterans, Homeless & Refugee department contracts" },
  { id: "sales-p2-2", title: "Solutions Engineers / Pre-Sales (x2)", department: "Public Sector & Sales", phase: "Phase 2 (M4-M9: 13→30)", headcountCount: 2, avgBaseSalary: 145000, equityPoolPercent: 0.3, priority: "Fast Follow", keyFocus: "Technical demos, synthetic POC deployments for agencies" },
  { id: "mktg-p2-1", title: "Content & Brand Creative Producer", department: "Growth & Marketing", phase: "Phase 2 (M4-M9: 13→30)", headcountCount: 1, avgBaseSalary: 110000, equityPoolPercent: 0.15, priority: "Fast Follow", keyFocus: "Video documentaries, impact case studies, event media" },
  { id: "mktg-p2-2", title: "Cyber Club Community Manager", department: "Growth & Marketing", phase: "Phase 2 (M4-M9: 13→30)", headcountCount: 1, avgBaseSalary: 95000, equityPoolPercent: 0.1, priority: "Fast Follow", keyFocus: "IAM learner engagement, certification grading, Discord/forums" },
  { id: "ops-p2-1", title: "Senior Financial Controller / FP&A", department: "Operations & People", phase: "Phase 2 (M4-M9: 13→30)", headcountCount: 1, avgBaseSalary: 160000, equityPoolPercent: 0.25, priority: "Fast Follow", keyFocus: "ARR venture debt audits, contract factoring ops, cash planning" },
  { id: "ops-p2-2", title: "Legal & Procurement Counsel (Contract/In-House)", department: "Operations & People", phase: "Phase 2 (M4-M9: 13→30)", headcountCount: 1, avgBaseSalary: 175000, equityPoolPercent: 0.25, priority: "Fast Follow", keyFocus: "FAR agreements, UN Master Service Agreements, DPAs" },
  { id: "ops-p2-3", title: "Customer Success / Agency Onboarding Leads (x2)", department: "Operations & People", phase: "Phase 2 (M4-M9: 13→30)", headcountCount: 2, avgBaseSalary: 105000, equityPoolPercent: 0.2, priority: "Fast Follow", keyFocus: "Post-sale onboarding for agencies, shelter caseworkers" },

  // Phase 3 (M10-M18: 31→55)
  { id: "eng-p3-1", title: "Core Platform & Mobile Engineers (x6)", department: "Engineering & Security", phase: "Phase 3 (M10-M18: 31→55)", headcountCount: 6, avgBaseSalary: 145000, equityPoolPercent: 0.6, priority: "Scale Triggered", keyFocus: "iOS/Android apps, offline mode, encrypted edge storage" },
  { id: "eng-p3-2", title: "Security Operations & Compliance Analyst (x2)", department: "Engineering & Security", phase: "Phase 3 (M10-M18: 31→55)", headcountCount: 2, avgBaseSalary: 130000, equityPoolPercent: 0.2, priority: "Scale Triggered", keyFocus: "24/7 SIEM monitoring, continuous SOC 2/StateRAMP evidence" },
  { id: "sales-p3-1", title: "Global NGO & UN Account Directors (x4)", department: "Public Sector & Sales", phase: "Phase 3 (M10-M18: 31→55)", headcountCount: 4, avgBaseSalary: 140000, equityPoolPercent: 0.4, priority: "Scale Triggered", keyFocus: "Geneva, Nairobi, NYC UN agency field deployments" },
  { id: "sales-p3-2", title: "Commercial SMB Account Executives (x3)", department: "Public Sector & Sales", phase: "Phase 3 (M10-M18: 31→55)", headcountCount: 3, avgBaseSalary: 95000, equityPoolPercent: 0.2, priority: "Scale Triggered", keyFocus: "DineKey & IAI Business Manager practitioner sales" },
  { id: "mktg-p3-1", title: "International Performance Marketers (x2)", department: "Growth & Marketing", phase: "Phase 3 (M10-M18: 31→55)", headcountCount: 2, avgBaseSalary: 115000, equityPoolPercent: 0.15, priority: "Scale Triggered", keyFocus: "Localized paid ad campaigns across Europe, LatAm, Africa" },
  { id: "ops-p3-1", title: "24/7 Tier-1 & Tier-2 Support Specialists (x6)", department: "Operations & People", phase: "Phase 3 (M10-M18: 31→55)", headcountCount: 6, avgBaseSalary: 65000, equityPoolPercent: 0.1, priority: "Scale Triggered", keyFocus: "User support for $4/mo survival guides & field caseworkers" },
  { id: "ops-p3-2", title: "Operations & Facilities Coordinator (x2)", department: "Operations & People", phase: "Phase 3 (M10-M18: 31→55)", headcountCount: 2, avgBaseSalary: 75000, equityPoolPercent: 0.1, priority: "Scale Triggered", keyFocus: "Equipment logistics, global shipping, remote office stipends" }
];

export const PRODUCT_ECOSYSTEM: ProductPortfolioItem[] = [
  {
    id: "vouchkey",
    name: "VouchKey Hub",
    acronym: "Hub",
    status: "LIVE",
    identityServed: "Identity Tokenization Engine (Core Hub)",
    tierStep: "Hub Architecture",
    coreFeature: "One token per person, per-organization encryption key. Zero raw SSN storage, need-to-know cryptographic access, VAWA-safe sealing, tamper-evident audit trail.",
    techStack: "AWS Multi-Region, KMS HSM, Node/TypeScript, GraphQL, Redis Cluster",
    targetBuyer: "Universal Identity Infrastructure (Backbone of all 9 apps)",
    complianceShield: "SOC 2 Type II, ISO 27001, Zero-Knowledge PII isolation",
    pricingMonthlyEquivalent: 0
  },
  {
    id: "iai-survival-guide",
    name: "IAI Survival Guide",
    status: "LIVE",
    identityServed: "Learner & Career Changers",
    tierStep: "Land ($4/mo)",
    coreFeature: "Entry point for career changers entering IAM & identity security. 3,500+ active users across 20+ countries acquired at $0.18 CAC.",
    techStack: "React PWA, Tailwind, Stripe Billing, Apple In-App Purchase",
    targetBuyer: "Individual practitioners, career changers, bootcamp students",
    complianceShield: "Consumer privacy, PCI-DSS compliant payment rails",
    pricingMonthlyEquivalent: 4
  },
  {
    id: "cyber-club",
    name: "Cyber Club",
    status: "LIVE",
    identityServed: "Practitioner Identity",
    tierStep: "Discover ($0 CAC)",
    coreFeature: "Membership & certification portal where users learn tokenization and access governance using live IAI platforms as hands-on teaching examples.",
    techStack: "Interactive Lab Sandbox, Synthetic Data Playground, Video LMS",
    targetBuyer: "Cybersecurity practitioners, IAM engineers, university cohorts",
    complianceShield: "FERPA, Synthetic Sandbox Isolation",
    pricingMonthlyEquivalent: 0
  },
  {
    id: "iai-business-manager",
    name: "IAI Business Manager",
    status: "SEPT 2026",
    identityServed: "Professional Identity",
    tierStep: "Expand ($322-$405/yr)",
    coreFeature: "Empowers independent consultants & small firms to run their identity practices and manage client governance with built-in VouchKey integration.",
    techStack: "Multi-tenant SaaS, Entra ID SSO, Stripe Subscriptions, Automated Invoicing",
    targetBuyer: "Security consultants, solo practitioners, boutique accounting/legal firms",
    complianceShield: "SOC 2 Type II readiness, GDPR, CCPA",
    pricingMonthlyEquivalent: 32
  },
  {
    id: "dinekey",
    name: "DineKey",
    status: "LIVE",
    identityServed: "Dietary-Safety Identity",
    tierStep: "Expand ($322-$405/yr)",
    coreFeature: "Allergy-first dining and medical dietary credentialing. Protects severe allergy sufferers via tokenized medical dietary cards.",
    techStack: "Mobile Web / Native iOS, QR Code cryptographic scanner, Restaurant POS API",
    targetBuyer: "Allergy patients, hospitality groups, school lunch programs",
    complianceShield: "HIPAA-adjacent dietary data protection, ADA compliant",
    pricingMonthlyEquivalent: 28
  },
  {
    id: "vdms",
    name: "VDMS (Veterans Data Management Suite)",
    status: "LIVE",
    identityServed: "Veteran Identity",
    tierStep: "Multiply ($3,163-$3,526/yr)",
    coreFeature: "Identity follows the veteran, not the SSN. Direct integration with VA, state benefits, and veteran support organizations without leaking military records.",
    techStack: "StateRAMP GovCloud, Entra ID SCIM, OAuth2 Consent Gateway",
    targetBuyer: "State & County Veterans Affairs departments, VFW, American Legion",
    complianceShield: "NIST 800-53, U.S. Federal Approved Vendor",
    pricingMonthlyEquivalent: 294
  },
  {
    id: "hmds",
    name: "HMDS (Displaced & Unhoused Suite)",
    status: "LIVE",
    identityServed: "Transient Identity",
    tierStep: "Multiply ($3,163-$3,526/yr)",
    coreFeature: "Transient identity for shelter intake and casework. Keeps client records safe across fragmented homeless shelters and municipal housing vouchers.",
    techStack: "HUD HMIS compliant API connector, offline casework sync, biometric voucher",
    targetBuyer: "Continuum of Care (CoC) agencies, municipal homeless services, Salvation Army",
    complianceShield: "HUD Data Standards, VAWA Confidentiality Protections",
    pricingMonthlyEquivalent: 294
  },
  {
    id: "udms",
    name: "UDMS (Undocumented Data Suite)",
    status: "LIVE",
    identityServed: "Status-Safe Identity",
    tierStep: "Multiply ($3,163-$3,526/yr)",
    coreFeature: "Status-safe identity that cannot be turned against the user. Warrant-scoped lockups and cryptographic consent barriers preventing predatory surveillance.",
    techStack: "Zero-Knowledge Proofs, Per-org isolated crypto keys, air-gapped legal vaults",
    targetBuyer: "Immigrant legal aid clinics, municipal municipal ID programs, consular advocacy",
    complianceShield: "Attorney-Client Privilege crypto-locking, Strict No-Subpoena PII exposure",
    pricingMonthlyEquivalent: 294
  },
  {
    id: "rdms",
    name: "RDMS (Refugee Data Management Suite)",
    status: "LIVE",
    identityServed: "Displaced Identity",
    tierStep: "Multiply ($3,163-$3,526/yr)",
    coreFeature: "Displaced identity when traditional documents are lost in conflict zones. Enables instant biometric-anchored tokenization for UN resettlement programs.",
    techStack: "UNHCR ProGres compatible, multi-lingual offline client, UN Cloud deployment",
    targetBuyer: "30 Approved UN Agencies (UNHCR, UNICEF, IOM, WFP), Red Cross / Red Crescent",
    complianceShield: "UN Privileges & Immunities, International Humanitarian Law",
    pricingMonthlyEquivalent: 294
  },
  {
    id: "iai-connect",
    name: "IAI Connect",
    status: "LIVE",
    identityServed: "Member Identity",
    tierStep: "Multiply ($3,163-$3,526/yr)",
    coreFeature: "Community and institutional federation platform connecting verified identity holders with vetted support networks, grants, and accredited programs.",
    techStack: "Federated Identity GraphQL, SCIM 2.0, WebAuthn FIDO2",
    targetBuyer: "Nonprofit alliances, philanthropic trusts, civic identity coalitions",
    complianceShield: "ISO 27001, GDPR / Cross-Border Data Transfer Framework",
    pricingMonthlyEquivalent: 294
  }
];

export const COMPLIANCE_FRAMEWORKS: ComplianceFramework[] = [
  {
    id: "us-gov-vendor",
    frameworkName: "U.S. Federal Government Approved Vendor",
    agencyOrStandard: "SAM.gov / CAGE Code / FAR / DFARS",
    status: "Pre-Cleared",
    relevance: "Enables direct contract awards with all 50 states and federal agencies (VA, HUD, HHS) without 2-year procurement onboarding.",
    keyRequirements: [
      "Active SAM.gov entity registration & CAGE code maintenance",
      "FAR 52.204-21 Basic Safeguarding of Covered Contractor Information Systems",
      "Executive Order 14028 Software Supply Chain SBOM verification",
      "Annual Representations and Certifications renewal"
    ],
    budgetAllocated: "$75,000 / yr",
    leadOwner: "COO",
    auditPartners: ["Federal Procurement Counsel", "Apex Accelerators (PTAC)"]
  },
  {
    id: "un-approved-vendor",
    frameworkName: "United Nations 30 Agencies Approved Vendor",
    agencyOrStandard: "UN Global Marketplace (UNGM Level 2)",
    status: "Pre-Cleared",
    relevance: "Unlocks direct RFP bidding and emergency deployments across UNHCR, UNICEF, IOM, WFP across 190+ countries.",
    keyRequirements: [
      "UNGM Vendor Registration Level 2 active status",
      "Adherence to UN Supplier Code of Conduct (zero child labor, anti-corruption)",
      "Zero PII cross-border data leakage architecture",
      "UN Privileges and Immunities legal liability structuring"
    ],
    budgetAllocated: "$50,000 / yr",
    leadOwner: "CDO",
    auditPartners: ["UN Procurement Division Liaison", "Geneva Humanitarian Tech Counsel"]
  },
  {
    id: "soc2-type2",
    frameworkName: "SOC 2 Type II (Security, Availability, Confidentiality)",
    agencyOrStandard: "AICPA Trust Services Criteria",
    status: "In Audit Prep",
    relevance: "Mandatory enterprise proof for municipal agencies, healthcare partners, and enterprise B2B consultants.",
    keyRequirements: [
      "Automated continuous compliance monitoring (Vanta / Drata integration)",
      "Employee background checks, security awareness training, and MDM enforcement",
      "AWS infrastructure encryption at rest (AES-256) and in transit (TLS 1.3)",
      "Annual third-party penetration testing and vulnerability management SLAs"
    ],
    budgetAllocated: "$180,000 (included in $600k compliance budget)",
    leadOwner: "CTO",
    auditPartners: ["Vanta / Drata", "A-LIGN / Schellman CPA Auditors"]
  },
  {
    id: "stateramp-fedramp",
    frameworkName: "StateRAMP / FedRAMP Moderate Readiness",
    agencyOrStandard: "NIST SP 800-53 Rev 5",
    status: "Active Requirement",
    relevance: "Required for statewide agency deployments (Veterans, Unhoused, Undocumented casework) across 20+ participating states.",
    keyRequirements: [
      "325+ security controls implemented across AWS GovCloud architecture",
      "Continuous boundary monitoring and incident response SLA (<1 hour)",
      "Role-based access control with hardware MFA / FIDO2 security keys",
      "Supply chain risk management and automated SBOM generation"
    ],
    budgetAllocated: "$220,000",
    leadOwner: "CTO",
    auditPartners: ["Coalfire / Schellman 3PAO"]
  },
  {
    id: "hipaa-vawa",
    frameworkName: "HIPAA BAA & VAWA Confidentiality Compliance",
    agencyOrStandard: "HHS HIPAA Security Rule & Violence Against Women Act (VAWA)",
    status: "Pre-Cleared",
    relevance: "Protects sensitive health records (DineKey allergy data) and shelter location data for domestic violence survivors (HMDS/UDMS).",
    keyRequirements: [
      "Standard Business Associate Agreement (BAA) workflow for clinical partners",
      "Strict VAWA Section 3 confidentiality rules (no shared shelter location telemetry)",
      "Cryptographic per-person tokenization isolating name from case notes",
      "Audit log immutability preventing unauthorized law enforcement warrantless search"
    ],
    budgetAllocated: "$75,000",
    leadOwner: "COO",
    auditPartners: ["National Network to End Domestic Violence (NNEDV) Legal Advisory", "KirkpatrickPrice"]
  }
];

export const INITIAL_ACTION_ITEMS: ActionItem[] = [
  // Payroll & Banking
  {
    id: "task-pb-1",
    title: "Deploy Multi-State PEO / HRIS Platform (Rippling or Deel)",
    category: "payroll_banking",
    assignedRole: "COO",
    priority: "critical",
    status: "in_progress",
    timeline: "Week 1 - 2",
    estimatedCost: "$1,200/mo base",
    vendorOptions: ["Rippling (Recommended for multi-state US + global contractors)", "Deel", "Gusto + Trinet PEO"],
    description: "Setup unified HRIS to support multi-state payroll in all 50 states, automated tax withholdings, contractor payouts, and rapid 2→55 onboarding without registering individual state tax entities manually.",
    deliverables: [
      "Executed Rippling/Deel master services agreement",
      "Automated federal, state, and local payroll tax registrations",
      "Direct deposit banking link with Mercury/Brex corporate account",
      "Standard employee self-service onboarding flow with I-9 and W-4 automation"
    ],
    complianceNotes: "Mandatory before making first round of senior engineering and C-suite hires."
  },
  {
    id: "task-pb-2",
    title: "Structure Commercial Banking, Treasury & Debt Factoring Facility",
    category: "payroll_banking",
    assignedRole: "COO",
    priority: "critical",
    status: "in_progress",
    timeline: "Week 1 - 3",
    estimatedCost: "$0 upfront (factoring fee 1.5-3%)",
    vendorOptions: ["Mercury Treasury (FDIC insured up to $5M)", "Brex", "Capchase / Pipe (SaaS ARR Factoring)"],
    description: "Establish primary commercial accounts with multi-million sweep FDIC insurance, corporate expense cards with custom department limits, and an ARR-backed debt facility to fund OPEX off revenue rather than equity.",
    deliverables: [
      "$10M wire reception into FDIC-insured multi-bank sweep treasury",
      "Department expense cards issued to CEO ($50k limit), CMO ($250k limit for ad spend), CTO ($50k limit for AWS)",
      "Invoice factoring line established against approved UN and Gov purchase orders",
      "Monthly cash burn and runway forecast automated dashboard"
    ],
    complianceNotes: "Aligns with the Financial Engineering slide: 'Protecting the Equity with Debt/Factoring for OPEX'."
  },
  {
    id: "task-pb-3",
    title: "Commission Updated 409A Valuation & Cap Table Sync",
    category: "payroll_banking",
    assignedRole: "COO",
    priority: "high",
    status: "not_started",
    timeline: "Month 1",
    estimatedCost: "$3,500 - $6,000",
    vendorOptions: ["Carta 409A Services", "Pulley", "Scalar"],
    description: "Obtain an independent fair market value (FMV) appraisal of common stock reflecting the $50M post-money seed valuation, establishing the exercise price for the expanded 10-15% employee stock option pool.",
    deliverables: [
      "Signed independent 409A valuation report",
      "Board consent adopting common stock strike price",
      "Carta cap table setup with updated option grant templates"
    ],
    complianceNotes: "IRS Section 409A compliance required prior to issuing equity grants to incoming CDO, CTO, CMO, and early staff."
  },

  // Benefits & Healthcare Coverage
  {
    id: "task-ben-1",
    title: "Establish 60% Health Care Coverage Subsidy via Subscription Revenue Escrow",
    category: "benefits_compensation",
    assignedRole: "COO",
    priority: "critical",
    status: "in_progress",
    timeline: "Week 2 - 4",
    estimatedCost: "$468 / employee / month (60% employer share)",
    vendorOptions: ["Rippling PEO Medical Broker (Aetna / Blue Shield / Kaiser)", "Gusto Benefits", "Justworks"],
    description: "Architect the dedicated health care benefits package with a 60% employer coverage contribution rate, directly funded by recurring application subscription cash flows (IAI Survival Guide, DineKey, Business Manager).",
    deliverables: [
      "Selection of Platinum, Gold, and HSA-compatible HDHP medical tiers with 60% employer coverage rule",
      "Dedicated health benefits escrow account fed by Stripe/Apple subscription payouts",
      "Monthly automated reconciliation verifying subscription MRR covers 60% health premiums",
      "Employee benefits enrollment portal and open enrollment briefing"
    ],
    complianceNotes: "ACA Section 4980H compliance & Section 125 pre-tax cafeteria plan document execution."
  },
  {
    id: "task-ben-2",
    title: "Setup Safe Harbor 401(k) with Employer Match",
    category: "benefits_compensation",
    assignedRole: "COO",
    priority: "high",
    status: "not_started",
    timeline: "Month 1 - 2",
    estimatedCost: "$1,500 setup + 4% match policy",
    vendorOptions: ["Guideline 401(k)", "Human Interest", "Betterment for Business"],
    description: "Launch turnkey 401(k) retirement plan with automated payroll deductions, low-fee index funds, and Safe Harbor 4% match to bypass annual non-discrimination testing.",
    deliverables: [
      "Executed plan document with Guideline / Human Interest",
      "Payroll integration for auto-enrollment and auto-escalation",
      "ERISA compliance notices and Summary Plan Description (SPD) distribution"
    ]
  },
  {
    id: "task-ben-3",
    title: "Standardize Remote Work & Cybersecurity Perk Program",
    category: "benefits_compensation",
    assignedRole: "COO",
    priority: "medium",
    status: "not_started",
    timeline: "Month 1",
    estimatedCost: "$1,000 one-time + $150/mo",
    vendorOptions: ["Firstbase.io (Hardware logistics)", "Brex Perks / Compt", "Kandji MDM"],
    description: "Implement standardized equipment and wellness package: $1,000 home office workstation setup, Apple M-series hardware with MDM security, and $150/mo wellness/learning stipend.",
    deliverables: [
      "Hardware procurement policy with Kandji/Jamf MDM enrollment",
      "Standard remote work stipend policy",
      "Cybersecurity hardware YubiKey distribution for all employees"
    ]
  },

  // Executive Hiring & Org Scaling
  {
    id: "task-hire-1",
    title: "Recruit & Onboard Chief Development Officer (CDO)",
    category: "hiring_team",
    assignedRole: "CEO",
    priority: "critical",
    status: "in_progress",
    timeline: "Month 1 (Days 1 - 45)",
    estimatedCost: "$230k Base + 2.0% Equity",
    vendorOptions: ["Executive Search (True Search, Daversa, Spencer Stuart)", "Personal GovTech Network"],
    description: "Hire veteran executive to spearhead UN procurement across 30 agencies, federal and state agency pipeline monetization, and humanitarian sponsorship strategy.",
    deliverables: [
      "Finalized job specification and executive compensation package",
      "Shortlist of 5 Tier-1 candidates with Palantir/GovTech/UN leadership experience",
      "Board-approved offer letter with 4-year vesting / 1-year cliff equity grant",
      "Signed employment agreement and IP assignment"
    ]
  },
  {
    id: "task-hire-2",
    title: "Recruit & Onboard Chief Technology Officer (CTO)",
    category: "hiring_team",
    assignedRole: "CEO",
    priority: "critical",
    status: "in_progress",
    timeline: "Month 1 (Days 1 - 45)",
    estimatedCost: "$250k Base + 2.5% Equity",
    vendorOptions: ["Executive Search (Riviera Partners, True Search)", "IAM & Security Networks"],
    description: "Hire elite technical leader with deep expertise in cryptography, zero-knowledge architectures, AWS GovCloud, and scaling engineering from 2 to 25+ developers.",
    deliverables: [
      "Finalized CTO job scorecard focusing on zero-PII tokenization and SOC 2 / StateRAMP",
      "Technical architecture review and cryptographic audit with candidate finalists",
      "Executed offer letter and executive employment agreement"
    ]
  },
  {
    id: "task-hire-3",
    title: "Recruit & Onboard Chief Marketing Officer (CMO)",
    category: "hiring_team",
    assignedRole: "CEO",
    priority: "critical",
    status: "in_progress",
    timeline: "Month 1 (Days 1 - 45)",
    estimatedCost: "$220k Base + 1.75% Equity",
    vendorOptions: ["Growth Executive Search", "PLG & Enterprise SaaS Networks"],
    description: "Hire growth leader capable of deploying the $6.0M paid acquisition budget while preserving the sub-dollar CAC on entry products and expanding the B2B conversion staircase.",
    deliverables: [
      "CMO scorecard prioritizing performance ad scaling, attribution, and enterprise ABM",
      "Marketing budget deployment roadmap review with candidate finalists",
      "Executed executive offer letter"
    ]
  },
  {
    id: "task-hire-4",
    title: "Launch Phase 1 Engineering & Sales Pods (Hires 6 through 12)",
    category: "hiring_team",
    assignedRole: "COO",
    priority: "high",
    status: "not_started",
    timeline: "Month 2 - 3",
    estimatedCost: "Allocated in $2.0M Team Budget",
    vendorOptions: ["Ashby ATS", "Greenhouse", "Wellfound / LinkedIn Recruiter"],
    description: "Deploy applicant tracking system and interview rubrics to hire Lead Security Architect, 2 Full Stack Engineers, Public Sector Procurement Director, Growth Lead, and Head of Talent.",
    deliverables: [
      "Ashby ATS setup with structured interview stages and compensation bands",
      "Standardized engineering technical assessment and take-home project",
      "Offers extended to first 7 core hires by Day 75"
    ]
  },

  // Regulatory Compliance & Security
  {
    id: "task-comp-1",
    title: "Initiate SOC 2 Type II Continuous Compliance Monitoring",
    category: "regulatory_compliance",
    assignedRole: "CTO",
    priority: "critical",
    status: "in_progress",
    timeline: "Month 1 - 3",
    estimatedCost: "$15,000 software + $35,000 audit",
    vendorOptions: ["Vanta", "Drata", "A-LIGN (CPA Auditor)"],
    description: "Connect AWS infrastructure, GitHub, Google Workspace, and HRIS to automated compliance software to monitor 80+ security controls 24/7 and begin 6-month observation period.",
    deliverables: [
      "Vanta/Drata agents deployed across all employee laptops via MDM",
      "42 automated security policies drafted, reviewed, and signed by founders",
      "SOC 2 Type I report / readiness letter issued for enterprise prospective buyers"
    ]
  },
  {
    id: "task-comp-2",
    title: "Implement Entra ID SSO, SCIM & NIST 800-53 Access Governance",
    category: "regulatory_compliance",
    assignedRole: "CTO",
    priority: "high",
    status: "in_progress",
    timeline: "Month 2 - 4",
    estimatedCost: "Part of $900k AWS/Infra budget",
    vendorOptions: ["Microsoft Entra ID", "Okta Workforce", "AWS IAM Identity Center"],
    description: "Engineer enterprise Single Sign-On and automated user lifecycle provisioning (SCIM) to allow UN agencies, states, and hospital networks to connect existing corporate directories.",
    deliverables: [
      "SAML 2.0 / OIDC enterprise SSO gateway",
      "Automated SCIM 2.0 deprovisioning endpoint",
      "Role-Based Access Control (RBAC) governance matrix mapped to ISO 27001 & NIST"
    ]
  },
  {
    id: "task-comp-3",
    title: "Execute Business Associate Agreements (BAA) & VAWA Cryptographic Sealing",
    category: "regulatory_compliance",
    assignedRole: "COO",
    priority: "high",
    status: "completed",
    timeline: "Pre-Seed / Ongoing",
    estimatedCost: "$12,000 legal",
    vendorOptions: ["HealthTech Compliance Counsel", "NNEDV Legal Guidelines"],
    description: "Ensure HIPAA BAA workflows and Violence Against Women Act (VAWA) confidentiality safeguards remain airtight across DineKey and HMDS shelter databases.",
    deliverables: [
      "Standard HIPAA Business Associate Agreement addendum for clinical buyers",
      "VAWA cryptographic sealing verification preventing subpoena exposure of shelter data",
      "Annual third-party privacy audit sign-off"
    ]
  },

  // Tech & Infrastructure
  {
    id: "task-tech-1",
    title: "AWS Multi-Region GovCloud Migration & Infrastructure as Code (IaC)",
    category: "tech_infrastructure",
    assignedRole: "CTO",
    priority: "critical",
    status: "in_progress",
    timeline: "Month 1 - 3",
    estimatedCost: "$35,000 / mo AWS allocation",
    vendorOptions: ["AWS GovCloud (US-East & US-West)", "Terraform Cloud", "Datadog"],
    description: "Scale from single-region setup to active-active multi-region AWS deployment with KMS Hardware Security Modules (HSM) for per-organization VouchKey token isolation.",
    deliverables: [
      "Terraform IaC modular codebase for instant environment spinning",
      "Multi-region KMS key rotation and zero-raw-SSN tokenization cluster",
      "24/7 Datadog observability with P99 < 80ms latency threshold alerts"
    ]
  },
  {
    id: "task-tech-2",
    title: "Release API Connector Layer v1.0 & Zero-PII Synthetic Demo Hack",
    category: "tech_infrastructure",
    assignedRole: "CTO",
    priority: "high",
    status: "in_progress",
    timeline: "Month 2 - 4",
    estimatedCost: "Internal engineering",
    vendorOptions: ["GraphQL Federation", "Postman Enterprise", "Synthetic Data Engine"],
    description: "Build the API connector layer for law enforcement warrant scopes, clinics, and shelters, coupled with the UNICEF UNITE synthetic data sandbox for instant 48-hour pilot approvals.",
    deliverables: [
      "Public & Gov-scoped API documentation portal with interactive test sandboxes",
      "Synthetic data generator mimicking 10,000+ realistic identity case records with zero PII",
      "One-click demo environment for CDO agency sales presentations"
    ]
  },

  // Marketing & Growth
  {
    id: "task-mktg-1",
    title: "Deploy Initial $500K Paid Acquisition Sprint Across Apple & Google Ads",
    category: "marketing_growth",
    assignedRole: "CMO",
    priority: "critical",
    status: "in_progress",
    timeline: "Month 1 - 2",
    estimatedCost: "$500,000 (from $6.0M budget)",
    vendorOptions: ["Apple Search Ads Advanced", "Google App Campaigns", "AppsFlyer / Adjust MMP"],
    description: "Scale user acquisition for IAI Survival Guide ($4/mo entry point) across 35 countries, maintaining blended CAC under $0.30 to feed the downstream conversion staircase.",
    deliverables: [
      "Full MMP tracking setup with Apple SKAdNetwork 4.0 integration",
      "40+ localized ad creative variants across 5 major languages",
      "Live ROAS & CAC cohort performance tracking dashboard"
    ]
  },
  {
    id: "task-mktg-2",
    title: "Launch Cyber Club IAM Academy & Certification Curriculum",
    category: "marketing_growth",
    assignedRole: "CMO",
    priority: "high",
    status: "not_started",
    timeline: "Month 2 - 3",
    estimatedCost: "$75,000 content & LMS",
    vendorOptions: ["Teachable / Custom LMS", "Credly Digital Badges", "Discord Community"],
    description: "Transform Cyber Club ($0 CAC) into the primary inbound funnel for practitioners, teaching tokenization using live IAI platforms as hands-on case studies.",
    deliverables: [
      "12-module 'Modern Tokenization & Zero-PII Access Governance' curriculum",
      "Verifiable digital completion badge (Credly) recognized by enterprise partners",
      "Active 5,000+ member community with weekly technical office hours"
    ]
  },

  // Public Sector & Development
  {
    id: "task-pub-1",
    title: "Activate 30 UN Agencies Approved Vendor Procurement Channels",
    category: "public_sector_dev",
    assignedRole: "CDO",
    priority: "critical",
    status: "in_progress",
    timeline: "Month 1 - 3",
    estimatedCost: "$50,000 travel & procurement filing",
    vendorOptions: ["UNGM (UN Global Marketplace)", "UNHCR Innovation Service", "UNICEF Ventures"],
    description: "Engage procurement officers across UNHCR, UNICEF, IOM, and WFP to position RDMS (Refugee Data Management Suite) for rapid field deployment contracts.",
    deliverables: [
      "UNGM Level 2 vendor profile optimized for high-value tenders ($500k+)",
      "Direct briefings with 15 UN agency field operations directors",
      "Submission of 3 multi-country refugee identity modernization RFP responses"
    ]
  },
  {
    id: "task-pub-2",
    title: "Execute Dual-Funnel Humanitarian Event Sponsorship Program",
    category: "public_sector_dev",
    assignedRole: "CDO",
    priority: "high",
    status: "not_started",
    timeline: "Month 2 - 4",
    estimatedCost: "$120,000 sponsorship allocation",
    vendorOptions: ["Humanitarian Innovation Summit", "National Veterans Conference", "Immigrant Rights Gala"],
    description: "Sponsor major humanitarian summits directly reaching unhoused, veteran, and refugee leaders while turning local NGO directors into champions for $3,526/yr command suites.",
    deliverables: [
      "Title sponsorship agreements for 3 national civic and humanitarian conferences",
      "Direct generation of 60+ qualified agency leads per event",
      "Co-marketing press release with prominent NGO partners"
    ]
  }
];

export const PRODUCT_PORTFOLIO = PRODUCT_ECOSYSTEM;

export const HIRING_PHASES = [
  {
    phaseId: "phase-1",
    name: "Phase 1: Executive Foundation & Pod Leads",
    timeline: "Month 1 - Month 3",
    targetHeadcount: "2 → 12 Team Members",
    focus: "Recruit CDO, CTO, and CMO, followed by Core Lead Engineers, Procurement Director, Growth Lead, and Head of Talent.",
    estimatedAnnualPayroll: "$2,240,000 / yr",
    milestoneTrigger: "$10M Wire Complete + PEO Active + C-Suite Hired",
    rolesToHire: [
      { title: "Chief Development Officer (CDO)", department: "Executive", count: 1, salaryRange: "$230,000 + 2.0% Equity" },
      { title: "Chief Technology Officer (CTO)", department: "Executive", count: 1, salaryRange: "$250,000 + 2.5% Equity" },
      { title: "Chief Marketing Officer (CMO)", department: "Executive", count: 1, salaryRange: "$220,000 + 1.75% Equity" },
      { title: "Lead Security & Cryptography Architect", department: "Engineering", count: 1, salaryRange: "$200,000 + 0.75% Equity" },
      { title: "Senior Full-Stack Engineers", department: "Engineering", count: 2, salaryRange: "$165,000 + 0.4% Equity" },
      { title: "Public Sector Procurement Director", department: "Sales", count: 1, salaryRange: "$175,000 + 0.5% Equity" },
      { title: "Senior Growth Marketing Lead", department: "Marketing", count: 1, salaryRange: "$155,000 + 0.4% Equity" },
      { title: "Head of People & Talent", department: "Operations", count: 1, salaryRange: "$140,000 + 0.35% Equity" }
    ]
  },
  {
    phaseId: "phase-2",
    name: "Phase 2: Scale Engineering & Public Sector BD",
    timeline: "Month 4 - Month 9",
    targetHeadcount: "13 → 30 Team Members",
    focus: "Expand GovTech sales pod to convert 30 UN agencies, build API connector team, deploy synthetic POC privacy engine.",
    estimatedAnnualPayroll: "$4,650,000 / yr",
    milestoneTrigger: "SOC 2 Type I readiness + $1.5M ARR run rate achieved",
    rolesToHire: [
      { title: "Cloud DevOps & SRE Engineers", department: "Engineering", count: 2, salaryRange: "$160,000" },
      { title: "API Connector Integration Engineers", department: "Engineering", count: 3, salaryRange: "$150,000" },
      { title: "Staff AI & Synthetic Data Engineer", department: "Product", count: 1, salaryRange: "$185,000" },
      { title: "Enterprise Account Executives (GovTech)", department: "Sales", count: 4, salaryRange: "$130,000 + Comm" },
      { title: "Solutions Engineers / Pre-Sales", department: "Sales", count: 2, salaryRange: "$145,000" },
      { title: "Content & Creative Producer", department: "Marketing", count: 1, salaryRange: "$110,000" },
      { title: "Cyber Club Community Manager", department: "Marketing", count: 1, salaryRange: "$95,000" },
      { title: "Senior Financial Controller / FP&A", department: "Operations", count: 1, salaryRange: "$160,000" },
      { title: "Customer Success Onboarding Leads", department: "Operations", count: 2, salaryRange: "$105,000" }
    ]
  },
  {
    phaseId: "phase-3",
    name: "Phase 3: Global Field Ops & Crossover Ramp",
    timeline: "Month 10 - Month 18",
    targetHeadcount: "31 → 55 Team Members",
    focus: "Global deployment across UN field offices, 24/7 support tier, mobile engineers, and reaching Dec 2027 profitability crossover.",
    estimatedAnnualPayroll: "$7,280,000 / yr",
    milestoneTrigger: "StateRAMP certification + Dec 2027 Profitability Crossover ($460k MRR)",
    rolesToHire: [
      { title: "Core Platform & Mobile Engineers (iOS/Android)", department: "Engineering", count: 6, salaryRange: "$145,000" },
      { title: "Security Operations & Compliance Analysts", department: "Engineering", count: 2, salaryRange: "$130,000" },
      { title: "Global NGO & UN Account Directors", department: "Sales", count: 4, salaryRange: "$140,000" },
      { title: "Commercial SMB Account Executives", department: "Sales", count: 3, salaryRange: "$95,000" },
      { title: "International Performance Marketers", department: "Marketing", count: 2, salaryRange: "$115,000" },
      { title: "24/7 Tier-1 & Tier-2 Support Specialists", department: "Operations", count: 6, salaryRange: "$65,000" },
      { title: "Operations & Facilities Coordinators", department: "Operations", count: 2, salaryRange: "$75,000" }
    ]
  }
];

export const DEPARTMENT_BUDGETS = [
  {
    department: "Engineering & Security",
    headcountTarget: 18,
    annualBudget: "$3,150,000",
    keyCostDrivers: "VouchKey cryptography, AWS GovCloud multi-region, API connectors, 24/7 SIEM"
  },
  {
    department: "Public Sector & Commercial Sales",
    headcountTarget: 15,
    annualBudget: "$2,200,000",
    keyCostDrivers: "30 UN Agency account teams, state agency SDRs, travel, synthetic POC demos"
  },
  {
    department: "Growth, Creative & Community",
    headcountTarget: 8,
    annualBudget: "$1,100,000",
    keyCostDrivers: "Performance marketing team, Cyber Club LMS content, creative production"
  },
  {
    department: "Operations, People & Support",
    headcountTarget: 9,
    annualBudget: "$950,000",
    keyCostDrivers: "HRIS/PEO, 60% health escrow administration, 24/7 tier-1 user support, compliance audits"
  },
  {
    department: "Executive Leadership",
    headcountTarget: 5,
    annualBudget: "$1,060,000",
    keyCostDrivers: "CEO, COO, CDO, CTO, CMO executive compensation, governance, legal counsel"
  }
];

