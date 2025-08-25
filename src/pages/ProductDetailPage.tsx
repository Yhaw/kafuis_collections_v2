import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Heart, Share2, Truck, RotateCcw, Shield } from 'lucide-react';
import { OutlineCard } from '../components/ui/OutlineCard';
import { ProductTile } from '../components/ui/ProductTile';
import { useCartStore } from '../stores/useCartStore';
import { mockProducts } from '../data/mockProducts';
import { notifications } from '@mantine/notifications';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const addItem = useCartStore(state => state.addItem);

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/catalog')}
            className="bg-royal-plum text-white px-6 py-3 rounded-xl font-medium hover:bg-opacity-90 transition-colors"
          >
            Browse Catalog
          </button>
        </div>
      </div>
    );
  }

  const relatedProducts = mockProducts
    .filter(p => p.id !== product.id && (p.category === product.category || p.ageRange === product.ageRange))
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      notifications.show({
        title: 'Selection Required',
        message: 'Please select a size and color before adding to cart.',
        color: 'orange',
      });
      return;
    }

    addItem({
      productId: product.id,
      quantity,
      size: selectedSize,
      color: selectedColor,
      price: product.price,
    });

    notifications.show({
      title: 'Added to Cart!',
      message: `${product.name} has been added to your cart.`,
      color: 'green',
    });
  };

  React.useEffect(() => {
    if (product.sizes.length > 0 && !selectedSize) {
      setSelectedSize(product.sizes[0]);
    }
    if (product.colors.length > 0 && !selectedColor) {
      setSelectedColor(product.colors[0]);
    }
  }, [product, selectedSize, selectedColor]);

  const formatPrice = (price: number) => `₵${price.toFixed(2)}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-royal-plum hover:text-opacity-80 mb-8"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Shopping
      </button>

      <div className="lg:grid lg:grid-cols-2 lg:gap-12">
        {/* Product Images */}
        <div className="mb-8 lg:mb-0">
          <div className="aspect-square overflow-hidden rounded-xl mb-4">
            <img
              src={product.images[selectedImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.discount && (
              <div className="absolute top-4 left-4 bg-gold text-deep-eggplant text-sm font-bold px-3 py-1 rounded-lg">
                -{product.discount}% OFF
              </div>
            )}
          </div>

          {/* Thumbnail Images */}
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 ${
                    selectedImageIndex === index 
                      ? 'border-royal-plum' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-gray-600 capitalize">{product.category}</span>
              <span className="text-gray-400">•</span>
              <span className="text-sm text-gray-600 capitalize">{product.ageRange}</span>
              {product.newArrival && (
                <>
                  <span className="text-gray-400">•</span>
                  <span className="bg-royal-plum text-white text-xs px-2 py-1 rounded">NEW</span>
                </>
              )}
            </div>
            
            <h1 className="text-3xl font-bold text-deep-eggplant mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-bold text-royal-plum">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              {product.discount && (
                <span className="bg-gold text-deep-eggplant text-sm font-bold px-2 py-1 rounded">
                  Save {product.discount}%
                </span>
              )}
            </div>

            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          {/* Size Selection */}
          {product.sizes.length > 0 && (
            <div>
              <h3 className="font-semibold text-deep-eggplant mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg font-medium transition-colors ${
                      selectedSize === size
                        ? 'border-royal-plum bg-royal-plum text-white'
                        : 'border-gray-300 text-gray-700 hover:border-royal-plum'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selection */}
          {product.colors.length > 0 && (
            <div>
              <h3 className="font-semibold text-deep-eggplant mb-3">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-lg font-medium transition-colors ${
                      selectedColor === color
                        ? 'border-royal-plum bg-royal-plum text-white'
                        : 'border-gray-300 text-gray-700 hover:border-royal-plum'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div>
            <h3 className="font-semibold text-deep-eggplant mb-3">Quantity</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-gray-50"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="px-3 py-2 hover:bg-gray-50"
                  disabled={quantity >= product.stock}
                >
                  +
                </button>
              </div>
              <span className="text-sm text-gray-600">
                {product.stock} in stock
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="flex-1 bg-royal-plum text-white py-3 px-6 rounded-xl font-semibold hover:bg-opacity-90 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <ShoppingCart className="mr-2" size={20} />
              {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
            
            <button className="border border-royal-plum text-royal-plum p-3 rounded-xl hover:bg-royal-plum hover:text-white transition-colors">
              <Heart size={20} />
            </button>
            
            <button className="border border-royal-plum text-royal-plum p-3 rounded-xl hover:bg-royal-plum hover:text-white transition-colors">
              <Share2 size={20} />
            </button>
          </div>

          {/* Delivery Info */}
          <OutlineCard>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Truck className="text-gold mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-deep-eggplant">Delivery in Ghana</h4>
                  <p className="text-sm text-gray-600">
                    Free delivery within Accra for orders over ₵100. 
                    Other regions: ₵15-25 delivery fee.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <RotateCcw className="text-gold mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-deep-eggplant">Easy Returns</h4>
                  <p className="text-sm text-gray-600">
                    7-day return policy. Items must be in original condition.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Shield className="text-gold mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-deep-eggplant">Quality Guaranteed</h4>
                  <p className="text-sm text-gray-600">
                    Every item is inspected for quality before shipping.
                  </p>
                </div>
              </div>
            </div>
          </OutlineCard>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-deep-eggplant mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <ProductTile key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      )}

      {/* Sticky Mobile Add to Cart */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
        <div className="flex items-center gap-4">
          <div>
            <div className="font-bold text-royal-plum text-lg">{formatPrice(product.price)}</div>
            {product.originalPrice && (
              <div className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </div>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="flex-1 bg-royal-plum text-white py-3 px-6 rounded-xl font-semibold hover:bg-opacity-90 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};