// script.js
document.addEventListener("DOMContentLoaded", () => {
  const orderList = document.getElementById("order-list");
  const totalPriceElement = document.getElementById("total-price");
  let totalPrice = 0;

  document.querySelectorAll(".add-to-order").forEach((button) => {
    button.addEventListener("click", (event) => {
      const menuItem = event.target.closest(".menu-item");
      const itemName = menuItem.querySelector(".item-name").textContent;
      const itemPrice = parseFloat(
        menuItem.querySelector(".item-price").dataset.price
      );

      // Add item to order list
      const listItem = document.createElement("li");
      listItem.classList.add("order-item");
      listItem.innerHTML = `<span> ${itemName} - $${itemPrice.toFixed(
        2
      )} </span> <i class="fas fa-trash remove-item"></i>`;
      orderList.appendChild(listItem);

      // Update total price
      totalPrice += itemPrice;
      totalPriceElement.textContent = totalPrice.toFixed(2);

      // Add event listener for remove item
      listItem.querySelector(".remove-item").addEventListener("click", () => {
        // Remove item from the order
        orderList.removeChild(listItem);

        // Update total price
        totalPrice -= itemPrice;
        totalPriceElement.textContent = totalPrice.toFixed(2);
      });
    });
  });
});

document.getElementById("btnn").addEventListener("click", function () {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const check = document.getElementById("check");
  const email = document.getElementById("mail").value;
  if (email.match(emailRegex)) {
    check.style.display = "block";
    document.getElementById("error").style.cssText =
      "border: none; box-shadow: 0 0 0 black; border: 1px solid purple;";
  } else {
    check.style.display = "none";
    document.getElementById("error").style.cssText =
      "border: 3px solid red; box-shadow: 0 0 10px red";
  }
});

document.getElementById("btn").addEventListener("click", function () {
  const list = document.getElementById("order-list");
  if (list.children.length > 0) {
    document.getElementById("nmb").innerHTML = Math.floor(
      Math.random(10) * 200
    );
    document.getElementById("hide").style.cssText = "visibility: visible";
  } else {
    alert("Please Take Order !!");
  }
});
