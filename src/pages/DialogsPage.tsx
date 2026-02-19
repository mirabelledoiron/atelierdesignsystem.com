import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import DocBlock from "@/components/DocBlock";
import CodeBlock from "@/components/CodeBlock";
import InstallBlock from "@/components/InstallBlock";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DialogsPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Dialogs" subtitle="Modal overlays for focused interactions." />

      <InstallBlock
        install={`npx shadcn-ui@latest add dialog\nnpx shadcn-ui@latest add alert-dialog`}
        importCode={`import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"\nimport { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"`}
        usage={`<Dialog>\n  <DialogTrigger asChild><Button>Open</Button></DialogTrigger>\n  <DialogContent>\n    <DialogHeader><DialogTitle>Title</DialogTitle></DialogHeader>\n  </DialogContent>\n</Dialog>`}
      />

      <DocBlock
        usage="Dialogs interrupt the user's workflow to collect information or confirm actions. Use standard dialogs for forms and settings; use alert dialogs for destructive confirmations that require explicit acknowledgment."
        doItems={[
          "Use DialogTitle and DialogDescription for accessibility (screen readers)",
          "Always provide a Cancel or close action",
          "Keep dialog content focused — one task per dialog",
          "Use AlertDialog for irreversible actions like deleting data",
        ]}
        dontItems={[
          "Don't nest dialogs — use a multi-step flow instead",
          "Avoid long scrollable content in dialogs; use a full page instead",
          "Don't auto-open dialogs on page load without user intent",
        ]}
        apiRows={[
          { prop: "DialogTrigger", type: "component", desc: "Element that opens the dialog on click" },
          { prop: "DialogContent", type: "component", desc: "The modal container with backdrop" },
          { prop: "DialogTitle", type: "component", desc: "Required heading for accessibility" },
          { prop: "DialogDescription", type: "component", desc: "Supporting text below the title" },
          { prop: "AlertDialogAction", type: "component", desc: "Confirm button in alert dialogs" },
          { prop: "AlertDialogCancel", type: "component", desc: "Cancel button in alert dialogs" },
        ]}
      />

      <ComponentSection title="Dialog" description="A standard dialog with form content.">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>Update your display name and email.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Jane Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-d">Email</Label>
                <Input id="email-d" defaultValue="jane@example.com" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ComponentSection>

      <ComponentSection title="Alert Dialog" description="Confirmation before destructive actions.">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Delete Account</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account and remove all data.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </ComponentSection>

      <ComponentSection title="Code Example">
        <CodeBlock>{`import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
    </DialogHeader>
    {/* Form content here */}
  </DialogContent>
</Dialog>`}</CodeBlock>
      </ComponentSection>
    </StorybookLayout>
  );
}
