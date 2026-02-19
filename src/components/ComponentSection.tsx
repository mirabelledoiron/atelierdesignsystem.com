interface Props {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export default function ComponentSection({ title, description, children }: Props) {
  return (
    <section className="mb-12">
      <h2 className="text-lg font-semibold text-foreground mb-1">{title}</h2>
      {description && (
        <p className="text-sm text-muted-foreground mb-5">{description}</p>
      )}
      <div className="rounded-xl border border-border bg-card p-6">{children}</div>
    </section>
  );
}
