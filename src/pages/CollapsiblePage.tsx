import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import InstallBlock from "@/components/InstallBlock";
import DocBlock from "@/components/DocBlock";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";

export default function CollapsiblePage() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(true);

  return (
    <StorybookLayout>
      <PageHeader title="Collapsible" subtitle="Expandable/collapsible content sections for progressive disclosure." />

      <InstallBlock
        install="npx shadcn-ui@latest add collapsible"
        importCode={`import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";`}
        usage={`<Collapsible>
  <CollapsibleTrigger>Toggle</CollapsibleTrigger>
  <CollapsibleContent>Hidden content</CollapsibleContent>
</Collapsible>`}
      />

      <DocBlock
        usage="Use Collapsible for progressive disclosure — showing secondary content only when the user wants it. Ideal for FAQ sections, advanced settings, or grouped details."
        doItems={["Provide a clear trigger label", "Use defaultOpen for content that's important but not primary", "Keep collapsed content logically grouped"]}
        dontItems={["Don't nest collapsibles more than 2 levels deep", "Don't hide critical information inside collapsed sections"]}
        apiRows={[
          { prop: "open", type: "boolean", desc: "Controlled open/closed state" },
          { prop: "defaultOpen", type: "boolean", default: "false", desc: "Initial open state for uncontrolled usage" },
          { prop: "onOpenChange", type: "(open: boolean) => void", desc: "Callback when open state changes" },
          { prop: "disabled", type: "boolean", default: "false", desc: "Prevents interaction" },
        ]}
      />

      <ComponentSection title="Default" description="Click to expand and collapse content.">
        <Collapsible open={open1} onOpenChange={setOpen1} className="w-full max-w-md space-y-2">
          <div className="flex items-center justify-between rounded-lg border border-border px-4 py-3">
            <h4 className="text-sm font-medium text-foreground">3 items tagged</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <ChevronsUpDown className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border border-border px-4 py-2 text-sm text-foreground">@radix-ui/primitives</div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border border-border px-4 py-2 text-sm text-foreground">@radix-ui/colors</div>
            <div className="rounded-md border border-border px-4 py-2 text-sm text-foreground">@radix-ui/react-icons</div>
          </CollapsibleContent>
        </Collapsible>
      </ComponentSection>

      <ComponentSection title="Initially Open" description="Start in expanded state.">
        <Collapsible open={open2} onOpenChange={setOpen2} className="w-full max-w-md space-y-2">
          <div className="flex items-center justify-between rounded-lg border border-border px-4 py-3">
            <h4 className="text-sm font-medium text-foreground">Advanced Settings</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <ChevronsUpDown className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border border-border bg-muted/50 px-4 py-3 text-sm text-muted-foreground">
              These settings are for advanced users. Changes may affect system behavior.
            </div>
          </CollapsibleContent>
        </Collapsible>
      </ComponentSection>
    </StorybookLayout>
  );
}
