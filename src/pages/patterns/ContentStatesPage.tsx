import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Inbox, AlertTriangle, CheckCircle, Search, FileX } from "lucide-react";

export default function ContentStatesPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Content States" subtitle="Patterns for empty, loading, error, and success states." />

      <ComponentSection title="Empty State — No Data" description="When a list or page has no content yet.">
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
            <Inbox className="w-6 h-6 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-1">No projects yet</h3>
          <p className="text-sm text-muted-foreground mb-4 max-w-sm">
            Create your first project to get started. You can always come back and add more later.
          </p>
          <Button>Create Project</Button>
        </div>
      </ComponentSection>

      <ComponentSection title="Empty State — No Results" description="When a search or filter returns nothing.">
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
            <Search className="w-6 h-6 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-1">No results found</h3>
          <p className="text-sm text-muted-foreground mb-4 max-w-sm">
            Try adjusting your search or filter criteria to find what you're looking for.
          </p>
          <Button variant="outline">Clear Filters</Button>
        </div>
      </ComponentSection>

      <ComponentSection title="Loading State" description="Skeleton placeholders while data loads.">
        <div className="space-y-4 max-w-md">
          <div className="flex items-center gap-3">
            <Skeleton className="w-10 h-10 rounded-full" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
          <Skeleton className="h-24 w-full rounded-xl" />
          <div className="grid grid-cols-3 gap-3">
            <Skeleton className="h-16 rounded-lg" />
            <Skeleton className="h-16 rounded-lg" />
            <Skeleton className="h-16 rounded-lg" />
          </div>
        </div>
      </ComponentSection>

      <ComponentSection title="Loading Spinner" description="Inline spinner for button or section loading.">
        <div className="flex items-center gap-6">
          <Button disabled>
            <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
            Loading...
          </Button>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
            Fetching data...
          </div>
        </div>
      </ComponentSection>

      <ComponentSection title="Error State" description="When something goes wrong.">
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
            <AlertTriangle className="w-6 h-6 text-destructive" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-1">Something went wrong</h3>
          <p className="text-sm text-muted-foreground mb-4 max-w-sm">
            We couldn't load this page. Please try again or contact support if the problem persists.
          </p>
          <div className="flex gap-3">
            <Button>Try Again</Button>
            <Button variant="outline">Contact Support</Button>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection title="404 State" description="Page not found.">
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
            <FileX className="w-6 h-6 text-muted-foreground" />
          </div>
          <h3 className="text-4xl font-bold text-foreground mb-2">404</h3>
          <p className="text-sm text-muted-foreground mb-4">This page doesn't exist or has been moved.</p>
          <Button variant="outline">Go Home</Button>
        </div>
      </ComponentSection>

      <ComponentSection title="Success State" description="Confirmation after a completed action.">
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
            <CheckCircle className="w-6 h-6 text-secondary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-1">Payment successful</h3>
          <p className="text-sm text-muted-foreground mb-4 max-w-sm">
            Your payment of $49.00 has been processed. A receipt has been sent to your email.
          </p>
          <Button>View Receipt</Button>
        </div>
      </ComponentSection>
    </StorybookLayout>
  );
}
