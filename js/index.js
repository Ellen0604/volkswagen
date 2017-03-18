// ---------------------------预加载--------------------------

	var imgs = $("#wrap img");
	var $mask = $("#mask");
	var $loading = $("#mask img");

	var loadingH = 0;
	// 用来表示已经加载了多少张图片
	var num = 0;

	for (var i = 0; i < imgs.length; i++) {
		// 创建图片对象
		var img = new Image();
		// 赋予地址
		img.src = imgs[i].src;
		// 当图片加载完后触发方法
		img.onload = function () {
			//计算加载了多少张
			num++;
			//计算百分比
			loadingH = parseInt((num / imgs.length) * 58);
			//改变loading的高
			$loading.height(loadingH);
			// alert(loadingH);
			// console.log(loadingH);
			
			//判断是否已经加载所有的图片
			if(num == imgs.length){
				$mask.hide();
			}
		}		
	}

	// ---------------------------导航交互----------------------

	// 导航页交互

	var $textLis = $(".text li");
	var $moveLi = $("#moveLi");
	var $bg_mask = $(".bg_mask");
	var $nav = $("nav");

	var index = 0;

	// 导航页移动透明效果
	$textLis.hover(function(){
		index = $(this).index();
		$bg_mask.css("left",(-100+index*25)+"%");
		$moveLi.css("background-color","transparent");
	},function(){});

	var $ctnWrap = $(".ctnWrap");
	var $ulNav = $("#ulNav");
	var $ulNavDiv = $("#ulNav ul li div")

	// 导航页点击进入分页效果
	$textLis.on("click",function(){
		$nav.hide();
		$ulNav.slideDown("slow");
		$ulNavDiv.eq($(this).index()).css("visibility","visible");
		$ctnWrap.eq($(this).index()).fadeTo(100,1);
		$ulNavAs.eq($(this).index()).css("color","white");
	})
	
	// 公有导航交互

	var $ulNavLis = $("#ulNav li");
	var $ulNavAs = $("#ulNav li a");

	// 切换分页效果
	$ulNavLis.on("click",function(){
		$ulNavAs.css("color","#3E3A39");
		$ulNavAs.eq($(this).index()).css("color","white");
		$ctnWrap.hide();
		$ctnWrap.eq($(this).index()).fadeTo(100,1);
		$ulNavDiv.css("visibility","hidden");
		$ulNavDiv.eq($(this).index()).css("visibility","visible");
	});


	// ---------------------------WORK----------------------

	// 图片切换
	var creativeImgArr= [
		["r1-1.jpg","r1-2.jpg"],
		["r2-1.jpg"],
		["r3-1.jpg","r3-2.jpg"],
		["r4-1.jpg","r4-2.jpg","r4-3.jpg","r4-4.jpg"],
		["r5-1.jpg","r5-2.jpg","r5-3.jpg","r5-4.jpg","r5-5.jpg"],
		["r6-1.jpg"]
	];
	var conferenceImgArr = [
		// dunhill
		["dun1.jpg","dun2.jpg","dun3.jpg","dun4.jpg","dun5.jpg"],
		// ferrari
		["fer1.jpg","fer2.jpg","fer3.jpg","fer4.jpg","fer5.jpg","fer6.jpg"],
		// TAG Heuer
		["TAG1-1.jpg","TAG1-2.jpg","TAG1-3.jpg","TAG1-4.jpg","TAG1-5.jpg","TAG1-6.jpg"]
	];
	var partyImgArr = [];
	var roadshowImgArr = [
		// MAC IA
		["MAC_IA1.jpg","MAC_IA2.jpg","MAC_IA3.jpg","MAC_IA4.jpg","MAC_IA5.jpg","MAC_IA6.jpg"],
		// Tuborg GreenFest
		["Tub1.jpg","Tub2.jpg","Tub3.jpg","Tub4.jpg","Tub5.jpg","Tub6.jpg","Tub7.jpg"],
		// UGG Iapm
		["ugg1.jpg","ugg2.jpg","ugg3.jpg","ugg4.jpg","ugg5.jpg","ugg6.jpg","ugg7.jpg"]
	];
	var exhibitionImgArr = [
		// LIXIL
		["LIXIL1.jpg","LIXIL2.jpg","LIXIL3.jpg","LIXIL4.jpg","LIXIL5.jpg","LIXIL6.jpg"],
		// NCAF
		["NCAF1.jpg","NCAF2.jpg","NCAF3.jpg","NCAF4.jpg","NCAF5.jpg","NCAF6.jpg"],
		// Zegna
		["Zegna1.jpg","Zegna2.jpg","Zegna3.jpg","Zegna4.jpg","Zegna5.jpg","Zegna6.jpg","Zegna7.jpg","Zegna8.jpg"]
	];
	var dinnerImgArr = [
		// Farrari
		["Farrari1.jpg","Farrari2.jpg","Farrari3.jpg","Farrari4.jpg","Farrari5.jpg","Farrari6.jpg"],
		// WBB
		["WBB1.jpg","WBB2.jpg","WBB3.jpg","WBB4.jpg","WBB5.jpg","WBB6.jpg"]
	];

	// 保存不同图组
	var oArr = [creativeImgArr,conferenceImgArr,partyImgArr,roadshowImgArr,exhibitionImgArr,dinnerImgArr];
	// 保存不同路径文件夹名
	var srcArr = ["creative/","conference/","party/","roadshow/","exhibition/","dinner/"];

	// 封装左侧图片切换事件
	function LeftImgsSwitchFn(){
		var $boxLeftImgs = $(".boxLeftImg img");
		var $boxLeftBtns = $(".boxLeftActive div");

		$boxLeftBtns.on("click",function(){
			$boxLeftBtns.css("background-color","gray");
			$(this).css("background-color","#00FF01");
			$boxLeftImgs.hide();
			$boxLeftImgs.eq($(this).index()).fadeIn();
		});
	}
	// 初始进入页面时调用左侧图片切换事件
	// 用于初始图组切换
	LeftImgsSwitchFn();

	// CREATIVE右侧图片点击切换左侧图片事件
	var $boxRightlis = $(".smallImgUl li");
	var $LeftImgBox = $(".boxLeftImg");
	var $LeftBtnBox =  $(".boxLeftActive");
	// // 点击右侧li
	$boxRightlis.on("click",function(){
		// 清空左侧图片和按钮
		$LeftImgBox.html("");
		$LeftBtnBox.html("");

		// 遍历创建对应图组和按钮
		for (var i = 0; i < oArr[0][$(this).index()].length; i++) {

			var $img = $("<img src=img/" + srcArr[0] + oArr[0][$(this).index()][i] + ">");
			var $div = $("<div></div>");

			$LeftImgBox.append($img);
			$LeftBtnBox.append($div);
		}
		LeftImgsSwitchFn();
	});

	// 点击大标题或者小标题的交互事件

	var $workNavLis = $("#workNav li");
	var $workNavSpns = $("#workNav li span");
	var $workNavDivs = $("#workNav li div");
	var $workNavFirstA = $("#workNav .firstA");
	var $workNavA = $("#workNav li a");
	var $boxRightUl = $(".boxright>Ul");
	var $firstUl = $(".firstUl");

	// 点击每一行标题的交互事件
	$workNavLis.on("click",function(){

		// 蓝色文字变色
		$workNavSpns.css("color","#051596");
		$workNavSpns.eq($(this).index()).css("color","white");

		// 相应的灰色文字显示
		$workNavDivs.hide();
		$workNavDivs.eq($(this).index()).css("display","block");

		// 第一个灰色a变白色
		$workNavA.css("color","#3E3A39");
		$workNavFirstA.eq($(this).index()).css("color","white");

		// 对应的每一行第一个悬浮图片显示
		$boxRightUl.hide();
		$firstUl.eq($(this).index()).fadeTo(100,1);

		if ($(this).index() == 2) {
			$LeftImgBox.html("<video src='video/tcar.mp4' loop='1' controls></video>");
			$LeftBtnBox.html("");
			return false;
		}

		// 清空左侧图片和按钮
		$LeftImgBox.html("");
		$LeftBtnBox.html("");
		// 遍历向左侧图片和按钮创建对应图组和按钮
		// 显示对应的第一个图组

		for (var i = 0; i < oArr[$(this).index()][0].length; i++) {

			var $img = $("<img src=img/" + srcArr[$(this).index()] + oArr[$(this).index()][0][i] + ">");
			var $div = $("<div></div>");

			$LeftImgBox.append($img);
			$LeftBtnBox.append($div);
		}
		// 调用左侧图片切换事件
		LeftImgsSwitchFn();
	});

	// 点击每一行中小标题的交互
	$workNavA.on("click",function(){
		// 对应的父级显示
		$workNavDivs.hide();
		$(this).parent().css("display","block");

		// 对应的蓝字变白
		$workNavSpns.css("color","#051596");
		$workNavSpns.eq($(this).parent().index("#workNav li div")).css("color","white");

		// 对应的a标签变白
		$workNavA.css("color","#3E3A39");
		$(this).css("color","white");

		// 对应的悬浮图片显示
		$boxRightUl.hide();
		$boxRightUl.eq($(this).index("#workNav li a")).fadeTo(100,1);

		if ($(this).index("#workNav li a") == 4 || $(this).index("#workNav li a") ==5) {
			$LeftImgBox.html("<video src='video/tcar.mp4' loop='1' controls></video>");
			$LeftBtnBox.html("");
			return false;
		}

		// 清空左侧图片和按钮
		$LeftImgBox.html("");
		$LeftBtnBox.html("");

		// 遍历向左侧图片和按钮创建对应图组和按钮
		// 显示对应的图组
		for (var i = 0; i < oArr[$(this).parent().index("#workNav li div")][$(this).index()].length; i++) {

			var $img = $("<img src=img/" + srcArr[$(this).parent().index("#workNav li div")] + oArr[$(this).parent().index("#workNav li div")][$(this).index()][i] + ">");
			var $div = $("<div></div>");

			$LeftImgBox.append($img);
			$LeftBtnBox.append($div);
		}
		// 调用左侧图片切换事件
		LeftImgsSwitchFn();

		// 阻止冒泡
		event.stopPropagation();
		event.cancelBubble=true;
	})


	// ---------------------------TAME-----------------------------

	// 滚动条事件
	var wrap = $("#JUCon").get(0);
	var content = $("#JUConT").get(0);
	var scroll = $("#scroll").get(0);
	var range = $("#scrollBar").get(0);

	//给滑块添加鼠标事件
	range.onmousedown=function(e){
		var e = e || window.event;
		//得到鼠标的坐标
		var mouseY = e.clientY;
		// 得到wrap的offsetTop
		var wrapTop = wrap.offsetTop;
		var rangeTop = range.offsetTop;
		// 计算差值
		var differ = mouseY - wrapTop - rangeTop;

		//滑动
		document.onmousemove = function(e){
			var e = e || window.event;
			// 得到滑动时的鼠标坐标
			var moveY = e.clientY;
			var top = moveY-wrapTop-differ;

			//判断
			if(top<=0){
				top = 0;
			}else if (top>=scroll.offsetHeight-range.offsetHeight) {
				top = scroll.offsetHeight-range.offsetHeight;
			}
			rangeFn(top);

			//阻止默认事件
			return false;
			window.event.returnValue = false;
			event.preventDefault();
			
		}
	}

	//松开鼠标
	document.onmouseup = function(e){
		document.onmousemove = null;
	}

	// 封装函数
	function rangeFn(top){
		//判断
		if(top<=0){
			top = 0;
		}else if (top>=scroll.offsetHeight-range.offsetHeight) {
			top = scroll.offsetHeight-range.offsetHeight;
		}
		//改变滑块位置
		range.style.top = top + "px";

		// ---------------------改变文字位置
		// 1. 计算比例
		var scale = top/(scroll.offsetHeight-range.offsetHeight);
		// 2. 计算改变文字位置
		var h = (content.offsetHeight-wrap.offsetHeight) * scale;
		// 3.改变文字的位置
		content.style.top = -h + "px";
	}

	// 滚轮事件

	//参数说明：element元素,upFn滚轮向上的函数,downFn滚轮向下的函数
	function mouseWheelFn(element, upFn, downFn){
		element.onmousewheel = fn;
		//判断浏览器是否支持addEventListener方法
		if(window.addEventListener){
			element.addEventListener("DOMMouseScroll", fn, false);
		}
		function fn(e){
			var e = e || window.event;
			// 判断滚轮方向(向上)
			if(e.wheelDelta > 0 || e.detail < 0){
				upFn();
			}
			if(e.wheelDelta < 0 || e.detail > 0){
				downFn();
			}
			// 阻止冒泡
			e.cancelBubble = true;
			e.stopPropagation();
		}
	}

	mouseWheelFn(wrap,
		function(){
			var top = range.offsetTop-10;
			rangeFn(top);
		},
		function(){
			var top = range.offsetTop+10;
			rangeFn(top);
		});