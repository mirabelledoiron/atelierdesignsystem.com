import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import DocBlock from "@/components/DocBlock";
import { useState } from "react";
import { Star } from "lucide-react";

function RatingStars({ value, onChange, max = 5, size = "md" }: { value: number; onChange?: (v: number) => void; max?: number; size?: "sm" | "md" | "lg" }) {
  const [hover, setHover] = useState(0);
  const sizeClass = size === "sm" ? "w-4 h-4" : size === "lg" ? "w-8 h-8" : "w-5 h-5";

  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }, (_, i) => i + 1).map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange?.(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className="transition-colors"
          aria-label={`Rate ${star} of ${max}`}
        >
          <Star
            className={`${sizeClass} transition-colors ${
              star <= (hover || value) ? "fill-primary text-primary" : "text-muted-foreground"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export default function RatingPage() {
  const [rating1, setRating1] = useState(3);
  const [rating2, setRating2] = useState(4);
  const [rating3, setRating3] = useState(2);

  return (
    <StorybookLayout>
      <PageHeader title="Rating" subtitle="Star-based rating input for user feedback and reviews." />

      <DocBlock
        usage="Use Rating for collecting user feedback scores. Supports hover preview, multiple sizes, and read-only display mode for showing existing ratings."
        doItems={["Show the numeric value alongside stars", "Use hover preview for interactive ratings", "Provide aria-labels for each star"]}
        dontItems={["Don't use more than 10 stars", "Avoid using without a visible numeric indicator"]}
        apiRows={[
          { prop: "value", type: "number", desc: "Current rating value" },
          { prop: "onChange", type: "(value: number) => void", desc: "Callback when a star is clicked" },
          { prop: "max", type: "number", default: "5", desc: "Maximum number of stars" },
          { prop: "size", type: '"sm" | "md" | "lg"', default: '"md"', desc: "Star icon size" },
        ]}
      />

      <ComponentSection title="Default Rating" description="Click stars to rate.">
        <div className="space-y-2">
          <RatingStars value={rating1} onChange={setRating1} />
          <p className="text-xs text-muted-foreground">{rating1} of 5</p>
        </div>
      </ComponentSection>

      <ComponentSection title="Sizes" description="Small, medium, and large star variants.">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground w-8">SM</span>
            <RatingStars value={rating2} onChange={setRating2} size="sm" />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground w-8">MD</span>
            <RatingStars value={rating2} onChange={setRating2} size="md" />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground w-8">LG</span>
            <RatingStars value={rating2} onChange={setRating2} size="lg" />
          </div>
        </div>
      </ComponentSection>

      <ComponentSection title="Read Only" description="Display-only rating without interaction.">
        <RatingStars value={4} max={5} />
      </ComponentSection>

      <ComponentSection title="Custom Max" description="10-star scale.">
        <RatingStars value={rating3} onChange={setRating3} max={10} size="sm" />
      </ComponentSection>
    </StorybookLayout>
  );
}
