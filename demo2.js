//html方法类似innerHTML
//获取
console.log($("body").html());
//设置
$("body").html("<p>233<a>666</a></p>")

//text方法，类似innerText
//获取
console.log($("body").text());
//设置
$("body").text("<p>666</p>");//里面是文本

//append方法,向子级的最后添加文本或标签
$("body").append();
$("body").append("<a>666</a>");

//appendTo方法，append方法的被动形式
$("<b>666</b>").appendTo("body");

//prepend  向子级最前面添加标签和文本
$("body").prepend("<a>666</a>");

//prependTo
$("<a>666</a>").prependTo("body");

//after,为被选中的每一个标签后添加标签或文本
$("a").after("after");

//before,为被选中的每一个标签前添加标签或文本
$("a").before("after");

//如果第二个参数传入整个JQ选择器，则会移动剪切这个标签，粘贴到每一个目标标签中
$("a").append($("b"));

//remove方法，删除标签内部以及自身
$("a").remove();

//empty方法，清空标签内部的所有标签
$("body").empty();

//包装
$("p").wrap($("a"));