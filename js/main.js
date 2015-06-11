function overDiv() {
	select = document.getElementById('select2');
	select.style.display = "block";
}

function outDiv() {
	select.style.display = "none";
}

function cancel() {
	var cancel = document.getElementById('prompt');
	cancel.style.display = "none";
}

function register() {
	var register = document.getElementById('register');
	var register1 = document.getElementById('register1');
		if (register.style.display == 'block') {
		register.style.display     = 'none';
		register1.style.display    = 'none';
	} else {
		register.style.display  = 'block';
		register1.style.display = 'none';
	}
}

function register1() {
	var register  = document.getElementById('register');
	var register1 = document.getElementById('register1');
	if (register1.style.display == 'block') {
		register1.style.display = 'none';
		register.style.display  = 'none';
	} else {
		register1.style.display = 'block';
		register.style.display  = 'none';
	}
}

function show() {
	var bgi = document.getElementById('bgi');
	var none = document.getElementById('none');
	if (none.style.display == "table-row") {
		none.style.display   = "none";
		bgi.style.background = "url(./images/arrow_big_down.png) no-repeat center";
	} else {
		none.style.display   = "table-row";
		bgi.style.background = "url(./images/arrow_big_up.png) no-repeat center";
	}
}

function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}
// 调用addLoadEvent();来使页面加载完成！
var tanchuceng = function() {
	var pageHight = window.innerHeight;
	if (typeof pageHight != "number") {
		if (document.compatMode == "CSS1Compat") {
			pageHight = document.documentElement.clientWidth;
		} else {
			pageHight = document.body.clientWidth;
		}
	}
	var word       = document.getElementById('word');
	var word_a     = word.getElementsByTagName('a');
	var mask       = document.getElementById('mask');
	var close      = mask.getElementsByTagName('a');
	var word_block = document.getElementById('word_block');
	word_a.item(0).onclick = function() {
		mask.style.height                       = pageHight + "px";
		mask.style.display                      = "block";
		word_block.style.display                = "none";
		// document.documentElement.style.overflow = "hidden";
	}
	close.item(0).onclick = function() {
			mask.style.display = "none";
			word_block.style.removeProperty("display");
		}
		// 背单词弹窗
}