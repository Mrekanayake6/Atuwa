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

