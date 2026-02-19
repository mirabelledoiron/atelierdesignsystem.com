import CodeBlock from "@/components/CodeBlock";

interface InstallBlockProps {
  /** npm install command(s) */
  install: string;
  /** import statement(s) */
  importCode: string;
  /** basic usage snippet */
  usage: string;
}

export default function InstallBlock({ install, importCode, usage }: InstallBlockProps) {
  return (
    <div className="space-y-4 mb-12">
      <h3 className="text-sm font-semibold text-foreground">Getting Started</h3>
      <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
        This component uses <span className="font-medium text-foreground">shadcn/ui</span> — a copy-paste system, not an npm package.
        The install command below copies the source code directly into your project at <code className="bg-muted px-1 py-0.5 rounded font-mono">src/components/ui/</code>, giving you full ownership to customize.
      </p>
      <div className="space-y-3">
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-1.5">Install</p>
          <CodeBlock>{install}</CodeBlock>
        </div>
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-1.5">Import</p>
          <CodeBlock>{importCode}</CodeBlock>
        </div>
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-1.5">Usage</p>
          <CodeBlock>{usage}</CodeBlock>
        </div>
      </div>
    </div>
  );
}
