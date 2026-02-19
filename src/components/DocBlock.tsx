interface DocBlockProps {
  usage?: string;
  doItems?: string[];
  dontItems?: string[];
  apiRows?: { prop: string; type: string; default?: string; desc: string }[];
}

export default function DocBlock({ usage, doItems, dontItems, apiRows }: DocBlockProps) {
  return (
    <div className="space-y-6 mb-12">
      {usage && (
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="text-sm font-semibold text-foreground mb-2">When to use</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{usage}</p>
        </div>
      )}

      {(doItems || dontItems) && (
        <div className="grid sm:grid-cols-2 gap-4">
          {doItems && (
            <div className="rounded-xl border border-secondary/30 bg-secondary/5 p-5">
              <h4 className="text-sm font-semibold text-secondary mb-3">✓ Do</h4>
              <ul className="space-y-1.5">
                {doItems.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-secondary mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {dontItems && (
            <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-5">
              <h4 className="text-sm font-semibold text-destructive mb-3">✗ Don't</h4>
              <ul className="space-y-1.5">
                {dontItems.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-destructive mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {apiRows && apiRows.length > 0 && (
        <div className="rounded-xl border border-border bg-card p-6 overflow-x-auto">
          <h3 className="text-sm font-semibold text-foreground mb-3">API Reference</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-2 font-medium text-muted-foreground pr-4">Prop</th>
                <th className="pb-2 font-medium text-muted-foreground pr-4">Type</th>
                <th className="pb-2 font-medium text-muted-foreground pr-4">Default</th>
                <th className="pb-2 font-medium text-muted-foreground">Description</th>
              </tr>
            </thead>
            <tbody>
              {apiRows.map((row) => (
                <tr key={row.prop} className="border-b border-border/50">
                  <td className="py-2 font-mono text-primary text-xs pr-4">{row.prop}</td>
                  <td className="py-2 font-mono text-xs text-foreground pr-4">{row.type}</td>
                  <td className="py-2 font-mono text-xs text-muted-foreground pr-4">{row.default || "—"}</td>
                  <td className="py-2 text-muted-foreground">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
