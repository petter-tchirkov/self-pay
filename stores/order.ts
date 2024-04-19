import type { RefSymbol } from "@vue/reactivity"

export const useOrderStore = defineStore('order', () => {
  const url = useRuntimeConfig().public.apiURL

  const order = ref<Dish[]>([])
  const orderSet = computed(() => {
    return [...new Set(order.value)]
  })
  const orderConfirmed = ref<Dish[]>([])
  const orderCost = computed(() => {
    return order.value.reduce((acc, dish) => acc + dish.price.prices[1] * dish.quantity, 0)
  })
  const orderTax = computed(() => {
    return Math.floor(orderCost.value * 0.2)
  })
  const orderServiceCost = computed(() => {
    return Math.floor(orderCost.value * 0.1)
  })
  const orderTotalCost = computed(() => {
    return orderCost.value + orderTax.value + orderServiceCost.value
  })

  const tableId = ref(1)
  const spotId = ref(1)
  const personsCount = ref(1)

  const calculateTip = (tip: number) => {
    return Math.floor(orderTotalCost.value * (tip / 100))
  }
  const tip = ref(0)

  const addToOrder = (dish: Dish) => {
    if (!dish.quantity) {
      dish.quantity = 1
    } else {
      dish.quantity++
    }
    if (order.value.includes(dish)) {
      return
    } else {
      order.value.push(dish)
    }
  }


  const removeFromOrder = (dish: Dish) => {
    // const dishLength = order.value.filter((d) => d === dish).length
    // const dishIndex = order.value.findIndex((d) => d === dish)
    // if (dishLength > 1) {
    //   order.value.splice(dishIndex, 1)
    // } else {
    //   return
    // }
    if (dish.quantity > 1) {
      dish.quantity--
    }
  }

  const deleteDishFromOrder = (dish: Dish) => {
    order.value = order.value.filter((d) => d !== dish)
  }

  const setupOrderBeforeSend = computed(() => {
    return order.value.map((dish) => {
      return {
        productId: dish.productId,
        name: dish.name,
        price: dish.price.prices[1],
        qty: 1
      }
    })
  })

  const clearOrder = () => {
    order.value = []
  }

  const sendOrder = async () => {
    await $fetch(`${url}/Requests`, {
      method: 'POST',
      body: {
        tableId: tableId.value,
        spotId: spotId.value,
        personsCount: personsCount.value,
        orderRows: setupOrderBeforeSend.value
      }
    })
  }

  const checkedDishes = ref<Dish[]>([])

  return {
    order,
    addToOrder,
    orderCost,
    orderTax,
    orderServiceCost,
    orderTotalCost,
    tableId,
    spotId,
    personsCount,
    calculateTip,
    tip,
    sendOrder,
    setupOrderBeforeSend,
    removeFromOrder,
    orderConfirmed,
    checkedDishes,
    clearOrder,
    orderSet,
    deleteDishFromOrder
  }
})
