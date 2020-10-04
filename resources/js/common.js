//gnb 시작
$(function(){
	$("a").click(function(e){
		var href = $(this).attr("href");
		if(href == "#none" || href == "#" || href == ""){
			e.preventDefault();
		}
	});
	$(window).load(function(){
	});
	$(window).ready(function(){
		getParam();
		lnbOpen();
		thisDepth();
		svisualMov();
		$(".opOpen").click();
    });
	$(window).load(function(){
		thumbResize();
    });
	$(window).resize(function(){
		thumbResize();
		svisualStop();
	});
	$(window).scroll(function(){
	});

	//클릭오픈 시작
	$(".clickOpen > a").on("click",function(){
		$(this).parent().addClass("on");
	});
	$(".clickOpen > div > a").on("click",function(){
		$(this).parents(".clickOpen").removeClass("on");
	});
	//클릭오픈 끝


	//공유 시작
	$("#snsOpen").on("click",function(){
		$(this).parent().addClass("on");
	});
	$("#snsClose").on("click",function(){
		$("#snsOpen").parent().removeClass("on");
	});
	//공유 끝

	//dropDown 시작
	$(".dropDown a").on("mouseenter focusin",function(){
		$(".dropDown").removeClass("on");
		$(this).parents(".dropDown").addClass("on");
	});
	$(".dropDown > ul").on("mouseleave",function(){
		$(this).parents(".dropDown").removeClass("on");
	});
	$("a, button, input").focus(function(){
		var _boxName = $(this).parents(".dropDown").attr("class");
		//console.log(">>>>>> _boxName:"+_boxName);
		if(_boxName == "undefined" || _boxName == "" || _boxName == null){
			//console.log(">>>>>> 없다");
			$(".dropDown").removeClass("on");
		}
	});
	//dropDown 끝


	//pullUp 시작
	$(".pullUp a").on("mouseenter focusin",function(){
		$(".pullUp").removeClass("on");
		$(this).parents(".pullUp").addClass("on");
	});
	$(".pullUp .inner").on("mouseleave",function(){
		$(this).parents(".pullUp").removeClass("on");
	});
	$("a, button, input").focus(function(){
		var _boxName = $(this).parents(".pullUp").attr("class");

		if(_boxName == "undefined" || _boxName == "" || _boxName == null){
			$(".pullUp").removeClass("on");
		}
	});
	//pullUp 끝


	//레이어팝업 시작
	$(".lpOpen").on("click",function(){
		var _lpName = $(this).attr("href");
		//console.log(">>> _lpName : "+_lpName);
		var _winHeight = $("body").height();
		$("html").css({"height":_winHeight,"overflow":"hidden"});
		$("#lp_layout, #lp_layout .lp_wrap").removeClass("on");

		$("#lp_layout").addClass("on");
		$("#lp_layout").find(_lpName).addClass("on");
		thumbResize();

		var _returnBtn = $(this);

		$(window).keyup(function(){
			if(window.event.keyCode==9){
				$(".lpClose").focusout(function(){
					//console.log(">>> 마지막 탭");
					$("#lp_layout .lp_wrap.on .tabFirst").focus();
				});
			}
		});

		$(".lpClose").on("click", function(){
			$("#lp_layout").removeClass();
			$("#lp_layout .lp_wrap").removeClass("on");
			$("html, body").removeAttr("style");
			_returnBtn.focus();
		});
	});
	$(".opOpen").on("click",function(){
		$("#lp_layout").addClass("on");
		if($("#op_layout").find("ul > li").length < 1) {
			$("#op_layout").removeClass("on");
		}
	});
	$(".opClose").on("click", function(){
		$("#op_layout").removeClass("on");
	});
	//레이어팝업 끝
});


//서브 비쥬얼 시작
function svisualMov(){
	//console.log(">>>>>> svisualMov 시작");
	var _gnb_layout = $("#gnb_layout").attr("class");
	if(_gnb_layout != "mb"){
		//setTimeout(function(){
			$("#svisual_layout .svisual_wrap > .movImg").each(function() {
				var _thisWidth = $(this).width();
				var _thisHeight = $(this).height();
				var _svisualWidth = $("#svisual_layout").width();
				var _svisualHeight = $("#svisual_layout").height();
				if(_thisHeight > _svisualHeight){
					$(this).removeAttr("style").css({"width":_svisualWidth,"height":"auto"});
					$(this).animate({"width":_svisualWidth*1.2,"height":"auto"},6000,function(){
						$(this).animate({"width":_svisualWidth,"height":"auto"},5000);
					});
				}else if(_thisHeight <= _svisualHeight){
					$(this).removeAttr("style").css({"width":"auto","height":_svisualHeight});
					$(this).animate({"width":"auto","height":_svisualHeight*1.2},6000,function(){
						$(this).animate({"width":"auto","height":_svisualHeight},5000);
					});
				}
			});
		//},300);
	}
}
function svisualStop(){
	//console.log(">>>>>> svisualStop 시작");
	$("#svisual_layout .svisual_wrap .movImg").stop();

	$("#svisual_layout .svisual_wrap .movImg").removeAttr("style");
	$("#svisual_layout .svisual_wrap .movImg").css("width","100%");
	var _svisualHeight = $("#svisual_layout").height();
	var _imgHeight = $("#svisual_layout .svisual_wrap .movImg").height();

	var _gnb_layout = $("#gnb_layout").attr("class");
	if(_gnb_layout != "mb"){
		if(_svisualHeight > _imgHeight){
			$("#svisual_layout .svisual_wrap .movImg").css({width:"auto",height:"100%"});
		}else if(_svisualHeight < _imgHeight){
			$("#svisual_layout .svisual_wrap .movImg").css({width:"100%",height:"auto"});
		}
	}else{
		$("#svisual_layout .svisual_wrap .movImg").css({width:"100%",height:"auto"});
	}
}
//서브 비쥬얼 끝



//sns공유 시작
//페이스북
function facebookOpen() {
	var titl = $("#body_layout .contents_wrap .title_wrap h2").text();
	titl = titl.replace ('"', '&quot;');
	titl = titl.replace ('"', '&quot;');
	titl = encodeURIComponent(titl);
	var link = encodeURIComponent(location.href);
	var url = "http://www.facebook.com/sharer.php?u=" + link + "&t=" + titl;
	snswindowOpen (url, 900, 450, 'no');
}
//twitter
function twitterOpen() {
	var titl = $("#body_layout .contents_wrap .title_wrap h2").text();
	titl = titl.replace ('"', '&quot;');
	titl = titl.replace ('"', '&quot;');
	titl = encodeURIComponent(titl);
	var link = encodeURIComponent(location.href);
	var url = "http://twitter.com/share?text=" + titl + "&url=" + link;
	snswindowOpen (url, 800, 400, 'yes');
}
//카카오스토리 공유
function kakaoOpen() {
	var titl = $("#body_layout .contents_wrap .title_wrap h2").text();
	titl = titl.replace ('"', '&quot;');
	titl = titl.replace ('"', '&quot;');
	titl = encodeURIComponent(titl);
	var link = encodeURIComponent(location.href);
	var url = "https://story.kakao.com/share?url=" + link ;
	snswindowOpen (url, 900, 450, 'no');
}
//naver
function naverOpen() {
	var titl = $("#body_layout .contents_wrap .title_wrap h2").text();
	titl = titl.replace ('"', '&quot;');
	titl = titl.replace ('"', '&quot;');
	titl = encodeURIComponent(titl);
	var link = encodeURI(encodeURIComponent(location.href ));
	var url = "http://share.naver.com/web/shareView.nhn?url=" + link + "&title=" + titl;
	snswindowOpen (url, 800, 400, 'yes');
}
function snswindowOpen () {
	var nUrl; var nWidth; var nHeight; var nLeft; var nTop; var nScroll;
	nUrl = arguments[0];
	nWidth = arguments[1];
	nHeight = arguments[2];
	nScroll = (arguments.length > 3 ? arguments[3] : "no");
	nLeft = (arguments.length > 4 ? arguments[4] : (screen.width/2 - nWidth/2));
	nTop = (arguments.length > 5 ? arguments[5] : (screen.height/2 - nHeight/2));
	winopen=window.open(nUrl, 'SNS', "left="+nLeft+",top="+nTop+",width="+nWidth+",height="+nHeight+",scrollbars="+nScroll+",toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=no");
}
//sns공유 시작



//이미지 리사이즈 시작
function thumbResize(){
	$(".thumbResize_A img").each(function() {
		$(this).removeAttr("style");
		var thumbHeight = $(this).parent().height();
		var imgHeight = $(this).height();

		if(thumbHeight > imgHeight){
			$(this).css({"width":"auto","height":"100%"});
		}else{
			$(this).css({"width":"100%","height":"auto"});
		}
    });
}
//이미지 리사이즈 끝


//탭

function targetOpener(btn,option){
    var btn = $(btn);

    $(option.obj).hide().first().show();

    btn.bind("click",function(event){
        var t = $(this);
        href = t.attr("href").substr(1);

        if(option.lv == 0){
            if($("[id="+href+"]").css("display") == "none"){
                $("[id="+href+"]").show().css({'visibility':'visible'});
                t.addClass("ov");
            }else{
                $("[id="+href+"]").hide().css({'visibility':'hidden'});
                t.removeClass("ov");
            }
        }

        if(option.lv == 1){
            $(option.obj).hide().css({'visibility':'hidden'});
            $("[id="+href+"]").show().css({'visibility':'visible'});
            btn.removeClass("ov");
            t.addClass("ov");
        }
        event.preventDefault();
    });
}


//탭 시작
function tabObj(_target,_tabBtn,_tabCon,_active){
	_tabBtn.removeClass("on");
	_tabCon.removeClass("on");
	if(_active == undefined){
		_tabBtn.eq(0).addClass("on");
		_tabCon.eq(0).addClass("on");
	}
	_tabBtn.on("click",function(){
		var _clickNum = $(this).index()+1;
		_tabBtn.removeClass("on");
		_tabCon.removeClass("on");
		$(this).addClass("on");
		_target.find(".tab_con.n"+_clickNum).addClass("on");
	});
}
//탭 끝




//lnb 시작
function lnbOpen(){
	var _lnbLayout = $("body").find("#lnb_layout").attr("id");
	if(_lnbLayout == "lnb_layout"){
		console.log(">>>_lnbLayout : "+_lnbLayout);
		var _bodyType = $("#body_layout").attr("class");
		console.log(">>>_bodyType : "+_bodyType);
		var _thisWidth = $("#lnb_layout").width();
		var _depth2Num = $("#lnb_layout").find(".depth2_ul > li").size();
		var _depth3Height = $("#lnb_layout").find("li.on > .depth3_ul").outerHeight();
		var _depth2Btn = $("#lnb_layout").find(".depth2_ul > li > a");
		//console.log(">>>>>>>>> _depth2Num:"+_depth2Num);
		//console.log(">>>>>>>>> _depth3Height:"+_depth3Height);
		//console.log(">>>>>>>>> _depth3Height:"+_depth3Height);
		//$(this).find(".depth2_ul").addClass("n"+_depth2Num);
		if(_depth3Height == "0" || _depth3Height == "" || _depth3Height == null){
			$("#lnb_layout").addClass("b_d_0");
		}else{
			$("#lnb_layout").removeClass("b_d_0");
		}
		if(_bodyType == "b_type"){
			$("#lnb_layout").css("padding-bottom",Number(_depth3Height));
		}
		$("#lnb_layout a, #lnb_layout .depth3_ul").on("mouseenter focus",function(){
			$("#lnb_layout li").removeClass("ov");
			$(this).parents("li").addClass("ov");
			if(_bodyType.indexOf("a_type") != -1){
				$("#lnb_layout").css("padding-bottom",Number($("#lnb_layout .depth2_ul > li.ov > ul").outerHeight()));
				var _depth3Height = $("#lnb_layout").find("li.ov > .depth3_ul").outerHeight();
				if(_depth3Height == "0" || _depth3Height == "" || _depth3Height == null){
					$("#lnb_layout").addClass("b_d_0");
				}else{
					$("#lnb_layout").removeClass("b_d_0");
				}
				$("#lnb_layout .depth2_ul > li.on > ul").css("top","-99999px");
				$("#lnb_layout .depth2_ul > li.on.ov > ul").removeAttr("style");
			}
		});
		$("#lnb_layout").mouseleave(function(){
			var _depth3Height = $(this).find("li.on > .depth3_ul").outerHeight();
			$("#lnb_layout .depth2_ul > li.on > ul").removeAttr("style");
			$("#lnb_layout li").removeClass("ov");
			if(_bodyType.indexOf("b_type") != -1){
				$(this).css("padding-bottom",Number(_depth3Height));
				var _depth3Height = $("#lnb_layout").find("li.on > .depth3_ul").outerHeight();
				if(_depth3Height == "0" || _depth3Height == "" || _depth3Height == null){
					$("#lnb_layout").addClass("b_d_0");
				}else{
					$("#lnb_layout").removeClass("b_d_0");
				}
			}
		});
		$("a, button, input").focus(function(){
			var _thisName = $(this).parents("#lnb_layout").attr("id");
			//console.log(">>>>>> _navBox:"+_navBox);

			if(_thisName == "undefined" || _thisName == "" || _thisName == null){
				//console.log(">>>>>> 없다");
				var _depth3Height = $("#lnb_layout").find("li.on > .depth3_ul").outerHeight();
				$("#lnb_layout .depth2_ul > li.on > ul").removeAttr("style");
				$("#lnb_layout li").removeClass("ov");
				if(_bodyType.indexOf("b_type") != -1){
					$("#lnb_layout").css("padding-bottom",Number(_depth3Height));
					if(_depth3Height == "0" || _depth3Height == "" || _depth3Height == null){
						$("#lnb_layout").addClass("b_d_0");
					}else{
						$("#lnb_layout").removeClass("b_d_0");
					}
				}
			}
		});
	}
}
//lnb 끝

//파라미터 받기 시작
function getParam(){
    var _tempUrl = window.location.search.substring(1); //url에서 처음부터 '?'까지 삭제
    var _tempArray = _tempUrl.split('&'); // '&'을 기준으로 분리하기

 	if(_tempArray != ""){
		var top_type;
		var gnb_type;
		var svisual_type;
		var body_type;
		for(var i = 0; i < _tempArray.length; i++) {
			/*
			var _keyValuePair = _tempArray[i].split("="); // '=' 을 기준으로 분리하기
			if(_keyValuePair[0] == paramName){ // _keyValuePair[0] : 파라미터 명
				// _keyValuePair[1] : 파라미터 값
				return _keyValuePair[1];
			} ;
			*/
			eval("var _param"+i+" = _tempArray["+i+"].split(\"=\");");
			if(eval("_param"+i)[0] == "top_type"){
				var top_type = eval("_param"+i)[1];
			}else if(eval("_param"+i)[0] == "gnb_type"){
				var gnb_type = eval("_param"+i)[1];
			}else if(eval("_param"+i)[0] == "svisual_type"){
				var svisual_type = eval("_param"+i)[1];
			}else if(eval("_param"+i)[0] == "body_type"){
				var body_type = eval("_param"+i)[1];
			}
		} ;

		//탑
		if(top_type == "a"){
			$("#top_layout").removeClass().addClass("a_type");
		}else if(top_type == "b"){
			$("#top_layout").removeClass().addClass("b_type");
		}else if(top_type == "c"){
			$("#top_layout").removeClass().addClass("c_type");
		}
		//gnb
		if(gnb_type == "a"){
			$("#gnb_layout").removeClass().addClass("a_type");
		}else if(gnb_type == "at"){
			$("#gnb_layout").removeClass().addClass("at_type");
		}else if(gnb_type == "b"){
			$("#gnb_layout").removeClass().addClass("b_type");
		}else if(gnb_type == "c"){
			$("#gnb_layout").removeClass().addClass("c_type");
		}else if(gnb_type == "ct"){
			$("#gnb_layout").removeClass().addClass("ct_type");
		}else if(gnb_type == "d"){
			$("#gnb_layout").removeClass().addClass("d_type");
		}else if(gnb_type == "dt"){
			$("#gnb_layout").removeClass().addClass("dt_type");
		}
		//비쥬얼
		if(svisual_type == "a"){
			$("#svisual_layout").removeClass().addClass("a_type");
		}else if(svisual_type == "b"){
			$("#svisual_layout").removeClass().addClass("b_type");
		}else if(svisual_type == "c"){
			$("#svisual_layout").removeClass().addClass("c_type");
		}
		//바디
		if(body_type == "a"){
			$("#body_layout").removeClass().addClass("a_type");
		}else if(body_type == "b"){
			$("#body_layout").removeClass().addClass("b_type");
		}else if(body_type == "c"){
			$("#body_layout").removeClass().addClass("c_type");
		}
	};
};
//파라미터 받기 끝

//상단고정 시작
function addFixed(){
	var _bodyType = $("#body_layout").attr("class");
	var _lnbName = $("#lnb_layout").attr("id");
	//console.log(">>> _bodyType : "+_bodyType);
	$(window).scroll(function(){
		if(_bodyType == "b_type"){
			if(_lnbName == "undefined"){
				var thisScrollTop = $(window).scrollTop();
				var lnbScrollTop = $("#lnb_layout").offset().top;
				//console.log(">>> thisScrollTop : "+thisScrollTop);
				//console.log(">>> lnbScrollTop : "+lnbScrollTop);
				if(thisScrollTop > 0){
					$("#top_layout").addClass("fixed");
				}else if(thisScrollTop == 0){
					$("#top_layout").removeClass("fixed");
				}
				if(thisScrollTop > lnbScrollTop){
					$("#lnb_layout").addClass("fixed");
				}else if(thisScrollTop < lnbScrollTop){
					$("#lnb_layout").removeClass("fixed");
				}
			}
		}
	});
}
//상단고정 끝

//넓이 리사즈 시작
function winReSize(){
	var winWidth = $(window).outerWidth();
	var resizeWidthArry = [winWidth];
	$(window).resize(function(){
		var resizeWidth = $(window).outerWidth();
		resizeWidthArry.push(resizeWidth);
		var resizeWidthArryNum1 = Number(resizeWidthArry.length-1);
		var resizeWidthArryNum2 = resizeWidthArryNum1-1;
		if(resizeWidthArry[resizeWidthArryNum1] != resizeWidthArry[resizeWidthArryNum2]){
			//mbClose();
		}
	});
}
//넓이 리사즈 끝


//메뉴 댑스활성화 시작
function thisDepth(){
	var _depth1 = $("#gnb_layout .depth1_ul > li.on").index();
	var _depth2 = $("#lnb_layout .depth2_ul > li.on").index();
	var _depth3 = $("#lnb_layout .depth3_ul > li.on").index();
	//console.log(">>> _depth1:"+_depth1);
	//console.log(">>> _depth2:"+_depth2);
	//console.log(">>> _depth3:"+_depth3);


	var gnbType =$("#gnb_layout").attr("class").split(" ")[0];
	if(gnbType == "at_type"){
		var gnb_txt = $("#gnb_layout .gnb_wrap").html();
		$("#gnb_layout .gnb_wrap").html("<div class='title_wrap'></div>"+gnb_txt);
	}else if(gnbType == "ct_type"){
		var depth1_total = Number($("#gnb_layout .depth1_ul > li").index()+1);
		var txt = "<ul class=\"depth2_ul";
		for(var i=1; i<=depth1_total; i++){
			//var gnb_txt1 = $("#gnb_layout .depth1_ul > li.n1").html().split("<ul class=\"depth2_ul");
			//$("#gnb_layout .depth1_ul > li.n1").html(gnb_txt1[0]+"<div class=\"test\"></div><ul class=\"depth2_ul"+gnb_txt1[1]);
			eval("var gnb_txt"+i+" = $('#gnb_layout .depth1_ul > li.n"+i+"').html().split('<ul class=\"depth2_ul');");
			eval("$('#gnb_layout .depth1_ul > li.n"+i+"').html(gnb_txt"+i+"[0]+'<div id=\"gnbTit"+i+"\" class=\"title_wrap\"></div><ul class=\"depth2_ul'+gnb_txt"+i+"[1]);");
		}
	}else if(gnbType == "dt_type"){
		var depth1_total = Number($("#gnb_layout .depth1_ul > li").index()+1);
		var txt = "<ul class=\"depth2_ul";
		for(var i=1; i<=depth1_total; i++){
			//var gnb_txt1 = $("#gnb_layout .depth1_ul > li.n1").html().split("<ul class=\"depth2_ul");
			//$("#gnb_layout .depth1_ul > li.n1").html(gnb_txt1[0]+"<div class=\"test\"></div><ul class=\"depth2_ul"+gnb_txt1[1]);
			eval("var gnb_txt"+i+" = $('#gnb_layout .depth1_ul > li.n"+i+"').html().split('<ul class=\"depth2_ul');");
			eval("$('#gnb_layout .depth1_ul > li.n"+i+"').html(gnb_txt"+i+"[0]+'<div id=\"gnbTit"+i+"\" class=\"title_wrap\"></div><ul class=\"depth2_ul'+gnb_txt"+i+"[1]);");
		}
	}

	gnbOpen(_depth1,_depth2,_depth3);
}
//메뉴 댑스활성화 끝

//gnb 시작
function gnbResize(){
	var _gnbDisplay = $("#gnb_layout").css("display");
	var _gnbData = $("#gnb_layout").attr("data-gnb");
	if(_gnbDisplay != "none"){
		$("#gnb_layout").addClass(_gnbData);
	}else{
		$("#gnb_layout").removeClass(_gnbData);
	}
}
function gnbOpen(_depth1,_depth2,_depth3){
	gnbResize();
	$(window).resize(function(){
		gnbResize();
		$("body, #gnb_layout, #gnb_layout .depth1_ul").removeAttr("style");
		$("#gnb_layout").removeClass("mb");
	});
	var gnbType =$("#gnb_layout").attr("class").split(" ")[0];
	//console.log(">>>>>> gnbType:"+gnbType);
	//타이틀 시작
	if(gnbType == "at_type"){
		var tit = $("#top_layout .logo_wrap a").html();
		var txt = "설명글 입니다";
		$("#gnb_layout .title_wrap").html("<strong>"+tit+"</strong><p>"+txt+"</p>");
	}else if(gnbType == "ct_type" || gnbType == "dt_type"){
		var tit1 = $("#gnb_layout .depth1_ul > .n1 > a > span").html();
		var txt1 = "1설명글 입니다";
		var tit2 = $("#gnb_layout .depth1_ul > .n2 > a > span").html();
		var txt2 = "2설명글 입니다";
		var tit3 = $("#gnb_layout .depth1_ul > .n3 > a > span").html();
		var txt3 = "3설명글 입니다";
		var tit4 = $("#gnb_layout .depth1_ul > .n4 > a > span").html();
		var txt4 = "4설명글 입니다";
		var tit5 = $("#gnb_layout .depth1_ul > .n5 > a > span").html();
		var txt5 = "5설명글 입니다";
		var tit6 = $("#gnb_layout .depth1_ul > .n6 > a > span").html();
		var txt6 = "6설명글 입니다";
		$("#gnb_layout #gnbTit1").html("<strong>"+tit1+"</strong><p>"+txt1+"</p>");
		$("#gnb_layout #gnbTit2").html("<strong>"+tit2+"</strong><p>"+txt2+"</p>");
		$("#gnb_layout #gnbTit3").html("<strong>"+tit3+"</strong><p>"+txt3+"</p>");
		$("#gnb_layout #gnbTit4").html("<strong>"+tit4+"</strong><p>"+txt4+"</p>");
		$("#gnb_layout #gnbTit5").html("<strong>"+tit5+"</strong><p>"+txt5+"</p>");
		$("#gnb_layout #gnbTit6").html("<strong>"+tit6+"</strong><p>"+txt6+"</p>");
	}
	//타이틀 끝

	//gnb_layout(pcStart,tabletStart,mobileStart);
	$("#gnb_layout a, #gnb_layout .depth2_ul").on("mouseenter focus",function(){
		var _gnb_layout = $("#gnb_layout").attr("class").indexOf("mb");
		//console.log(">>>>>> _gnb_layout:"+_gnb_layout);
		if(_gnb_layout == "-1"){
			$("#top_layout, #gnb_layout").removeClass("on");
			$("#gnb_layout .depth1_ul li").removeClass("ov");
			$("#top_layout").addClass("ov");
			$("#gnb_layout").addClass("on");
			$(this).parents("li").addClass("ov");
		}
		$("#top_layout", ".depth2_ul", ".gnb_bg, .depth2_ul").removeAttr("style");
	});
	$("#gnb_layout a").on("mouseenter focus",function(){
		var _gnb_layout = $("#gnb_layout").attr("class").indexOf("mb");
		//console.log(">>>>>> _gnb_layout:"+_gnb_layout);
		//var gnbType =$("#gnb_layout").attr("class").split(" ")[0];
		//console.log(">>>>>> gnbType:"+gnbType);
		if(_gnb_layout == "-1"){
			gnbBg("#top_layout", ".depth2_ul", ".gnb_bg, .depth2_ul", gnbType);
		}
	});
	$("#gnb_layout .depth1_ul").mouseleave(function(){
		$("#gnb_layout li").removeClass("ov");
		var _gnb_layout = $("#gnb_layout").attr("class").indexOf("mb");
		if(_gnb_layout == "-1"){
			if(gnbType == "c_type" || gnbType == "ct_type" || gnbType == "d_type" || gnbType == "dt_type"){
				gnbClose(_depth1);
			}
		}
	});
	$("#gnb_layout").mouseleave(function(){
		var _gnb_layout = $("#gnb_layout").attr("class").indexOf("mb");
		//console.log(">>>>>> _gnb_layout:"+_gnb_layout);
		console.log(">>>>>> 기본 닫기");
		if(_gnb_layout == "-1"){
			gnbClose(_depth1);
		}
	});
	$("body > div").click(function(){
		var _thisName = $(this).attr("id");
		var _gnb_layout = $("#gnb_layout").attr("class").indexOf("mb");
		//console.log(">>>>>> _gnb_layout:"+_gnb_layout);
		if(_thisName == "top_layout" || _thisName == "skipnavi"){
		}else{
			if(_gnb_layout == "-1"){
				gnbClose(_depth1);
			}
		}
	});
	$("*").focus(function(){
		var _gnb_layout = $("#gnb_layout").attr("class").indexOf("mb");
		//console.log(">>>>>> _gnb_layout:"+_gnb_layout);
		if(_gnb_layout == "-1"){
			var _navBox = $(this).parents("#gnb_layout").attr("id");
			var _searchBox = $(this).attr("id");
			//console.log(">>>>>> _navBox:"+_navBox);
			//console.log(">>>>>> _searchBox(focus):"+_searchBox);

			if(_searchBox == "searchOpen" || _searchBox == "searchClose" || _searchBox == "search"){
			//console.log(">>>>>> focus");
			}else{
				if(_navBox == "undefined" || _navBox == "" || _navBox == null){
					//console.log(">>>>>> 없다");
					gnbClose(_depth1);
				}
			}
		}
	});

	//2차메뉴수 시작
	var depth1_total = Number($("#gnb_layout .depth1_ul > li").index()+1);
	//console.log(">>> depth1_total : "+depth1_total);
	for(var i=1; i<= depth1_total; i++){
		eval("var depth2_total"+i+" = Number($('#gnb_layout .depth1_ul > li.n"+i+" .depth2_ul > li').index()+1);");
		//eval("console.log('>>> depth2_total"+i+" : '+depth2_total"+i+");");
		eval("$('#gnb_layout .depth1_ul > li.n"+i+" .depth2_ul').addClass('n'+depth2_total"+i+");");
	}
	//2차메뉴수 끝

	//모바일 메뉴
	$("#btnAllmenu").on("click",function(e){
		var _gnbDisplay = $("#gnb_layout").css("display");
		var _winWidth = $("body").outerWidth();
		var _gnb_layout = $("#gnb_layout").attr("class").indexOf("mb");
		//console.log(">>>>>> _winWidth:"+_winWidth);
		//console.log(">>>>>> _gnb_layout:"+_gnb_layout);
		if(_gnbDisplay == "none"){
			e.preventDefault();
			$("body").css({"overflow":"hidden","height":$(window).height()});
			//$("body").css({"width":$("body").width(),"position":"absolute"});
			//$("body").animate({left:-285},300);
			$("#gnb_layout").addClass("mb");
			$("#gnb_layout.mb").height($(window).height());
			$("#gnb_layout.mb .depth1_ul").animate({right:0},300);
			$("#gnb_layout.mb .gnbmb_top").animate({right:0},300);
			//$("#gnb_layout.mb .gnbClose").animate({right:15},300);
			$("#gnb_layout.mb .depth3_ul").parent().addClass("more");
			$("#gnb_layout.mb .gnb_bg").removeAttr("style");
			$(window).resize(function(){
				$("#gnb_layout.mb").height($(window).height()-$("#top_layout").height());
			});
		}
	});


	$("#gnb_layout .depth1_ul > li > a").on("click",function(e){
		var _gnb_layout = $("#gnb_layout").attr("class").indexOf("mb");
		$("#gnb_layout.mb .depth1_ul > li").addClass("menu");

		//console.log(">>>>>> _gnb_layout:"+_gnb_layout);
		if(_gnb_layout != "-1"){
			var _depthCondition = $(this).parent().find("ul").attr("class").indexOf("depth2_ul");
			if(_depthCondition != -1){
				e.preventDefault();
			}
			if($(this).parent().attr("class").indexOf("down") != -1){
				depthUp();
			}else{
				depthUp();
				$("#gnb_layout .more").removeClass("on");
				$(this).parents("li").addClass("down");
				$(this).parents("li.down").find(".depth2_ul").css("margin-top",-$(this).parents("li.down").find(".depth2_ul").height());
				$(this).parents("li.down").find(".depth2_ul").animate({"margin-top":0},200,function(){
					//클릭메뉴 최상위 이동 시작
					var depth1Total = $("#gnb_layout .depth1_ul").find(">li").size();
					var thisliNum = $(this).parents("li").index()+1;
					var thisliHeight = $("#gnb_layout.mb .depth1_ul > li").eq(thisliNum).height();
					var _thisScrollTOp = (57*depth1Total)-(57*(depth1Total-thisliNum)+57);
					$("#gnb_layout.mb .gnb_wrap").scrollTop(_thisScrollTOp);
					//클릭메뉴 최상위 이동 끝
				});
			}
		}
	});
	$("#gnb_layout .depth2_ul > li > a").on("click",function(e){
		var _gnb_layout = $("#gnb_layout").attr("class").indexOf("mb");
	//console.log(">>> _gnb_layout : "+_gnb_layout);
		if(_gnb_layout != "-1"){
			if($(this).parent().attr("class").indexOf("on") != -1){
				e.preventDefault();
				$(this).parent().removeClass("on");
			}else if($(this).parent().attr("class").indexOf("more") != -1){
				e.preventDefault();
				$("#gnb_layout .more").removeClass("on");
				$(this).parent().addClass("on");
			}
		}
	});
	$("#gnb_layout .gnbClose, #gnb_layout .gnb_bg").on("click",function(){
		var _gnb_layout = $("#gnb_layout").attr("class").indexOf("mb");
	//console.log(">>> _gnb_layout : "+_gnb_layout);
		if(_gnb_layout != "-1"){
			mbClose();
		}
	});
}

function mbClose(){
	var _gnb_layout = $("#gnb_layout").attr("class").indexOf("mb");
	//console.log(">>> _gnb_layout : "+_gnb_layout);
	if(_gnb_layout != "-1"){
		depthUp();
		$("#gnb_layout.mb .lan, #gnb_layout.mb .depth1_ul, #gnb_layout.mb .gnbmb_top").animate({right:-320},300);
		//$("#gnb_layout.mb .gnbClose").animate({right:-300},300);
		$("body").animate({left:0},300,function(){
			$("body, #gnb_layout, #gnb_layout.mb .lan, #gnb_layout .depth1_ul, #gnb_layout li, #gnb_layout ul, #gnb_layout.mb .gnbClose").removeClass("mb down up menu more").removeAttr("style");
		});
	}
}

function depthUp(){
	$("#gnb_layout .depth1_ul > li.down").addClass("up");
	$("#gnb_layout .depth1_ul > li.up.down").removeClass("down");
	$("#gnb_layout .depth1_ul > li.up").find(".depth2_ul").animate({"margin-top":-$("#gnb_layout .depth1_ul > li.up").find(".depth2_ul").height()},200,function(){
		$("#gnb_layout .depth1_ul > li.up").removeClass("up");
	});
}
function gnbClose(_depth1){
	console.log(">>>>>> gnbClose 시작");
	if(_depth1 < 0){
		var _depth1 = 10000;
	}else{
		var _depth1 = _depth1;
	}
	var _winWidth = $("body").outerWidth();
	//console.log(">>>>>> _winWidth:"+_winWidth);

	var _gnbDisplay = $("#gnb_layout").css("display");
	if(_gnbDisplay != "none"){
		$("#top_layout, #gnb_layout, #gnb_layout .gnb, #gnb_layout ul, #gnb_layout .gnb_bg").removeClass("ov on mb down up menu more");
		$("#gnb_layout li").removeClass("ov");
		$("#gnb_layout .depth1_ul > li").eq(_depth1).addClass("on");
		depthUp();
		//$("#top_layout .gnb_bg").removeAttr("style");
	}
}

function gnbBg(parentName, thisName, bgName, gnbType){
	//console.log(">>> gnbBg 시작");
	$(window).resize(function() {
        //console.log(">>> gnbBg 리사이즈");
		$(bgName).removeAttr("style");
		$(parentName).find(".depth2_ul > li, .title_wrap").removeAttr("style");
    });
	//console.log(">>> gnbType : "+gnbType);
	if(gnbType == "a_type" || gnbType == "b_type" ){
		var arry = [];
		var _parentName = $(parentName),
			_thisName = $(parentName+" .depth1_ul > li"),
			_bgName = _parentName.find($(bgName));
			_totalNum = _thisName.size();
			//console.log("_totalNum:"+_totalNum);

		for(i=0; i<_totalNum; i++){
			//var _child = _thisName.eq(i).find(thisName + " > li"),
				//_height = parseInt(_child.size()*29+80);
			var _child = _thisName.eq(i).find(thisName),
				_height = parseInt(_child.height());
				//console.log(">>>>>>> _height:"+_height);
			arry.push(_height);
		}

		var _maxHeight = Math.max.apply(null, arry);
		_bgName.css("height",_maxHeight);
		//console.log("_maxHeight:"+_maxHeight);
	}else if(gnbType == "at_type"){
		var gnb_width = $("#gnb_layout .depth1_ul").outerWidth();
		var depth1_li = $("#gnb_layout .depth1_ul > li");
		var depth2_num = $("#gnb_layout .depth1_ul > li").size();
		var tit_width = $("#gnb_layout .title_wrap").width();
		var depth2_ul = $("#gnb_layout .depth2_ul");
		var depth2_width = (gnb_width - tit_width) /depth2_num;
		depth2_ul.width(depth2_width);
		for(var i=0; i<depth2_num; i++){
			depth1_li.eq(i).find(".depth2_ul").css({"left":(depth2_width*i)+tit_width});
		}

		var arry = [];
		var _parentName = $(parentName),
			_thisName = $(parentName+" .depth1_ul > li"),
			_bgName = _parentName.find($(bgName));
			_totalNum = _thisName.size();
			//console.log("_totalNum:"+_totalNum);

		for(i=0; i<_totalNum; i++){
			//var _child = _thisName.eq(i).find(thisName + " > li"),
				//_height = parseInt(_child.size()*29+80);
			var _child = _thisName.eq(i).find(thisName),
				_height = parseInt(_child.height());
				//console.log(">>>>>>> _height:"+_height);
			arry.push(_height);
		}

		var _maxHeight = Math.max.apply(null, arry);
		_bgName.css("height",_maxHeight);
		$("#gnb_layout .title_wrap").height($("#gnb_layout .gnb_bg").outerHeight());
		//console.log("_maxHeight:"+_maxHeight);
	}else if(gnbType == "c_type" || gnbType == "ct_type"){
		var _thisHeight = $("#gnb_layout li.ov .depth2_ul").height();
		$("#gnb_layout .gnb_bg, #gnb_layout .ov .title_wrap").height(_thisHeight);
	}else if(gnbType == "d_type" || gnbType == "dt_type"){
		//gnbBg("#top_layout", ".depth2_ul", ".gnb_bg, .depth2_ul", gnbType);
		var viewNum = 4;//한줄에 보여줄 2차 메뉴수
		var arry = [];
		var _parentName = $(parentName),
			_thisName = $(parentName+" #gnb_layout li.ov .depth2_ul > li"),
			_bgName = _parentName.find($(bgName));
			_totalNum = _thisName.size();
			//console.log("_totalNum:"+_totalNum);
		if(viewNum == null || viewNum == "" || viewNum == "0"){
			viewNum = _totalNum;
		}
		$("#gnb_layout .depth1_ul > li > ul").removeAttr("class").addClass("depth2_ul n"+viewNum);
		if( _totalNum < Number(viewNum+1)){
			for(i=0; i<_totalNum; i++){
				var _child = _thisName.eq(i),
					_height = parseInt(_child.height());
				arry.push(_height);
			}

			var _maxHeight = Math.max.apply(null, arry);
			_thisName.css("height",_maxHeight);
		}else{
			var _totalLine = Math.ceil(_totalNum/viewNum);
			//console.log("_totalLine:"+_totalLine);
			for(i=0; i<_totalNum; i++){
				var _child = _thisName.eq(i),
					_height = parseInt(_child.height());
				arry.push(_height);
				//console.log(">>> arry : "+arry);
			}
			for(a=1; a<Number(_totalLine+1); a++){
				for(b=1; b<Number(viewNum+1); b++){
					//var _thisNum = Number((a*b)-1);
					eval("var _thisNum"+a+" = Number((a*b)-1);");
				}
				//var _maxHeight = Math.max.apply(null, arry.slice(_thisNum-_totalLine, _thisNum));
				eval("var arry"+a+" = arry.slice(Number(_thisNum"+a+"-_thisNum1), Number(_thisNum"+a+"+1));");
				//console.log(">>> arryNum"+a+"_0 : "+eval("Number(_thisNum"+a+"-_thisNum1)"));
				//console.log(">>> arryNum"+a+"_1 : "+eval("Number(_thisNum"+a+"+1)"));
				//console.log(">>> arry"+a+" : "+eval("arry"+a));
				eval("var _maxHeight"+a+" = Math.max.apply(null, arry"+a+");");
				//console.log(">>> _maxHeight"+a+" : "+eval("_maxHeight"+a));
			}
			var _sum = 0;
			for(c=1; c<Number(_totalLine+1); c++){
				for(d=1; d<Number(viewNum+1); d++){
					_sum += 1;
					var _num = _sum-1;
					_thisName.eq(_num).css("height",eval("_maxHeight"+c));
					//console.log(">>> _num : "+_num);
				}
			}
		}
		/*
		$("#gnb_layout .depth2_ul > li").removeAttr("style");
		var _thisHeight = $("#gnb_layout li.ov .depth2_ul").height();
		$("#gnb_layout li.ov .depth2_ul > li").height(_thisHeight);
		*/
		var _bgHeight = $("#gnb_layout li.ov .depth2_ul").outerHeight();
		$("#gnb_layout .gnb_bg, #gnb_layout .ov .title_wrap").height(_bgHeight);
		$("#gnb_layout .gnb_bg").height(_bgHeight);
	}
}
//gnb 끝


//슬라이드 시작
function touchSlider(id,num,autoplay,slide,speed){
	var $touchSlider = $(id);
	var $autoplay = autoplay;
	var $slidNum = num;
	var $slide = slide;
	var $speed = speed;
	if($slidNum==null || $slidNum=="auto" || $slidNum==0){
		var boxWidth = $touchSlider.find(".sliderBox").width();
		var conWidth = $touchSlider.find(".sliderBox > ul > li").width();
		$slidNum = Number(boxWidth/conWidth).toFixed();
		//console.log("$slidNum:"+$slidNum);
	}
	if($autoplay==null || $autoplay == true){
		$touchSlider.find(".btn_play").hide();
		$touchSlider.find(".btn_stop").show();
	}else{
		$touchSlider.find(".btn_play").show();
		$touchSlider.find(".btn_stop").hide();
	}
	if ($touchSlider.find('.sliderBox > ul > li').length > 1) {
		$touchSlider.find("> .sliderBox").touchSlider({
			view:$slidNum,
			speed : $speed,
			transition : false,
			autoplay : {
				enable : $autoplay,
				pauseHover : false,
				addHoverTarget : "", // 다른 오버영역 추가 ex) ".someBtn, .someContainer"
				interval : 7500,
			},
			initComplete : function (e) {
				var _this = this;
				var $this = $(this);
				var paging = $touchSlider.find(".paging");

				this._btn_play = null;
				this._btn_stop = null;

				paging.html("");
				$this.find(" > ul > li").each(function (i, el) {
					var num = (i+1) / _this._view;
					if((i+1) % _this._view == 0) {
						paging.append('<button type="button" class="btn_page">page' + num + '</button>');
					}
				});
				paging.find(".btn_page").bind("click", function (e) {
					_this.go_page($(this).index());
					$touchSlider.find(".btn_play").show();
					$touchSlider.find(".btn_stop").hide();
					_this.autoStop();
				});

				$touchSlider.find(".btn_play").bind("click", function() {
					$touchSlider.find(".btn_play").hide();
					$touchSlider.find(".btn_stop").show();
					_this.autoPlay();
				});
				$touchSlider.find(".btn_stop").bind("click", function() {
					$touchSlider.find(".btn_play").show();
					$touchSlider.find(".btn_stop").hide();
					_this.autoStop();
				});
				$this.find(" > ul > li a").on("focus",function(e){
					e.preventDefault();
					if(Number($slidNum) > 1){
						var _thisNumb = Math.floor(Number($(this).parents("li").index()/$slidNum));
					}else{
						var _thisNumb = $(this).parents("li").index();
					}
					$touchSlider.find(".btn_play").show();
					$touchSlider.find(".btn_stop").hide();
					_this.autoStop();
					_this.go_page(_thisNumb);

					$touchSlider.find("> .sliderBox > ul").css({"position":"fixed"});
					setTimeout(function(){
						$touchSlider.find("> .sliderBox > ul").css({"position":""});
					},50);

				});
				$this.find(" > ul > li a").on("focusout",function(){
					$touchSlider.find(".btn_play").hide();
					$touchSlider.find(".btn_stop").show();
					_this.autoPlay();
				});
			},
			counter : function (e) {
				$touchSlider.find(".paging .btn_page").removeClass("on").eq(e.current-1).addClass("on");
				$touchSlider.find(".pageCount").html("<span class='num'>"+e.current + "</span>/<span class='totalNum'>" + e.total+"</sapn>");
				if($slide==false){
					$touchSlider.find(".sliderBox > ul > li").stop();
					$touchSlider.find(".sliderBox > ul > li").css({"opacity":"0","z-index":"1","left":"0"});
					$touchSlider.find(".sliderBox > ul > li.on").removeClass("on").css({"z-index":"2","opacity":"1","left":"0"});
					$touchSlider.find(".sliderBox > ul > li").eq(e.current-1).addClass("on").css({"z-index":"3","opacity":"0","left":"0"}).animate({"opacity":"1"},1000);
				}
			},
			btn_prev : $touchSlider.find(".btn_prev"),
			btn_next : $touchSlider.find(".btn_next")
		});
	}
}


function touchSlider_fade(id,num,autoplay,slide,speed){
	var $touchSlider = $(id);
	var $autoplay = autoplay;
	var $slidNum = num;
	var $slide = slide;
	var $speed = speed;
	if($slidNum==null || $slidNum=="auto" || $slidNum==0){
		var boxWidth = $touchSlider.find(".sliderBox").width();
		var conWidth = $touchSlider.find(".sliderBox > ul > li").width();
		$slidNum = Number(boxWidth/conWidth).toFixed();
		//console.log("$slidNum:"+$slidNum);
	}
	if($autoplay==null || $autoplay == true){
		$touchSlider.find(".btn_play").hide();
		$touchSlider.find(".btn_stop").show();
	}else{
		$touchSlider.find(".btn_play").show();
		$touchSlider.find(".btn_stop").hide();
	}
	if ($touchSlider.find('.sliderBox > ul > li').length > 1) {
		$touchSlider.find("> .sliderBox").touchSlider({
			view:$slidNum,
			speed : $speed,
			transition : false,
			autoplay : {
				enable : $autoplay,
				pauseHover : false,
				addHoverTarget : "", // 다른 오버영역 추가 ex) ".someBtn, .someContainer"
				interval : 7500,
			},
			initComplete : function (e) {
				var _this = this;
				var $this = $(this);
				var paging = $touchSlider.find(".paging");

				this._btn_play = null;
				this._btn_stop = null;

				paging.html("");
				$this.find(" > ul > li").each(function (i, el) {
					var num = (i+1) / _this._view;
					if((i+1) % _this._view == 0) {
						paging.append('<button type="button" class="btn_page">page' + num + '</button>');
					}
				});
				paging.find(".btn_page").bind("click", function (e) {
					_this.go_page($(this).index());
					$touchSlider.find(".btn_play").show();
					$touchSlider.find(".btn_stop").hide();
					_this.autoStop();
				});

				$touchSlider.find(".btn_play").bind("click", function() {
					$touchSlider.find(".btn_play").hide();
					$touchSlider.find(".btn_stop").show();
					_this.autoPlay();
				});
				$touchSlider.find(".btn_stop").bind("click", function() {
					$touchSlider.find(".btn_play").show();
					$touchSlider.find(".btn_stop").hide();
					_this.autoStop();
				});
				$this.find(" > ul > li a").on("focus",function(e){
					e.preventDefault();
					if(Number($slidNum) > 1){
						var _thisNumb = Math.floor(Number($(this).parents("li").index()/$slidNum));
					}else{
						var _thisNumb = $(this).parents("li").index();
					}
					$touchSlider.find(".btn_play").show();
					$touchSlider.find(".btn_stop").hide();
					_this.autoStop();
					_this.go_page(_thisNumb);

					$touchSlider.find("> .sliderBox > ul").css({"position":"fixed"});
					setTimeout(function(){
						$touchSlider.find("> .sliderBox > ul").css({"position":""});
					},50);

				});
				$this.find(" > ul > li a").on("focusout",function(){
					$touchSlider.find(".btn_play").hide();
					$touchSlider.find(".btn_stop").show();
					_this.autoPlay();
				});
			},
			counter : function (e) {
				$touchSlider.find(".paging .btn_page").removeClass("on").eq(e.current-1).addClass("on");
				$touchSlider.find(".pageCount").html("<span class='num'>"+e.current + "</span>/<span class='totalNum'>" + e.total+"</sapn>");
				if($slide==false){
					$touchSlider.find(".sliderBox > ul > li").stop();
					$touchSlider.find(".sliderBox > ul > li").css({"opacity":"0","z-index":"1","left":"0"});
					$touchSlider.find(".sliderBox > ul > li.on").removeClass("on").css({"z-index":"2","opacity":"1","left":"0"});
					$touchSlider.find(".sliderBox > ul > li").eq(e.current-1).addClass("on").css({"z-index":"3","opacity":"0","left":"0"}).animate({"opacity":"1"},1000);
				}
			},
			btn_prev : $touchSlider.find(".btn_prev"),
			btn_next : $touchSlider.find(".btn_next")
		});
	}
}
//슬라이드 끝
