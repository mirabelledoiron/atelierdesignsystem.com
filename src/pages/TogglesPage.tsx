import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import DocBlock from "@/components/DocBlock";
import CodeBlock from "@/components/CodeBlock";
import InstallBlock from "@/components/InstallBlock";
import { Switch } from "@/components/ui/switch";
import { Toggle } from "@/components/ui/toggle";
import { Label } from "@/components/ui/label";
import { Bold, Italic, Underline } from "lucide-react";

export default function TogglesPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Toggle & Switch" subtitle="Binary controls for on/off states." />

      <InstallBlock
        install={`npx shadcn-ui@latest add switch\nnpx shadcn-ui@latest add toggle`}
        importCode={`import { Switch } from "@/components/ui/switch"\nimport { Toggle } from "@/components/ui/toggle"`}
        usage={`<Switch id="setting" onCheckedChange={(v) => console.log(v)} />`}
      />

      <DocBlock
        usage="Switches control boolean settings that take effect immediately. Toggles represent pressed/unpressed states for formatting or mode selection. Use switches for preferences and toggles for toolbar-style controls."
        doItems={[
          "Apply switch changes immediately without a separate save action",
          "Always pair with a label describing what the switch controls",
          "Group related toggles (Bold, Italic, Underline) in a horizontal row",
        ]}
        dontItems={[
          "Don't use switches for actions that need confirmation — use a button",
          "Avoid using toggles for navigation — use tabs instead",
          "Don't disable without a tooltip or nearby explanation",
        ]}
        apiRows={[
          { prop: "checked", type: "boolean", desc: "Controlled on/off state (Switch)" },
          { prop: "defaultChecked", type: "boolean", default: "false", desc: "Initial state for uncontrolled usage" },
          { prop: "onCheckedChange", type: "(checked: boolean) => void", desc: "Callback when value changes" },
          { prop: "disabled", type: "boolean", default: "false", desc: "Prevents interaction" },
          { prop: "pressed", type: "boolean", desc: "Controlled pressed state (Toggle)" },
        ]}
      />

      <ComponentSection title="Switch" description="Toggle a boolean setting with immediate effect.">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Switch id="notifications" />
            <Label htmlFor="notifications">Enable notifications</Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch id="darkmode" defaultChecked />
            <Label htmlFor="darkmode">Dark mode</Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch id="disabled" disabled />
            <Label htmlFor="disabled" className="text-muted-foreground">Disabled</Label>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection title="Toggle" description="Pressed state buttons for toolbar-style controls.">
        <div className="flex gap-2">
          <Toggle aria-label="Bold"><Bold className="w-4 h-4" /></Toggle>
          <Toggle aria-label="Italic"><Italic className="w-4 h-4" /></Toggle>
          <Toggle aria-label="Underline"><Underline className="w-4 h-4" /></Toggle>
        </div>
      </ComponentSection>

      <ComponentSection title="Code Example">
        <CodeBlock>{`import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

<div className="flex items-center gap-3">
  <Switch id="notifications" onCheckedChange={(v) => console.log(v)} />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>`}</CodeBlock>
      </ComponentSection>
    </StorybookLayout>
  );
}
