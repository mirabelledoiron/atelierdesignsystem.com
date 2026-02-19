import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import CodeBlock from "@/components/CodeBlock";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function FormPatternsPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Form Patterns" subtitle="Common form layouts, validation states, and field grouping patterns." />

      <ComponentSection title="Simple Form" description="Stacked label + input pattern.">
        <form className="space-y-4 max-w-md" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="f-name">Full Name</Label>
            <Input id="f-name" placeholder="Alice Chen" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="f-email">Email</Label>
            <Input id="f-email" type="email" placeholder="alice@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="f-msg">Message</Label>
            <Textarea id="f-msg" placeholder="How can we help?" />
          </div>
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </ComponentSection>

      <ComponentSection title="Inline Fields" description="Side-by-side fields for related data.">
        <form className="max-w-lg" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <Label>First Name</Label>
              <Input placeholder="Alice" />
            </div>
            <div className="space-y-2">
              <Label>Last Name</Label>
              <Input placeholder="Chen" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="space-y-2 col-span-2">
              <Label>City</Label>
              <Input placeholder="San Francisco" />
            </div>
            <div className="space-y-2">
              <Label>ZIP</Label>
              <Input placeholder="94102" />
            </div>
          </div>
          <Button>Save</Button>
        </form>
      </ComponentSection>

      <ComponentSection title="Validation States" description="Error, success, and helper text.">
        <div className="space-y-4 max-w-md">
          <div className="space-y-2">
            <Label>Email</Label>
            <Input className="border-destructive" defaultValue="invalid-email" />
            <p className="text-xs text-destructive">Please enter a valid email address.</p>
          </div>
          <div className="space-y-2">
            <Label>Username</Label>
            <Input className="border-secondary" defaultValue="alice_chen" />
            <p className="text-xs text-secondary">Username is available.</p>
          </div>
          <div className="space-y-2">
            <Label>Password</Label>
            <Input type="password" placeholder="Enter password" />
            <p className="text-xs text-muted-foreground">Must be at least 8 characters with one number.</p>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection title="Form with Select & Checkbox" description="Mixed control types in a form.">
        <form className="space-y-4 max-w-md" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Label>Role</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="Select role" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="dev">Developer</SelectItem>
                <SelectItem value="design">Designer</SelectItem>
                <SelectItem value="pm">Product Manager</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree" className="text-sm font-normal">I agree to the terms of service</Label>
          </div>
          <div className="flex gap-3">
            <Button type="submit">Create Account</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </form>
      </ComponentSection>

      <ComponentSection title="Field Group Pattern" description="">
        <CodeBlock>{`<!-- Stacked (default) -->
<div className="space-y-2">
  <Label>Field</Label>
  <Input />
  <p className="text-xs text-muted-foreground">Helper text</p>
</div>

<!-- Inline (side-by-side) -->
<div className="grid grid-cols-4 items-center gap-4">
  <Label className="text-right">Field</Label>
  <Input className="col-span-3" />
</div>

<!-- Validation error -->
<div className="space-y-2">
  <Label>Field</Label>
  <Input className="border-destructive" />
  <p className="text-xs text-destructive">Error message</p>
</div>`}</CodeBlock>
      </ComponentSection>
    </StorybookLayout>
  );
}
