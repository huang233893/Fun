const products = [
    {
        id: 1,
        name: "6480原石",
        price: "¥648",
        image: "img/yuanshi.jpg"
    },
    {
        id: 2,
        name: "3240原石",
        price: "¥300 限时打折",
        image: "img/yuanshi.jpg"
    },
    {
        id: 3,
        name: "1000原石",
        price: "¥100",
        image: "img/yuanshi.jpg"
    }
];

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
            <button onclick="addToCart(${product.id})">立即购买</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    alert(`原石 ${productId} 购买失败，支付宝余额不足！`);
}

document.addEventListener('DOMContentLoaded', displayProducts);
