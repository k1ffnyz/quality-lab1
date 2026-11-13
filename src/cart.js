
// Считаю общую стоимость товаров в корзине
export function calculateTotal(items) {
  return items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
}

// Рассчитываю стоимость корзины с учетом скидки
export function calculateDiscount(total, discountPercent) {
  return total - (total * discountPercent) / 100;
}
// Форматирую сумму в выбранной валюте
export function formatCurrency(amount, currency) {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: currency,
  }).format(amount);
}