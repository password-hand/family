/**
 * Created by zxr on 2017/12/23.
 */
/*********************/
/*轮播图*/
/*********************/
/*圆点添加点击事件*/
var thisLi=1;
$('.list li').on('click',function(){
    thisLi = $(this).index();
    timer();
})
/*自动播放*/
function timer(){
    $('.list li').eq(thisLi).addClass('active').siblings().removeClass('active');
    $('.carouselBox img').eq(thisLi).addClass('show').siblings().removeClass('show');
    thisLi++;
    if(thisLi>3){
        thisLi=0;
    }
}
/*设置定时器*/
var startTimer = setInterval(timer,6000);
//鼠标悬停大图的时候，清除定时器
$('.carouselBox').on('mouseenter',function(){
    clearInterval(startTimer);
});
//鼠标离开大图的时候，继续定时器
$('.carouselBox').on('mouseleave',function(){
    startTimer = setInterval(timer,6000);
});

//logo点击事件
$('.logo').on('click',function(){
    $('.mainbody').css('display','block')
    $('.show_box').css('display','none')
})


/*********************/
/*根据导航载入ajax数据*/
/*********************/
//购物车信息载入

$('.treas_brief-goto a').on('click',function () {
    if($('.pesnName').text()==""){
       alert("请登录！")
    }else{
    $('.mainbody').css('display','none')
        $('.show_box') .css('display','block')
        $.get('pages/user/shopping.html',function (data) {
            $('.show_box').html(data)
        })
  }
})




//个人信息载入
$('.pesnName').on('click',function () {
    $('.mainbody').css('display','none')
    $('.show_box') .css('display','block')
    $.get('pages/user/personInfo.html',function (data) {
        $('.show_box').html(data)
    })
})


//登录，注册信息载入
$('.login').on('click',function () {
    $('.mainbody').css('display','none')
    $('.show_box') .css('display','block')
    $.get('pages/land/register.html',function (data) {
        $('.show_box').html(data);
});
})



/*********************/
/*头部信息查看及设置*/
/*********************/
/*购物车*/
$('.shopping').on('click',function () {
    if($('.treas_brief').css('display')=='none'){
        $('.treas_brief').toggle(200);
        $('.shopping').addClass('actived');
    }else {
        $('.treas_brief').toggle(200);
        setTimeout(function () {
            $('.shopping').removeClass('actived');
        },200);
    };
});
$('.treas_brief-goto').on('click',function () {
    $('.treas_brief').toggle(200);
     $('.shopping').removeClass('actived');
})
/*地区选择*/
$('.seletc_custom >i').on('click',function () {
    $('.selectDl').slideDown(200);
});
$('.seletc_custom').mouseleave(function () {
    $('.selectDl').slideUp(200);
});
$('.selectDl > dt').mouseenter(function () {
    $(this).css('background','#82c353');
    $(this).css('color','#ffffff');
});
$('.selectDl > dt').mouseleave(function () {
    $(this).css('background','#fff');
    $(this).css('color','#666');
});
$('.selectDl > dt').on('click',function () {
    var thistext = $(this).text();
    $('.seletc_custom > i').text(thistext);
    $('.selectDl').slideUp(200);
});
