document.querySelector('.increase').addEventListener('click', function() {
    let quantity = document.querySelector('.quantity-value');
    quantity.textContent = Number(quantity.textContent) + 1;
    updateTotalPrice();
});

document.querySelector('.decrease').addEventListener('click', function() {
    let quantity = document.querySelector('.quantity-value');
    if (Number(quantity.textContent) > 1) {
        quantity.textContent = Number(quantity.textContent) - 1;
        updateTotalPrice();
    }
});

document.querySelectorAll('.menu-items .item').forEach(item => {
    item.addEventListener('click', function() {
        let price = parseFloat(this.getAttribute('data-price'));
        let totalPrice = document.querySelector('.total-price');
        let currentPrice = parseFloat(totalPrice.textContent);
        totalPrice.textContent = (currentPrice + price).toFixed(2);
    });
});

function updateTotalPrice() {
    let basePrice = 24.30;
    let quantity = Number(document.querySelector('.quantity-value').textContent);
    let totalPrice = document.querySelector('.total-price');
    totalPrice.textContent = (basePrice * quantity).toFixed(2);
}
