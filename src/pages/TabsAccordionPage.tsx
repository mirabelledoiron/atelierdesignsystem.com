import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import DocBlock from "@/components/DocBlock";
import CodeBlock from "@/components/CodeBlock";
import InstallBlock from "@/components/InstallBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export default function TabsPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Tabs & Accordion" subtitle="Organize content into collapsible sections." />

      <InstallBlock
        install={`npx shadcn-ui@latest add tabs\nnpx shadcn-ui@latest add accordion`}
        importCode={`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"\nimport { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"`}
        usage={`<Tabs defaultValue="tab1">\n  <TabsList>\n    <TabsTrigger value="tab1">Tab 1</TabsTrigger>\n  </TabsList>\n  <TabsContent value="tab1">Content</TabsContent>\n</Tabs>`}
      />

      <DocBlock
        usage="Tabs organize related content into parallel views — users switch without leaving the page. Accordions reveal content progressively to reduce cognitive load. Use tabs for peer-level content, accordions for FAQ or hierarchical data."
        doItems={[
          "Limit tabs to 3–5 items for scanability",
          "Use descriptive tab labels — avoid abbreviations",
          "Default-open the first accordion item or the most relevant one",
          "Use 'single' type for FAQs and 'multiple' when users need to compare sections",
        ]}
        dontItems={[
          "Don't use tabs for sequential steps — use a stepper instead",
          "Avoid deeply nested accordions (more than 2 levels)",
          "Don't put critical content inside collapsed accordion items",
        ]}
        apiRows={[
          { prop: "defaultValue", type: "string", desc: "Initially active tab value" },
          { prop: "type", type: '"single" | "multiple"', default: '"single"', desc: "Accordion expansion mode" },
          { prop: "collapsible", type: "boolean", default: "false", desc: "Allow all accordion items to be closed" },
        ]}
      />

      <ComponentSection title="Tabs" description="Switch between views within the same context.">
        <Tabs defaultValue="overview" className="max-w-md">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4 text-sm text-muted-foreground">
            A high-level summary of your project metrics and recent activity.
          </TabsContent>
          <TabsContent value="analytics" className="mt-4 text-sm text-muted-foreground">
            Charts and graphs showing usage patterns over time.
          </TabsContent>
          <TabsContent value="settings" className="mt-4 text-sm text-muted-foreground">
            Configure your project preferences and integrations.
          </TabsContent>
        </Tabs>
      </ComponentSection>

      <ComponentSection title="Accordion" description="Expandable content sections for progressive disclosure.">
        <Accordion type="single" collapsible className="max-w-md">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is a design system?</AccordionTrigger>
            <AccordionContent>
              A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Why use design tokens?</AccordionTrigger>
            <AccordionContent>
              Design tokens store design decisions—colors, spacing, typography—as platform-agnostic variables, ensuring consistency across products.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How do I customize components?</AccordionTrigger>
            <AccordionContent>
              Override CSS variables in your design system or create component variants using CVA (Class Variance Authority).
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ComponentSection>

      <ComponentSection title="Code Example">
        <CodeBlock>{`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Content here</TabsContent>
  <TabsContent value="settings">Settings content</TabsContent>
</Tabs>`}</CodeBlock>
      </ComponentSection>
    </StorybookLayout>
  );
}
