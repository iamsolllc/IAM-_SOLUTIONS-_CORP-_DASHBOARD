import React, { useState } from 'react';
import { HEADCOUNT_ROSTER } from '../data/startupPlanData';
import { HeadcountRole } from '../types';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  PieChart, 
  Layers, 
  Briefcase, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Filter, 
  Search
} from 'lucide-react';

export const HeadcountScalingView: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<string>('all');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const phases = ['all', 'Phase 1 (M1-M3: 2→12)', 'Phase 2 (M4-M9: 13→30)', 'Phase 3 (M10-M18: 31→55)'];
  const departments = ['all', 'Executive', 'Engineering & Security', 'Public Sector & Sales', 'Growth & Marketing', 'Operations & People', 'Product & AI'];

  const filteredRoster = HEADCOUNT_ROSTER.filter(role => {
    const matchesPhase = selectedPhase === 'all' || role.phase === selectedPhase;
    const matchesDept = selectedDepartment === 'all' || role.department === selectedDepartment;
    const matchesSearch = role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          role.keyFocus.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPhase && matchesDept && matchesSearch;
  });

  // Calculate totals
  const totalHeadcountSum = HEADCOUNT_ROSTER.reduce((acc, r) => acc + r.headcountCount, 0);
  const totalAnnualPayroll = HEADCOUNT_ROSTER.reduce((acc, r) => acc + (r.avgBaseSalary * r.headcountCount), 0);
  const totalEquityAllocated = HEADCOUNT_ROSTER.reduce((acc, r) => acc + r.equityPoolPercent, 0);

  const phase1Headcount = HEADCOUNT_ROSTER.filter(r => r.phase.includes('Phase 1')).reduce((acc, r) => acc + r.headcountCount, 0);
  const phase2Headcount = HEADCOUNT_ROSTER.filter(r => r.phase.includes('Phase 2')).reduce((acc, r) => acc + r.headcountCount, 0);
  const phase3Headcount = HEADCOUNT_ROSTER.filter(r => r.phase.includes('Phase 3')).reduce((acc, r) => acc + r.headcountCount, 0);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0B132B] via-slate-900 to-[#0B132B] border-2 border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF5500]" />
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-indigo-900/60 text-indigo-300 border border-indigo-700/50 font-mono text-xs mb-2">
                <TrendingUp className="w-3.5 h-3.5" />
                ORGANIZATIONAL SCALING ARCHITECTURE
              </div>
              <h1 className="text-2xl sm:text-3xl font-display font-black text-white">
                2 to 55 Headcount Ramp & Departmental Roadmap
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Disciplined hiring schedule across 3 execution phases, scaling from 2 founders to 55 full-time contributors within the $2.0M Seed team allocation and debt-backed OPEX model.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 text-right">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400">TOTAL TARGET HEADCOUNT</div>
                <div className="text-xl font-bold font-display text-white">{totalHeadcountSum} Staff</div>
                <div className="text-[10px] font-mono text-[#FF5500]">3 Phases (M1-M18)</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400">TEAM SEED ALLOCATION</div>
                <div className="text-xl font-bold font-display text-emerald-400">$2,000,000</div>
                <div className="text-[10px] font-mono text-slate-400">20% of $10M Round</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400">ESOP POOL COMMITTED</div>
                <div className="text-xl font-bold font-display text-blue-400">{totalEquityAllocated.toFixed(2)}%</div>
                <div className="text-[10px] font-mono text-slate-400">Of 15% Total Pool</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3-Phase Interactive Progression Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Phase 1 Card */}
        <div 
          onClick={() => setSelectedPhase('Phase 1 (M1-M3: 2→12)')}
          className={`p-5 rounded-2xl border-2 transition-all cursor-pointer ${
            selectedPhase === 'Phase 1 (M1-M3: 2→12)'
              ? 'bg-slate-900 border-[#FF5500] shadow-lg shadow-[#FF5500]/10'
              : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 rounded bg-[#FF5500]/20 text-[#FF5500] border border-[#FF5500]/40 font-mono text-[10px] font-bold">
              PHASE 1 (MONTHS 1 - 3)
            </span>
            <span className="font-display font-black text-lg text-white">2 → 12 Staff</span>
          </div>
          <h3 className="font-display font-bold text-sm text-white mt-3">Executive & Core Leads Pod</h3>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            Close CDO, CTO, CMO + hire Lead Security Architect, 2 Platform Engineers, Public Sector Procurement Director, Growth Lead, and Head of People.
          </p>
          <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Target Count: <strong className="text-white">{phase1Headcount}</strong></span>
            <span className="text-[#FF5500]">Immediate Hires</span>
          </div>
        </div>

        {/* Phase 2 Card */}
        <div 
          onClick={() => setSelectedPhase('Phase 2 (M4-M9: 13→30)')}
          className={`p-5 rounded-2xl border-2 transition-all cursor-pointer ${
            selectedPhase === 'Phase 2 (M4-M9: 13→30)'
              ? 'bg-slate-900 border-blue-500 shadow-lg shadow-blue-500/10'
              : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50 font-mono text-[10px] font-bold">
              PHASE 2 (MONTHS 4 - 9)
            </span>
            <span className="font-display font-black text-lg text-white">13 → 30 Staff</span>
          </div>
          <h3 className="font-display font-bold text-sm text-white mt-3">Growth, GovTech & Infra Pods</h3>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            DevOps engineers, 3 API connector specialists, Staff AI engineer (UNICEF synthetic data hack), 4 GovTech AEs, Pre-sales engineers, and Financial Controller.
          </p>
          <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Target Count: <strong className="text-white">{phase2Headcount}</strong></span>
            <span className="text-blue-400">Fast Follow</span>
          </div>
        </div>

        {/* Phase 3 Card */}
        <div 
          onClick={() => setSelectedPhase('Phase 3 (M10-M18: 31→55)')}
          className={`p-5 rounded-2xl border-2 transition-all cursor-pointer ${
            selectedPhase === 'Phase 3 (M10-M18: 31→55)'
              ? 'bg-slate-900 border-indigo-500 shadow-lg shadow-indigo-500/10'
              : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 rounded bg-indigo-900/60 text-indigo-300 border border-indigo-700/50 font-mono text-[10px] font-bold">
              PHASE 3 (MONTHS 10 - 18)
            </span>
            <span className="font-display font-black text-lg text-white">31 → 55 Staff</span>
          </div>
          <h3 className="font-display font-bold text-sm text-white mt-3">Global Scale & Support Operations</h3>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            6 mobile/platform developers, 2 continuous SOC 2/SIEM security analysts, 4 global UN/NGO account leads, and 6 tier-1 customer casework specialists.
          </p>
          <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Target Count: <strong className="text-white">{phase3Headcount}</strong></span>
            <span className="text-indigo-400">Scale Triggered</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400 font-mono">Department:</span>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-white text-xs focus:outline-none focus:border-[#FF5500]"
            >
              {departments.map(d => (
                <option key={d} value={d}>{d === 'all' ? 'All Departments' : d}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-slate-400 font-mono">Phase:</span>
            <select
              value={selectedPhase}
              onChange={(e) => setSelectedPhase(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-white text-xs focus:outline-none focus:border-[#FF5500]"
            >
              {phases.map(p => (
                <option key={p} value={p}>{p === 'all' ? 'All Phases (2→55)' : p}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-2" />
          <input
            type="text"
            placeholder="Search roles or skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1 bg-slate-950 border border-slate-800 rounded text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5500]"
          />
        </div>
      </div>

      {/* Roster Table */}
      <div className="rounded-2xl bg-slate-900/90 border-2 border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-300 font-mono uppercase tracking-wider border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Role Title</th>
                <th className="py-3 px-3">Department</th>
                <th className="py-3 px-3">Phase & Timing</th>
                <th className="py-3 px-2 text-center">Count</th>
                <th className="py-3 px-3 text-right">Avg Base Salary</th>
                <th className="py-3 px-2 text-center text-[#FF5500]">Equity</th>
                <th className="py-3 px-3">Priority</th>
                <th className="py-3 px-4">Core Strategic Focus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
              {filteredRoster.map((role) => (
                <tr key={role.id} className="hover:bg-slate-800/50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-white">
                    {role.title}
                  </td>
                  <td className="py-3.5 px-3">
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 text-[10px] font-mono">
                      {role.department}
                    </span>
                  </td>
                  <td className="py-3.5 px-3 text-slate-400 font-mono text-[11px]">
                    {role.phase.split(' ')[0]} {role.phase.split(' ')[1]}
                  </td>
                  <td className="py-3.5 px-2 text-center font-mono font-bold text-white">
                    {role.headcountCount}
                  </td>
                  <td className="py-3.5 px-3 text-right font-mono text-emerald-400">
                    ${role.avgBaseSalary.toLocaleString()}
                  </td>
                  <td className="py-3.5 px-2 text-center font-mono font-bold text-[#FF5500]">
                    {role.equityPoolPercent > 0 ? `${role.equityPoolPercent}%` : '-'}
                  </td>
                  <td className="py-3.5 px-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                      role.priority === 'Immediate'
                        ? 'bg-red-950/80 border border-red-700 text-red-300'
                        : role.priority === 'Fast Follow'
                        ? 'bg-amber-950/80 border border-amber-700 text-amber-300'
                        : 'bg-blue-950/80 border border-blue-700 text-blue-300'
                    }`}>
                      {role.priority}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-300 text-xs">
                    {role.keyFocus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
