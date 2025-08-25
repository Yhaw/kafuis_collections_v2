import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-eggplant text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <img
              src="/src/assets/brand/LOGO-7@3x-8.png"
              alt="Kafui's Collections"
              className="h-10 w-auto mb-4"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTUwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI3NSIgeT0iMjQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxNiIgZmlsbD0id2hpdGUiPktBRlVJJ1MgQ09MTEVDVE9OUzwvdGV4dD4KPC9zdmc+';
              }}
            />
            <p className="text-gray-300 mb-4 max-w-md">
              Ghana's premier destination for quality thrift fashion. From babies to adults, 
              we believe style shouldn't break the bank. Discover pre-loved treasures with 
              love left to give.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/catalog" className="block text-gray-300 hover:text-white transition-colors">
                Shop All
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/loyalty" className="block text-gray-300 hover:text-white transition-colors">
                Loyalty Program
              </Link>
              <Link to="/size-guide" className="block text-gray-300 hover:text-white transition-colors">
                Size Guide
              </Link>
              <Link to="/shipping" className="block text-gray-300 hover:text-white transition-colors">
                Shipping & Returns
              </Link>
            </div>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-semibold mb-4 text-gold">Customer Care</h3>
            <div className="space-y-2">
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
              <Link to="/faqs" className="block text-gray-300 hover:text-white transition-colors">
                FAQs
              </Link>
              <Link to="/how-it-works" className="block text-gray-300 hover:text-white transition-colors">
                How It Works
              </Link>
              <Link to="/privacy" className="block text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-600 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center text-gray-300">
              <Mail size={18} className="mr-2 text-gold" />
              hello@kafuiscollections.com
            </div>
            <div className="flex items-center text-gray-300">
              <Phone size={18} className="mr-2 text-gold" />
              +233 24 123 4567
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin size={18} className="mr-2 text-gold" />
              Accra, Ghana
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Kafui's Collections. All rights reserved. Made with ❤️ in Ghana.</p>
        </div>
      </div>
    </footer>
  );
};