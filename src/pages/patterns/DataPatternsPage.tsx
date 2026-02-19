import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import CodeBlock from "@/components/CodeBlock";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, ArrowUpDown } from "lucide-react";

const data = [
  { name: "Atelier Pro", status: "Active", users: 1240, revenue: "$12,400" },
  { name: "Starter Kit", status: "Active", users: 890, revenue: "$4,450" },
  { name: "Legacy Plan", status: "Inactive", users: 120, revenue: "$600" },
  { name: "Enterprise", status: "Active", users: 3400, revenue: "$68,000" },
];

export default function DataPatternsPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Data Patterns" subtitle="Tables with filtering, sorting, card grids, and list views." />

      <ComponentSection title="Filterable Table" description="Table with search and filter controls.">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative flex-1 max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search products..." className="pl-9" />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" /> Filter
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                    Product <ArrowUpDown className="w-3 h-3" />
                  </button>
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead>
                  <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                    Users <ArrowUpDown className="w-3 h-3" />
                  </button>
                </TableHead>
                <TableHead className="text-right">Revenue</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.name}>
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell>
                    <Badge variant={row.status === "Active" ? "default" : "outline"}>{row.status}</Badge>
                  </TableCell>
                  <TableCell>{row.users.toLocaleString()}</TableCell>
                  <TableCell className="text-right font-mono">{row.revenue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>4 results</span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection title="Metric Cards" description="KPI cards for dashboard overviews.">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total Revenue", value: "$85,450", change: "+12.5%" },
            { label: "Active Users", value: "5,650", change: "+8.2%" },
            { label: "Conversion", value: "3.2%", change: "-0.4%" },
            { label: "Avg. Order", value: "$42.50", change: "+2.1%" },
          ].map((m) => (
            <div key={m.label} className="rounded-xl border border-border bg-card p-4">
              <p className="text-xs text-muted-foreground mb-1">{m.label}</p>
              <p className="text-2xl font-bold text-foreground">{m.value}</p>
              <p className={`text-xs mt-1 ${m.change.startsWith("+") ? "text-secondary" : "text-destructive"}`}>
                {m.change} from last month
              </p>
            </div>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="List View" description="Compact list with actions.">
        <div className="divide-y divide-border rounded-xl border border-border overflow-hidden">
          {data.map((row) => (
            <div key={row.name} className="flex items-center justify-between px-4 py-3 bg-card hover:bg-muted/50 transition-colors">
              <div>
                <p className="text-sm font-medium text-foreground">{row.name}</p>
                <p className="text-xs text-muted-foreground">{row.users.toLocaleString()} users</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-foreground">{row.revenue}</span>
                <Button variant="ghost" size="sm">View</Button>
              </div>
            </div>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="Code Reference" description="">
        <CodeBlock>{`<!-- Filterable table header -->
<div className="flex items-center gap-3">
  <div className="relative flex-1 max-w-xs">
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
    <Input placeholder="Search..." className="pl-9" />
  </div>
  <Button variant="outline" size="sm">
    <Filter className="w-4 h-4 mr-2" /> Filter
  </Button>
</div>

<!-- Sortable column header -->
<TableHead>
  <button className="flex items-center gap-1">
    Column <ArrowUpDown className="w-3 h-3" />
  </button>
</TableHead>`}</CodeBlock>
      </ComponentSection>
    </StorybookLayout>
  );
}
