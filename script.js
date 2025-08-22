let images = document.querySelectorAll(".img-gallery img");
let visibleImages = Array.from(images);
let currentIndex = 0;

const FullImgBox = document.getElementById("FullImgBox");
const FullImg = document.getElementById("FullImg");

function openFullImg(index) {
  visibleImages = Array.from(document.querySelectorAll(".img-gallery img"))
                      .filter(img => img.style.display !== "none");
  currentIndex = visibleImages.indexOf(images[index]); 
  FullImgBox.style.display = "flex";
  FullImg.src = visibleImages[currentIndex].src;
}

function closeFullImg() {
  FullImgBox.style.display = "none";
}


function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = visibleImages.length - 1;
  if (currentIndex >= visibleImages.length) currentIndex = 0;
  FullImg.src = visibleImages[currentIndex].src;
}


function filterImages(category) {
  images.forEach(img => {
    if (category === "all" || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}

document.addEventListener("keydown", function(e) {
  if (FullImgBox.style.display === "flex") {
    if (e.key === "ArrowRight") changeImage(1);
    if (e.key === "ArrowLeft") changeImage(-1);
    if (e.key === "Escape") closeFullImg();
  }
});