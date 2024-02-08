export const useFoodStore = defineStore("food", () => {
  const popular = ref([
    {
      name: "hek",
      img: "/images/hek.png",
      price: 150,
    },
    {
      name: "salad",
      img: "/images/salad.png",
      price: 69,
    },
    {
      name: "steak",
      img: "/images/steak.png",
      price: 255,
    },
    {
      name: "burger",
      img: "/images/burger.png",
      price: 255,
    },
  ]);

  const seconds = ref([
    {
      name: "hek",
      img: "/images/hek.png",
      price: 150,
    },
    {
      name: "salmon",
      img: "/images/salmon.png",
      price: 69,
    },
    {
      name: "burger",
      img: "/images/burger.png",
      price: 255,
    },
  ]);

  const salads = ref([
    {
      name: "olivie",
      img: "/images/salad2.png",
      price: 150,
    },
    {
      name: "salad",
      img: "/images/salad.png",
      price: 69,
    },
    {
      name: "burger",
      img: "/images/burger.png",
      price: 255,
    },
  ]);

  return { popular, seconds, salads };
});
