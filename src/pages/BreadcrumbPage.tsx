import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import InstallBlock from "@/components/InstallBlock";
import DocBlock from "@/components/DocBlock";
import {
  Breadcrumb as BreadcrumbRoot, BreadcrumbItem, BreadcrumbLink, BreadcrumbList,
  BreadcrumbPage as BreadcrumbCurrentPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BreadcrumbPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Breadcrumb" subtitle="Wayfinding navigation showing the user's current location in a hierarchy." />

      <InstallBlock
        install="npx shadcn-ui@latest add breadcrumb"
        importCode={`import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";`}
        usage={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
      />

      <DocBlock
        usage="Use Breadcrumb for wayfinding in multi-level navigation hierarchies. Helps users understand where they are and navigate back to parent pages."
        doItems={["Always include Home as the first item", "Mark the current page as non-linked (BreadcrumbPage)", "Keep labels short and consistent"]}
        dontItems={["Don't use for flat navigation structures", "Don't make breadcrumbs the only way to navigate back"]}
        apiRows={[
          { prop: "BreadcrumbList", type: "component", desc: "Ordered list container for breadcrumb items" },
          { prop: "BreadcrumbItem", type: "component", desc: "Individual breadcrumb entry" },
          { prop: "BreadcrumbLink", type: "component", desc: "Clickable link to a parent page" },
          { prop: "BreadcrumbPage", type: "component", desc: "Non-interactive current page indicator" },
          { prop: "BreadcrumbSeparator", type: "component", desc: "Visual separator (default: chevron)" },
        ]}
      />

      <ComponentSection title="Default" description="Standard breadcrumb trail.">
        <BreadcrumbRoot>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbCurrentPage>Breadcrumb</BreadcrumbCurrentPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </BreadcrumbRoot>
      </ComponentSection>

      <ComponentSection title="Deep Nesting" description="Multi-level breadcrumb for deep hierarchies.">
        <BreadcrumbRoot>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/">Dashboard</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="/">Projects</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="/">Atelier</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="/">Settings</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbCurrentPage>General</BreadcrumbCurrentPage></BreadcrumbItem>
          </BreadcrumbList>
        </BreadcrumbRoot>
      </ComponentSection>
    </StorybookLayout>
  );
}
