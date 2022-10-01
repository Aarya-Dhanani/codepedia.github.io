function navScroll() {
  window.addEventListener("scroll", (event) => {
    if (window.scrollY > 50) {
      document.getElementById("navbar").style.background =
        "-webkit-linear-gradient(top left, #5306ce, #9102ea)";
    } else {
      document.getElementById("navbar").style.background = "black";
    }
  });
}

function typeAni() {
  var typed = new Typed("#type", {
    strings: [
      "Welcome to codepedia, encyclopedia of coding,",
      "here you can find history, present and future of coding."
    ],
    typeSpeed: 30,
    backSpeed: 40,
    loop: true
  });
}
const image_list = [
  "img/coding.webp",
  "img/cpp.jpeg",
  "img/java.jpeg",
  "img/javascript.jpeg",
  "img/python.jpeg"
];
const h1_list = ["Code Pedia", "C++", "Java", "JavaScript", "Python"];
const p_list = [
  "Code pedia is an online plaform or wiki that provides you with information regarding cading and rpogramming languages",
  "C++ is a cross-platform language that can be used to create high-performance applications. C++ was developed by Bjarne Stroustrup, as an extension to the C language. C++ gives programmers a high level of control over system resources and memory. ",
  "Java is the most widely used programming language. It is designed for the distributed environment of the Internet. Java is freely accessible to users, and we can run it on all the platforms. Java follows the WORA (Write Once, Run Anywhere) principle, and is platform-independent.",
  "JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but its used in many non-browser environments as well.",
  "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming."
];
let image = document.getElementById("home-img-carousel");
let h1text = document.getElementById("home-txt-carousel");
let ptext = document.getElementById("home-txt2-carousel");
let i = 0;

image.src = image_list[i];
document.getElementById("home-txt-carousel").innerHTML = h1_list[i];
document.getElementById("home-txt2-carousel").innerHTML = p_list[i];

function nxt() {
  i++;
  if (i > image_list.length - 1) {
    i = 0;
  }
  image.src = image_list[i];
  if (i > h1_list.length - 1) {
    i = 0;
  }
  h1text.innerHTML = h1_list[i];
  if (i > p_list.length - 1) {
    i = 0;
  }
  ptext.innerHTML = p_list[i];
}
function pre() {
  i--;
  if (i < 0) {
    i = image_list.length - 1;
  }
  image.src = image_list[i];
  if (i < 0) {
    i = h1_list.length - 1;
  }
  h1text.innerHTML = h1_list[i];
  if (i < 0) {
    i = p_list.length - 1;
  }
  ptext.innerHTML = p_list[i];
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const qoutes_list = [
  "qoutes/qoute1.png",
  "qoutes/qoute2.png",
  "qoutes/qoute3.png",
  "qoutes/qoute4.png",
  "qoutes/qoute5.png"
];
let qoutes_img = document.getElementById("qoutes");
let x = 0;

qoutes_img.src = qoutes_list[x];
function qoutesFunction() {
  x++;
  if (x > qoutes_list.length - 1) {
    x = 0;
  }
  qoutes_img.src = qoutes_list[x];
}
setInterval(qoutesFunction, 3000);
typeAni();
navScroll();
