import { describe, it, expect } from 'vitest';
import { add } from './math.js';

describe('Проверка функции сложения', () => {
  it('возвращает сумму двух чисел', () => {
    expect(add(2, 2)).toBe(4);
  });
});
