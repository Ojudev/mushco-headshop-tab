
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';
import { Button } from './ui/button';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { state, dispatch } = useStore();
  const isFavorite = state.favorites.includes(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: product.id });
      toast.info('Removido dos favoritos');
    } else {
      dispatch({ type: 'ADD_TO_FAVORITES', payload: product.id });
      toast.success('Adicionado aos favoritos!');
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <div className="product-card group relative overflow-hidden">
      {/* Badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col space-y-1">
        {product.isBestSeller && (
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            🔥 Mais Vendido
          </span>
        )}
        {product.isNew && (
          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            ✨ Novo
          </span>
        )}
        {product.discount && (
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            -{product.discount}%
          </span>
        )}
      </div>

      {/* Favorite Button */}
      <button
        onClick={handleToggleFavorite}
        className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
      >
        <Heart 
          className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
        />
      </button>

      <Link to={`/produto/${product.id}`} className="block">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="font-medium text-gray-900 line-clamp-2 group-hover:text-green-600 transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center space-x-1 text-sm">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-500">({product.reviewCount})</span>
          </div>

          {/* Price */}
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-green-600">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          </div>

          {/* Stock Status */}
          <div className="flex items-center justify-between">
            <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
              {product.inStock ? 'Em estoque' : 'Indisponível'}
            </span>
          </div>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <Button 
        onClick={handleAddToCart}
        disabled={!product.inStock}
        className="w-full mt-3 btn-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        <ShoppingCart className="w-4 h-4 mr-2" />
        Adicionar ao Carrinho
      </Button>
    </div>
  );
};

export default ProductCard;
