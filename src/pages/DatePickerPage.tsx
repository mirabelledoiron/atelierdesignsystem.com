import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import InstallBlock from "@/components/InstallBlock";
import DocBlock from "@/components/DocBlock";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function DatePickerPage() {
  const [date1, setDate1] = useState<Date>();
  const [date2, setDate2] = useState<Date>(new Date());

  return (
    <StorybookLayout>
      <PageHeader title="Date Picker" subtitle="Calendar-based date selection using popover and calendar components." />

      <InstallBlock
        install="npx shadcn-ui@latest add calendar popover"
        importCode={`import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";`}
        usage={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">
      <CalendarIcon className="mr-2 h-4 w-4" />
      {date ? format(date, "PPP") : "Pick a date"}
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0">
    <Calendar mode="single" selected={date} onSelect={setDate} className="pointer-events-auto" />
  </PopoverContent>
</Popover>`}
      />

      <DocBlock
        usage="Use DatePicker for selecting single dates via a calendar popover. Combine Calendar with Popover for the standard pattern. Use inline Calendar when the date selection is the primary action."
        doItems={["Format dates consistently (e.g., PPP from date-fns)", "Use a clear placeholder like 'Pick a date'", "Set initialFocus for keyboard accessibility"]}
        dontItems={["Don't use for date ranges without proper range support", "Avoid custom date formats that are ambiguous (MM/DD vs DD/MM)"]}
        apiRows={[
          { prop: "mode", type: '"single" | "range" | "multiple"', default: '"single"', desc: "Selection mode for the calendar" },
          { prop: "selected", type: "Date | undefined", desc: "Currently selected date" },
          { prop: "onSelect", type: "(date: Date | undefined) => void", desc: "Callback when a date is selected" },
          { prop: "initialFocus", type: "boolean", default: "false", desc: "Auto-focus the calendar when opened" },
          { prop: "disabled", type: "Matcher | Matcher[]", desc: "Dates or date ranges to disable" },
        ]}
      />

      <ComponentSection title="Date Picker" description="Click to open calendar popover.">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className={cn("w-[260px] justify-start text-left font-normal", !date1 && "text-muted-foreground")}>
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date1 ? format(date1, "PPP") : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={date1} onSelect={setDate1} initialFocus className="p-3 pointer-events-auto" />
          </PopoverContent>
        </Popover>
      </ComponentSection>

      <ComponentSection title="Inline Calendar" description="Embedded calendar without popover.">
        <Calendar mode="single" selected={date2} onSelect={(d) => d && setDate2(d)} className="rounded-lg border border-border" />
      </ComponentSection>
    </StorybookLayout>
  );
}
