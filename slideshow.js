// Definiamo gli Array
const imgArr = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

const titleArr = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
]

const textArr = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// Definiamo variabili
let mainImage = document.getElementById("slideshow");
let minImage = document.getElementById("thumbnails");

// Immagine in vetrina
for (let i = 0; i < imgArr.length; i++) {
  mainImage.innerHTML += `
  <div class="content hidden">
    <div class="text">
      <h2>${titleArr[i]}</h2>
      <p>${textArr[i]}</p>
    </div>
    <img src="${imgArr[i]}" alt="">
  </div>
  `
}

// For per le miniature
for (let i = 0; i < imgArr.length; i++) {
  minImage.innerHTML += `<img src="${imgArr[i]}" alt="">`;
}

// Frecce
let prev = document.getElementById("arrow-up");
let next = document.getElementById("arrow-down");

prev.addEventListener("click", prevFunc);
next.addEventListener("click", nextFunc);

function prevFunc() {

}

function nextFunc() {

}