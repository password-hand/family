/*********************/
/*动态生成个人信息内容*/
/*********************/
$(function () {
    //调用class选择显示的内容
    loadTextFile('.personInfo');
    //调用内容生成函数
    personInfo();
    //调用内容生成的方法
    personInfoMethod();
})
/*个人信息导航切换*/
$('.infoBox ul li').on('click',function () {
    $(this).addClass('check').siblings().removeClass('check')
    var infoTxt=$(this).text();
    var messageLeng=$('.systemMegess .accountTxt_com ').length;
    $('.systemMes span').text(messageLeng);
   // console.log(messageLeng)
    switch(infoTxt) {
        case "个人信息":
            //调用class选择显示的内容
            loadTextFile('.personInfo');
            //调用内容生成函数
            personInfo();
            //调用内容生成的方法
            personInfoMethod();
            break;
        case "我的订单":
            loadTextFile('.myOder');
            order();
            // setTimeout(orderMethod,10)
            break;
        case "我的出售":
            loadTextFile('.mySell');
            mySell();
            //setTimeout(mySellMethod,10)
            break;
        case "个人账户":
            loadTextFile('.personAccount');
            break;
        case "系统消息0":
            loadTextFile('.systemMegessBox');
            systemMessage();
           // setTimeout(systemMessageMethod,10)
            break;
        case "系统消息"+messageLeng:
            loadTextFile('.systemMegessBox');
            systemMessage();
           // setTimeout(systemMessageMethod,10)
            break;
    }
})
//根据不同的class选择显示的内容
function loadTextFile(ele) {
    $(ele).addClass('showing').removeClass('dispear').siblings().removeClass('showing').addClass('dispear')
}
/*********************/
/*动态生成个人信息*/
/*********************/

//动态生成个人信息内容
function personInfo() {
    $('.personInfo').html(`  <div class="contact">
            <label class="commonTit">联系人</label>
            <div>
                <input type="text" placeholder="姓名">
                <input type="text" placeholder="电话号码">
            </div>
        </div>
        <!--性别-->
        <div class="gender">
            <p class="commonTit">性别</p>
            <i class="bg1"></i><span class="common" style="margin-right: 46px">男</span>
            <i class="bg2"></i><span class="common">女</span>
        </div>
        <!--生日-->
        <div class="birthday">
            <p class="commonTit">生日</p>
            <div class="clearfix birthdayBox">
                <div class="year chooseCommon fl"><span>2015</span><i></i>
                    <ul class="seletBox">
                        <li>1910</li>
                        <li>1911</li>
                        <li>1912</li>
                        <li>1913</li>
                        <li>1914</li>
                        <li>1915</li>
                        <li>...</li>
                        <li>2015</li>
                    </ul></div>
                <div class="mouth chooseCommon fl"><span>01</span><i></i><ul class="selBox seletCommon">
                    <li>01</li>
                    <li>02</li>
                    <li>03</li>
                    <li>04</li>
                    <li>05</li>
                    <li>06</li>
                    <li>07</li>
                    <li>08</li>
                    <li>09</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                </ul></div>
                <div class="mouth chooseCommon fl"><span>01</span><i></i><ul class="selBox seletCommon">
                    <li>01</li>
                    <li>02</li>
                    <li>03</li>
                    <li>04</li>
                    <li>05</li>
                    <li>06</li>
                    <li>07</li>
                    <li>08</li>
                    <li>09</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                    <li>...</li>
                    <li>30</li>
                    <li>31</li>
                </ul></div>
            </div>
        </div>
        <!--家居偏好-->
        <div class="pub">
            <p class="commonTit">家居偏好</p>
            <div class="house publicBoxs chooseCommon"><span>现代简约</span><i></i><ul class="commonBox seletCommon">
                <li>现代简约</li>
                <li>恬淡田园</li>
                <li>现代中式</li>
                <li>东南亚风格</li>
                <li>欧式古典</li>
                <li>地中海</li>
                <li>美式乡村</li>
                <li>美式古典</li>
                <li>时尚混搭</li>
                <li>其他</li>
            </ul></div>
        </div>
        <!--教育程度-->
        <div class="pub">
            <p class="commonTit">教育程度</p>
            <div class="eledu publicBoxs chooseCommon"><span>教育程度</span><i></i><ul class="commonBox seletCommon">
                <li>初中</li>
                <li>高中</li>
                <li>本科</li>
                <li>硕士</li>
                <li>博士</li>
                <li>其他</li>
            </ul></div>
        </div>
        <!--所在行业-->
        <div class="pub">
            <p class="commonTit">所在行业</p>
            <div class=" profession publicBoxs chooseCommon"><span>机构组织</span><i></i><ul class="commonBox seletCommon">
                <li>机构组织</li>
                <li>农林牧渔</li>
                <li>医药卫生</li>
                <li>建筑建材</li>
                <li>冶金矿产</li>
                <li>石油化工</li>
                <li>信息产业</li>
                <li>交通运输</li>
                <li>轻工食品</li>
                <li>服装纺织</li>
                <li>安全防护</li>
                <li>环保绿化</li>
                <li>其它</li>
            </ul></div>
        </div>
        <!--所在地区-->
        <div class="pub address clearfix">
            <p class="commonTit">所在地区</p>
            <div class=" address_province publicBoxs chooseCommon fl"><span>四川</span><i></i><ul class="commonBox seletCommon">
                <li>四川</li>
                <li>北京</li>
                <li>上海</li>
                <li>深圳</li>
                <li>其它</li>
            </ul></div>
            <div class=" address_city publicBoxs chooseCommon fl"><span>成都市</span><i></i><ul class="commonBox seletCommon">
                <li>成都市</li>
                <li>绵阳市</li>
                <li>德阳市</li>
                <li>泸州市</li>
                <li>其它</li>
            </ul></div>
            <div class=" address_county publicBoxs chooseCommon fl"><span>锦江区</span><i></i><ul class="commonBox seletCommon">
                <li>锦江区</li>
                <li>金牛区</li>
                <li>武侯区</li>
                <li>青羊区</li>
                <li>高新区</li>
                <li>成华区</li>
                <li>双流县</li>
                <li>金堂县</li>
                <li>新津县</li>
                <li>大邑县</li>
                <li>蒲江县</li>
                <li>郫都区</li>
                <li>其它</li>
            </ul></div>
            <div class=" address_place publicBoxs chooseCommon fl"><span>三环以内</span><i></i><ul class="commonBox seletCommon">
                <li>三环以内</li>
                <li>三环以外绕城以内</li>
                <li>绕城西</li>
                <li>绕城南</li>
                <li>绕城东</li>
                <li>绕城北</li>
                <li>其它</li>
            </ul></div>
            <br>
            <br>
            <input type="text" placeholder="街道门牌号" class="street">
        </div>
        <!--提交按钮-->
        <div class="submitBox">
            <button type="button" disabled class="submit">提交</button>
        </div>`)
}
//动态生成我的订单内容
function order() {
    $.getJSON('json/data.json',function (data) {
        var leng=data.order.img.length;
        var str='';
        console.log(leng)
        for(var i=0;i<leng;i++){
            str+= `<tr>
        <td>
        <div class="oderPic">
            <img src="images/${data.order.img[i]}">
            <p>订单号</p>
            </div>
            </td>
            <td>${data.order.money[i]}</td>
            <td>${data.order.orderTime[i]}</td>
            <td>${data.order.deliveryTime[i]}</td>
            <td>${data.order.state[i]}</td>
            <td>
            <div class="operation">
            <ul class="clearfix operationTop">
            <li class="fl">查看</li>
            <span class="fl"></span>
            <li class="fl">取消</li>
            </ul>
            <ul class="clearfix">
            <li class="fl">售后</li>
            <span class="fl"></span>
            <li class="fl delete">删除</li>
            </ul>
            </div>
            </td>
            </tr>`

            $('.myOder table tbody').html(str);
            orderMethod();
        }
    })
}
//动态生成我的出售内容
function mySell() {
    $.getJSON('json/data.json', function (data) {
        var leng = data.sell.img.length;
        var str = '';
        console.log(leng)
        for (var i = 0; i < leng; i++) {
            str += `
 <tr>
 <td>
<div class="oderPic">
    <img src="images/${data.sell.img[i]}">
    <p>订单号</p>
    </div>
    </td>
    <td>${data.sell.saleAmount[i]}</td>
    <td>${data.sell.submissionTime[i]}</td>
    <td>${data.sell.grounding[i]}</td>
    <td>${data.sell.storage[i]}</td>
    <td class="states">${data.sell.state[i]}</td>
    <td>${data.sell.returnMoney[i]}</td>
    <td>
    <div class="operation">
    <ul class="clearfix operationTop">
    <li class="fl" style="margin-left: 20px">申请降价</li>
    </ul>
    <ul class="clearfix operationBot">
    <li class="fl delete">删除</li>
    <span class="fl"></span>
    <li class="fl cancel">取消</li>
    </ul>
    </div>
    </td>
    </tr>`
            $('.mySell table tbody').html(str);
            mySellMethod();
        }
    })
}
//动态生成系统消息内容
function systemMessage(){
    $.getJSON('json/data.json', function (data) {
        var leng = data.message.message1.length;
        var str = '';
        var now = new Date();
        for (var i = 0; i < leng; i++) {
            str+=`<div class="accountTxt_com clearfix">
                    <div class="systemMegessLeft fl">
                        <p class="systemMegess_txt fl">${data.message.message1[i]}</p>
                        <div class="systemMegess_time fl">
                            <p>${now.getFullYear()}-${now.getMonth()}-${now.getDate()}</p><span></span><span></span><p>${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}</p>
                        </div>
                    </div>
                    <div class="systemMegessRight fl">
                        <i class="bg_choose1"></i>
                        <span>标记</span>
                    </div>
                </div>
            `
            $('.messageBox ').html(str);
            systemMessageMethod();
        }
    })
}



/*********************/
/*个人信息查看方法*/
/*********************/
function personInfoMethod(){
//下拉菜单事件
    $('.chooseCommon ').on('click',function(){
        //二级菜单显示状态
        $(this).children('ul').slideDown();
        $('.chooseCommon li ').on('click',function(e){
            e.stopPropagation();
            var txt = $(this).text();
            $(this).parent().parent().children('span').text(txt);
            $(this).parent().slideUp();
        })
        $('.chooseCommon ').on('mouseleave',function(){
            //二级菜单隐藏状态
            $(this).children('ul').slideUp()
        })
    })

    /*性别判断*/
    $('.gender i').on('click',function(){
        $(this).css("background-position","-444px -74px").siblings().css("background-position","-444px -46px")
    })

}

/*********************/
/*我的订单查看方法*/
/*********************/
function orderMethod(){
    //删除按钮事件
    $('.delete').click(function () {
        var thisChoose = $(this);
        $('#popupBox').fadeIn(500);
        $('.maskLayer').removeClass("dispear");
        $('.close').on('click',function () {
            $('#popupBox').fadeOut(500);
            $('.maskLayer').addClass("dispear");
           // thisChoose.removeClass("condition");
        })
        $('.sure').off('click').on('click',function () {
            $('#popupBox').fadeOut(500);
            $('.maskLayer').addClass("dispear");
            console.log(thisChoose)
           // thisChoose.addClass("condition");
            thisChoose.parent().parent().parent().parent().html("")
        })
    })
    //返回按钮点击事件
    $('.backBtn').click(function () {
        loadTextFile('.personInfo');
        //调用内容生成函数
        personInfo();
        //调用内容生成的方法
        personInfoMethod();
        $('#info').addClass("check").siblings().removeClass("check");
    })
}

/*********************/
/*我的出售 已出售 添加禁用的方法*/
/*********************/
function mySellMethod() {
    for(var i=0;i<$('.states').length;i++){
        if($('.states').eq(i).text()=='已出售'){
            $('.states').eq(i).next().next().children(".operation").children(".operationTop").children('li').addClass('change')
            $('.states').eq(i).next().next().children(".operation").children(".operationBot").children('.cancel').addClass('change')
            $('.states').eq(i).next().next().children(".operation").children(".operationTop").children('li').hover(function () {
                $(this).css("text-decoration","none")
            })
            $('.states').eq(i).next().next().children(".operation").children(".operationBot").children('.cancel').hover(function () {
                $(this).css("text-decoration","none")
            })
        }
    }
    orderMethod();
}

/*********************/
/*系统消息查看方法*/
/*********************/
function systemMessageMethod() {
    var messageLeng=$('.systemMegess .accountTxt_com ').length;
    $('.systemMes span').text(messageLeng);
    console.log(messageLeng)
    //标记按钮点击事件
    $('.systemMegessRight').click(function() {
        var newThis = $(this);
        $(this).children('i').toggleClass('bg_choose2');
    })
    //删除按钮点击事件
    $('.systemMegessBottom button').on('click',function () {
        //判断i里面是否有bg_choose2
        // 有的情况
        if($('.systemMegessRight').children('i').hasClass('bg_choose2')){
            $('#popupBox').fadeIn(500);
            $('.maskLayer').removeClass("dispear");
            $('.sure').on('click',function (){
                $('#popupBox').fadeOut(500);
                $('.maskLayer').addClass("dispear");
                $('.bg_choose2').parent().parent().remove();
                var messageLen=$('.systemMegess .accountTxt_com ').length;
                console.log(messageLen)
                $('.systemMes span').text(messageLen);
            })
            $('.close').click(function () {
                $('#popupBox').fadeOut(500);
                $('.maskLayer').addClass("dispear");
            })
        }
        //没有的情况
        else{
            $('.popupBoxDel').fadeIn(500);
            $('.popupBoxYes .yes').click(function(){
                $('.popupBoxDel').fadeOut(500);
            })
        }
    })
    //消息点击放大效果
    $('.systemMegessLeft').click(function () {
        $(this).toggleClass("systemMegessLeft_add");
        $(this).children(".systemMegess_txt").toggleClass("systemMegess_txtAdd");
        $(this).children(".systemMegess_time").toggleClass("systemMegess_timeAdd");
        $(this).children(".systemMegess_time").children("p").toggleClass("systemMegess_timeP")

    })
}

