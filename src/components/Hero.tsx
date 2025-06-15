
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-satoshi font-medium text-sm mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Digital Growth Agency
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold font-satoshi text-gray-900 mb-6 animate-fade-in">
            Scale Smarter with
            <span className="block text-primary bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Digital Metaworx
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 font-satoshi max-w-3xl mx-auto mb-10 animate-fade-in">
            We help startups, entrepreneurs, and e-commerce brands achieve explosive growth through 
            data-driven digital marketing, SEO mastery, and conversion-focused web development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <a
              href="#contact"
              className="bg-primary text-white px-8 py-4 rounded-full font-satoshi font-semibold text-lg hover:bg-primary/90 transition-all duration-200 flex items-center group"
            >
              Let's Grow Your Brand
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-satoshi font-semibold text-lg hover:border-primary hover:text-primary transition-all duration-200 flex items-center group">
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Our Process
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto text-center animate-fade-in">
            <div>
              <div className="text-3xl font-bold font-satoshi text-primary">150+</div>
              <div className="text-sm text-gray-600 font-satoshi">Brands Scaled</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-satoshi text-primary">2.5M+</div>
              <div className="text-sm text-gray-600 font-satoshi">Revenue Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-satoshi text-primary">98%</div>
              <div className="text-sm text-gray-600 font-satoshi">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-300/20 rounded-full blur-xl animate-pulse"></div>
    </section>
  );
};

export default Hero;
