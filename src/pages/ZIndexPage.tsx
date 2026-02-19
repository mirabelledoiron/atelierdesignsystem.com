import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import CodeBlock from "@/components/CodeBlock";

const layers = [
  { name: "Base", value: "z-0", zIndex: "0", desc: "Default page content", color: "bg-muted" },
  { name: "Raised", value: "z-10", zIndex: "10", desc: "Cards, elevated surfaces", color: "bg-accent" },
  { name: "Dropdown", value: "z-20", zIndex: "20", desc: "Dropdown menus, selects", color: "bg-primary/20" },
  { name: "Sticky", value: "z-30", zIndex: "30", desc: "Sticky headers, navigation", color: "bg-primary/30" },
  { name: "Fixed", value: "z-40", zIndex: "40", desc: "Fixed elements, sidebars", color: "bg-primary/40" },
  { name: "Modal", value: "z-50", zIndex: "50", desc: "Modals, dialogs, sheets", color: "bg-primary/50" },
  { name: "Popover", value: "z-[60]", zIndex: "60", desc: "Popovers, tooltips over modals", color: "bg-primary/60" },
  { name: "Toast", value: "z-[100]", zIndex: "100", desc: "Toast notifications — always on top", color: "bg-primary/70" },
];

export default function ZIndexPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Z-Index" subtitle="Layer hierarchy for stacking contexts. Consistent z-index values prevent overlap conflicts." />

      <ComponentSection title="Layer Hierarchy" description="From base content to topmost overlay.">
        <div className="space-y-2">
          {layers.map((l, i) => (
            <div key={l.name} className="flex items-center gap-4">
              <span className="w-16 text-sm font-medium text-foreground">{l.name}</span>
              <code className="font-mono text-xs text-primary bg-muted px-2 py-1 rounded w-16 text-center">{l.value}</code>
              <div className={`h-6 rounded ${l.color}`} style={{ width: `${(i + 1) * 12}%` }} />
              <span className="text-xs text-muted-foreground ml-auto">{l.desc}</span>
            </div>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="Visual Stack" description="How layers stack in 3D space.">
        <div className="relative h-64 flex items-end justify-center">
          {layers.slice(0, 5).map((l, i) => (
            <div
              key={l.name}
              className={`absolute rounded-lg border border-border ${l.color} p-3`}
              style={{
                width: `${240 - i * 20}px`,
                height: `${60 + i * 10}px`,
                bottom: `${i * 40}px`,
                left: `${50 + i * 20}px`,
                zIndex: i,
              }}
            >
              <span className="text-xs font-mono text-foreground">{l.name} ({l.zIndex})</span>
            </div>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="Usage" description="">
        <CodeBlock>{`/* Component z-index mapping */
.sidebar      { z-index: 40; }  /* Fixed sidebar */
.modal-overlay { z-index: 50; } /* Modal backdrop */
.modal        { z-index: 50; }  /* Modal content */
.tooltip      { z-index: 60; }  /* Tooltips over modals */
.toast        { z-index: 100; } /* Always visible */

/* Tailwind classes */
<div className="z-50">Modal overlay</div>
<div className="z-[100]">Toast notification</div>`}</CodeBlock>
      </ComponentSection>
    </StorybookLayout>
  );
}
