import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { OutlineCard } from '../components/ui/OutlineCard';
import { useCartStore } from '../stores/useCartStore';
import { mockProducts } from '../data/mockProducts';

export const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeItem, getSubtotal, getItemCount } = useCartStore();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const subtotal = getSubtotal();
  const shipping = subtotal >= 100 ? 0 : 15;
  const total = subtotal - discount + shipping;

  const formatPrice = (price: number) => `₵${price.toFixed(2)}`;

  const handlePromoCode = () => {
    // Mock promo code logic
    if (promoCode.toLowerCase() === 'welcome10') {
      setDiscount(subtotal * 0.1);
    } else if (promoCode.toLowerCase() === 'save20') {
      setDiscount(20);
    } else {
      setDiscount(0);
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-16">
          <ShoppingBag className="mx-auto text-gray-400 mb-4" size={64} />
          <h2 className="text-2xl font-bold text-deep-eggplant mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Discover our amazing collection of thrift fashion!</p>
          <button
            onClick={() => navigate('/catalog')}
            className="bg-royal-plum text-white px-8 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors"
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-deep-eggplant mb-8">Shopping Cart</h1>

      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => {
            const product = mockProducts.find(p => p.id === item.productId);
            if (!product) return null;

            return (
              <OutlineCard key={`${item.productId}-${item.size}-${item.color}`}>
                <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-deep-eggplant">{product.name}</h3>
                      <button
                        onClick={() => removeItem(item.productId, item.size, item.color)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div className="text-sm text-gray-600 mb-2">
                      Size: {item.size} • Color: {item.color}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-gray-50"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-3 py-1 font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-gray-50"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <span className="font-semibold text-royal-plum">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </OutlineCard>
            );
          })}
        </div>

        {/* Order Summary */}
        <div className="mt-8 lg:mt-0">
          <OutlineCard className="sticky top-24">
            <h2 className="text-xl font-semibold text-deep-eggplant mb-6">Order Summary</h2>

            {/* Promo Code */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Promo Code
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter code"
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-royal-plum"
                />
                <button
                  onClick={handlePromoCode}
                  className="bg-royal-plum text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors"
                >
                  Apply
                </button>
              </div>
              {discount > 0 && (
                <p className="text-sm text-green-600 mt-1">
                  Promo code applied! You saved {formatPrice(discount)}
                </p>
              )}
            </div>

            {/* Order Details */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span>Subtotal ({getItemCount()} items)</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              
              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>-{formatPrice(discount)}</span>
                </div>
              )}
              
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
              </div>
              
              {shipping === 0 && (
                <p className="text-xs text-green-600">
                  🎉 Free shipping on orders over ₵100
                </p>
              )}
              
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-royal-plum">{formatPrice(total)}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="w-full bg-royal-plum text-white py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center"
            >
              Proceed to Checkout
              <ArrowRight className="ml-2" size={20} />
            </button>

            <div className="mt-4 text-center">
              <button
                onClick={() => navigate('/catalog')}
                className="text-royal-plum hover:text-opacity-80 text-sm font-medium"
              >
                Continue Shopping
              </button>
            </div>
          </OutlineCard>
        </div>
      </div>
    </div>
  );
};