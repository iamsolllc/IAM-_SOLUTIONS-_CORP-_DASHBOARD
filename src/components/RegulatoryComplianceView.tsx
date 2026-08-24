import React, { useState } from 'react';
import { COMPLIANCE_FRAMEWORKS } from '../data/startupPlanData';
import { ComplianceFramework } from '../types';
import { 
  ShieldCheck, 
  Globe2, 
  Building2, 
  Lock, 
  FileCheck, 
  Award, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  DollarSign, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export const RegulatoryComplianceView: React.FC = () => {
  const [selectedFrameworkId, setSelectedFrameworkId] = useState<string>('us-gov-vendor');

  const activeFramework = COMPLIANCE_FRAMEWORKS.find(f => f.id === selectedFrameworkId) || COMPLIANCE_FRAMEWORKS[0];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Pre-Cleared':
        return <span className="px-2.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-700 text-emerald-300 font-mono text-xs font-bold">PRE-CLEARED VENDOR</span>;
      case 'In Audit Prep':
        return <span className="px-2.5 py-0.5 rounded bg-amber-950/80 border border-amber-700 text-amber-300 font-mono text-xs font-bold">IN AUDIT PREP</span>;
      case 'Active Requirement':
        return <span className="px-2.5 py-0.5 rounded bg-blue-950/80 border border-blue-700 text-blue-300 font-mono text-xs font-bold">ACTIVE DEPLOYMENT</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0B132B] via-slate-900 to-[#0B132B] border-2 border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-700/50 font-mono text-xs mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                PUBLIC SECTOR PRE-CLEARED MOAT & COMPLIANCE
              </div>
              <h1 className="text-2xl sm:text-3xl font-display font-black text-white">
                UN & US Government Regulatory Moat
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Identity AI holds active pre-cleared vendor status with the U.S. Federal Government (SAM.gov) and 30 United Nations agencies—a multi-year regulatory barrier to entry that insulates our contracts.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-right">
              <div className="text-slate-400">COMPLIANCE SEED ALLOCATION</div>
              <div className="text-xl font-bold text-emerald-400 font-display">$600,000</div>
              <div className="text-[10px] text-slate-400">SOC 2 Type II • StateRAMP • HIPAA</div>
            </div>
          </div>
        </div>
      </div>

      {/* The 2 Major Public Sector Vendor Statuses (Slides 7-10 from Pitch Deck) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: U.S. Government Vendor */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border-2 border-blue-500/50 space-y-4 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Building2 className="w-5 h-5" />
            </div>
            <span className="px-2.5 py-1 rounded bg-emerald-950 border border-emerald-700 text-emerald-300 font-mono text-xs font-bold">
              ACTIVE & PRE-CLEARED
            </span>
          </div>

          <div>
            <h2 className="font-display font-black text-xl text-white">
              U.S. Federal Government Approved Vendor
            </h2>
            <div className="text-xs font-mono text-blue-400 mt-0.5">
              SAM.gov Registered • CAGE Code Active • FAR Compliant
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Eliminates the standard 18-to-24 month government vendor onboarding friction. Enables direct contract awards and sole-source bidding across all 50 states, Veterans Affairs (VA), HUD, and municipal agencies.
          </p>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Lead Executive: <strong className="text-white">COO & CDO</strong></span>
            <span className="text-blue-400">Sole Source Ready</span>
          </div>
        </div>

        {/* Card 2: UN 30 Agencies Approved Vendor */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border-2 border-emerald-500/50 space-y-4 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Globe2 className="w-5 h-5" />
            </div>
            <span className="px-2.5 py-1 rounded bg-emerald-950 border border-emerald-700 text-emerald-300 font-mono text-xs font-bold">
              30 AGENCIES PRE-CLEARED
            </span>
          </div>

          <div>
            <h2 className="font-display font-black text-xl text-white">
              United Nations 30-Agency Approved Vendor
            </h2>
            <div className="text-xs font-mono text-emerald-400 mt-0.5">
              UN Global Marketplace (UNGM Level 2) • 190+ Countries
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Pre-cleared vendor for 30 UN bodies including UNHCR (Refugees), UNICEF (Children), IOM (Migration), and WFP (Food Programme). Ready for global field operations deployments without multi-year committee reviews.
          </p>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Lead Executive: <strong className="text-white">CDO (Sales)</strong></span>
            <span className="text-emerald-400">Global Tender Eligible</span>
          </div>
        </div>
      </div>

      {/* Interactive Compliance Matrix & Framework Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Framework Selector (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          <h3 className="text-xs font-mono uppercase text-slate-400">Compliance & Certification Frameworks:</h3>
          {COMPLIANCE_FRAMEWORKS.map((fw) => {
            const isSelected = selectedFrameworkId === fw.id;
            return (
              <div
                key={fw.id}
                onClick={() => setSelectedFrameworkId(fw.id)}
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 border-emerald-500 shadow-lg shadow-emerald-500/10'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-white text-sm">{fw.frameworkName}</span>
                  {getStatusBadge(fw.status)}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-mono">
                  {fw.agencyOrStandard}
                </div>
              </div>
            );
          })}
        </div>

        {/* Framework Details (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-slate-900/90 border-2 border-slate-800 p-6 space-y-5">
          <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <h2 className="text-xl font-display font-black text-white">{activeFramework.frameworkName}</h2>
              <div className="text-xs font-mono text-emerald-400 mt-0.5">{activeFramework.agencyOrStandard}</div>
            </div>
            {getStatusBadge(activeFramework.status)}
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <div className="font-mono text-[11px] uppercase text-slate-400">Strategic Moat & Relevance:</div>
              <p className="text-slate-200 mt-1 leading-relaxed text-sm">
                {activeFramework.relevance}
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-mono text-[11px] uppercase text-slate-400">Key Controls & Audit Requirements:</div>
              <ul className="space-y-1.5 text-slate-300">
                {activeFramework.keyRequirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800">
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <div className="font-mono text-[10px] text-slate-400 uppercase">Lead Role / Owner:</div>
                <div className="text-white font-bold mt-0.5">{activeFramework.leadOwner}</div>
                <div className="text-[10px] text-slate-400 mt-1">Budget: {activeFramework.budgetAllocated}</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <div className="font-mono text-[10px] text-slate-400 uppercase">Audit & Advisory Partners:</div>
                <div className="text-emerald-300 font-semibold mt-0.5">{activeFramework.auditPartners.join(', ')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
