import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import InstallBlock from "@/components/InstallBlock";
import DocBlock from "@/components/DocBlock";
import {
  Pagination, PaginationContent, PaginationEllipsis, PaginationItem,
  PaginationLink, PaginationNext, PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Pagination" subtitle="Page navigation for browsing through multi-page content." />

      <InstallBlock
        install="npx shadcn-ui@latest add pagination"
        importCode={`import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";`}
        usage={`<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>`}
      />

      <DocBlock
        usage="Use Pagination for navigating through multi-page content like search results, tables, or article lists. Shows page numbers with previous/next controls."
        doItems={["Show total results count alongside pagination", "Highlight the active page", "Use ellipsis for large page ranges"]}
        dontItems={["Don't paginate fewer than 10 items — show them all", "Avoid pagination without a clear sort order"]}
        apiRows={[
          { prop: "PaginationContent", type: "component", desc: "Flex container for pagination items" },
          { prop: "PaginationItem", type: "component", desc: "Wrapper for each pagination element" },
          { prop: "PaginationLink", type: "component", desc: "Clickable page number" },
          { prop: "isActive", type: "boolean", default: "false", desc: "Highlights the current page (on PaginationLink)" },
          { prop: "PaginationPrevious", type: "component", desc: "Previous page navigation" },
          { prop: "PaginationNext", type: "component", desc: "Next page navigation" },
          { prop: "PaginationEllipsis", type: "component", desc: "Indicates skipped pages" },
        ]}
      />

      <ComponentSection title="Default" description="Standard pagination with ellipsis.">
        <Pagination>
          <PaginationContent>
            <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
            <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
            <PaginationItem><PaginationEllipsis /></PaginationItem>
            <PaginationItem><PaginationLink href="#">10</PaginationLink></PaginationItem>
            <PaginationItem><PaginationNext href="#" /></PaginationItem>
          </PaginationContent>
        </Pagination>
      </ComponentSection>

      <ComponentSection title="Compact" description="Fewer visible pages for tight spaces.">
        <Pagination>
          <PaginationContent>
            <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
            <PaginationItem><PaginationLink href="#" isActive>3</PaginationLink></PaginationItem>
            <PaginationItem><PaginationNext href="#" /></PaginationItem>
          </PaginationContent>
        </Pagination>
      </ComponentSection>

      <ComponentSection title="With Summary" description="Page info alongside navigation.">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Showing 21-30 of 97 results</p>
          <Pagination className="w-auto mx-0">
            <PaginationContent>
              <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
              <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#" isActive>3</PaginationLink></PaginationItem>
              <PaginationItem><PaginationEllipsis /></PaginationItem>
              <PaginationItem><PaginationLink href="#">10</PaginationLink></PaginationItem>
              <PaginationItem><PaginationNext href="#" /></PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </ComponentSection>
    </StorybookLayout>
  );
}
