// tipos de dados
// String ""
// Number 01
// Object {}
// Bollean true or false
// Array []

// create map
const map = L.map("mapid").setView([-27.222633, -49.6455874], 15);

//create and add titlelayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  ironSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create popup overlay
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Lar das meninas <a href="/orphanage?id=1" cass="choose-orphanage"> <img src="/images/arrow-white.svg" > </a>'
);

// create and add marker
L.marker([-27.222633, -49.6455874], { icon }).addTo(map).bindPopup(popup);
