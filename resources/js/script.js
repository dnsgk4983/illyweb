/* 마우스오버 아웃, 포커스인 아웃 효과 */
function fborder(param,obj,color){
	var param = $(param);
	var obj = param.find(obj);
	var str = '<span class="over"></span>';

	obj.append(str).css({"position":"relative"});
	obj.find(".over").css({"position":"absolute","top":"0","left":"0","z-index":"1","background":color,"opacity":"0"});
	obj.bind("mouseenter touchstart focusin",function(event){
		var t = $(this);
		t.find(".over").css({"width":t.width(),"height":t.height(),"color":"#fff","font-weight":"bold"});
		t.find(".over").stop(true,false).animate({opacity:1},{duration:300,easing:"easeOutCubic"});
		t.find(".over").html("<span>"+t.find('img').attr('alt')+"</span>");
		event.stopPropagation();
	});
 
	obj.bind("mouseleave touchstart focusout",function(event){
		var t = $(this);
		t.find(".over").stop(true,false).animate({opacity:0},{duration:150,easing:"easeOutCubic"});
		event.stopPropagation();
	});
}

/* 텍스트애니메이션 플러그인 */
(function($){
    $.fn.animateNumbers = function(stop, commas, duration, ease) {
        return this.each(function() {
            var $this = $(this);
            var start = Number($this.text().replace(/,/g,""));
			commas = (commas === undefined) ? true : commas;
            $({value: start}).animate({value: stop}, {
            	duration: duration == undefined ? 1000 : duration,
            	easing: ease == undefined ? "swing" : ease,
            	step: function(){
            		$this.text(Math.floor(this.value).toLocaleString());
            	},
            	complete: function(){
            	   if (Number($this.text()) !== stop) {
            	       $this.text(stop.toLocaleString());
            	   }
            	}
            });
        });
    };
})(jQuery);

/* flow label */
$(document).ready(function(){
	if(!$("label").is(".flow")) return false;

	var o1 = $("label.flow");
	var o2 = $("label.flow").next();

	o1.css({"position":"absolute"});

	o1.bind("click focusin",function(){
		$(this).css({"visibility":"hidden"});
	});

	o2.bind("click focusin",function(){
		$(this).prev().css({"visibility":"hidden"});
	});

	o2.bind("focusout",function(){
		if($(this).val() == ""){
			$(this).prev().css({"visibility":"visible"});
		}
	});

	$.each(o2,function(e){
		if($(this).val() != "") $(this).prev().css({"visibility":"hidden"});
	});
});

/* 모바일에서 정상적인 테이블 뷰가 가능하도록 */
function responseTable(){
	if(chaked_OS() == true && return_width()<768){
	if(location.href.match('bbs')) return false;
		var param = $(".basic_table");
		param.wrap("<div class='responseTable'></div>");
		param.wrap("<div style='width:100%; min-width:718px' class='table_scroll_x'></div>"); // 1024 컨텐츠 영역에 맞춤
		/*
		if(param.find("col").size() > 4){
			param.wrap("<div style='width:100%; min-width:920px' class='table_scroll_x'></div>");
		}else{
			param.wrap("<div style='width:100%; min-width:620px' class='table_scroll_x'></div>");
		}
		*/
	
		$.each(param,function(){
			$(this).parent().parent().height($(this).outerHeight()+20);
		});

		fleXenv.initByClass("responseTable");

		// 터치 이벤트 
		var startX,startY;
		function getCoord(e,c) {
		    return /touch/.test(e.type) ? (e.originalEvent || e).changedTouches[0]['page' + c] : e['page' + c];
		}
		 
		$(".responseTable").on('touchstart', function(event) {
		    startX = getCoord(event, 'X');
		    startY = getCoord(event, 'Y');
		}).on('touchend', function (event) {
		    if (Math.abs(getCoord(event, 'X') - startX) < 20 && Math.abs(getCoord(event, 'Y') - startY) < 20) {
		       $(window).stop(true,false).animate({top:startY},0);
		       //event.preventDefault();
		    }
		})
	}
}

// 굴러온 데이터 반환 
function return_data(data){
	return data;
};

// 메뉴코드 반환 [반드시 필요함 건들지말것]
function mno(n,data){
	if(data != null){
		var href = data;
	}else{
		var href = location.href;
	}
	var sitemap = [];

	if(!href.match("sitemap")){
		if(href.match('sub')){
			href = href.substr(href.lastIndexOf("sub"));
			href = href.split("sub")[1].split("_");
			if(href[n] != undefined) href = Number(href[n].substr(0,2));
			return href;
		}
	}else{
		sitemap[0] = 6;
		if(href.match("sitemap_11")) sitemap[1] = 1;
		if(href.match("sitemap_12")) sitemap[1] = 2;
		if(href.match("sitemap_13")) sitemap[1] = 3;
		if(href.match("sitemap_14")) sitemap[1] = 4;
		if(href.match("sitemap_15")) sitemap[1] = 5;
		return sitemap[n];
	}
}

/* 버튼 onclick */
function href(t,n){ if(n != undefined) location.href(t); else window.open(t); }

/* 너비 균등분할 w = 갯수, st = 단위 */
function width_set(param,obj,w,st){
	var o = $(param).find(obj);
	var w = 100/w;

	$.each(o,function(){
		$(this).width(w+st);
	});
}

/*
인수에 반응하여 index 반환
작은 수 부터 배열로 적는다 [360,1024,1200]
*/
function return_rw(n){
	var rw = 0;
	for(var i=0; i<n.length; i++){
		if(n[i] <= return_width()) rw = i;
	}
	return rw;
}

/* 너비값 전달 */
function return_width(){
	var w = $(window).width(); return w;
}

/* 높이값 전달 */
function return_height(){
	var h = $(window).height(); return h;
}

/* OS 체크 불린값 전달 window 폰, window 기반 태블릿pc 에서 테스트가 필요함 */
function chaked_OS(){
	var device = navigator.userAgent;

	var str = device.split(";");
		str = str[0].split("(");
		str = str[1].split(" ");

	var chkOS = false;

	if(str[0] != "Windows" && str[0] != "Macintosh" && str[0] != "compatible"){
		chkOS = true; // 데스크탑이 아닐 때 true
	}

	return chkOS;
}

/* MSIE 9이하 버전체크 */
function ms_ver(){
	if(navigator.userAgent.match('MSIE')){
		var msie = navigator.userAgent;
		var ms_ver = msie.substr(msie.lastIndexOf('MSIE')).split('MSIE')[1];
			ms_ver = Number(ms_ver.split('.')[0]);

		return ms_ver;
	}else{
		return null;
	}
}


//쿠키저장
function setCookie( name, value, expiredays ) { 
 var todayDate = new Date(); 
 todayDate.setDate( todayDate.getDate() + expiredays ); 
 document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";" 
} 

function getCookie(name) 
{ 
	var arg = name + "="; 
	var alen = arg.length; 
	var clen = document.cookie.length; 
	var i = 0; while(i< clen) 
	{ 
		var j = i + alen; 
		if(document.cookie.substring(i,j)==arg)
			{ 
			var end = document.cookie.indexOf(";",j); 
			if(end == -1) end = document.cookie.length;
			return unescape(document.cookie.substring(j,end)); 
			} 
		i=document.cookie.indexOf(" ",i)+1; 
		if (i==0) break; 
	} 
	return null; 
}


/*********팝업관련 자바스크립트 소스****************/
function close_layer(num){
	document.getElementById(num).style.display = 'none';

	//쿠키굽기
	setCookie(num, 'done' , 1); 
}
function close_layer2(num){
	document.getElementById(num).style.display = 'none';

}
function link_target(url,target){
	if(target=='_blank'){
		window.open(url);
	}else if(target=='_self'){
		location.href=url;
	}else{
		opener.location.href=url;
	}
}
/*********팝업관련 자바스크립트 소스****************/


//페이스북
function facebookOpen_local(titl,href){
	var titl = $(titl).text();
	titl = titl.replace ('"', '&quot;');
	titl = titl.replace ('"', '&quot;');
	titl = encodeURIComponent(titl);
	var link = encodeURIComponent(href); 
	var url = "http://www.facebook.com/sharer.php?u=" + link + "&t=" + titl;
	snswindowOpen (url, 900, 450, 'no');
}

//twitter
function twitterOpen_local(titl,href){
	var titl = $(titl).text();
	titl = titl.replace ('"', '&quot;');
	titl = titl.replace ('"', '&quot;');
	titl = titl.replace('&gt;','>');
	titl = titl.replace('&gt;','>');
	titl = encodeURIComponent(titl);
	var link = encodeURIComponent(href); 
	var url = "http://twitter.com/share?text=" + titl + "&url=" + link;
	snswindowOpen (url, 800, 400, 'yes');
}

//페이스북
function facebookOpen(){
	var titl = $("#location h3").text();
	titl = titl.replace ('"', '&quot;');
	titl = titl.replace ('"', '&quot;');
	titl = encodeURIComponent(titl);
	var link = encodeURIComponent(location.href); 
	var url = "http://www.facebook.com/sharer.php?u=" + link + "&t=" + titl;
	snswindowOpen (url, 900, 450, 'no');
}
//twitter
function twitterOpen(){
	var titl = $("#location h3").text();
	titl = titl.replace ('"', '&quot;');
	titl = titl.replace ('"', '&quot;');
	titl = titl.replace('&gt;','>');
	titl = titl.replace('&gt;','>');
	titl = encodeURIComponent(titl);
	var link = encodeURIComponent(location.href); 
	var url = "http://twitter.com/share?text=" + titl + "&url=" + link;
	snswindowOpen (url, 800, 400, 'yes');
}
function snswindowOpen(){
	var nUrl; var nWidth; var nHeight; var nLeft; var nTop; var nScroll;
	nUrl = arguments[0];
	nWidth = arguments[1];
	nHeight = arguments[2];
	nScroll = (arguments.length > 3 ? arguments[3] : "no");
	nLeft = (arguments.length > 4 ? arguments[4] : (screen.width/2 - nWidth/2));
	nTop = (arguments.length > 5 ? arguments[5] : (screen.height/2 - nHeight/2));
	winopen=window.open(nUrl, 'SNS', "left="+nLeft+",top="+nTop+",width="+nWidth+",height="+nHeight+",scrollbars="+nScroll+",toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=no");
}


function admissionFormCheck()
{
	var f = document.admissionForm;
	if(f.n_name.value.length<1)
	{
		alert("이름을 입력해 주세요");
		f.n_name.focus();
		return false;
	}

	if(f.jumin_num.value.length != 13)
	{
		alert("주민번호는 숫자만 입력해 주세요");
		f.jumin_num.focus();
		return false;
	}
	return true;
}

$(function()
	{
	$('#contents a').each(function(){
		var aaa = $(this); 
		var link = aaa.attr('href');	
		aaa.attr('href',link.replace('&', '&amp;'));
		$(this).click(function() {
			aaa.attr('href',link.replace('&amp;', '&'));
	   });
	});
});