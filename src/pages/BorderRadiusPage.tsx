import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import CodeBlock from "@/components/CodeBlock";

const radii = [
  { name: "rounded-none", value: "0px", class: "rounded-none" },
  { name: "rounded-sm", value: "calc(0.75rem - 4px)", class: "rounded-sm" },
  { name: "rounded-md", value: "calc(0.75rem - 2px)", class: "rounded-md" },
  { name: "rounded-lg", value: "0.75rem", class: "rounded-lg" },
  { name: "rounded-xl", value: "1rem", class: "rounded-xl" },
  { name: "rounded-2xl", value: "1.5rem", class: "rounded-2xl" },
  { name: "rounded-full", value: "9999px", class: "rounded-full" },
];

export default function BorderRadiusPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Border Radius" subtitle="Radius scale for consistent rounding across all components. Base radius is 0.75rem." />

      <ComponentSection title="Radius Scale" description="Visual reference for all border radius values.">
        <div className="grid sm:grid-cols-4 gap-6">
          {radii.map((r) => (
            <div key={r.name} className="flex flex-col items-center gap-3">
              <div className={`w-20 h-20 bg-primary/20 border-2 border-primary/40 ${r.class}`} />
              <div className="text-center">
                <p className="text-xs font-mono font-medium text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.value}</p>
              </div>
            </div>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="Component Mapping" description="Which radius to use for common components.">
        <div className="space-y-2 text-sm">
          {[
            ["Buttons", "rounded-md", "Subtle rounding"],
            ["Cards", "rounded-xl", "Soft container edges"],
            ["Inputs", "rounded-md", "Match button radius"],
            ["Badges", "rounded-md", "Compact, readable"],
            ["Avatars", "rounded-full", "Circular profile images"],
            ["Modals", "rounded-xl", "Prominent floating panels"],
            ["Tooltips", "rounded-lg", "Small floating elements"],
          ].map(([component, radius, note]) => (
            <div key={component as string} className="flex items-center gap-4">
              <span className="w-28 font-medium text-foreground">{component}</span>
              <code className="font-mono text-xs text-primary bg-muted px-2 py-1 rounded">{radius}</code>
              <span className="text-muted-foreground text-xs">{note}</span>
            </div>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="CSS Token" description="">
        <CodeBlock>{`:root {
  --radius: 0.75rem;
}

/* Tailwind config derives from --radius */
borderRadius: {
  lg: "var(--radius)",           // 0.75rem
  md: "calc(var(--radius) - 2px)", // ~0.625rem
  sm: "calc(var(--radius) - 4px)", // ~0.5rem
}`}</CodeBlock>
      </ComponentSection>
    </StorybookLayout>
  );
}
