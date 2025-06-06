
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, Heart, ShoppingCart, Menu, X } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { categories } from '../data/mockData';

const Header = () => {
  const { state, dispatch } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const cartItemsCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const favoritesCount = state.favorites.length;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/buscar?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const handleLogin = () => {
    // Simulando login com Google
    const mockUser = {
      id: '1',
      name: 'João Silva',
      email: 'joao@example.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
    };
    dispatch({ type: 'LOGIN', payload: mockUser });
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
      {/* Top Bar */}
      <div className="bg-green-500 text-white py-2 text-center text-sm">
        <p>🎉 Frete grátis para pedidos acima de R$ 200! 🎉</p>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
              TV
            </div>
            <span className="text-xl font-bold text-green-600 hidden sm:block">
              Tabacaria Verde
            </span>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-md mx-4 hidden md:block">
            <div className="relative">
              <Input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
              <Button 
                type="submit" 
                size="sm" 
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </form>

          {/* User Actions */}
          <div className="flex items-center space-x-3">
            {/* User Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {state.isAuthenticated ? (
                <div className="flex items-center space-x-2">
                  <img 
                    src={state.user?.avatar} 
                    alt={state.user?.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm text-gray-700">{state.user?.name}</span>
                  <Button variant="ghost" size="sm" onClick={handleLogout}>
                    Sair
                  </Button>
                </div>
              ) : (
                <Button variant="ghost" size="sm" onClick={handleLogin} className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>Entrar</span>
                </Button>
              )}
            </div>

            {/* Favorites */}
            <Link to="/favoritos" className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Heart className="w-5 h-5" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link to="/carrinho" className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="mt-4 md:hidden">
          <div className="relative">
            <Input
              type="text"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10"
            />
            <Button 
              type="submit" 
              size="sm" 
              className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
            >
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </div>

      {/* Navigation Menu */}
      <nav className={`bg-gray-50 border-t ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8 py-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/categoria/${category.slug}`}
                className="py-2 md:py-0 text-gray-700 hover:text-green-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            <Link
              to="/promocoes"
              className="py-2 md:py-0 text-purple-600 hover:text-purple-700 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
