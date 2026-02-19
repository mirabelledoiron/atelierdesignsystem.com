import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import InstallBlock from "@/components/InstallBlock";
import DocBlock from "@/components/DocBlock";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSub,
  DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, User, Settings, LogOut, Plus, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function DropdownMenuPage() {
  const [showStatus, setShowStatus] = useState(true);
  const [position, setPosition] = useState("bottom");

  return (
    <StorybookLayout>
      <PageHeader title="Dropdown Menu" subtitle="Contextual menus triggered by buttons. Supports items, groups, checkboxes, radios, and sub-menus." />

      <InstallBlock
        install="npx shadcn-ui@latest add dropdown-menu"
        importCode={`import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";`}
        usage={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
      />

      <DocBlock
        usage="Use DropdownMenu for contextual actions triggered by a button. Supports items, groups, checkboxes, radios, sub-menus, and keyboard shortcuts."
        doItems={["Group related items with labels and separators", "Add keyboard shortcut hints with DropdownMenuShortcut", "Use destructive styling for dangerous actions"]}
        dontItems={["Don't put more than 10 items without grouping", "Avoid deeply nested sub-menus (max 1 level)"]}
        apiRows={[
          { prop: "DropdownMenuTrigger", type: "component", desc: "Element that opens the menu on click" },
          { prop: "DropdownMenuContent", type: "component", desc: "Container for menu items" },
          { prop: "DropdownMenuItem", type: "component", desc: "Standard clickable menu item" },
          { prop: "DropdownMenuCheckboxItem", type: "component", desc: "Toggleable checkbox menu item" },
          { prop: "DropdownMenuRadioItem", type: "component", desc: "Radio selection menu item" },
          { prop: "DropdownMenuSub", type: "component", desc: "Container for nested sub-menu" },
          { prop: "DropdownMenuShortcut", type: "component", desc: "Right-aligned keyboard shortcut text" },
        ]}
      />

      <ComponentSection title="Default" description="Simple dropdown with items and separator.">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <MoreHorizontal className="w-4 h-4 mr-2" /> Actions
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem><User className="w-4 h-4 mr-2" /> Profile</DropdownMenuItem>
            <DropdownMenuItem><Settings className="w-4 h-4 mr-2" /> Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive"><LogOut className="w-4 h-4 mr-2" /> Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ComponentSection>

      <ComponentSection title="With Shortcuts" description="Keyboard shortcut hints alongside items.">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Edit</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuItem>Undo <DropdownMenuShortcut>Ctrl+Z</DropdownMenuShortcut></DropdownMenuItem>
            <DropdownMenuItem>Redo <DropdownMenuShortcut>Ctrl+Y</DropdownMenuShortcut></DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Cut <DropdownMenuShortcut>Ctrl+X</DropdownMenuShortcut></DropdownMenuItem>
            <DropdownMenuItem>Copy <DropdownMenuShortcut>Ctrl+C</DropdownMenuShortcut></DropdownMenuItem>
            <DropdownMenuItem>Paste <DropdownMenuShortcut>Ctrl+V</DropdownMenuShortcut></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ComponentSection>

      <ComponentSection title="Checkbox Items" description="Toggle-able menu items.">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">View</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem checked={showStatus} onCheckedChange={setShowStatus}>
              Show Status Bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Show Activity Bar</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Show Panel</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ComponentSection>

      <ComponentSection title="Sub Menu" description="Nested menu for grouped actions.">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline"><Plus className="w-4 h-4 mr-2" /> New</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>New File</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem><Mail className="w-4 h-4 mr-2" /> Email</DropdownMenuItem>
                <DropdownMenuItem><MessageSquare className="w-4 h-4 mr-2" /> Message</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      </ComponentSection>
    </StorybookLayout>
  );
}
