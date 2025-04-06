// ข้อมูลสินค้าจำลอง
const products = [
    { code: 'A1', name: 'ก้นกรองเปล่าร้อน ROLLO บรรจุ 250 มวน', price: 110,image: '<img src="images/A1.jpeg" width="100%" height="100%">', unit: 'กล่อง', category: 'filter', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'A2', name: 'ก้นกรองเปล่าร้อน INVICTUS บรรจุ 250 มวน', price: 110, image: '<img src="images/A2.jpeg" width="100%" height="100%">', unit: 'กล่อง', category: 'filter', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'A3', name: 'ก้นกรองเปล่าร้อน Firebox บรรจุ 300 มวน', price: 110, image: '<img src="images/A3.jpeg" width="100%" height="100%">', unit: 'กล่อง', category: 'filter', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'A4', name: 'ก้นกรองเปล่าร้อน CARTEL บรรจุ 300 มวน', price: 110, image: '<img src="images/A4.jpeg" width="100%" height="100%">', unit: 'กล่อง', category: 'filter', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'A5', name: 'ก้นกรองเปล่าร้อน INVICTUS บรรจุ 500 มวน', price: 150, image: '<img src="images/A5.jpeg" width="100%" height="100%">', unit: 'กล่อง', category: 'filter', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'A6', name: 'ก้นกรองเปล่าร้อน Firebox บรรจุ 1000 มวน', price: 320, image: '<img src="images/A6.jpeg" width="100%" height="100%">', unit: 'กล่อง', category: 'filter', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'A7', name: 'ก้นกรองเปล่าร้อน INVICTUS บรรจุ 1000 มวน', price: 270, image: '<img src="images/A7.jpeg" width="100%" height="100%">', unit: 'กล่อง', category: 'filter', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'B1', name: 'ก้นกรองเปล่าเย็น INVICTUS บรรจุ 200 มวน', price: 120, image: '<img src="images/B1.jpeg" width="100%" height="100%">', unit: 'กล่อง', category: 'filter', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'B2', name: 'ก้นกรองเปล่าเย็น INVICTUS บรรจุ 200มวน เย็นสุดขั้ว 24 มิล', price: 120, image: '<img src="images/B2.jpeg" width="100%" height="100%">', unit: 'กล่อง', category: 'filter', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'B2s', name: 'ก้นกรองเปล่าเย็น DMB บรรจุ 200มวน เย็นสุดขั้ว 24 มิล', price: 120, image: '<img src="images/B2s.jpeg" width="100%" height="100%">', unit: 'กล่อง', category: 'filter', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'B3', name: 'ก้นกรองเปล่าเย็น ROLLO บรรจุ 200 มวน', price: 120, image: '<img src="images/B3.jpeg" width="100%" height="100%">', unit: 'ขนาดบรรจุ 200มวน', category: 'filter', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'B4', name: 'ก้นกรองเปล่าเย็น Firebox บรรจุ 250 มวน', price: 120, image: '<img src="images/B4.jpeg" width="100%" height="100%">', unit: 'กล่อง', category: 'filter', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'C1', name: 'ก้นกรองเปล่า เม็ดบีบ Fresh Bomb บรรจุ 100 มวน กลิ่น เบอร์รี่ มิ้น', price: 110, image: '<img src="images/C1.jpeg" width="100%" height="100%">', unit: 'กล่อง', category: 'filter', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'C2', name: 'ก้นกรองเปล่า เม็ดบีบ Fresh Bomb บรรจุ 100 มวน กลิ่น สตร์อวเบอรี่', price: 110, image: '<img src="images/C2.jpeg" width="100%" height="100%">', unit: 'กล่อง', category: 'filter', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'C3', name: 'ก้นกรองเปล่า เม็ดบีบ Fresh Bomb บรรจุ 100 มวน กลิ่น เมนทอล', price: 110, image: '<img src="images/C3.jpeg" width="100%" height="100%">', unit: 'กล่อง', category: 'filter', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'C4', name: 'ก้นกรองเปล่า เม็ดบีบ Fresh Bomb บรรจุ 100 มวน กลิ่น สตร์องมิ้น', price: 110, image: '<img src="images/C4.jpeg" width="100%" height="100%">', unit: 'กล่อง', category: 'filter', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'C5', name: 'ก้นกรองเปล่า เม็ดบีบ SEDUCE บรรจุ 100 มวน กลิ่น สตร์อเบอรี่', price: 110, image: '<img src="images/C5.jpeg" width="100%" height="100%">', unit: 'กล่อง', category: 'filter', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'C6', name: 'ก้นกรองเปล่า เม็ดบีบ SEDUCE บรรจุ 100 มวน กลิ่น บลูเบอรี่', price: 110, image: '<img src="images/C6.jpeg" width="100%" height="100%">', unit: 'กล่อง', category: 'filter', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'D1', name: 'ก้นกรองเปล่าร้อน Firebox บรรจุ 250 มวน เบอรี่มิ้น', price: 135, image: '<img src="images/D1.jpeg" width="100%" height="100%">', unit: 'กล่อง', category: 'filter', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'D2', name: 'ก้นกรองเปล่า มวนดำ SEDUCE บรรจุ 300 มวน', price: 160, image: '<img src="images/D2.jpeg" width="100%" height="100%">', unit: 'กล่อง', category: 'filter', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'FB', name: 'เครื่องอัด ไฟฟ้า Firebox', price: 390, image: '<img src="images/FB.jpeg" width="100%" height="100%">', unit: 'เครื่อง', category: 'accessory', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'FD.1', name: 'เครื่องอัด พกพา Firebox', price: 180, image: '<img src="images/FD1.jpeg" width="100%" height="100%">', unit: '1อัน', category: 'accessory', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'FD.2', name: 'เครื่องอัด พกพา FD2', price: 140, image: '<img src="images/Fd2.jpeg" width="100%" height="100%">', unit: '1อัน', category: 'accessory', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'BOX-B', name: 'กล่องเก็บมวน Firebox ดำ', price: 99, image: '<img src="images/BOX1.jpeg" width="100%" height="100%">', unit: 'กล่อง', category: 'accessory', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'BOX-T', name: 'กล่องเก็บมวน Firebox ทอง', price: 99, image: '<img src="images/BOX2.jpeg" width="100%" height="100%">', unit: 'กล่อง', category: 'accessory', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'Y1', name: 'Yasen SK', price: 70, image: '<img src="images/y1.jpeg" width="100%" height="100%">', unit: '1pack', category: 'tobacco', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'Y2', name: 'Yasen MBR', price: 70, image: '<img src="images/Y2.jpeg" width="100%" height="100%">', unit: '1pack', category: 'tobacco', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'Y3', name: 'Yasen LM', price: 70, image: '<img src="images/Y3.jpeg" width="100%" height="100%">', unit: '1pack', category: 'tobacco', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'Y4', name: 'Yasen KT', price: 70, image: '<img src="images/Y4.jpeg" width="100%" height="100%">', unit: '1pack', category: 'tobacco', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'Y5', name: 'Yasen L&M', price: 60, image: '<img src="images/Y5.jpeg" width="100%" height="100%">', unit: '1pack', category: 'tobacco', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'Y6', name: 'Yasen K&T', price: 60, image: '<img src="images/Y6.jpeg" width="100%" height="100%">', unit: '1pack', category: 'tobacco', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'Y7', name: 'Yasen 85', price: 60, image: '<img src="images/Y7.jpeg" width="100%" height="100%">', unit: '1pack', category: 'tobacco', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'Y8', name: 'Yasen KRUNG TONG', price: 60, image: '<img src="images/Y8.jpeg" width="100%" height="100%">', unit: '1pack', category: 'tobacco', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'V1', name: 'Yasen V.L- LM', price: 70, image: '<img src="images/V1.jpeg" width="100%" height="100%">', unit: '1pack', category: 'tobacco', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'V2', name: 'Yasen V.K- KrongTip', price: 70, image: '<img src="images/V2.jpeg" width="100%" height="100%">', unit: '1pack', category: 'tobacco', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' },
{ code: 'V3', name: 'Yasen V.W-WONRDER', price: 70, image: '<img src="images/V3.jpeg" width="100%" height="100%">', unit: '1pack', category: 'tobacco', description: 'ก้นกรองประสิทธิภาพสูง ให้รสชาติที่นุ่มนวล' }
];

let cart = [];
let currentCategory ='all';
let currentSort ='name';

function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML ='';
    
    let filteredProducts = products;
    if (currentCategory !=='all') {
        filteredProducts = products.filter(product => product.category === currentCategory);
    }

    filteredProducts.sort((a, b) => {
        if (currentSort ==='name') return a.name.localeCompare(b.name);
        if (currentSort ==='price-low') return a.price - b.price;
        if (currentSort ==='price-high') return b.price - a.price;
    });

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className ='product-card';
        productCard.innerHTML = `
    <img src="/api/placeholder/400/300" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>ราคา: ฿${product.price} / ${product.unit}</p>
            <button onclick="addToCart('${product.code}')">เพิ่มลงตะกร้า</button>
            <button onclick="showProductDetail('${product.code}')">ดูรายละเอียด</button>
        `;
        productList.appendChild(productCard);
    });
}

function addToCart(productCode) {
    const product = products.find(p => p.code === productCode);
    const existingItem = cart.find(item => item.code === productCode);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

function showCart() {
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML ='';
    let total = 0;
    
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <p>${item.name} - ฿${item.price} x ${item.quantity}</p>
            <button onclick="removeFromCart('${item.code}')">ลบ</button>
        `;
        cartItems.appendChild(itemElement);
        total += item.price * item.quantity;
    });
    
    cartTotal.textContent = total.toFixed(2);
    cartModal.style.display ='block';
}

function removeFromCart(productCode) {
    const index = cart.findIndex(item => item.code === productCode);
    if (index !== -1) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1);
        }
        showCart();
        updateCartCount();
    }
}

function showProductDetail(productCode) {
    const product = products.find(p => p.code === productCode);
    const detailModal = document.getElementById('product-detail-modal');
    const detailContent = document.getElementById('product-detail-content');
    
    detailContent.innerHTML = `
        <h2>${product.name}</h2>
<p><video controls width="100%" style="border:2px solid RED;"><source src="images/${product.code}.mp4" type="video/mp4"></video></p>
        <p>${product.description}</p>
        <p>ราคา: ฿${product.price} / ${product.unit}</p>
        <p>รหัสสินค้า: ${product.code}</p>
        <p>หมวดหมู่: ${product.category}</p>
        <button onclick="addToCart('${product.code}')">เพิ่มลงตะกร้า</button>
    `;
    
    detailModal.style.display ='block';
}

document.getElementById('cart-button').addEventListener('click', showCart);
document.getElementById('category-select').addEventListener('change', (e) => {
    currentCategory = e.target.value;
    renderProducts();
});
document.getElementById('sort-select').addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderProducts();
});
document.getElementById('checkout-button').addEventListener('click', () => {
    alert('ขอบคุณสำหรับการสั่งซื้อ!');
    cart = [];
    updateCartCount();
    document.getElementById('cart-modal').style.display ='none';
});

// Close button functionality for modals
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        this.closest('.modal').style.display ='none';
    });
});

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target.className ==='modal') {
        event.target.style.display ='none';
    }
}
