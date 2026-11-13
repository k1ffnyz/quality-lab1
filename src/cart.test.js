
import { describe, it, expect } from 'vitest';
import { calculateTotal, calculateDiscount } from './cart.js';

describe('Расчёт стоимости корзины', () => {
  it('считает стоимость одного товара', () => {
    const items = [{ price: 100, quantity: 2 }];

    expect(calculateTotal(items)).toBe(200);
  });

  it('считает общую стоимость нескольких товаров', () => {
    const items = [
      { price: 100, quantity: 2 },
      { price: 50, quantity: 3 },
    ];

    expect(calculateTotal(items)).toBe(350);
  });

  it('возвращает 0 для пустой корзины', () => {
    expect(calculateTotal([])).toBe(0);
  });

  it('применяет скидку 10 процентов', () => {
    expect(calculateDiscount(1000, 10)).toBe(900);
  });

  it('возвращает исходную сумму при скидке 0 процентов', () => {
    expect(calculateDiscount(1000, 0)).toBe(1000);
  });

  it('возвращает 0 при скидке 100 процентов', () => {
    expect(calculateDiscount(1000, 100)).toBe(0);
  });
});
