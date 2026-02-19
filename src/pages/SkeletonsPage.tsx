import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import DocBlock from "@/components/DocBlock";
import CodeBlock from "@/components/CodeBlock";
import InstallBlock from "@/components/InstallBlock";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonsPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Skeletons" subtitle="Placeholder loading states for content." />

      <InstallBlock
        install="npx shadcn-ui@latest add skeleton"
        importCode={`import { Skeleton } from "@/components/ui/skeleton"`}
        usage={`<Skeleton className="h-4 w-48" />`}
      />

      <DocBlock
        usage="Skeletons provide a low-fidelity preview of content while it loads. They reduce perceived load time and prevent layout shift. Mirror the shape and size of the actual content being loaded."
        doItems={[
          "Match skeleton shapes to the content they replace (circles for avatars, rectangles for text)",
          "Use consistent border-radius matching the design system (rounded-lg, rounded-full)",
          "Place skeletons at the exact dimensions of the expected content to avoid layout shift",
        ]}
        dontItems={[
          "Don't show skeletons for more than 3–5 seconds — consider an error state",
          "Avoid using skeletons for content that loads instantly (< 200ms)",
          "Don't mix skeleton loading with spinner loading in the same view",
        ]}
        apiRows={[
          { prop: "className", type: "string", desc: "Controls shape, size, and border-radius of the skeleton" },
        ]}
      />

      <ComponentSection title="Basic Shapes" description="Common skeleton patterns for avatars and text.">
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
      </ComponentSection>

      <ComponentSection title="Card Skeleton" description="A loading state that mirrors the card component layout.">
        <div className="max-w-sm rounded-xl border border-border p-6 space-y-4">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <div className="flex gap-2 pt-2">
            <Skeleton className="h-9 w-20 rounded-lg" />
            <Skeleton className="h-9 w-20 rounded-lg" />
          </div>
        </div>
      </ComponentSection>

      <ComponentSection title="Code Example">
        <CodeBlock>{`import { Skeleton } from "@/components/ui/skeleton"

// Avatar + text skeleton
<div className="flex items-center gap-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-48" />
    <Skeleton className="h-4 w-32" />
  </div>
</div>`}</CodeBlock>
      </ComponentSection>
    </StorybookLayout>
  );
}
