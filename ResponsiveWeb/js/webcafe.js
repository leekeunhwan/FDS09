var container = document.querySelector(".container");
var grid = document.querySelector(".btn-grid");

grid.addEventListener("click", function() {
  container.classList.toggle("is-act");
});
