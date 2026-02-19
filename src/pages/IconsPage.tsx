import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import InstallBlock from "@/components/InstallBlock";
import CodeBlock from "@/components/CodeBlock";
import {
  Home, Search, Settings, User, Bell, Mail, Heart, Star,
  Plus, Minus, X, Check, ChevronRight, ChevronDown, ArrowRight,
  ArrowLeft, Eye, EyeOff, Copy, Trash2, Edit, Download, Upload,
  Filter, MoreHorizontal, MoreVertical, Menu, Calendar, Clock,
  Image, File, Folder, Link, ExternalLink, Share2, Lock, Unlock,
} from "lucide-react";

const iconSets = [
  { label: "Navigation", icons: [
    { name: "Home", Icon: Home }, { name: "Search", Icon: Search }, { name: "Settings", Icon: Settings },
    { name: "Menu", Icon: Menu }, { name: "ChevronRight", Icon: ChevronRight }, { name: "ChevronDown", Icon: ChevronDown },
    { name: "ArrowRight", Icon: ArrowRight }, { name: "ArrowLeft", Icon: ArrowLeft },
    { name: "ExternalLink", Icon: ExternalLink },
  ]},
  { label: "Actions", icons: [
    { name: "Plus", Icon: Plus }, { name: "Minus", Icon: Minus }, { name: "X", Icon: X },
    { name: "Check", Icon: Check }, { name: "Edit", Icon: Edit }, { name: "Trash2", Icon: Trash2 },
    { name: "Copy", Icon: Copy }, { name: "Download", Icon: Download }, { name: "Upload", Icon: Upload },
    { name: "Share2", Icon: Share2 }, { name: "Filter", Icon: Filter },
    { name: "MoreHorizontal", Icon: MoreHorizontal }, { name: "MoreVertical", Icon: MoreVertical },
  ]},
  { label: "Content", icons: [
    { name: "User", Icon: User }, { name: "Bell", Icon: Bell }, { name: "Mail", Icon: Mail },
    { name: "Heart", Icon: Heart }, { name: "Star", Icon: Star }, { name: "Eye", Icon: Eye },
    { name: "EyeOff", Icon: EyeOff }, { name: "Calendar", Icon: Calendar }, { name: "Clock", Icon: Clock },
    { name: "Image", Icon: Image }, { name: "File", Icon: File }, { name: "Folder", Icon: Folder },
    { name: "Link", Icon: Link }, { name: "Lock", Icon: Lock }, { name: "Unlock", Icon: Unlock },
  ]},
];

const sizes = [
  { name: "xs", size: 14, desc: "Inline with small text" },
  { name: "sm", size: 16, desc: "Inline with body text" },
  { name: "md", size: 20, desc: "Buttons, inputs" },
  { name: "lg", size: 24, desc: "Default, standalone" },
  { name: "xl", size: 32, desc: "Feature icons" },
];

export default function IconsPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Icons" subtitle="Icon sizing, stroke weights, and the Lucide icon set. Tree-shakable, consistent, and accessible." />

      <InstallBlock
        install="npm install lucide-react"
        importCode={`import { Home, Search, Settings } from "lucide-react";`}
        usage={`<Home className="w-5 h-5" />
<Search className="w-4 h-4 text-muted-foreground" />`}
      />

      <ComponentSection title="Icon Sizes" description="Standardized sizing for different contexts.">
        <div className="flex items-end gap-8">
          {sizes.map((s) => (
            <div key={s.name} className="flex flex-col items-center gap-2">
              <Star size={s.size} className="text-primary" />
              <span className="text-xs font-mono font-medium text-foreground">{s.name}</span>
              <span className="text-xs text-muted-foreground">{s.size}px</span>
              <span className="text-xs text-muted-foreground text-center max-w-20">{s.desc}</span>
            </div>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="Stroke Weight" description="Default stroke width is 2. Adjust for visual weight.">
        <div className="flex items-center gap-8">
          {[1, 1.5, 2, 2.5].map((w) => (
            <div key={w} className="flex flex-col items-center gap-2">
              <Heart size={24} strokeWidth={w} className="text-foreground" />
              <span className="text-xs font-mono text-muted-foreground">{w}</span>
            </div>
          ))}
        </div>
      </ComponentSection>

      {iconSets.map((set) => (
        <ComponentSection key={set.label} title={set.label} description="">
          <div className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-10 gap-4">
            {set.icons.map((icon) => {
              const IconComp = icon.Icon;
              return (
                <div key={icon.name} className="flex flex-col items-center gap-1.5 p-2 rounded-lg hover:bg-muted transition-colors cursor-default group">
                  <IconComp className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                  <span className="text-[10px] font-mono text-muted-foreground text-center leading-tight">{icon.name}</span>
                </div>
              );
            })}
          </div>
        </ComponentSection>
      ))}
    </StorybookLayout>
  );
}
