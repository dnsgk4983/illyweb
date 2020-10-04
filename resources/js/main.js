$(function(){
    $('#header>.nav-wrapper>.gnb>ul').mouseenter(function(){
        $('.gnb_bg').css("display","block");
        $('.sub_menu_wrap').css("borderTop","1px solid #e2e2e2");
    });
    $('#header>.nav-wrapper>.gnb>ul').mouseleave(function(){
        $('.gnb_bg').css("display","none");
        $(".sub_menu_wrap").css("borderTop","none");
    });
});


$(function(){
    $('.gnb>ul>li:nth-child(1)').mouseenter(function(){
        $('.sub-nav-wrap .sub-nav-weather').css("display","flex");
    });
    $('.gnb>ul>li:nth-child(1)').mouseleave(function(){
        $('.sub-nav-wrap .sub-nav-weather').css("display","none");
    });

    $('.gnb>ul>li:nth-child(2)').mouseenter(function(){
        $('.sub-nav-wrap .sub-nav-information').css("display","flex");
    });
    $('.gnb>ul>li:nth-child(2)').mouseleave(function(){
        $('.sub-nav-wrap .sub-nav-information').css("display","none");
    });

    $('.gnb>ul>li:nth-child(3)').mouseenter(function(){
        $('.sub-nav-wrap .sub-nav-safety').css("display","flex");
    });
    $('.gnb>ul>li:nth-child(3)').mouseleave(function(){
        $('.sub-nav-wrap .sub-nav-safety').css("display","none");
    });

    $('.gnb>ul>li:nth-child(4)').mouseenter(function(){
        $('.sub-nav-wrap .sub-nav-board').css("display","flex");
    });
    $('.gnb>ul>li:nth-child(4)').mouseleave(function(){
        $('.sub-nav-wrap .sub-nav-board').css("display","none");
    });

    $('.gnb>ul>li:nth-child(5)').mouseenter(function(){
        $('.sub-nav-wrap .sub-nav-service').css("display","flex");
    });
    $('.gnb>ul>li:nth-child(5)').mouseleave(function(){
        $('.sub-nav-wrap .sub-nav-service').css("display","none");
    });
});
// calamity area javascript
$(function(){

    $(".sub-nav-weather>ul>li:nth-child(1)").mouseenter(function(){
        $('.sub-icon-6 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub-nav>ul>li").mouseleave(function(){
        $('.sub-icon-6 img').animate({marginTop:"0"},100);
    });
    $(".sub-nav-weather>ul>li:nth-child(2)").mouseenter(function(){
        $('.sub-icon-7 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub-nav>ul>li").mouseleave(function(){
        $('.sub-icon-7 img').animate({marginTop:"0"},100);
    });
    $(".sub-nav-weather>ul>li:nth-child(3)").mouseenter(function(){
        $('.sub-icon-8 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub-nav-weather>ul>li").mouseleave(function(){
        $('.sub-icon-8 img').animate({marginTop:"0"},100);
    });

    $(".sub-nav-information>ul>li:nth-child(1)").mouseenter(function(){
        $('.sub-icon-10 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub-nav-information>ul>li").mouseleave(function(){
        $('.sub-icon-10 img').animate({marginTop:"0"},100);
    });
    $(".sub-nav-information>ul>li:nth-child(2)").mouseenter(function(){
        $('.sub-icon-11 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub-nav-information>ul>li").mouseleave(function(){
        $('.sub-icon-11 img').animate({marginTop:"0"},100);
    });
    $(".sub-nav-information>ul>li:nth-child(3)").mouseenter(function(){
        $('.sub-icon-12 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub-nav-information>ul>li").mouseleave(function(){
        $('.sub-icon-12 img').animate({marginTop:"0"},100);
    });
    $(".sub-nav-information>ul>li:nth-child(4)").mouseenter(function(){
        $('.sub-icon-9 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub-nav-information>ul>li").mouseleave(function(){
        $('.sub-icon-9 img').animate({marginTop:"0"},100);
    });

    $(".sub-nav-safety>ul>li:nth-child(1)").mouseenter(function(){
        $('.sub-icon-13 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub-nav-safety>ul>li").mouseleave(function(){
        $('.sub-icon-13 img').animate({marginTop:"0"},100);
    });
    $(".sub-nav-safety>ul>li:nth-child(2)").mouseenter(function(){
        $('.sub-icon-14 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub-nav-safety>ul>li").mouseleave(function(){
        $('.sub-icon-14 img').animate({marginTop:"0"},100);
    });
    $(".sub-nav-safety>ul>li:nth-child(3)").mouseenter(function(){
        $('.sub-icon-15 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub-nav-safety>ul>li").mouseleave(function(){
        $('.sub-icon-15 img').animate({marginTop:"0"},100);
    });

    $(".sub-nav-board>ul>li:nth-child(1)").mouseenter(function(){
        $('.sub-icon-16 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub-nav-board>ul>li").mouseleave(function(){
        $('.sub-icon-16 img').animate({marginTop:"0"},100);
    });
    $(".sub-nav-board>ul>li:nth-child(2)").mouseenter(function(){
        $('.sub-icon-17 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub-nav-board>ul>li").mouseleave(function(){
        $('.sub-icon-17 img').animate({marginTop:"0"},100);
    });
    $(".sub-nav-board>ul>li:nth-child(3)").mouseenter(function(){
        $('.sub-icon-18 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub-nav-board>ul>li").mouseleave(function(){
        $('.sub-icon-18 img').animate({marginTop:"0"},100);
    });


    $(".sub-nav-service>ul>li:nth-child(1)").mouseenter(function(){
        $('.sub-icon-19 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub-nav-service>ul>li").mouseleave(function(){
        $('.sub-icon-19 img').animate({marginTop:"0"},100);
    });
    $(".sub-nav-service>ul>li:nth-child(2)").mouseenter(function(){
        $('.sub-icon-20 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub-nav-service>ul>li").mouseleave(function(){
        $('.sub-icon-20 img').animate({marginTop:"0"},100);
    });
    $(".sub-nav-service>ul>li:nth-child(3)").mouseenter(function(){
        $('.sub-icon-21 img:first-child').stop().animate({marginTop:"-29px"},100);
    });
    $(".sub-nav-service>ul>li").mouseleave(function(){
        $('.sub-icon-21 img').animate({marginTop:"0"},100);
    });

    
    $('.view-table').click(function(){
        $('.map-table').css('display','block');
        $('.map-table').css('right','-12px');
        $('.map-table').animate( { right: '-12px'}, 0);
    });
    $('.table-close').click(function(){
        $('.map-table').css('right','-400px');
        $('.map-table').animate( {right: '-400px'}, 0);
    });

});
// active class add
var selector = '.media-tab li';

$(selector).on('click', function(){
    $(selector).removeClass('active-2');
    $(this).addClass('active-2');
});

// 수정한 퀵메뉴
$(window).scroll(function() {
    if($(this).scrollTop() > 170) {
        $('.quickmenu-1').css('position','fixed').css('top',0);
    }
    else {
        $('.quickmenu-1').css('position','absolute').css('top',170);
    }
    
    if($(this).scrollTop() > 360) {
        $('.r-fast').css('position','fixed').css('top',0);
    }
    else {
        $('.r-fast').css('position','absolute').css('top',360);
    }
});