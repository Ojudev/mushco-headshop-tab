
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Zap, Star, Flame } from 'lucide-react';
import { Button } from './ui/button';

const BannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "🔥 QUEIMA DE ESTOQUE",
      subtitle: "Até 70% OFF em toda linha de bongs",
      description: "Aproveite agora! Produtos de qualidade com preços de quebrada",
      cta: "CONFERIR AGORA",
      link: "/categoria/bongs",
      gradient: "from-purple-600 via-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "⚡ LANÇAMENTO EXCLUSIVO",
      subtitle: "Nova linha de pipes artesanais",
      description: "Peças únicas feitas por artistas da cena underground",
      cta: "VER COLEÇÃO",
      link: "/categoria/pipes",
      gradient: "from-purple-700 via-indigo-600 to-purple-800"
    },
    {
      id: 3,
      title: "🌿 FRETE GRÁTIS",
      subtitle: "Em compras acima de R$ 150",
      description: "Receba em casa sem pagar nada a mais, direto da quebrada",
      cta: "APROVEITAR",
      link: "/",
      gradient: "from-green-600 via-purple-600 to-purple-700"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div 
      className="relative h-80 md:h-96 lg:h-[28rem] overflow-hidden rounded-2xl urban-card shadow-2xl"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className={`relative w-full h-full bg-gradient-to-br ${slide.gradient}`}>
            {/* Urban texture overlay */}
            <div className="absolute inset-0 header-texture opacity-80"></div>
            
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-float-urban" style={{ animationDelay: '0s' }}></div>
              <div className="absolute top-32 right-16 w-24 h-24 bg-white/5 rounded-full animate-float-urban" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-white/5 rounded-full animate-float-urban" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="relative z-10 flex items-center justify-center h-full px-8">
              <div className="text-center text-white space-y-6 max-w-4xl">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Flame className="w-6 h-6 text-yellow-400 animate-pulse" />
                  <Star className="w-5 h-5 text-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <Zap className="w-6 h-6 text-yellow-400 animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black animate-pulse-urban tracking-wider title-street">
                  {slide.title}
                </h1>
                
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold opacity-90 text-street">
                  {slide.subtitle}
                </h2>
                
                <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto font-medium text-body-street">
                  {slide.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                  <Link to={slide.link}>
                    <Button className="btn-street text-lg md:text-xl px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                      {slide.cta}
                    </Button>
                  </Link>
                  <Link to="/promocoes">
                    <Button className="btn-street-secondary text-lg px-6 py-4 transform hover:scale-105 transition-all duration-300 shadow-xl">
                      🌿 VER PROMOÇÕES
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Urban shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12 -translate-x-full animate-shimmer"></div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-purple-600/70 text-white rounded-full transition-all duration-300 flex items-center justify-center backdrop-blur-sm border border-white/20 group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-purple-600/70 text-white rounded-full transition-all duration-300 flex items-center justify-center backdrop-blur-sm border border-white/20 group"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8 shadow-lg' 
                : 'bg-white/40 hover:bg-white/60 w-3'
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
        <div 
          className="h-full bg-gradient-to-r from-purple-400 to-green-400 transition-all duration-4000 ease-linear"
          style={{ 
            width: isPlaying ? '100%' : '0%',
            transition: isPlaying ? 'width 4s linear' : 'none'
          }}
        />
      </div>
    </div>
  );
};

export default BannerCarousel;
