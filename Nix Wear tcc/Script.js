function changeImage() {
    var menuBotao = document.getElementById("menuButton");
    if (menuBotao.src.endsWith("hamburguer.png")) {
      menuBotao.src = "hamburguer (1).png";
    } else {
      menuButton.src = "hamburguer.png";
    }
  }
  
  document.addEventListener("click", function(event) {
    var submenu = document.getElementsByClassName("submenu")[0];
    var menuBotao = document.getElementById("menuBotao");
    
    if (event.target !== submenu && event.target !== menuButton) {
      submenu.classList.remove("show");
    }
  });
  
  document.getElementById("menuBotao").addEventListener("click", function() {
    var submenu = document.getElementsByClassName("submenu")[0];
    submenu.classList.toggle("show");
  });

  let currentSlide = 0;
const slides = document.getElementsByClassName('slide');

function showSlide(slideIndex) {
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
  currentSlide = slideIndex;
}

function changeSlide(n) {
  showSlide(currentSlide + n);
}

function autoChangeSlide() {
  changeSlide(1);
}

setInterval(autoChangeSlide, 3000);

showSlide(currentSlide);