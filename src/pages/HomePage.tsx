import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Zap, Heart } from 'lucide-react';
import { ProductTile } from '../components/ui/ProductTile';
import { OutlineCard } from '../components/ui/OutlineCard';
import { mockProducts } from '../data/mockProducts';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const featuredProducts = mockProducts.filter(p => p.trending || p.newArrival).slice(0, 8);
  const dealProducts = mockProducts.filter(p => p.deal).slice(0, 4);

  const categories = [
    { id: 'clothing', name: 'Clothing', icon: '👕', count: mockProducts.filter(p => p.category === 'clothing').length },
    { id: 'shoes', name: 'Shoes', icon: '👟', count: mockProducts.filter(p => p.category === 'shoes').length },
    { id: 'bags', name: 'Bags', icon: '👜', count: mockProducts.filter(p => p.category === 'bags').length },
    { id: 'accessories', name: 'Accessories', icon: '💍', count: mockProducts.filter(p => p.category === 'accessories').length },
  ];

  const ageRanges = [
    { id: 'baby', name: 'Baby', count: mockProducts.filter(p => p.ageRange === 'baby').length },
    { id: 'toddler', name: 'Toddler', count: mockProducts.filter(p => p.ageRange === 'toddler').length },
    { id: 'teen', name: 'Teen', count: mockProducts.filter(p => p.ageRange === 'teen').length },
    { id: 'adult', name: 'Adult', count: mockProducts.filter(p => p.ageRange === 'adult').length },
  ];

  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/src/assets/brand/HORIZONTAL-BANNER-1@3x-8.png')`,
          }}
          onError={() => {
            // Fallback background
            (document.querySelector('.hero-fallback') as HTMLElement)?.classList.remove('hidden');
          }}
        />
        <div className="hero-fallback hidden absolute inset-0 bg-gradient-to-br from-royal-plum to-deep-eggplant" />
        
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-lg">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Where Style Meets Affordability
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Discover premium thrift fashion for every age. Quality pieces with stories to tell and love to give.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/catalog')}
                className="bg-gold text-deep-eggplant px-8 py-4 rounded-xl font-semibold text-lg hover:bg-opacity-90 transition-colors inline-flex items-center justify-center"
              >
                Shop Now
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button
                onClick={() => navigate('/loyalty')}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-deep-eggplant transition-colors"
              >
                Join Loyalty
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gold bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="text-gold" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-deep-eggplant mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">Every item is carefully inspected for quality and condition before listing.</p>
            </div>
            <div className="text-center">
              <div className="bg-gold bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="text-gold" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-deep-eggplant mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick delivery across Ghana with reliable partners and tracking.</p>
            </div>
            <div className="text-center">
              <div className="bg-gold bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-gold" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-deep-eggplant mb-2">Loyalty Rewards</h3>
              <p className="text-gray-600">Earn points with every purchase and redeem for discounts on future orders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deep-eggplant mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated collection of pre-loved fashion treasures across all categories.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <OutlineCard
                key={category.id}
                hoverable
                onClick={() => navigate(`/catalog?category=${category.id}`)}
                className="text-center p-8"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-semibold text-deep-eggplant mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} items</p>
              </OutlineCard>
            ))}
          </div>
        </div>
      </section>

      {/* Age Ranges */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deep-eggplant mb-4">Shop by Age</h2>
            <p className="text-gray-600">From babies to adults, we have something special for everyone.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {ageRanges.map((age) => (
              <button
                key={age.id}
                onClick={() => navigate(`/catalog?ageRange=${age.id}`)}
                className="bg-royal-plum text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-80 transition-colors"
              >
                {age.name} ({age.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-deep-eggplant mb-4">Trending & New Arrivals</h2>
              <p className="text-gray-600">Discover the latest additions and popular picks.</p>
            </div>
            <Link
              to="/catalog"
              className="text-royal-plum font-medium hover:text-opacity-80 flex items-center"
            >
              View All
              <ArrowRight className="ml-1" size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductTile key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Deals Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deep-eggplant mb-4">Hot Deals</h2>
            <p className="text-gray-600">Limited time offers on selected items. Don't miss out!</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {dealProducts.map((product) => (
              <ProductTile key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/catalog?deals=true"
              className="bg-gold text-deep-eggplant px-8 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center"
            >
              View All Deals
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-royal-plum text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-lg text-gray-200 mb-8">
            Get notified about new arrivals, exclusive deals, and style tips straight to your inbox.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-xl text-deep-eggplant focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button
              type="submit"
              className="bg-gold text-deep-eggplant px-8 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};