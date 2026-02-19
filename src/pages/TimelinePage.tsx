import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import DocBlock from "@/components/DocBlock";
import { CheckCircle, Circle, Clock, AlertTriangle } from "lucide-react";

const events = [
  { title: "Order placed", description: "Your order has been confirmed.", time: "Jan 15, 10:00 AM", status: "complete" as const },
  { title: "Payment processed", description: "Payment of $129.00 received.", time: "Jan 15, 10:02 AM", status: "complete" as const },
  { title: "Shipped", description: "Package is on its way.", time: "Jan 16, 2:30 PM", status: "complete" as const },
  { title: "Out for delivery", description: "With courier for final delivery.", time: "Jan 17, 8:15 AM", status: "current" as const },
  { title: "Delivered", description: "Estimated delivery today.", time: "Pending", status: "pending" as const },
];

const statusIcon = {
  complete: <CheckCircle className="w-5 h-5 text-secondary" />,
  current: <Clock className="w-5 h-5 text-primary" />,
  pending: <Circle className="w-5 h-5 text-muted-foreground" />,
};

export default function TimelinePage() {
  return (
    <StorybookLayout>
      <PageHeader title="Timeline" subtitle="Chronological event display for activity feeds, order tracking, and histories." />

      <DocBlock
        usage="Use Timeline for displaying chronological events like order tracking, activity feeds, or version histories. Each event has a status icon, title, description, and timestamp."
        doItems={["Use distinct icons for each status (complete, current, pending)", "Order events chronologically", "Keep descriptions concise"]}
        dontItems={["Don't mix unrelated events in one timeline", "Avoid more than 10 visible items without pagination or scroll"]}
        apiRows={[
          { prop: "title", type: "string", desc: "Event heading text" },
          { prop: "description", type: "string", desc: "Supporting detail for the event" },
          { prop: "time", type: "string", desc: "Timestamp or relative time label" },
          { prop: "status", type: '"complete" | "current" | "pending"', desc: "Visual status determining the icon style" },
        ]}
      />

      <ComponentSection title="Vertical Timeline" description="Step-by-step progression.">
        <div className="relative ml-3 max-w-md">
          {events.map((event, i) => (
            <div key={i} className="relative pl-8 pb-8 last:pb-0">
              {i < events.length - 1 && (
                <div className="absolute left-[9px] top-6 bottom-0 w-px bg-border" />
              )}
              <div className="absolute left-0 top-0.5">{statusIcon[event.status]}</div>
              <div>
                <h4 className="text-sm font-medium text-foreground">{event.title}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{event.description}</p>
                <span className="text-[11px] font-mono text-muted-foreground mt-1 block">{event.time}</span>
              </div>
            </div>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection title="Compact Timeline" description="Minimal style for activity logs.">
        <div className="space-y-3 max-w-md">
          {[
            { text: "User signed up", time: "2 hours ago" },
            { text: "Profile updated", time: "1 hour ago" },
            { text: "Settings changed", time: "30 min ago" },
            { text: "Password reset requested", time: "5 min ago" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span className="text-sm text-foreground flex-1">{item.text}</span>
              <span className="text-xs text-muted-foreground font-mono">{item.time}</span>
            </div>
          ))}
        </div>
      </ComponentSection>
    </StorybookLayout>
  );
}
