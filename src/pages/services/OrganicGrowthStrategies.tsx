
import { TrendingUp } from 'lucide-react';
import ServicePageLayout from '../../components/ServicePageLayout';

const OrganicGrowthStrategies = () => {
  const sections = [
    {
      title: "Growth Hacking",
      description: "Innovative, data-driven techniques that identify and exploit growth opportunities using creative, low-cost methods that scale rapidly.",
      features: [
        "Viral loop implementation",
        "Product-led growth strategies",
        "User acquisition funnels",
        "Growth experiment design"
      ]
    },
    {
      title: "Viral Marketing",
      description: "Create content and campaigns that naturally spread through social sharing, word-of-mouth, and community engagement.",
      features: [
        "Viral content strategy",
        "Influencer collaboration",
        "Community building tactics",
        "Shareability optimization"
      ]
    },
    {
      title: "Referral Systems",
      description: "Develop and implement referral programs that turn your satisfied customers into active brand advocates and lead generators.",
      features: [
        "Incentive program design",
        "Referral tracking systems",
        "Automated follow-up sequences",
        "Performance analytics"
      ]
    },
    {
      title: "Real Examples",
      description: "Our organic growth strategies have helped businesses achieve remarkable growth without massive advertising budgets.",
      features: [
        "450% increase in organic traffic",
        "300% growth in referral sign-ups",
        "200% improvement in viral coefficient",
        "Zero-cost customer acquisition"
      ]
    }
  ];

  return (
    <ServicePageLayout
      title="Organic Growth Strategies"
      hero="Sustainable, viral, and cost-free growth methods that work."
      icon={TrendingUp}
      sections={sections}
      ctaText="Let's Build Viral Momentum"
    />
  );
};

export default OrganicGrowthStrategies;
