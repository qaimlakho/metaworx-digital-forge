import ontrendImg from "@/assets/portfolio/ontrend.png";
import koreanImg from "@/assets/portfolio/korean-skin-care.png";
import { ExternalLink, TrendingUp, DollarSign, Users } from 'lucide-react';

const Portfolio = () => {
  const cases = [
    {
      title: "E-commerce Fashion Brand",
      category: "E-commerce Growth",
      image: ontrendImg,
      link: "https://www.instagram.com/ontrend.pk_?utm_source=ig_web_button_share_sheet&igsh=MWF4M2YxYW16M3RnZQ==",
      results: [
        { label: "Revenue Growth", value: "+340%", icon: DollarSign },
        { label: "Traffic Increase", value: "+250%", icon: TrendingUp },
        { label: "Customer Base", value: "+180%", icon: Users }
      ],
      description: "Complete e-commerce transformation including store optimization, SEO, and meta advertising campaigns.",
      tags: ["Meta Ads", "SEO", "Organic Growth", "Social Media"]
    },
    {
      title: "Skincare Startup Launch",
      category: "Digital Marketing",
      image: koreanImg,
      link: "https://www.koreanskinscare.com",
      results: [
        { label: "Lead Generation", value: "+420%", icon: TrendingUp },
        { label: "Conversion Rate", value: "+85%", icon: DollarSign },
        { label: "Brand Awareness", value: "+300%", icon: Users }
      ],
      description: "Full digital marketing strategy for Skincare startup from zero to market leadership position.",
      tags: ["Content Marketing", "Google Ads", "Social Media", "SEO"]
    },
    {
      title: "Amazon Wholesale Business Expansion",
      category: "Amazon PPC",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      link: "https://www.instagram.com/amazonfastservices.pk?igsh=bmsyeW85YTFwZ2M4",
      results: [
        { label: "Local Rankings", value: "#1 Position", icon: TrendingUp },
        { label: "Phone Calls", value: "+280%", icon: DollarSign },
        { label: "Foot Traffic", value: "+150%", icon: Users }
      ],
      description: "Scale your Amazon wholesale business with proven strategies, automation, and global reach.",
      tags: ["Local SEO", "Google My Business", "Facebook Ads", "Website"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-satoshi text-gray-900 mb-6">
            Portfolio <span className="text-primary">Highlights</span>
          </h2>
          <p className="text-xl text-gray-600 font-satoshi max-w-3xl mx-auto">
            Explore how we’ve crafted powerful digital solutions for ambitious 
            brands — from websites and online stores to high-performing ad campaigns.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="space-y-12">
          {cases.map((caseStudy, index) => (
            <div 
              key={caseStudy.title}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative group overflow-hidden rounded-2xl">
                  <a href={caseStudy.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-satoshi font-medium inline-block mb-4">
                  {caseStudy.category}
                </div>
                
                <h3 className="text-3xl font-bold font-satoshi text-gray-900 mb-4">
                  {caseStudy.title}
                </h3>
                
                <p className="text-gray-600 font-satoshi text-lg mb-6 leading-relaxed">
                  {caseStudy.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {caseStudy.results.map((result, idx) => (
                    <div key={idx} className="text-center p-4 bg-white rounded-xl border border-gray-100">
                      <result.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold font-satoshi text-gray-900 mb-1">
                        {result.value}
                      </div>
                      <div className="text-sm text-gray-600 font-satoshi">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {caseStudy.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-satoshi"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="text-primary font-satoshi font-semibold hover:text-primary/80 transition-colors">
                  Read Full Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold font-satoshi text-gray-900 mb-4">
            Ready to Be Our Next Success Story?
          </h3>
          <p className="text-lg text-gray-600 font-satoshi mb-8 max-w-2xl mx-auto">
            Join the growing list of businesses that have achieved remarkable results with our proven strategies.
          </p>
          <a
            href="#contact"
            className="bg-primary text-white px-8 py-4 rounded-full font-satoshi font-semibold text-lg hover:bg-primary/90 transition-colors inline-block"
          >
            Start Your Success Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
