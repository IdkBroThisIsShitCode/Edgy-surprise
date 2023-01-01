const arata = document.getElementById("arata");
const dispari = document.getElementById("dispari");
const bnt = document.getElementById("btn");

btn.addEventListener("click", () => {
  arata.classList.remove("hide");
  dispari.style.display = "none";
});
