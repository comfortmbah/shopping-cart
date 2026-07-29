export function cartReducer(cart, action) {
    switch (action.type) {
      case "ADD_TO_CART": {
        const existingItem = cart.find((item) => item.id === action.payload.id);
        if (existingItem) {
          return cart.map((item) => item.id === action.payload.id ? {
            ...item, quantity: item.quantity + 1
          } : item)
        }

        return [ ...cart, { ...action.payload, quantity: 1}]
      }

      default:
        return cart;
    }
}