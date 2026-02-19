"use client";

import { SetupWizard } from "./components/SetupWizard";

export default function SetupPage() {
  return (
    <div className="p-6 md:p-8">
      <div className="max-w-3xl mx-auto">
        <SetupWizard />
      </div>
    </div>
  );
}
