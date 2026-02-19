import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import CodeBlock from "@/components/CodeBlock";
import { useState } from "react";

const durations = [
  { name: "Fast", ms: "150ms", desc: "Micro-interactions: hover, focus, toggle" },
  { name: "Base", ms: "200ms", desc: "Standard transitions: buttons, inputs" },
  { name: "Moderate", ms: "300ms", desc: "Expanding content: accordion, collapsible" },
  { name: "Slow", ms: "500ms", desc: "Page transitions, modals entering" },
];

const easings = [
  { name: "ease-out", css: "cubic-bezier(0, 0, 0.2, 1)", desc: "Elements entering — most common" },
  { name: "ease-in", css: "cubic-bezier(0.4, 0, 1, 1)", desc: "Elements exiting" },
  { name: "ease-in-out", css: "cubic-bezier(0.4, 0, 0.2, 1)", desc: "Elements moving between states" },
  { name: "linear", css: "linear", desc: "Progress bars, spinners" },
];

export default function MotionPage() {
  const [play, setPlay] = useState(false);

  return (
    <StorybookLayout>
      <PageHeader title="Motion & Animation" subtitle="Timing, easing, and animation tokens for consistent, purposeful motion." />

      <ComponentSection title="Duration Scale" description="How long transitions should take.">
        <div className="space-y-3">
          {durations.map((d) => (
            <div key={d.name} className="flex items-center gap-4">
              <span className="w-20 text-sm font-medium text-foreground">{d.name}</span>
              <code className="font-mono text-xs text-primary bg-muted px-2 py-1 rounded w-16 text-center">{d.ms}</code>
              <span className="text-xs text-muted-foreground">{d.desc}</span>
            </div>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="Easing Curves" description="Which easing function to use for each type of motion.">
        <div className="space-y-3">
          {easings.map((e) => (
            <div key={e.name} className="flex items-center gap-4">
              <span className="w-24 text-sm font-medium text-foreground">{e.name}</span>
              <code className="font-mono text-xs text-muted-foreground">{e.css}</code>
              <span className="text-xs text-muted-foreground ml-auto">{e.desc}</span>
            </div>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="Live Demo" description="Click to see transition timing in action.">
        <button
          onClick={() => { setPlay(true); setTimeout(() => setPlay(false), 1000); }}
          className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm mb-4"
        >
          Play Animation
        </button>
        <div className="space-y-3">
          {["150ms", "200ms", "300ms", "500ms"].map((dur) => (
            <div key={dur} className="flex items-center gap-4">
              <span className="text-xs font-mono text-muted-foreground w-12">{dur}</span>
              <div className="flex-1 h-8 bg-muted rounded-lg relative overflow-hidden">
                <div
                  className="h-full bg-primary/30 rounded-lg absolute left-0 top-0"
                  style={{
                    width: play ? "100%" : "0%",
                    transition: `width ${dur} ease-out`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="Transition Classes" description="">
        <CodeBlock>{`/* Standard transitions */
transition-all duration-200        /* Base */
transition-colors duration-150     /* Color changes */
transition-transform duration-200  /* Scale/translate */
transition-opacity duration-300    /* Fade in/out */

/* Hover scale */
hover:scale-[1.02] transition-transform

/* Accordion animation (from tailwind config) */
animate-accordion-down  /* 0.2s ease-out */
animate-accordion-up    /* 0.2s ease-out */`}</CodeBlock>
      </ComponentSection>
    </StorybookLayout>
  );
}
