class card {
    addGoods () {
    }
    totalCost() {

    }
    payment() {

    }

    deletethink() {

    }
};

class cardThink{

}
class GoodsItem {
    constructor(title, price) {
    this.title = title;
    this.price = price;
 }
   render() {
    return `<div class="goods-item">
    <img class="img_card" src="tshirt-2.jpg">
    <h3 class="card_title">${this.title}</h3>
    <p class="card_price">${this.price}</p>
    <button class="cart-button" type="button">Купить</button></div> `;
};
    
}

class goodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
            ];
    }
    render() {
        let listHTML = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHTML += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHTML;
    }

    sum (){
        let sumGoods = 0;
        this.goods.forEach(good=> {
            sumGoods += good.price;

        });
        console.log(sumGoods);
    }
}

const list = new goodsList();
list.fetchGoods();
list.render();
list.sum()



