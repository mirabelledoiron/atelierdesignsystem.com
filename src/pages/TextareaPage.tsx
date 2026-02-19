import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import InstallBlock from "@/components/InstallBlock";
import DocBlock from "@/components/DocBlock";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function TextareaPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Textarea" subtitle="Multi-line text input for longer content like messages, descriptions, and comments." />

      <InstallBlock
        install="npx shadcn-ui@latest add textarea"
        importCode={`import { Textarea } from "@/components/ui/textarea";`}
        usage={`<Textarea placeholder="Type your message..." />`}
      />

      <DocBlock
        usage="Use Textarea for multi-line text input. Prefer Input for single-line values like names or emails."
        doItems={["Set a helpful placeholder", "Use Label for accessibility", "Consider a character count for limited inputs"]}
        dontItems={["Don't use for single-line input", "Don't disable resize unless necessary"]}
        apiRows={[
          { prop: "placeholder", type: "string", desc: "Placeholder text" },
          { prop: "disabled", type: "boolean", default: "false", desc: "Disable the textarea" },
          { prop: "rows", type: "number", default: "3", desc: "Visible row count" },
        ]}
      />

      <ComponentSection title="Default" description="Standard textarea with placeholder.">
        <Textarea placeholder="Type your message here..." />
      </ComponentSection>

      <ComponentSection title="With Label" description="Always pair with a Label for accessibility.">
        <div className="space-y-2 max-w-md">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="Tell us about yourself..." />
          <p className="text-xs text-muted-foreground">Max 500 characters</p>
        </div>
      </ComponentSection>

      <ComponentSection title="Disabled" description="Non-interactive state.">
        <Textarea disabled placeholder="This textarea is disabled" />
      </ComponentSection>

      <ComponentSection title="Sizes" description="Control height with rows prop.">
        <div className="space-y-4 max-w-md">
          <div>
            <Label className="text-xs text-muted-foreground mb-1 block">2 rows</Label>
            <Textarea rows={2} placeholder="Compact..." />
          </div>
          <div>
            <Label className="text-xs text-muted-foreground mb-1 block">6 rows</Label>
            <Textarea rows={6} placeholder="Spacious..." />
          </div>
        </div>
      </ComponentSection>
    </StorybookLayout>
  );
}
