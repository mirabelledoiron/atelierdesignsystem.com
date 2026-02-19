import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import InstallBlock from "@/components/InstallBlock";
import DocBlock from "@/components/DocBlock";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const invoices = [
  { id: "INV-001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { id: "INV-002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { id: "INV-003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
  { id: "INV-004", status: "Paid", method: "Credit Card", amount: "$450.00" },
  { id: "INV-005", status: "Paid", method: "PayPal", amount: "$550.00" },
];

const statusVariant = (s: string) => s === "Paid" ? "default" : s === "Pending" ? "secondary" : "outline";

export default function TablePage() {
  return (
    <StorybookLayout>
      <PageHeader title="Table" subtitle="Structured data display with headers, rows, and optional captions." />

      <InstallBlock
        install="npx shadcn-ui@latest add table badge"
        importCode={`import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";`}
        usage={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Item</TableCell>
      <TableCell>Active</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
      />

      <DocBlock
        usage="Use Table for structured data display with sortable columns and status indicators. Best for comparing items across multiple attributes."
        doItems={["Use TableCaption for accessibility", "Right-align numeric columns", "Use Badge for status cells"]}
        dontItems={["Don't use tables for layout purposes", "Avoid tables with only 1-2 columns — use a list instead"]}
        apiRows={[
          { prop: "TableHeader", type: "component", desc: "Container for header row(s)" },
          { prop: "TableBody", type: "component", desc: "Container for data rows" },
          { prop: "TableRow", type: "component", desc: "Single row of cells" },
          { prop: "TableHead", type: "component", desc: "Header cell with muted styling" },
          { prop: "TableCell", type: "component", desc: "Standard data cell" },
          { prop: "TableCaption", type: "component", desc: "Accessible table description" },
        ]}
      />

      <ComponentSection title="Default Table" description="Standard data table with badge status indicators.">
        <Table>
          <TableCaption>Recent invoices</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((inv) => (
              <TableRow key={inv.id}>
                <TableCell className="font-mono text-sm">{inv.id}</TableCell>
                <TableCell>
                  <Badge variant={statusVariant(inv.status)}>{inv.status}</Badge>
                </TableCell>
                <TableCell>{inv.method}</TableCell>
                <TableCell className="text-right font-mono">{inv.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ComponentSection>

      <ComponentSection title="Striped Rows" description="Alternating row backgrounds for readability.">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Department</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { name: "Alice Chen", role: "Engineer", dept: "Product" },
              { name: "Bob Smith", role: "Designer", dept: "Design" },
              { name: "Carol Wu", role: "PM", dept: "Product" },
              { name: "Dan Lee", role: "Engineer", dept: "Platform" },
            ].map((row, i) => (
              <TableRow key={row.name} className={i % 2 === 1 ? "bg-muted/50" : ""}>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.dept}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ComponentSection>
    </StorybookLayout>
  );
}
