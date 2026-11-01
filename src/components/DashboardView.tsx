import React, { useEffect, useState } from 'react';
import {
  FileText,
  PhoneCall,
  CheckCircle,
  Copy,
  AlertOctagon,
  Globe,
  Download,
  ArrowRight,
  Sparkles,
  Upload,
  Clock,
  Layers,
  Archive,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { exportCountryWiseZip, exportToTxt, exportToExcel } from '../utils/exportUtils';
import { getAllSessions } from '../utils/historyStorage';
import type { ProcessingSession } from '../types';

export const DashboardView: React.FC = () => {
  const {
    stats,
    countrySummaries,
    numbers,
    uniqueNumbers,
    duplicateNumbers,
    setActiveTab,
    setSelectedCountryFilter,
    loadSampleData,
    loadSession,
    showToast,
    isProcessing,
  } = useApp();

  const [recentSessions, setRecentSessions] = useState<ProcessingSession[]>([]);

  useEffect(() => {
    getAllSessions().then((sessions) => {
      setRecentSessions(sessions.slice(0, 4));
    });
  }, [stats]);

  const handleExportZip = async () => {
    if (numbers.length === 0) {
      showToast('No numbers to export. Please process a file first.', 'warning');
      return;
    }
    showToast('Generating country-wise ZIP package...', 'info');
    await exportCountryWiseZip(numbers, 'Number_Extractor_Country_Package.zip');
    showToast('ZIP package exported successfully!', 'success');
  };

  const statCards = [
    {
      title: 'Files Processed',
      value: stats.totalFiles,
      subtitle: 'Active spreadsheets & files',
      icon: <FileText className="w-5 h-5 text-blue-400" />,
      color: 'from-blue-500/10 to-blue-600/5 border-blue-500/20 text-blue-400',
    },
    {
      title: 'Total Numbers',
      value: stats.totalNumbers.toLocaleString(),
      subtitle: 'Raw phone numbers detected',
      icon: <PhoneCall className="w-5 h-5 text-indigo-400" />,
      color: 'from-indigo-500/10 to-indigo-600/5 border-indigo-500/20 text-indigo-400',
    },
    {
      title: 'Unique Numbers',
      value: stats.uniqueNumbers.toLocaleString(),
      subtitle: 'Deduplicated clean numbers',
      icon: <CheckCircle className="w-5 h-5 text-emerald-400" />,
      color: 'from-emerald-500/10 to-emerald-600/5 border-emerald-500/20 text-emerald-400',
    },
    {
      title: 'Duplicate Numbers',
      value: stats.duplicateNumbers.toLocaleString(),
      subtitle: `${stats.totalNumbers > 0 ? Math.round((stats.duplicateNumbers / stats.totalNumbers) * 100) : 0}% repetition rate`,
      icon: <Copy className="w-5 h-5 text-amber-400" />,
      color: 'from-amber-500/10 to-amber-600/5 border-amber-500/20 text-amber-400',
    },
    {
      title: 'Countries Detected',
      value: stats.countriesCount,
      subtitle: 'International dial plans',
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      color: 'from-cyan-500/10 to-cyan-600/5 border-cyan-500/20 text-cyan-400',
    },
    {
      title: 'Invalid / Needs Review',
      value: stats.reviewNumbers + stats.invalidNumbers,
      subtitle: 'Non-phone OTPs excluded',
      icon: <AlertOctagon className="w-5 h-5 text-rose-400" />,
      color: 'from-rose-500/10 to-rose-600/5 border-rose-500/20 text-rose-400',
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Welcome / Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900/60 via-slate-900 to-indigo-950/80 border border-blue-500/20 p-6 sm:p-8 shadow-xl">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>AI-Assisted Phone Intelligence Engine</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Extract, Clean & Separate Numbers by Country
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
            Engineered specifically for SMS Panel Reports (Flex SMS, Astra, etc.). Extracts real phone numbers from mixed columns, eliminates OTP codes and Telegram messages, and separates numbers into country-specific TXT and Excel files with one click.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setActiveTab('extractor')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all active:scale-95"
            >
              <Upload className="w-4 h-4" />
              <span>Upload Spreadsheets</span>
            </button>

            {stats.totalNumbers === 0 ? (
              <button
                onClick={loadSampleData}
                disabled={isProcessing}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 border border-slate-700 font-semibold text-sm transition-all"
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Test with Flex SMS Sample</span>
              </button>
            ) : (
              <button
                onClick={handleExportZip}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-600/30 transition-all active:scale-95"
              >
                <Archive className="w-4 h-4" />
                <span>Download Country ZIP Package</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Dynamic Statistics Cards */}
      <div>
        <h2 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
          <Layers className="w-5 h-5 text-blue-400" />
          <span>Processing Overview</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {statCards.map((stat, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl bg-gradient-to-br ${stat.color} border backdrop-blur-sm transition-all hover:translate-y-[-2px]`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {stat.title}
                </span>
                <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                  {stat.icon}
                </div>
              </div>
              <div className="mt-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 mt-1">{stat.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Countries Section */}
      {countrySummaries.length > 0 && (
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <Globe className="w-5 h-5 text-cyan-400" />
                <span>Top Countries Detected</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Numbers automatically categorized by validated international dial codes
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('countries')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>View All {countrySummaries.length} Countries</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {countrySummaries.slice(0, 8).map((country) => (
              <div
                key={country.countryCode}
                onClick={() => {
                  setSelectedCountryFilter(country.countryCode);
                  setActiveTab('countries');
                }}
                className="p-4 rounded-xl border border-slate-800 bg-slate-950/50 hover:bg-slate-800/50 hover:border-slate-700 cursor-pointer transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{country.flag}</span>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                        {country.countryName}
                      </div>
                      <div className="text-xs font-mono text-slate-400">{country.dialCode}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Total Numbers:</span>
                  <span className="font-bold text-slate-200 font-mono">
                    {country.totalCount.toLocaleString()}
                  </span>
                </div>

                <div className="mt-1 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Unique:</span>
                  <span className="text-emerald-400 font-mono">
                    {country.uniqueCount.toLocaleString()}
                  </span>
                </div>

                {/* Relative bar */}
                <div className="mt-3 w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-blue-500 h-1.5 rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.min(100, (country.totalCount / (numbers.length || 1)) * 100)}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Action Export Center */}
      {numbers.length > 0 && (
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Download className="w-5 h-5 text-emerald-400" />
                <span>Quick Export Suite</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Download filtered results ready for SMS panels and marketing campaigns
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <button
              onClick={() => {
                exportToTxt(uniqueNumbers, 'Clean_Unique_Phone_Numbers.txt');
                showToast('Unique numbers TXT downloaded', 'success');
              }}
              className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-slate-800/80 text-left transition-colors"
            >
              <div className="text-xs font-semibold text-slate-400 uppercase">Export Clean TXT</div>
              <div className="text-sm font-bold text-emerald-400 mt-1">Unique Numbers ({uniqueNumbers.length})</div>
              <div className="text-[11px] text-slate-500 mt-0.5">One number per line (E.164)</div>
            </button>

            <button
              onClick={() => {
                exportToExcel(uniqueNumbers, 'Clean_Phone_Numbers.xlsx');
                showToast('Excel report downloaded', 'success');
              }}
              className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-slate-800/80 text-left transition-colors"
            >
              <div className="text-xs font-semibold text-slate-400 uppercase">Export Excel (.xlsx)</div>
              <div className="text-sm font-bold text-blue-400 mt-1">Formatted Report</div>
              <div className="text-[11px] text-slate-500 mt-0.5">String preserved cells</div>
            </button>

            <button
              onClick={handleExportZip}
              className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-slate-800/80 text-left transition-colors"
            >
              <div className="text-xs font-semibold text-slate-400 uppercase">Country Package</div>
              <div className="text-sm font-bold text-cyan-400 mt-1">ZIP with All Countries</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Separated into folder</div>
            </button>

            <button
              onClick={() => {
                if (duplicateNumbers.length === 0) {
                  showToast('No duplicate numbers detected', 'info');
                  return;
                }
                exportToTxt(duplicateNumbers, 'Duplicate_Numbers.txt');
                showToast('Duplicates TXT downloaded', 'success');
              }}
              className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-slate-800/80 text-left transition-colors"
            >
              <div className="text-xs font-semibold text-slate-400 uppercase">Export Duplicates</div>
              <div className="text-sm font-bold text-amber-400 mt-1">Duplicate List ({duplicateNumbers.length})</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Repeated phone numbers</div>
            </button>
          </div>
        </div>
      )}

      {/* Recent Processing History */}
      {recentSessions.length > 0 && (
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <Clock className="w-5 h-5 text-indigo-400" />
              <span>Recent Sessions (IndexedDB)</span>
            </h3>
            <button
              onClick={() => setActiveTab('history')}
              className="text-xs font-semibold text-blue-400 hover:text-blue-300"
            >
              View Full History →
            </button>
          </div>

          <div className="divide-y divide-slate-800/60">
            {recentSessions.map((session) => (
              <div
                key={session.id}
                className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >
                <div>
                  <div className="font-semibold text-slate-200">
                    {session.files.map((f) => f.name).join(', ') || 'Uploaded Files'}
                  </div>
                  <div className="text-slate-400 text-[11px] mt-0.5">
                    {new Date(session.timestamp).toLocaleString()} • {session.countries.length} Countries
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-mono text-slate-300">
                    <strong className="text-white">{session.totalNumbers.toLocaleString()}</strong> numbers ({session.uniqueNumbers.toLocaleString()} unique)
                  </span>
                  <button
                    onClick={() => loadSession(session)}
                    className="px-2.5 py-1 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 font-semibold"
                  >
                    Reopen
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
