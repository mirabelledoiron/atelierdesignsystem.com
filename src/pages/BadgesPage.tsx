import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import DocBlock from "@/components/DocBlock";
import CodeBlock from "@/components/CodeBlock";
import InstallBlock from "@/components/InstallBlock";
import { Badge } from "@/components/ui/badge";

export default function BadgesPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Badges" subtitle="Small status indicators and labels." />

      <InstallBlock
        install="npx shadcn-ui@latest add badge"
        importCode={`import { Badge } from "@/components/ui/badge"`}
        usage={`<Badge variant="default">Label</Badge>`}
      />

      <DocBlock
        usage="Use badges to label, categorize, or indicate status. They work best alongside other content — in tables, cards, or list items — to provide at-a-glance context."
        doItems={[
          "Use semantic color coding consistently (green = active, red = error, yellow = pending)",
          "Keep badge text short — ideally one or two words",
          "Use outline badges for neutral metadata like version numbers",
        ]}
        dontItems={[
          "Don't use badges as buttons — they are not interactive",
          "Avoid stacking more than 3 badges in a row to prevent visual noise",
          "Don't rely on color alone; the text should be meaningful on its own",
        ]}
        apiRows={[
          { prop: "variant", type: '"default" | "secondary" | "destructive" | "outline"', default: '"default"', desc: "Controls the visual style" },
          { prop: "className", type: "string", desc: "Override or extend styles for semantic status colors" },
        ]}
      />

      <ComponentSection title="Variants">
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </ComponentSection>

      <ComponentSection title="Semantic Status" description="Colored badges for status indication using brand tokens.">
        <div className="flex flex-wrap gap-3">
          <Badge className="bg-secondary/15 text-secondary border-secondary/20">Active</Badge>
          <Badge className="bg-warning/15 text-warning border-warning/20">Pending</Badge>
          <Badge className="bg-destructive/15 text-destructive border-destructive/20">Error</Badge>
          <Badge className="bg-primary/15 text-primary border-primary/20">Featured</Badge>
          <Badge variant="outline" className="font-mono text-xs">v2.0</Badge>
        </div>
      </ComponentSection>

      <ComponentSection title="Code Example">
        <CodeBlock>{`import { Badge } from "@/components/ui/badge"

// Standard variants
<Badge>Default</Badge>
<Badge variant="outline">v2.0</Badge>

// Semantic status using token colors
<Badge className="bg-secondary/15 text-secondary border-secondary/20">
  Active
</Badge>`}</CodeBlock>
      </ComponentSection>
    </StorybookLayout>
  );
}
