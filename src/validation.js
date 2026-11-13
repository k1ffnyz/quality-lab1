
// Проверяю, соответствует ли строка формату email
export function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return typeof email === 'string' && emailPattern.test(email);
}
