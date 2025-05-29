const images = [
  "img/image001.webp",
  "img/image003.webp",
  "img/image005.webp",
  "img/image007.webp",
  "img/image009.webp",
  "img/image011.webp",
  "img/image013.webp",
  "img/image015.webp",
  "img/image017.webp",
  "img/image019.webp",
  "img/image021.webp",
  "img/image023.webp",
  "img/image026.webp",
  "img/image028.webp",
  "img/image030.webp",
  "img/image032.webp",
  "img/image034.webp",
  "img/image036.webp",
  "img/image038.webp",
  "img/image040.webp",
  "img/image042.webp",
  "img/image044.webp"
];

let currentIndex = 0;

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  
  document.getElementById("modalImage").src = images[currentIndex];
}
