
let buttonPopupOpen = document.querySelector(".menu__button")
let popupMenu = document.querySelector(".header__popup")
function popupHeader (){
    buttonPopupOpen.addEventListener("click", () => {
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
setTimeout(() => {
    modalCatalog.classList.add("modal__catalog-active")
    circleAdvantages.classList.add("circle__advertanges-active")
    circleCover.classList.add("circle__cover-active")
    if(modalCatalog.classList.contains("modal__catalog-active")){
        setTimeout(() => {
            modalCatalog.classList.remove("modal__catalog-active")
            circleAdvantages.classList.remove("circle__advertanges-active")
            circleCover.classList.remove("circle__cover-active")
        }, 10000)
    }
}, 2500)

closeCatalogModal.addEventListener("click", () => {
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
    openConsultation[i].addEventListener("click", () => {
        overlay.classList.add("overlay-active")
        modalConsultation.classList.add("modal__window__consultation-active")
    })
}

function closeConsultationWindow (e) {
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
if (window.matchMedia('screen and (min-width:320px) and (max-width:1511px)').matches) {
    journalTitel.innerHTML = "Получите каталог <span class=\"bold\">с самыми популярными </span><span class=\"bold\">объектами</span> недвижимости</span> в Дубае";
}
let journal = document.querySelector(".journal")
window.addEventListener("scroll", () => {
    if(window.scrollY > journal.offsetTop - 300){
        journal.classList.add("journal-animation")
    }
})
let property = document.querySelector(".buy__property")
window.addEventListener("scroll", () => {
    if(window.scrollY > property.offsetTop - 300){
        document.querySelector(".property__house").classList.add("property__house-animation")
    }
})
let downoalCatalog = document.querySelectorAll(".catalog__download")
for (let i = 0; i < downoalCatalog.length; i++){
    downoalCatalog[i].addEventListener("click", (e)=>{
        e.preventDefault()
        window.open('catalog.pdf')
    })
}


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
    cards[i].addEventListener("click", () => {
        url = cards[i].src
        if(imageMax.src == url){
            imageMax.classList.remove("image__max-active")
            imageMax.src = ""
        }
        else {
            imageMax.src = url
            imageMax.classList.add("image__max-active")
        }
        swiper1.querySelector(".swiper-button-next").addEventListener("click", () => {
            imageMax.classList.remove("image__max-active")
            imageMax.src = ""
        })
        swiper1.querySelector(".swiper-button-prev").addEventListener("click", () => {
            imageMax.classList.remove("image__max-active")
            imageMax.src = ""
        })
    })
    imageMax.addEventListener("click", () => {
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
    buttonMore[i].addEventListener("click", () => {
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
        modalMoreMinImage[k].addEventListener("click", () => {
            modalMoreMainImage.src = modalMoreMinImage[k].src
        })
    }
  
  function closeModalCatalog () {
    imageMax.classList.remove("image__max-active")
    imageMax.src = ""
    modalMore.classList.remove("modal__card__more-active")
  }
  closeModalMore.addEventListener("click", () => {
    closeModalCatalog()
  })
  swiper1.querySelector(".swiper-button-prev").addEventListener("click", () => { 
    closeModalCatalog()
  })
  swiper1.querySelector(".swiper-button-next").addEventListener("click", () => { 
    closeModalCatalog()
  })
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    allowTouchMove: false,
    noSwiping: true,
    keyboard: {
        enabled: true,
    },
    slidesPerView: 1,
  });

  document.querySelector(".slide__main__next").addEventListener("click",() => {
    swiper2.slideNext()
  })
  let swiperSurvey = document.querySelector(".mySwiper2")
  let checkboxSurvey = swiperSurvey.querySelectorAll(".checkbox__radio input")
  for(let i = 0; i < checkboxSurvey.length; i++){
    checkboxSurvey[i].addEventListener("click", () => {
      if (checkboxSurvey[i].hasAttribute("checked")){
        checkboxSurvey[i].checked = false
        checkboxSurvey[i].removeAttribute("checked")
      }
      else {
        checkboxSurvey[i].setAttribute("checked", "")
      }
    })
  }
  let nextBtn = document.querySelectorAll(".progress__button__next")
  for(let i = 0; i < nextBtn.length; i++){
    nextBtn[i].addEventListener("click", () => {
        let activeSlide = document.querySelector(".mySwiper2").querySelector(".swiper-slide-active")
        let checkboxCounter = activeSlide.querySelectorAll('input[type="radio"]:checked').length
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
    prevtBtn[i].addEventListener("click", () => {
        swiper2.slidePrev()
    })
  }
  let headerHeight = document.querySelector(".header").offsetHeight
  let navItem = document.querySelectorAll(".navigation__item")
  for (let i = 0; i < navItem.length; i++){
    navItem[i].addEventListener("click", (e) => {
        e.preventDefault()
        if (navItem[i].classList.contains("item__main")){
            let scrollElem =  document.querySelector(".cover").offsetTop - headerHeight
            window.scrollTo({ top: scrollElem, behavior: 'smooth'});
        }
        else if (navItem[i].classList.contains("item__partners")){
            let scrollElem =  document.querySelector(".partners").offsetTop + (headerHeight/4)
            window.scrollTo({ top: scrollElem, behavior: 'smooth'});
        }
        else if (navItem[i].classList.contains("item__catalog")){
            let scrollElem =  document.querySelector(".catalog__slider").offsetTop + (headerHeight/4)
            window.scrollTo({ top: scrollElem, behavior: 'smooth'});
        }
        else if (navItem[i].classList.contains("item__cryptocurrency")){
            let scrollElem =  document.querySelector(".cryptocurrency").offsetTop - (headerHeight/4)
            window.scrollTo({ top: scrollElem, behavior: 'smooth'});
        }
        else if (navItem[i].classList.contains("item__journal")){
            let scrollElem =  document.querySelector(".journal").offsetTop - headerHeight
            window.scrollTo({ top: scrollElem, behavior: 'smooth'});
        }
        else if (navItem[i].classList.contains("item__blog")){
            let scrollElem =  document.querySelector(".blog").offsetTop - (headerHeight*1.5)
            window.scrollTo({ top: scrollElem, behavior: 'smooth'});
        }
        else if (navItem[i].classList.contains("item__about__us")){
          let scrollElem =  document.querySelector(".about__us").offsetTop - (headerHeight*1.5)
          window.scrollTo({ top: scrollElem, behavior: 'smooth'});
      }
        else if (navItem[i].classList.contains("item__account__opening")){
          let scrollElem =  document.querySelector(".account__opening").offsetTop - headerHeight
          window.scrollTo({ top: scrollElem, behavior: 'smooth'});
      }
    })
  }

  let fastSearchProject = document.querySelector(".search__project")
  fastSearchProject.addEventListener("click", () => {
    let scrollElem =  document.querySelector(".survey").offsetTop - headerHeight
    window.scrollTo({ top: scrollElem, behavior: 'smooth'});
  })

  let propertyButton = document.querySelector(".property__button")
  propertyButton.addEventListener("click", () => {
    let scrollElem =  document.querySelector(".catalog__slider").offsetTop + (headerHeight/4)
    window.scrollTo({ top: scrollElem, behavior: 'smooth'});
  })

  let privacyPolicy = document.querySelector(".footer__privacy")
  privacyPolicy.addEventListener("click", (e) => {
    e.preventDefault()
    window.open('privacy_policy.rtf')
  })
  var swiperBlog = new Swiper(".mySwiper__blog", {
    loop: true,
    allowTouchMove: false,
  });
  let nextBtnBlog = document.querySelector(".next__slide__blog")
  let prevBtnBlog = document.querySelector(".prev__slide__blog")
  prevBtnBlog.addEventListener("click", () => {
    swiperBlog.slidePrev()
  })
  nextBtnBlog.addEventListener("click", () => {
    swiperBlog.slideNext()
  })

  let blogMediaLink = document.querySelectorAll(".blog__media")
  for(let i = 0; i < blogMediaLink.length; i++){
    blogMediaLink[i].addEventListener("click", (e) => {
        e.preventDefault()
        blogMediaLink[i].innerHTML = '<iframe class="iframe__blog" width="1280" height="720" src="https://www.youtube.com/embed/HS6Y8aw3_5U" title="Бежевый интерьер - 8 простых решений. Как декорировать, цветовые сочетания." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    })
  }
  

  let aboutUsItem = document.querySelectorAll(".about__us__card__item")
  for (let i = 0; i < aboutUsItem.length; i++){
    let counter = i + 1
    aboutUsItem[i].querySelector(".item__title__counter").textContent = "0" + counter + ". "
  }

  if(window.matchMedia('screen and (min-width:1512px)').matches){
    function canUseWebp() {
      // Создаем элемент canvas
      let elem = document.createElement('canvas');
      // Приводим элемент к булеву типу
      if (!!(elem.getContext && elem.getContext('2d'))) {
          // Создаем изображение в формате webp, возвращаем индекс искомого элемента и сразу же проверяем его
          return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
      }
      // Иначе Webp не используем
      return false;
    }
    window.onload = function () {
      // Получаем все элементы с дата-атрибутом data-bg
      let images = document.querySelectorAll('[data-bg]');
      // Проходимся по каждому
      for (let i = 0; i < images.length; i++) {
          // Получаем значение каждого дата-атрибута
          let image = images[i].getAttribute('data-bg');
          // Каждому найденному элементу задаем свойство background-image с изображение формата jpg
          images[i].style.backgroundImage = 'url(' + image + ')';
      }
  
      // Проверяем, является ли браузер посетителя сайта Firefox и получаем его версию
      let isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
      let firefoxVer = isitFirefox ? parseInt(isitFirefox[1]) : 0;
  
      // Если есть поддержка Webp или браузер Firefox версии больше или равно 65
      if (canUseWebp() || firefoxVer >= 65) {
          // Делаем все то же самое что и для jpg, но уже для изображений формата Webp
          let imagesWebp = document.querySelectorAll('[data-bg-webp]');
          for (let i = 0; i < imagesWebp.length; i++) {
              let imageWebp = imagesWebp[i].getAttribute('data-bg-webp');
              imagesWebp[i].style.backgroundImage = 'url(' + imageWebp + ')';
          }
        }
    };
  }