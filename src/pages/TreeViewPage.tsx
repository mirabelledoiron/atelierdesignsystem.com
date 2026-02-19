import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import DocBlock from "@/components/DocBlock";
import { useState } from "react";
import { ChevronRight, Folder, FolderOpen, File, Image, FileCode } from "lucide-react";

interface TreeNode {
  name: string;
  type: "folder" | "file";
  icon?: React.ElementType;
  children?: TreeNode[];
}

const tree: TreeNode[] = [
  {
    name: "src", type: "folder", children: [
      {
        name: "components", type: "folder", children: [
          { name: "Button.tsx", type: "file", icon: FileCode },
          { name: "Card.tsx", type: "file", icon: FileCode },
          { name: "ui", type: "folder", children: [
            { name: "dialog.tsx", type: "file", icon: FileCode },
            { name: "input.tsx", type: "file", icon: FileCode },
          ] },
        ]
      },
      {
        name: "assets", type: "folder", children: [
          { name: "logo.svg", type: "file", icon: Image },
          { name: "hero.png", type: "file", icon: Image },
        ]
      },
      { name: "App.tsx", type: "file", icon: FileCode },
      { name: "index.css", type: "file", icon: File },
    ]
  },
  { name: "package.json", type: "file", icon: File },
  { name: "README.md", type: "file", icon: File },
];

function TreeItem({ node, depth = 0 }: { node: TreeNode; depth?: number }) {
  const [open, setOpen] = useState(depth < 1);
  const Icon = node.type === "folder" ? (open ? FolderOpen : Folder) : (node.icon || File);

  return (
    <div>
      <button
        onClick={() => node.type === "folder" && setOpen(!open)}
        className="flex items-center gap-1.5 w-full px-2 py-1 rounded-md text-sm hover:bg-accent transition-colors text-foreground"
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
      >
        {node.type === "folder" && (
          <ChevronRight className={`w-3 h-3 text-muted-foreground transition-transform ${open ? "rotate-90" : ""}`} />
        )}
        {node.type === "file" && <span className="w-3" />}
        <Icon className={`w-4 h-4 flex-shrink-0 ${node.type === "folder" ? "text-primary" : "text-muted-foreground"}`} />
        <span className={node.type === "folder" ? "font-medium" : ""}>{node.name}</span>
      </button>
      {node.type === "folder" && open && node.children?.map((child) => (
        <TreeItem key={child.name} node={child} depth={depth + 1} />
      ))}
    </div>
  );
}

export default function TreeViewPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Tree View" subtitle="Hierarchical data display for file systems, org charts, and nested lists." />

      <DocBlock
        usage="Use TreeView for displaying hierarchical data like file systems, org charts, or nested categories. Nodes can be expanded/collapsed to navigate the hierarchy."
        doItems={["Use distinct icons for folders vs. files", "Expand the first level by default", "Indent children consistently"]}
        dontItems={["Don't nest more than 4-5 levels deep", "Avoid mixing unrelated data types in one tree"]}
        apiRows={[
          { prop: "name", type: "string", desc: "Display label for the node" },
          { prop: "type", type: '"folder" | "file"', desc: "Determines if node is expandable" },
          { prop: "icon", type: "React.ElementType", desc: "Custom icon component for the node" },
          { prop: "children", type: "TreeNode[]", desc: "Nested child nodes (folders only)" },
          { prop: "defaultOpen", type: "boolean", default: "false", desc: "Start with node expanded" },
        ]}
      />

      <ComponentSection title="File Explorer" description="Expandable folder tree structure.">
        <div className="rounded-lg border border-border p-2 max-w-sm bg-card">
          {tree.map((node) => <TreeItem key={node.name} node={node} />)}
        </div>
      </ComponentSection>
    </StorybookLayout>
  );
}
