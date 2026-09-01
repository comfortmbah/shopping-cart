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

      case "INCREASE_QUANTITY": {
        return cart.map((item) => item.id === action.payload ? {
          ...item, quantity: item.quantity + 1
        } : item)
      } 

      case "DECREASE_QUANTITY": {
        return cart.map((item) => item.id === action.payload ? {
          ...item, quantity: Math.max(1, item.quantity - 1)
        } : item)
      }

      case "REMOVE_ITEM": {
        return cart.filter((item) => item.id !== action.payload)
      }

      case "CLEAR_CART": {
        return [];
      }

      default:
        return cart;
    }
}