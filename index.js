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
    if(modalCatalog.classList.contains("modal__catalog-active")){
        setTimeout(function(){
            modalCatalog.classList.remove("modal__catalog-active")
            circleAdvantages.classList.remove("circle__advertanges-active")
            circleCover.classList.remove("circle__cover-active")
        }, 10000)
    }
}, 2500)

closeCatalogModal.addEventListener("click", function(){
    modalCatalog.classList.remove("modal__catalog-active")
    circleAdvantages.classList.remove("circle__advertanges-active")
    circleCover.classList.remove("circle__cover-active")
})

window.addEventListener("scroll", () => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})

let overlay = document.querySelector(".overlay")
let modalConsultation = document.querySelector(".modal__window__consultation")
let sendConsultationModal = document.querySelector(".consultation__send")
let closeConsultationModal = document.querySelector(".close__consultation__modal")
let openConsultation = document.querySelectorAll(".open__consultation")
let consultationInputName = document.querySelector(".input__name")
let consultationInputPhone = document.querySelector(".input__tel")
for(let i = 0; i < openConsultation.length; i++){
    openConsultation[i].addEventListener("click", function(){
        overlay.classList.add("overlay-active")
        modalConsultation.classList.add("modal__window__consultation-active")
    })
}

closeConsultationWindow = function (){
    overlay.classList.remove("overlay-active")
    modalConsultation.classList.remove("modal__window__consultation-active")
    consultationInputName.value = ""
    consultationInputPhone.value = ""
}
sendConsultationModal.addEventListener("click", closeConsultationWindow)
closeConsultationModal.addEventListener("click", closeConsultationWindow)
overlay.addEventListener("click", closeConsultationWindow)

let journalTitel = document.querySelector(".journal__title")
if (window.matchMedia('screen and (min-width:728px) and (max-width:1439px)').matches) {
    journalTitel.innerHTML = "Получите каталог <span class=\"bold\">с самыми популярными </span><span class=\"bold\">объектами</span> недвижимости</span> в Дубае";
}
let journal = document.querySelector(".journal")
window.addEventListener("scroll", function () {
    if(window.scrollY > journal.offsetTop - 300){
        journal.classList.add("journal-animation")
    }
})


var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
  });
  var swiper2 = new Swiper(".mySwiper2", {
    keyboard: {
        enabled: true,
        onlyInViewport: false,
        allowTouchMove: false,
        noSwiping: true,
        preventInteractionOnTransition: true,
    },
  });

  document.querySelector(".slide__one__next").addEventListener("click",function(){
    swiper2.slideNext()
  })

  let nextBtn = document.querySelectorAll(".progress__button__next")
  for(let i = 0; i < nextBtn.length; i++){
    nextBtn[i].addEventListener("click", function(){
        swiper2.slideNext()
    })
  }
  let prevtBtn = document.querySelectorAll(".progress__button__prev")
  for(let i = 0; i < prevtBtn.length; i++){
    prevtBtn[i].addEventListener("click", function(){
        swiper2.slidePrev()
    })
  }