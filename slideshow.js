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
let imgVetrina = document.getElementById("img-vetrina");
imgVetrina.src = imgArr[0];

let textTitle = document.getElementById("title");
textTitle.innerHTML = titleArr[0];

let textP = document.getElementById("text");
textP.innerHTML = textArr[0];

let arrowUp = document.getElementById("arrow-up");
// arrowUp.addEventListener("click", function);

let arrowDown = document.getElementById("arrow-down");
// arrowUp.addEventListener("click", function);