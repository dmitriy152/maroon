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

closeConsultationWindow = function (e){
    e.preventDefault()
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
    allowTouchMove: false,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
  });
  let swiper1 = document.querySelector(".mySwiper")
  let imageMax = document.querySelector(".image__max")
  let cards = swiper1.querySelectorAll(".card__photo")
  for(let i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", function(){
        url = this.src
        if(imageMax.src == url){
            imageMax.classList.remove("image__max-active")
            imageMax.src = ""
        }
        else {
            imageMax.src=url
            imageMax.classList.add("image__max-active")
        }
        swiper1.querySelector(".swiper-button-next").addEventListener("click", function(){
            imageMax.classList.remove("image__max-active")
            imageMax.src = ""
        })
        swiper1.querySelector(".swiper-button-prev").addEventListener("click", function(){
            imageMax.classList.remove("image__max-active")
            imageMax.src = ""
        })
    })
    imageMax.addEventListener("click", function(){
        imageMax.src=""
        imageMax.classList.remove("image__max-active")
    })
  }
  let loft = [
    "img/catalog/card__photo__1.png",
    "img/catalog/card__photo__2.png",
    "img/catalog/card__photo__3.png"
  ]
  let modern = [
    "img/catalog/card__photo__4.png",
    "img/catalog/card__photo__5.png",
    "img/catalog/card__photo__6.png"
  ]
  let minimalism = [
    "img/catalog/card__photo__7.png",
    "img/catalog/card__photo__8.png",
    "img/catalog/card__photo__9.png"
  ]

  let modalMore = swiper1.querySelector(".modal__card__more")
  let modalMoreMainImage = modalMore.querySelector(".card__image_max")
  let modalMoreMinImage = modalMore.querySelectorAll(".card__image_min")
  let closeModalMore = modalMore.querySelector(".close__modal__more")
  let buttonMore = swiper1.querySelectorAll(".price__more")
  
  for(let i = 0; i < buttonMore.length; i++){
    buttonMore[i].addEventListener("click", function(){
        imageMax.classList.remove("image__max-active")
        imageMax.src = ""
        modalMore.classList.add("modal__card__more-active")
        let selectCatalogCard = buttonMore[i].parentElement.parentElement.parentElement
        modalMoreMainImage.src = selectCatalogCard.querySelector(".card__photo").src
        if (selectCatalogCard.classList.contains("loft")){
            modalMoreMinImage[0].src = loft[0]
            modalMoreMinImage[1].src = loft[1]
            modalMoreMinImage[2].src = loft[2]
        }
        else if (selectCatalogCard.classList.contains("modern")){
            modalMoreMinImage[0].src = modern[0]
            modalMoreMinImage[1].src = modern[1]
            modalMoreMinImage[2].src = modern[2]
        }
        else if (selectCatalogCard.classList.contains("minimalism")){
            modalMoreMinImage[0].src = minimalism[0]
            modalMoreMinImage[1].src = minimalism[1]
            modalMoreMinImage[2].src = minimalism[2]
        }
    })
  }
    for(let k = 0; k < modalMoreMinImage.length; k++){
        modalMoreMinImage[k].addEventListener("click", function(){
            modalMoreMainImage.src = modalMoreMinImage[k].src
        })
    }
  
  closeModalCatalog = () => {
    imageMax.classList.remove("image__max-active")
    imageMax.src = ""
    modalMore.classList.remove("modal__card__more-active")
  }
  closeModalMore.addEventListener("click", function(){
    closeModalCatalog()
  })
  swiper1.querySelector(".swiper-button-prev").addEventListener("click", function(){ 
    closeModalCatalog()
  })
  swiper1.querySelector(".swiper-button-next").addEventListener("click", function(){ 
    closeModalCatalog()
  })
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    allowTouchMove: false,
    noSwiping: true,
    keyboard: {
        enabled: true,
    },
  });

  document.querySelector(".slide__main__next").addEventListener("click",function(){
    swiper2.slideNext()
  })

  let nextBtn = document.querySelectorAll(".progress__button__next")
  for(let i = 0; i < nextBtn.length; i++){
    nextBtn[i].addEventListener("click", function(){
        let activeSlide = document.querySelector(".mySwiper2").querySelector(".swiper-slide-active")
        let checkboxCounter = activeSlide.querySelectorAll('input[type="radio"]:checked').length
        console.log(checkboxCounter)
        if (checkboxCounter >= 1){
            swiper2.slideNext()
        }
        else {
            alert("Выберите хотя бы один вариант ответа");
        }
    })
  }
  let prevtBtn = document.querySelectorAll(".progress__button__prev")
  for(let i = 0; i < prevtBtn.length; i++){
    prevtBtn[i].addEventListener("click", function(){
        swiper2.slidePrev()
    })
  }