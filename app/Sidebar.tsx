import Step from "@/components/Step";
import React from "react";

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:w-[274px] lg:h-[568px] lg:flex-col lg:flex-shrink-0 rounded-lg lg:bg-[url('https://as1.ftcdn.net/v2/jpg/08/50/32/66/1000_F_850326678_DsYkNvAXmGP8EyOiNlVbNhI50jgf2KgQ.jpg')] lg:px-8 pt-10 lg:gap-8">
      <Step stepNumber={1} smallTitle="Step 1" sectionTitle="Personal Information" />
      <Step stepNumber={2} smallTitle="Step 2" sectionTitle="Address details" />
      <Step stepNumber={3} smallTitle="Step 3" sectionTitle="Preferences" />
      <Step stepNumber={4} smallTitle="Step 4" sectionTitle="Review and Submit" />
    </aside>
  );
}
