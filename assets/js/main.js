
document.addEventListener("DOMContentLoaded", function () {

  const modal = document.getElementById("orderModal");
  const closeBtn = document.querySelector(".close");
  const form = document.getElementById("orderForm");
  const productField = document.getElementById("product");

  if (!modal || !form) return;

  
  
  const buttons = document.querySelectorAll(".product-card button, .buy-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", function () {

      let card = this.parentElement;
      let name = "";

      
      if (card.querySelector("h3")) {
        name = card.querySelector("h3").innerText;
      }

      
      else if (card.querySelector("h4")) {
        name = card.querySelector("h4").innerText;
      }

      productField.value = name;

      modal.style.display = "block";
    });
  });

  
  closeBtn.onclick = () => modal.style.display = "none";

  window.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };


  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const product = productField.value;
    const quantity = document.getElementById("quantity").value;
    const address = document.getElementById("address").value.trim();

  
    if (name.length < 3) {
      alert("Name at least 3 letters hona chahiye");
      return;
    }

    if (!email.includes("@")) {
      alert("Valid email likho");
      return;
    }

    if (phone.length < 10) {
      alert("Valid phone number likho");
      return;
    }

    if (quantity < 1) {
      alert("Quantity 1 ya us se zyada honi chahiye");
      return;
    }

    if (address.length < 10) {
      alert("Complete uncomplete");
      return;
    }

    
    const order = {
      name,
      email,
      phone,
      product,
      quantity,
      address,
      date: new Date().toLocaleString()
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    alert("Order Placed Successfully 🎉");

    form.reset();
    modal.style.display = "none";
  });

});

