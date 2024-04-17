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

    const menuTabs = document.querySelectorAll(`.section-menu .menu-tabs li`);
    const menuSwipers = document.querySelectorAll(`.section-menu .menu-swiper`);
    menuTabs.forEach((tab, idx)=> {
        menuTabs[idx].addEventListener(`click`, () =>{
            menuTabs.forEach(t => {t.classList.remove(`active`);});
            menuSwipers.forEach(s => { s.classList.remove(`active`);});
            menuTabs[idx].classList.add(`active`);
            menuSwipers[idx].classList.add(`active`);
        });
    });

    menuSwipers.forEach(swiper => {
        const menuSwiper = new Swiper(swiper.querySelector(`.swiper`), {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20,
            touchRatio: 0,
            navigation: {
                nextEl: swiper.querySelector('.swiper-button-next'),
                prevEl: swiper.querySelector('.swiper-button-prev')
            }
        });
    });

    // 퀵메뉴 클릭 이벤트
    let quickMenu = document.querySelector(`.quick-menu`)
    let quickBtn = document.querySelector(`.quick-menu-button a`);
    quickBtn.addEventListener(`click`, () => {
        if(quickMenu.classList.contains(`active`)) {
            quickMenu.classList.remove(`active`);
        } else {
            quickMenu.classList.add(`active`);
        }
    });
})();