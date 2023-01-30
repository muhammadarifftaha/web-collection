const landingImg = $("#landing-img");
const landingText = $(".landing-text");

const navbar = $(".navbar");

landingText.hide();

$(document).ready(function () {
  landingImg.fadeIn(1000).queue(landingText.show("slide", 2000));
  slideshow();
  $(document).scroll(function () {
    navbar.toggleClass("scrolled", $(this).scrollTop() > navbar.height());
  });
});

$(".nav-link").on("click", navigate);

function navigate() {
  const target = $($(this).data("target"));
  console.log(target);
  $([document.body, document.documentElement]).animate(
    { scrollTop: target.offset().top },
    500
  );
}

function slideshow() {
  const slideImages = $(".feat-img");
  let currentSlide = slideImages.first();
  currentSlide.show("fade", 750);
  setInterval(() => {
    currentSlide.hide("fade", 750, function () {
      if (currentSlide.index() === slideImages.length - 1) {
        currentSlide = slideImages.first();
      } else {
        currentSlide = currentSlide.next();
      }
      currentSlide.show("fade", 750);
    });
  }, 5000);
}
