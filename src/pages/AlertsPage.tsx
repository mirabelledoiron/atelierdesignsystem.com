import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import DocBlock from "@/components/DocBlock";
import CodeBlock from "@/components/CodeBlock";
import InstallBlock from "@/components/InstallBlock";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { toast as sonnerToast } from "sonner";
import { AlertTriangle, Info, CheckCircle2 } from "lucide-react";

export default function AlertsPage() {
  const { toast } = useToast();

  return (
    <StorybookLayout>
      <PageHeader title="Alerts & Toasts" subtitle="Feedback messages and notifications." />

      <InstallBlock
        install={`npx shadcn-ui@latest add alert\nnpx shadcn-ui@latest add toast\nnpm install sonner`}
        importCode={`import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"\nimport { useToast } from "@/hooks/use-toast"\nimport { toast } from "sonner"`}
        usage={`<Alert>\n  <AlertTitle>Info</AlertTitle>\n  <AlertDescription>Your session will expire soon.</AlertDescription>\n</Alert>`}
      />

      <DocBlock
        usage="Alerts display persistent, inline messages for important information. Toasts show ephemeral, non-blocking notifications after user actions. Choose alerts for contextual warnings; toasts for confirmations and transient feedback."
        doItems={[
          "Use the info variant for neutral guidance",
          "Use destructive alerts for errors that need user attention",
          "Show toasts after successful actions (save, delete, deploy)",
          "Keep toast messages concise — under 10 words",
        ]}
        dontItems={[
          "Don't use toasts for critical errors — they disappear automatically",
          "Avoid stacking multiple alerts in the same section",
          "Don't rely solely on color — pair with an icon and clear text",
        ]}
        apiRows={[
          { prop: "variant", type: '"default" | "destructive"', default: '"default"', desc: "Alert visual style" },
          { prop: "AlertTitle", type: "component", desc: "Bold heading text inside the alert" },
          { prop: "AlertDescription", type: "component", desc: "Supporting body text" },
        ]}
      />

      <ComponentSection title="Inline Alerts" description="Static alert banners for persistent messages.">
        <div className="space-y-3 max-w-lg">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>Your session will expire in 10 minutes.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Something went wrong. Please try again.</AlertDescription>
          </Alert>
        </div>
      </ComponentSection>

      <ComponentSection title="Toasts" description="Ephemeral notifications triggered by actions.">
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            onClick={() =>
              toast({ title: "Saved", description: "Your changes have been saved." })
            }
          >
            Show Toast
          </Button>
          <Button
            variant="outline"
            onClick={() => sonnerToast.success("Deployed successfully!")}
          >
            Sonner Success
          </Button>
          <Button
            variant="outline"
            onClick={() => sonnerToast.error("Deployment failed.")}
          >
            Sonner Error
          </Button>
        </div>
      </ComponentSection>

      <ComponentSection title="Code Example">
        <CodeBlock>{`// Inline alert
<Alert variant="destructive">
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>

// Toast notification
import { useToast } from "@/hooks/use-toast"
const { toast } = useToast()
toast({ title: "Saved", description: "Changes saved." })`}</CodeBlock>
      </ComponentSection>
    </StorybookLayout>
  );
}
