import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCartStore } from '../../stores/useCartStore';
import { useAuthStore } from '../../stores/useAuthStore';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  const itemCount = useCartStore(state => state.getItemCount());
  const { isAuthenticated, user, logout } = useAuthStore();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="bg-off-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img
              src="/src/assets/brand/LOGO-3@3x-8.png"
              alt="Kafui's Collections"
              className="h-8 w-auto"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI2MCIgeT0iMjQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzNGMUY0RiI+S2FmdWkncyBDb2xsZWN0aW9uczwvdGV4dD4KPC9zdmc+';
              }}
            />
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for thrift fashion..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-plum focus:border-royal-plum"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-royal-plum"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/catalog" className="text-deep-eggplant hover:text-royal-plum font-medium">
              Shop
            </Link>
            <Link to="/about" className="text-deep-eggplant hover:text-royal-plum font-medium">
              About
            </Link>
            <Link to="/loyalty" className="text-deep-eggplant hover:text-royal-plum font-medium">
              Loyalty
            </Link>

            {/* Cart Icon */}
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-deep-eggplant hover:text-royal-plum" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-deep-eggplant text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 text-deep-eggplant hover:text-royal-plum">
                  <User className="h-6 w-6" />
                  <span className="font-medium">{user?.firstName}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/account" className="block px-4 py-2 text-sm text-deep-eggplant hover:bg-gray-50 rounded-t-xl">
                    My Account
                  </Link>
                  <Link to="/orders" className="block px-4 py-2 text-sm text-deep-eggplant hover:bg-gray-50">
                    Orders
                  </Link>
                  <Link to="/loyalty" className="block px-4 py-2 text-sm text-deep-eggplant hover:bg-gray-50">
                    Loyalty Points
                  </Link>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-sm text-deep-eggplant hover:bg-gray-50 rounded-b-xl"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/auth" className="text-deep-eggplant hover:text-royal-plum font-medium flex items-center">
                <User className="h-6 w-6 mr-1" />
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-deep-eggplant" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-deep-eggplant text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-deep-eggplant hover:text-royal-plum"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-4">
            <form onSubmit={handleSearch} className="px-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for thrift fashion..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-plum focus:border-royal-plum"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-royal-plum"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>
            
            <div className="space-y-2">
              <Link
                to="/catalog"
                className="block px-1 py-2 text-deep-eggplant hover:text-royal-plum font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="block px-1 py-2 text-deep-eggplant hover:text-royal-plum font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/loyalty"
                className="block px-1 py-2 text-deep-eggplant hover:text-royal-plum font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Loyalty
              </Link>
              
              {isAuthenticated ? (
                <>
                  <Link
                    to="/account"
                    className="block px-1 py-2 text-deep-eggplant hover:text-royal-plum font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    My Account
                  </Link>
                  <Link
                    to="/orders"
                    className="block px-1 py-2 text-deep-eggplant hover:text-royal-plum font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Orders
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="block px-1 py-2 text-deep-eggplant hover:text-royal-plum font-medium text-left w-full"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  to="/auth"
                  className="block px-1 py-2 text-deep-eggplant hover:text-royal-plum font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};