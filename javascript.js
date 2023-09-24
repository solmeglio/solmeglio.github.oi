// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}
document.addEventListener('DOMContentLoaded', function (){
    // Mensaje que se autotipea
    const message = "Max Weber";

    // Elemento de texto
    const autotypeText = document.querySelector('.autotype-text');

    // Iniciar el autotipeo
    autotypeText.textContent = '';
    autotype(message, autotypeText);
});

function autotype(message, element) {
    let index = 0;

    function type() {
        if (index < message.length) {
            element.textContent += message.charAt(index);
            index++;
            if (element.textContent.trim() === message.trim()) {
                // Agregar una clase para detener la animación al final de la escritura
                element.classList.add('stop-animation');
            }
            setTimeout(type, 80); // Velocidad de autotipeo (ajusta según tu preferencia)
        }
    }

    type();
}
