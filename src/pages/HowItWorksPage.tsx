import React from 'react';
import { Star, Gift, Award, TrendingUp, ShoppingCart, CheckCircle } from 'lucide-react';
import { OutlineCard } from '../components/ui/OutlineCard';
import { useNavigate } from 'react-router-dom';

export const HowItWorksPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-deep-eggplant mb-4">How Our Loyalty Program Works</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Earn rewards with every purchase and enjoy exclusive benefits as you shop with us. 
          It's our way of saying thank you for being part of the Kafui's Collections family.
        </p>
      </div>

      {/* How to Earn Points */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-deep-eggplant mb-8 text-center">How to Earn Points</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <OutlineCard className="text-center p-8">
            <div className="bg-gold bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="text-gold" size={32} />
            </div>
            <h3 className="text-lg font-semibold text-deep-eggplant mb-2">1. Shop</h3>
            <p className="text-gray-600">
              Browse our collection and add items to your cart. Every purchase earns you points!
            </p>
          </OutlineCard>

          <OutlineCard className="text-center p-8">
            <div className="bg-gold bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-gold" size={32} />
            </div>
            <h3 className="text-lg font-semibold text-deep-eggplant mb-2">2. Complete Purchase</h3>
            <p className="text-gray-600">
              Complete your payment using Paystack. Points are automatically added to your account.
            </p>
          </OutlineCard>

          <OutlineCard className="text-center p-8">
            <div className="bg-gold bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Star className="text-gold" size={32} />
            </div>
            <h3 className="text-lg font-semibold text-deep-eggplant mb-2">3. Earn Rewards</h3>
            <p className="text-gray-600">
              Earn 1 point for every ₵1 spent. Points are rounded down to the nearest hundred.
            </p>
          </OutlineCard>
        </div>
      </section>

      {/* Points System */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-deep-eggplant mb-8 text-center">Points System</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <OutlineCard className="p-8">
            <div className="flex items-center mb-4">
              <TrendingUp className="text-gold mr-3" size={24} />
              <h3 className="text-xl font-semibold text-deep-eggplant">Earning Points</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Purchase Amount</span>
                <span className="font-semibold text-deep-eggplant">Points Earned</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>₵50</span>
                  <span className="text-royal-plum">0 points</span>
                </div>
                <div className="flex justify-between">
                  <span>₵150</span>
                  <span className="text-royal-plum">100 points</span>
                </div>
                <div className="flex justify-between">
                  <span>₵250</span>
                  <span className="text-royal-plum">200 points</span>
                </div>
                <div className="flex justify-between">
                  <span>₵399</span>
                  <span className="text-royal-plum">300 points</span>
                </div>
              </div>
              <div className="bg-gold bg-opacity-10 p-3 rounded-lg">
                <p className="text-xs text-gray-700">
                  <strong>Note:</strong> Points are rounded down to the nearest hundred. 
                  For example, ₵150 = 100 points, ₵199 = 100 points.
                </p>
              </div>
            </div>
          </OutlineCard>

          <OutlineCard className="p-8">
            <div className="flex items-center mb-4">
              <Gift className="text-gold mr-3" size={24} />
              <h3 className="text-xl font-semibold text-deep-eggplant">Redeeming Points</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Points</span>
                <span className="font-semibold text-deep-eggplant">Discount Value</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>100 points</span>
                  <span className="text-green-600">₵1.00 off</span>
                </div>
                <div className="flex justify-between">
                  <span>500 points</span>
                  <span className="text-green-600">₵5.00 off</span>
                </div>
                <div className="flex justify-between">
                  <span>1,000 points</span>
                  <span className="text-green-600">₵10.00 off</span>
                </div>
                <div className="flex justify-between">
                  <span>2,500 points</span>
                  <span className="text-green-600">₵25.00 off</span>
                </div>
              </div>
              <div className="bg-royal-plum bg-opacity-10 p-3 rounded-lg">
                <p className="text-xs text-gray-700">
                  <strong>Tip:</strong> Use points during checkout to reduce your total. 
                  You can redeem any multiple of 100 points.
                </p>
              </div>
            </div>
          </OutlineCard>
        </div>
      </section>

      {/* Loyalty Tiers */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-deep-eggplant mb-8 text-center">Loyalty Tiers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <OutlineCard className="text-center p-6 border-2 border-gray-300">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="text-orange-600" size={24} />
            </div>
            <h3 className="font-bold text-deep-eggplant mb-2">Bronze</h3>
            <p className="text-sm text-gray-600 mb-3">0 - 499 points</p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• 1 point per ₵1</li>
              <li>• Birthday discount</li>
            </ul>
          </OutlineCard>

          <OutlineCard className="text-center p-6 border-2 border-gray-400">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="text-gray-600" size={24} />
            </div>
            <h3 className="font-bold text-deep-eggplant mb-2">Silver</h3>
            <p className="text-sm text-gray-600 mb-3">500 - 999 points</p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• 1 point per ₵1</li>
              <li>• Birthday discount</li>
              <li>• Early sale access</li>
            </ul>
          </OutlineCard>

          <OutlineCard className="text-center p-6 border-2 border-gold">
            <div className="w-12 h-12 bg-gold bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="text-gold" size={24} />
            </div>
            <h3 className="font-bold text-deep-eggplant mb-2">Gold</h3>
            <p className="text-sm text-gray-600 mb-3">1,000 - 2,499 points</p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• 1.2 points per ₵1</li>
              <li>• All Silver benefits</li>
              <li>• Free shipping</li>
            </ul>
          </OutlineCard>

          <OutlineCard className="text-center p-6 border-2 border-royal-plum">
            <div className="w-12 h-12 bg-royal-plum bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="text-royal-plum" size={24} />
            </div>
            <h3 className="font-bold text-deep-eggplant mb-2">Platinum</h3>
            <p className="text-sm text-gray-600 mb-3">2,500+ points</p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• 1.5 points per ₵1</li>
              <li>• All Gold benefits</li>
              <li>• Personal stylist</li>
              <li>• VIP support</li>
            </ul>
          </OutlineCard>
        </div>
      </section>

      {/* Example Scenario */}
      <section className="mb-16">
        <OutlineCard className="p-8">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-6 text-center">Example: Your First Purchase</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-royal-plum bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-royal-plum font-bold text-xl">₵</span>
              </div>
              <h3 className="font-semibold text-deep-eggplant mb-2">You Spend</h3>
              <p className="text-2xl font-bold text-royal-plum mb-1">₵180</p>
              <p className="text-sm text-gray-600">On trendy clothes</p>
            </div>

            <div className="text-center">
              <div className="bg-gold bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="text-gold" size={24} />
              </div>
              <h3 className="font-semibold text-deep-eggplant mb-2">You Earn</h3>
              <p className="text-2xl font-bold text-gold mb-1">100 Points</p>
              <p className="text-sm text-gray-600">Rounded from 180</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Gift className="text-green-600" size={24} />
              </div>
              <h3 className="font-semibold text-deep-eggplant mb-2">You Can Save</h3>
              <p className="text-2xl font-bold text-green-600 mb-1">₵1.00</p>
              <p className="text-sm text-gray-600">On your next order</p>
            </div>
          </div>
        </OutlineCard>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-deep-eggplant mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <OutlineCard className="p-6">
            <h3 className="font-semibold text-deep-eggplant mb-2">When do I receive my points?</h3>
            <p className="text-gray-700">
              Points are automatically added to your account immediately after a successful payment via Paystack.
            </p>
          </OutlineCard>

          <OutlineCard className="p-6">
            <h3 className="font-semibold text-deep-eggplant mb-2">Do my points expire?</h3>
            <p className="text-gray-700">
              No, your loyalty points never expire! They'll always be available in your account for future use.
            </p>
          </OutlineCard>

          <OutlineCard className="p-6">
            <h3 className="font-semibold text-deep-eggplant mb-2">Can I use points on any order?</h3>
            <p className="text-gray-700">
              Yes, you can redeem points on any order. However, you cannot redeem more points than the order total allows.
            </p>
          </OutlineCard>

          <OutlineCard className="p-6">
            <h3 className="font-semibold text-deep-eggplant mb-2">What happens if I return an item?</h3>
            <p className="text-gray-700">
              If you return an item, the points earned from that purchase will be deducted from your account.
            </p>
          </OutlineCard>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-deep-eggplant mb-4">Ready to Start Earning?</h2>
        <p className="text-gray-600 mb-6">
          Join thousands of satisfied customers who are saving money with our loyalty program.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/auth?mode=signup')}
            className="bg-royal-plum text-white px-8 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate('/catalog')}
            className="border border-royal-plum text-royal-plum px-8 py-3 rounded-xl font-semibold hover:bg-royal-plum hover:text-white transition-colors"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};