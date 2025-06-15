
import { BarChart3 } from 'lucide-react';
import ServicePageLayout from '../../components/ServicePageLayout';

const KPITrackingAnalytics = () => {
  const sections = [
    {
      title: "Custom Dashboards",
      description: "Tailored analytics dashboards that display the metrics that matter most to your business, providing clear visibility into performance.",
      features: [
        "Real-time data visualization",
        "Customizable KPI displays",
        "Automated reporting",
        "Multi-platform integration"
      ]
    },
    {
      title: "Performance Metrics",
      description: "Track and analyze the key performance indicators that directly impact your business growth and help you make data-driven decisions.",
      features: [
        "Revenue and conversion tracking",
        "Customer acquisition costs",
        "Lifetime value calculations",
        "ROI measurement across channels"
      ]
    },
    {
      title: "Growth Insights",
      description: "Transform raw data into actionable insights that reveal growth opportunities and guide strategic business decisions.",
      features: [
        "Trend analysis and forecasting",
        "Cohort analysis",
        "Attribution modeling",
        "Competitive benchmarking"
      ]
    },
    {
      title: "Sample Dashboards",
      description: "Our analytics solutions provide clear, actionable insights that help businesses understand their performance and growth opportunities.",
      features: [
        "Executive summary dashboards",
        "Marketing performance tracking",
        "Sales funnel analysis",
        "Customer behavior insights"
      ]
    }
  ];

  return (
    <ServicePageLayout
      title="KPI Tracking & Analytics"
      hero="Unlock the power of data to scale smarter and faster."
      icon={BarChart3}
      sections={sections}
      ctaText="Book an Analytics Review"
    />
  );
};

export default KPITrackingAnalytics;
