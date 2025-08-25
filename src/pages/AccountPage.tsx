import React from 'react';
import { User, MapPin, Edit2, Plus } from 'lucide-react';
import { OutlineCard } from '../components/ui/OutlineCard';
import { useAuthStore } from '../stores/useAuthStore';
import { useNavigate } from 'react-router-dom';

export const AccountPage: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuthStore();
  const navigate = useNavigate();

  if (!isAuthenticated || !user) {
    navigate('/auth');
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-deep-eggplant mb-8">My Account</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-8">
          <OutlineCard>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <User className="text-gold mr-3" size={24} />
                <h2 className="text-xl font-semibold text-deep-eggplant">Profile Information</h2>
              </div>
              <button className="text-royal-plum hover:text-opacity-80 flex items-center text-sm font-medium">
                <Edit2 className="mr-1" size={16} />
                Edit
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <p className="text-deep-eggplant font-medium">{user.firstName}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <p className="text-deep-eggplant font-medium">{user.lastName}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <p className="text-deep-eggplant font-medium">{user.email}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <p className="text-deep-eggplant font-medium">{user.phone}</p>
              </div>
            </div>
          </OutlineCard>

          {/* Address Book */}
          <OutlineCard>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <MapPin className="text-gold mr-3" size={24} />
                <h2 className="text-xl font-semibold text-deep-eggplant">Address Book</h2>
              </div>
              <button className="text-royal-plum hover:text-opacity-80 flex items-center text-sm font-medium">
                <Plus className="mr-1" size={16} />
                Add Address
              </button>
            </div>

            {user.addresses && user.addresses.length > 0 ? (
              <div className="space-y-4">
                {user.addresses.map((address) => (
                  <div key={address.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-medium text-deep-eggplant mb-1">
                          {address.name}
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>{address.phone}</p>
                          <p>{address.landmark}</p>
                          <p>{address.city}, {address.region}</p>
                          {address.digitalAddress && (
                            <p>Digital Address: {address.digitalAddress}</p>
                          )}
                        </div>
                        {address.isDefault && (
                          <span className="inline-block mt-2 bg-gold text-deep-eggplant text-xs px-2 py-1 rounded">
                            Default
                          </span>
                        )}
                      </div>
                      <button className="text-royal-plum hover:text-opacity-80 text-sm font-medium">
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <MapPin className="mx-auto text-gray-400 mb-4" size={48} />
                <p className="text-gray-600 mb-4">No saved addresses</p>
                <button className="bg-royal-plum text-white px-6 py-2 rounded-xl font-medium hover:bg-opacity-90 transition-colors">
                  Add Your First Address
                </button>
              </div>
            )}
          </OutlineCard>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Account Summary */}
          <OutlineCard>
            <h3 className="font-semibold text-deep-eggplant mb-4">Account Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Loyalty Points</span>
                <span className="font-semibold text-royal-plum">{user.loyaltyPoints}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Available Discount</span>
                <span className="font-semibold text-gold">
                  ₵{Math.floor(user.loyaltyPoints / 100)}
                </span>
              </div>
            </div>
          </OutlineCard>

          {/* Quick Actions */}
          <OutlineCard>
            <h3 className="font-semibold text-deep-eggplant mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button
                onClick={() => navigate('/orders')}
                className="w-full text-left px-4 py-2 text-royal-plum hover:bg-gray-50 rounded-lg transition-colors"
              >
                View Orders
              </button>
              <button
                onClick={() => navigate('/loyalty')}
                className="w-full text-left px-4 py-2 text-royal-plum hover:bg-gray-50 rounded-lg transition-colors"
              >
                Loyalty Wallet
              </button>
              <button
                onClick={() => navigate('/catalog')}
                className="w-full text-left px-4 py-2 text-royal-plum hover:bg-gray-50 rounded-lg transition-colors"
              >
                Continue Shopping
              </button>
              <hr className="my-2" />
              <button
                onClick={logout}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                Sign Out
              </button>
            </div>
          </OutlineCard>
        </div>
      </div>
    </div>
  );
};