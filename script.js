
// ฟังก์ชันเพิ่มสินค้าไปยังตะกร้า
function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// ฟังก์ชันอัพเดทตะกร้าสินค้า
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    document.getElementById('total-price').textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// ฟังก์ชันสำหรับหน้าเช็คเอาท์
function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach(item => {
        // แสดงรายการสินค้าจากตะกร้าสินค้า
    });
}

// ฟังก์ชันดำเนินการเช็คเอาท์
function checkout() {
    window.location.href = 'checkout.html';
}

// ฟังก์ชันวางคำสั่งซื้อ
function placeOrder(event) {
    event.preventDefault();
    let shippingDetails = {
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
    };

    // ส่งข้อมูลการสั่งซื้อไปยังเซิร์ฟเวอร์ (ใช้ AJAX หรือ Fetch API ในการส่งข้อมูล)

    localStorage.removeItem('cart');
    window.location.href = 'thankyou.html';
}
