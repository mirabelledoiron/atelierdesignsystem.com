import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import DocBlock from "@/components/DocBlock";
import CodeBlock from "@/components/CodeBlock";
import InstallBlock from "@/components/InstallBlock";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function InputsPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Inputs" subtitle="Form controls for capturing user data." />

      <InstallBlock
        install={`npx shadcn-ui@latest add input\nnpx shadcn-ui@latest add label\nnpx shadcn-ui@latest add textarea\nnpx shadcn-ui@latest add select\nnpx shadcn-ui@latest add checkbox`}
        importCode={`import { Input } from "@/components/ui/input"\nimport { Label } from "@/components/ui/label"\nimport { Textarea } from "@/components/ui/textarea"`}
        usage={`<div className="space-y-2">\n  <Label htmlFor="email">Email</Label>\n  <Input id="email" type="email" placeholder="you@example.com" />\n</div>`}
      />

      <DocBlock
        usage="Use input components in forms to collect user data. Always pair inputs with labels for accessibility. Group related fields and provide clear validation feedback."
        doItems={[
          "Always associate a <Label> with every input via htmlFor",
          "Use placeholder text as a hint, not a replacement for labels",
          "Show validation errors inline below the input",
          "Disable inputs only when the user understands why",
        ]}
        dontItems={[
          "Never use placeholder as the only label — it disappears on focus",
          "Don't disable without explaining the reason nearby",
          "Avoid auto-focusing inputs on page load unless it's a search or login form",
        ]}
        apiRows={[
          { prop: "type", type: "string", default: '"text"', desc: "HTML input type (email, password, number, etc.)" },
          { prop: "placeholder", type: "string", desc: "Hint text shown when empty" },
          { prop: "disabled", type: "boolean", default: "false", desc: "Prevents interaction" },
          { prop: "id", type: "string", desc: "Links to Label via htmlFor for accessibility" },
        ]}
      />

      <ComponentSection title="Text Input" description="Standard text inputs with labels.">
        <div className="grid gap-4 max-w-sm">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="disabled">Disabled</Label>
            <Input id="disabled" disabled placeholder="Can't touch this" />
          </div>
        </div>
      </ComponentSection>

      <ComponentSection title="Textarea" description="Multi-line text input for longer content.">
        <div className="max-w-sm space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="Tell us about yourself..." rows={4} />
        </div>
      </ComponentSection>

      <ComponentSection title="Select" description="Dropdown selection from predefined options.">
        <div className="max-w-sm space-y-2">
          <Label>Role</Label>
          <Select>
            <SelectTrigger><SelectValue placeholder="Select a role" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="editor">Editor</SelectItem>
              <SelectItem value="viewer">Viewer</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </ComponentSection>

      <ComponentSection title="Checkbox" description="Binary selection with a label.">
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="text-sm">Accept terms and conditions</Label>
        </div>
      </ComponentSection>

      <ComponentSection title="Code Example">
        <CodeBlock>{`import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>`}</CodeBlock>
      </ComponentSection>
    </StorybookLayout>
  );
}
