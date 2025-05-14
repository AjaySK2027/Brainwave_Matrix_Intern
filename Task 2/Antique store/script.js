let cart = [];

function addToCart(item, price) {
  const existingItem = cart.find(i => i.name === item);
  if (existingItem) {
    existingItem.qty++;
  } else {
    cart.push({ name: item, price, qty: 1 });
  }
  renderCart();
}

function removeFromCart(item) {
  cart = cart.filter(i => i.name !== item);
  renderCart();
}

function toggleCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.style.display = cartDiv.style.display === "none" ? "block" : "none";
}

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} (x${item.qty}) - ₹${item.price * item.qty}
      <button onclick="removeFromCart('${item.name}')">Remove</button>
    `;
    cartItems.appendChild(li);
  });

  document.getElementById("total").innerText = `Total: ₹${total}`;
}
