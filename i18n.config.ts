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
      search: "Search",
      uah: "uah",
      foods: {
        all: "All",
        pizza: "Pizza",
        burger: "Burger",
        salad: "Salad",
        soup: "Soup",
        sushi: "Sushi",
        shaurma: "Shaurma",
        sweets: "Sweets",
      },
    },
    ua: {
      table: "Стіл",
      pay: "Оплатити",
      payInPart: "Оплатити частково",
      restMenu: "Меню ресторану",
      order: "Замовлення {number} на {price} грн",
      search: "Пошук",
      uah: "грн",
      foods: {
        all: "Всі",
        pizza: "Піца",
        burger: "Бургер",
        salad: "Салат",
        soup: "Суп",
        sushi: "Суші",
        shaurma: "Шаурма",
        sweets: "Солодощі",
      },
    },
  },
}));
