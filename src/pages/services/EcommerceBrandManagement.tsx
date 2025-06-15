
import { ShoppingCart } from 'lucide-react';
import ServicePageLayout from '../../components/ServicePageLayout';

const EcommerceBrandManagement = () => {
  const sections = [
    {
      title: "Store Optimization",
      description: "Comprehensive optimization of your e-commerce store to improve user experience, increase conversions, and maximize revenue per visitor.",
      features: [
        "Conversion rate optimization",
        "User experience improvements",
        "Mobile responsiveness",
        "Page speed optimization"
      ]
    },
    {
      title: "Product Positioning",
      description: "Strategic product positioning that differentiates your brand in the marketplace and communicates value to your target customers.",
      features: [
        "Competitive analysis",
        "Value proposition development",
        "Pricing strategy optimization",
        "Brand messaging alignment"
      ]
    },
    {
      title: "Sales Funnels",
      description: "Design and implement high-converting sales funnels that guide customers from awareness to purchase and beyond.",
      features: [
        "Customer journey mapping",
        "Funnel optimization",
        "Abandoned cart recovery",
        "Upselling and cross-selling"
      ]
    },
    {
      title: "Case Studies",
      description: "Our e-commerce management has transformed businesses, helping them scale from startup to market leader.",
      features: [
        "10x revenue growth in 8 months",
        "50% increase in average order value",
        "40% reduction in cart abandonment",
        "300% improvement in customer lifetime value"
      ]
    }
  ];

  return (
    <ServicePageLayout
      title="E-commerce Brand Management"
      hero="All-in-one management for fast-scaling e-commerce brands."
      icon={ShoppingCart}
      sections={sections}
      ctaText="Scale My Brand Now"
    />
  );
};

export default EcommerceBrandManagement;
