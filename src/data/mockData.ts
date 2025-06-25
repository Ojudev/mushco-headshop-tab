
import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Bongs',
    slug: 'bongs',
    image: '',
    description: 'Bongs de vidro e acrílico de alta qualidade'
  },
  {
    id: '2',
    name: 'Pipes',
    slug: 'pipes',
    image: '',
    description: 'Pipes artesanais e importados'
  },
  {
    id: '3',
    name: 'Sedas',
    slug: 'sedas',
    image: '',
    description: 'Sedas premium para uma experiência única'
  },
  {
    id: '4',
    name: 'Dichavadores',
    slug: 'dichavadores',
    image: '',
    description: 'Dichavadores de metal e madeira'
  },
  {
    id: '5',
    name: 'Isqueiros e Cinzeiros',
    slug: 'isqueiros-cinzeiros',
    image: '',
    description: 'Isqueiros premium e cinzeiros decorativos'
  },
  {
    id: '6',
    name: 'Acessórios',
    slug: 'acessorios',
    image: '',
    description: 'Todos os acessórios que você precisa'
  }
];

export const products: Product[] = [
  // Bongs
  {
    id: '1',
    name: 'Bong de Vidro Cristal Verde',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400',
    category: 'bongs',
    description: 'Bong de vidro borossilicato de alta qualidade com design elegante e furos para gelo.',
    rating: 4.8,
    reviewCount: 42,
    inStock: true,
    isBestSeller: true,
    discount: 25,
    features: ['Vidro borossilicato', 'Furos para gelo', 'Base estável', 'Fácil limpeza']
  },
  {
    id: '2',
    name: 'Bong Acrílico Rainbow',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400',
    category: 'bongs',
    description: 'Bong colorido em acrílico resistente, perfeito para iniciantes.',
    rating: 4.2,
    reviewCount: 28,
    inStock: true,
    isNew: true,
    features: ['Acrílico resistente', 'Design colorido', 'Leve e portátil', 'Preço acessível']
  },
  {
    id: '3',
    name: 'Bong Percolator Duplo',
    price: 599.99,
    originalPrice: 799.99,
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400',
    category: 'bongs',
    description: 'Bong premium com sistema de percolação dupla para máxima suavidade.',
    rating: 4.9,
    reviewCount: 67,
    inStock: true,
    isBestSeller: true,
    discount: 25,
    features: ['Sistema duplo percolator', 'Vidro grosso', 'Filtração superior', 'Design profissional']
  },

  // Pipes
  {
    id: '4',
    name: 'Pipe de Madeira Artesanal',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400',
    category: 'pipes',
    description: 'Pipe de madeira nobre trabalhado à mão por artesãos especializados.',
    rating: 4.6,
    reviewCount: 35,
    inStock: true,
    features: ['Madeira nobre', 'Artesanal', 'Acabamento premium', 'Conforto ergonômico']
  },
  {
    id: '5',
    name: 'Pipe de Vidro Espiral',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400',
    category: 'pipes',
    description: 'Pipe de vidro com design em espiral único e cores vibrantes.',
    rating: 4.4,
    reviewCount: 23,
    inStock: true,
    isNew: true,
    discount: 20,
    features: ['Design espiral', 'Vidro colorido', 'Compacto', 'Fácil manuseio']
  },

  // Sedas
  {
    id: '6',
    name: 'Sedas Raw Classic King Size',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400',
    category: 'sedas',
    description: 'Sedas premium Raw Classic no tamanho king size para uma experiência autêntica.',
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    isBestSeller: true,
    features: ['100% natural', 'Queima lenta', 'Sem branqueamento', 'King size']
  },
  {
    id: '7',
    name: 'Sedas Elemento Rice Papers',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400',
    category: 'sedas',
    description: 'Sedas ultrafinas feitas de arroz para uma queima limpa e sabor puro.',
    rating: 4.5,
    reviewCount: 89,
    inStock: true,
    features: ['Ultrafinas', 'Papel de arroz', 'Queima limpa', 'Sabor neutro']
  },

  // Dichavadores
  {
    id: '8',
    name: 'Dichavador Alumínio 4 Partes',
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400',
    category: 'dichavadores',
    description: 'Dichavador de alumínio anodizado com 4 partes e tela para pólen.',
    rating: 4.8,
    reviewCount: 94,
    inStock: true,
    discount: 25,
    features: ['4 partes', 'Alumínio anodizado', 'Tela para pólen', 'Dentes afiados']
  },
  {
    id: '9',
    name: 'Dichavador Madeira Natural',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400',
    category: 'dichavadores',
    description: 'Dichavador ecológico feito em madeira natural com design único.',
    rating: 4.3,
    reviewCount: 47,
    inStock: true,
    isNew: true,
    features: ['Madeira natural', 'Ecológico', 'Design único', 'Artesanal']
  },

  // Isqueiros e Cinzeiros
  {
    id: '10',
    name: 'Isqueiro Zippo Original',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400',
    category: 'isqueiros-cinzeiros',
    description: 'Isqueiro Zippo original com gravação personalizada e garantia vitalícia.',
    rating: 4.9,
    reviewCount: 78,
    inStock: true,
    isBestSeller: true,
    features: ['Original Zippo', 'Garantia vitalícia', 'Gravação personalizada', 'Resistente ao vento']
  },
  {
    id: '11',
    name: 'Cinzeiro Cerâmica Artística',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400',
    category: 'isqueiros-cinzeiros',
    description: 'Cinzeiro de cerâmica com design artístico e apoios para charutos.',
    rating: 4.4,
    reviewCount: 32,
    inStock: true,
    features: ['Cerâmica artística', 'Apoios para charutos', 'Fácil limpeza', 'Design decorativo']
  },

  // Acessórios
  {
    id: '12',
    name: 'Kit Limpeza Completo',
    price: 34.99,
    originalPrice: 49.99,
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400',
    category: 'acessorios',
    description: 'Kit completo para limpeza de bongs, pipes e outros acessórios.',
    rating: 4.6,
    reviewCount: 125,
    inStock: true,
    discount: 30,
    features: ['Kit completo', 'Escovas especiais', 'Líquido limpador', 'Panos de microfibra']
  },
  {
    id: '13',
    name: 'Bandeja Rolling Madeira',
    price: 67.99,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400',
    category: 'acessorios',
    description: 'Bandeja de madeira com compartimentos para organização perfeita.',
    rating: 4.7,
    reviewCount: 63,
    inStock: true,
    isNew: true,
    features: ['Madeira premium', 'Compartimentos organizados', 'Bordas elevadas', 'Design elegante']
  }
];

export const bannerSlides = [
  {
    id: '1',
    title: 'Promoção Especial',
    subtitle: 'Leve 3, Pague 2 em Sedas Selecionadas',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800',
    cta: 'Ver Ofertas',
    link: '/categoria/sedas'
  },
  {
    id: '2',
    title: 'Frete Grátis',
    subtitle: 'Para pedidos acima de R$ 200',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800',
    cta: 'Comprar Agora',
    link: '/produtos'
  },
  {
    id: '3',
    title: 'Novidades',
    subtitle: 'Confira os últimos lançamentos da semana',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800',
    cta: 'Ver Novidades',
    link: '/categoria/acessorios'
  }
];
