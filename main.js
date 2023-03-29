//Funcionalidad para el botón "navbar-email"
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    const isProductDetailMenuOpen = !productDetail.classList.contains("inactive");

    if(isProductDetailMenuOpen){
        productDetail.classList.toggle("inactive");
    }
    
    desktopMenu.classList.toggle("inactive");
}

//Funcionalidad para el botón "menu-icon"
const  mobileMenu = document.querySelector(".mobile-menu");
const  menuIcon = document.querySelector(".menu");

menuIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    const isProductDetailMenuOpen = !productDetail.classList.contains("inactive");

    if(isProductDetailMenuOpen){
        productDetail.classList.toggle("inactive");
    }
    
    mobileMenu.classList.toggle("inactive");
}

//Funcionalidad para el botón "carrito de compras"
const  productDetail = document.querySelector(".product-detail");
const  shoppingCart = document.querySelector(".navbar-shopping-cart");

shoppingCart.addEventListener('click', toggleShoppingMenu);

function toggleShoppingMenu(){
    const isDesktopMenuMenuOpen = !desktopMenu.classList.contains("inactive");

    if(isDesktopMenuMenuOpen){
        desktopMenu.classList.toggle("inactive");
    }

    const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");

    if(isMobileMenuOpen){
        mobileMenu.classList.toggle("inactive");
    }

    productDetail.classList.toggle("inactive");
}


//Productos en el container
const productsList = [];
productsList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productsList.push({
    name: 'Skateboard',
    price: 80,
    image: 'https://images.pexels.com/photos/2734777/pexels-photo-2734777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productsList.push({
    name: 'Wheel',
    price: 60,
    image: 'https://images.pexels.com/photos/161921/old-wheel-wheel-cart-old-161921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productsList.push({
    name: 'Car',
    price: 120,
    image: 'https://images.pexels.com/photos/457418/pexels-photo-457418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productsList.push({
    name: 'Flight',
    price: 80,
    image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productsList.push({
    name: 'Train',
    price: 60,
    image: 'https://images.pexels.com/photos/72594/japan-train-railroad-railway-72594.jpeg?auto=compress&cs=tinysrgb&w=600',
});

const cardsContainer = document.querySelector(".cards-container")

/* Esta función imrpime los productos que estén dentro del arreglo */
function renderProducts(arrayOfProducts){
    for(product of arrayOfProducts){
        /*<div class="product-card">*/
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        /*<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""> */
        const imgProduct = document.createElement('img');
        imgProduct.setAttribute('src', product.image)
        /* <div class="product-info"> */
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        /*<div>*/
        const productInfoDiv = document.createElement('div');
        /*<p>$120,00</p>*/
        const productInfoDivPrice = document.createElement('p');
        productInfoDivPrice.innerText = '$' + product.price;
        /*<p>Bike</p>*/
        const productInfoDivName = document.createElement('p');
        productInfoDivName.innerText = product.name;

        productInfoDiv.appendChild(productInfoDivPrice);
        productInfoDiv.appendChild(productInfoDivName);
        /* <figure> */
        const productInfoFigure = document.createElement('figure');
        /* <img src="./icons/bt_add_to_cart.svg" alt=""> */
        const productInfoFigureImg = document.createElement('img');
        productInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg')
        
        productInfoFigure.appendChild(productInfoFigureImg);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure)

        productCard.appendChild(imgProduct);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productsList);