let buttonPopupOpen = document.querySelector(".menu__button")
let popupMenu = document.querySelector(".header__popup")
function popupHeader (){
    buttonPopupOpen.addEventListener("click", function(){
        if (buttonPopupOpen.classList.contains("menu__button-active")){
            buttonPopupOpen.classList.remove("menu__button-active")
            popupMenu.classList.remove("header__popup-active")
        }
        else{
            buttonPopupOpen.classList.add("menu__button-active")
            popupMenu.classList.add("header__popup-active")
        }
    })
}
popupHeader()

let modalCatalog = document.querySelector(".modal__catalog")
let closeCatalogModal = document.querySelector(".close_catalog_btn")
let circleAdvantages = document.querySelector(".circle__advertanges")
let circleCover = document.querySelector(".circle__cover")
setTimeout(function(){
    modalCatalog.classList.add("modal__catalog-active")
    circleAdvantages.classList.add("circle__advertanges-active")
    circleCover.classList.add("circle__cover-active")
}, 2500)
closeCatalogModal.addEventListener("click", function(){
    modalCatalog.classList.remove("modal__catalog-active")
    circleAdvantages.classList.remove("circle__advertanges-active")
    circleCover.classList.remove("circle__cover-active")
})

window.addEventListener("scroll", () => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})
