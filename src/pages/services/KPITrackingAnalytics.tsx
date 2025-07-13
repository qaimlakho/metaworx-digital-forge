
import { LayoutGrid } from 'lucide-react';
import ServicePageLayout from '../../components/ServicePageLayout';

const KPITrackingAnalytics = () => {
  const sections = [
    {
      title: "Strategic Content Calendars",
      description: "Plan your posts in advance to ensure consistency, relevance, and timely messaging across platforms.",
      features: [
        "Platform-specific scheduling",
        "Consistent posting rhythm",
        "Seasonal and event-based planning",
        "Content pipeline visibility"
      ]
    },
    {
      title: "Engaging Carousel Design",
      description: "Create visually appealing multi-slide posts that capture attention and drive higher interaction rates.",
      features: [
        "Hook-driven first slides",
        "Smooth visual transitions",
        "Value-packed storytelling",
        "Strong CTA on final slide"
      ]
    },
    {
      title: "Brand-Aligned Visuals & Messaging",
      description: "Maintain cohesive brand identity through consistent styling, tone, and story-driven content.",
      features: [
        "Consistent color & typography",
        "Voice matching your brand tone",
        "Unified graphic styles",
        "Message aligned with core values"
      ]
    },
    {
      title: "Analytics-Driven Improvements",
      description: "Monitor performance and optimize future carousels based on real engagement data and audience behavior.",
      features: [
        "Track reach & engagement rates",
        "Identify top-performing slides",
        "Refine based on user behavior",
        "A/B test visuals & captions"
      ]
    }
  ];

  return (
    <ServicePageLayout
      title="Content Planning & Carousels"
      hero="Strategic content & carousels designed to boost engagement & brand visibility."
      icon={LayoutGrid}
      sections={sections}
      ctaText="Book an Analytics Review"
    />
  );
};

export default KPITrackingAnalytics;
