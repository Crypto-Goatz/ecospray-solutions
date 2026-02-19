"use client";

import { useState } from "react";

interface Props {
  onComplete: (data: { crmApiKey: string; cro9Key: string }) => void;
  onBack: () => void;
}

export function IntegrationsStep({ onComplete, onBack }: Props) {
  const [crmApiKey, setCrmApiKey] = useState("");
  const [cro9Key, setCro9Key] = useState("");

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Optional Integrations</h2>
      <p className="text-zinc-400 text-sm">
        Connect additional services. These are optional -- you can configure them later in Settings.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1">CRM API Key</label>
          <input
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={crmApiKey}
            onChange={(e) => setCrmApiKey(e.target.value)}
            placeholder="e.g., abc123-def456 (from your CRM sub-account)"
          />
          <p className="text-xs text-zinc-500 mt-1">Connect your CRM sub-account for lead tracking and form submissions.</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1">CRO9 Analytics Key</label>
          <input
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={cro9Key}
            onChange={(e) => setCro9Key(e.target.value)}
            placeholder="cro9_xxxx..."
          />
          <p className="text-xs text-zinc-500 mt-1">Enable advanced analytics and behavioral tracking.</p>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 rounded-lg border border-zinc-700 py-3 text-white font-medium hover:bg-zinc-800 transition-colors"
        >
          Back
        </button>
        <button
          onClick={() => onComplete({ crmApiKey, cro9Key })}
          className="flex-1 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 py-3 text-white font-semibold transition-colors"
        >
          {crmApiKey || cro9Key ? "Save & Continue" : "Skip & Continue"}
        </button>
      </div>
    </div>
  );
}
