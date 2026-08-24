import React, { useState } from 'react';
import { EXECUTIVE_ROLES, RACI_MATRIX } from '../data/startupPlanData';
import { ExecutiveRoleProfile, RaciEntry } from '../types';
import { 
  Users, 
  Target, 
  Briefcase, 
  Award, 
  Calendar, 
  Share2, 
  CheckCircle2, 
  HelpCircle, 
  FileText, 
  DollarSign, 
  Search,
  Filter,
  ArrowRight
} from 'lucide-react';

export const ExecutiveCommandView: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<'CEO' | 'COO' | 'CDO' | 'CTO' | 'CMO'>('CEO');
  const [raciCategoryFilter, setRaciCategoryFilter] = useState<string>('all');
  const [raciSearchQuery, setRaciSearchQuery] = useState<string>('');
  const [showHiringSpecModal, setShowHiringSpecModal] = useState<boolean>(false);

  const activeProfile = EXECUTIVE_ROLES[selectedRole];

  // Extract unique categories for RACI
  const raciCategories = ['all', ...Array.from(new Set(RACI_MATRIX.map(item => item.category)))];

  const filteredRaci = RACI_MATRIX.filter(item => {
    const matchesCategory = raciCategoryFilter === 'all' || item.category === raciCategoryFilter;
    const matchesSearch = item.taskArea.toLowerCase().includes(raciSearchQuery.toLowerCase()) ||
                          item.notes.toLowerCase().includes(raciSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getRaciBadge = (type: string) => {
    switch (type) {
      case 'A':
        return <span className="px-2 py-0.5 rounded bg-[#FF5500] text-black font-bold font-mono text-xs shadow-sm" title="Accountable: Sole decision-maker and buck-stopper">A</span>;
      case 'R':
        return <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-bold font-mono text-xs shadow-sm" title="Responsible: Does the actual work">R</span>;
      case 'C':
        return <span className="px-2 py-0.5 rounded bg-indigo-900 text-indigo-200 border border-indigo-700 font-mono text-xs" title="Consulted: Provides critical input">C</span>;
      case 'I':
        return <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 font-mono text-xs" title="Informed: Kept updated on progress">I</span>;
      default:
        return <span className="text-slate-600 font-mono text-xs">-</span>;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0B132B] via-slate-900 to-[#0B132B] border-2 border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF5500]" />
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50 font-mono text-xs mb-2">
              <Users className="w-3.5 h-3.5" />
              EXECUTIVE LEADERSHIP & GOVERNANCE ARCHITECTURE
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-black text-white">
              C-Suite Roles, RACI Matrix & Operational Command
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Mapping authority, core deliverables, and operational handoffs between the <strong>CEO</strong> and <strong>COO</strong>, 
              and scaling with the 3 priority executive hires: <strong>CDO</strong>, <strong>CTO</strong>, and <strong>CMO</strong>.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowHiringSpecModal(true)}
              className="px-4 py-2 rounded-lg bg-[#FF5500] hover:bg-[#FF5500]/90 text-black font-bold text-xs flex items-center gap-2 shadow-lg shadow-[#FF5500]/25 transition-all"
            >
              <FileText className="w-4 h-4" />
              Executive Hiring Scorecards (CDO/CTO/CMO)
            </button>
          </div>
        </div>
      </div>

      {/* Role Navigation Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {(Object.keys(EXECUTIVE_ROLES) as Array<keyof typeof EXECUTIVE_ROLES>).map((roleKey) => {
          const role = EXECUTIVE_ROLES[roleKey];
          const isSelected = selectedRole === roleKey;
          const isPriorityHire = role.currentStatus.includes('Priority Hire');

          return (
            <button
              key={roleKey}
              onClick={() => setSelectedRole(roleKey as any)}
              className={`p-4 rounded-xl text-left border-2 transition-all relative ${
                isSelected
                  ? 'bg-slate-900 border-[#FF5500] shadow-lg shadow-[#FF5500]/10'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              {isPriorityHire && (
                <span className="absolute top-2 right-2 px-1.5 py-0.2 rounded bg-amber-900/80 border border-amber-600 text-amber-300 text-[9px] font-mono font-bold">
                  HIRE M1
                </span>
              )}
              <div className="font-display font-black text-xl text-white flex items-center gap-1.5">
                {role.id}
                <span className="text-xs font-mono font-normal text-slate-400">({role.title.split(' ')[1]})</span>
              </div>
              <div className="text-xs font-semibold text-slate-300 mt-1 line-clamp-1">
                {role.title}
              </div>
              <div className="text-[11px] font-mono text-slate-400 mt-1.5 flex items-center gap-1">
                <span className={`w-2 h-2 rounded-full ${isPriorityHire ? 'bg-amber-400' : 'bg-emerald-400'}`} />
                {role.currentStatus}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Role Deep-Dive Dossier */}
      <div className="rounded-2xl bg-slate-900/90 border-2 border-slate-800 p-6 sm:p-8 space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-display font-black text-white">
                {activeProfile.title} ({activeProfile.id})
              </h2>
              <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold ${
                activeProfile.currentStatus === 'Occupied'
                  ? 'bg-emerald-950/80 border border-emerald-700 text-emerald-300'
                  : 'bg-amber-950/80 border border-amber-700 text-amber-300'
              }`}>
                {activeProfile.currentStatus}
              </span>
            </div>
            <p className="text-sm text-[#FF5500] font-mono font-semibold mt-1">
              "{activeProfile.tagline}"
            </p>
            <p className="text-xs text-slate-300 mt-2 max-w-3xl leading-relaxed">
              <strong>Primary Mandate:</strong> {activeProfile.primaryMandate}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-right min-w-[200px]">
            <div className="text-[10px] font-mono text-slate-400">BUDGET & ASSET OWNERSHIP</div>
            <div className="text-xs font-bold text-white mt-1">{activeProfile.budgetOwnership}</div>
            <div className="text-[11px] font-mono text-blue-400 mt-1">
              Weekly: {activeProfile.weeklyCadence.split(',')[0]}
            </div>
          </div>
        </div>

        {/* 3-Column Breakdown: Responsibilities, 90-Day Goals, KPIs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Key Responsibilities */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-3">
            <h3 className="text-sm font-display font-bold text-white flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-400" />
              Core Accountabilities & Scope
            </h3>
            <ul className="space-y-2.5">
              {activeProfile.keyResponsibilities.map((resp, i) => (
                <li key={i} className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                  <span className="text-[#FF5500] font-mono font-bold mt-0.5">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* First 90 Days Deliverables */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-3">
            <h3 className="text-sm font-display font-bold text-white flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#FF5500]" />
              First 90 Days Critical Targets
            </h3>
            <ul className="space-y-2.5">
              {activeProfile.first90DaysGoals.map((goal, i) => (
                <li key={i} className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* KPIs & Cross-Functional Links */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-3">
            <h3 className="text-sm font-display font-bold text-white flex items-center gap-2">
              <Target className="w-4 h-4 text-emerald-400" />
              Executive KPIs & Success Metrics
            </h3>
            <ul className="space-y-2 mb-4">
              {activeProfile.kpis.map((kpi, i) => (
                <li key={i} className="text-xs text-emerald-300 font-mono flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">→</span>
                  <span>{kpi}</span>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-display font-bold text-white flex items-center gap-1.5 pt-3 border-t border-slate-800">
              <Share2 className="w-3.5 h-3.5 text-indigo-400" />
              Cross-Functional Dependencies
            </h4>
            <div className="space-y-1.5 text-xs text-slate-400">
              {activeProfile.dependenciesOnOthers.map((dep, i) => (
                <div key={i} className="text-[11px] leading-snug">
                  <strong className="text-white">{dep.role}:</strong> {dep.interaction}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive RACI Matrix */}
      <div className="rounded-2xl bg-slate-900/90 border-2 border-slate-800 p-6 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-[#FF5500]" />
              Master Executive RACI Matrix
            </h2>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Defines absolute single-point accountability (A), execution responsibility (R), consultation (C), and information flow (I).
            </p>
          </div>

          {/* RACI Legend */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono bg-slate-950 p-2.5 rounded-xl border border-slate-800">
            <div className="flex items-center gap-1.5">
              <span className="px-1.5 py-0.2 rounded bg-[#FF5500] text-black font-bold text-[10px]">A</span>
              <span className="text-slate-300">Accountable (Single Owner)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="px-1.5 py-0.2 rounded bg-blue-600 text-white font-bold text-[10px]">R</span>
              <span className="text-slate-300">Responsible (Performs Work)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="px-1.5 py-0.2 rounded bg-indigo-900 text-indigo-200 border border-indigo-700 text-[10px]">C</span>
              <span className="text-slate-300">Consulted</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700 text-[10px]">I</span>
              <span className="text-slate-300">Informed</span>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <Filter className="w-4 h-4 text-slate-400" />
            {raciCategories.map((category) => (
              <button
                key={category}
                onClick={() => setRaciCategoryFilter(category)}
                className={`px-3 py-1 text-xs rounded-lg font-mono capitalize transition-all ${
                  raciCategoryFilter === category
                    ? 'bg-[#FF5500] text-black font-bold'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search RACI task or notes..."
              value={raciSearchQuery}
              onChange={(e) => setRaciSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5500]"
            />
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-300 font-mono uppercase tracking-wider border-b border-slate-800">
              <tr>
                <th className="py-3 px-4 w-1/3">Task Area & Decision Scope</th>
                <th className="py-3 px-3">Category</th>
                <th className="py-3 px-2 text-center text-[#FF5500]">CEO</th>
                <th className="py-3 px-2 text-center text-blue-400">COO</th>
                <th className="py-3 px-2 text-center text-emerald-400">CDO</th>
                <th className="py-3 px-2 text-center text-indigo-400">CTO</th>
                <th className="py-3 px-2 text-center text-orange-400">CMO</th>
                <th className="py-3 px-4">Operational Handoff & Governance Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 bg-slate-900/40 font-sans">
              {filteredRaci.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-white">
                    {row.taskArea}
                  </td>
                  <td className="py-3.5 px-3">
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 text-[10px] font-mono">
                      {row.category}
                    </span>
                  </td>
                  <td className="py-3.5 px-2 text-center">{getRaciBadge(row.CEO)}</td>
                  <td className="py-3.5 px-2 text-center">{getRaciBadge(row.COO)}</td>
                  <td className="py-3.5 px-2 text-center">{getRaciBadge(row.CDO)}</td>
                  <td className="py-3.5 px-2 text-center">{getRaciBadge(row.CTO)}</td>
                  <td className="py-3.5 px-2 text-center">{getRaciBadge(row.CMO)}</td>
                  <td className="py-3.5 px-4 text-slate-400 text-xs">
                    {row.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Hiring Spec Modal */}
      {showHiringSpecModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border-2 border-slate-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#FF5500]" />
                  Executive Hiring Scorecards & Compensation Packages
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Standardized specs for CDO, CTO, and CMO candidates (Month 1-2 closing target)
                </p>
              </div>
              <button
                onClick={() => setShowHiringSpecModal(false)}
                className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-xs"
              >
                Close (ESC)
              </button>
            </div>

            {/* Spec Cards for CDO, CTO, CMO */}
            <div className="space-y-6">
              {['CDO', 'CTO', 'CMO'].map((roleKey) => {
                const role = EXECUTIVE_ROLES[roleKey as keyof typeof EXECUTIVE_ROLES];
                const spec = role.jobSpecSummary;
                if (!spec) return null;

                return (
                  <div key={roleKey} className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                      <div>
                        <span className="text-base font-display font-bold text-white">{role.title} ({role.id})</span>
                        <span className="ml-2 text-xs font-mono text-amber-400">Target Start: Month 1-2</span>
                      </div>
                      <div className="flex items-center gap-3 font-mono text-xs">
                        <span className="text-emerald-400">Comp: {spec.targetComp}</span>
                        <span className="text-slate-500">|</span>
                        <span className="text-[#FF5500]">Equity: {spec.equityRange}</span>
                      </div>
                    </div>

                    <div className="text-xs text-slate-300">
                      <strong>Ideal Background:</strong> {spec.idealBackground}
                    </div>

                    <div className="space-y-1.5 pt-2">
                      <div className="text-[11px] font-mono uppercase text-slate-400">Candidate Interview Scorecard & Rubric:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {spec.interviewScorecard.map((item, i) => (
                          <div key={i} className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300 flex items-start gap-2">
                            <span className="text-[#FF5500] font-mono font-bold">{i+1}.</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
