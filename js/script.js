// show and hide the sidebar
let sidebar = document.querySelector(".sidebar"),
  btnSide = document.querySelectorAll(".btn-sidebar"),
  closeIcon = document.querySelector(".close-icon");

btnSide.forEach((e) => {
  e.addEventListener("click", toggleSidebar);
});

closeIcon.addEventListener("click", toggleSidebar);
sidebar.addEventListener("click", toggleSidebar);
document.querySelector(".sidebar-content").onclick = function (e) {
  e.stopPropagation();
};

function toggleSidebar() {
  sidebar.classList.toggle("active");
}
let searchBtnContent = document.querySelector(".search-btn-content"),
  inputSearch = document.getElementById("input-search");
if (searchBtnContent) {
  searchBtnContent.addEventListener("click", function (e) {
    e.stopPropagation();
    this.classList.add("active");
    inputSearch.focus();
  });
}
window.addEventListener("click", () => {
  searchBtnContent.classList.remove("active");
});
function focusInput() {
  inputSearch.focus();
}
$(window).on("load", function () {
  removeLoader();
});
function removeLoader() {
  $(".loading").fadeOut(500, function () {
    $(".loading").remove();
  });
}
