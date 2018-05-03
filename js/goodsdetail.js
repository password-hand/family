/*
* 功能：商品详情页面js
* */

/*图片部分*/

//获取图片部分元素
var $showImg = $('div.goodsShowImg>img'),
    $rightLi = $('.imgList>li');

//大图地址链接
var imgs = [
    'images/example_6.jpg',
    'images/example_7.jpg',
    'images/example_8.jpg',
    'images/example_9.jpg',
    'images/example_10.jpg',
    'images/example_6.jpg'
];
$rightLi.on('click',function () {
    //添加选中效果
    $(this).addClass('active').siblings().removeClass('active');
    //获取当前点击的li的下标
    var idx = $(this).index();
    $showImg.css('opacity','0');
    $showImg.animate({
        'opacity':1
    },800);
    //将点中的图片设置为左边图片框的背景
    $showImg.attr('src',imgs[idx]);

});
$(function () {
    $rightLi.first().trigger('click');
});

/*加减输入框*/
var $ipt = $('div.countSet>input[type="text"]'),
    $plus = $('div.plus'),
    $minus = $('div.minus');
$plus.on('click',function () {
    if(Number($ipt.val())<3){
        $ipt.val(Number($ipt.val())+1);
        $minus.removeClass('disabled');
        if($ipt.val()>=3){
            $plus.addClass('disabled');
        }
    }
});
$minus.on('click',function () {
    if(Number($ipt.val())>0){
        $ipt.val(Number($ipt.val())-1);
        $plus.removeClass('disabled');
        if(Number($ipt.val())<=0){
            $minus.addClass('disabled');
        }
    }
});

