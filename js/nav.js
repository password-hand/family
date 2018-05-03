/*
* 功能：上方导航js
* 创建人：phs
* 创建时间：2017/12/25
* */
/*导航条的hover效果*/
var $li = $('.navBar ul>li');
$li.hover(function () {
    $(this).children('a').css({
        'color':'#d92017',
        'border-color':'#d92017'
    });
    $(this).css('border-color','#d1d0d0');
    $(this).children('div.hiddenList').css('display','block')
},function () {
    $(this).children('a').css({
        'color':'#555',
        'border-color':'transparent'
    });
    $(this).css('border-color','transparent');
    $(this).children('div.hiddenList').css('display','none')
});

/*一级导航点击加载内容*/
$('#sofa').click(function () {
    $('.mainbody').css('display','none');
    $('.show_box').css('display','block')
    $('.show_box').load('pages/productList/sofa.html');
});
$('#table').click(function () {
    $('.mainbody').css('display','none');
    $('.show_box').css('display','block')
    $('.show_box').load('pages/productList/table.html');
});
$('#bed').click(function () {
    $('.mainbody').css('display','none');
    $('.show_box').css('display','block')
    $('.show_box').load('pages/productList/bed.html');
});
$('#storage').click(function () {
    $('.mainbody').css('display','none');
    $('.show_box').css('display','block')
    $('.show_box').load('pages/productList/storage.html');
});
$('#more').click(function () {
    $('.mainbody').css('display','none');
    $('.show_box').css('display','block')
    $('.show_box').load('pages/productList/more.html');
});