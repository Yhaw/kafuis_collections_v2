import React from 'react';
import { Truck, MapPin, Clock, Package, RefreshCw, Shield } from 'lucide-react';
import { OutlineCard } from '../components/ui/OutlineCard';
import { ghanaRegions } from '../data/ghanaRegions';

export const ShippingPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="bg-gold bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center">
            <Truck className="text-gold" size={32} />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-deep-eggplant mb-4">Shipping & Returns</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Fast, reliable delivery across Ghana with easy returns. We're committed to getting your items to you safely and on time.
        </p>
      </div>

      {/* Shipping Information */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-deep-eggplant mb-8 text-center">Shipping Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <OutlineCard className="p-6">
            <div className="flex items-center mb-4">
              <MapPin className="text-gold mr-3" size={24} />
              <h3 className="text-lg font-semibold text-deep-eggplant">Delivery Areas</h3>
            </div>
            <p className="text-gray-700 mb-4">
              We deliver to all 16 regions of Ghana with reliable local and national courier services.
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {ghanaRegions.slice(0, 8).map((region, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-gold rounded-full mr-2" />
                  <span className="text-gray-700">{region}</span>
                </div>
              ))}
            </div>
            <button className="text-royal-plum text-sm font-medium mt-2 hover:text-opacity-80">
              View all regions
            </button>
          </OutlineCard>

          <OutlineCard className="p-6">
            <div className="flex items-center mb-4">
              <Clock className="text-gold mr-3" size={24} />
              <h3 className="text-lg font-semibold text-deep-eggplant">Delivery Times</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Greater Accra</span>
                <span className="font-medium text-deep-eggplant">1-2 days</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Ashanti, Central, Eastern</span>
                <span className="font-medium text-deep-eggplant">2-3 days</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Other regions</span>
                <span className="font-medium text-deep-eggplant">3-5 days</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-gold bg-opacity-10 rounded-lg">
              <p className="text-xs text-gray-700">
                <strong>Note:</strong> Delivery times may vary during peak seasons and holidays.
              </p>
            </div>
          </OutlineCard>
        </div>

        {/* Shipping Costs */}
        <OutlineCard className="p-6">
          <div className="flex items-center mb-6">
            <div className="bg-gold bg-opacity-10 rounded-full w-8 h-8 flex items-center justify-center mr-3">
              <span className="text-gold font-bold">₵</span>
            </div>
            <h3 className="text-lg font-semibold text-deep-eggplant">Shipping Costs</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 border border-green-200 rounded-lg bg-green-50">
              <div className="text-2xl font-bold text-green-600 mb-2">FREE</div>
              <div className="font-medium text-deep-eggplant mb-1">Greater Accra</div>
              <div className="text-sm text-gray-600">Orders over ₵100</div>
            </div>

            <div className="text-center p-4 border border-blue-200 rounded-lg bg-blue-50">
              <div className="text-2xl font-bold text-blue-600 mb-2">₵15</div>
              <div className="font-medium text-deep-eggplant mb-1">Near Regions</div>
              <div className="text-sm text-gray-600">Ashanti, Central, Eastern</div>
            </div>

            <div className="text-center p-4 border border-orange-200 rounded-lg bg-orange-50">
              <div className="text-2xl font-bold text-orange-600 mb-2">₵25</div>
              <div className="font-medium text-deep-eggplant mb-1">Far Regions</div>
              <div className="text-sm text-gray-600">Northern, Upper regions</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-royal-plum bg-opacity-10 rounded-lg">
            <h4 className="font-semibold text-deep-eggplant mb-2">💡 Free Shipping Tips:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Add items to reach ₵100 for free delivery in Accra</li>
              <li>• Combine multiple items in one order to save on shipping</li>
              <li>• Follow our social media for free shipping promotions</li>
            </ul>
          </div>
        </OutlineCard>
      </section>

      {/* Order Processing */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-deep-eggplant mb-8 text-center">Order Processing</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="bg-royal-plum bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <span className="text-royal-plum font-bold">1</span>
            </div>
            <h4 className="font-semibold text-deep-eggplant mb-2">Order Placed</h4>
            <p className="text-xs text-gray-600">Order confirmed and payment processed</p>
          </div>

          <div className="text-center">
            <div className="bg-royal-plum bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <span className="text-royal-plum font-bold">2</span>
            </div>
            <h4 className="font-semibold text-deep-eggplant mb-2">Processing</h4>
            <p className="text-xs text-gray-600">Items picked and carefully packaged</p>
          </div>

          <div className="text-center">
            <div className="bg-royal-plum bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <span className="text-royal-plum font-bold">3</span>
            </div>
            <h4 className="font-semibold text-deep-eggplant mb-2">Shipped</h4>
            <p className="text-xs text-gray-600">Package handed to courier with tracking</p>
          </div>

          <div className="text-center">
            <div className="bg-royal-plum bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <span className="text-royal-plum font-bold">4</span>
            </div>
            <h4 className="font-semibold text-deep-eggplant mb-2">Delivered</h4>
            <p className="text-xs text-gray-600">Package delivered to your address</p>
          </div>
        </div>
      </section>

      {/* Returns Policy */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-deep-eggplant mb-8 text-center">Returns & Exchanges</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <OutlineCard className="p-6">
            <div className="flex items-center mb-4">
              <RefreshCw className="text-gold mr-3" size={24} />
              <h3 className="text-lg font-semibold text-deep-eggplant">7-Day Return Policy</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Not satisfied with your purchase? We offer a hassle-free 7-day return policy from the date of delivery.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                <span className="text-sm text-gray-700">Items must be in original condition</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                <span className="text-sm text-gray-700">Tags and labels must be attached</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                <span className="text-sm text-gray-700">Original packaging preferred</span>
              </div>
            </div>
          </OutlineCard>

          <OutlineCard className="p-6">
            <div className="flex items-center mb-4">
              <Package className="text-gold mr-3" size={24} />
              <h3 className="text-lg font-semibold text-deep-eggplant">How to Return</h3>
            </div>
            <div className="space-y-3">
              <div className="flex">
                <div className="bg-royal-plum text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                  1
                </div>
                <div>
                  <div className="font-medium text-deep-eggplant">Contact Us</div>
                  <div className="text-sm text-gray-600">Email us within 7 days of delivery</div>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-royal-plum text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                  2
                </div>
                <div>
                  <div className="font-medium text-deep-eggplant">Get Authorization</div>
                  <div className="text-sm text-gray-600">Receive return authorization and instructions</div>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-royal-plum text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                  3
                </div>
                <div>
                  <div className="font-medium text-deep-eggplant">Ship Back</div>
                  <div className="text-sm text-gray-600">Send items using our prepaid label</div>
                </div>
              </div>
            </div>
          </OutlineCard>
        </div>

        {/* Return Conditions */}
        <OutlineCard className="p-6 mt-8">
          <h3 className="text-lg font-semibold text-deep-eggplant mb-4">Important Return Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-deep-eggplant mb-2 text-green-600">✅ Returnable Items</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Clothing in original condition</li>
                <li>• Shoes with original packaging</li>
                <li>• Bags and accessories unused</li>
                <li>• Items with tags attached</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-deep-eggplant mb-2 text-red-600">❌ Non-Returnable Items</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Underwear and swimwear (hygiene)</li>
                <li>• Items damaged by customer</li>
                <li>• Items without original tags</li>
                <li>• Personalized or altered items</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-deep-eggplant mb-2">💰 Refund Processing</h4>
            <p className="text-sm text-gray-700">
              Refunds are processed within 3-5 business days after we receive and inspect your returned items. 
              Money will be refunded to your original payment method.
            </p>
          </div>
        </OutlineCard>
      </section>

      {/* Quality Assurance */}
      <section className="mb-12">
        <OutlineCard className="p-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-gold bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center">
                <Shield className="text-gold" size={32} />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-deep-eggplant mb-4">Quality Assurance</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Every item goes through our strict quality control process before shipping. We inspect for 
              condition, authenticity, and cleanliness to ensure you receive only the best pieces.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-royal-plum bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-royal-plum text-xl">🔍</span>
                </div>
                <h4 className="font-semib text-deep-eggplant mb-1">Thorough Inspection</h4>
                <p className="text-xs text-gray-600">Each item checked for quality and condition</p>
              </div>
              
              <div className="text-center">
                <div className="bg-royal-plum bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-royal-plum text-xl">✨</span>
                </div>
                <h4 className="font-semibold text-deep-eggplant mb-1">Professional Cleaning</h4>
                <p className="text-xs text-gray-600">Items cleaned and sanitized before listing</p>
              </div>
              
              <div className="text-center">
                <div className="bg-royal-plum bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-royal-plum text-xl">📦</span>
                </div>
                <h4 className="font-semibold text-deep-eggplant mb-1">Careful Packaging</h4>
                <p className="text-xs text-gray-600">Items packaged with care to prevent damage</p>
              </div>
            </div>
          </div>
        </OutlineCard>
      </section>

      {/* Contact for Support */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-deep-eggplant mb-4">Need Help with Shipping or Returns?</h2>
        <p className="text-gray-600 mb-6">
          Our customer service team is here to assist you with any shipping or return questions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.href = '/contact'}
            className="bg-royal-plum text-white px-8 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors"
          >
            Contact Support
          </button>
          <button
            onClick={() => window.location.href = 'tel:+233241234567'}
            className="border border-royal-plum text-royal-plum px-8 py-3 rounded-xl font-semibold hover:bg-royal-plum hover:text-white transition-colors"
          >
            Call Us: +233 24 123 4567
          </button>
        </div>
      </div>
    </div>
  );
};