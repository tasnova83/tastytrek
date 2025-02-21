document.addEventListener("DOMContentLoaded", function () {
    const decreaseBtn = document.querySelector(".decrease");
    const increaseBtn = document.querySelector(".increase");
    const quantityValue = document.querySelector(".quantity-value");
    const totalPrice = document.querySelector(".total-price");
    const basePrice = 12.15; // একেকটা আইটেমের বেস প্রাইস

    decreaseBtn.addEventListener("click", function () {
        let currentValue = parseInt(quantityValue.textContent);
        if (currentValue > 1) {
            quantityValue.textContent = currentValue - 1;
            updateTotalPrice();
        }
    });

    increaseBtn.addEventListener("click", function () {
        let currentValue = parseInt(quantityValue.textContent);
        quantityValue.textContent = currentValue + 1;
        updateTotalPrice();
    });

    function updateTotalPrice() {
        let currentValue = parseInt(quantityValue.textContent);
        totalPrice.textContent = (currentValue * basePrice).toFixed(2);
    }
});
