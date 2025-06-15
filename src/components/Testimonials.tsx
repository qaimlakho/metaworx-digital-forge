
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Solutions",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c",
      content: "Digital Metaworx transformed our online presence completely. Within 6 months, we saw a 300% increase in qualified leads and our revenue doubled. Their team understands growth like no other agency we've worked with.",
      rating: 5,
      results: "300% lead increase"
    },
    {
      name: "Michael Chen",
      company: "EcoLiving Store",
      role: "E-commerce Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      content: "The e-commerce expertise at Digital Metaworx is unmatched. They optimized our Shopify store, improved our Google Ads performance, and helped us scale from $50K to $500K monthly revenue in just 8 months.",
      rating: 5,
      results: "10x revenue growth"
    },
    {
      name: "Emily Rodriguez",
      company: "Fitness Pro Academy",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      content: "Their SEO and content marketing strategies are phenomenal. We went from page 3 to ranking #1 for our main keywords, and our organic traffic increased by 450%. The ROI has been incredible.",
      rating: 5,
      results: "450% traffic boost"
    },
    {
      name: "David Wilson",
      company: "Local Home Services",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      content: "As a local business, I was skeptical about digital marketing. Digital Metaworx proved me wrong. They dominated our local SEO, and now we're booked 3 months in advance. Best investment I've ever made.",
      rating: 5,
      results: "3-month waitlist"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-satoshi text-gray-900 mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 font-satoshi max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real business owners say 
            about their experience working with Digital Metaworx.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Client Photo */}
              <div className="lg:w-1/3">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg"
                  />
                  <div className="absolute -top-4 -right-4 bg-primary text-white p-3 rounded-full">
                    <Quote className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-2/3 text-center lg:text-left">
                {/* Stars */}
                <div className="flex justify-center lg:justify-start mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl text-gray-700 font-satoshi leading-relaxed mb-6">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Client Info */}
                <div className="mb-4">
                  <div className="text-xl font-bold font-satoshi text-gray-900">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-primary font-satoshi font-medium">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-gray-600 font-satoshi">
                    {testimonials[currentIndex].company}
                  </div>
                </div>

                {/* Results Badge */}
                <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full font-satoshi font-medium">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  {testimonials[currentIndex].results}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold font-satoshi text-primary mb-2">4.9/5</div>
            <div className="text-gray-600 font-satoshi">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold font-satoshi text-primary mb-2">150+</div>
            <div className="text-gray-600 font-satoshi">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold font-satoshi text-primary mb-2">95%</div>
            <div className="text-gray-600 font-satoshi">Client Retention</div>
          </div>
          <div>
            <div className="text-4xl font-bold font-satoshi text-primary mb-2">24/7</div>
            <div className="text-gray-600 font-satoshi">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
