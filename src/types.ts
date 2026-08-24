export type TabType = 
  | 'overview'
  | 'executive_command'
  | 'foundation_checklist'
  | 'benefits_healthcare'
  | 'headcount_scaling'
  | 'product_ecosystem'
  | 'regulatory_compliance'
  | 'financial_engine';

export interface SubscriptionTier {
  name: string;
  product: string;
  monthlyPrice: number;
  activeSubscribers: number;
  projectedSubscribersMonth6: number;
  projectedSubscribersMonth14: number;
  allocatedToHealthBenefitsPercent: number;
}

export interface HealthCareRevenueModel {
  coverageTargetPercent: number; // 60%
  averagePremiumPerEmployeeMonth: number;
  dependentMultiplier: number;
  subscriptionTiers: SubscriptionTier[];
}

export interface ExecutiveRoleProfile {
  id: 'CEO' | 'COO' | 'CDO' | 'CTO' | 'CMO';
  title: string;
  currentStatus: 'Occupied' | 'Priority Hire (Month 1-2)';
  tagline: string;
  primaryMandate: string;
  budgetOwnership: string;
  keyResponsibilities: string[];
  first90DaysGoals: string[];
  kpis: string[];
  weeklyCadence: string;
  dependenciesOnOthers: {
    role: 'CEO' | 'COO' | 'CDO' | 'CTO' | 'CMO';
    interaction: string;
  }[];
  jobSpecSummary?: {
    idealBackground: string;
    targetComp: string;
    equityRange: string;
    interviewScorecard: string[];
  };
}

export type RaciRoleType = 'R' | 'A' | 'C' | 'I' | '-';

export interface RaciEntry {
  taskArea: string;
  category: string;
  CEO: RaciRoleType;
  COO: RaciRoleType;
  CDO: RaciRoleType;
  CTO: RaciRoleType;
  CMO: RaciRoleType;
  notes: string;
}

export type ActionCategory = 
  | 'payroll_banking'
  | 'benefits_compensation'
  | 'hiring_team'
  | 'regulatory_compliance'
  | 'tech_infrastructure'
  | 'marketing_growth'
  | 'public_sector_dev';

export type PriorityLevel = 'critical' | 'high' | 'medium';
export type TaskStatus = 'not_started' | 'in_progress' | 'completed';

export interface ActionItem {
  id: string;
  title: string;
  category: ActionCategory;
  assignedRole: 'CEO' | 'COO' | 'CDO' | 'CTO' | 'CMO';
  priority: PriorityLevel;
  status: TaskStatus;
  timeline: string;
  estimatedCost: string;
  vendorOptions: string[];
  description: string;
  deliverables: string[];
  complianceNotes?: string;
}

export interface HeadcountRole {
  id: string;
  title: string;
  department: 'Executive' | 'Engineering & Security' | 'Public Sector & Sales' | 'Growth & Marketing' | 'Operations & People' | 'Product & AI';
  phase: 'Phase 1 (M1-M3: 2→12)' | 'Phase 2 (M4-M9: 13→30)' | 'Phase 3 (M10-M18: 31→55)';
  headcountCount: number;
  avgBaseSalary: number;
  equityPoolPercent: number;
  priority: 'Immediate' | 'Fast Follow' | 'Scale Triggered';
  keyFocus: string;
}

export interface ProductPortfolioItem {
  id: string;
  name: string;
  acronym?: string;
  status: 'LIVE' | 'SEPT 2026' | 'IN PILOT';
  identityServed: string;
  tierStep: string;
  coreFeature: string;
  techStack: string;
  targetBuyer: string;
  complianceShield: string;
  pricingMonthlyEquivalent: number;
}

export interface ComplianceFramework {
  id: string;
  frameworkName: string;
  agencyOrStandard: string;
  status: 'Pre-Cleared' | 'In Audit Prep' | 'Active Requirement';
  relevance: string;
  keyRequirements: string[];
  budgetAllocated: string;
  leadOwner: 'CEO' | 'COO' | 'CDO' | 'CTO' | 'CMO';
  auditPartners: string[];
}
