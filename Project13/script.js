const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const modal = document.getElementById("modal");
const trailer = document.getElementById("trailer");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  trailer.play();
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  trailer.pause();
  trailer.currentTime = 0;
});

window.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.style.display = "none";
    trailer.pause();
    trailer.currentTime = 0;
  }
});
