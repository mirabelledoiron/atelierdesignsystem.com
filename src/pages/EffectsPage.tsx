import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import DocBlock from "@/components/DocBlock";
import CodeBlock from "@/components/CodeBlock";
import InstallBlock from "@/components/InstallBlock";

export default function EffectsPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Effects & Shadows" subtitle="Glow effects and shadows for depth and emphasis." />

      <InstallBlock
        install="npm install tailwindcss-animate"
        importCode={`/* Add glow utilities to your index.css @layer utilities */\n.glow-brand { box-shadow: 0 0 20px -5px hsl(var(--primary) / 0.3); }\n.glow-brand-lg { box-shadow: 0 0 40px -10px hsl(var(--primary) / 0.4); }`}
        usage={`<div className="rounded-xl border border-border bg-card p-6 glow-brand">\n  Glowing card\n</div>`}
      />

      <DocBlock
        usage="Effects add depth and visual hierarchy. Use glow effects on key interactive elements to draw attention. Apply hover transitions consistently to create a polished, responsive feel. Effects are most impactful in dark mode."
        doItems={[
          "Use glow-brand on primary CTAs and hero elements",
          "Apply transition-all with hover:scale-105 for interactive cards",
          "Keep animations subtle — 200ms transitions feel snappy without being jarring",
          "Keep animations subtle — 200ms transitions feel snappy without being jarring",
        ]}
        dontItems={[
          "Don't apply glows to every element — reserve them for focal points",
          "Avoid scale transforms larger than 1.05 — they feel exaggerated",
          "Don't animate properties that cause layout reflow (width, height, margin)",
          "Don't combine multiple glow classes on the same element",
        ]}
      />

      <ComponentSection title="Brand Glows" description="Signature glow effects using the primary color.">
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="rounded-xl border border-border bg-card p-6 text-center glow-brand">
            <p className="text-sm font-medium text-foreground mb-1">Subtle Glow</p>
            <code className="text-xs font-mono text-primary">glow-brand</code>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-center glow-brand-lg">
            <p className="text-sm font-medium text-foreground mb-1">Large Glow</p>
            <code className="text-xs font-mono text-primary">glow-brand-lg</code>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-center glow-secondary">
            <p className="text-sm font-medium text-foreground mb-1">Secondary Glow</p>
            <code className="text-xs font-mono text-secondary">glow-secondary</code>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection title="Animation Guidelines" description="Recommended transition settings for interactive elements.">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-3 font-medium text-muted-foreground">Element</th>
                <th className="pb-3 font-medium text-muted-foreground">Transition</th>
                <th className="pb-3 font-medium text-muted-foreground">Effect</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Buttons", "transition-colors", "Darken primary color"],
                ["Cards", "transition-all", "Border color + scale (hover:scale-105)"],
                ["Links", "transition-colors", "Muted → foreground"],
              ].map(([el, tr, ef]) => (
                <tr key={el} className="border-b border-border/50">
                  <td className="py-3 text-foreground">{el}</td>
                  <td className="py-3 font-mono text-primary text-xs">{tr}</td>
                  <td className="py-3 text-muted-foreground">{ef}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ComponentSection>

      <ComponentSection title="Code Example">
        <CodeBlock>{`// Glow effect on a card
<div className="rounded-xl border border-border bg-card p-6 glow-brand">
  Glowing card content
</div>

// Hover scale on a card
<Card className="hover:border-primary/40 hover:scale-105 transition-all">
  Interactive card
</Card>`}</CodeBlock>
      </ComponentSection>
    </StorybookLayout>
  );
}
