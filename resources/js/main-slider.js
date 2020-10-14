



$('.product__slider-main').slick({
    // dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    slidesToShow: 1,
    lazyLoad: 'ondemand',
    pauseOnHover : true
});

$('.logoBanner').slick({
    // dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    slidesToShow: 5,
    lazyLoad: 'ondemand',
    pauseOnHover : true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                infinite: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 568,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});

$('.play-f-btn').on('click', function () {
    $('.play-f-btn').attr('style', 'display:none !important');
    $('.pause-f-btn').attr('style', 'display:block !important');
    $('.logoBanner').slick('slickPlay');
});
$('.pause-f-btn').on('click', function () {
    $('.play-f-btn').attr('style', 'display:block !important');
    $('.pause-f-btn').attr('style', 'display:none !important');
    $('.logoBanner').slick('slickPause');
});


$('.slider__box').slick({
    // dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    slidesToShow: 1,
    lazyLoad: 'ondemand',
    pauseOnHover : true
});



$('.event-play').on('click', function () {
    $('.event-play').attr('style', 'display:none !important');
    $('.event-pause').attr('style', 'display:block !important');
    $('.slider__box').slick('slickPlay');
});
$('.event-pause').on('click', function () {
    $('.event-play').attr('style','display:block !important');
    $('.event-pause').attr('style', 'display:none !important');
    $('.slider__box').slick('slickPause');
});

var $status = $('.pagingInfo');
var $slickElement = $('.slider__box');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
});


