import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import DocBlock from "@/components/DocBlock";

function Kbd({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <kbd className={`inline-flex items-center justify-center rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-xs text-foreground shadow-sm ${className || ""}`}>
      {children}
    </kbd>
  );
}

export default function KbdPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Kbd" subtitle="Keyboard key indicators for documenting shortcuts and key bindings." />

      <DocBlock
        usage="Use Kbd to display keyboard keys and shortcuts in documentation, help text, or tooltips. Renders with a key-cap style appearance."
        doItems={["Use for documenting keyboard shortcuts", "Combine with + separators for multi-key combos", "Use within running text for inline references"]}
        dontItems={["Don't use for non-keyboard UI elements", "Avoid long key sequences — abbreviate or simplify"]}
        apiRows={[
          { prop: "children", type: "ReactNode", desc: "Key label text (e.g., 'Ctrl', '⌘', 'Enter')" },
          { prop: "className", type: "string", desc: "Additional CSS classes for customization" },
        ]}
      />

      <ComponentSection title="Single Keys" description="Individual keyboard key styling.">
        <div className="flex flex-wrap gap-2">
          <Kbd>Esc</Kbd>
          <Kbd>Tab</Kbd>
          <Kbd>Enter</Kbd>
          <Kbd>Space</Kbd>
          <Kbd>Shift</Kbd>
          <Kbd>Ctrl</Kbd>
          <Kbd>Alt</Kbd>
          <Kbd>⌘</Kbd>
          <Kbd>↑</Kbd>
          <Kbd>↓</Kbd>
          <Kbd>←</Kbd>
          <Kbd>→</Kbd>
        </div>
      </ComponentSection>

      <ComponentSection title="Keyboard Shortcuts" description="Common shortcut combinations.">
        <div className="space-y-3 max-w-sm">
          {[
            { keys: ["⌘", "K"], action: "Command palette" },
            { keys: ["⌘", "S"], action: "Save" },
            { keys: ["⌘", "Z"], action: "Undo" },
            { keys: ["⌘", "Shift", "Z"], action: "Redo" },
            { keys: ["Ctrl", "C"], action: "Copy" },
            { keys: ["Ctrl", "V"], action: "Paste" },
            { keys: ["Alt", "Tab"], action: "Switch window" },
          ].map((shortcut, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-sm text-foreground">{shortcut.action}</span>
              <div className="flex items-center gap-1">
                {shortcut.keys.map((key, j) => (
                  <span key={j} className="contents">
                    <Kbd>{key}</Kbd>
                    {j < shortcut.keys.length - 1 && <span className="text-xs text-muted-foreground">+</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="Inline Usage" description="Kbd within running text.">
        <p className="text-sm text-foreground max-w-md leading-relaxed">
          Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open the command palette, or hit <Kbd>Esc</Kbd> to close it. 
          Use <Kbd>↑</Kbd> and <Kbd>↓</Kbd> to navigate, then press <Kbd>Enter</Kbd> to confirm.
        </p>
      </ComponentSection>
    </StorybookLayout>
  );
}
