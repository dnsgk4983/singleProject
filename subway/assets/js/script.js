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

    // 메인 즐기는 방법
    let enjoyTabs = document.querySelectorAll(`.enjoy-tabs li`);
    enjoyTabs.forEach((item, idx) => {
        item.addEventListener(`click`, () => {
            enjoyTabs.forEach(disabledTab => {
                disabledTab.classList.remove(`active`);
            });
            enjoyTabs[idx].classList.add(`active`);
        });
    });
    let enjoyPrevButton = document.querySelector(`.enjoy-contents-button-prev`);
    let enjoySteps = document.querySelectorAll(`.enjoy-steps li`);
    let enjoyNextButton = document.querySelector(`.enjoy-contents-button-next`);
    let enjoyContents = document.querySelectorAll(`.enjoy-contents-list ol li`);
    let enjoyTexts = document.querySelectorAll(`.enjoy-contents-text ol li`);
    let enjoyNum = document.querySelector(`.enjoy-contents-text-num`);
    let enjoyIdx = 0;
    let moveLeft;
    
    enjoyNextButton.addEventListener(`click`, () => {
        if(enjoyIdx < enjoyContents.length - 1) {
            enjoyIdx++;
            enjoyMoveLeft();
        }
    });

    enjoyPrevButton.addEventListener(`click`, () => {
        if(enjoyIdx != 0) {
            enjoyIdx--;
            enjoyMoveRight();
        }
    });
    
    function enjoyMoveLeft() {
        for(let i = 0; i < enjoyContents.length; i++) {
            if( i < enjoyIdx) {
                enjoyTexts[i].classList.remove(`active`);
                enjoyContents[i].classList.remove(`active`);
                if (i === enjoyIdx - 1) {
                    enjoyContents[i].style.left = `-50%`;
                } else {
                    enjoyContents[i].style.left = `-100%`;
                }
            }  else if (i === enjoyIdx) {
                enjoySteps[i].classList.add(`active`);
                enjoyContents[i].classList.add(`active`);
                enjoyTexts[i].classList.add(`active`);
                enjoyNum.textContent = `STEP ${i + 1}`;
                enjoyContents[i].style.left = `0`
            } else {
                if ( i === enjoyIdx + 1) {
                    enjoyContents[i].style.left = `100%`;
                } else {
                    enjoyContents[i].style.left = `150%`;
                }
            }
        }
    }
    function enjoyMoveRight() {
        for(let i = 0; i < enjoyContents.length; i++) {
            if (i === enjoyIdx) {
                enjoyTexts[i].classList.add(`active`);
                enjoyContents[i].classList.add(`active`);
                enjoyNum.textContent = `STEP ${i + 1}`;
                enjoyContents[i].style.left = `0`;
            } else {
                enjoyTexts[i].classList.remove(`active`);
                enjoyContents[i].classList.remove(`active`);
                if ( i === enjoyIdx + 1) {
                    enjoyContents[i].style.left = `100%`;
                    enjoySteps[i].classList.remove(`active`);
                } else {
                    if ( i === enjoyIdx - 1) {
                        enjoyContents[i].style.left = `-50%`;
                    } else if (i < enjoyIdx) {
                        enjoyContents[i].style.left = `-100%`;
                    } else {
                        enjoyContents[i].style.left = `150%`;
                    }
                }
            }
        }
    }
})();