import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import CodeBlock from "@/components/CodeBlock";

export default function LayoutPatternsPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Layout Patterns" subtitle="Common page structures, grid systems, and responsive layout templates." />

      <ComponentSection title="Dashboard Layout" description="Sidebar + main content area.">
        <div className="border border-border rounded-xl overflow-hidden h-48">
          <div className="flex h-full">
            <div className="w-48 bg-muted border-r border-border p-3">
              <div className="h-4 w-20 bg-primary/20 rounded mb-3" />
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-3 w-full bg-muted-foreground/10 rounded mb-2" />
              ))}
            </div>
            <div className="flex-1 p-4">
              <div className="h-4 w-40 bg-foreground/10 rounded mb-4" />
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-16 bg-card border border-border rounded-lg" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection title="Auth Layout" description="Centered card for login/signup forms.">
        <div className="border border-border rounded-xl overflow-hidden h-48 flex items-center justify-center bg-muted/50">
          <div className="w-72 bg-card border border-border rounded-xl p-6">
            <div className="h-4 w-24 bg-primary/20 rounded mb-4 mx-auto" />
            <div className="h-3 w-full bg-muted rounded mb-2" />
            <div className="h-3 w-full bg-muted rounded mb-4" />
            <div className="h-8 w-full bg-primary/20 rounded" />
          </div>
        </div>
      </ComponentSection>

      <ComponentSection title="Split View" description="Two-panel layout for master-detail views.">
        <div className="border border-border rounded-xl overflow-hidden h-48">
          <div className="flex h-full">
            <div className="w-1/3 border-r border-border p-3 space-y-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`h-6 rounded-lg px-3 flex items-center ${i === 2 ? "bg-primary/10 border border-primary/30" : "bg-muted/50"}`}>
                  <div className="h-2 w-full bg-muted-foreground/10 rounded" />
                </div>
              ))}
            </div>
            <div className="flex-1 p-4">
              <div className="h-4 w-32 bg-foreground/10 rounded mb-3" />
              <div className="h-3 w-full bg-muted rounded mb-2" />
              <div className="h-3 w-3/4 bg-muted rounded mb-2" />
              <div className="h-3 w-1/2 bg-muted rounded" />
            </div>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection title="Card Grid" description="Responsive grid of content cards.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="border border-border rounded-xl p-4 bg-card">
              <div className="h-20 bg-muted rounded-lg mb-3" />
              <div className="h-3 w-3/4 bg-foreground/10 rounded mb-2" />
              <div className="h-3 w-1/2 bg-muted-foreground/10 rounded" />
            </div>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="Code Reference" description="">
        <CodeBlock>{`<!-- Dashboard: sidebar + content -->
<div className="flex min-h-screen">
  <aside className="w-64 border-r">Sidebar</aside>
  <main className="flex-1 p-8">Content</main>
</div>

<!-- Auth: centered card -->
<div className="min-h-screen flex items-center justify-center">
  <div className="w-full max-w-md">Card</div>
</div>

<!-- Responsive grid -->
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => <Card />)}
</div>`}</CodeBlock>
      </ComponentSection>
    </StorybookLayout>
  );
}
