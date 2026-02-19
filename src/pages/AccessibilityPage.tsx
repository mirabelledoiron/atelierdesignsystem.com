import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import DocBlock from "@/components/DocBlock";
import CodeBlock from "@/components/CodeBlock";
import { Button } from "@/components/ui/button";

const contrastRatios = [
  { ratio: "12.6:1", label: "White on Dark Navy", pass: true },
  { ratio: "4.5:1", label: "Muted Gray on Dark Navy", pass: true },
  { ratio: "4.8:1", label: "Coral Accent on Dark Navy", pass: true },
];

export default function AccessibilityPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Accessibility" subtitle="WCAG compliant color contrast ratios and focus states." />

      <DocBlock
        usage="Accessibility ensures the design system is usable by everyone, including users with visual impairments, motor disabilities, and those using assistive technology. All color combinations meet WCAG AA contrast requirements. Focus states are visible for keyboard navigation."
        doItems={[
          "Test all color combinations against WCAG AA (4.5:1 for text, 3:1 for large text)",
          "Ensure every interactive element has a visible focus ring",
          "Use semantic HTML elements (<button>, <nav>, <main>) over generic <div>s",
          "Provide aria-label attributes for icon-only buttons",
          "Support keyboard navigation (Tab, Enter, Escape) for all interactive patterns",
        ]}
        dontItems={[
          "Don't remove focus outlines without providing an alternative focus indicator",
          "Never use color alone to convey information — pair with text, icons, or patterns",
          "Don't trap keyboard focus inside components without an escape mechanism",
          "Avoid autoplay animations without a prefers-reduced-motion media query",
        ]}
      />

      <ComponentSection title="Color Contrast" description="All text/background combinations meet WCAG AA standards.">
        <div className="grid sm:grid-cols-3 gap-4">
          {contrastRatios.map((c) => (
            <div key={c.label} className="rounded-xl border border-border bg-card p-5 text-center">
              <p className="text-3xl font-bold text-secondary mb-2">{c.ratio}</p>
              <p className="text-sm text-muted-foreground">{c.label}</p>
            </div>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="Focus States" description="Visible focus rings for keyboard navigation.">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">Press <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border font-mono text-xs">Tab</kbd> to navigate to the button below and verify the focus ring.</p>
          <Button className="focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
            Tab to Focus Me
          </Button>
          <CodeBlock>{`className="focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"`}</CodeBlock>
        </div>
      </ComponentSection>

      <ComponentSection title="Semantic HTML Checklist" description="Required semantic elements for accessible pages.">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-3 font-medium text-muted-foreground">Element</th>
                <th className="pb-3 font-medium text-muted-foreground">Purpose</th>
                <th className="pb-3 font-medium text-muted-foreground">Replaces</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["<header>", "Site or section header", "<div class=\"header\">"],
                ["<nav>", "Navigation links", "<div class=\"nav\">"],
                ["<main>", "Primary page content", "<div class=\"content\">"],
                ["<section>", "Thematic content grouping", "<div class=\"section\">"],
                ["<button>", "Interactive trigger", "<div onClick={...}>"],
                ["<label>", "Form field label", "<span>Label text</span>"],
              ].map(([el, purpose, replaces]) => (
                <tr key={el} className="border-b border-border/50">
                  <td className="py-3 font-mono text-primary text-xs">{el}</td>
                  <td className="py-3 text-foreground">{purpose}</td>
                  <td className="py-3 font-mono text-destructive/60 text-xs">{replaces}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ComponentSection>

      <ComponentSection title="Responsive Breakpoints" description="Standard breakpoints for responsive design.">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-3 font-medium text-muted-foreground">Breakpoint</th>
                <th className="pb-3 font-medium text-muted-foreground">Width</th>
                <th className="pb-3 font-medium text-muted-foreground">Usage</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["sm", "640px", "Small tablets"],
                ["md", "768px", "Tablets, 2-column layouts"],
                ["lg", "1024px", "Desktop, 3-column layouts"],
                ["xl", "1280px", "Large desktop"],
                ["2xl", "1536px", "Extra large screens"],
              ].map(([bp, w, u]) => (
                <tr key={bp} className="border-b border-border/50">
                  <td className="py-3 font-mono text-primary text-xs">{bp}</td>
                  <td className="py-3 text-foreground">{w}</td>
                  <td className="py-3 text-muted-foreground">{u}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ComponentSection>

      <ComponentSection title="Reduced Motion" description="Respect user preferences for reduced animations.">
        <CodeBlock>{`/* CSS */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* Tailwind */
<div className="motion-safe:animate-bounce motion-reduce:animate-none">
  Respects user preference
</div>`}</CodeBlock>
      </ComponentSection>
    </StorybookLayout>
  );
}
