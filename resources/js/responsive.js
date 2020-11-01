// 메인 좌측 반응형 ( 웹 = 탭 메뉴 // 모바일 = 셀렉트박스로 변경 )
$('.tab-btn li').first().addClass("activeClass");
    $(".tab-conts").not(':first').hide();
    
        $('.tab-btn li').on('click',function(){
        $(this).addClass("activeClass").siblings().removeClass("activeClass");
        var link = $(this).find("a").attr("href");
        var link_num = link.substr(link.length-1);
        $("select#selector option").eq(link_num-1).prop("selected", "selected");
        $(".tab-conts").hide();
        $(link).show();
        });
        
        $("select#selector").on("change",function(){
        var select_link = $("select#selector").val();
        var select_num = $(this).prop('selectedIndex');
        $('.tab-btn li').eq(select_num).addClass("activeClass").siblings().removeClass('activeClass');
        $(".tab-conts").hide();
        $(select_link).show();
        console.log(select_link);
    });
// 메인 우측 반응형 ( 웹 = 탭 메뉴 // 모바일 = 셀렉트박스로 변경 )
$('.tab-button li').first().addClass("activeClass");
    $(".tab-contents").not(':first').hide();
    
        $('.tab-button li').on('click',function(){
        $(this).addClass("activeClass").siblings().removeClass("activeClass");
        var link = $(this).find("a").attr("href");
        var link_num = link.substr(link.length-1);
        $("select#tab-select option").eq(link_num-1).prop("selected", "selected");
        $(".tab-contents").hide();
        $(link).show();
        });
        
        $("select#tab-select").on("change",function(){
        var select_link = $("select#tab-select").val();
        var select_num = $(this).prop('selectedIndex');
        $('.tab-button li').eq(select_num).addClass("activeClass").siblings().removeClass('activeClass');
        $(".tab-contents").hide();
        $(select_link).show();
        console.log(select_link);
    });
    $(function(){
        $('.table-tabs').click(function(){
            $('.table-row table').animate({marginLeft:0},0);
            $('.table-close').css("display",'block');
            $('.table-tabs').css('display','none');
        });
        $('.table-close').click(function(){
            $('.table-row table').animate({marginLeft:400},0);
            $('.table-close').css("display","none");
            $('.table-tabs').css("display","block");
        });
        $('.dropdown').mouseover(function(){
            $('.hover-bg').css('display','block');
        });
        $('.dropdown').mouseleave(function(){
            $(".hover-bg").css('display','none');
        });
    });


    var nodes = document.querySelectorAll("#product__slider");



    Array.prototype.forEach.call(nodes, function(k, v){

    

    });

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        dots: false,
        nav: true,
        navigationText: ["◀", "▶"],
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
    });
    var owl = $('.owl-carousel_1');
    owl.owlCarousel({
        items:1,
        dots: false,
        nav: true,
        navigationText: ["◀", "▶"],
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
    });
    var owl = $('.owl-carousel_2');
    owl.owlCarousel({
        items:1,
        dots: false,
        nav: true,
        navigationText: ["◀", "▶"],
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
    });
    var banner = $('#logo-carousel');
    banner.owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[3000])
    });
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    });