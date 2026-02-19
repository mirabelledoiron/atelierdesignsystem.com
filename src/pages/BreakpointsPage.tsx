import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import CodeBlock from "@/components/CodeBlock";

const breakpoints = [
  { name: "sm", min: "640px", desc: "Large phones, landscape", cols: "1-2" },
  { name: "md", min: "768px", desc: "Tablets", cols: "2-3" },
  { name: "lg", min: "1024px", desc: "Small laptops", cols: "3-4" },
  { name: "xl", min: "1280px", desc: "Desktops", cols: "4-6" },
  { name: "2xl", min: "1536px", desc: "Large screens", cols: "4-6" },
];

export default function BreakpointsPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Breakpoints" subtitle="Responsive breakpoints for mobile-first design. All breakpoints use min-width media queries." />

      <ComponentSection title="Breakpoint Scale" description="Tailwind default breakpoints used in this system.">
        <div className="space-y-3">
          {breakpoints.map((bp) => (
            <div key={bp.name} className="flex items-center gap-4">
              <code className="font-mono text-sm text-primary bg-muted px-2 py-1 rounded w-12 text-center font-medium">{bp.name}</code>
              <code className="font-mono text-xs text-foreground w-16">{bp.min}</code>
              <div className="flex-1 h-4 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary/20 rounded-full" style={{ width: `${(parseInt(bp.min) / 1536) * 100}%` }} />
              </div>
              <span className="text-xs text-muted-foreground w-32">{bp.desc}</span>
              <span className="text-xs font-mono text-muted-foreground">{bp.cols} cols</span>
            </div>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="Container" description="Max-width container centered with padding.">
        <CodeBlock>{`/* tailwind.config.ts */
container: {
  center: true,
  padding: "2rem",
  screens: {
    "2xl": "1400px",  // Max container width
  },
}`}</CodeBlock>
      </ComponentSection>

      <ComponentSection title="Responsive Patterns" description="">
        <CodeBlock>{`<!-- Mobile-first grid -->
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

<!-- Responsive typography -->
<h1 className="text-2xl sm:text-3xl lg:text-5xl">

<!-- Show/hide at breakpoints -->
<nav className="hidden md:flex">Desktop nav</nav>
<nav className="flex md:hidden">Mobile nav</nav>

<!-- Responsive spacing -->
<section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">`}</CodeBlock>
      </ComponentSection>
    </StorybookLayout>
  );
}
