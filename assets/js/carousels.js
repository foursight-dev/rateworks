$(document).ready(function () {
  // on document ready
  checkitem();
});

$('#demo').on('slid.bs.carousel', checkitem);
function checkitem() {
  // check function
  var $this = $('#demo');
  if ($('.carousel-inner .carousel-item:first').hasClass('active')) {
    // Hide left arrow
    $this.children('.carousel-control-prev').fadeOut();
    // But show right arrow
    $this.children('.carousel-control-next').fadeIn();
  } else if ($('.carousel-inner .carousel-item:last').hasClass('active')) {
    // Hide right arrow
    $this.children('.carousel-control-next').fadeOut();
    // But show left arrow
    $this.children('.carousel-control-prev').fadeIn();
  } else {
    $this.children('.carousel-control-prev').fadeIn();
    $this.children('.carousel-control-next').fadeIn();
  }
}
