// console.log($("body"));
// //同querySelectorAll
// console.log($("li:not(:last-child + li)"));

// //eq方法，索引
// console.log($(".l").eq(3));
// console.log($(".l:eq(3):eq(0):eq(0)"));

// //find,查找子集
// console.log($("body").find("ul"));

// //children,查找直接子集
// console.log($("ul").children("li"));

// //sibling,查找兄弟
// console.log($(".c").siblings(".d"));

// //prev,查找前一个兄弟标签
// console.log($(".b").prev())

// //prev,查找前所有兄弟标签
// console.log($(".c").prevAll())

// //next,nextAll,parent


// $.extend({
// 	toString : function(tel){
// 		tel = tel + "";
// 		var len = tel.length;
// 		return tel.substring(0, 3) + function(){
// 			var i = 0,
// 				temp = "";
// 				while(i < len - 6){
// 					temp += "*";
// 					i++
// 				}
// 			return temp;
// 		}() + tel.substring(len - 3);
// 	},
// 	changeColor : function(passwords){
// 		passwords = passwords + "";
// 		var len = passwords.length,
// 			i = 0,
// 			num = 0;
// 		for(;i < len;i++){
// 			var a = passwords.charCodeAt(i);
// 			// var a = 20000;
// 			console.log(a);
// 			if( (96 < a && a< 123) || (64 < a && a < 91) || (47 < a && a < 58)){
// 				num++;
// 				console.log("----------");
// 			}
// 		}
// 		console.log(num);
// 		if(num == len){
// 			$("input").addClass("green");
// 			return 1;
// 		}
// 		else{
// 			$("input").addClass("red");
// 			return 2;
// 		}

// 	}
// })
// // console.log($.toString(12345678901));
// // console.log($.changeColor("12345a%%%sdsaf678901"));
// // $.fn.extend({
// // 	getHTML : function(){
// // 		return this.html();
// // 	},
// // 	setHTML : function(html){
// // 		return this.html(html);
// // 	}
// // });
// // console.log($("body").setHTML("<p>hhhhhahahah</p>"));


// $.fn.extend({
// 	setInterval : function(){
// 		var _this = this,
// 			i = 60;
// 		_this[0].onclick = function(){
// 			_this.attr("disabled", "ture");
// 			var timer =	setInterval(function(){
// 				_this.attr("value", "" + --i + "s后可重新获取" );
// 				if(i == 0){
// 					clearInterval(timer);
// 					_this.attr("value", "点击重新获取验证码");
// 					_this.removeAttr("disabled");
// 					i = 60;
// 				}
// 			}, 1000);
// 		}	
// 	}
// })
// $("input").setInterval();

$(".form4 input[type=\"button\"]").click(function(){
	console.log($(".form4").serializeArray());
	$.ajax({
		url : "http://www.ikindness.cn/api/test/get?" + $(".form4").serialize(),
		seccess : function(data){
			console.log($(".form4").serialize());
		}
	})
})