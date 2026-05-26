'use client';

import { useState, useEffect } from 'react';
import { SITE_CONFIG } from '@/lib/siteConfig';

export type CurrencyCode = keyof typeof SITE_CONFIG.exchangeRates | 'IDR';

export function useCurrency() {
  const [currency, setCurrency] = useState<CurrencyCode>('IDR');

  useEffect(() => {
    const saved = localStorage.getItem('jvto_currency') as CurrencyCode;
    if (saved && (saved === 'IDR' || SITE_CONFIG.exchangeRates[saved as keyof typeof SITE_CONFIG.exchangeRates])) {
      setCurrency(saved);
    }
  }, []);

  const changeCurrency = (code: CurrencyCode) => {
    setCurrency(code);
    localStorage.setItem('jvto_currency', code);
  };

  const formatPrice = (idrAmount: number) => {
    if (currency === 'IDR') {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(idrAmount);
    }

    const rate = SITE_CONFIG.exchangeRates[currency as keyof typeof SITE_CONFIG.exchangeRates];
    const converted = idrAmount / rate;

    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(converted);
  };

  return {
    currency,
    changeCurrency,
    formatPrice,
    currencies: ['IDR', ...Object.keys(SITE_CONFIG.exchangeRates)] as CurrencyCode[]
  };
}
