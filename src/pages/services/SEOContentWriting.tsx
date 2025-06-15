
import { PenTool } from 'lucide-react';
import ServicePageLayout from '../../components/ServicePageLayout';

const SEOContentWriting = () => {
  const sections = [
    {
      title: "Keyword Optimization",
      description: "Strategic keyword placement and optimization that helps your content rank higher in search results while maintaining natural readability.",
      features: [
        "Primary and secondary keyword integration",
        "Long-tail keyword targeting",
        "Semantic keyword research",
        "Search intent optimization"
      ]
    },
    {
      title: "Content Strategy",
      description: "Comprehensive content planning that aligns with your business goals and audience needs while supporting your overall SEO strategy.",
      features: [
        "Content calendar development",
        "Topic cluster creation",
        "Competitor content analysis",
        "Content gap identification"
      ]
    },
    {
      title: "Technical SEO",
      description: "Behind-the-scenes optimization that ensures your content is properly structured and easily discoverable by search engines.",
      features: [
        "Meta tag optimization",
        "Header structure implementation",
        "Internal linking strategy",
        "Schema markup integration"
      ]
    },
    {
      title: "Content Samples",
      description: "Our portfolio showcases diverse content types that have helped businesses improve their search rankings and engage their audiences.",
      features: [
        "Blog posts and articles",
        "Product descriptions",
        "Landing page copy",
        "Technical documentation"
      ]
    }
  ];

  return (
    <ServicePageLayout
      title="SEO Content Writing"
      hero="SEO-optimized content that climbs search engines and converts traffic."
      icon={PenTool}
      sections={sections}
      ctaText="Request a Free SEO Audit"
    />
  );
};

export default SEOContentWriting;
