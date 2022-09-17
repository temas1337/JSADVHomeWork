const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    ];

const renderGoods = (title, price) => {
    return `<div class="goods-item">
    <img class="img_card" src="tshirt-2.jpg">
    <h3 class="card_title">${title}</h3>
    <p class="card_price">${price}</p>
    <button class="cart-button" type="button">Корзина</button></div> `;
};
const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoods(item.title, item.price));
document.querySelector('.goods-list').innerHTML = goodsList.join(''); // по умолчанию элементы после эл массивов ставится , join может изменить знак, поменяв его на пустоту можно избавится от запятой 
}
renderGoodsList(goods);