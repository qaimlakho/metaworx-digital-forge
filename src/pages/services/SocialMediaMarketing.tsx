
import { Share2 } from 'lucide-react';
import ServicePageLayout from '../../components/ServicePageLayout';

const SocialMediaMarketing = () => {
  const sections = [
    {
      title: "Content Creation",
      description: "Engaging, scroll-stopping content that captures attention and drives meaningful interactions with your brand across all social platforms.",
      features: [
        "Custom graphic design",
        "Video content creation",
        "Copywriting and captions",
        "Brand-consistent visuals"
      ]
    },
    {
      title: "Community Management",
      description: "Build and nurture an engaged community around your brand with proactive community management and customer engagement.",
      features: [
        "Daily community monitoring",
        "Customer service responses",
        "Engagement strategy implementation",
        "User-generated content curation"
      ]
    },
    {
      title: "Paid Social Ads",
      description: "Targeted advertising campaigns that reach your ideal customers and drive conversions across Facebook, Instagram, TikTok, and LinkedIn.",
      features: [
        "Audience targeting and segmentation",
        "Ad creative development",
        "Campaign optimization",
        "ROI tracking and reporting"
      ]
    },
    {
      title: "Platform Specialization",
      description: "Each social platform requires a unique approach. We tailor our strategies to maximize performance on each platform you use.",
      features: [
        "Instagram growth and engagement",
        "TikTok viral content strategies",
        "Facebook advertising expertise",
        "LinkedIn B2B marketing"
      ]
    }
  ];

  return (
    <ServicePageLayout
      title="Social Media Marketing"
      hero="Build your brand community with scroll-stopping social media content."
      icon={Share2}
      sections={sections}
      ctaText="Get a Custom Social Plan"
    />
  );
};

export default SocialMediaMarketing;
