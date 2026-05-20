
// wpsend
function sendWhatsApp(element) {

    let name = element.getAttribute("data-name");
    let weight = element.getAttribute("data-weight");

    let price = parseInt(element.getAttribute("data-price"));
    let delivery = parseInt(element.getAttribute("data-delivery"));

    let total = price + delivery;

    let message =
        "Hello, I want to order this product:%0A%0A" +
        "Product: " + name + "%0A" +
        "Weight: " + weight + "%0A" +
        "Price: Rs." + price + "%0A" +
        "Delivery: Rs." + delivery + "%0A" +
        "----------------%0A" +
        "Total: Rs." + total;

    window.open("https://wa.me/94713872042?text=" + message, "_blank");
}


window.onload = function () {
    const url = new URLSearchParams(window.location.search);

    if (url.get("success") === "1") {
        alert("Message sent successfully!");
    }
}


// nav
document.addEventListener("DOMContentLoaded", function () {

    let currentPage = window.location.pathname.split("/").pop();

    // default page fix (when site opens like / or empty)
    if (!currentPage || currentPage === "/" || currentPage === "") {
        currentPage = "index.html";
    }

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {

        let linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }

    });

});


// img pop
$(document).ready(function () {

    const popupConfig = {
        type: 'image',
        gallery: {
            enabled: true
        }
    };

    $('.popup-green').magnificPopup(popupConfig);
    $('.popup-red').magnificPopup(popupConfig);
    $('.popup-dry').magnificPopup(popupConfig);

});

new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
}).init();