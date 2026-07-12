// JS FILE

// Welcome Message
window.addEventListener("load", () => {
    console.log("Blinkit Clone Loaded Successfully!");
});

// CART FUNCTIONALITY


let cartCount = 0;

// Create cart counter if it doesn't exist
const cartElement = document.querySelector(".my-cart");

if (cartElement) {
    const countSpan = document.createElement("span");
    countSpan.id = "cart-count";
    countSpan.textContent = ` (${cartCount})`;
    cartElement.appendChild(countSpan);
}

// Add-to-cart buttons
const addButtons = document.querySelectorAll(".shop1 button");

addButtons.forEach((button) => {
    button.addEventListener("click", () => {
        cartCount++;

        const cartCountElement = document.getElementById("cart-count");

        if (cartCountElement) {
            cartCountElement.textContent = ` (${cartCount})`;
        }

        button.innerText = "ADDED ✓";
        button.style.backgroundColor = "green";
        button.style.color = "white";

        setTimeout(() => {
            button.innerText = "ADD";
            button.style.backgroundColor = "";
            button.style.color = "";
        }, 1000);
    });
});

// SEARCH FUNCTIONALITY

const searchInput = document.querySelector(".search-items");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const searchValue = this.value.toLowerCase();

        const productCards = document.querySelectorAll(".product-box");

        productCards.forEach((card) => {
            const text = card.innerText.toLowerCase();

            if (text.includes(searchValue)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}


// PRODUCT HOVER EFFECT


const shopCards = document.querySelectorAll(".shop1");

shopCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.03)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});

// SCROLL TO TOP BUTTON

const topButton = document.createElement("button");

topButton.innerText = "↑";
topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "10px 15px";
topButton.style.fontSize = "18px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// DELIVERY LOCATION ALERT


const locationSelect = document.querySelector(".loc");

if (locationSelect) {
    locationSelect.addEventListener("change", () => {
        alert("Delivery location updated successfully!");
    });
}

// ACCOUNT SECTION

const accountSelect = document.querySelector(".account");

if (accountSelect) {
    accountSelect.addEventListener("change", () => {
        alert("Account option selected!");
    });
}


// FOOTER LINKS EFFECT


const footerLinks = document.querySelectorAll("footer a");

footerLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        link.style.color = "green";
        link.style.cursor = "pointer";
    });

    link.addEventListener("mouseleave", () => {
        link.style.color = "";
    });
});