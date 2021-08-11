// slider of news
$(".carousel-news").owlCarousel({
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
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

// slider of slices
$(".carousel-slices").owlCarousel({
  loop: true,
  margin: 50,
  nav: true,
  rtl: true,
  navText: [
    "<i class='fa fa-chevron-right'></i>",
    "<i class='fa fa-chevron-left'></i>",
  ],
  responsive: {
    0: {
      margin: 10,
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});
