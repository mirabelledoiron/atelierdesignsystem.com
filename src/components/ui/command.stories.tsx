import type { Meta, StoryObj } from "@storybook/react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./command";
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "lucide-react";

const meta: Meta<typeof Command> = {
  title: "Components/Command",
  component: Command,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Command>;

export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-[350px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem><Calendar className="mr-2 h-4 w-4" /> Calendar</CommandItem>
          <CommandItem><Smile className="mr-2 h-4 w-4" /> Search Emoji</CommandItem>
          <CommandItem><Calculator className="mr-2 h-4 w-4" /> Calculator</CommandItem>
        </CommandGroup>
        <CommandGroup heading="Settings">
          <CommandItem><User className="mr-2 h-4 w-4" /> Profile</CommandItem>
          <CommandItem><CreditCard className="mr-2 h-4 w-4" /> Billing</CommandItem>
          <CommandItem><Settings className="mr-2 h-4 w-4" /> Settings</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
