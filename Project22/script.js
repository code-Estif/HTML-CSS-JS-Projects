const input = document.querySelector(".input");
const body = document.querySelector("body");

input.checked = JSON.parse(localStorage.getItem("mode"));

function updateBody() {
  if (input.checked) {
    body.style.background = "black";
  } else {
    body.style.background = "white";
  }
}

updateBody();

input.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(input.checked));
}