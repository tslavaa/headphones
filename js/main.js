$(function(){

    $('.popular__slider').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><img src="images/arrow-left.svg" alt="arrow"></button>', 
        nextArrow: '<button class="slider-btn slider-btn__right"><img src="images/arrow-right.svg" alt="arrow"></button>',
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1065,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 842,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            },
        ] 
    });
    $('.menu__btn').on('click', function () {
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.menu__list-link').on('click', function () {
        $('.menu__btn').removeClass('menu__btn--active');
        $('.menu__list').removeClass('menu__list--active');
    });
});

