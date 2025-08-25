import React from 'react';
import { Gift, Star, Award, TrendingUp, ArrowRight } from 'lucide-react';
import { OutlineCard } from '../components/ui/OutlineCard';
import { useAuthStore } from '../stores/useAuthStore';
import { useLoyaltyStore } from '../stores/useLoyaltyStore';
import { useNavigate } from 'react-router-dom';

export const LoyaltyPage: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuthStore();
  const { getTransactionHistory } = useLoyaltyStore();

  const transactions = getTransactionHistory();

  const loyaltyTiers = [
    { name: 'Bronze', min: 0, max: 499, benefits: ['1 point per ₵1', 'Birthday discount'] },
    { name: 'Silver', min: 500, max: 999, benefits: ['1 point per ₵1', 'Birthday discount', 'Early access to sales'] },
    { name: 'Gold', min: 1000, max: 2499, benefits: ['1.2 points per ₵1', 'Birthday discount', 'Early access', 'Free shipping'] },
    { name: 'Platinum', min: 2500, max: Infinity, benefits: ['1.5 points per ₵1', 'All Gold benefits', 'Personal stylist', 'VIP support'] },
  ];

  const getCurrentTier = (points: number) => {
    return loyaltyTiers.find(tier => points >= tier.min && points <= tier.max) || loyaltyTiers[0];
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB');
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-16">
          <Gift className="mx-auto text-gold mb-4" size={64} />
          <h1 className="text-3xl font-bold text-deep-eggplant mb-4">Join Our Loyalty Program</h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Earn points with every purchase and unlock exclusive rewards. 
            Start your journey to amazing savings today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/auth?mode=signup')}
              className="bg-royal-plum text-white px-8 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors"
            >
              Sign Up Now
            </button>
            <button
              onClick={() => navigate('/auth')}
              className="border border-royal-plum text-royal-plum px-8 py-3 rounded-xl font-semibold hover:bg-royal-plum hover:text-white transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>

        {/* How It Works */}
        <section className="py-16">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <OutlineCard className="text-center p-8">
              <div className="bg-gold bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="text-gold" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-deep-eggplant mb-2">Earn Points</h3>
              <p className="text-gray-600">Get 1 point for every ₵1 spent on your purchases</p>
            </OutlineCard>

            <OutlineCard className="text-center p-8">
              <div className="bg-gold bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="text-gold" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-deep-eggplant mb-2">Unlock Tiers</h3>
              <p className="text-gray-600">Advance through Bronze, Silver, Gold, and Platinum levels</p>
            </OutlineCard>

            <OutlineCard className="text-center p-8">
              <div className="bg-gold bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Gift className="text-gold" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-deep-eggplant mb-2">Redeem Rewards</h3>
              <p className="text-gray-600">Convert 100 points to ₵1 discount on future orders</p>
            </OutlineCard>
          </div>
        </section>
      </div>
    );
  }

  const currentTier = getCurrentTier(user?.loyaltyPoints || 0);
  const nextTier = loyaltyTiers.find(tier => tier.min > (user?.loyaltyPoints || 0));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-deep-eggplant mb-8">Loyalty Wallet</h1>

      {/* Points Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <OutlineCard className="text-center p-6">
          <div className="text-3xl font-bold text-royal-plum mb-2">
            {user?.loyaltyPoints || 0}
          </div>
          <div className="text-gray-600">Total Points</div>
        </OutlineCard>

        <OutlineCard className="text-center p-6">
          <div className="text-3xl font-bold text-gold mb-2">
            ₵{Math.floor((user?.loyaltyPoints || 0) / 100)}
          </div>
          <div className="text-gray-600">Available Discount</div>
        </OutlineCard>

        <OutlineCard className="text-center p-6">
          <div className="text-xl font-bold text-deep-eggplant mb-2 capitalize">
            {currentTier.name}
          </div>
          <div className="text-gray-600">Current Tier</div>
        </OutlineCard>
      </div>

      {/* Progress to Next Tier */}
      {nextTier && (
        <OutlineCard className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-deep-eggplant">
              Progress to {nextTier.name}
            </h3>
            <span className="text-sm text-gray-600">
              {user?.loyaltyPoints || 0} / {nextTier.min} points
            </span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div
              className="bg-gold h-3 rounded-full transition-all duration-300"
              style={{
                width: `${Math.min(100, ((user?.loyaltyPoints || 0) / nextTier.min) * 100)}%`
              }}
            />
          </div>
          
          <p className="text-gray-600 text-sm">
            Earn {nextTier.min - (user?.loyaltyPoints || 0)} more points to reach {nextTier.name} tier!
          </p>
        </OutlineCard>
      )}

      {/* Tier Benefits */}
      <OutlineCard className="mb-8">
        <h3 className="text-lg font-semibold text-deep-eggplant mb-4">
          Your {currentTier.name} Tier Benefits
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentTier.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center">
              <div className="w-2 h-2 bg-gold rounded-full mr-3" />
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </OutlineCard>

      {/* Recent Transactions */}
      <OutlineCard>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-deep-eggplant flex items-center">
            <TrendingUp className="mr-2 text-gold" size={20} />
            Recent Activity
          </h3>
          {transactions.length === 0 && (
            <button
              onClick={() => navigate('/catalog')}
              className="text-royal-plum hover:text-opacity-80 text-sm font-medium flex items-center"
            >
              Start Shopping
              <ArrowRight className="ml-1" size={16} />
            </button>
          )}
        </div>

        {transactions.length > 0 ? (
          <div className="space-y-4 max-h-60 overflow-y-auto">
            {transactions.slice(0, 10).map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    transaction.type === 'earned' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {transaction.type === 'earned' ? (
                      <TrendingUp className="text-green-600" size={16} />
                    ) : (
                      <Gift className="text-red-600" size={16} />
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-deep-eggplant">
                      {transaction.description}
                    </div>
                    <div className="text-sm text-gray-600">
                      {formatDate(transaction.createdAt)}
                    </div>
                  </div>
                </div>
                <div className={`font-semibold ${
                  transaction.type === 'earned' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.type === 'earned' ? '+' : '-'}{transaction.points} pts
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <Gift className="mx-auto text-gray-400 mb-4" size={48} />
            <p className="text-gray-600 mb-4">No loyalty activity yet</p>
            <p className="text-sm text-gray-500">
              Start shopping to earn your first points!
            </p>
          </div>
        )}
      </OutlineCard>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <button
          onClick={() => navigate('/catalog')}
          className="bg-royal-plum text-white px-8 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center"
        >
          Continue Shopping
          <ArrowRight className="ml-2" size={20} />
        </button>
      </div>
    </div>
  );
};