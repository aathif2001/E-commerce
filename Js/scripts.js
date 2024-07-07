//---------- Swiper -------// 

var homeswiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });

// ----------- show cart ----------------//
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartclose = document.getElementById('cart-close')

//----------- show cart and remove cart --------------- //
if(cartShop) {
  cartShop.addEventListener('click',() => {
    cart.classList.add('show-cart')
  })
}

if(cartclose) {
  cartclose.addEventListener('click', () =>{
    cart.classList.remove('show-cart')
  })
}

//-------- Scroll Up ------------//

function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // when the scroll is higher than 350 view port, add the new class
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll') 
}

window.addEventListener('scroll', scrollUp)


// ---- function to check if element choosen -----------//
// function checkElementExists(elementId) {
//   var element = document.getElementById(elementId);
//   if (element) {
//       console.log('Element with ID "' + elementId + '" exists:', element);
//   } else {
//       console.log('Element with ID "' + elementId + '" does not exist.');
//   }
// }

// checkElementExists('cart-close');
// checkElementExists('cart');
// checkElementExists('cart-shop');