const plist = document.querySelector('.plist')
const plistcart = document.querySelector('.plistcart')
const cartprices = document.querySelector('.cart__prices')
const quantity = document.querySelector('.quantity')
const total = document.querySelector('.cart__prices-total')


let products = [
    {
        id:1,
        name: 'Product 1',
        images:'cart1.png',
        price: 2000,
    },
    {
        id:2,
        name: 'Product 2',
        images:'cart2.png',
        price: 2500,
    },
    {
        id:3,
        name: 'Product 3',
        images:'cart3.png',
        price: 2000,
    },
    {
        id:4,
        name: 'Product 4',
        images:'cart4.png',
        price: 2000,
    },
    {
        id:5,
        name: 'Product 5',
        images:'cart5.png',
        price: 2000,
    },
    {
        id:6,
        name: 'Product 6',
        images:'cart6.png',
        price: 2000,
    }
]

let listcards = []

const initApp = () => {
   products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('plist-product');
    newDiv.innerHTML = `
    <img src="./images/${value.images}">
    <div class="ptitle">${value.name}</div>
    <div class="pprice">${value.price.toLocaleString()}</div>
    <button onclick="addtoCart(${key})"> Add to Cart </button>
    `
    plist.appendChild(newDiv)

   }
)}


initApp()

const addtoCart = (key) => {
    if(listcards[key] == null){
        listcards[key] = JSON.parse(JSON.stringify(products[key]));
        listcards[key].quantity = 1;
    }

    reloadCart();
}

const reloadCart = () => {
    plistcart.innerHTML= "";
    let count = 0;
    let totalprice = 0;
    let noitems = 0;

    listcards.forEach((value, key) => {
        totalprice = totalprice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement('article');
            newDiv.classList.add('cart__card');

            newDiv.innerHTML = `
            <div class="cart__box">
                        <img src="./images/${value.images}" alt="" class="cart__img">
                    </div>

                    <div class="cart__details">
                        <h3 class="cart__title">${value.name}</h3>
                        <span class="cart__price">${value.price.toLocaleString()}</span>

                        <div class="cart__amount">
                            <div class="cart__amount-content">
                                <span class="cart__amount-box">
                                    <button class="text-button" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                                </span>

                                <span class="cart__amount-number">${value.quantity}</span>

                                <span class="cart__amount-box">
                                    <button class="text-button" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                                </span>
                            </div>

                            <i class="bx bx-trash-alt cart__amount-trash" onclick = "changeQuantity(${key}, ${0})"></i>
                        </div>
                    </div>
            `
            plistcart.appendChild(newDiv);
        }

        total.innerText = totalprice.toLocaleString();
        
        quantity.innerText = count;
    })
}

const changeQuantity = (key, quantity) => {
    if(quantity == 0){
        delete listcards[key]
        reloadCart()
    }
    else{
        listcards[key].quantity = quantity;
        listcards[key].price = quantity * products[key].price
    }

    reloadCart()
}

console.log('HELLO')

