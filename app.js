$( document ).ready(function() {

    $('.ba-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        speed: 500,
      });
    
    $('.ba-slider').on('wheel', (function(e) {
        e.preventDefault();
    
        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }
    }));
});