const vinyl = document.querySelector(".vinyl2");
const sound = document.getElementById("dondaPreview");

vinyl.addEventListener("mouseenter", () => {
  sound.currentTime = 0;
  sound.play();
});

vinyl.addEventListener("mouseleave", () => {
  sound.pause();
  sound.currentTime = 0;
});