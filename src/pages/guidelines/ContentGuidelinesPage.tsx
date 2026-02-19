import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import DocBlock from "@/components/DocBlock";

export default function ContentGuidelinesPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Content Guidelines" subtitle="Voice, tone, and writing standards for consistent, human-centered copy." />

      <ComponentSection title="Voice & Tone" description="The Atelier voice is clear, confident, and helpful — never robotic or condescending.">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-secondary/30 bg-secondary/5 p-5">
            <h4 className="text-sm font-semibold text-secondary mb-3">We Are</h4>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {["Clear and concise", "Helpful, not hand-holding", "Professional but warm", "Confident without arrogance"].map((item) => (
                <li key={item} className="flex gap-2"><span className="text-secondary">+</span> {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-5">
            <h4 className="text-sm font-semibold text-destructive mb-3">We Avoid</h4>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {["Jargon without context", "Passive voice", "Exclamation marks overuse", "Vague instructions"].map((item) => (
                <li key={item} className="flex gap-2"><span className="text-destructive">-</span> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </ComponentSection>

      <DocBlock
        doItems={[
          "\"Save changes\" — clear action",
          "\"3 items selected\" — precise feedback",
          "\"Enter your email to continue\" — helpful instruction",
          "\"Something went wrong. Try again.\" — honest error",
        ]}
        dontItems={[
          "\"Click here!!!\" — vague and aggressive",
          "\"Oopsie! An error occurred!\" — too casual for errors",
          "\"Please be advised that the operation has concluded\" — verbose",
          "\"Error 0x4F2B\" — meaningless to users",
        ]}
      />

      <ComponentSection title="Button Labels" description="Action-oriented, starting with a verb.">
        <div className="space-y-2 text-sm">
          {[
            ["Save", "For persisting changes"],
            ["Create", "For new items (Create Project)"],
            ["Delete", "For destructive actions (pair with confirmation)"],
            ["Cancel", "For dismissing without action"],
            ["Continue", "For multi-step flows"],
            ["Send", "For messages, invites, emails"],
          ].map(([label, desc]) => (
            <div key={label as string} className="flex gap-4">
              <code className="font-mono text-primary text-xs bg-muted px-2 py-1 rounded w-20 text-center">{label}</code>
              <span className="text-muted-foreground">{desc}</span>
            </div>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="Error Messages" description="Be specific about what went wrong and how to fix it.">
        <div className="space-y-3 max-w-md">
          {[
            { bad: "Invalid input", good: "Email must include @ and a domain (e.g., name@example.com)" },
            { bad: "Error occurred", good: "We couldn't save your changes. Check your connection and try again." },
            { bad: "Forbidden", good: "You don't have permission to edit this project. Contact the owner." },
          ].map((ex, i) => (
            <div key={i} className="rounded-lg border border-border p-3">
              <p className="text-xs text-destructive line-through mb-1">{ex.bad}</p>
              <p className="text-sm text-foreground">{ex.good}</p>
            </div>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="Placeholder Text" description="Provide realistic examples, not generic text.">
        <div className="space-y-2 text-sm">
          {[
            { bad: "Enter text here", good: "e.g., alice@example.com" },
            { bad: "Type something", good: "Search by name or email..." },
            { bad: "Input", good: "San Francisco, CA" },
          ].map((ex, i) => (
            <div key={i} className="flex gap-4 items-center">
              <span className="text-destructive line-through text-xs w-32">{ex.bad}</span>
              <span className="text-foreground text-xs">{ex.good}</span>
            </div>
          ))}
        </div>
      </ComponentSection>
    </StorybookLayout>
  );
}
