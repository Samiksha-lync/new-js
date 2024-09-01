// Initialize cart from localStorage or with a default value if null
export let cart = JSON.parse(localStorage.getItem('cart')) || [
    {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionsId:'1'
    },
    {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionsId:'2'
    }
];

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
    let matchingItem;

    // Find if the item is already in the cart
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    // Update quantity or add a new item
    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId: '1'
        });
    }

    // Save the updated cart to localStorage
    saveToStorage();
}

export function removeFromCart(productId) {
    // Filter out the item to remove
    const newCart = cart.filter((cartItem) => cartItem.productId !== productId);

    cart = newCart;

    // Save the updated cart to localStorage
    saveToStorage();
}
