// API Configuration
export const API_URL = 'https://finance-backend-production-8578.up.railway.app';

// Configuração de cores por categoria
export const CATEGORIA_CONFIG = {
  'Empréstimos': { cor: '#60A5FA', icon: 'DollarSign' },
  'Aluguel/Condomínio': { cor: '#34D399', icon: 'Home' },
  'Internet': { cor: '#A78BFA', icon: 'Wifi' },
  'Celular': { cor: '#F472B6', icon: 'Smartphone' },
  'Carro': { cor: '#FB923C', icon: 'Car' },
  'Assinaturas': { cor: '#FBBF24', icon: 'Music' },
  'Cartões de Crédito': { cor: '#EF4444', icon: 'CreditCard' },
  'Mercado': { cor: '#10B981', icon: 'ShoppingCart' },
  'Farmácia': { cor: '#06B6D4', icon: 'Pill' },
  'Gasolina': { cor: '#F97316', icon: 'Zap' },
  'Lazer': { cor: '#EC4899', icon: 'Music' },
  'Compras': { cor: '#8B5CF6', icon: 'ShoppingCart' },
  'Salário': { cor: '#22C55E', icon: 'TrendingUp' },
  'Freelance': { cor: '#3B82F6', icon: 'DollarSign' },
  'Investimentos': { cor: '#14B8A6', icon: 'TrendingUp' },
  'Outros': { cor: '#6B7280', icon: 'DollarSign' }
};

// Ícones disponíveis
export const ICONES_DISPONIVEIS = [
  'Home', 'Car', 'ShoppingCart', 'Pill', 'Zap', 'Wifi', 'Smartphone', 'Music',
  'Coffee', 'Book', 'Dumbbell', 'Plane', 'Gift', 'Heart', 'Briefcase', 'Gamepad2',
  'Pizza', 'Film', 'Shirt', 'Wrench', 'CreditCard', 'Wallet', 'DollarSign', 'Tag'
];

// Cores disponíveis
export const CORES_DISPONIVEIS = [
  '#EF4444', '#F97316', '#F59E0B', '#EAB308',
  '#84CC16', '#22C55E', '#10B981', '#14B8A6',
  '#06B6D4', '#0EA5E9', '#3B82F6', '#6366F1',
  '#8B5CF6', '#A855F7', '#D946EF', '#EC4899',
  '#F43F5E', '#6B7280',
];

// Cores semânticas
export const SEMANTIC_COLORS = {
  success: {
    bg: 'bg-green-50 dark:bg-green-900/20',
    text: 'text-green-700 dark:text-green-400',
    border: 'border-green-200 dark:border-green-800',
    button: 'bg-green-600 hover:bg-green-700',
  },
  error: {
    bg: 'bg-red-50 dark:bg-red-900/20',
    text: 'text-red-700 dark:text-red-400',
    border: 'border-red-200 dark:border-red-800',
    button: 'bg-red-600 hover:bg-red-700',
  },
  warning: {
    bg: 'bg-yellow-50 dark:bg-yellow-900/20',
    text: 'text-yellow-700 dark:text-yellow-400',
    border: 'border-yellow-200 dark:border-yellow-800',
    button: 'bg-yellow-600 hover:bg-yellow-700',
  },
  info: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    text: 'text-blue-700 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-800',
    button: 'bg-blue-600 hover:bg-blue-700',
  },
  neutral: {
    bg: 'bg-gray-50 dark:bg-gray-900/20',
    text: 'text-gray-700 dark:text-gray-400',
    border: 'border-gray-200 dark:border-gray-800',
    button: 'bg-gray-600 hover:bg-gray-700',
  }
};

// Categorias padrão
export const CATEGORIAS_FIXAS = [
  'Aluguel/Condomínio', 'Internet', 'Celular', 'Empréstimos'
];

export const CATEGORIAS_VARIAVEIS = [
  'Mercado', 'Farmácia', 'Gasolina', 'Lazer', 'Compras', 'Carro', 'Assinaturas', 'Outros'
];

export const CATEGORIAS_RECEITA = [
  'Salário', 'Freelance', 'Investimentos', 'Outros'
];
