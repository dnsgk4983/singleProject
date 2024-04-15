( function() {
    let kvSwiper = new Swiper(`.section-visual .swiper`, {
        loop: true,
        autoplay: {
            speed: 3000,
        },
        effect: `fade`,
        touchRatio: 0
    });

    let lookSwiper = new Swiper(`.section-look .swiper`, {
        slidesPerView: 4,
        spaceBetween: 12,
        loop: true,
        autoplay: {
            speed: 3000,
        }
    })
})();