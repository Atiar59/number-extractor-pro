import React, { useEffect, useState } from 'react';
import {
  History,
  FolderOpen,
  Trash2,
  Calendar,
  FileSpreadsheet,
  FileText,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getAllSessions, deleteSession, clearAllSessions } from '../utils/historyStorage';
import { exportToTxt, exportToExcel } from '../utils/exportUtils';
import type { ProcessingSession } from '../types';

export const HistoryView: React.FC = () => {
  const { loadSession, showToast } = useApp();
  const [sessions, setSessions] = useState<ProcessingSession[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchSessions = async () => {
    setIsLoading(true);
    const data = await getAllSessions();
    setSessions(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const handleDeleteSession = async (id: string) => {
    await deleteSession(id);
    setSessions((prev) => prev.filter((s) => s.id !== id));
    showToast('Session deleted from IndexedDB', 'info');
  };

  const handleClearAllHistory = async () => {
    if (sessions.length === 0) return;
    if (window.confirm('Are you sure you want to delete all past processing history?')) {
      await clearAllSessions();
      setSessions([]);
      showToast('All processing history cleared', 'success');
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
            <History className="w-7 h-7 text-indigo-400" />
            <span>Processing History (IndexedDB)</span>
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Reopen previous extraction sessions, download past reports, or manage local session archives.
          </p>
        </div>

        {sessions.length > 0 && (
          <button
            type="button"
            onClick={handleClearAllHistory}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 border border-rose-500/20 text-xs font-semibold transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear All History</span>
          </button>
        )}
      </div>

      {/* Sessions List */}
      {isLoading ? (
        <div className="p-12 text-center text-slate-500 text-sm">
          Loading history from IndexedDB...
        </div>
      ) : sessions.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-500 text-sm">
          No previous sessions found. Files you process are automatically archived here.
        </div>
      ) : (
        <div className="space-y-4">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-4"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-base text-white">
                    {session.files.map((f) => f.name).join(', ') || 'SMS Report Session'}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 font-sans">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {new Date(session.timestamp).toLocaleString()}
                  </span>
                  <span>•</span>
                  <span>
                    Total: <strong className="text-white">{session.totalNumbers.toLocaleString()}</strong>
                  </span>
                  <span>•</span>
                  <span>
                    Unique:{' '}
                    <strong className="text-emerald-400">
                      {session.uniqueNumbers.toLocaleString()}
                    </strong>
                  </span>
                  <span>•</span>
                  <span>
                    Duplicates:{' '}
                    <strong className="text-amber-400">
                      {session.duplicateNumbers.toLocaleString()}
                    </strong>
                  </span>
                  <span>•</span>
                  <span>
                    Countries:{' '}
                    <strong className="text-cyan-400">{session.countries.length}</strong>
                  </span>
                </div>

                {/* Countries list snippet */}
                {session.countries.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {session.countries.slice(0, 6).map((cName, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[11px]"
                      >
                        {cName}
                      </span>
                    ))}
                    {session.countries.length > 6 && (
                      <span className="text-[11px] text-slate-500 self-center">
                        +{session.countries.length - 6} more
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-2 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-800">
                <button
                  type="button"
                  onClick={() => loadSession(session)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/20 transition-all active:scale-95"
                >
                  <FolderOpen className="w-3.5 h-3.5" />
                  <span>Reopen Session</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    exportToTxt(session.numbers, `Session_${session.id}_Numbers.txt`)
                  }
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
                  title="Download TXT"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  <span>TXT</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    exportToExcel(session.numbers, `Session_${session.id}_Report.xlsx`)
                  }
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
                  title="Download Excel"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-blue-400" />
                  <span>Excel</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleDeleteSession(session.id)}
                  className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                  title="Delete from history"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
