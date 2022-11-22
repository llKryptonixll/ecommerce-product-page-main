// sidebar logic
const sidebar = document.getElementById("sidebar");

const openSidebar_button = document.getElementById("sidebar-toggle");
openSidebar_button.addEventListener("click", () => {
    openCloseSidebar("grid", "hidden");
});

const closeSidebar_button = document.getElementById("close-sidebar-button");
closeSidebar_button.addEventListener("click", () => {
    openCloseSidebar("hidden", "grid");
});
function openCloseSidebar (classAdd, classRemove){
    sidebar.classList.add(classAdd);
    sidebar.classList.remove(classRemove);
}

//image navigation /not modal
const imageButtons = document.querySelectorAll(".product-image-button");
imageButtons.forEach((button, buttonIndex) => {
    button.addEventListener("click", () => {
        moveTo_Image(buttonIndex);
        activeButton_Style(buttonIndex, imageButtons);
    });
});

function moveTo_Image(buttonIndex){
    const images = document.querySelectorAll(".product-image");
    images.forEach((image) => {
        image.classList.add("hidden");
    });
    images[buttonIndex].classList.remove("hidden");
}
function activeButton_Style(buttonIndex, element){
    element.forEach((button) => {
        button.classList.remove("border-4");
        button.classList.remove("border-orange");
    });
    element[buttonIndex].classList.add("border-4");
    element[buttonIndex].classList.add("border-orange");
}

// open close modal
const openModal_Buttons = document.querySelectorAll(".product-image");
const modal = document.getElementById("modal");
function openClose_Modal(lgHidden, lgGrid) {
  modal.classList.remove(lgHidden);
  modal.classList.add(lgGrid);
}

openModal_Buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      openClose_Modal("lg:hidden", "lg:grid")
    });
});
const closeModal_Button = document.getElementById("close-modal");
closeModal_Button.addEventListener("click", () => {
  openClose_Modal("lg:grid", "lg:hidden")
});


// modal nad mobile slider logic
let currentSlide = 0;
const modalImages = document.querySelectorAll(".modal-images");
const modalImage_Buttons = document.querySelectorAll('.modal-product-image-button');
const mobileImages = document.querySelectorAll(".product-image");

function initSlider (n, item) {
  item.forEach((slide, index) => {
    slide.classList.add("hidden");
  });
  item[n].classList.remove("hidden");
  activeButton_Style(n, modalImage_Buttons);
}
initSlider(currentSlide, modalImages);

const next = () => {
  currentSlide >= modalImages.length - 1 ? currentSlide = 0 : currentSlide++;
  initSlider(currentSlide, modalImages);
}
const nextMobile_Image = () => {
  currentSlide >= modalImages.length - 1 ? currentSlide = 0 : currentSlide++;
  initSlider(currentSlide, mobileImages);
}

const prev = () => {
  currentSlide <= 0 ? currentSlide = mobileImages.length - 1 : currentSlide--;
  initSlider(currentSlide, modalImages);
}
const prevMobile_Image = () => {
  currentSlide <= 0 ? currentSlide = mobileImages.length - 1 : currentSlide--;
  initSlider(currentSlide, mobileImages);
}


document.getElementById("next-slide").addEventListener('click', next);
document.getElementById("prev-slide").addEventListener('click', prev);
document.getElementById("next-slide-mobile").addEventListener('click', nextMobile_Image);
document.getElementById("prev-slide-mobile").addEventListener('click', prevMobile_Image);

modalImage_Buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    initSlider(i, modalImages);
    currentSlide = i;
    activeButton_Style(i, modalImage_Buttons);
  });
});


//open close shopping cart
const openShoppingCart_Button = document.getElementById("shopping-cart-button");
openShoppingCart_Button.addEventListener("click", () => {
    const shoppingCart = document.getElementById("shopping-cart");
    shoppingCart.classList.toggle("hidden");
    shoppingCart.classList.toggle("grid");
});

// shopping cart logic
const addToCart_Button = document.getElementById("add-to-cart");
addToCart_Button.addEventListener("click", () => {
  addCartItem();
  updateCart_indicator();
});

let count = 0;
let productAmount = document.getElementById("amount");
const increment = document.getElementById("increment-amount");
const decrement = document.getElementById("decrement-amount");

increment.addEventListener("click", () => {
  count++
  productAmount.innerText = count;
});
decrement.addEventListener("click", () => {
  count <= 0 ? productAmount.innerText = 0 : count--;
  productAmount.innerText = count;
});


const shoppingCart_List = document.getElementById("shopping-cart-list");
function addCartItem(){
  if(count == 0){
    alert("quantity can not be 0");
  }
  else{
    const sneakers = new cartProduct("Fall Limited Edition Sneakers", "./images/image-product-1-thumbnail.jpg", 125, productAmount.innerText, 125 * productAmount.innerText);

    shoppingCart_List.innerHTML = 
    `
    <li class="flex items-center justify-center space-x-8">
      <img class="w-16 rounded-md" src="${sneakers.productImage}" alt="product-image">
      <div>
        <p>${sneakers.productName}</p>
        <div class="flex space-x-1">
          <p>$${sneakers.productPrice} x</p>
          <p id="quantity">${sneakers.quantity}</p>
          <p class="font-bold">$${sneakers.totalPrice}</p>
        </div>
      </div>
      <button>
        <img id="remove-button" src="images/icon-delete.svg" alt="delete-cart-product">
      </button>
    </li>
    `
  
    removeCartItem();
  }
}

function cartProduct(name, image, price, quantity, totalPrice) {
  this.productName = name;
  this.productImage = image;
  this.productPrice = price;
  this.quantity = quantity;
  this.totalPrice = totalPrice;
}

function removeCartItem(){
  const removeProduct = document.getElementById("remove-button");
  removeProduct.addEventListener("click", () => {
    removeProduct.parentElement.parentElement.remove();
    updateCart_indicator();

    shoppingCart_List.innerHTML = 
    `
    <li id="no-cart-items-message" class="grid place-items-center font-bold text-dark_grayish_blue">
      <p>Your cart is empty.</p>
    </li>
    `
  });

}

function updateCart_indicator(){
  const cartQuantity_indicator = document.getElementById("cart-quantity-indicator");
  const itemQuantity = document.getElementById("quantity");

  itemQuantity == null ? cartQuantity_indicator.innerText = 0 : cartQuantity_indicator.innerText = itemQuantity.innerText
}