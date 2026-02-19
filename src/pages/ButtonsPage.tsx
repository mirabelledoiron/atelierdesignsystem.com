import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import DocBlock from "@/components/DocBlock";
import CodeBlock from "@/components/CodeBlock";
import InstallBlock from "@/components/InstallBlock";
import { Button } from "@/components/ui/button";
import { Download, Plus, Loader2, ArrowRight, Trash2 } from "lucide-react";

export default function ButtonsPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Buttons" subtitle="Clickable actions in every variant, size, and state." />

      <InstallBlock
        install="npx shadcn-ui@latest add button"
        importCode={`import { Button } from "@/components/ui/button"`}
        usage={`<Button variant="default">Click me</Button>`}
      />

      <DocBlock
        usage="Use buttons to trigger actions or navigate between pages. Choose variants based on visual hierarchy — primary for the most important action, outline or ghost for secondary actions."
        doItems={[
          "Use one primary button per section to establish a clear CTA",
          "Include an icon when it clarifies the action (e.g., Download, Delete)",
          "Use the disabled state to prevent invalid submissions",
          "Pair destructive buttons with a confirmation dialog",
        ]}
        dontItems={[
          "Avoid multiple primary buttons competing for attention",
          "Don't use link variant for actions — reserve it for navigation",
          "Never hide loading state; always show a spinner on async actions",
          "Don't use color alone to convey meaning — pair with text or icons",
        ]}
        apiRows={[
          { prop: "variant", type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"', default: '"default"', desc: "Visual style of the button" },
          { prop: "size", type: '"default" | "sm" | "lg" | "icon"', default: '"default"', desc: "Controls padding and font size" },
          { prop: "disabled", type: "boolean", default: "false", desc: "Prevents interaction and dims appearance" },
          { prop: "asChild", type: "boolean", default: "false", desc: "Merges props onto child element instead of rendering a <button>" },
        ]}
      />

      <ComponentSection title="Primary & Outline" description="Core button styles from the Atelier system.">
        <div className="flex flex-wrap gap-3">
          <Button>Primary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button size="sm">Small Button</Button>
        </div>
      </ComponentSection>

      <ComponentSection title="All Variants">
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </ComponentSection>

      <ComponentSection title="Sizes">
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon"><Plus className="w-4 h-4" /></Button>
        </div>
      </ComponentSection>

      <ComponentSection title="With Icons">
        <div className="flex flex-wrap gap-3">
          <Button><Download className="w-4 h-4 mr-2" />Download</Button>
          <Button variant="secondary"><Plus className="w-4 h-4 mr-2" />Create</Button>
          <Button variant="destructive"><Trash2 className="w-4 h-4 mr-2" />Delete</Button>
          <Button variant="outline">Next <ArrowRight className="w-4 h-4 ml-2" /></Button>
        </div>
      </ComponentSection>

      <ComponentSection title="States">
        <div className="flex flex-wrap gap-3">
          <Button disabled>Disabled</Button>
          <Button disabled><Loader2 className="w-4 h-4 mr-2 animate-spin" />Loading</Button>
        </div>
      </ComponentSection>

      <ComponentSection title="Code Example">
        <CodeBlock>{`import { Button } from "@/components/ui/button"

// Primary action
<Button>Save Changes</Button>

// With icon
<Button variant="destructive">
  <Trash2 className="w-4 h-4 mr-2" />
  Delete
</Button>

// Loading state
<Button disabled>
  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
  Saving...
</Button>`}</CodeBlock>
      </ComponentSection>
    </StorybookLayout>
  );
}
