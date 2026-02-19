import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import DocBlock from "@/components/DocBlock";
import CodeBlock from "@/components/CodeBlock";
import InstallBlock from "@/components/InstallBlock";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Shield, Rocket } from "lucide-react";

export default function CardsPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Cards" subtitle="Reusable card patterns with hover effects and brand styling." />

      <InstallBlock
        install="npx shadcn-ui@latest add card"
        importCode={`import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"`}
        usage={`<Card>\n  <CardHeader><CardTitle>Title</CardTitle></CardHeader>\n  <CardContent>Content here</CardContent>\n</Card>`}
      />

      <DocBlock
        usage="Cards group related information into a single visual unit. Use them for features, products, metrics, or any content that benefits from visual separation. The hover effects provide interactive feedback."
        doItems={[
          "Use consistent card sizes within the same grid",
          "Pair icons with short titles for scannable feature cards",
          "Use the scale hover effect sparingly — one card type per page",
          "Keep card content concise; link to detail pages for more info",
        ]}
        dontItems={[
          "Don't overload cards with too much content or too many actions",
          "Avoid mixing card styles within the same section",
          "Don't use cards for single-line items — use a list instead",
        ]}
        apiRows={[
          { prop: "CardHeader", type: "component", desc: "Container for title, description, and icon" },
          { prop: "CardTitle", type: "component", desc: "Card heading, renders as <h3>" },
          { prop: "CardDescription", type: "component", desc: "Muted supporting text below the title" },
          { prop: "CardContent", type: "component", desc: "Main card body content" },
          { prop: "CardFooter", type: "component", desc: "Bottom section for actions or metadata" },
        ]}
      />

      <ComponentSection title="Feature Card" description="Standard feature card with icon, title, and description. Hover for border highlight.">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: "Fast Performance", desc: "Optimized for speed with lazy loading and code splitting." },
            { icon: Shield, title: "Secure by Default", desc: "Built-in security with authentication and RLS policies." },
            { icon: Rocket, title: "Ship Faster", desc: "Pre-built components that accelerate your development." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="group hover:border-primary/40 hover:scale-105 transition-all cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary-light" />
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </ComponentSection>

      <ComponentSection title="Product Card" description="Scale effect on hover with accent icon container.">
        <div className="grid sm:grid-cols-2 gap-6 max-w-lg">
          {["Analytics Pro", "Cloud Engine"].map((title) => (
            <Card key={title} className="group hover:scale-105 hover:border-secondary/40 transition-all cursor-pointer">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-secondary/15 flex items-center justify-center mb-3">
                  <Rocket className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-lg">{title}</CardTitle>
                <CardDescription>Enterprise-ready solution for modern teams.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button size="sm" variant="outline">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="Success Metric Card" description="Card displaying a key success metric with teal highlight.">
        <Card className="max-w-xs">
          <CardHeader className="pb-2">
            <CardDescription>Efficiency Increase</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-secondary">40%</p>
            <p className="text-sm text-muted-foreground mt-1">Average improvement across all users</p>
          </CardContent>
        </Card>
      </ComponentSection>

      <ComponentSection title="Icon Containers" description="Standard icon container sizes used inside cards.">
        <div className="flex items-end gap-6">
          <div className="text-center">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
              <Zap className="w-6 h-6 text-primary-light" />
            </div>
            <span className="text-xs font-mono text-muted-foreground">Small (48px)</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-2">
              <Zap className="w-8 h-8 text-primary-light" />
            </div>
            <span className="text-xs font-mono text-muted-foreground">Large (64px)</span>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection title="Code Example">
        <CodeBlock>{`import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

<Card className="hover:border-primary/40 hover:scale-105 transition-all">
  <CardHeader>
    <CardTitle>Feature Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">Description text.</p>
  </CardContent>
</Card>`}</CodeBlock>
      </ComponentSection>
    </StorybookLayout>
  );
}
