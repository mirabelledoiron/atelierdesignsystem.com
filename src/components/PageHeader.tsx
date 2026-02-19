interface Props {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <div className="mb-10">
      <h1 className="text-primary text-3xl font-bold tracking-tight">{title}</h1>
      <p className="mt-2 text-muted-foreground">{subtitle}</p>
      <div className="mt-4 h-px bg-border" />
    </div>
  );
}
