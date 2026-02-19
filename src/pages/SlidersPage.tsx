import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import DocBlock from "@/components/DocBlock";
import CodeBlock from "@/components/CodeBlock";
import InstallBlock from "@/components/InstallBlock";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";

export default function SlidersPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Sliders & Progress" subtitle="Range inputs and progress indicators." />

      <InstallBlock
        install={`npx shadcn-ui@latest add slider\nnpx shadcn-ui@latest add progress`}
        importCode={`import { Slider } from "@/components/ui/slider"\nimport { Progress } from "@/components/ui/progress"`}
        usage={`<Slider defaultValue={[50]} max={100} step={1} />\n<Progress value={60} />`}
      />

      <DocBlock
        usage="Sliders let users select a value or range within defined bounds. Progress bars communicate completion status. Use sliders for settings like volume or price ranges; progress bars for uploads, loading, or multi-step flows."
        doItems={[
          "Label the slider's purpose clearly (Volume, Price, etc.)",
          "Use step values that make sense for the context (e.g., step=5 for price)",
          "Show the current value alongside the slider when precision matters",
          "Use determinate progress bars with a percentage when possible",
        ]}
        dontItems={[
          "Don't use sliders when exact input is needed — use a number input instead",
          "Avoid tiny step values on wide ranges (e.g., step=1 on 0–10000)",
          "Don't animate progress bars indefinitely — show actual progress or use a spinner",
        ]}
        apiRows={[
          { prop: "defaultValue", type: "number[]", desc: "Initial value(s); use two elements for a range" },
          { prop: "max", type: "number", default: "100", desc: "Maximum slider value" },
          { prop: "step", type: "number", default: "1", desc: "Increment between allowed values" },
          { prop: "value", type: "number", default: "0", desc: "Current progress (0–100) for Progress component" },
        ]}
      />

      <ComponentSection title="Slider" description="Select a value within a range.">
        <div className="space-y-6 max-w-sm">
          <div className="space-y-2">
            <Label>Volume</Label>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
          <div className="space-y-2">
            <Label>Price Range</Label>
            <Slider defaultValue={[25, 75]} max={100} step={5} />
          </div>
        </div>
      </ComponentSection>

      <ComponentSection title="Progress" description="Determinate progress bars showing completion.">
        <div className="space-y-4 max-w-sm">
          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground">25%</Label>
            <Progress value={25} />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground">60%</Label>
            <Progress value={60} />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground">100%</Label>
            <Progress value={100} />
          </div>
        </div>
      </ComponentSection>

      <ComponentSection title="Code Example">
        <CodeBlock>{`import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"

// Single value slider
<Slider defaultValue={[50]} max={100} step={1} />

// Range slider
<Slider defaultValue={[25, 75]} max={100} step={5} />

// Progress bar
<Progress value={60} />`}</CodeBlock>
      </ComponentSection>
    </StorybookLayout>
  );
}
