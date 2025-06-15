
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const services = [
    'Digital Marketing',
    'Google Ads Management',
    'SEO Content Writing',
    'Social Media Marketing',
    'E-commerce Growth',
    'Website Development',
    'Full Growth Package'
  ];

  const budgetRanges = [
    '$1,000 - $5,000/month',
    '$5,000 - $10,000/month',
    '$10,000 - $25,000/month',
    '$25,000+ /month'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-satoshi text-gray-900 mb-6">
            Let's <span className="text-primary">Grow Together</span>
          </h2>
          <p className="text-xl text-gray-600 font-satoshi max-w-3xl mx-auto">
            Ready to scale your business? Get your free strategy session and discover 
            how we can help you achieve explosive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-satoshi text-gray-900 mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 font-satoshi text-lg leading-relaxed mb-8">
                Whether you're a startup looking to make your mark or an established 
                business ready to scale, we're here to help you achieve your goals.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-satoshi font-semibold text-gray-900">Email Us</div>
                  <div className="text-gray-600 font-satoshi">hello@digitalmetaworx.com</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-satoshi font-semibold text-gray-900">Call Us</div>
                  <div className="text-gray-600 font-satoshi">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-satoshi font-semibold text-gray-900">Visit Us</div>
                  <div className="text-gray-600 font-satoshi">San Francisco, CA</div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100">
              <h4 className="font-satoshi font-bold text-gray-900 mb-4">Why Choose Digital Metaworx?</h4>
              <ul className="space-y-3">
                {[
                  'Free strategy session & audit',
                  'Proven track record of success',
                  'Transparent reporting & communication',
                  'Dedicated account management',
                  'ROI-focused approach'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600 font-satoshi">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-satoshi font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-satoshi"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-satoshi font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-satoshi"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-satoshi font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-satoshi"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-satoshi font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-satoshi"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-satoshi font-semibold text-gray-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-satoshi"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-satoshi font-semibold text-gray-700 mb-2">
                    Monthly Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-satoshi"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-satoshi font-semibold text-gray-700 mb-2">
                  Tell Us About Your Goals
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-satoshi resize-none"
                  placeholder="Describe your business goals and how we can help you achieve them..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-primary text-white px-8 py-4 rounded-lg font-satoshi font-semibold text-lg hover:bg-primary/90 transition-colors flex items-center justify-center group disabled:opacity-50"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Get My Free Strategy Session
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-sm text-gray-500 font-satoshi text-center">
                We'll respond within 24 hours with your personalized growth plan.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
