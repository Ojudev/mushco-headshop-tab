
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star, Zap, Flame } from 'lucide-react';
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
    e.stopPropagation();
    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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
    <Link to={`/produto/${product.id}`} className="block group">
      <div className="grunge-card p-0 overflow-hidden transform hover:scale-105 transition-all duration-300 relative">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-20 flex flex-col space-y-2">
          {product.isBestSeller && (
            <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1 animate-pulse">
              <Flame className="w-3 h-3" />
              <span>HOT</span>
            </span>
          )}
          {product.isNew && (
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1">
              <Zap className="w-3 h-3" />
              <span>NOVO</span>
            </span>
          )}
          {product.discount && (
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
              -{product.discount}% OFF
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={handleToggleFavorite}
          className="absolute top-3 right-3 z-20 w-10 h-10 bg-black/30 hover:bg-purple-600/50 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20"
        >
          <Heart 
            className={`w-5 h-5 transition-colors ${
              isFavorite ? 'fill-red-500 text-red-500' : 'text-white hover:text-red-400'
            }`} 
          />
        </button>

        {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-gradient-to-br from-purple-900/20 to-purple-600/20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent"></div>
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-24 h-24 bg-purple-gradient rounded-full flex items-center justify-center">
              <Zap className="w-12 h-12 text-white" />
            </div>
          </div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300">
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                onClick={handleAddToCart}
                className="btn-grunge transform scale-90 group-hover:scale-100 transition-transform duration-300"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                ADICIONAR
              </Button>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          <h3 className="font-bold text-lg text-white group-hover:text-purple-400 transition-colors line-clamp-2">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-400">
              {product.rating} ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-green-400 neon-text-green">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            {product.discount && (
              <p className="text-green-400 font-medium text-sm">
                Economia de {formatPrice(product.originalPrice! - product.price)}!
              </p>
            )}
          </div>

          {/* Stock Status */}
          <div className="flex items-center justify-between">
            <span className={`text-sm font-medium ${
              product.inStock ? 'text-green-400' : 'text-red-400'
            }`}>
              {product.inStock ? '✅ Disponível' : '❌ Esgotado'}
            </span>
            
            {product.inStock && (
              <Button
                onClick={handleAddToCart}
                size="sm"
                className="btn-grunge text-xs px-4 py-2"
              >
                <ShoppingCart className="w-3 h-3 mr-1" />
                COMPRAR
              </Button>
            )}
          </div>
        </div>

        {/* Glitch effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r from-purple-600 via-transparent to-green-600 animate-pulse"></div>
      </div>
    </Link>
  );
};

export default ProductCard;
