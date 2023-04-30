const header = document.querySelector(".header")
const headerButton = document.querySelector(".header__gamburger")
const overlay = document.querySelector(".overlay")

headerButton.addEventListener("click", () => {
  header.classList.toggle("header-active")
  headerButton.classList.toggle("header__gamburger-active")
  overlay.classList.toggle("overlay-active")
})
function closeHeaderPopup(){
  header.classList.remove("header-active")
  headerButton.classList.remove("header__gamburger-active")
  overlay.classList.remove("overlay-active")
}

const modalCard = document.querySelector(".modal-catalog-item")
const closeBtnModalCard = document.querySelector(".modal-catalog-item__close")
let catalogCards = document.querySelectorAll(".catalog__card")

for(let i=0; i < catalogCards.length; i++){
  catalogCards[i].addEventListener("click", function(){
    overlay.classList.add("overlay-active")
    modalCard.classList.add("modal-catalog-item-active")
    let image = catalogCards[i].querySelector(".card__img").src
    let price = catalogCards[i].querySelector(".price").textContent
    let title =  catalogCards[i].querySelector(".card__title").textContent
    let subtitle =  catalogCards[i].querySelector(".card__subtitle").textContent
    let volume = catalogCards[i].querySelector(".volume").textContent
    let modalImage = modalCard.querySelector(".modal-catalog-item__img")
    let modalPrice = modalCard.querySelector(".price__value")
    let modalVolume = modalCard.querySelector(".value")
    let modalTitle = modalCard.querySelector(".item__title")
    let modalSubtitle = modalCard.querySelector(".item__subtitle")
    modalImage.src = image
    modalPrice.textContent = price
    modalVolume.textContent = volume
    modalTitle.textContent = title
    modalSubtitle.textContent = subtitle
  })
}
closeBtnModalCard.addEventListener("click", function(){
  overlay.classList.remove("overlay-active")
  modalCard.classList.remove("modal-catalog-item-active")
})
overlay.addEventListener("click", () => {
  header.classList.remove("header-active")
  headerButton.classList.remove("header__gamburger-active")
  overlay.classList.remove("overlay-active")
  modalCard.classList.remove("modal-catalog-item-active")
})
window.onscroll = function() {
	let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	if (posTop > 10){
    header.classList.add("header-scroll")
  }
  else {
    header.classList.remove("header-scroll")
  }
}

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
});
const prev = document.querySelector(".prev-slide")
const next = document.querySelector(".next-slide")
prev.addEventListener("click", () => {
  swiper.slidePrev()
})
next.addEventListener("click", () => {
  swiper.slideNext()
})
if (window.matchMedia('screen and (max-width:767px)').matches) {
  document.querySelector('.swiper-wrapper').classList.add("disabled");
}
let headerHeight = document.querySelector(".header").offsetHeight
let navItemList = document.querySelectorAll(".nav__item")
for(let i = 0; i < navItemList.length; i++){
  navItemList[i].addEventListener("click", (e) => {
    e.preventDefault()
    if (navItemList[i].classList.contains("catalog__nav")){
      closeHeaderPopup()
      let scrollElem =  document.querySelector(".catalog").offsetTop - (headerHeight/1.5)
      window.scrollTo({ top: scrollElem, behavior: 'smooth'});
    }
    else if (navItemList[i].classList.contains("contact__nav")){
      closeHeaderPopup()
      let scrollElem =  document.querySelector(".contact").offsetTop - headerHeight
      window.scrollTo({ top: scrollElem, behavior: 'smooth'});
    }
    else if (navItemList[i].classList.contains("about__us__nav")){
      closeHeaderPopup()
      let scrollElem =  document.querySelector(".cover").offsetTop - headerHeight
      window.scrollTo({ top: scrollElem, behavior: 'smooth'});
    }
    else if (navItemList[i].classList.contains("shops__nav")){
      closeHeaderPopup()
      let scrollElem =  document.querySelector(".contact").offsetTop - headerHeight
      window.scrollTo({ top: scrollElem, behavior: 'smooth'});
    }
  })
}

const map = L.map('map')
.setView({
  lat: 59.938631,
  lng: 30.323037,
}, 17);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
},
).addTo(map);

const mainPinIcon = L.icon({
iconUrl: "img/contact/Marker.svg",
iconSize: [28, 40],
iconAnchor: [19, 50],
});

const marker = L.marker(
{
  lat: 59.938631,
  lng: 30.323037,
},
{
  draggable: false,
  icon: mainPinIcon
  
},
);

marker.addTo(map).bindPopup("Maroon <br/><br/> Санкт-Петербург, <br/> ул. Большая Конюшенная, 19 <br/><br/> +7 (923) 888-90-60 <br/><br/> info@maroon.ru",
{
keepInView: true,
});
