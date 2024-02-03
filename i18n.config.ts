export default defineI18nConfig(() => ({
  legacy: false,
  locale: "ua",
  messages: {
    en: {
      table: "Table",
      pay: "Pay",
      payInPart: "Pay in part",
      restMenu: "Restaurant Menu",
      order: "Order {number} for {price} uah",
    },
    ua: {
      table: "Стіл",
      pay: "Оплатити",
      payInPart: "Оплатити частково",
      restMenu: "Меню ресторану",
      order: "Замовлення {number} на {price} грн",
    },
  },
}));
