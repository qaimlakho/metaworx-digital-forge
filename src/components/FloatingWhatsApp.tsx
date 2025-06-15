
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "+1234567890"; // Replace with actual WhatsApp number
  const message = "Hi! I'm interested in learning more about Digital Metaworx services. Can we schedule a free strategy session?";

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl border border-gray-100 w-80 animate-scale-in">
          <div className="p-4 bg-green-500 text-white rounded-t-2xl">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="font-satoshi font-semibold">Digital Metaworx</div>
                <div className="text-sm opacity-90">Typically replies instantly</div>
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-sm font-satoshi text-gray-700">
                👋 Hi there! Ready to scale your business? 
              </p>
              <p className="text-sm font-satoshi text-gray-700 mt-2">
                Get your FREE strategy session now!
              </p>
            </div>
            
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-satoshi font-medium transition-colors flex items-center justify-center"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Start WhatsApp Chat
            </button>
            
            <p className="text-xs text-gray-500 font-satoshi text-center mt-2">
              We'll respond within minutes!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingWhatsApp;
