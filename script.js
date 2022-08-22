//User Data

const user1 = {
    name: 'Melvin Onah',
    password: 'asdf1234',
    cart: [
        {
            name: 'Limited Fall Edition Sneakers',
            price: 250,
            quantity: 1
        },
        {
            name: 'Limited Fall Edition Sneakers',
            price: 250,
            quantity: 2
        },
        {
            name: 'Limited Fall Edition Sneakers',
            price: 250,
            quantity: 2
        },
        {
            name: 'Limited Fall Edition Sneakers',
            price: 250,
            quantity: 2
        }
    ]
}



const cart = document.querySelector('.nav__cart');
const itemAmount = document.querySelector('.item--amount');
const cartSection = document.querySelector('.cart__section');
const addCartBtn = document.querySelector('.add--cart');
const cartItems = document.querySelector('.cart--items');
const deleteItem = document.querySelector('.item--delete');
const hamburgerMenu  = document.querySelector('.hamburger--menu');
const mobileMenu = document.querySelector('.mobile-nav');
const mobileMenuClose = document.querySelector('.mobile-nav-close');
const body = document.querySelector('body');
const carouselImages = document.querySelector('.product__picture');
const carouselBtn = document.querySelectorAll('.carousel__button');
const numberOfImages = carouselImages.querySelectorAll('img').length;
const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden__content')
const dropDownIcon = document.querySelector('.dropdown--icon');
const dropDownText = document.querySelector('.product__dropdown--text');



// dropDownIcon.addEventListener('click', function(){
//     dropDownIcon.classList.toggle('rotate');
//     // dropDownText.classList.toggle('hidden');
// })



// revealBtn.addEventListener('click', function(){
//     if(hiddenContent.classList.contains('hidden')){
//         hiddenContent.classList.remove('hidden');
//     } else {
//         hiddenContent.classList.add('hidden');
//     }
// })

addtoCart(user1.cart);

let imageIndex = 1;
let translateX = 0;

const mediaQuery = window.matchMedia('(max-width: 56.25em)');

carouselBtn.forEach(button => {
    button.addEventListener('click', event => {
        if(event.target.id === 'previous'){
            if(imageIndex !== 1){
                imageIndex--;
                translateX += mediaQuery.matches? 30 : 100;
            } 
        } else {
            if(imageIndex !== numberOfImages){
                imageIndex++;
                translateX -= mediaQuery.matches? 30 : 100;
            }
        }   
        carouselImages.style.transform = `translateX(${translateX}${mediaQuery.matches? 'rem': '%'})`;
    });
    
});

const mediaQuer = window.matchMedia('(min-width: 900px)');
console.log(mediaQuer);
// Check if the media query is true
if (mediaQuer.matches) {
  // Then trigger an alert
//   carouselBtn.forEach(button => {
//     button.addEventListener('click', event => {
//         if(event.target.id === 'previous'){
//             if(imageIndex !== 1){
//                 imageIndex--;
//                 translateX += 30;
//             } 
//         } else {
//             if(imageIndex !== numberOfImages){
//                 imageIndex++;
//                 translateX -= 30;
//             }
//         }
//         carouselImages.style.transform = `translateX(${translateX}rem)`;
//     }); 
// });
  
}


cart.addEventListener('click', function(e){
    console.log(e.target);
    cartSection.classList.toggle('hidden');
})
console.log(itemAmount.textContent);


document.addEventListener('click', function(e){
        if(cartSection.classList.contains('hidden')){
            cartSection.classList.add('hidden'); 
        }           
})


let data = 1;

itemAmount.textContent = data;

function decrement(){
    while(data >= 1){
    data--;
    itemAmount.textContent = data;
    }
    
}

function increment(){
    data++;
    itemAmount.textContent = data;
    console.log(itemAmount.textContent);

}

function reset(){
    data = 1;
}

function addtoCart(cart){
    cart.forEach(item => {
        const markup = `<div class="cart--item">
    <img src="images/image-product-1-thumbnail.jpg" alt="Product image" class="cart--item-img">
    <div class="cart--item-text">
      <p class="item-name">Fall Limited Edition Sneakers</p>
        <p>$<span class="price__value">${item.price}</span> x <span class="item--amount-final">${item.quantity}  </span><span class="total">$${item.quantity * item.price}</span></p>
      </div>
      <img src="images/icon-delete.svg" alt="Delete icon" class="item--delete">
  </div>`;

  cartItems.insertAdjacentHTML('beforeend', markup);
//   deleteItem.classList.remove('hidden');
    })
}


addCartBtn.addEventListener('click', function(){
    console.log(itemAmount.textContent);

     let quantity = itemAmount.textContent;

     let price = 125.00;

    user1.cart.unshift({
        name: 'Limited Stuff',
        price: 250,
        quantity: itemAmount.textContent
    });
    // addtoCart(user1.cart);
    const markup = `<div class="cart--item">
    <img src="images/image-product-1-thumbnail.jpg" alt="Product image" class="cart--item-img">
    <div class="cart--item-text">
      <p class="item-name">Fall Limited Edition Sneakers</p>
        <p>$<span class="price__value">${price}</span> x <span class="item--amount-final">${quantity}  </span><span class="total">$${quantity * price}</span></p>
      </div>
      <img src="images/icon-delete.svg" alt="Delete icon" class="item--delete">
  </div>`;

  cartItems.insertAdjacentHTML('beforeend', markup);

})




// // deleteItem.addEventListener('click', function(e){
// //     console.log(e.closest('cart--item'));
// // })

// deleteItem.addEventListener('click', function(){
//     console.log('hello');
// })

hamburgerMenu.addEventListener('click', function(){
    mobileMenu.classList.remove('hidden');
    body.classList.add('fixed');
    // body.classList.add('overlay');

})

mobileMenuClose.addEventListener('click', function(){
    mobileMenu.classList.add('hidden');
    body.classList.remove('fixed');
})


// class Chair {
//     constructor(color, seatHeight, recliningAngle, backSupport, headSupport, padding, armRests, seatSize, isHeightAdjustable, isMovable){
//         //Defaults which can be changed by the subclass class.
//         this.color = color;
//         this.seatHeight = seatHeight;
//         this.recliningAngle = recliningAngle;
//         this.backSupport = true;
//         this.headSupport = false;
//         this.padding = "3 inch";
//         this.armRests = true;
//         this.seatSize = "16 inch";
//         this.isHeightAdjustable = false;
//         this.isMovable = false;
//         this.type = "Chair";
//     }
    
//     adjustableHeight() {};
//     adjustAngle(){};
//     moveChair(){};    
// }

localStorage.setItem('currentUser', user1);