$(function(){
    // 이미지 슬라이드
    $('#e_pro').slick({
        slidesToShow:4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 200,
        dots: false,
        arrows: false,
    });

    $('#thumb').slick({
        slidesToShow:4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 200,
        dots: false,
        arrows: false,
    })

    $(window).on('scroll',function(){
        if($(this).scrollTop() > 300){
            $('#quickmenu').stop().fadeIn();
        } else {
            $('#quickmenu').stop().fadeOut();
        }
    });

    AOS.init({
        // duration: 3000,
      });

    $('#thumb figure').on('click',function(){
        $('#thumb figure').removeClass('selected');
        $(this).addClass('selected');
        const thumb = $(this).children('img').attr('src');
        $('#main_video').attr('src',thumb);
        const sub = $(this).children('img').attr('data-sub');
        const title = $(this).children('img').attr('data-title');
        const dis = $(this).children('img').attr('data-dis');
        const syn = $(this).children('img').attr('data-syn');
        const epi = $(this).children('img').attr('data-epi');
        $('#cap_title #cap_sub').text(sub);
        $('#cap_title #cap_main').text(title);
        $('#cap_title #cap_dis').text(dis);
        $('#cap_syn #data_syn').text(syn);
        $('#cap_epi #data_epi').text(epi);
    });
})

