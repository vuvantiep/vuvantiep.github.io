var slider = document.querySelector(".slider");
var imageList = document.querySelector(".image-list");
var images = document.querySelectorAll(".image-list li");

var currentIndex = 0;
var slideWidth = slider.clientWidth;

function slideTo(index) {
  var offset = index * -slideWidth;
  imageList.style.transform = "translateX(" + offset + "px)";
  currentIndex = index;
}

function slideNext() {
  var nextIndex = (currentIndex + 1) % images.length;
  slideTo(nextIndex);
}

function slidePrevious() {
  var previousIndex = currentIndex - 1;
  if (previousIndex < 0) {
    previousIndex = images.length - 1;
  }
  slideTo(previousIndex);
}

setInterval(slideNext, 3000); // Auto slide every 3 seconds
