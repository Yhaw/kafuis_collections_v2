import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, Grid, List } from 'lucide-react';
import { ProductTile } from '../components/ui/ProductTile';
import { OutlineCard } from '../components/ui/OutlineCard';
import { mockProducts } from '../data/mockProducts';

export const CatalogPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    ageRange: searchParams.get('ageRange') || 'all',
    size: 'all',
    color: 'all',
    brand: 'all',
    priceRange: [0, 200] as [number, number],
    sort: 'newest',
  });

  const categories = ['all', 'clothing', 'shoes', 'bags', 'accessories'];
  const ageRanges = ['all', 'baby', 'toddler', 'teen', 'adult'];
  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'name', label: 'Name A-Z' },
  ];

  const filteredProducts = useMemo(() => {
    let products = [...mockProducts];
    
    // Apply filters
    if (filters.category !== 'all') {
      products = products.filter(p => p.category === filters.category);
    }
    if (filters.ageRange !== 'all') {
      products = products.filter(p => p.ageRange === filters.ageRange);
    }
    
    products = products.filter(p => 
      p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    // Apply search
    const searchQuery = searchParams.get('search');
    if (searchQuery) {
      products = products.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply deals filter
    if (searchParams.get('deals') === 'true') {
      products = products.filter(p => p.deal);
    }

    // Apply sorting
    switch (filters.sort) {
      case 'price-low':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default: // newest
        products.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
    }

    return products;
  }, [filters, searchParams]);

  const updateFilter = (key: string, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      ageRange: 'all',
      size: 'all',
      color: 'all',
      brand: 'all',
      priceRange: [0, 200],
      sort: 'newest',
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-deep-eggplant mb-2">Shop Collection</h1>
          <p className="text-gray-600">
            {filteredProducts.length} items found
            {searchParams.get('search') && ` for "${searchParams.get('search')}"`}
          </p>
        </div>
        
        <div className="flex items-center gap-4 mt-4 lg:mt-0">
          {/* Sort */}
          <select
            value={filters.sort}
            onChange={(e) => updateFilter('sort', e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-royal-plum"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {/* View Mode */}
          <div className="hidden sm:flex border border-gray-300 rounded-xl p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${
                viewMode === 'grid' 
                  ? 'bg-royal-plum text-white' 
                  : 'text-gray-600 hover:text-royal-plum'
              }`}
            >
              <Grid size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${
                viewMode === 'list' 
                  ? 'bg-royal-plum text-white' 
                  : 'text-gray-600 hover:text-royal-plum'
              }`}
            >
              <List size={16} />
            </button>
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 text-sm hover:border-royal-plum transition-colors"
          >
            <Filter size={16} />
            Filters
          </button>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-4 lg:gap-8">
        {/* Filters Sidebar */}
        <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden lg:block'} mb-8 lg:mb-0`}>
          <OutlineCard className="sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-deep-eggplant flex items-center">
                <SlidersHorizontal className="mr-2" size={20} />
                Filters
              </h2>
              <button
                onClick={clearFilters}
                className="text-sm text-royal-plum hover:text-opacity-80"
              >
                Clear All
              </button>
            </div>

            <div className="space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="font-medium text-deep-eggplant mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={filters.category === category}
                        onChange={(e) => updateFilter('category', e.target.value)}
                        className="mr-2 text-royal-plum focus:ring-royal-plum"
                      />
                      <span className="text-sm text-gray-700 capitalize">
                        {category === 'all' ? 'All Categories' : category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Age Range Filter */}
              <div>
                <h3 className="font-medium text-deep-eggplant mb-3">Age Range</h3>
                <div className="space-y-2">
                  {ageRanges.map(age => (
                    <label key={age} className="flex items-center">
                      <input
                        type="radio"
                        name="ageRange"
                        value={age}
                        checked={filters.ageRange === age}
                        onChange={(e) => updateFilter('ageRange', e.target.value)}
                        className="mr-2 text-royal-plum focus:ring-royal-plum"
                      />
                      <span className="text-sm text-gray-700 capitalize">
                        {age === 'all' ? 'All Ages' : age}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-medium text-deep-eggplant mb-3">
                  Price Range: ₵{filters.priceRange[0]} - ₵{filters.priceRange[1]}
                </h3>
                <input
                  type="range"
                  min="0"
                  max="200"
                  step="5"
                  value={filters.priceRange[1]}
                  onChange={(e) => updateFilter('priceRange', [0, parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>
          </OutlineCard>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          {filteredProducts.length > 0 ? (
            <div className={
              viewMode === 'grid' 
                ? 'grid grid-cols-2 md:grid-cols-3 gap-6'
                : 'space-y-4'
            }>
              {filteredProducts.map((product) => (
                <ProductTile key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-deep-eggplant mb-2">No items found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters or search terms to find what you're looking for.
              </p>
              <button
                onClick={clearFilters}
                className="bg-royal-plum text-white px-6 py-3 rounded-xl font-medium hover:bg-opacity-90 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};