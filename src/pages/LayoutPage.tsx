import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import DocBlock from "@/components/DocBlock";
import CodeBlock from "@/components/CodeBlock";
import InstallBlock from "@/components/InstallBlock";

const spacingTokens = [
  { token: "py-20 (section-y)", value: "5rem (80px)", usage: "Vertical section padding" },
  { token: "px-6 (section-x)", value: "1.5rem (24px)", usage: "Horizontal section padding" },
  { token: "p-6", value: "1.5rem (24px)", usage: "Card padding" },
  { token: "gap-6", value: "1.5rem (24px)", usage: "Card grid gap" },
  { token: "px-8 py-6", value: "2rem / 1.5rem", usage: "Large button padding" },
  { token: "w-12 h-12", value: "48px", usage: "Small icon container" },
  { token: "w-16 h-16", value: "64px", usage: "Large icon container" },
];

const gridTokens = [
  { token: "max-w-7xl", value: "80rem (1280px)", usage: "Max content width" },
  { token: "max-w-4xl", value: "56rem (896px)", usage: "Narrow content" },
  { token: "md:grid-cols-2", value: "2 columns", usage: "Tablet card layout" },
  { token: "lg:grid-cols-3", value: "3 columns", usage: "Desktop card layout" },
];

export default function LayoutPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Spacing & Layout" subtitle="Consistent spacing tokens and grid systems for layout design." />

      <InstallBlock
        install="npm install tailwindcss postcss autoprefixer"
        importCode={`/* tailwind.config.ts — extend with your spacing tokens */\nimport type { Config } from "tailwindcss"`}
        usage={`<div className="max-w-7xl mx-auto px-6 py-20">\n  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">\n    {/* cards */}\n  </div>\n</div>`}
      />

      <DocBlock
        usage="Spacing and layout tokens ensure visual consistency across all pages. Use the defined spacing scale for padding, margins, and gaps. Follow the grid system for responsive layouts that adapt gracefully across breakpoints."
        doItems={[
          "Use section-y (py-20) for vertical rhythm between major sections",
          "Apply max-w-7xl to constrain content width on large screens",
          "Use gap-6 for card grids to maintain consistent spacing",
          "Alternate between background and surface colors for visual rhythm",
        ]}
        dontItems={[
          "Don't use arbitrary padding values — stick to the spacing scale",
          "Avoid mixing different gap sizes within the same grid",
          "Don't skip the max-width constraint — content shouldn't span the full viewport",
        ]}
      />

      <ComponentSection title="Spacing Tokens" description="Core spacing values used throughout the system.">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-3 font-medium text-muted-foreground">Token</th>
                <th className="pb-3 font-medium text-muted-foreground">Value</th>
                <th className="pb-3 font-medium text-muted-foreground">Usage</th>
              </tr>
            </thead>
            <tbody>
              {spacingTokens.map((t) => (
                <tr key={t.token} className="border-b border-border/50">
                  <td className="py-3 font-mono text-primary text-xs">{t.token}</td>
                  <td className="py-3 text-foreground">{t.value}</td>
                  <td className="py-3 text-muted-foreground">{t.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ComponentSection>

      <ComponentSection title="Grid System" description="Responsive column layout tokens.">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-3 font-medium text-muted-foreground">Token</th>
                <th className="pb-3 font-medium text-muted-foreground">Value</th>
                <th className="pb-3 font-medium text-muted-foreground">Usage</th>
              </tr>
            </thead>
            <tbody>
              {gridTokens.map((t) => (
                <tr key={t.token} className="border-b border-border/50">
                  <td className="py-3 font-mono text-primary text-xs">{t.token}</td>
                  <td className="py-3 text-foreground">{t.value}</td>
                  <td className="py-3 text-muted-foreground">{t.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ComponentSection>

      <ComponentSection title="Page Structure" description="Standard page layout pattern for landing pages.">
        <CodeBlock className="leading-relaxed">{`Navigation (fixed, bg-background/95, backdrop-blur)
        |
Hero Section (pt-32 pb-20)
        |
Content Sections (py-20 px-6, alternating bg/surface)
        |
CTA Section (py-20 px-6)
        |
Footer (py-12 px-6, bg-card)`}</CodeBlock>
      </ComponentSection>

      <ComponentSection title="Section Alternation" description="Alternate between background and card colors for visual rhythm.">
        <div className="space-y-2">
          {["Hero — bg-background", "Problem — bg-card", "Features — bg-background", "Services — bg-card", "CTA — bg-background", "Footer — bg-card"].map((s, i) => (
            <div
              key={s}
              className={`px-4 py-3 rounded-lg text-sm font-mono ${
                i % 2 === 0 ? "bg-background text-foreground" : "bg-card text-foreground"
              }`}
            >
              {i + 1}. {s}
            </div>
          ))}
        </div>
      </ComponentSection>
    </StorybookLayout>
  );
}
