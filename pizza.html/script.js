document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('pizzaOrderForm');
    const orderSummary = document.getElementById('orderSummary');
    const summaryText = document.getElementById('summaryText');
    const totalPriceElement = document.getElementById('totalPrice');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const customerName = document.getElementById('customerName').value;
        const pizzaSizeElement = document.getElementById('pizzaSize');
        const pizzaSize = pizzaSizeElement.value;
        const pizzaPrice = parseInt(pizzaSizeElement.options[pizzaSizeElement.selectedIndex].dataset.price);

        const toppingsElements = document.querySelectorAll('input[name="toppings"]:checked');
        const toppings = [];
        let toppingsPrice = 0;
        toppingsElements.forEach((element) => {
            toppings.push(element.value);
            toppingsPrice += parseInt(element.dataset.price);
        });

        const totalPrice = pizzaPrice + toppingsPrice;

        const orderDetails = `
            Name: ${customerName}<br>
            Pizza Size: ${pizzaSize} - ${pizzaPrice} THB<br>
            Toppings: ${toppings.join(', ')} - ${toppingsPrice} THB
        `;

        summaryText.innerHTML = orderDetails;
        totalPriceElement.innerHTML = `Total Price: ${totalPrice} THB`;
        orderSummary.classList.remove('hidden');
    });
});