export function useCart(cart, setCart) {
    function addToCart(product) {
        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem) {
            const updatedCart = cart.map((item) => 
                item.id === product.id ? { ...item, quantity: item.quantity + 1}
                 : item
            );

            setCart(updatedCart);
        } else {
            setCart([ ...cart, { ...product, quantity: 1}])
        }
    }

    return { addToCart };
}