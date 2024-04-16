( function() {

    const timeline1 = gsap.timeline({
        scrollTrigger: {
            trigger: `.section-visual`,
            start: `top top`,
            end: `+=50%`,
            scrub: true,
        }
    });
    timeline1.to(`.swiper-slide-bg`, {
        width: `100%`,
        height: `100%`,
        top: 0,
        right: 0,
        borderRadius: 0,
        duration: 500,
    });
    const timeline2 = gsap.timeline({
        scrollTrigger: {
            trigger: `.section-look`,
            start: `top top`,
            end: `+=30%`,
            scrub: true
        }
    });
    timeline2.to(`.section-look .bubble`, {
       left: `100%`,
       top: `100%`,
       duration: 5000
    });

    // 상단 스와이퍼
    let kvSwiper = new Swiper(`.section-visual .swiper`, {
        loop: true,
        autoplay: {
            speed: 3000,
        },
        effect: `fade`,
        touchRatio: 0
    });


    // 볼거리 스와이퍼
    let lookSwiper = new Swiper(`.section-look .swiper`, {
        slidesPerView: 4,
        spaceBetween: 12,
        loop: true,
        autoplay: {
            speed: 3000,
        }
    });

    let playList = document.querySelectorAll(`.section-play ul li`);
    let playPhoto = document.querySelector(`.section-play .play-contents-photo img`);
    let playTitle = document.querySelector(`.section-play .play-contents-text p`);
    let playText = document.querySelector(`.section-play .play-contents-text span`);
    let playContents = [
        {
            title: `난지 캠핑장`,
            text: `난지 캠핑장은 자갈형과 데크형으로 구성된 일반캠핑존, 잔디밭에서 즐기는 프리캠핑존, 글램핑존과 바비큐장, 캠프파이어장, 어린이들이 놀 수 있는 실개천 등 기타 편의시설이 조성되어 쾌적하고 다양한 즐거움이 있는 서울시 대표 캠핑 명소이다.`
        },
        {
            title: `자전거 공원`,
            text: `싱그러운 바람을 가르며 강물 따라 한적하게 자전거를 탈 수 있는 강변 자전거도로는 아스팔트와 콘크리트로 포장되어 있어 시민들이 교통사고의 위험없이 주변 아름다운 경관을 즐기면서 자전거로 달릴 수 있다.`
        },
        {
            title: `한강 수영장`,
            text: `매년 여름 개장하는 한강 야외수영장은 한강을 따라 7군데에 설치되어 있다. 성인 5000원, 어린이 3000원의 저렴한 입장료로 이용할 수 있으며, 주차요금도 50% 할인 받을 수 있어 도심 속 쉼터로 각광받고 있다.`
        },
        {
            title: `수상 레저 스포츠`,
            text: `한강에서도 서프보드, 수상스키, 수상오토바이, 요트 등을 이용 할 수 있다. 기구를 소유한 경우에는 안전장구를 착용한다면 활동이 가능하며, 미소유한 경우에는 업체에서 장비를 대여하여 정해진 구역에서 수상레포츠를 즐길 수 있다.`
        }
    ]
    for(let i = 0; i < playList.length; i++) {
        playList[i].addEventListener(`click`, () => {
            playPhoto.setAttribute(`src`, `assets/images/play_image_${i + 1}.png`);
            playTitle.textContent = playContents[i].title;
            playText.textContent = playContents[i].text;
        });
    }

    // 카카오지도 API 호출
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
            center: new kakao.maps.LatLng(37.511579530593615, 126.99650352510628), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        // 마커가 표시될 위치입니다 
        var markerPosition  = new kakao.maps.LatLng(37.511579530593615, 126.99650352510628); 

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
})();