import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import InstallBlock from "@/components/InstallBlock";
import DocBlock from "@/components/DocBlock";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function CarouselPage() {
  return (
    <StorybookLayout>
      <PageHeader title="Carousel" subtitle="Horizontal scrolling content with navigation controls. Built on Embla Carousel." />

      <InstallBlock
        install="npx shadcn-ui@latest add carousel"
        importCode={`import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";`}
        usage={`<Carousel>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
      />

      <DocBlock
        usage="Use Carousel for browsing through a set of items horizontally. Great for image galleries, testimonials, or feature showcases."
        doItems={["Provide navigation arrows for accessibility", "Use consistent slide dimensions", "Consider auto-play only for non-interactive content"]}
        dontItems={["Don't put critical content only in later slides", "Avoid carousels for primary navigation"]}
        apiRows={[
          { prop: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', desc: "Scroll direction of the carousel" },
          { prop: "opts", type: "EmblaOptionsType", desc: "Embla Carousel options (loop, align, etc.)" },
          { prop: "setApi", type: "(api: EmblaCarouselType) => void", desc: "Callback to access the carousel API" },
        ]}
      />

      <ComponentSection title="Default" description="Basic carousel with navigation arrows.">
        <div className="px-12">
          <Carousel>
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, i) => (
                <CarouselItem key={i}>
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <span className="text-3xl font-bold text-primary">{i + 1}</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </ComponentSection>

      <ComponentSection title="Multi-Item" description="Show multiple items per view using basis classes.">
        <div className="px-12">
          <Carousel>
            <CarouselContent className="-ml-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <CarouselItem key={i} className="pl-2 basis-1/3">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-4">
                      <span className="text-xl font-bold text-muted-foreground">{i + 1}</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </ComponentSection>
    </StorybookLayout>
  );
}
