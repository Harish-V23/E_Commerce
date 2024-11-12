let cart = [];

function addToCart(name, price) {
   const item = { name, price };
   cart.push(item);
   updateCart();
   alert(`${name} added to cart.`);
}

function updateCart() {
   document.getElementById("cart-items").innerHTML = "";
   let totalPrice = 0;

   cart.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.textContent = `${item.name} - ₹${item.price}`;
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.onclick = () => removeFromCart(index);
      itemDiv.appendChild(removeButton);
      document.getElementById("cart-items").appendChild(itemDiv);
      totalPrice += item.price;
   });

   document.getElementById("total-price").textContent = totalPrice;
}

function removeFromCart(index) {
   cart.splice(index, 1);
   updateCart();
}

function checkout() {
   if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
   }
   alert("Proceeding to checkout...");
   cart = [];
   updateCart();
}
