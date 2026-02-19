"use client";

import { SetupWizard } from "./components/SetupWizard";

export default function SetupPage() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl">
        <SetupWizard />
      </div>
    </div>
  );
}
