function goOrder(name, price, image) {

    localStorage.setItem("name", name);
    localStorage.setItem("price", price);
    localStorage.setItem("image", image);

    console.log("SAVED:");
    console.log(name, price, image);

    window.location.href = "order.html";
}

window.onload = function () {

    console.log("ORDER PAGE LOADED");

    let name = localStorage.getItem("name");
    let price = parseInt(localStorage.getItem("price"));
    let image = localStorage.getItem("image");

    console.log("FROM STORAGE:");
    console.log(name);
    console.log(price);
    console.log(image);

    let img = document.getElementById("productImage");

    if (img) {
        img.src = image;
        document.getElementById("productName").innerText = name;
        document.getElementById("productPrice").innerText = "Rs. " + price;
    } else {
        console.log("ERROR: HTML IDs not found");
    }

    // Total price display
    let deliveryCharge = 200;

    // Initial total
    document.getElementById("totalPrice").innerText =
        "Total price: Rs. " + (price + deliveryCharge);

    // Quantity change
    document.getElementById("qty").addEventListener("input", function () {

        let qty = parseInt(this.value) || 1;

        let total = (price * qty) + deliveryCharge;

        document.getElementById("totalPrice").innerText =
            "Total price: Rs. " + total;
    });

}


function sendWhatsApp() {

    let product = localStorage.getItem("name");
    let weight = document.getElementById("productWeight").innerText;
    let price = localStorage.getItem("price");
    let deliveryCharge = 200;
    let qty = document.getElementById("qty").value;
    let totalPrice = document.getElementById("totalPrice").innerText;

    let customerName = document.getElementById("customerName").value.trim();
    let address = document.getElementById("deliveryAddress").value.trim();

    // Validation
    if (customerName === "") {
        alert("Please enter your full name.");
        document.getElementById("customerName").focus();
        return;
    }

    if (customerName.length < 3) {
        alert("Name must be at least 3 characters.");
        document.getElementById("customerName").focus();
        return;
    }

    if (address === "") {
        alert("Please enter your delivery address.");
        document.getElementById("deliveryAddress").focus();
        return;
    }

    if (address.length < 10) {
        alert("Address must be at least 10 characters.");
        document.getElementById("deliveryAddress").focus();
        return;
    }

    if (qty === "" || isNaN(qty) || qty < 1) {
        alert("Please enter a valid quantity.");
        document.getElementById("qty").focus();
        return;
    }

    let message =
        `🛒 NEW ORDER

👤 Customer Name: ${customerName}

📦 Product: ${product}
⚖️ Weight: ${weight}
💰 Unit Price: Rs. ${price}
🔢 Quantity: ${qty}
🚚 Delivery Charge: Rs. ${deliveryCharge}

${totalPrice}

📍 Delivery Address:
${address}

Thank you.`;

    let phone = "94713872042"; // WhatsApp Number

    let whatsappURL =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}




