export type Dish = {
  categoryId: number
  categoryName: string
  description: string | null
  image: string
  imageOrigin: string
  name: string
  price: {
    prices: number[]
  }
  productId: number
  quantity: number
}
