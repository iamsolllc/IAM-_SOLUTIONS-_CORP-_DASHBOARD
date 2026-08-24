import React from 'react';
import { FUNDING_METRICS, PRODUCT_ECOSYSTEM } from '../data/startupPlanData';
import { TabType } from '../types';
import { 
  DollarSign, 
  Users, 
  Cpu, 
  ShieldCheck, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Building2,
  Lock,
  Globe2,
  FileCheck2
} from 'lucide-react';

interface OverviewViewProps {
  setActiveTab: (tab: TabType) => void;
  completedTasksCount: number;
  totalTasksCount: number;
}

export const OverviewView: React.FC<OverviewViewProps> = ({
  setActiveTab,
  completedTasksCount,
  totalTasksCount
}) => {
  const liveProductsCount = PRODUCT_ECOSYSTEM.filter(p => p.status === 'LIVE').length;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Banner Section Matching the Pitch Deck Cover */}
      <div className="relative rounded-2xl bg-[#0B132B] border-2 border-slate-800 p-6 sm:p-10 overflow-hidden shadow-2xl">
        {/* Blueprint Grid Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        
        {/* Corner Blueprint Crosshairs */}
        <div className="absolute top-3 left-3 font-mono text-xs text-[#FF5500] select-none">+</div>
        <div className="absolute top-3 right-3 font-mono text-xs text-[#FF5500] select-none">+</div>
        <div className="absolute bottom-3 left-3 font-mono text-xs text-[#FF5500] select-none">+</div>
        <div className="absolute bottom-3 right-3 font-mono text-xs text-[#FF5500] select-none">+</div>

        {/* Orange Accent Top Border */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FF5500]" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FF5500]/15 border border-[#FF5500]/40 text-[#FF5500] font-mono text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              POST-SEED CORPORATE GOVERNANCE & EXECUTION ROADMAP
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-900/80 border border-slate-700 text-slate-300">
                Round: <strong className="text-white">$10M Scale Round</strong>
              </span>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-700/50 text-emerald-300 font-bold">
                $40M Pre / $50M Post
              </span>
            </div>
          </div>

          <div>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-none">
              Identity AI — The $10M Scale Round
            </h1>
            <p className="mt-3 text-xl sm:text-2xl font-display font-semibold text-blue-400">
              Nine products. Eight live. Now we scale.
            </p>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              Comprehensive startup operational plan covering 50-state payroll, commercial banking & debt factoring, 
              the mandated <span className="text-[#FF5500] font-semibold">60% health care coverage model funded via application subscriptions</span>, 
              public sector pre-cleared vendor monetization, C-Suite RACI matrix (CEO, COO, CDO, CTO, CMO), and the 2-to-55 headcount expansion.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-xs font-mono text-slate-400">TOTAL CAPITAL ALLOCATED</div>
              <div className="text-2xl font-bold font-display text-white mt-0.5">$10,000,000</div>
              <div className="text-[11px] font-mono text-[#FF5500]">27 Months Runway Buffer</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-xs font-mono text-slate-400">PRODUCT ECOSYSTEM</div>
              <div className="text-2xl font-bold font-display text-blue-400 mt-0.5">{liveProductsCount} Live / 9 Total</div>
              <div className="text-[11px] font-mono text-slate-300">VouchKey Hub + Verticals</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-xs font-mono text-slate-400">HEALTH CARE REVENUE RULE</div>
              <div className="text-2xl font-bold font-display text-emerald-400 mt-0.5">60% Covered</div>
              <div className="text-[11px] font-mono text-emerald-300">100% App Subscriptions Backed</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-xs font-mono text-slate-400">ORGANIZATION SCALING</div>
              <div className="text-2xl font-bold font-display text-orange-400 mt-0.5">2 → 55 Team</div>
              <div className="text-[11px] font-mono text-slate-300">Phase 1 (12) • P2 (30) • P3 (55)</div>
            </div>
          </div>
        </div>
      </div>

      {/* The $10M Fuel Allocation Breakdown (Slide 15 from Deck) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-[#FF5500]" />
              The $10M Fuel Allocation & Capital Deployment
            </h2>
            <p className="text-xs text-slate-400 font-mono">
              Disciplined tranche structure aligned with the $10M Seed/Scale Pitch Deck
            </p>
          </div>
          <button 
            onClick={() => setActiveTab('financial_engine')}
            className="text-xs text-[#FF5500] hover:text-orange-300 font-mono flex items-center gap-1 font-semibold"
          >
            View Financial Engine <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Visual Progress Bar */}
        <div className="h-5 rounded-lg overflow-hidden flex bg-slate-900 border border-slate-800 shadow-inner">
          <div style={{ width: '60%' }} className="bg-[#FF5500] flex items-center justify-center text-[10px] font-mono font-bold text-black" title="60% Marketing & Acquisition ($6.0M)">60% Marketing ($6.0M)</div>
          <div style={{ width: '20%' }} className="bg-blue-600 flex items-center justify-center text-[10px] font-mono font-bold text-white" title="20% Team Build ($2.0M)">20% Team ($2.0M)</div>
          <div style={{ width: '9%' }} className="bg-indigo-500 flex items-center justify-center text-[9px] font-mono font-bold text-white" title="9% Infrastructure ($900K)">9% Infra ($900K)</div>
          <div style={{ width: '6%' }} className="bg-emerald-500 flex items-center justify-center text-[9px] font-mono font-bold text-black" title="6% Compliance ($600K)">6% Comp ($600K)</div>
          <div style={{ width: '5%' }} className="bg-slate-500 flex items-center justify-center text-[8px] font-mono font-bold text-white" title="5% Reserves ($500K)">5%</div>
        </div>

        {/* 5 Tranche Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/90 border-2 border-[#FF5500]/40 relative overflow-hidden">
            <div className="text-2xl font-black font-display text-[#FF5500]">60%</div>
            <div className="text-xs font-bold text-white font-mono">$6,000,000</div>
            <div className="text-xs font-semibold text-slate-300 mt-2">Marketing & Acquisition</div>
            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
              Global paid acquisition scaling (Apple Search Ads, Google, LinkedIn) maintaining the $0.18 CAC entry engine.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border-2 border-blue-500/40 relative overflow-hidden">
            <div className="text-2xl font-black font-display text-blue-400">20%</div>
            <div className="text-xs font-bold text-white font-mono">$2,000,000</div>
            <div className="text-xs font-semibold text-slate-300 mt-2">Team Build (2 to 55)</div>
            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
              Recruiting C-Suite (CDO, CTO, CMO) and expanding engineering, public sector sales, and growth pods.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border-2 border-indigo-500/40 relative overflow-hidden">
            <div className="text-2xl font-black font-display text-indigo-400">9%</div>
            <div className="text-xs font-bold text-white font-mono">$900,000</div>
            <div className="text-xs font-semibold text-slate-300 mt-2">AWS & Infrastructure</div>
            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
              Multi-region GovCloud architecture, KMS HSM encryption cluster, and universal API connector layer.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border-2 border-emerald-500/40 relative overflow-hidden">
            <div className="text-2xl font-black font-display text-emerald-400">6%</div>
            <div className="text-xs font-bold text-white font-mono">$600,000</div>
            <div className="text-xs font-semibold text-slate-300 mt-2">Compliance & Audits</div>
            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
              SOC 2 Type II, StateRAMP, FedRAMP, HIPAA BAA certifications, and continuous Vanta/Drata monitoring.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border-2 border-slate-700/60 relative overflow-hidden">
            <div className="text-2xl font-black font-display text-slate-300">5%</div>
            <div className="text-xs font-bold text-white font-mono">$500,000</div>
            <div className="text-xs font-semibold text-slate-300 mt-2">Contingency Reserves</div>
            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
              Working capital reserve, unexpected procurement bonding, and international entity logistics.
            </p>
          </div>
        </div>
      </div>

      {/* Strategic Foundation Pillars (Core Execution Mandates) */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
          <Building2 className="w-5 h-5 text-blue-400" />
          The 6 Strategic Startup Operational Pillars
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Pillar 1: Payroll & Banking */}
          <div 
            onClick={() => setActiveTab('foundation_checklist')}
            className="group p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#FF5500]/60 transition-all cursor-pointer shadow-lg space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-lg bg-[#FF5500]/15 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                Pillar 01
              </span>
            </div>
            <h3 className="font-display font-bold text-base text-white group-hover:text-[#FF5500] transition-colors">
              Payroll, PEO & Factoring Rails
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              50-state automated tax withholdings (Rippling/Deel), FDIC $5M multi-bank treasury, 409A common valuation, and ARR venture debt/factoring facility.
            </p>
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Status: <strong className="text-emerald-400">In Motion</strong></span>
              <span className="text-[#FF5500] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Checklist <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Pillar 2: 60% Health Care via Subscriptions */}
          <div 
            onClick={() => setActiveTab('benefits_healthcare')}
            className="group p-5 rounded-xl bg-slate-900/80 border-2 border-emerald-500/40 hover:border-emerald-400 transition-all cursor-pointer shadow-lg space-y-3 relative"
          >
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-emerald-900/80 border border-emerald-600 text-emerald-200 text-[10px] font-mono font-bold">
              USER MANDATE
            </div>
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 mr-20">
                Pillar 02
              </span>
            </div>
            <h3 className="font-display font-bold text-base text-white group-hover:text-emerald-400 transition-colors">
              60% Health Care Coverage Plan
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Directly routes SaaS subscription cash inflows ($4/mo Survival Guide, DineKey, Business Manager) into a dedicated escrow covering 60% of employee medical/dental/vision.
            </p>
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Coverage: <strong className="text-emerald-400">60% Match</strong></span>
              <span className="text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Revenue Model <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Pillar 3: Executive Leadership Expansion */}
          <div 
            onClick={() => setActiveTab('executive_command')}
            className="group p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/60 transition-all cursor-pointer shadow-lg space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                Pillar 03
              </span>
            </div>
            <h3 className="font-display font-bold text-base text-white group-hover:text-blue-400 transition-colors">
              Executive RACI & C-Suite Roles
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Full organizational mapping for CEO, COO, and priority incoming C-Suite hires: CDO (UN/Gov Sales), CTO (VouchKey & Security), and CMO ($6M Performance Funnel).
            </p>
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Roles: <strong className="text-blue-300">5 C-Level Profiles</strong></span>
              <span className="text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                RACI Matrix <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Pillar 4: Headcount 2 to 55 */}
          <div 
            onClick={() => setActiveTab('headcount_scaling')}
            className="group p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/60 transition-all cursor-pointer shadow-lg space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                Pillar 04
              </span>
            </div>
            <h3 className="font-display font-bold text-base text-white group-hover:text-indigo-400 transition-colors">
              2 → 55 Team Scaling Plan
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Phase 1 (2→12: Core Leads), Phase 2 (13→30: Growth & GovTech Pods), and Phase 3 (31→55: Scale Execution) with salary and equity budgeting.
            </p>
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Budget: <strong className="text-indigo-300">$2.0M Seed Allocation</strong></span>
              <span className="text-indigo-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Hiring Model <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Pillar 5: Product Ecosystem & VouchKey */}
          <div 
            onClick={() => setActiveTab('product_ecosystem')}
            className="group p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-orange-500/60 transition-all cursor-pointer shadow-lg space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-lg bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                Pillar 05
              </span>
            </div>
            <h3 className="font-display font-bold text-base text-white group-hover:text-orange-400 transition-colors">
              9 Products & VouchKey Token Hub
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Zero raw SSNs stored, per-org cryptographic keys, VAWA-safe sealing, tamper-evident audit trails, and the UNICEF UNITE synthetic POC hack.
            </p>
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Live: <strong className="text-orange-400">8 Live / 1 Sept 2026</strong></span>
              <span className="text-orange-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Architecture <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Pillar 6: Public Sector Pre-Cleared Moat */}
          <div 
            onClick={() => setActiveTab('regulatory_compliance')}
            className="group p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/60 transition-all cursor-pointer shadow-lg space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                Pillar 06
              </span>
            </div>
            <h3 className="font-display font-bold text-base text-white group-hover:text-emerald-400 transition-colors">
              Public Sector Moat (UN + US Gov)
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              SAM.gov approved vendor status, UN Global Marketplace (30 agencies pre-cleared), SOC 2 Type II, StateRAMP, and HIPAA BAA infrastructure.
            </p>
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Status: <strong className="text-emerald-400">Pre-Cleared Vendor</strong></span>
              <span className="text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Compliance <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Engineering Summary (Slide 16 from Deck) */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950/30 to-slate-900 border border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5500]" />
            <h3 className="font-display font-bold text-lg text-white">
              Financial Engineering: Protecting Founders & Equity
            </h3>
          </div>
          <span className="font-mono text-xs text-emerald-400 font-semibold px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-800">
            December 2027 Crossover into Cash-Flow Positive
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
            <div className="font-mono font-bold text-[#FF5500] text-sm">1. Equity for Reach</div>
            <p className="text-slate-300 leading-relaxed">
              The $10M seed equity round is dedicated to customer acquisition, market dominance, and institutional awareness ($6M paid ad funnel + $2M team scale).
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
            <div className="font-mono font-bold text-blue-400 text-sm">2. Debt & Factoring for OPEX</div>
            <p className="text-slate-300 leading-relaxed">
              Operating costs, vendor payables, and enterprise onboarding are financed through venture debt & invoice factoring against booked UN and Gov purchase orders.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
            <div className="font-mono font-bold text-emerald-400 text-sm">3. Subscriptions Fund Benefits</div>
            <p className="text-slate-300 leading-relaxed">
              Live recurring application revenues (Survival Guide, DineKey, Business Manager) are quarantined to cover 60% of all employee health care premiums.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
