import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";

const principles = [
  {
    title: "Clarity Over Cleverness",
    desc: "Every element should communicate its purpose immediately. Avoid ambiguity in labels, icons, and interactions. When in doubt, be explicit.",
  },
  {
    title: "Consistency Breeds Confidence",
    desc: "Reuse patterns, tokens, and components. Users build mental models — consistency reinforces them. Every deviation should be intentional and justified.",
  },
  {
    title: "Accessible by Default",
    desc: "Accessibility is not a feature — it's a requirement. Every component must meet WCAG 2.1 AA standards. Keyboard navigation, screen reader support, and sufficient contrast are non-negotiable.",
  },
  {
    title: "Progressive Disclosure",
    desc: "Show only what's needed at each step. Use layered information architecture — summaries first, details on demand. Reduce cognitive load.",
  },
  {
    title: "Density with Purpose",
    desc: "Information-dense interfaces are fine when they serve expert users. Balance data visibility with breathing room. Let spacing and hierarchy guide the eye.",
  },
  {
    title: "Motion with Meaning",
    desc: "Animation should communicate state changes, not decorate. Every transition should answer: what changed, where did it go, what should I look at next?",
  },
  {
    title: "Ship, Then Refine",
    desc: "A working component shipped today beats a perfect component shipped never. Start with sensible defaults, iterate based on real usage data.",
  },
];

export default function DesignPrinciplesPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Design Principles" subtitle="The philosophy and values that guide every decision in the Atelier design system." />

      <ComponentSection title="Core Principles" description="These principles inform component design, pattern choices, and system evolution.">
        <div className="space-y-6">
          {principles.map((p, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-bold text-primary">{i + 1}</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="Decision Framework" description="When evaluating component or pattern decisions, ask:">
        <div className="space-y-2">
          {[
            "Does it solve a real, recurring problem?",
            "Is it consistent with existing patterns?",
            "Can a new team member understand it in under 30 seconds?",
            "Does it degrade gracefully (accessibility, responsive, error states)?",
            "Will it still make sense in 6 months?",
          ].map((q, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-primary font-mono text-sm">Q{i + 1}</span>
              <p className="text-sm text-foreground">{q}</p>
            </div>
          ))}
        </div>
      </ComponentSection>
    </StorybookLayout>
  );
}
