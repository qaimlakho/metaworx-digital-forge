
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'Digital Marketing',
    'Google Ads Management',
    'SEO Content Writing',
    'Social Media Marketing',
    'E-commerce Growth',
    'Website Development'
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold font-satoshi text-white mb-4">
              Digital Metaworx
            </h3>
            <p className="text-gray-300 font-satoshi mb-6 leading-relaxed">
              Scale Smarter with Digital Metaworx. We help startups, entrepreneurs, 
              and e-commerce brands achieve explosive growth through proven digital strategies.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1CGsAZ7Qrm/" className="bg-gray-800 hover:bg-primary p-3 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/digitalmetaworx?utm_source=ig_web_button_share_sheet&igsh=Nmk5bzZseXRqdmNm" className="bg-gray-800 hover:bg-primary p-3 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary p-3 rounded-full transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary p-3 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
                <a
                  href="https://wa.me/923303694739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-primary p-3 rounded-full transition-colors"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold font-satoshi text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-300 hover:text-white font-satoshi transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-satoshi text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white font-satoshi transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className="text-gray-300 hover:text-white font-satoshi transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white font-satoshi transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold font-satoshi text-white mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300 font-satoshi">digitalmetaworx@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300 font-satoshi">+92-(330)-3694739</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300 font-satoshi">Karachi, Pakistan</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <a
                href="#contact"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-satoshi font-medium transition-colors inline-block"
              >
                Free Strategy Call
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-satoshi text-sm">
              © 2024 Digital Metaworx. All rights reserved.
            </p>
            
            <button
              onClick={scrollToTop}
              className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors mt-4 md:mt-0"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
