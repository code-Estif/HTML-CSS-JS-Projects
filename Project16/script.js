const btn = document.getElementById("selectBtn");
const menu = document.getElementById("menu");
const items = document.querySelectorAll("#menu li");

btn.addEventListener("click", () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

items.forEach(item => {
  item.addEventListener("click", () => {
    btn.textContent = item.dataset.value;
    menu.style.display = "none";
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    menu.style.display = "none";
  }
});
