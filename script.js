let cart = [];
let totalCost = 0;

function addToCart(price) {
  cart.push(price);
  totalCost += price;
  updateCartCount();
  updateTotalCost();
}

function updateCartCount() {
  document.getElementById('cart-count').innerText = cart.length;
}

function updateTotalCost() {
  document.getElementById('total-cost').innerText = totalCost;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for your purchase!");
    cart = [];
    totalCost = 0;
    updateCartCount();
    updateTotalCost();
  }
}
