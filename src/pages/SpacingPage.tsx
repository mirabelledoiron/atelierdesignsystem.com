import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import CodeBlock from "@/components/CodeBlock";

const spacingScale = [
  { name: "0", px: "0px", tw: "p-0" },
  { name: "0.5", px: "2px", tw: "p-0.5" },
  { name: "1", px: "4px", tw: "p-1" },
  { name: "1.5", px: "6px", tw: "p-1.5" },
  { name: "2", px: "8px", tw: "p-2" },
  { name: "3", px: "12px", tw: "p-3" },
  { name: "4", px: "16px", tw: "p-4" },
  { name: "5", px: "20px", tw: "p-5" },
  { name: "6", px: "24px", tw: "p-6" },
  { name: "8", px: "32px", tw: "p-8" },
  { name: "10", px: "40px", tw: "p-10" },
  { name: "12", px: "48px", tw: "p-12" },
  { name: "16", px: "64px", tw: "p-16" },
  { name: "20", px: "80px", tw: "p-20" },
  { name: "24", px: "96px", tw: "p-24" },
];

const layoutTokens = [
  { name: "--section-y", value: "5rem (80px)", desc: "Vertical section spacing" },
  { name: "--section-x", value: "1.5rem (24px)", desc: "Horizontal section padding" },
  { name: "--card-padding", value: "1.5rem (24px)", desc: "Card internal padding" },
  { name: "--card-gap", value: "1.5rem (24px)", desc: "Gap between card elements" },
];

export default function SpacingPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Spacing" subtitle="Consistent spacing scale based on 4px increments. Use spacing tokens for predictable, harmonious layouts." />

      <ComponentSection title="Spacing Scale" description="Core spacing values used throughout the system.">
        <div className="space-y-2">
          {spacingScale.map((s) => (
            <div key={s.name} className="flex items-center gap-4">
              <span className="text-xs font-mono text-muted-foreground w-8 text-right">{s.name}</span>
              <div className="h-4 bg-primary/20 border border-primary/30 rounded-sm" style={{ width: s.px }} />
              <span className="text-xs font-mono text-foreground">{s.px}</span>
              <span className="text-xs font-mono text-muted-foreground">{s.tw}</span>
            </div>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="Layout Tokens" description="Semantic spacing tokens for page and component structure.">
        <div className="space-y-3">
          {layoutTokens.map((t) => (
            <div key={t.name} className="flex items-start gap-4 text-sm">
              <code className="font-mono text-primary text-xs bg-muted px-2 py-1 rounded">{t.name}</code>
              <span className="text-foreground font-mono text-xs">{t.value}</span>
              <span className="text-muted-foreground text-xs">{t.desc}</span>
            </div>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="Usage" description="How to apply spacing in components.">
        <CodeBlock>{`<!-- Padding -->
<div className="p-4">16px padding</div>
<div className="px-6 py-4">24px horizontal, 16px vertical</div>

<!-- Margin -->
<div className="mt-8 mb-4">32px top, 16px bottom</div>

<!-- Gap (flexbox/grid) -->
<div className="flex gap-4">16px gap between items</div>
<div className="grid grid-cols-3 gap-6">24px grid gap</div>

<!-- Space between -->
<div className="space-y-4">16px between children</div>`}</CodeBlock>
      </ComponentSection>
    </StorybookLayout>
  );
}
