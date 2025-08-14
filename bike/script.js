let cart = [];
let cartCount = 0;
let totalPrice = 0;

document.querySelectorAll('.addToCartBtn').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-product');
        const productPrice = parseFloat(this.getAttribute('data-price'));
        
        // Add product to cart
        cart.push({ name: productName, price: productPrice });
        cartCount++;
        totalPrice += productPrice;

        // Update cart count in header
        document.getElementById('cartCount').textContent = cartCount;

        // Show cart popup with updated items
        updateCart();
    });
});

function updateCart() {
    const cartItemsList = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    
    // Clear current cart items
    cartItemsList.innerHTML = '';
    
    // Add new items to the cart
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(listItem);
    });

    // Update total price
    totalPriceElement.textContent = totalPrice.toFixed(2);

    // Show cart popup
    document.getElementById('cartPopup').style.display = 'flex';
}

// Close cart popup
document.getElementById('closeCartBtn').addEventListener('click', () => {
    document.getElementById('cartPopup').style.display = 'none';
});

// Handle checkout (reset cart)
document.getElementById('checkoutBtn').addEventListener('click', () => {
    alert('Thank you for your purchase!');
    cart = [];
    cartCount = 0;
    totalPrice = 0;
    document.getElementById('cartCount').textContent = cartCount;
    updateCart();
});
