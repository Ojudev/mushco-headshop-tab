
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

        {/* Categorias da Quebrada */}
        <section className="container mx-auto px-4 py-16 relative">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black mb-6 urban-glow animate-pulse-urban title-street">
              🌿 CATEGORIAS DA QUEBRADA
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl text-body-street">
              Selecione sua vibe e mergulhe no universo underground da quebrada
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/categoria/${category.slug}`}
                className="group text-center space-y-4 p-6 urban-card hover:scale-105 transition-all duration-300 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-purple-100/50 to-green-100/30 border border-purple-200/50 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-green-600/10"></div>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-16 h-16 purple-street-gradient rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Leaf className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-lg group-hover:text-purple-700 transition-colors urban-glow-green text-street">
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
                <h2 className="text-4xl md:text-5xl font-black urban-glow animate-pulse-urban title-street">MAIS VENDIDOS</h2>
                <p className="text-gray-700 text-lg mt-2 text-body-street">Os hits da galera que manda bem</p>
              </div>
            </div>
            <Link to="/mais-vendidos">
              <Button className="btn-street hidden md:flex items-center space-x-2">
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

        {/* Seção Seleção da Vibe */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 via-purple-700/90 to-indigo-800/90"></div>
          <div className="absolute inset-0 header-texture"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-float-urban"></div>
            <div className="absolute top-1/2 right-20 w-24 h-24 bg-green-400/10 rounded-full animate-float-urban" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-yellow-400/5 rounded-full animate-float-urban" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="animate-fade-in-up">
              <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-6 animate-pulse" />
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 animate-pulse-urban title-street">
                QUEIMA DE ESTOQUE! 🔥
              </h2>
              <p className="text-2xl md:text-3xl mb-4 text-green-300 font-bold text-street">
                🎯 LEVE 3, PAGUE 2
              </p>
              <p className="text-xl mb-4 text-white text-body-street">
                Em toda linha de sedas premium da quebrada!
              </p>
              <p className="text-lg mb-8 text-yellow-300 font-bold animate-pulse text-street">
                ⏰ VÁLIDO SÓ ATÉ DOMINGO - CORRE QUE VAI ACABAR!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/categoria/sedas">
                  <Button className="btn-street text-xl px-12 py-6 transform hover:scale-110 transition-all duration-300 shadow-2xl">
                    🔥 APROVEITAR AGORA
                  </Button>
                </Link>
                <Link to="/promocoes">
                  <Button className="btn-street-secondary text-xl px-8 py-6 transform hover:scale-110 transition-all duration-300 shadow-2xl">
                    🌿 VER TODAS PROMOÇÕES
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
                <h2 className="text-4xl md:text-5xl font-black urban-glow animate-pulse-urban title-street">LANÇAMENTOS</h2>
                <p className="text-gray-700 text-lg mt-2 text-body-street">Fresquinhos da fornalha, direto da fonte</p>
              </div>
            </div>
            <Link to="/lancamentos">
              <Button className="btn-street-secondary hidden md:flex items-center space-x-2">
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
          <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-purple-100/30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center justify-between mb-12 animate-fade-in-up">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Heart className="w-10 h-10 text-red-500 animate-pulse" />
                  <Zap className="w-6 h-6 text-yellow-400 absolute -top-1 -right-1 animate-bounce" />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-black urban-glow animate-pulse-urban title-street">OFERTAS DA QUEBRADA</h2>
                  <p className="text-gray-700 text-lg mt-2 text-body-street">Descontos que doem no coração, preço de rua</p>
                </div>
              </div>
              <Link to="/promocoes">
                <Button className="btn-street hidden md:flex items-center space-x-2">
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

        {/* Benefícios da Quebrada */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black mb-6 urban-glow animate-pulse-urban title-street">
              🚀 BENEFÍCIOS DA QUEBRADA
            </h2>
            <p className="text-gray-700 text-xl text-body-street">Por que somos a escolha certa da galera</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Truck,
                title: "FRETE GRÁTIS",
                description: "Acima de R$ 200 em todo o Brasil, entrega expressa",
                gradient: "purple-street-gradient"
              },
              {
                icon: Shield,
                title: "COMPRA BLINDADA",
                description: "100% seguro e protegido, garantia total",
                gradient: "green-leaf-gradient"
              },
              {
                icon: Headphones,
                title: "SUPORTE RAIZ",
                description: "Atendimento humano de segunda à sexta, sem robô",
                gradient: "purple-street-gradient"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center space-y-6 urban-card p-8 animate-fade-in-up group" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`w-20 h-20 ${benefit.gradient} rounded-full flex items-center justify-center mx-auto relative group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  <benefit.icon className="w-10 h-10 text-white" />
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                </div>
                <h3 className="text-2xl font-bold urban-glow-green title-street">{benefit.title}</h3>
                <p className="text-gray-700 text-lg text-body-street">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Depoimentos da Galera */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-green-50/30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-black mb-6 urban-glow animate-pulse-urban title-street">
                🗣️ A GALERA FALA
              </h2>
              <p className="text-gray-700 text-xl text-body-street">Relatos reais da quebrada, confiança que se prova</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="urban-card p-8 animate-slide-in-right group" style={{ animationDelay: `${i * 0.2}s` }}>
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed text-body-street">
                    "Produtos de qualidade insana e entrega mais rápida que minha ansiedade. Tabacaria Verde é o esquema certo da quebrada! 🔥"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 purple-street-gradient rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg title-street">{i}</span>
                    </div>
                    <div>
                      <p className="font-bold text-purple-700 text-street">Mano da Quebrada {i}</p>
                      <p className="text-sm text-gray-600 text-body-street">Cliente Verificado ✅</p>
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
