
import { Target } from 'lucide-react';
import ServicePageLayout from '../../components/ServicePageLayout';

const DigitalMarketing = () => {
  const sections = [
    {
      title: "Multi-Channel Campaigns",
      description: "We create cohesive marketing campaigns that work seamlessly across all digital platforms, ensuring your message reaches your audience wherever they are online.",
      features: [
        "Cross-platform strategy development",
        "Unified brand messaging",
        "Integrated campaign management",
        "Platform-specific content optimization"
      ]
    },
    {
      title: "Performance Tracking",
      description: "Monitor every aspect of your digital marketing performance with comprehensive analytics and real-time reporting that shows exactly what's working.",
      features: [
        "Real-time campaign monitoring",
        "Conversion tracking setup",
        "Custom analytics dashboards",
        "Weekly performance reports"
      ]
    },
    {
      title: "ROI Optimization",
      description: "Maximize your marketing budget with data-driven optimizations that continuously improve your return on investment across all channels.",
      features: [
        "Budget allocation optimization",
        "A/B testing implementation",
        "Cost-per-acquisition reduction",
        "Revenue attribution modeling"
      ]
    },
    {
      title: "Why Digital Metaworx?",
      description: "Our team combines years of experience with cutting-edge tools and strategies to deliver measurable results for growing businesses.",
      features: [
        "Proven track record of success",
        "Dedicated account management",
        "Transparent reporting",
        "Scalable growth strategies"
      ]
    }
  ];

  return (
    <ServicePageLayout
      title="Digital Marketing"
      hero="Comprehensive digital strategies to fuel brand growth across all platforms."
      icon={Target}
      sections={sections}
      ctaText="Book Your Free Strategy Session"
    />
  );
};

export default DigitalMarketing;
