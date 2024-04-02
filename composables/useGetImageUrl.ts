export const getImageUrl = (imageUrl: string | null) => {
  if (imageUrl) {
    return `https://web-mouse.joinposter.com${imageUrl}`
  } else {
    return '/images/icons/dish.svg'
  }
}
