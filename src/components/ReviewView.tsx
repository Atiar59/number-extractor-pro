import React from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  Trash2,
  Copy,
  Info,
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ReviewView: React.FC = () => {
  const { reviewNumbers, deleteNumbers, showToast } = useApp();

  const handleDiscardAll = () => {
    if (reviewNumbers.length === 0) return;
    const ids = reviewNumbers.map((n) => n.id);
    deleteNumbers(ids);
    showToast(`Discarded ${ids.length} ambiguous item(s)`, 'info');
  };

  const handleCopyValue = (val: string) => {
    navigator.clipboard.writeText(val);
    showToast(`Copied ${val} to clipboard`, 'success');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
            <AlertTriangle className="w-7 h-7 text-amber-400" />
            <span>Needs Review / Ambiguous Entries</span>
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Suspicious or ambiguous values prevented from polluting your clean phone database. Demo OTP codes and short verification numbers are automatically isolated here.
          </p>
        </div>

        {reviewNumbers.length > 0 && (
          <button
            type="button"
            onClick={handleDiscardAll}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold shadow-md shadow-rose-600/30 transition-all"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Discard All Ambiguous ({reviewNumbers.length})</span>
          </button>
        )}
      </div>

      {/* Safety Notice Card */}
      <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/20 flex items-start gap-3 text-xs text-blue-200">
        <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
        <div>
          <div className="font-semibold text-white">Smart OTP & Safety Isolation Shield</div>
          <p className="text-slate-300 mt-1 leading-relaxed">
            The Number Extractor engine strictly excludes demo OTP codes, Telegram verification codes, and message bodies. If an entry resembles a national number but lacks a clear international dial code, it is quarantined in this Review section to protect your dataset integrity.
          </p>
        </div>
      </div>

      {/* Table of Review Items */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-950/80 text-slate-400 font-semibold uppercase tracking-wider border-b border-slate-800">
            <tr>
              <th className="p-3.5 w-14">#</th>
              <th className="p-3.5">Raw Candidate</th>
              <th className="p-3.5">Flagged Reason</th>
              <th className="p-3.5">Source File</th>
              <th className="p-3.5">Row</th>
              <th className="p-3.5 text-right w-24">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-300 font-mono">
            {reviewNumbers.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-8 text-center text-slate-500 font-sans text-sm">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2 opacity-80" />
                  Clean! No ambiguous or questionable numbers detected.
                </td>
              </tr>
            ) : (
              reviewNumbers.map((item, idx) => (
                <tr key={item.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 text-slate-500 text-[11px]">{idx + 1}</td>
                  <td className="p-3.5 font-bold text-white tracking-wide">
                    {item.original || item.normalized}
                  </td>
                  <td className="p-3.5 font-sans">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[11px]">
                      {item.reviewReason || 'Missing international country code'}
                    </span>
                  </td>
                  <td className="p-3.5 font-sans text-[11px] text-slate-400">
                    {item.sourceFile}
                  </td>
                  <td className="p-3.5 font-mono text-[11px] text-slate-400">
                    Row {item.sourceRow}
                  </td>
                  <td className="p-3.5 text-right font-sans">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleCopyValue(item.original || item.normalized)}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                        title="Copy raw value"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteNumbers([item.id])}
                        className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors"
                        title="Discard"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
