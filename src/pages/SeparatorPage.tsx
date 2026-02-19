import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import InstallBlock from "@/components/InstallBlock";
import DocBlock from "@/components/DocBlock";
import { Separator } from "@/components/ui/separator";

export default function SeparatorPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Separator" subtitle="Visual divider between sections of content. Horizontal or vertical." />

      <InstallBlock
        install="npx shadcn-ui@latest add separator"
        importCode={`import { Separator } from "@/components/ui/separator";`}
        usage={`<Separator />
<Separator orientation="vertical" />`}
      />

      <DocBlock
        usage="Use Separator to visually divide content sections. Helps create clear groupings without adding extra spacing or borders."
        doItems={["Use horizontal separators between content blocks", "Use vertical separators between inline elements", "Consider using with a centered label for 'OR' patterns"]}
        dontItems={["Don't overuse — whitespace alone is often enough", "Don't use as a decorative element without semantic meaning"]}
        apiRows={[
          { prop: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', desc: "Direction of the separator line" },
          { prop: "decorative", type: "boolean", default: "false", desc: "When true, hides from assistive technology" },
        ]}
      />

      <ComponentSection title="Horizontal" description="Default horizontal separator.">
        <div className="space-y-4 max-w-md">
          <div>
            <h4 className="text-sm font-medium text-foreground">Section A</h4>
            <p className="text-xs text-muted-foreground">Content for section A.</p>
          </div>
          <Separator />
          <div>
            <h4 className="text-sm font-medium text-foreground">Section B</h4>
            <p className="text-xs text-muted-foreground">Content for section B.</p>
          </div>
          <Separator />
          <div>
            <h4 className="text-sm font-medium text-foreground">Section C</h4>
            <p className="text-xs text-muted-foreground">Content for section C.</p>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection title="Vertical" description="Vertical separator between inline elements.">
        <div className="flex h-8 items-center space-x-4">
          <span className="text-sm text-foreground">Blog</span>
          <Separator orientation="vertical" />
          <span className="text-sm text-foreground">Docs</span>
          <Separator orientation="vertical" />
          <span className="text-sm text-foreground">Source</span>
        </div>
      </ComponentSection>

      <ComponentSection title="With Label" description="Separator with centered text label.">
        <div className="max-w-md">
          <div className="relative">
            <Separator />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-3 text-xs text-muted-foreground">
              OR
            </span>
          </div>
        </div>
      </ComponentSection>
    </StorybookLayout>
  );
}
