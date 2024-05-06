function addToOrder(button, cost) {
    var orderCard = button.closest('.order__card'); // Get the closest .order__card element
    var itemName = orderCard.querySelector('h4').textContent; // Get the item name
    var quantitySelect = orderCard.querySelector('.quantitySelect'); // Get the quantity select element
    var quantity = parseInt(quantitySelect.value); // Get the selected quantity

    // Validation checks
    if (isNaN(quantity) || quantity < 1 || quantity > 10) {
        alert('Please enter a valid quantity (1-10) for ' + itemName);
        quantitySelect.focus();
        return;
    }

    var cart = JSON.parse(localStorage.getItem('cart')) || []; // Get cart items from localStorage
    var itemIndex = cart.findIndex(item => item.itemName === itemName); // Check if item already exists in cart

    if (itemIndex !== -1) {
        // If item already exists in cart, update the quantity
        cart[itemIndex].quantity += quantity;
    } else {
        // If item does not exist in cart, add it
        cart.push({ itemName, quantity, cost });
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Store updated cart in localStorage

    // Calculate the total cost, accounting for existing quantity if item is already in cart
    var totalCost = cart[itemIndex !== -1 ? itemIndex : cart.length - 1].quantity * cost;

    alert(quantity + " x " + itemName + " added to cart! Total cost: $" + totalCost.toFixed(2));
}

