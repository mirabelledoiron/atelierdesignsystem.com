import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { useToast } from "./use-toast";
import { Toaster } from "./toaster";

const meta: Meta = {
  title: "Components/Toast",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const ToastDemo = () => {
  const { toast } = useToast();
  return (
    <>
      <Button
        onClick={() => {
          toast({ title: "Scheduled", description: "Event has been created." });
        }}
      >
        Show Toast
      </Button>
      <Toaster />
    </>
  );
};

export const Default: Story = {
  render: () => <ToastDemo />,
};
