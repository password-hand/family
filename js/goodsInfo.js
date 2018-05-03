/*功能：商品信息（材质、成色、价格）js*/
var $div = $('.goodsInfo>div');
$div.hover(function () {
    $(this).children('ul').css('display','block');
    $(this).children('a').css('border-color','#d92017');
},function () {
    $(this).children('ul').css('display','none');
    $(this).children('a').css('border-color','transparent');
});

/*商品图片跳转*/
$(function () {
    $('.goodsList>a').click(function () {
        $('.show_box').load('pages/productList/detailpage.html');
    });
});
