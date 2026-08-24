import React, { useState } from 'react';
import { PRODUCT_ECOSYSTEM } from '../data/startupPlanData';
import { ProductPortfolioItem } from '../types';
import { 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Lock, 
  Sparkles, 
  FileCheck2, 
  Terminal, 
  ArrowRight, 
  KeyRound, 
  FileText,
  CheckCircle2,
  RefreshCw,
  Search,
  ExternalLink
} from 'lucide-react';

export const ProductEcosystemView: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>('vouchkey');
  const [syntheticRecordCount, setSyntheticRecordCount] = useState<number>(50);
  const [syntheticGenerated, setSyntheticGenerated] = useState<boolean>(false);
  const [selectedTierFilter, setSelectedTierFilter] = useState<string>('all');

  const tiers = ['all', 'Hub Architecture', 'Land ($4/mo)', 'Discover ($0 CAC)', 'Expand ($322-$405/yr)', 'Multiply ($3,163-$3,526/yr)'];

  const filteredProducts = PRODUCT_ECOSYSTEM.filter(p => {
    return selectedTierFilter === 'all' || p.tierStep === selectedTierFilter;
  });

  const activeProduct = PRODUCT_ECOSYSTEM.find(p => p.id === selectedProduct) || PRODUCT_ECOSYSTEM[0];

  const handleGenerateSynthetic = () => {
    setSyntheticGenerated(true);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0B132B] via-slate-900 to-[#0B132B] border-2 border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF5500]" />
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-orange-950/80 text-orange-300 border border-orange-700/50 font-mono text-xs mb-2">
                <Cpu className="w-3.5 h-3.5 text-[#FF5500]" />
                PRODUCT ARCHITECTURE & TOKENIZATION ENGINE
              </div>
              <h1 className="text-2xl sm:text-3xl font-display font-black text-white">
                Nine Products. Eight Live. Powered by VouchKey.
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                One platform, one unified codebase, infinite vertical applications. Every single product is anchored by the VouchKey cryptographic tokenization hub.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                Hub: <strong className="text-[#FF5500]">VouchKey (AWS)</strong>
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-700 text-emerald-300 font-bold">
                8 Live / 1 Sept 2026
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Guaranteed by Every Product Security Bar (Slide 6 from Pitch Deck) */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border-2 border-[#FF5500]/40 space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#FF5500]" />
          <h2 className="font-display font-bold text-lg text-white">
            Guaranteed by Every Product: The Core Security & Privacy Moat
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <div className="font-mono text-[10px] text-[#FF5500] font-bold">01. ZERO RAW SSN</div>
            <div className="text-white font-semibold">Zero raw SSNs stored</div>
            <p className="text-[11px] text-slate-400">Tokens isolate raw PII cryptographically.</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <div className="font-mono text-[10px] text-blue-400 font-bold">02. PER-ORG KEYS</div>
            <div className="text-white font-semibold">Per-Organization Keys</div>
            <p className="text-[11px] text-slate-400">Isolated KMS keys per tenant agency.</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <div className="font-mono text-[10px] text-emerald-400 font-bold">03. NEED TO KNOW</div>
            <div className="text-white font-semibold">Need-to-Know Access</div>
            <p className="text-[11px] text-slate-400">Cryptographic role-based gating.</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <div className="font-mono text-[10px] text-indigo-400 font-bold">04. DUAL APPROVAL</div>
            <div className="text-white font-semibold">Dual Approval Gates</div>
            <p className="text-[11px] text-slate-400">No single user can export data.</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <div className="font-mono text-[10px] text-amber-400 font-bold">05. VAWA SEALING</div>
            <div className="text-white font-semibold">VAWA-Safe Sealing</div>
            <p className="text-[11px] text-slate-400">Protected shelter & abuse records.</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <div className="font-mono text-[10px] text-teal-400 font-bold">06. AUDIT TRAIL</div>
            <div className="text-white font-semibold">Full Audit Trail</div>
            <p className="text-[11px] text-slate-400">Tamper-evident cryptographic log.</p>
          </div>
        </div>
      </div>

      {/* The Product Conversion Staircase (Slide 5 from Deck) */}
      <div className="space-y-4">
        <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-blue-400" />
          The Product Conversion Staircase: Land → Discover → Expand → Multiply
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Step 1: Land */}
          <div className="p-4 rounded-xl bg-slate-900 border-2 border-emerald-500/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700 font-mono text-[10px] font-bold">
                STEP 1: LAND
              </span>
              <span className="font-mono font-bold text-emerald-400 text-sm">$4/mo</span>
            </div>
            <h3 className="font-display font-bold text-white text-base">IAI Survival Guide</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              3,500+ career changers and IAM learners acquired at <strong className="text-white">$0.18 CAC</strong> across 20+ countries.
            </p>
            <div className="text-[11px] font-mono text-emerald-300 pt-2 border-t border-slate-800">
              → Directly funds 60% health care
            </div>
          </div>

          {/* Step 2: Discover */}
          <div className="p-4 rounded-xl bg-slate-900 border-2 border-blue-500/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-700 font-mono text-[10px] font-bold">
                STEP 2: DISCOVER
              </span>
              <span className="font-mono font-bold text-blue-400 text-sm">$0 CAC</span>
            </div>
            <h3 className="font-display font-bold text-white text-base">Cyber Club Community</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Practitioners learn tokenization & governance using live IAI platforms as hands-on teaching case studies.
            </p>
            <div className="text-[11px] font-mono text-blue-300 pt-2 border-t border-slate-800">
              → High-trust inbound practitioner funnel
            </div>
          </div>

          {/* Step 3: Expand */}
          <div className="p-4 rounded-xl bg-slate-900 border-2 border-indigo-500/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-700 font-mono text-[10px] font-bold">
                STEP 3: EXPAND
              </span>
              <span className="font-mono font-bold text-indigo-400 text-sm">$322 - $405/yr</span>
            </div>
            <h3 className="font-display font-bold text-white text-base">IAI Business & DineKey</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Solo consultants, boutique practices, and allergy patients manage their identity practices & health cards.
            </p>
            <div className="text-[11px] font-mono text-indigo-300 pt-2 border-t border-slate-800">
              → 50% routed to health benefits escrow
            </div>
          </div>

          {/* Step 4: Multiply */}
          <div className="p-4 rounded-xl bg-slate-900 border-2 border-[#FF5500]/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded bg-orange-950 text-orange-300 border border-orange-700 font-mono text-[10px] font-bold">
                STEP 4: MULTIPLY
              </span>
              <span className="font-mono font-bold text-[#FF5500] text-sm">$3,163 - $3,526/yr</span>
            </div>
            <h3 className="font-display font-bold text-white text-base">Command Suites</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Enterprise suites for Veterans (VDMS), Unhoused (HMDS), Undocumented (UDMS), and Refugees (RDMS).
            </p>
            <div className="text-[11px] font-mono text-orange-300 pt-2 border-t border-slate-800">
              → Multi-year UN/Gov agency contracts
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Products Grid & Dossier */}
      <div className="space-y-4">
        {/* Tier Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {tiers.map((tier) => (
            <button
              key={tier}
              onClick={() => setSelectedTierFilter(tier)}
              className={`px-3 py-1 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                selectedTierFilter === tier
                  ? 'bg-[#FF5500] text-black font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {tier}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Products List (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            {filteredProducts.map((product) => {
              const isSelected = selectedProduct === product.id;
              return (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product.id)}
                  className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 border-[#FF5500] shadow-lg shadow-[#FF5500]/10'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-display font-bold text-white text-sm">{product.name}</span>
                      <span className={`px-2 py-0.2 rounded text-[9px] font-mono font-bold ${
                        product.status === 'LIVE'
                          ? 'bg-emerald-950 border border-emerald-700 text-emerald-300'
                          : 'bg-amber-950 border border-amber-700 text-amber-300'
                      }`}>
                        {product.status}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-slate-400 font-semibold">
                      {product.tierStep.split(' ')[0]}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1 line-clamp-1">
                    {product.identityServed} • {product.coreFeature}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Product Deep-Dive Card (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/90 border-2 border-slate-800 p-6 sm:p-7 space-y-5">
            <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-black text-2xl text-white">{activeProduct.name}</h3>
                  <span className="px-2.5 py-0.5 rounded bg-[#FF5500]/20 border border-[#FF5500]/40 text-[#FF5500] font-mono text-xs font-bold">
                    {activeProduct.tierStep}
                  </span>
                </div>
                <div className="text-xs font-mono text-blue-400 mt-1 font-semibold">
                  Identity Archetype: {activeProduct.identityServed}
                </div>
              </div>

              <div className="text-right font-mono text-xs">
                <div className="text-slate-400">Target Buyer:</div>
                <div className="text-white font-semibold mt-0.5">{activeProduct.targetBuyer}</div>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <div className="font-mono text-[11px] uppercase text-slate-400">Core Functional Capability:</div>
                <p className="text-slate-200 mt-1 leading-relaxed text-sm">
                  {activeProduct.coreFeature}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                  <div className="font-mono text-[10px] text-slate-400 uppercase">Architecture & Tech Stack:</div>
                  <div className="text-white font-mono text-xs">{activeProduct.techStack}</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                  <div className="font-mono text-[10px] text-emerald-400 uppercase">Compliance Shield:</div>
                  <div className="text-emerald-300 font-mono text-xs">{activeProduct.complianceShield}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The POC Acquisition Hack (Slide 12 from Deck): UNICEF UNITE Synthetic Data Sandbox */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950/20 to-slate-900 border-2 border-blue-500/40 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-blue-400" />
            <h2 className="font-display font-bold text-lg text-white">
              The POC Acquisition Hack: UNICEF UNITE Synthetic Data Engine
            </h2>
          </div>
          <span className="px-2.5 py-1 rounded bg-blue-950 border border-blue-700 text-blue-300 font-mono text-xs">
            Bypasses 18-Month Procurement Security Audits
          </span>
        </div>

        <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
          How Identity AI closes UN and Government pilots in <strong>48 hours</strong> instead of 18 months: 
          We generate <strong>100% synthetic, zero-PII client cohorts</strong> with realistic casework histories. 
          Agency directors test full tokenized workflows without needing security clearance or touching real citizen data.
        </p>

        {/* Interactive Synthetic Sandbox Simulator */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-slate-400">Generate Synthetic Cohort:</span>
              <select
                value={syntheticRecordCount}
                onChange={(e) => setSyntheticRecordCount(Number(e.target.value))}
                className="bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-xs text-white font-mono focus:outline-none"
              >
                <option value={25}>25 Synthetic Records</option>
                <option value={50}>50 Synthetic Records</option>
                <option value={100}>100 Synthetic Records</option>
                <option value={500}>500 Synthetic Records</option>
              </select>
            </div>

            <button
              onClick={handleGenerateSynthetic}
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Generate Tokenized Pilot Sandboxes
            </button>
          </div>

          {/* Simulated Terminal Output */}
          <div className="p-4 rounded-lg bg-black border border-slate-800 font-mono text-xs text-slate-300 space-y-1.5 overflow-x-auto">
            <div className="text-emerald-400">⚡ [VOUCHKEY-SYNTH-ENGINE] Initializing zero-PII sandbox generator...</div>
            <div className="text-blue-300">✔ Generated {syntheticRecordCount} synthetic records (UNICEF UNITE schema v2.4)</div>
            <div className="text-slate-400">🔒 Token Isolation: 0 raw SSNs | Per-tenant KMS key [org_unhcr_geneva_pilot] active</div>
            <div className="text-orange-400">🛡 VAWA Cryptographic Sealing: 14 domestic shelter coordinates anonymized into ZK-Proofs</div>
            <div className="text-emerald-300">✨ Pilot Readiness: 100% compliant. Safe for immediate field deployment.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
