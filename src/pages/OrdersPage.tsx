import React from 'react';
import { Package, Eye, RefreshCw } from 'lucide-react';
import { OutlineCard } from '../components/ui/OutlineCard';
import { useAuthStore } from '../stores/useAuthStore';
import { useNavigate } from 'react-router-dom';

export const OrdersPage: React.FC = () => {
  const { isAuthenticated, user } = useAuthStore();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/auth');
    return null;
  }

  // Mock orders data - in real app this would come from API
  const mockOrders = [
    {
      id: 'ORD-2024-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 120.50,
      itemCount: 3,
      items: ['African Print Teen Dress', 'Leather Oxford Shoes', 'Traditional Beaded Jewelry Set'],
    },
    {
      id: 'ORD-2024-002', 
      date: '2024-01-20',
      status: 'shipped',
      total: 75.25,
      itemCount: 2,
      items: ['Premium Cotton Shirt', 'Teen School Backpack'],
    },
    {
      id: 'ORD-2024-003',
      date: '2024-01-25', 
      status: 'confirmed',
      total: 45.00,
      itemCount: 1,
      items: ['Baby First Steps Sandals'],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'text-green-600 bg-green-100';
      case 'shipped': return 'text-blue-600 bg-blue-100';
      case 'confirmed': return 'text-yellow-600 bg-yellow-100';
      case 'pending': return 'text-gray-600 bg-gray-100';
      case 'cancelled': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return '✅';
      case 'shipped': return '🚚';
      case 'confirmed': return '📋';
      case 'pending': return '⏳';
      case 'cancelled': return '❌';
      default: return '📦';
    }
  };

  const formatPrice = (price: number) => `₵${price.toFixed(2)}`;
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-deep-eggplant">My Orders</h1>
        <button
          onClick={() => navigate('/catalog')}
          className="bg-royal-plum text-white px-6 py-2 rounded-xl font-medium hover:bg-opacity-90 transition-colors"
        >
          Continue Shopping
        </button>
      </div>

      {mockOrders.length > 0 ? (
        <div className="space-y-6">
          {mockOrders.map((order) => (
            <OutlineCard key={order.id}>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center">
                      <Package className="text-gold mr-2" size={20} />
                      <div>
                        <h3 className="font-semibold text-deep-eggplant">
                          Order #{order.id}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Placed on {formatDate(order.date)}
                        </p>
                      </div>
                    </div>
                    
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      <span className="mr-1">{getStatusIcon(order.status)}</span>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Items ({order.itemCount})</p>
                      <ul className="text-sm text-deep-eggplant space-y-1">
                        {order.items.map((item, index) => (
                          <li key={index} className="truncate">• {item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total</p>
                      <p className="text-lg font-semibold text-royal-plum">
                        {formatPrice(order.total)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 mt-4 lg:mt-0 lg:ml-6">
                  <button className="flex items-center justify-center px-4 py-2 border border-royal-plum text-royal-plum rounded-lg hover:bg-royal-plum hover:text-white transition-colors text-sm font-medium">
                    <Eye className="mr-1" size={16} />
                    View Details
                  </button>
                  
                  {order.status === 'delivered' && (
                    <button className="flex items-center justify-center px-4 py-2 bg-royal-plum text-white rounded-lg hover:bg-opacity-90 transition-colors text-sm font-medium">
                      <RefreshCw className="mr-1" size={16} />
                      Reorder
                    </button>
                  )}
                </div>
              </div>
            </OutlineCard>
          ))}

          {/* Load More */}
          <div className="text-center py-8">
            <button className="text-royal-plum hover:text-opacity-80 font-medium">
              Load More Orders
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <Package className="mx-auto text-gray-400 mb-4" size={64} />
          <h2 className="text-2xl font-bold text-deep-eggplant mb-4">No orders yet</h2>
          <p className="text-gray-600 mb-8">Start shopping to see your orders here!</p>
          <button
            onClick={() => navigate('/catalog')}
            className="bg-royal-plum text-white px-8 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors"
          >
            Start Shopping
          </button>
        </div>
      )}
    </div>
  );
};