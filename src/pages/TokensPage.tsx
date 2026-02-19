import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import CodeBlock from "@/components/CodeBlock";
import { Button } from "@/components/ui/button";
import { Download, FileJson, FileCode, FileText, ExternalLink } from "lucide-react";

const jsonFiles = [
  {
    name: "manifest.json",
    url: "/tokens/manifest.json",
    desc: "System index — links to all token files, tech stack, and version",
  },
  {
    name: "design-tokens.json",
    url: "/tokens/design-tokens.json",
    desc: "Colors, typography, spacing, shadows, radii, motion, z-index, breakpoints",
  },
  {
    name: "components.json",
    url: "/tokens/components.json",
    desc: "All component metadata — names, props, variants, imports, install commands",
  },
  {
    name: "patterns.json",
    url: "/tokens/patterns.json",
    desc: "Pattern guidelines — form, layout, content states, data patterns",
  },
  {
    name: "guidelines.json",
    url: "/tokens/guidelines.json",
    desc: "Accessibility, design principles, content guidelines, contributing rules",
  },
];

const tokensCSS = `:root {
  --background: 220 14% 96%;
  --foreground: 220 25% 12%;
  --primary: 351 80% 50%;
  --primary-foreground: 0 0% 100%;
  --secondary: 176 50% 32%;
  --muted: 220 14% 90%;
  --muted-foreground: 220 12% 35%;
  --border: 220 14% 76%;
  --radius: 0.75rem;
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

.dark {
  --background: 240 28% 14%;
  --foreground: 0 0% 100%;
  --primary: 351 80% 59%;
  --secondary: 176 56% 55%;
  --muted: 218 39% 20%;
  --muted-foreground: 218 11% 65%;
  --border: 255 26% 33%;
}`;

const tokensJS = `export const tokens = {
  colors: {
    primary: "hsl(351 80% 50%)",
    secondary: "hsl(176 50% 32%)",
    background: { light: "hsl(220 14% 96%)", dark: "hsl(240 28% 14%)" },
    foreground: { light: "hsl(220 25% 12%)", dark: "hsl(0 0% 100%)" },
  },
  typography: {
    sans: "Inter, system-ui, sans-serif",
    mono: "JetBrains Mono, monospace",
  },
  spacing: { sm: "4px", md: "8px", lg: "16px", xl: "24px", "2xl": "32px" },
  radius: "0.75rem",
};`;

function downloadFile(content: string, filename: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

async function downloadJsonFile(url: string, filename: string) {
  const res = await fetch(url);
  const text = await res.text();
  downloadFile(text, filename, "application/json");
}

const legacyFiles = [
  {
    name: "tokens.css",
    icon: FileText,
    desc: "CSS custom properties — drop into any project",
    action: () => downloadFile(tokensCSS, "tokens.css", "text/css"),
  },
  {
    name: "tokens.js",
    icon: FileCode,
    desc: "ES module — import directly in JS/TS projects",
    action: () => downloadFile(tokensJS, "tokens.js", "application/javascript"),
  },
];

export default function TokensPage() {
  return (
    <StorybookLayout>
      <PageHeader
        title="Tokens & Manifest"
        subtitle="Machine-readable design system files. Serve as the single source of truth for AI assistants, tooling, and automation."
      />

      <ComponentSection title="System Manifest (JSON)" description="Static JSON files served at /tokens/ — accessible via URL for AI assistants and tooling.">
        <div className="space-y-3">
          {jsonFiles.map((f) => (
            <div key={f.name} className="flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FileJson className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-mono text-sm text-foreground font-medium">{f.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{f.desc}</p>
                <p className="text-[11px] font-mono text-muted-foreground mt-1">{f.url}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <Button variant="ghost" size="sm" asChild>
                  <a href={f.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5 mr-1" /> View
                  </a>
                </Button>
                <Button variant="outline" size="sm" onClick={() => downloadJsonFile(f.url, f.name)}>
                  <Download className="w-3.5 h-3.5 mr-1" /> Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="Quick Export (CSS / JS)" description="Simplified token exports for direct use in projects.">
        <div className="grid sm:grid-cols-2 gap-4">
          {legacyFiles.map((f) => {
            const Icon = f.icon;
            return (
              <button
                key={f.name}
                onClick={f.action}
                className="group flex flex-col items-start gap-3 rounded-xl border border-border bg-card p-5 text-left hover:border-primary/40 hover:scale-[1.02] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-mono text-sm text-foreground font-medium">{f.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{f.desc}</p>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-primary font-medium mt-auto">
                  <Download className="w-3.5 h-3.5" /> Download
                </span>
              </button>
            );
          })}
        </div>
      </ComponentSection>

      <ComponentSection title="tokens.css" description="CSS custom properties preview.">
        <CodeBlock className="max-h-80">{tokensCSS}</CodeBlock>
      </ComponentSection>

      <ComponentSection title="tokens.js" description="ES module export preview.">
        <CodeBlock className="max-h-80">{tokensJS}</CodeBlock>
      </ComponentSection>
    </StorybookLayout>
  );
}
