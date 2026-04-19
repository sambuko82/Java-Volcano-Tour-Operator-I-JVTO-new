'use client';

export type CurrencyCode = 'IDR';

const idrFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function useCurrency() {
  const formatPrice = (idrAmount: number) => idrFormatter.format(idrAmount);

  return {
    currency: 'IDR' as CurrencyCode,
    changeCurrency: (_code: CurrencyCode) => {},
    formatPrice,
    currencies: ['IDR'] as CurrencyCode[],
  };
}
