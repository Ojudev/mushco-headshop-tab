import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Headphones, Zap, Flame, Sparkles, Heart, ShoppingCart, Leaf } from 'lucide-react';
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Banner */}
        <section className="container mx-auto px-4 py-8 animate-fade-in-up">
          <BannerCarousel />
        </section>

        {/* Categorias */}
        <section className="container mx-auto px-4 py-16 relative">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black mb-6 mj-glow-purple animate-mj-glow-pulse mj-title">
              🌿 NOSSAS CATEGORIAS
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl mj-body-text">
              Explore nossa seleção de produtos premium
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/categoria/${category.slug}`}
                className="group text-center space-y-4 p-6 mj-card hover:scale-105 transition-all duration-300 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 border border-purple-200 relative">
                  <div className="w-full h-full flex items-center justify-center">
                    <Leaf className="w-12 h-12 text-purple-600" />
                  </div>
                </div>
                <h3 className="font-bold text-lg group-hover:text-purple-700 transition-colors mj-glow-purple mj-text">
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
              <Flame className="w-10 h-10 text-orange-500 animate-pulse" />
              <div>
                <h2 className="text-4xl md:text-5xl font-black mj-glow-purple animate-mj-glow-pulse mj-title">MAIS VENDIDOS</h2>
                <p className="text-gray-700 text-lg mt-2 mj-body-text">Os favoritos dos nossos clientes</p>
              </div>
            </div>
            <Link to="/mais-vendidos">
              <Button className="btn-mj-secondary hidden md:flex items-center space-x-2">
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

        {/* Seção de Promoção Especial */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 mj-purple-gradient"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-mj-float"></div>
            <div className="absolute top-1/2 right-20 w-24 h-24 bg-green-400/10 rounded-full animate-mj-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-yellow-400/5 rounded-full animate-mj-float" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="animate-fade-in-up">
              <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-6 animate-pulse" />
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 mj-glow-white mj-title">
                OFERTAS ESPECIAIS! 🔥
              </h2>
              <p className="text-2xl md:text-3xl mb-4 text-green-300 font-bold mj-text">
                🎯 DESCONTOS IMPERDÍVEIS
              </p>
              <p className="text-xl mb-4 text-white mj-body-text">
                Produtos selecionados com preços especiais!
              </p>
              <p className="text-lg mb-8 text-yellow-300 font-bold animate-pulse mj-text">
                ⏰ PROMOÇÕES POR TEMPO LIMITADO
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/categoria/sedas">
                  <Button className="btn-mj-secondary bg-white text-purple-600 text-xl px-12 py-6 transform hover:scale-110 transition-all duration-300 shadow-2xl">
                    🔥 VER OFERTAS
                  </Button>
                </Link>
                <Link to="/promocoes">
                  <Button className="btn-mj-primary text-xl px-8 py-6 transform hover:scale-110 transition-all duration-300 shadow-2xl">
                    🌿 TODOS OS PRODUTOS
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Lançamentos */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-12 animate-fade-in-up">
            <div className="flex items-center space-x-4">
              <Sparkles className="w-10 h-10 text-purple-600 animate-pulse" />
              <div>
                <h2 className="text-4xl md:text-5xl font-black mj-glow-purple animate-mj-glow-pulse mj-title">LANÇAMENTOS</h2>
                <p className="text-gray-700 text-lg mt-2 mj-body-text">Os produtos mais novos da nossa coleção</p>
              </div>
            </div>
            <Link to="/lancamentos">
              <Button className="btn-mj-secondary hidden md:flex items-center space-x-2">
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

        {/* Ofertas no Precinho */}
        <section className="py-16 relative">
          <div className="absolute inset-0 mj-purple-gradient"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center justify-between mb-12 animate-fade-in-up">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Heart className="w-10 h-10 text-red-500 animate-pulse" />
                  <Zap className="w-6 h-6 text-yellow-400 absolute -top-1 -right-1 animate-bounce" />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-black mj-glow-white mj-title">OFERTAS NO PRECINHO</h2>
                  <p className="text-purple-200 text-lg mt-2 mj-body-text">Descontos reais pra você economizar com estilo</p>
                </div>
              </div>
              <Link to="/promocoes">
                <Button className="btn-mj-secondary bg-white text-purple-600 hidden md:flex items-center space-x-2">
                  <span>Ver Todas</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {onSale.map((product, index) => (
                <div key={product.id} className="animate-slide-in-right bg-white rounded-xl shadow-lg overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vantagens da Mush Co. */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black mb-6 mj-glow-purple animate-mj-glow-pulse mj-title">
              🚀 VANTAGENS DA MUSH CO.
            </h2>
            <p className="text-gray-700 text-xl mj-body-text">Por que escolher a Mush Co.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Truck,
                title: "FRETE GRÁTIS",
                description: "Acima de R$ 200 em todo o Brasil, entrega rápida e segura",
                gradient: "mj-purple-gradient"
              },
              {
                icon: Shield,
                title: "COMPRA BLINDADA",
                description: "100% seguro e protegido, garantia total em todos os produtos",
                gradient: "mj-purple-vibrant-gradient"
              },
              {
                icon: Headphones,
                title: "SUPORTE PREMIUM",
                description: "Atendimento especializado de segunda à sexta, sempre pronto para ajudar",
                gradient: "mj-purple-gradient"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center space-y-6 mj-card p-8 animate-fade-in-up group" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`w-20 h-20 ${benefit.gradient} rounded-full flex items-center justify-center mx-auto relative group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  <benefit.icon className="w-10 h-10 text-white" />
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                </div>
                <h3 className="text-2xl font-bold mj-glow-purple mj-title">{benefit.title}</h3>
                <p className="text-gray-700 text-lg mj-body-text">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-gray-50/30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-black mb-6 mj-glow-purple animate-mj-glow-pulse mj-title">
                🗣️ O QUE DIZEM NOSSOS CLIENTES
              </h2>
              <p className="text-gray-700 text-xl mj-body-text">Avaliações reais de quem confia na Mush Co.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="mj-card p-8 animate-slide-in-right group" style={{ animationDelay: `${i * 0.2}s` }}>
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed mj-body-text">
                    "Produtos de excelente qualidade e entrega super rápida. A Mush Co. é confiável e tem os melhores preços! 🔥"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 mj-purple-vibrant-gradient rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg mj-title">{i}</span>
                    </div>
                    <div>
                      <p className="font-bold text-purple-700 mj-text">Cliente Satisfeito {i}</p>
                      <p className="text-sm text-gray-600 mj-body-text">Cliente Verificado ✅</p>
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
