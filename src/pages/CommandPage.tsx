import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import InstallBlock from "@/components/InstallBlock";
import DocBlock from "@/components/DocBlock";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command";
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "lucide-react";

export default function CommandPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Command Palette" subtitle="Searchable command menu for quick access to actions, pages, and settings." />

      <InstallBlock
        install="npx shadcn-ui@latest add command"
        importCode={`import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";`}
        usage={`<Command>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandGroup heading="Actions">
      <CommandItem>Profile</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
      />

      <DocBlock
        usage="Use Command for searchable action menus. Ideal as a command palette (⌘K) for power users or as an inline search/filter component."
        doItems={["Group related items with CommandGroup", "Add keyboard shortcuts with CommandShortcut", "Provide an empty state with CommandEmpty"]}
        dontItems={["Don't use as a replacement for standard navigation", "Avoid too many groups — keep it scannable"]}
        apiRows={[
          { prop: "CommandInput", type: "component", desc: "Search input with built-in filtering" },
          { prop: "CommandList", type: "component", desc: "Scrollable list container for results" },
          { prop: "CommandGroup", type: "component", desc: "Labeled group of related items" },
          { prop: "CommandItem", type: "component", desc: "Selectable action item" },
          { prop: "CommandShortcut", type: "component", desc: "Right-aligned keyboard shortcut hint" },
          { prop: "CommandSeparator", type: "component", desc: "Visual divider between groups" },
        ]}
      />

      <ComponentSection title="Inline Command" description="Embedded command palette with groups and shortcuts.">
        <div className="max-w-md border border-border rounded-xl overflow-hidden">
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem><Calendar className="mr-2 h-4 w-4" /> Calendar</CommandItem>
                <CommandItem><Smile className="mr-2 h-4 w-4" /> Search Emoji</CommandItem>
                <CommandItem><Calculator className="mr-2 h-4 w-4" /> Calculator</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem><User className="mr-2 h-4 w-4" /> Profile <CommandShortcut>Ctrl+P</CommandShortcut></CommandItem>
                <CommandItem><CreditCard className="mr-2 h-4 w-4" /> Billing <CommandShortcut>Ctrl+B</CommandShortcut></CommandItem>
                <CommandItem><Settings className="mr-2 h-4 w-4" /> Settings <CommandShortcut>Ctrl+S</CommandShortcut></CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </ComponentSection>
    </StorybookLayout>
  );
}
