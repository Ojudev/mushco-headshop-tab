
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Headphones } from 'lucide-react';
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
        <section className="container mx-auto px-4 py-8">
          <BannerCarousel />
        </section>

        {/* Categorias em Destaque */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Explore Nossas Categorias</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubra nossa seleção cuidadosa de produtos premium para uma experiência única
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/categoria/${category.slug}`}
                className="group text-center space-y-3 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-200"
              >
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <h3 className="font-medium text-sm group-hover:text-green-600 transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </section>

        {/* Produtos Mais Vendidos */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">🔥 Mais Vendidos</h2>
              <p className="text-gray-600">Os produtos favoritos dos nossos clientes</p>
            </div>
            <Link to="/mais-vendidos">
              <Button variant="outline" className="hidden md:flex items-center space-x-2">
                <span>Ver Todos</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Promoção Especial */}
        <section className="bg-gradient-to-r from-green-500 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Oferta Especial!</h2>
            <p className="text-xl mb-6">Leve 3, Pague 2 em toda linha de sedas</p>
            <p className="text-lg mb-8 opacity-90">Válido apenas esta semana!</p>
            <Link to="/categoria/sedas">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Ver Sedas em Promoção
              </Button>
            </Link>
          </div>
        </section>

        {/* Lançamentos */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">✨ Lançamentos</h2>
              <p className="text-gray-600">Confira as novidades que acabaram de chegar</p>
            </div>
            <Link to="/lancamentos">
              <Button variant="outline" className="hidden md:flex items-center space-x-2">
                <span>Ver Todos</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Ofertas com Desconto */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">💰 Ofertas Imperdíveis</h2>
                <p className="text-gray-600">Produtos com desconto especial por tempo limitado</p>
              </div>
              <Link to="/promocoes">
                <Button variant="outline" className="hidden md:flex items-center space-x-2">
                  <span>Ver Todas</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {onSale.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Frete Grátis</h3>
              <p className="text-gray-600">Para pedidos acima de R$ 200 em todo o Brasil</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Compra Segura</h3>
              <p className="text-gray-600">Seus dados protegidos e pagamento 100% seguro</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Headphones className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Suporte Especializado</h3>
              <p className="text-gray-600">Atendimento personalizado de segunda a sexta</p>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
              <p className="text-gray-600">Avaliações reais de quem já comprou conosco</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Produtos de excelente qualidade e entrega super rápida. Recomendo demais a Tabacaria Verde!"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div>
                      <p className="font-medium">Cliente {i}</p>
                      <p className="text-sm text-gray-500">Comprador verificado</p>
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
