import React from 'react';
import {
  LayoutDashboard,
  UploadCloud,
  PhoneCall,
  Globe2,
  CopyX,
  AlertTriangle,
  History,
  Settings,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import type { ActiveTab } from '../types';

interface NavItem {
  id: ActiveTab;
  label: string;
  icon: React.ReactNode;
  badge?: number | string;
  badgeColor?: string;
}

export const Sidebar: React.FC = () => {
  const { activeTab, setActiveTab, stats } = useApp();

  const navItems: NavItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      id: 'extractor',
      label: 'File Extractor',
      icon: <UploadCloud className="w-5 h-5" />,
      badge: stats.totalFiles > 0 ? stats.totalFiles : undefined,
      badgeColor: 'bg-blue-500/20 text-blue-300',
    },
    {
      id: 'numbers',
      label: 'All Numbers',
      icon: <PhoneCall className="w-5 h-5" />,
      badge: stats.totalNumbers > 0 ? stats.totalNumbers.toLocaleString() : undefined,
      badgeColor: 'bg-indigo-500/20 text-indigo-300',
    },
    {
      id: 'countries',
      label: 'Country Wise',
      icon: <Globe2 className="w-5 h-5" />,
      badge: stats.countriesCount > 0 ? stats.countriesCount : undefined,
      badgeColor: 'bg-emerald-500/20 text-emerald-300',
    },
    {
      id: 'duplicates',
      label: 'Duplicates',
      icon: <CopyX className="w-5 h-5" />,
      badge: stats.duplicateNumbers > 0 ? stats.duplicateNumbers.toLocaleString() : undefined,
      badgeColor: 'bg-amber-500/20 text-amber-300',
    },
    {
      id: 'review',
      label: 'Needs Review',
      icon: <AlertTriangle className="w-5 h-5" />,
      badge: stats.reviewNumbers > 0 ? stats.reviewNumbers : undefined,
      badgeColor: 'bg-rose-500/20 text-rose-300',
    },
    {
      id: 'history',
      label: 'Processing History',
      icon: <History className="w-5 h-5" />,
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className="w-5 h-5" />,
    },
  ];

  return (
    <aside className="w-full lg:w-64 shrink-0 border-b lg:border-b-0 lg:border-r border-slate-800 bg-slate-900/40 p-4">
      {/* Mobile Horizontal Scroll / Desktop Vertical List */}
      <nav className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap shrink-0 lg:shrink ${
                isActive
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={isActive ? 'text-white' : 'text-slate-400'}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </div>

              {item.badge !== undefined && (
                <span
                  className={`ml-2 px-2 py-0.5 text-xs rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-white' : item.badgeColor || 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Engine Status Card */}
      <div className="hidden lg:block mt-8 p-3.5 rounded-xl border border-slate-800/80 bg-slate-950/40">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Extraction Engine
          </span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
        </div>
        <p className="text-xs text-slate-300 font-medium">Google libphonenumber</p>
        <p className="text-[11px] text-slate-400 mt-1">Smart OTP & Demo Code Filter active</p>
      </div>
    </aside>
  );
};
