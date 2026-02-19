import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import InstallBlock from "@/components/InstallBlock";
import DocBlock from "@/components/DocBlock";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Info, HelpCircle } from "lucide-react";

export default function TooltipPopoverPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Tooltip & Popover" subtitle="Floating content triggered by hover (tooltip) or click (popover)." />

      <InstallBlock
        install="npx shadcn-ui@latest add tooltip popover hover-card"
        importCode={`import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";`}
        usage={`<Tooltip>
  <TooltipTrigger>Hover me</TooltipTrigger>
  <TooltipContent>Tooltip text</TooltipContent>
</Tooltip>`}
      />

      <DocBlock
        usage="Tooltips provide brief hints on hover — use for icon buttons and truncated text. Popovers display richer content on click — use for mini-forms, filters, or settings. HoverCards show user/link previews on hover."
        doItems={["Always add tooltips to icon-only buttons", "Use side prop to avoid overlapping content", "Keep tooltip text under 10 words"]}
        dontItems={["Don't put interactive content in tooltips — use Popover instead", "Avoid tooltips on touch-only devices without fallback"]}
        apiRows={[
          { prop: "side", type: '"top" | "right" | "bottom" | "left"', default: '"top"', desc: "Placement direction for tooltip/popover" },
          { prop: "align", type: '"start" | "center" | "end"', default: '"center"', desc: "Alignment along the side axis" },
          { prop: "sideOffset", type: "number", default: "4", desc: "Distance from the trigger in pixels" },
          { prop: "delayDuration", type: "number", default: "200", desc: "Delay before tooltip appears (ms)" },
        ]}
      />

      {/* Tooltips */}
      <ComponentSection title="Tooltip" description="Brief text hint on hover. Use for icon buttons and truncated text.">
        <div className="flex gap-4">
          {(["top", "right", "bottom", "left"] as const).map((side) => (
            <Tooltip key={side}>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">{side}</Button>
              </TooltipTrigger>
              <TooltipContent side={side}>
                <p>Tooltip on {side}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="Icon Button Tooltip" description="Essential for icon-only buttons.">
        <div className="flex gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon"><Info className="w-4 h-4" /></Button>
            </TooltipTrigger>
            <TooltipContent>More information</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon"><HelpCircle className="w-4 h-4" /></Button>
            </TooltipTrigger>
            <TooltipContent>Help & support</TooltipContent>
          </Tooltip>
        </div>
      </ComponentSection>

      {/* Popovers */}
      <ComponentSection title="Popover" description="Rich content on click. Use for settings, filters, or mini-forms.">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium text-sm text-foreground">Dimensions</h4>
                <p className="text-xs text-muted-foreground">Set the dimensions for the layer.</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs text-muted-foreground">Width</label>
                  <input className="w-full rounded-md border border-input bg-background px-3 py-1.5 text-sm" defaultValue="100%" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground">Height</label>
                  <input className="w-full rounded-md border border-input bg-background px-3 py-1.5 text-sm" defaultValue="auto" />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </ComponentSection>

      {/* Hover Card */}
      <ComponentSection title="Hover Card" description="Rich preview on hover. Great for user profiles or link previews.">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link" className="text-primary">@alice_chen</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex gap-4">
              <Avatar>
                <AvatarFallback className="bg-primary/10 text-primary text-xs">AC</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-sm font-semibold text-foreground">Alice Chen</h4>
                <p className="text-xs text-muted-foreground">Senior Engineer at Atelier. Building design systems and component libraries.</p>
                <p className="text-xs text-muted-foreground mt-2">Joined December 2023</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </ComponentSection>
    </StorybookLayout>
  );
}
