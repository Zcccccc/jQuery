//同querySelectorAll
console.log($(".l"));

//选择方法


//eq方法  索引
console.log($("body").eq(0));//js的封装
console.log($(".l").eq(0)[1]);//dom对象
console.log($(".l:eq(3)"));
console.log($("ul .l:eq(3)"));


//find方法，查找子集  find里没有参数， 就不会选中
console.log($("body").find("ul li"));//find方法会返回一个jquery的方法


/*如果没有筛选条件，则返回所有查找到的结果*/

//children 查找直接子级  如果里面没有参数，会选中所有自己
console.log($("html").children("ul"));

//siblings方法 查找兄弟标签（除了自己以外的所有同级标签）可以传入参数（）
console.log($("html").siblings());

//prev方法，查找前一个兄弟标签
console.log($(".b").prev());

//prevAll方法，查找前所有兄弟标签
console.log($(".b").prevAll());

//next方法，查找后一个兄弟标签
console.log($(".b").next());

//next方法，查找后所有兄弟标签
console.log($(".b").nextAll());

//parent方法，查找当前标签的父级标签
console.log($(".b").parent());
