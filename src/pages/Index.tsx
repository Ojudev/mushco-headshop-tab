
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Headphones, Zap, Fire, Sparkles, Heart, ShoppingCart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BannerCarousel from '../components/BannerCarousel';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/mockData';
import { Button } from '../components/ui/button';

const Index = () => {
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);
  const newProducts = products.filter(p => p.isNew).slice(0, 4);
  const onSale = products.filter(p => p.discount).slice(0, 4);

  return (
    <div className="min-h-screen bg-background grunge-texture">
      <Header />
      
      <main>
        {/* Hero Banner */}
        <section className="container mx-auto px-4 py-8 animate-fade-in-up">
          <BannerCarousel />
        </section>

        {/* Categorias em Destaque */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black mb-6 neon-text animate-pulse-neon">
              🔥 CATEGORIAS DA QUEBRADA
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl">
              Selecione sua vibe e mergulhe no universo underground
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/categoria/${category.slug}`}
                className="group text-center space-y-4 p-6 grunge-card hover:scale-105 transition-all duration-300 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent"></div>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-purple-gradient rounded-full flex items-center justify-center">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-lg group-hover:text-purple-400 transition-colors neon-text-green">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </section>

        {/* Produtos Mais Vendidos */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-12 animate-fade-in-up">
            <div className="flex items-center space-x-4">
              <Fire className="w-10 h-10 text-orange-500 animate-pulse" />
              <div>
                <h2 className="text-4xl md:text-5xl font-black neon-text">MAIS VENDIDOS</h2>
                <p className="text-gray-300 text-lg mt-2">Os hits da galera</p>
              </div>
            </div>
            <Link to="/mais-vendidos">
              <Button className="btn-grunge hidden md:flex items-center space-x-2">
                <span>Ver Todos</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product, index) => (
              <div key={product.id} className="animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>

        {/* Promoção Especial Grunge */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-600 to-indigo-900"></div>
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
            <div className="absolute top-1/2 right-20 w-24 h-24 bg-purple-400/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-green-400/5 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="animate-fade-in-up">
              <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-6 animate-pulse" />
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 animate-pulse-neon">
                PROMOÇÃO INSANA!
              </h2>
              <p className="text-2xl md:text-3xl mb-4 text-purple-200 font-bold">
                🎯 LEVE 3, PAGUE 2
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Em toda linha de sedas premium!
              </p>
              <p className="text-lg mb-8 text-yellow-300 font-bold animate-pulse">
                ⏰ VÁLIDO SÓ ATÉ DOMINGO!
              </p>
              <Link to="/categoria/sedas">
                <Button className="btn-grunge text-xl px-12 py-6 transform hover:scale-110 transition-all duration-300">
                  🔥 APROVEITAR AGORA
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Lançamentos */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-12 animate-fade-in-up">
            <div className="flex items-center space-x-4">
              <Sparkles className="w-10 h-10 text-purple-400 animate-pulse" />
              <div>
                <h2 className="text-4xl md:text-5xl font-black neon-text">LANÇAMENTOS</h2>
                <p className="text-gray-300 text-lg mt-2">Fresquinhos da fornalha</p>
              </div>
            </div>
            <Link to="/lancamentos">
              <Button className="btn-grunge-secondary hidden md:flex items-center space-x-2">
                <span>Ver Todos</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map((product, index) => (
              <div key={product.id} className="animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>

        {/* Ofertas com Desconto */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-purple-900/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center justify-between mb-12 animate-fade-in-up">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Heart className="w-10 h-10 text-red-500 animate-pulse" />
                  <Zap className="w-6 h-6 text-yellow-400 absolute -top-1 -right-1 animate-bounce" />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-black neon-text">OFERTAS RAIZ</h2>
                  <p className="text-gray-300 text-lg mt-2">Descontos que doem no coração</p>
                </div>
              </div>
              <Link to="/promocoes">
                <Button className="btn-grunge hidden md:flex items-center space-x-2">
                  <span>Ver Todas</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {onSale.map((product, index) => (
                <div key={product.id} className="animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios Grunge */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Truck,
                title: "FRETE GRÁTIS",
                description: "Acima de R$ 200 em todo o Brasil",
                gradient: "from-purple-600 to-purple-800"
              },
              {
                icon: Shield,
                title: "COMPRA BLINDADA",
                description: "100% seguro e protegido",
                gradient: "from-green-600 to-green-800"
              },
              {
                icon: Headphones,
                title: "SUPORTE RAIZ",
                description: "Atendimento de segunda à sexta",
                gradient: "from-purple-700 to-indigo-800"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center space-y-6 grunge-card p-8 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-full flex items-center justify-center mx-auto relative`}>
                  <benefit.icon className="w-10 h-10 text-white" />
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                </div>
                <h3 className="text-2xl font-bold neon-text">{benefit.title}</h3>
                <p className="text-gray-300 text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Depoimentos Grunge */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-green-900/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-black mb-6 neon-text">
                🗣️ A GALERA FALA
              </h2>
              <p className="text-gray-300 text-xl">Relatos reais da quebrada</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="grunge-card p-8 animate-slide-in-right" style={{ animationDelay: `${i * 0.2}s` }}>
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    "Produtos de qualidade insana e entrega mais rápida que minha ansiedade. Tabacaria Verde é o esquema!"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-gradient rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{i}</span>
                    </div>
                    <div>
                      <p className="font-bold text-purple-400">Mano {i}</p>
                      <p className="text-sm text-gray-400">Cliente Verificado</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
