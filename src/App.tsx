import React, { useState } from 'react';
import { TabType, ActionItem, TaskStatus } from './types';
import { INITIAL_ACTION_ITEMS } from './data/startupPlanData';
import { Navbar } from './components/Navbar';
import { OverviewView } from './components/OverviewView';
import { ExecutiveCommandView } from './components/ExecutiveCommandView';
import { FoundationChecklistView } from './components/FoundationChecklistView';
import { BenefitsHealthcareView } from './components/BenefitsHealthcareView';
import { HeadcountScalingView } from './components/HeadcountScalingView';
import { ProductEcosystemView } from './components/ProductEcosystemView';
import { RegulatoryComplianceView } from './components/RegulatoryComplianceView';
import { FinancialEngineView } from './components/FinancialEngineView';
import { ShieldCheck, HeartHandshake, Sparkles, Building2, Flame } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [tasks, setTasks] = useState<ActionItem[]>(INITIAL_ACTION_ITEMS);

  const handleToggleStatus = (taskId: string, newStatus: TaskStatus) => {
    setTasks(prev => prev.map(task => task.id === taskId ? { ...task, status: newStatus } : task));
  };

  const handleAddTask = (newTask: ActionItem) => {
    setTasks(prev => [newTask, ...prev]);
  };

  const completedTasksCount = tasks.filter(t => t.status === 'completed').length;
  const totalTasksCount = tasks.length;

  return (
    <div className="min-h-screen bg-[#080D1A] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        completedTasksCount={completedTasksCount}
        totalTasksCount={totalTasksCount}
      />

      {/* Main Tab Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <OverviewView
            setActiveTab={setActiveTab}
            completedTasksCount={completedTasksCount}
            totalTasksCount={totalTasksCount}
          />
        )}

        {activeTab === 'executive_command' && (
          <ExecutiveCommandView />
        )}

        {activeTab === 'foundation_checklist' && (
          <FoundationChecklistView
            tasks={tasks}
            onToggleStatus={handleToggleStatus}
            onAddTask={handleAddTask}
          />
        )}

        {activeTab === 'benefits_healthcare' && (
          <BenefitsHealthcareView />
        )}

        {activeTab === 'headcount_scaling' && (
          <HeadcountScalingView />
        )}

        {activeTab === 'product_ecosystem' && (
          <ProductEcosystemView />
        )}

        {activeTab === 'regulatory_compliance' && (
          <RegulatoryComplianceView />
        )}

        {activeTab === 'financial_engine' && (
          <FinancialEngineView />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-800/80 bg-[#060A14] py-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-[#FF5500] text-black font-display font-black flex items-center justify-center text-sm">
              IAI
            </div>
            <div>
              <div className="font-display font-bold text-white">Identity AI Corporation (IAI-101)</div>
              <div className="text-[11px] font-mono text-slate-500">The $10M Scale Round • $40M Pre / $50M Post</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 font-mono text-[11px]">
            <span className="text-emerald-400">SAM.gov & UN 30-Agency Approved</span>
            <span className="text-slate-600">•</span>
            <span className="text-orange-400">60% Health Care Subscription Match</span>
            <span className="text-slate-600">•</span>
            <span className="text-blue-400">Dec 2027 Profitability Crossover</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
