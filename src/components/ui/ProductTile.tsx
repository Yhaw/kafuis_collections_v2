import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../../types';
import { OutlineCard } from './OutlineCard';
import { useCartStore } from '../../stores/useCartStore';

interface ProductTileProps {
  product: Product;
}

export const ProductTile: React.FC<ProductTileProps> = ({ product }) => {
  const navigate = useNavigate();
  const addItem = useCartStore(state => state.addItem);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({
      productId: product.id,
      quantity: 1,
      size: product.sizes[0],
      color: product.colors[0],
      price: product.price,
    });
  };

  const formatPrice = (price: number) => `₵${price.toFixed(2)}`;

  return (
    <OutlineCard
      hoverable
      onClick={() => navigate(`/product/${product.id}`)}
      className="group relative"
    >
      <div className="aspect-square overflow-hidden rounded-lg mb-3">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        {product.discount && (
          <div className="absolute top-2 left-2 bg-gold text-deep-eggplant text-xs font-bold px-2 py-1 rounded">
            -{product.discount}%
          </div>
        )}
        {product.newArrival && (
          <div className="absolute top-2 right-2 bg-royal-plum text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </div>
        )}
      </div>

      <div className="space-y-2">
        <h3 className="font-medium text-deep-eggplant line-clamp-2">{product.name}</h3>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-royal-plum">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            <span className="text-xs text-gray-600 capitalize">
              {product.ageRange} • {product.category}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex gap-1">
            {product.colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color.toLowerCase() }}
                title={color}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
            )}
          </div>

          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handleQuickAdd}
              className="p-1.5 bg-royal-plum text-white rounded-full hover:bg-opacity-80 transition-colors"
              title="Quick add to cart"
            >
              <ShoppingCart size={14} />
            </button>
            <button
              className="p-1.5 border border-royal-plum text-royal-plum rounded-full hover:bg-royal-plum hover:text-white transition-colors"
              title="Add to wishlist"
            >
              <Heart size={14} />
            </button>
          </div>
        </div>
      </div>
    </OutlineCard>
  );
};