( function() {
    let titleSwiper = new Swiper('.section-title .swiper', {
        loop: true,
        autoplay: {
            speed: 3000,
        },
        pagination: {
            el: `.section-title .swiper-pagination`,
            clickable: true,
        }
    });

    let menuSwiper = new Swiper(`.section-menu .menu-swiper`, {
        slidesPerView: 4,
        spaceBetween: 20,
        touchRatio: 0,
        navigation: {
            nextEl: '.menu-swiper .swiper-button-next',
            prevEl: '.menu-swiper .swiper-button-prev'
        }
    })
})();