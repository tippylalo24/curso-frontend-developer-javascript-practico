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
