import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./chart";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const meta: Meta = {
  title: "Components/Chart",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const data = [
  { month: "Jan", value: 186 },
  { month: "Feb", value: 305 },
  { month: "Mar", value: 237 },
  { month: "Apr", value: 73 },
  { month: "May", value: 209 },
  { month: "Jun", value: 214 },
];

const chartConfig = {
  value: { label: "Value", color: "hsl(var(--primary))" },
};

export const Default: Story = {
  render: () => (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full max-w-md">
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="value" fill="var(--color-value)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
};
