import React from 'react';
import { TabType } from '../types';
import { 
  Layers, 
  Users, 
  CheckSquare, 
  HeartHandshake, 
  TrendingUp, 
  ShieldCheck, 
  DollarSign, 
  Cpu, 
  Flame
} from 'lucide-react';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  completedTasksCount: number;
  totalTasksCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  completedTasksCount,
  totalTasksCount
}) => {
  const tabs: { id: TabType; label: string; icon: React.FC<{ className?: string }>; badge?: string }[] = [
    { id: 'overview', label: 'Scale Deck & Summary', icon: Layers },
    { id: 'executive_command', label: 'Executive RACI & Roles', icon: Users, badge: '5 C-Suite' },
    { id: 'foundation_checklist', label: 'Startup Setup Checklist', icon: CheckSquare, badge: `${completedTasksCount}/${totalTasksCount}` },
    { id: 'benefits_healthcare', label: '60% Health Care & Subs Model', icon: HeartHandshake, badge: 'Key Mandate' },
    { id: 'headcount_scaling', label: '2 → 55 Headcount Plan', icon: TrendingUp, badge: '3 Phases' },
    { id: 'product_ecosystem', label: '9 Products & VouchKey', icon: Cpu, badge: '8 Live' },
    { id: 'regulatory_compliance', label: 'UN & Gov Compliance Moat', icon: ShieldCheck, badge: 'Pre-Cleared' },
    { id: 'financial_engine', label: '$10M Financial Engineering', icon: DollarSign, badge: 'Dec 2027' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#080D1A]/95 backdrop-blur-md border-b border-slate-800">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-[#FF5500]/20 via-blue-950/40 to-[#FF5500]/20 border-b border-[#FF5500]/30 px-4 py-1.5 text-xs text-slate-300 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#FF5500] text-black font-bold text-[10px] tracking-wider uppercase">
            <Flame className="w-3 h-3 text-black fill-current" /> $10M Scale Round
          </span>
          <span className="font-mono text-slate-200 font-semibold">$40M Pre / $50M Post</span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="hidden sm:inline text-slate-300">Nine products. Eight live. Now we scale.</span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[11px]">
          <span className="text-emerald-400 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            SAM.gov & UN 30-Agency Approved
          </span>
          <span className="text-slate-500">|</span>
          <span className="text-orange-400">
            60% Health Care Revenue Escrow: <strong className="text-white">Active</strong>
          </span>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Tagline */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('overview')}>
            <div className="w-10 h-10 rounded-lg bg-[#FF5500] flex items-center justify-center font-display font-black text-black text-xl shadow-lg shadow-[#FF5500]/25 border border-orange-400">
              IAI
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg tracking-tight text-white">IDENTITY AI</span>
                <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50">IAI-101</span>
              </div>
              <p className="text-[11px] text-slate-400 tracking-wide font-mono">POST-SEED CORPORATE COMMAND</p>
            </div>
          </div>

          {/* Key Executive Action Callout */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="text-right">
              <div className="text-[11px] font-mono text-slate-400">DEC 2027 PROFITABILITY TARGET</div>
              <div className="text-sm font-bold text-emerald-400 font-mono">$25.89M ARR Target • Month 14</div>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <button
              onClick={() => setActiveTab('benefits_healthcare')}
              className="px-3 py-1.5 bg-[#FF5500]/10 hover:bg-[#FF5500]/20 border border-[#FF5500]/40 rounded-md text-xs font-semibold text-orange-400 flex items-center gap-1.5 transition-colors"
            >
              <HeartHandshake className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>60% Health Care Coverage Engine</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-2 -mb-px border-t border-slate-800/80">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-md whitespace-nowrap transition-all duration-150 ${
                  isActive
                    ? 'bg-[#FF5500] text-black font-semibold shadow-md shadow-[#FF5500]/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-black' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                      isActive
                        ? 'bg-black/20 text-black font-bold'
                        : 'bg-slate-800 text-slate-300 border border-slate-700'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
