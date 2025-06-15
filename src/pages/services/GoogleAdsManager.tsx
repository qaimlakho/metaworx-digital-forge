
import { Search } from 'lucide-react';
import ServicePageLayout from '../../components/ServicePageLayout';

const GoogleAdsManager = () => {
  const sections = [
    {
      title: "Campaign Optimization",
      description: "We continuously refine your Google Ads campaigns to improve performance, reduce costs, and maximize your return on ad spend.",
      features: [
        "Bid strategy optimization",
        "Ad copy testing and refinement",
        "Landing page alignment",
        "Quality score improvements"
      ]
    },
    {
      title: "Keyword Research",
      description: "Discover high-converting keywords that your competitors are missing with our comprehensive keyword research and analysis.",
      features: [
        "High-intent keyword identification",
        "Negative keyword optimization",
        "Search volume analysis",
        "Competitor keyword gaps"
      ]
    },
    {
      title: "A/B Testing",
      description: "Systematic testing of ad elements to identify the highest-performing combinations and continuously improve campaign results.",
      features: [
        "Ad copy split testing",
        "Landing page variations",
        "Audience segment testing",
        "Bid strategy comparisons"
      ]
    },
    {
      title: "Results We've Achieved",
      description: "Our Google Ads management has helped businesses achieve significant growth and improved ROI across various industries.",
      features: [
        "Average 300% increase in qualified leads",
        "50% reduction in cost-per-click",
        "200% improvement in conversion rates",
        "85% client retention rate"
      ]
    }
  ];

  return (
    <ServicePageLayout
      title="Google Ads Manager"
      hero="Maximize your ad spend with expert Google Ads management."
      icon={Search}
      sections={sections}
      ctaText="Let's Launch Your Next Campaign"
    />
  );
};

export default GoogleAdsManager;
