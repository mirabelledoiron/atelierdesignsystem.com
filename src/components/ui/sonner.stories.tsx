import type { Meta, StoryObj } from "@storybook/react";
import { toast } from "sonner";
import { Toaster } from "./sonner";
import { Button } from "./button";

const meta: Meta = {
  title: "Components/Sonner",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <>
      <Button onClick={() => toast("Event has been created", { description: "Sunday, December 03, 2023 at 9:00 AM" })}>
        Show Sonner Toast
      </Button>
      <Toaster />
    </>
  ),
};
