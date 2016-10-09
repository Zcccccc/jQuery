$("body").prepend("<div class = \"test\"></div>")

//fadeOut渐渐消失  接收参数为动画事件（单位：毫秒），或者fast，alow
$(".test").fadeOut(4000);

//fadeIn渐渐出现  接收参数为动画事件（单位：毫秒），或者fast，alow
$(".test").fadeIn(4000);

//slideUp向上收起  接收参数为动画事件（单位：毫秒），或者fast，alow
$(".test").slideUp(4000);

//slideDown向下延展  接收参数为动画事件（单位：毫秒），或者fast，alow
$(".test").slideDown(4000);

//delay动画延迟  参数接收延迟事件（单位：毫秒），只能放在动画链子中
$(".test").fadeOut().delay(1000).fadeIn;

//animate 自定义动画(变换的属性只能是可线性变化的属性)从第二个参数接收动画时间
$(".test").after("<div class =\"demo\"></div>");
$(".demo").css("background-color", "green").animate({
	width : "400px",
	height : "200px",
	backgroundColor:"green"
},2000).fadeOut(400)
