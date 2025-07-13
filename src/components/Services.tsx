
import { 
  Search, 
  Target, 
  PenTool, 
  Share2, 
  TrendingUp, 
  ShoppingCart, 
  Code, 
  LayoutGrid  
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Digital Marketing",
      description: "Comprehensive digital strategies that drive traffic, engagement, and conversions across all channels.",
      features: ["Multi-channel campaigns", "Performance tracking", "ROI optimization"],
      link: "/services/digital-marketing"
    },
    {
      icon: Search,
      title: "Google Ads Manager",
      description: "Expert Google Ads management that maximizes your ad spend and delivers qualified leads.",
      features: ["Campaign optimization", "Keyword research", "A/B testing"],
      link: "/services/google-ads-manager"
    },
    {
      icon: PenTool,
      title: "SEO Content Writing",
      description: "High-quality, SEO-optimized content that ranks high and converts visitors into customers.",
      features: ["Keyword optimization", "Content strategy", "Technical SEO"],
      link: "/services/seo-content-writing"
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Engaging social media strategies that build communities and drive brand awareness.",
      features: ["Content creation", "Community management", "Paid social ads"],
      link: "/services/social-media-marketing"
    },
    {
      icon: TrendingUp,
      title: "Organic Growth Strategies",
      description: "Sustainable growth tactics that build long-term success without paid advertising.",
      features: ["Growth hacking", "Viral marketing", "Referral systems"],
      link: "/services/organic-growth-strategies"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Brand Management",
      description: "Complete e-commerce solutions from store setup to scaling your online business.",
      features: ["Store optimization", "Product positioning", "Sales funnels"],
      link: "/services/ecommerce-brand-management"
    },
    {
      icon: Code,
      title: "Website Development",
      description: "Modern, fast-loading websites built with WordPress & Shopify for maximum conversions.",
      features: ["Mobile-first design", "Speed optimization", "Conversion tracking"],
      link: "/services/website-development"
    },
    {
      icon: LayoutGrid,
      title: "Content Planning & Carousels",
      description: "Strategic content & carousels designed to boost engagement & brand visibility.",
      features: ["Social media content calendars", "Carousel design & copywriting", "Engagement optimization"],
      link: "/services/kpi-tracking-analytics"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-satoshi text-gray-900 mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-gray-600 font-satoshi max-w-3xl mx-auto">
            From digital marketing to web development, we provide comprehensive solutions 
            to scale your business and maximize your online presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold font-satoshi text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 font-satoshi mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500 font-satoshi">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <Link 
                to={service.link}
                className="text-primary font-satoshi font-medium text-sm hover:text-primary/80 transition-colors inline-flex items-center"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold font-satoshi mb-4">
              Ready to Scale Your Business?
            </h3>
            <p className="text-lg font-satoshi mb-6 opacity-90">
              Let's discuss how our services can help you achieve your growth goals.
            </p>
            <a
              href="#contact"
              className="bg-white text-primary px-8 py-3 rounded-full font-satoshi font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Get Your Free Strategy Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
