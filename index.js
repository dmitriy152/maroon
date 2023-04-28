var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
});
if (window.matchMedia('screen and (max-width:768px)').matches) {
  document.querySelector('.swiper-wrapper').classList.add("disabled");
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