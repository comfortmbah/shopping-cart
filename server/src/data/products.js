const products = [
  {
    id: 1,
    title: "Laptop",
    price: 999,
    category: "electronics",
    image: "https://example.com/laptop.jpg",
  },
  {
    id: 2,
    title: "Smartphone",
    price: 123,
    category: "electronics",
    image: "https://example.com/phone.jpg",
  },
  {
    id: 3,
    title: "Backpack",
    price: 93,
    category: "bags",
    image: "https://example.com/backpack.jpg",
  },
];

export const getProducts = () => {
  return products;
} 