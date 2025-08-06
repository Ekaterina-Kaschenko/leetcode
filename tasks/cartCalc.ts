type Item = {
  name: string;
  price: number;
  discount: number;
  taxRate: number;
};

const cartItems: Item[] = [
  { name: "Laptop", price: 45.99, discount: 10, taxRate: 15 },
  { name: "Mouse", price: 25.50, discount: 20, taxRate: 10 },
  { name: "Keyboard", price: 34.47, discount: 30, taxRate: 15 },
];

type CartSummary = {
  originalPrice: number;
  discountedPrice: number;
  taxesPrice: number;
};


const calculateCart = (items: Item[]): CartSummary => {
  return items.reduce((acc, item) => {
    const discountPrice = item.price * (100 - item.discount) / 100;
    const taxPrice = discountPrice * (100 + item.taxRate) / 100;
    
    debugger
    return {
      originalPrice: acc.originalPrice + item.price,
      discountedPrice: acc.discountedPrice + discountPrice,
      taxesPrice: acc.taxesPrice + taxPrice,
    };
  }, {
    originalPrice: 0,
    discountedPrice: 0,
    taxesPrice: 0,
  });
}

console.log('totalOriginalPrice = ', calculateCart(cartItems).originalPrice.toFixed(2));
console.log('totalDiscountedPrice = ', calculateCart(cartItems).discountedPrice.toFixed(2));
console.log('taxesPrice = ', calculateCart(cartItems).taxesPrice.toFixed(2));

