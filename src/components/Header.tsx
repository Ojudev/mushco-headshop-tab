
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, Heart, ShoppingCart, Menu, X, Leaf } from 'lucide-react';
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
    <header className="sticky top-0 z-50 w-full">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-2 text-center text-sm font-bold text-street">
        <p className="flex items-center justify-center space-x-2">
          <Leaf className="w-4 h-4" />
          <span>🌿 Frete grátis para pedidos acima de R$ 200! Vibe garantida 🔥</span>
          <Leaf className="w-4 h-4" />
        </p>
      </div>

      {/* Main Header */}
      <div className="header-texture shadow-lg border-b border-purple-800/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 purple-street-gradient rounded-xl flex items-center justify-center text-white font-bold relative overflow-hidden transition-all duration-300 group-hover:scale-105">
                <span className="title-street text-lg">TV</span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>
              <div className="hidden sm:block">
                <span className="title-street text-xl text-white font-black">
                  Tabacaria Verde
                </span>
                <p className="text-xs text-purple-200 text-street">Da quebrada com amor 🌿</p>
              </div>
            </Link>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex-1 max-w-md mx-4 hidden md:block">
              <div className="relative group">
                <Input
                  type="text"
                  placeholder="Buscar na quebrada..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-12 bg-white/90 border-white/30 text-gray-800 placeholder-gray-500 focus:bg-white focus:border-purple-400 transition-all duration-300 text-street"
                />
                <Button 
                  type="submit" 
                  size="sm" 
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-10 p-0 btn-street"
                >
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </form>

            {/* User Actions */}
            <div className="flex items-center space-x-3">
              {/* User Menu */}
              <div className="hidden md:flex items-center space-x-3">
                {state.isAuthenticated ? (
                  <div className="flex items-center space-x-3 bg-white/10 rounded-lg px-3 py-2 backdrop-blur-sm">
                    <img 
                      src={state.user?.avatar} 
                      alt={state.user?.name}
                      className="w-8 h-8 rounded-full border-2 border-white/30"
                    />
                    <span className="text-sm text-white font-semibold text-street">{state.user?.name}</span>
                    <Button variant="ghost" size="sm" onClick={handleLogout} className="text-white hover:bg-white/20 text-street font-semibold">
                      Sair
                    </Button>
                  </div>
                ) : (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleLogin} 
                    className="flex items-center space-x-2 text-white hover:bg-white/20 font-semibold text-street"
                  >
                    <User className="w-4 h-4" />
                    <span>Entrar</span>
                  </Button>
                )}
              </div>

              {/* Favorites */}
              <Link to="/favoritos" className="relative p-3 hover:bg-white/20 rounded-lg transition-all duration-300 group">
                <Heart className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                {favoritesCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
                    {favoritesCount}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link to="/carrinho" className="relative p-3 hover:bg-white/20 rounded-lg transition-all duration-300 group">
                <ShoppingCart className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
                    {cartItemsCount}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-3 hover:bg-white/20 rounded-lg transition-all duration-300"
              >
                {isMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="mt-4 md:hidden">
            <div className="relative">
              <Input
                type="text"
                placeholder="Buscar na quebrada..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-12 bg-white/90 border-white/30 text-gray-800 placeholder-gray-500 text-street"
              />
              <Button 
                type="submit" 
                size="sm" 
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-10 p-0 btn-street"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </form>

          {/* Mobile User Actions */}
          <div className={`mt-4 md:hidden ${state.isAuthenticated ? 'block' : 'hidden'}`}>
            {state.isAuthenticated ? (
              <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                  <img 
                    src={state.user?.avatar} 
                    alt={state.user?.name}
                    className="w-8 h-8 rounded-full border-2 border-white/30"
                  />
                  <span className="text-sm text-white font-semibold text-street">{state.user?.name}</span>
                </div>
                <Button variant="ghost" size="sm" onClick={handleLogout} className="text-white hover:bg-white/20 text-street font-semibold">
                  Sair
                </Button>
              </div>
            ) : (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleLogin} 
                className="w-full justify-center text-white hover:bg-white/20 font-semibold text-street"
              >
                <User className="w-4 h-4 mr-2" />
                Entrar
              </Button>
            )}
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className={`border-t border-purple-800/30 ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8 py-3">
              {categories.map((category, index) => (
                <Link
                  key={category.id}
                  to={`/categoria/${category.slug}`}
                  className="py-3 md:py-2 text-white hover:text-green-300 transition-colors font-semibold text-street relative group"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {category.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <Link
                to="/promocoes"
                className="py-3 md:py-2 text-green-300 hover:text-green-200 transition-colors font-bold text-street relative group animate-pulse"
                onClick={() => setIsMenuOpen(false)}
              >
                🔥 Promoções da Quebrada
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
