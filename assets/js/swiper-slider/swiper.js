var swipeSlider = (function () {

    if (matchMedia('only screen and (max-width: 480px)').matches) {
        var matchMediaSlidesPerView = 1;
    } else if (matchMedia('only screen and (max-width: 767px)').matches) {
        var matchMediaSlidesPerView = 2;
    } else if (matchMedia('only screen and (max-width: 992px)').matches) {
        var matchMediaSlidesPerView = 3;
    } else {
        var matchMediaSlidesPerView = 4;
    }

    var swiper = new Swiper('.ideas-carousel', {
        slidesPerView: matchMediaSlidesPerView,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })

});


$(document).ready(swipeSlider);
$(window).resize(swipeSlider);