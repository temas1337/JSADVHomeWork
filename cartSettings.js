const APIC = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';





class cartItem {
    constructor(cart, img = 'https://via.placeholder.com/200x150'){
        this.title = cart.product_name;
        this.price = cart.price;
        this.id = cart.id_product;
        this.img = img;
        this.contents = [];
        this.countGoods = cart.quantity;

    }
    render(){
        return `<div class="cartObj">
        <div class="cartObj_image">
            <img src="${this.img}" alt="">
        </div>
        <div class="cartObjtitle">
            <p>${this.title}</p>
            ${this.countGoods}
        </div>
        <div class="cartObjprice">
        ${this.price}
        </div>
        <div class="cartObjQuant"></div>
    </div>`

      
    }
}

class cartList {
    constructor(container = '.cart'){
        this.container = container;
        this.cartGoods = [];//массив товаров из JSON документа
        this._getProducts()
            .then(data => { //data - объект js
                 this.cartGoods = data.contents;
//                 console.log(data);
                 this.render()
            });
    }

    _getProducts(){
      
        return fetch(`${APIC}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
       
    }
    calcSum(){
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render(){
        const cartBlock = document.querySelector(this.container);
        for (let product of this.cartGoods){
            const cartObj = new cartItem(product);

            cartBlock.insertAdjacentHTML('beforeend', cartObj.render());
        }

    }
}


let Basket = new cartList(); 