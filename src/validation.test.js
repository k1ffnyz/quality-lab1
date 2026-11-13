
import { describe, it, expect } from 'vitest';
import { validateEmail } from './validation.js';

// Проверяю правильность введённого адреса электронной почты
describe('Проверка email', () => {
  it('принимает корректный email', () => {
    expect(validateEmail('user@example.com')).toBe(true);
  });

  it('отклоняет email без символа @', () => {
    expect(validateEmail('userexample.com')).toBe(false);
  });

  it('отклоняет email без домена', () => {
    expect(validateEmail('user@')).toBe(false);
  });

  it('отклоняет email без имени пользователя', () => {
    expect(validateEmail('@example.com')).toBe(false);
  });

  it('отклоняет пустую строку', () => {
    expect(validateEmail('')).toBe(false);
  });

  it('отклоняет email с пробелами', () => {
    expect(validateEmail('user name@example.com')).toBe(false);
  });

  it('отклоняет значение, которое не является строкой', () => {
    expect(validateEmail(123)).toBe(false);
  });
});
