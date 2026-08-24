import React, { useState } from 'react';
import { ActionItem, ActionCategory, PriorityLevel, TaskStatus } from '../types';
import { 
  CheckSquare, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  Building2, 
  HeartHandshake, 
  Users, 
  ShieldCheck, 
  Cpu, 
  TrendingUp, 
  Globe2, 
  Filter, 
  Search,
  ChevronDown,
  ChevronUp,
  Plus
} from 'lucide-react';

interface FoundationChecklistViewProps {
  tasks: ActionItem[];
  onToggleStatus: (taskId: string, newStatus: TaskStatus) => void;
  onAddTask: (newTask: ActionItem) => void;
}

export const FoundationChecklistView: React.FC<FoundationChecklistViewProps> = ({
  tasks,
  onToggleStatus,
  onAddTask
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedAssignee, setSelectedAssignee] = useState<string>('all');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedTaskId, setExpandedTaskId] = useState<string | null>(null);

  // Categories config
  const categories: { id: string; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'all', label: 'All Items', icon: CheckSquare },
    { id: 'payroll_banking', label: 'Payroll & Banking', icon: Building2 },
    { id: 'benefits_compensation', label: 'Benefits & 60% Health', icon: HeartHandshake },
    { id: 'hiring_team', label: 'Hiring & Team', icon: Users },
    { id: 'regulatory_compliance', label: 'Compliance & Audits', icon: ShieldCheck },
    { id: 'tech_infrastructure', label: 'Tech & AWS Infra', icon: Cpu },
    { id: 'marketing_growth', label: 'Marketing & Ads', icon: TrendingUp },
    { id: 'public_sector_dev', label: 'Public Sector & UN', icon: Globe2 },
  ];

  // Filtering
  const filteredTasks = tasks.filter(task => {
    const matchesCategory = selectedCategory === 'all' || task.category === selectedCategory;
    const matchesAssignee = selectedAssignee === 'all' || task.assignedRole === selectedAssignee;
    const matchesPriority = selectedPriority === 'all' || task.priority === selectedPriority;
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          task.deliverables.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesAssignee && matchesPriority && matchesSearch;
  });

  const completedCount = tasks.filter(t => t.status === 'completed').length;
  const inProgressCount = tasks.filter(t => t.status === 'in_progress').length;
  const notStartedCount = tasks.filter(t => t.status === 'not_started').length;
  const progressPercent = Math.round((completedCount / tasks.length) * 100) || 0;

  const toggleExpand = (id: string) => {
    setExpandedTaskId(expandedTaskId === id ? null : id);
  };

  const getPriorityBadge = (priority: PriorityLevel) => {
    switch (priority) {
      case 'critical':
        return <span className="px-2 py-0.5 rounded bg-red-950/80 border border-red-700 text-red-300 font-mono text-[10px] font-bold">CRITICAL</span>;
      case 'high':
        return <span className="px-2 py-0.5 rounded bg-amber-950/80 border border-amber-700 text-amber-300 font-mono text-[10px] font-bold">HIGH</span>;
      case 'medium':
        return <span className="px-2 py-0.5 rounded bg-blue-950/80 border border-blue-700 text-blue-300 font-mono text-[10px] font-bold">MEDIUM</span>;
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
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#FF5500]/15 text-[#FF5500] border border-[#FF5500]/40 font-mono text-xs mb-2">
                <CheckSquare className="w-3.5 h-3.5" />
                FOUNDATION & CORPORATE SETUP CHECKLIST
              </div>
              <h1 className="text-2xl sm:text-3xl font-display font-black text-white">
                Startup Foundation, Payroll & Execution Plan
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Step-by-step operational setup checklist across 50-state payroll, banking & debt factoring, benefits & 60% healthcare, hiring, compliance, and public sector activations.
              </p>
            </div>

            {/* Overall Progress Gauge */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-right min-w-[220px]">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                <span>FOUNDATION PROGRESS</span>
                <span className="font-bold text-[#FF5500]">{progressPercent}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-2">
                <div style={{ width: `${progressPercent}%` }} className="bg-[#FF5500] h-full transition-all duration-300" />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span className="text-emerald-400">{completedCount} Done</span>
                <span className="text-amber-400">{inProgressCount} In Progress</span>
                <span className="text-slate-500">{notStartedCount} Pending</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Pills & Filters */}
      <div className="space-y-4">
        {/* Category horizontal scroll */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-[#FF5500] text-black font-semibold shadow-md shadow-[#FF5500]/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Secondary Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            {/* Assignee Filter */}
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400 font-mono">Assignee:</span>
              <select
                value={selectedAssignee}
                onChange={(e) => setSelectedAssignee(e.target.value)}
                className="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-white text-xs focus:outline-none focus:border-[#FF5500]"
              >
                <option value="all">All Roles</option>
                <option value="CEO">CEO</option>
                <option value="COO">COO</option>
                <option value="CDO">CDO</option>
                <option value="CTO">CTO</option>
                <option value="CMO">CMO</option>
              </select>
            </div>

            {/* Priority Filter */}
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400 font-mono">Priority:</span>
              <select
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-white text-xs focus:outline-none focus:border-[#FF5500]"
              >
                <option value="all">All Priorities</option>
                <option value="critical">Critical</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
              </select>
            </div>
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-2" />
            <input
              type="text"
              placeholder="Search checklist items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1 bg-slate-950 border border-slate-800 rounded text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5500]"
            />
          </div>
        </div>
      </div>

      {/* Checklist Tasks List */}
      <div className="space-y-4">
        {filteredTasks.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 font-mono text-xs">
            No checklist items match the selected filter criteria.
          </div>
        ) : (
          filteredTasks.map((task) => {
            const isExpanded = expandedTaskId === task.id;
            return (
              <div
                key={task.id}
                className={`rounded-xl border-2 transition-all overflow-hidden ${
                  task.status === 'completed'
                    ? 'bg-slate-900/40 border-slate-800 opacity-80'
                    : task.priority === 'critical'
                    ? 'bg-slate-900/90 border-slate-700 hover:border-[#FF5500]/50'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Main Task Row */}
                <div className="p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1 min-w-[280px]">
                    {/* Status Toggle Button */}
                    <button
                      onClick={() => {
                        const nextStatus: TaskStatus = 
                          task.status === 'not_started' ? 'in_progress' : 
                          task.status === 'in_progress' ? 'completed' : 'not_started';
                        onToggleStatus(task.id, nextStatus);
                      }}
                      className="mt-0.5 focus:outline-none transition-transform hover:scale-110"
                      title="Click to advance status"
                    >
                      {task.status === 'completed' ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-950" />
                      ) : task.status === 'in_progress' ? (
                        <Clock className="w-5 h-5 text-amber-400" />
                      ) : (
                        <div className="w-5 h-5 rounded-md border-2 border-slate-600 hover:border-slate-400" />
                      )}
                    </button>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`font-display font-bold text-sm sm:text-base ${
                          task.status === 'completed' ? 'text-slate-400 line-through' : 'text-white'
                        }`}>
                          {task.title}
                        </span>
                        {getPriorityBadge(task.priority)}
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1">
                        {task.description}
                      </p>
                    </div>
                  </div>

                  {/* Metadata and Controls */}
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800 text-[11px] font-bold">
                      {task.assignedRole}
                    </span>
                    <span className="text-slate-400 text-[11px]">
                      {task.timeline}
                    </span>
                    <button
                      onClick={() => toggleExpand(task.id)}
                      className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                      title="Toggle details"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800/80 space-y-4 text-xs">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Description & Deliverables */}
                      <div className="space-y-3">
                        <div className="text-slate-300 leading-relaxed">
                          <strong className="text-white">Full Scope: </strong>{task.description}
                        </div>
                        <div>
                          <div className="font-mono text-[11px] uppercase text-slate-400 mb-1.5">Concrete Deliverables:</div>
                          <ul className="space-y-1 text-slate-300">
                            {task.deliverables.map((del, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-[#FF5500] font-bold">•</span>
                                <span>{del}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Vendors, Cost & Compliance Notes */}
                      <div className="space-y-3">
                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                          <div className="font-mono text-[10px] text-slate-400 uppercase">Vendor / Platform Options:</div>
                          <div className="text-white font-semibold mt-0.5">
                            {task.vendorOptions.join(', ')}
                          </div>
                          <div className="text-[11px] font-mono text-[#FF5500] mt-1">
                            Estimated Cost: {task.estimatedCost}
                          </div>
                        </div>

                        {task.complianceNotes && (
                          <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-800/50 text-blue-300 text-[11px] leading-relaxed">
                            <strong>Compliance Note:</strong> {task.complianceNotes}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Status Radio Controls */}
                    <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-slate-400 font-mono text-[11px]">Update Status:</span>
                        <label className="flex items-center gap-1.5 cursor-pointer text-slate-300">
                          <input
                            type="radio"
                            name={`status-${task.id}`}
                            checked={task.status === 'not_started'}
                            onChange={() => onToggleStatus(task.id, 'not_started')}
                            className="accent-slate-500"
                          />
                          <span>Not Started</span>
                        </label>
                        <label className="flex items-center gap-1.5 cursor-pointer text-amber-300">
                          <input
                            type="radio"
                            name={`status-${task.id}`}
                            checked={task.status === 'in_progress'}
                            onChange={() => onToggleStatus(task.id, 'in_progress')}
                            className="accent-amber-500"
                          />
                          <span>In Progress</span>
                        </label>
                        <label className="flex items-center gap-1.5 cursor-pointer text-emerald-300">
                          <input
                            type="radio"
                            name={`status-${task.id}`}
                            checked={task.status === 'completed'}
                            onChange={() => onToggleStatus(task.id, 'completed')}
                            className="accent-emerald-500"
                          />
                          <span>Completed</span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
