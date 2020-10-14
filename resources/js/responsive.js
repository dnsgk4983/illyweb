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
