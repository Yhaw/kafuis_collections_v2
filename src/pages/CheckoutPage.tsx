import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, MapPin, Gift } from 'lucide-react';
import { OutlineCard } from '../components/ui/OutlineCard';
import { useCartStore } from '../stores/useCartStore';
import { useAuthStore } from '../stores/useAuthStore';
import { useLoyaltyStore } from '../stores/useLoyaltyStore';
import { mockProducts } from '../data/mockProducts';
import { ghanaRegions } from '../data/ghanaRegions';
import { notifications } from '@mantine/notifications';

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, getSubtotal, clearCart } = useCartStore();
  const { isAuthenticated, user, updateLoyaltyPoints } = useAuthStore();
  const { addTransaction, calculatePointsFromAmount, calculateDiscountFromPoints } = useLoyaltyStore();

  const [shippingInfo, setShippingInfo] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    phone: user?.phone || '',
    region: '',
    city: '',
    landmark: '',
    digitalAddress: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('paystack');
  const [useGuestCheckout, setUseGuestCheckout] = useState(!isAuthenticated);
  const [pointsToRedeem, setPointsToRedeem] = useState(0);

  const subtotal = getSubtotal();
  const loyaltyDiscount = calculateDiscountFromPoints(pointsToRedeem);
  const shipping = subtotal >= 100 ? 0 : 15;
  const total = Math.max(0, subtotal - loyaltyDiscount + shipping);

  const formatPrice = (price: number) => `₵${price.toFixed(2)}`;

  const validateForm = () => {
    const required = ['firstName', 'lastName', 'phone', 'region', 'city', 'landmark'];
    return required.every(field => shippingInfo[field as keyof typeof shippingInfo].trim() !== '');
  };

  const handlePayment = async () => {
    if (!validateForm()) {
      notifications.show({
        title: 'Missing Information',
        message: 'Please fill in all required shipping fields.',
        color: 'red',
      });
      return;
    }

    try {
      // Mock Paystack payment
      const paymentSuccess = await mockPaystackPayment(total);
      
      if (paymentSuccess) {
        // Award loyalty points
        const pointsEarned = calculatePointsFromAmount(total);
        
        if (isAuthenticated && pointsEarned > 0) {
          updateLoyaltyPoints(pointsEarned);
          addTransaction({
            type: 'earned',
            points: pointsEarned,
            description: `Points earned from order #${Date.now()}`,
            orderId: Date.now().toString(),
          });
        }

        // Redeem points if used
        if (pointsToRedeem > 0 && isAuthenticated) {
          updateLoyaltyPoints(-pointsToRedeem);
          addTransaction({
            type: 'redeemed',
            points: pointsToRedeem,
            description: `Points redeemed for discount`,
            orderId: Date.now().toString(),
          });
        }

        clearCart();
        
        notifications.show({
          title: 'Order Successful!',
          message: `Your order has been placed successfully. ${pointsEarned > 0 ? `You earned ${pointsEarned} loyalty points!` : ''}`,
          color: 'green',
          autoClose: 5000,
        });

        navigate('/orders');
      }
    } catch (error) {
      notifications.show({
        title: 'Payment Failed',
        message: 'There was an error processing your payment. Please try again.',
        color: 'red',
      });
    }
  };

  const mockPaystackPayment = (amount: number): Promise<boolean> => {
    return new Promise((resolve) => {
      // Simulate payment processing
      setTimeout(() => {
        resolve(Math.random() > 0.1); // 90% success rate
      }, 2000);
    });
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-4">Your cart is empty</h2>
          <button
            onClick={() => navigate('/catalog')}
            className="bg-royal-plum text-white px-8 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-deep-eggplant mb-8">Checkout</h1>

      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Guest/Sign In Option */}
          {!isAuthenticated && (
            <OutlineCard>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-deep-eggplant">Account</h2>
                <button
                  onClick={() => navigate('/auth')}
                  className="text-royal-plum hover:text-opacity-80 font-medium"
                >
                  Sign In
                </button>
              </div>
              
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={useGuestCheckout}
                  onChange={(e) => setUseGuestCheckout(e.target.checked)}
                  className="mr-2 text-royal-plum focus:ring-royal-plum"
                />
                <span>Continue as guest</span>
              </label>
            </OutlineCard>
          )}

          {/* Shipping Information */}
          <OutlineCard>
            <div className="flex items-center mb-6">
              <MapPin className="text-gold mr-2" size={24} />
              <h2 className="text-xl font-semibold text-deep-eggplant">Shipping Address</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  value={shippingInfo.firstName}
                  onChange={(e) => setShippingInfo(prev => ({ ...prev, firstName: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-royal-plum"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  value={shippingInfo.lastName}
                  onChange={(e) => setShippingInfo(prev => ({ ...prev, lastName: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-royal-plum"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={shippingInfo.phone}
                  onChange={(e) => setShippingInfo(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+233 24 123 4567"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-royal-plum"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Region *
                </label>
                <select
                  value={shippingInfo.region}
                  onChange={(e) => setShippingInfo(prev => ({ ...prev, region: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-royal-plum"
                  required
                >
                  <option value="">Select Region</option>
                  {ghanaRegions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City *
                </label>
                <input
                  type="text"
                  value={shippingInfo.city}
                  onChange={(e) => setShippingInfo(prev => ({ ...prev, city: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-royal-plum"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Landmark *
                </label>
                <input
                  type="text"
                  value={shippingInfo.landmark}
                  onChange={(e) => setShippingInfo(prev => ({ ...prev, landmark: e.target.value }))}
                  placeholder="Near Accra Mall, behind Shell Station, etc."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-royal-plum"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Digital Address (Optional)
                </label>
                <input
                  type="text"
                  value={shippingInfo.digitalAddress}
                  onChange={(e) => setShippingInfo(prev => ({ ...prev, digitalAddress: e.target.value }))}
                  placeholder="GH-123-4567"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-royal-plum"
                />
              </div>
            </div>
          </OutlineCard>

          {/* Loyalty Points */}
          {isAuthenticated && user && user.loyaltyPoints > 0 && (
            <OutlineCard>
              <div className="flex items-center mb-4">
                <Gift className="text-gold mr-2" size={24} />
                <h2 className="text-xl font-semibold text-deep-eggplant">Loyalty Points</h2>
              </div>

              <p className="text-gray-600 mb-4">
                You have {user.loyaltyPoints} points available. Each 100 points = ₵1 discount.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <input
                    type="number"
                    min="0"
                    max={Math.min(user.loyaltyPoints, Math.floor(subtotal * 100))}
                    step="100"
                    value={pointsToRedeem}
                    onChange={(e) => setPointsToRedeem(Math.min(parseInt(e.target.value) || 0, user.loyaltyPoints))}
                    placeholder="Points to redeem"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-royal-plum"
                  />
                </div>
                <div className="text-green-600 font-medium">
                  {loyaltyDiscount > 0 && `Save ${formatPrice(loyaltyDiscount)}`}
                </div>
              </div>
            </OutlineCard>
          )}

          {/* Payment Method */}
          <OutlineCard>
            <div className="flex items-center mb-6">
              <CreditCard className="text-gold mr-2" size={24} />
              <h2 className="text-xl font-semibold text-deep-eggplant">Payment Method</h2>
            </div>

            <div className="space-y-3">
              <label className="flex items-center p-4 border border-gray-300 rounded-lg hover:border-royal-plum cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="paystack"
                  checked={paymentMethod === 'paystack'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-3 text-royal-plum focus:ring-royal-plum"
                />
                <div className="flex-1">
                  <div className="font-medium text-deep-eggplant">Paystack</div>
                  <div className="text-sm text-gray-600">
                    Pay with card, bank transfer, or mobile money (MoMo)
                  </div>
                </div>
                <div className="text-xs text-gray-500">Test Mode</div>
              </label>
            </div>
          </OutlineCard>
        </div>

        {/* Order Summary */}
        <div>
          <OutlineCard className="sticky top-24">
            <h2 className="text-xl font-semibold text-deep-eggplant mb-6">Order Summary</h2>

            {/* Items */}
            <div className="space-y-3 mb-6 max-h-60 overflow-y-auto">
              {items.map((item) => {
                const product = mockProducts.find(p => p.id === item.productId);
                if (!product) return null;

                return (
                  <div key={`${item.productId}-${item.size}-${item.color}`} className="flex gap-3">
                    <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-deep-eggplant truncate">
                        {product.name}
                      </div>
                      <div className="text-xs text-gray-600">
                        {item.size} • {item.color} • Qty: {item.quantity}
                      </div>
                      <div className="text-sm font-medium text-royal-plum">
                        {formatPrice(item.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Totals */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              
              {loyaltyDiscount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Loyalty Discount</span>
                  <span>-{formatPrice(loyaltyDiscount)}</span>
                </div>
              )}
              
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
              </div>
              
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-royal-plum">{formatPrice(total)}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handlePayment}
              className="w-full bg-royal-plum text-white py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors"
            >
              Complete Payment {formatPrice(total)}
            </button>

            <div className="mt-4 text-xs text-gray-500 text-center">
              Your payment is secured by Paystack. This is a test transaction.
            </div>
          </OutlineCard>
        </div>
      </div>
    </div>
  );
};