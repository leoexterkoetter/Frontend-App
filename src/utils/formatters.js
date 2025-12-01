// Utilitários de formatação

// Valor máximo permitido (1 milhão)
export const MAX_VALOR = 1000000;

// Formata número para moeda brasileira (R$ 1.234,56)
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

// Formata valor para input (1234.56 -> "1.234,56")
export const formatCurrencyInput = (value) => {
  if (!value && value !== 0) return '';
  
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(numValue);
};

// Parse de string monetária para número (remove formatação)
// "1.234,56" -> 1234.56
export const parseCurrencyInput = (value) => {
  if (!value) return 0;
  
  // Remove tudo exceto números e vírgula
  const cleaned = value.replace(/[^\d,]/g, '');
  
  // Substitui vírgula por ponto
  const withDot = cleaned.replace(',', '.');
  
  const parsed = parseFloat(withDot) || 0;
  
  // Limita ao valor máximo
  return Math.min(parsed, MAX_VALOR);
};

// Valida se o valor está dentro do limite
export const isValidValue = (value) => {
  const numValue = typeof value === 'string' ? parseCurrencyInput(value) : value;
  return numValue >= 0 && numValue <= MAX_VALOR;
};

// Formata input enquanto digita (máscara de moeda)
export const formatCurrencyOnType = (inputValue) => {
  // Remove tudo exceto números
  let numbers = inputValue.replace(/\D/g, '');
  
  if (!numbers) return '';
  
  // Converte para centavos
  const value = parseInt(numbers, 10);
  
  // Limita ao valor máximo (em centavos)
  const limitedValue = Math.min(value, MAX_VALOR * 100);
  
  // Converte de centavos para reais
  const reais = limitedValue / 100;
  
  // Formata
  return formatCurrencyInput(reais);
};

export const formatDate = (dateString) => {
  return new Date(dateString + 'T00:00:00').toLocaleDateString('pt-BR');
};

export const formatMonth = (monthString) => {
  const [year, month] = monthString.split('-');
  const date = new Date(year, month - 1);
  return date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
};

export const formatShortMonth = (monthString) => {
  const [year, month] = monthString.split('-');
  const date = new Date(year, month - 1);
  return date.toLocaleDateString('pt-BR', { month: 'short' });
};

export const getCurrentMonth = () => {
  return new Date().toISOString().slice(0, 7);
};