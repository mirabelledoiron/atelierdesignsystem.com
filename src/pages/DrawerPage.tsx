import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import InstallBlock from "@/components/InstallBlock";
import DocBlock from "@/components/DocBlock";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetClose } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DrawerPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Drawer / Sheet" subtitle="Slide-in panels from the edges of the screen. Use for forms, filters, navigation, and detail views." />

      <InstallBlock
        install="npx shadcn-ui@latest add sheet"
        importCode={`import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";`}
        usage={`<Sheet>
  <SheetTrigger asChild><Button>Open</Button></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Title</SheetTitle>
    </SheetHeader>
    <p>Content here</p>
  </SheetContent>
</Sheet>`}
      />

      <DocBlock
        usage="Use Sheet for slide-in panels from any screen edge. Ideal for editing forms, navigation drawers, filters, and detail views without leaving the current page."
        doItems={["Include a clear title with SheetTitle", "Use side='left' for navigation drawers", "Provide close/save actions in SheetFooter"]}
        dontItems={["Don't use for simple confirmations — use Dialog instead", "Avoid putting full-page content in a sheet"]}
        apiRows={[
          { prop: "side", type: '"top" | "right" | "bottom" | "left"', default: '"right"', desc: "Edge of the screen the sheet slides from" },
          { prop: "open", type: "boolean", desc: "Controlled open state" },
          { prop: "onOpenChange", type: "(open: boolean) => void", desc: "Callback when open state changes" },
          { prop: "SheetTrigger", type: "component", desc: "Element that opens the sheet" },
          { prop: "SheetContent", type: "component", desc: "Container for sheet content" },
          { prop: "SheetHeader", type: "component", desc: "Header section with title and description" },
          { prop: "SheetFooter", type: "component", desc: "Footer section for actions" },
        ]}
      />

      <ComponentSection title="Right (Default)" description="Sheet slides in from the right edge.">
        <Sheet>
          <SheetTrigger asChild><Button variant="outline">Open Right Sheet</Button></SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit Profile</SheetTitle>
              <SheetDescription>Make changes to your profile.</SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Name</Label>
                <Input id="name" defaultValue="Alice Chen" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">Email</Label>
                <Input id="email" defaultValue="alice@example.com" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild><Button type="submit">Save</Button></SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </ComponentSection>

      <ComponentSection title="Left Side" description="Navigation or sidebar drawer.">
        <Sheet>
          <SheetTrigger asChild><Button variant="outline">Open Left Sheet</Button></SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-2 mt-4">
              {["Dashboard", "Projects", "Team", "Settings"].map((item) => (
                <button key={item} className="text-left px-3 py-2 rounded-lg text-sm text-foreground hover:bg-accent transition-colors">
                  {item}
                </button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </ComponentSection>

      <ComponentSection title="Top & Bottom" description="Sheets from top or bottom edges.">
        <div className="flex gap-3">
          <Sheet>
            <SheetTrigger asChild><Button variant="outline">Top</Button></SheetTrigger>
            <SheetContent side="top">
              <SheetHeader><SheetTitle>Announcement</SheetTitle></SheetHeader>
              <p className="text-sm text-muted-foreground mt-2">Important system notification goes here.</p>
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild><Button variant="outline">Bottom</Button></SheetTrigger>
            <SheetContent side="bottom">
              <SheetHeader><SheetTitle>Actions</SheetTitle></SheetHeader>
              <div className="flex gap-2 mt-4">
                <Button>Confirm</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </ComponentSection>
    </StorybookLayout>
  );
}
