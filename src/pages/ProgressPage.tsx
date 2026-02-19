import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import InstallBlock from "@/components/InstallBlock";
import DocBlock from "@/components/DocBlock";
import { Progress } from "@/components/ui/progress";

export default function ProgressPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Progress" subtitle="Linear progress indicators for loading states, file uploads, and multi-step processes." />

      <InstallBlock
        install="npx shadcn-ui@latest add progress"
        importCode={`import { Progress } from "@/components/ui/progress";`}
        usage={`<Progress value={60} />`}
      />

      <DocBlock
        usage="Use Progress to communicate completion status for uploads, loading, or multi-step processes. Prefer determinate bars with a percentage when possible."
        doItems={["Show a percentage or label alongside the bar", "Use indeterminate spinners only when progress can't be measured", "Pair with descriptive text for context"]}
        dontItems={["Don't use progress bars for instant operations", "Avoid stacking multiple progress bars without clear labels"]}
        apiRows={[
          { prop: "value", type: "number", default: "0", desc: "Current progress value (0–100)" },
          { prop: "max", type: "number", default: "100", desc: "Maximum progress value" },
        ]}
      />

      <ComponentSection title="Progress Values" description="Different completion states.">
        <div className="space-y-6 max-w-md">
          {[0, 25, 50, 75, 100].map((v) => (
            <div key={v} className="space-y-1.5">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{v}%</span>
              </div>
              <Progress value={v} />
            </div>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="With Label" description="Progress bar with descriptive label and percentage.">
        <div className="space-y-2 max-w-md">
          <div className="flex justify-between text-sm">
            <span className="text-foreground font-medium">Uploading files...</span>
            <span className="text-muted-foreground">67%</span>
          </div>
          <Progress value={67} />
          <p className="text-xs text-muted-foreground">12 of 18 files uploaded</p>
        </div>
      </ComponentSection>

      <ComponentSection title="Spinner" description="Indeterminate loading indicator using CSS animation.">
        <div className="flex items-center gap-6">
          <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
          <div className="w-10 h-10 border-3 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      </ComponentSection>

      <ComponentSection title="Steps" description="Multi-step progress indicator.">
        <div className="flex items-center gap-2 max-w-md">
          {["Details", "Payment", "Review", "Complete"].map((step, i) => (
            <div key={step} className="flex items-center gap-2 flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                i < 2 ? "bg-primary text-primary-foreground" : i === 2 ? "border-2 border-primary text-primary" : "border border-border text-muted-foreground"
              }`}>
                {i + 1}
              </div>
              {i < 3 && <div className={`flex-1 h-0.5 ${i < 2 ? "bg-primary" : "bg-border"}`} />}
            </div>
          ))}
        </div>
        <div className="flex justify-between max-w-md mt-2">
          {["Details", "Payment", "Review", "Complete"].map((step) => (
            <span key={step} className="text-xs text-muted-foreground">{step}</span>
          ))}
        </div>
      </ComponentSection>
    </StorybookLayout>
  );
}
