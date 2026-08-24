import React, { useState } from 'react';
import { FUNDING_METRICS, HEALTHCARE_REVENUE_CONFIG } from '../data/startupPlanData';
import { 
  DollarSign, 
  TrendingUp, 
  ShieldCheck, 
  PieChart, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Sliders,
  Landmark,
  Scale,
  HeartHandshake,
  Users,
  PiggyBank,
  AlertTriangle,
  Activity,
  BookOpen,
  Briefcase,
  Zap,
  Info,
  RefreshCw
} from 'lucide-react';

export const FinancialEngineView: React.FC = () => {
  // Factoring & Overall Projections State
  const [govFactoringVolume, setGovFactoringVolume] = useState<number>(2500000); // $2.5M in factoring lines
  const [growthScenario, setGrowthScenario] = useState<'base' | 'accelerated' | 'conservative'>('base');

  // Healthcare Subsidy Simulation State (Specific to IAI Survival Guide & Business Manager)
  const [healthHeadcount, setHealthHeadcount] = useState<number>(12); // Default to Phase 1 (12 team members)
  const [survivalGuideSubs, setSurvivalGuideSubs] = useState<number>(14000);
  const [survivalGuideAllocationPct, setSurvivalGuideAllocationPct] = useState<number>(100); // 100% of $4/mo
  const [businessManagerSubs, setBusinessManagerSubs] = useState<number>(650);
  const [businessManagerAllocationPct, setBusinessManagerAllocationPct] = useState<number>(50); // 50% of $32/mo

  // Multipliers based on scenario
  const getARRMultiplier = () => {
    switch (growthScenario) {
      case 'accelerated': return 1.35;
      case 'conservative': return 0.8;
      default: return 1.0;
    }
  };

  const projectedArr2027 = 8400000 * getARRMultiplier();
  const projectedArr2028 = FUNDING_METRICS.targetARRByDec2028 * getARRMultiplier();
  const equityDilutionSavedByFactoring = (govFactoringVolume / 50000000) * 100; // % of equity saved

  // --- Healthcare Subsidy Calculations ---
  const grossMonthlyPremiumPerEmployee = HEALTHCARE_REVENUE_CONFIG.averagePremiumPerEmployeeMonth * HEALTHCARE_REVENUE_CONFIG.dependentMultiplier; // $975/mo
  const totalGrossMonthlyHealthCost = healthHeadcount * grossMonthlyPremiumPerEmployee;
  const employer60PercentMandate = totalGrossMonthlyHealthCost * 0.60; // $585/mo per employee
  const employee40PercentShare = totalGrossMonthlyHealthCost * 0.40; // $390/mo per employee

  // Product Inflows
  const survivalGuideTotalMRR = survivalGuideSubs * 4;
  const survivalGuideHealthInflow = survivalGuideTotalMRR * (survivalGuideAllocationPct / 100);

  const businessManagerTotalMRR = businessManagerSubs * 32;
  const businessManagerHealthInflow = businessManagerTotalMRR * (businessManagerAllocationPct / 100);

  const totalDualProductHealthInflow = survivalGuideHealthInflow + businessManagerHealthInflow;
  const totalDualProductMRR = survivalGuideTotalMRR + businessManagerTotalMRR;

  const healthCoverageRatio = (totalDualProductHealthInflow / employer60PercentMandate) * 100;
  const netMonthlyHealthSurplus = totalDualProductHealthInflow - employer60PercentMandate;
  const annualSurplusReserves = netMonthlyHealthSurplus * 12;

  // Breakeven metrics
  const survivalGuideBreakevenSubs = Math.ceil(employer60PercentMandate / (4 * (survivalGuideAllocationPct / 100)));
  const businessManagerBreakevenSubs = Math.ceil(employer60PercentMandate / (32 * (businessManagerAllocationPct / 100)));

  // Preset quick scenarios for healthcare module
  const applyHealthScenario = (preset: 'seed' | 'phase1' | 'crossover' | 'scale') => {
    switch (preset) {
      case 'seed':
        setHealthHeadcount(2);
        setSurvivalGuideSubs(3500);
        setBusinessManagerSubs(120);
        break;
      case 'phase1':
        setHealthHeadcount(12);
        setSurvivalGuideSubs(14000);
        setBusinessManagerSubs(650);
        break;
      case 'crossover':
        setHealthHeadcount(30);
        setSurvivalGuideSubs(28000);
        setBusinessManagerSubs(1600);
        break;
      case 'scale':
        setHealthHeadcount(55);
        setSurvivalGuideSubs(65000);
        setBusinessManagerSubs(3400);
        break;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0B132B] via-slate-900 to-[#0B132B] border-2 border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF5500]" />
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-700/50 font-mono text-xs mb-2">
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                FINANCIAL ENGINEERING & EQUITY DEFENSE
              </div>
              <h1 className="text-2xl sm:text-3xl font-display font-black text-white">
                $10M Capital Deployment & Financial Architecture
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Dual-capital strategy: Equity is deployed purely for top-line reach ($6.0M paid ads), while operating costs are leveraged against government POs via contract factoring, and 60% employee health care is funded via live SaaS subscriptions.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-right">
              <div className="text-slate-400">PROFITABILITY CROSSOVER</div>
              <div className="text-xl font-bold text-emerald-400 font-display">Month 14</div>
              <div className="text-[10px] text-slate-400">December 2027 Target</div>
            </div>
          </div>
        </div>
      </div>

      {/* The 3 Core Financial Pillars (Slide 16 from Pitch Deck) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pillar 1: Equity for Reach */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border-2 border-[#FF5500]/50 space-y-3 relative overflow-hidden">
          <div className="w-10 h-10 rounded-xl bg-[#FF5500]/15 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h2 className="font-display font-bold text-lg text-white">1. Equity for Reach ($10M)</h2>
          <div className="text-xs font-mono text-[#FF5500] font-semibold">60% ($6.0M) Paid Acquisition</div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Equity fuel is preserved strictly for top-line customer acquisition, digital ad scaling (Apple Search Ads / Google), and dominant market positioning.
          </p>
        </div>

        {/* Pillar 2: Debt & Factoring for OPEX */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border-2 border-blue-500/50 space-y-3 relative overflow-hidden">
          <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Landmark className="w-5 h-5" />
          </div>
          <h2 className="font-display font-bold text-lg text-white">2. Debt & Factoring for OPEX</h2>
          <div className="text-xs font-mono text-blue-400 font-semibold">ARR Venture Debt + PO Factoring</div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Operating payroll and enterprise onboarding are financed through invoice factoring against booked UN and Gov purchase orders, preventing founder dilution.
          </p>
        </div>

        {/* Pillar 3: Subscriptions for Benefits */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border-2 border-emerald-500/50 space-y-3 relative overflow-hidden">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Scale className="w-5 h-5" />
          </div>
          <h2 className="font-display font-bold text-lg text-white">3. Subscriptions Fund 60% Health</h2>
          <div className="text-xs font-mono text-emerald-400 font-semibold">Self-Sustaining Benefit Pool</div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Recurring live SaaS subscriptions from the $4/mo Survival Guide and $32/mo Business Manager are locked into an escrow account to cover 60% of employee healthcare.
          </p>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MODULE: 60% HEALTHCARE SUBSIDY VS DUAL-PRODUCT SUBSCRIPTION ENGINE      */}
      {/* Specifically calculating IAI Survival Guide ($4/mo) & Business Manager ($32/mo) */}
      {/* ========================================================================= */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/95 border-2 border-emerald-500/60 space-y-6 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-[#FF5500] to-emerald-400" />
        
        {/* Module Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-slate-800">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-bold">
              <HeartHandshake className="w-4 h-4" />
              LIVE REVENUE ESCROW ENGINE
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-black text-white flex items-center gap-2.5">
              60% Health Care Subsidy vs. Real-Time Product Revenue
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl">
              Calculates how recurring subscription inflows from <strong className="text-emerald-300">IAI Survival Guide ($4/mo)</strong> and <strong className="text-emerald-300">IAI Business Manager ($32/mo)</strong> fund the required <strong>60% employer health care subsidy</strong> across all growth stages.
            </p>
          </div>

          {/* Quick Presets */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-mono">
            <span className="text-slate-400 px-2 text-[11px]">Scale Presets:</span>
            <button
              onClick={() => applyHealthScenario('seed')}
              className={`px-2.5 py-1 rounded-lg transition-all ${healthHeadcount === 2 ? 'bg-emerald-500 text-black font-bold' : 'text-slate-300 hover:bg-slate-800'}`}
            >
              Seed (2)
            </button>
            <button
              onClick={() => applyHealthScenario('phase1')}
              className={`px-2.5 py-1 rounded-lg transition-all ${healthHeadcount === 12 ? 'bg-emerald-500 text-black font-bold' : 'text-slate-300 hover:bg-slate-800'}`}
            >
              Phase 1 (12)
            </button>
            <button
              onClick={() => applyHealthScenario('crossover')}
              className={`px-2.5 py-1 rounded-lg transition-all ${healthHeadcount === 30 ? 'bg-emerald-500 text-black font-bold' : 'text-slate-300 hover:bg-slate-800'}`}
            >
              Month 14 (30)
            </button>
            <button
              onClick={() => applyHealthScenario('scale')}
              className={`px-2.5 py-1 rounded-lg transition-all ${healthHeadcount === 55 ? 'bg-emerald-500 text-black font-bold' : 'text-slate-300 hover:bg-slate-800'}`}
            >
              Target (55)
            </button>
          </div>
        </div>

        {/* Real-Time Live KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>ACTIVE HEADCOUNT</span>
              <Users className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <div className="text-2xl font-bold font-display text-white">
              {healthHeadcount} <span className="text-xs font-normal text-slate-400">Employees</span>
            </div>
            <div className="text-[10px] font-mono text-slate-400">
              Total gross cost: ${(totalGrossMonthlyHealthCost).toLocaleString()}/mo
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>60% EMPLOYER OBLIGATION</span>
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF5500]" />
            </div>
            <div className="text-2xl font-bold font-display text-[#FF5500]">
              ${(employer60PercentMandate).toLocaleString()} <span className="text-xs font-normal text-slate-400">/mo</span>
            </div>
            <div className="text-[10px] font-mono text-slate-400">
              ${(employer60PercentMandate * 12).toLocaleString()} / year employer subsidy
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border-2 border-emerald-500/40 space-y-1">
            <div className="text-[11px] font-mono text-emerald-400 flex items-center justify-between">
              <span>DEDICATED HEALTH INFLOW</span>
              <PiggyBank className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-2xl font-bold font-display text-emerald-400">
              ${(totalDualProductHealthInflow).toLocaleString()} <span className="text-xs font-normal text-slate-400">/mo</span>
            </div>
            <div className="text-[10px] font-mono text-slate-400">
              From ${(totalDualProductMRR).toLocaleString()}/mo dual-product MRR
            </div>
          </div>

          <div className={`p-4 rounded-xl border-2 space-y-1 ${healthCoverageRatio >= 100 ? 'bg-emerald-950/40 border-emerald-500/60' : 'bg-amber-950/40 border-amber-500/60'}`}>
            <div className="text-[11px] font-mono text-slate-300 flex items-center justify-between">
              <span>COVERAGE RATIO</span>
              <Activity className={`w-3.5 h-3.5 ${healthCoverageRatio >= 100 ? 'text-emerald-400' : 'text-amber-400'}`} />
            </div>
            <div className={`text-2xl font-bold font-display ${healthCoverageRatio >= 100 ? 'text-emerald-400' : 'text-amber-400'}`}>
              {healthCoverageRatio.toFixed(1)}%
            </div>
            <div className="text-[10px] font-mono text-slate-300 font-semibold">
              {healthCoverageRatio >= 100 ? (
                <span className="text-emerald-300 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 inline" /> Fully Self-Sustaining
                </span>
              ) : (
                <span className="text-amber-300 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3 text-amber-400 inline" /> Scaling Gap: -${Math.abs(netMonthlyHealthSurplus).toLocaleString()}/mo
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Dual Input Controls & Real-Time Trackers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Product Revenue Inflow Drivers (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* 1. Headcount Slider */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label className="font-semibold text-white flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  Team Headcount:
                </label>
                <span className="font-mono font-bold text-white text-sm bg-slate-900 px-2.5 py-0.5 rounded border border-slate-700">
                  {healthHeadcount} Employees
                </span>
              </div>
              <input
                type="range"
                min={2}
                max={55}
                step={1}
                value={healthHeadcount}
                onChange={(e) => setHealthHeadcount(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#FF5500]"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>2 (Seed)</span>
                <span>12 (Phase 1)</span>
                <span>30 (Phase 2)</span>
                <span>55 (Full Scale)</span>
              </div>
            </div>

            {/* 2. IAI Survival Guide Slider & Tracking Card */}
            <div className="p-4 rounded-xl bg-slate-950 border-2 border-emerald-600/40 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">IAI Survival Guide</h3>
                    <div className="text-[11px] font-mono text-emerald-400">$4.00/month • Global Paid Funnel ($0.18 CAC)</div>
                  </div>
                </div>
                <div className="text-right font-mono text-xs">
                  <div className="text-emerald-400 font-bold">${survivalGuideHealthInflow.toLocaleString()}/mo to Health</div>
                  <div className="text-[10px] text-slate-400">${survivalGuideTotalMRR.toLocaleString()}/mo Total MRR</div>
                </div>
              </div>

              {/* Slider for subscribers */}
              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between text-xs text-slate-300 font-mono">
                  <span>Active Subscribers:</span>
                  <span className="text-white font-bold">{survivalGuideSubs.toLocaleString()} learners</span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={75000}
                  step={500}
                  value={survivalGuideSubs}
                  onChange={(e) => setSurvivalGuideSubs(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>1,000 (Launch)</span>
                  <span>18,000 (M6 Target)</span>
                  <span>65,000 (M14 Scale)</span>
                </div>
              </div>

              {/* Escrow Allocation Toggle */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs">
                <span className="text-slate-400 font-mono text-[11px]">Escrow Allocation Share:</span>
                <div className="flex items-center gap-2">
                  {[75, 90, 100].map((pct) => (
                    <button
                      key={pct}
                      onClick={() => setSurvivalGuideAllocationPct(pct)}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono transition-all ${
                        survivalGuideAllocationPct === pct
                          ? 'bg-emerald-500 text-black font-bold'
                          : 'bg-slate-900 text-slate-400 border border-slate-800'
                      }`}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. IAI Business Manager Slider & Tracking Card */}
            <div className="p-4 rounded-xl bg-slate-950 border-2 border-blue-600/40 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">IAI Business Manager</h3>
                    <div className="text-[11px] font-mono text-blue-400">$32.00/month ($322–$405/yr) • Launch Sept 2026</div>
                  </div>
                </div>
                <div className="text-right font-mono text-xs">
                  <div className="text-blue-400 font-bold">${businessManagerHealthInflow.toLocaleString()}/mo to Health</div>
                  <div className="text-[10px] text-slate-400">${businessManagerTotalMRR.toLocaleString()}/mo Total MRR</div>
                </div>
              </div>

              {/* Slider for subscribers */}
              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between text-xs text-slate-300 font-mono">
                  <span>Active Consulting & Firm Subscribers:</span>
                  <span className="text-white font-bold">{businessManagerSubs.toLocaleString()} firms</span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={5000}
                  step={50}
                  value={businessManagerSubs}
                  onChange={(e) => setBusinessManagerSubs(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-400"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>50 (Pilot)</span>
                  <span>850 (M6 Target)</span>
                  <span>3,400 (M14 Scale)</span>
                </div>
              </div>

              {/* Escrow Allocation Toggle */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs">
                <span className="text-slate-400 font-mono text-[11px]">Escrow Allocation Share:</span>
                <div className="flex items-center gap-2">
                  {[25, 50, 75].map((pct) => (
                    <button
                      key={pct}
                      onClick={() => setBusinessManagerAllocationPct(pct)}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono transition-all ${
                        businessManagerAllocationPct === pct
                          ? 'bg-blue-500 text-black font-bold'
                          : 'bg-slate-900 text-slate-400 border border-slate-800'
                      }`}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Escrow Waterfall & Breakeven Analytics (5 cols) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            
            {/* Visual Escrow Status Card */}
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h4 className="font-display font-bold text-white text-sm flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  Health Escrow Cash Flow Status
                </h4>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold ${healthCoverageRatio >= 100 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'}`}>
                  {healthCoverageRatio >= 100 ? 'SELF-FUNDED' : 'SUBSIDIZED GAP'}
                </span>
              </div>

              {/* Progress visual */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Coverage Progress:</span>
                  <span className="text-white font-bold">{healthCoverageRatio.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden border border-slate-800 relative">
                  <div
                    style={{ width: `${Math.min(healthCoverageRatio, 100)}%` }}
                    className={`h-full transition-all duration-300 ${healthCoverageRatio >= 100 ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : 'bg-gradient-to-r from-amber-500 to-orange-400'}`}
                  />
                </div>
              </div>

              {/* Product Contribution Breakdown */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <div className="text-[11px] font-mono uppercase text-slate-400">Escrow Inflow Contribution:</div>
                
                {/* Survival Guide contribution */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span>IAI Survival Guide ($4/mo)</span>
                  </div>
                  <span className="font-mono text-emerald-400 font-bold">
                    ${survivalGuideHealthInflow.toLocaleString()}/mo ({totalDualProductHealthInflow > 0 ? ((survivalGuideHealthInflow / totalDualProductHealthInflow) * 100).toFixed(0) : 0}%)
                  </span>
                </div>

                {/* Business Manager contribution */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                    <span>IAI Business Manager ($32/mo)</span>
                  </div>
                  <span className="font-mono text-blue-400 font-bold">
                    ${businessManagerHealthInflow.toLocaleString()}/mo ({totalDualProductHealthInflow > 0 ? ((businessManagerHealthInflow / totalDualProductHealthInflow) * 100).toFixed(0) : 0}%)
                  </span>
                </div>
              </div>

              {/* Net Surplus / Reserve Accumulation */}
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/90 space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-mono">Net Monthly Escrow Margin:</span>
                  <span className={`font-mono font-bold ${netMonthlyHealthSurplus >= 0 ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {netMonthlyHealthSurplus >= 0 ? `+$${netMonthlyHealthSurplus.toLocaleString()}/mo` : `-$${Math.abs(netMonthlyHealthSurplus).toLocaleString()}/mo`}
                  </span>
                </div>
                <div className="flex justify-between items-center text-[11px] text-slate-400 font-mono">
                  <span>Annual Reserve Accumulation:</span>
                  <span className="text-white font-semibold">${(annualSurplusReserves > 0 ? annualSurplusReserves : 0).toLocaleString()}/yr</span>
                </div>
              </div>
            </div>

            {/* Breakeven Threshold Insights */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Solo-Product 100% Breakeven Milestones (for {healthHeadcount} Staff):
              </div>
              <ul className="space-y-1.5 text-slate-300 text-[11px] font-mono">
                <li className="flex items-center justify-between">
                  <span className="text-slate-400">• Survival Guide Only ($4/mo):</span>
                  <span className="text-emerald-300 font-bold">{survivalGuideBreakevenSubs.toLocaleString()} subscribers</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-400">• Business Manager Only ($32/mo @ {businessManagerAllocationPct}%):</span>
                  <span className="text-blue-300 font-bold">{businessManagerBreakevenSubs.toLocaleString()} subscribers</span>
                </li>
              </ul>
            </div>

            {/* PEO Bank Sync Architecture Note */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <div className="text-slate-300 font-semibold flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-blue-400" />
                Stripe &rarr; Mercury Health Escrow &rarr; Rippling PEO
              </div>
              <p className="leading-relaxed text-slate-400">
                Stripe payouts from $4/mo and $32/mo tiers are swept directly into the Mercury Health Escrow account, providing automated settlement for Rippling PEO's Section 125 health deductions.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Interactive Factoring & Equity Defense Simulator */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border-2 border-slate-800 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <h2 className="text-lg font-display font-bold text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-[#FF5500]" />
              Contract Factoring & Runway Leverage Calculator
            </h2>
            <p className="text-xs text-slate-400 font-mono">
              Simulate government contract factoring lines to calculate non-dilutive OPEX leverage
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400">Growth Trajectory:</span>
            {(['conservative', 'base', 'accelerated'] as const).map((scen) => (
              <button
                key={scen}
                onClick={() => setGrowthScenario(scen)}
                className={`px-3 py-1 rounded-lg text-xs font-mono capitalize transition-all ${
                  growthScenario === scen
                    ? 'bg-[#FF5500] text-black font-bold'
                    : 'bg-slate-950 text-slate-400 border border-slate-800'
                }`}
              >
                {scen}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Factoring Slider */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <label className="font-semibold text-white">
              Projected UN & Gov Contract Factoring Line (against booked purchase orders):
            </label>
            <span className="font-mono font-bold text-emerald-400 text-sm">
              ${govFactoringVolume.toLocaleString()}
            </span>
          </div>
          <input
            type="range"
            min={500000}
            max={8000000}
            step={250000}
            value={govFactoringVolume}
            onChange={(e) => setGovFactoringVolume(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-500">
            <span>$500K Base Factoring</span>
            <span>$4.0M Multi-Agency</span>
            <span>$8.0M Full Enterprise</span>
          </div>
        </div>

        {/* Dynamic Projections */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <div className="text-[10px] font-mono text-slate-400">EQUITY DILUTION SAVED</div>
            <div className="text-2xl font-bold font-display text-[#FF5500]">
              +{equityDilutionSavedByFactoring.toFixed(1)}%
            </div>
            <div className="text-[11px] text-slate-400">Founder equity preserved via debt rails</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <div className="text-[10px] font-mono text-slate-400">DEC 2027 RUN-RATE (MONTH 14)</div>
            <div className="text-2xl font-bold font-display text-emerald-400">
              ${(projectedArr2027 / 1000000).toFixed(2)}M ARR
            </div>
            <div className="text-[11px] text-slate-400">Profitability crossover point</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <div className="text-[10px] font-mono text-slate-400">DEC 2028 TARGET SCALE</div>
            <div className="text-2xl font-bold font-display text-blue-400">
              ${(projectedArr2028 / 1000000).toFixed(2)}M ARR
            </div>
            <div className="text-[11px] text-slate-400">Series A/B ready at premium valuation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

