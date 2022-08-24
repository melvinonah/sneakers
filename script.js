//User Data

const admin = {
    name: 'Melvin',
    password: 1234,
}

const  products = [
    {
        name: 'Fall Limited Edition Sneakers',
        id: '109345823',

        ShortDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero vero, impedit molestias quod sint dolore repudiandae cum asperiores non sed debitis nulla mollitia quasi perferendis blanditiis, error quos maxime eveniet.',

        product_1_ImgUrl: 'images\image-product-1.jpg',
        product_2_ImgUrl: 'images\image-product-2.jpg',
        product_3_ImgUrl: 'images\image-product-3.jpg',


        price: 250.00,
        discount: 30, //30 percent discount

        productDescription: {
            name: 'Product Description',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod porro fuga unde ipsum quis repellat laborum, hic sunt ab distinctio molestiae ullam voluptates minima nostrum possimus fugiat asperiores explicabo sequi. Esse, eum dicta. Soluta a placeat dolores laudantium quibusdam hic ratione libero fugit officia! Dolor esse reiciendis officiis voluptatum dignissimos corporis doloremque totam inventore et. Molestias fugit quod ducimus tempore!'
        },

        productSpecification: {
            name: 'Product Specification',
            brand: 'Lorem',
            color: 'orange',
            manufacturer: 'Lorem Industries',
            manufacturerSerialNumber: 'ib3fnj3eiue3b'
        },

        warrantyDetails: {
            name: 'Warranty',
            warrantyLength: '3-months Warranty',
            warrantyType: 'Refund'
        },

        reviews: [{
            name: 'Melvin',
            rating: '4.7',
            review: 'The product is very high quality and finely made!'
        },
    
        {
            name: 'John',
            rating: '4.9',
            review: 'Highly recommended, very good' 
        },

        {
            name: 'Dave',
            rating: '4.8',
            review: 'The product was easy to clean and was rugged!' 
        }
    ]
    }
]


const cart = document.querySelector('.nav__cart');
const itemAmount = document.querySelectorAll('.item--amount');
const cartSection = document.querySelector('.cart__section');
const addCartBtn = document.querySelector('.add--cart');
const cartItems = document.querySelector('.cart--items');
const deleteItem = document.querySelectorAll('.item--delete');
const hamburgerMenu  = document.querySelector('.hamburger--menu');
const mobileMenu = document.querySelector('.mobile-nav');
const mobileMenuClose = document.querySelector('.mobile-nav-close');
const carouselImages = document.querySelector('.product__picture');
const carouselBtn = document.querySelectorAll('.carousel__button');
// const numberOfImages = carouselImages.querySelectorAll('img').length;
const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden__content')
const dropDownIcon = document.querySelector('.dropdown--icon');
const dropDownText = document.querySelector('.product__dropdown--text');
const reviewInputName = document.querySelector('.reviewInput--name')
const reviewText = document.querySelector('.textarea');
const reviewRating = document.querySelector('.reviewInput--rating');
const submitReview = document.querySelector('.submitReview');
const reviewsSection = document.querySelector('.reviews');
const increaseQty = document.querySelectorAll('.add--item');
const reduceQty = document.querySelectorAll('remove--item');

let data = 2;
increaseQty.forEach(btn => {

    itemAmount.forEach(num => {
        num.textContent = data;
        // console.log(value);
        num.textContent = data;
    
        btn.addEventListener('click', function(){
            while(data >= 1){
                data++;
                num.textContent = data;
                }
        })
    })

   
})




// function decrement(){
//     while(data >= 1){
//     data--;
//     itemAmount.textContent = data;
//     }
// }

function increment(){
    data++;
    itemAmount.textContent = data;
    console.log(itemAmount.textContent);

}

function reset(){
    data = 1;
}


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
// console.log(itemAmount.textContent);


// document.addEventListener('click', function(e){
//         if(cartSection.classList.contains('hidden')){
//             cartSection.classList.add('hidden'); 
//         }           
// })



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

// submitReview.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log(typeof reviewRating.value);
    
//     if(typeof +reviewRating.value !== 'number'){
//         alert('Please enter a valid Rating Value');
//     }

//     const reviewMarkup = `<div class="review">
//       <div class="review__user--info">
//         <img src="images/image-avatar.png" class="nav__profile" alt="">
//         <h4 class="review__user--name">${reviewInputName.value}</h4>
//         <p class="review__rating">${reviewRating.value} out of 5</p>
//       </div>
//       <div class="review__text">
//         <p>${reviewText.value}</p>
//       </div>`

//       reviewsSection.insertAdjacentHTML('beforeend', reviewMarkup);
// })


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

deleteItem.forEach(item => {
    item.addEventListener('click', function(e){
        console.log(e);
    })
})

// const redirect = setTimeout(function(){
//     location.href = 'collections.html';
// }, 6000)


