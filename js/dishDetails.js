/*   Add Comment  */
let btnComment = document.getElementById("add-comment"),
  modalComment = document.querySelector(".modal-comment"),
  modalContent = document.querySelector(".modal-content"),
  closeComment = document.querySelector(".close-icon-comment i");

btnComment.addEventListener("click", () => {
  toggleComment();
});
modalComment.addEventListener("click", () => {
  toggleComment();
});
closeComment.addEventListener("click", () => {
  toggleComment();
});
function toggleComment() {
  modalComment.classList.toggle("active");
  modalContent.classList.toggle("active");
}
document.querySelector(".modal-content").onclick = function (e) {
  e.stopPropagation();
};

// slider of news
$(".recipe-slider").owlCarousel({
  loop: true,
  margin: 40,
  nav: true,

  rtl: true,
  navText: [
    "<i class='fa fa-chevron-right'></i>",
    "<i class='fa fa-chevron-left'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
  },
});
