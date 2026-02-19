import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import InstallBlock from "@/components/InstallBlock";
import DocBlock from "@/components/DocBlock";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function SelectPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Select" subtitle="Dropdown selection component for choosing from a list of options." />

      <InstallBlock
        install="npx shadcn-ui@latest add select"
        importCode={`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";`}
        usage={`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Choose..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="a">Option A</SelectItem>
    <SelectItem value="b">Option B</SelectItem>
  </SelectContent>
</Select>`}
      />

      <DocBlock
        usage="Use Select for choosing a single value from a predefined list. For multiple selections or searchable lists, use Combobox."
        doItems={["Provide a clear placeholder", "Group related options with SelectGroup", "Order options logically"]}
        dontItems={["Don't use for fewer than 3 options (use Radio instead)", "Don't put too many items without grouping"]}
      />

      <ComponentSection title="Default" description="Basic select with placeholder.">
        <div className="max-w-xs">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="cherry">Cherry</SelectItem>
              <SelectItem value="date">Date</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </ComponentSection>

      <ComponentSection title="With Label" description="Accessible select with label.">
        <div className="space-y-2 max-w-xs">
          <Label>Country</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="de">Germany</SelectItem>
              <SelectItem value="fr">France</SelectItem>
              <SelectItem value="jp">Japan</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </ComponentSection>

      <ComponentSection title="Grouped" description="Options organized into groups.">
        <div className="max-w-xs">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Americas</SelectLabel>
                <SelectItem value="est">Eastern (EST)</SelectItem>
                <SelectItem value="cst">Central (CST)</SelectItem>
                <SelectItem value="pst">Pacific (PST)</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Europe</SelectLabel>
                <SelectItem value="gmt">GMT</SelectItem>
                <SelectItem value="cet">Central European (CET)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </ComponentSection>

      <ComponentSection title="Disabled" description="">
        <div className="max-w-xs">
          <Select disabled>
            <SelectTrigger>
              <SelectValue placeholder="Disabled" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="a">A</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </ComponentSection>
    </StorybookLayout>
  );
}
