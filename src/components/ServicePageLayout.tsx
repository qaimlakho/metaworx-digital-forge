
import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';

interface ServiceSection {
  title: string;
  description: string;
  features: string[];
}

interface ServicePageLayoutProps {
  title: string;
  hero: string;
  icon: React.ComponentType<{ className?: string }>;
  sections: ServiceSection[];
  ctaText: string;
  children?: React.ReactNode;
}

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({
  title,
  hero,
  icon: Icon,
  sections,
  ctaText,
  children
}) => {
  return (
    <div className="min-h-screen bg-white font-satoshi">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/#services" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-satoshi"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-satoshi text-gray-900 mb-6">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-satoshi max-w-4xl mx-auto leading-relaxed">
              {hero}
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <div key={section.title} className="animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <h2 className="text-3xl font-bold font-satoshi text-gray-900 mb-6">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-600 font-satoshi mb-8 leading-relaxed">
                  {section.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-gray-700 font-satoshi">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Content */}
          {children}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-satoshi text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 font-satoshi mb-8">
            Let's discuss how we can help you achieve your goals with {title.toLowerCase()}.
          </p>
          <a
            href="#contact"
            className="bg-white text-primary px-8 py-4 rounded-full font-satoshi font-semibold hover:bg-gray-100 transition-colors inline-block text-lg"
          >
            {ctaText}
          </a>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ServicePageLayout;
