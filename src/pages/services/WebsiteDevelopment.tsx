
import { Code } from 'lucide-react';
import ServicePageLayout from '../../components/ServicePageLayout';

const WebsiteDevelopment = () => {
  const sections = [
    {
      title: "Mobile-First Design",
      description: "Every website we build prioritizes mobile experience, ensuring your site looks and performs perfectly on all devices and screen sizes.",
      features: [
        "Responsive design implementation",
        "Touch-friendly interfaces",
        "Cross-device compatibility",
        "Progressive web app features"
      ]
    },
    {
      title: "Speed Optimization",
      description: "Lightning-fast loading times that improve user experience, search rankings, and conversion rates through advanced optimization techniques.",
      features: [
        "Image optimization and compression",
        "Code minification and bundling",
        "CDN implementation",
        "Caching strategies"
      ]
    },
    {
      title: "Conversion Tracking",
      description: "Comprehensive analytics and tracking setup that provides insights into user behavior and helps optimize for better conversions.",
      features: [
        "Google Analytics integration",
        "Conversion goal setup",
        "Heat mapping implementation",
        "A/B testing capabilities"
      ]
    },
    {
      title: "Portfolio Samples",
      description: "Our diverse portfolio showcases successful websites across industries, from e-commerce stores to corporate sites.",
      features: [
        "WordPress custom themes",
        "Shopify store developments",
        "Landing page designs",
        "Corporate website builds"
      ]
    }
  ];

  return (
    <ServicePageLayout
      title="Website Development"
      hero="High-converting websites built on WordPress & Shopify."
      icon={Code}
      sections={sections}
      ctaText="Start Your Website Today"
    />
  );
};

export default WebsiteDevelopment;
