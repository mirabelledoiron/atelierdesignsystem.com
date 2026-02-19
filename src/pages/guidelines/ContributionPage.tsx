import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import CodeBlock from "@/components/CodeBlock";

export default function ContributionPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Contributing" subtitle="How to propose, build, and document new components for the Atelier design system." />

      <ComponentSection title="Component Proposal Process" description="Before building, propose the component.">
        <div className="space-y-4">
          {[
            { step: "1", title: "Identify the Need", desc: "Document the use case. Is this solving a recurring problem? Is there an existing component that could be extended instead?" },
            { step: "2", title: "Research Patterns", desc: "Look at how other design systems handle it. Check Radix, shadcn/ui, and Material for prior art." },
            { step: "3", title: "Draft the API", desc: "Define props, variants, and sizes. Keep the API surface minimal — you can always add, but removing is a breaking change." },
            { step: "4", title: "Build & Document", desc: "Create the component with all variants, states, and accessibility support. Add a Storybook page with install, import, usage, and API reference." },
            { step: "5", title: "Review & Merge", desc: "Get design and engineering review. Ensure WCAG compliance, responsive behavior, and dark mode support." },
          ].map((s) => (
            <div key={s.step} className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-primary">{s.step}</span>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">{s.title}</h4>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="File Structure" description="Every component follows this structure.">
        <CodeBlock>{`src/
├── components/
│   └── ui/
│       └── my-component.tsx    # Component implementation
├── pages/
│   └── MyComponentPage.tsx     # Storybook documentation page
└── App.tsx                     # Route registration`}</CodeBlock>
      </ComponentSection>

      <ComponentSection title="Component Checklist" description="Before submitting, ensure:">
        <div className="space-y-2">
          {[
            "TypeScript types for all props",
            "Supports className override via cn()",
            "Uses semantic design tokens (no hardcoded colors)",
            "Keyboard navigable",
            "ARIA attributes where needed",
            "Works in both light and dark mode",
            "Responsive at all breakpoints",
            "Documentation page with install, import, usage, and API table",
            "Do's and don'ts documented",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <div className="w-4 h-4 rounded border border-border flex items-center justify-center">
                <span className="text-[10px] text-muted-foreground">{i + 1}</span>
              </div>
              <span className="text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="Naming Conventions" description="">
        <div className="space-y-2 text-sm">
          {[
            ["Files", "kebab-case.tsx (e.g., hover-card.tsx)"],
            ["Components", "PascalCase (e.g., HoverCard)"],
            ["Props", "camelCase (e.g., isOpen, onClose)"],
            ["CSS Variables", "kebab-case (e.g., --brand-primary)"],
            ["Tailwind tokens", "kebab-case (e.g., bg-primary)"],
          ].map(([label, value]) => (
            <div key={label as string} className="flex gap-4">
              <span className="font-medium text-foreground w-28">{label}</span>
              <code className="font-mono text-xs text-muted-foreground">{value}</code>
            </div>
          ))}
        </div>
      </ComponentSection>
    </StorybookLayout>
  );
}
