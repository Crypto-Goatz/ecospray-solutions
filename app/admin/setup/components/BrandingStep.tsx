"use client";

import { useState } from "react";

export interface BrandingData {
  primary: string;
  secondary: string;
  accent: string;
}

interface Props {
  initial: Partial<BrandingData>;
  businessName: string;
  onComplete: (data: BrandingData) => void;
  onBack: () => void;
}

export function BrandingStep({ initial, businessName, onComplete, onBack }: Props) {
  const [colors, setColors] = useState<BrandingData>({
    primary: initial.primary || "#22c55e",
    secondary: initial.secondary || "#059669",
    accent: initial.accent || "#10b981",
  });

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Brand Colors</h2>
      <p className="text-zinc-400 text-sm">Choose colors that match your brand. These will be used throughout the site.</p>

      {/* Live Preview */}
      <div className="rounded-xl overflow-hidden border border-zinc-700">
        <div className="p-4" style={{ backgroundColor: colors.primary }}>
          <h3 className="text-white font-bold text-lg">{businessName || "EcoSpray Solutions"}</h3>
          <p className="text-white/80 text-sm">Professional insulation services you can trust</p>
        </div>
        <div className="bg-zinc-800 p-4">
          <p className="text-zinc-300 text-sm mb-3">
            Welcome to our site. We provide top-quality spray foam insulation services.
          </p>
          <div className="flex gap-3">
            <button
              className="px-4 py-2 rounded-lg text-white text-sm font-medium"
              style={{ backgroundColor: colors.primary }}
            >
              Primary Button
            </button>
            <button
              className="px-4 py-2 rounded-lg text-white text-sm font-medium"
              style={{ backgroundColor: colors.secondary }}
            >
              Secondary
            </button>
            <button
              className="px-4 py-2 rounded-lg text-white text-sm font-medium"
              style={{ backgroundColor: colors.accent }}
            >
              Accent
            </button>
          </div>
        </div>
      </div>

      {/* Color Pickers */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {(["primary", "secondary", "accent"] as const).map((key) => (
          <div key={key} className="space-y-2">
            <label className="block text-sm font-medium text-zinc-300 capitalize">{key} Color</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={colors[key]}
                onChange={(e) => setColors({ ...colors, [key]: e.target.value })}
                className="w-12 h-10 rounded cursor-pointer border-0 bg-transparent"
              />
              <input
                type="text"
                value={colors[key]}
                onChange={(e) => setColors({ ...colors, [key]: e.target.value })}
                className="flex-1 rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-white text-sm font-mono focus:outline-none focus:ring-2 focus:ring-green-500"
                pattern="^#[0-9a-fA-F]{6}$"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 rounded-lg border border-zinc-700 py-3 text-white font-medium hover:bg-zinc-800 transition-colors"
        >
          Back
        </button>
        <button
          onClick={() => onComplete(colors)}
          className="flex-1 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 py-3 text-white font-semibold transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
