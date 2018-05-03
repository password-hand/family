/*
* 验证邮箱密码格式正确改变登录按钮状态
* */

function loginBtnState() {
    var $userName = $('.userName'),
        $userPwd = $('.userPwd'),
        $loginBtn = $('.loginBtn');
    //设置邮箱及密码正则表达式
    var RegExpEma = /^\w+@[a-z0-9]+\.([a-z]){1,3}$/,
        RegExpPwd = /^\w{6,}$/;
    //邮箱输入框监听事件
    $userName.keyup(function () {
        //验证邮箱密码格式正确
        if(RegExpEma.test($(this).val())&&RegExpPwd.test($userPwd.val())){
            //改变登录按钮状态
            $loginBtn.removeAttr('disabled');
            $loginBtn.css('cursor','pointer');
            $loginBtn.css('background-color','#82c353');
        }else{
            $loginBtn.attr('disabled','true');
            $loginBtn.css('cursor','not-allowed');
            $loginBtn.css('background-color','#838281');
        }
    })
    //密码输入框监听事件
    $userPwd.keyup(function () {
        //验证邮箱密码格式正确
        if(RegExpEma.test($userName.val())&&RegExpPwd.test($(this).val())){
            //改变登录按钮状态
            $loginBtn.removeAttr('disabled');
            $loginBtn.css('cursor','pointer');
            $loginBtn.css('background-color','#82c353');
        }else{
            $loginBtn.attr('disabled','true');
            $loginBtn.css('cursor','not-allowed');
            $loginBtn.css('background-color','#838281');
        }
    })
}
loginBtnState();
/*
* 验证邮箱密码格式正确改变登录按钮状态
* */

function registerBtnState() {
    var $regUserName = $('.regUserName'),
        $regPwd = $('.regPwd'),
        $regRePwd = $('.regRePwd'),
        $regBtn =$('.regBtn');
    //设置邮箱及密码正则表达式
    var RegExpEma = /^\w+@[a-z0-9]+\.([a-z]){1,3}$/,
        RegExpPwd = /^\w{6,}$/;
    //邮箱输入框监听事件
    $regUserName.keyup(function () {
        //验证邮箱密码格式正确
        if(RegExpEma.test($(this).val())&&RegExpPwd.test($regPwd.val())&&RegExpPwd.test($regRePwd.val())){
            //改变登录按钮状态
            $regBtn.removeAttr('disabled');
            $regBtn.css('cursor','pointer');
            $regBtn.css('background-color','#82c353');
        }else{
            $regBtn.attr('disabled','true');
            $regBtn.css('cursor','not-allowed');
            $regBtn.css('background-color','#838281');
        }
    })
    //密码输入框监听事件
    $regPwd.keyup(function () {
        //验证邮箱密码格式正确
        if(RegExpPwd.test($(this).val())&&RegExpEma.test($regUserName.val())&&RegExpPwd.test($regRePwd.val())){
            //改变登录按钮状态
            $regBtn.removeAttr('disabled');
            $regBtn.css('cursor','pointer');
            $regBtn.css('background-color','#82c353');
        }else{
            $regBtn.attr('disabled','true');
            $regBtn.css('cursor','not-allowed');
            $regBtn.css('background-color','#838281');
        }
    })
    ////确认密码输入框监听事件
    $regRePwd.keyup(function () {
        //验证邮箱密码格式正确
        if(RegExpPwd.test($(this).val())&&RegExpEma.test($regUserName.val())&&RegExpPwd.test($regPwd.val())){
            //改变登录按钮状态
            $regBtn.removeAttr('disabled');
            $regBtn.css('cursor','pointer');
            $regBtn.css('background-color','#82c353');
        }else{
            $regBtn.attr('disabled','true');
            $regBtn.css('cursor','not-allowed');
            $regBtn.css('background-color','#838281');
        }
    })
}
registerBtnState();
/*  注册提交按钮  */
var obj ={};
$('.regBtn').on('click',function () {
    if($('.regPwd').val()==$('.regRePwd').val()){
        obj.email =$('.regUserName').val();
        obj.passd = $('.regPwd').val();
        //存储到localStorage
        var str = '';
        for (var i in obj) {
            str += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]) + ";"
        }
        str = str.substring(0, str.length - 1);
        localStorage.testObj = str;
        $('#registerBox').css('display','block');
    }else {
        $('#registerBox1').css('display','block');
    }
})
/*  注册成功跳转登录  */
$('#registerReBtn').on('click',function () {
    $('.main_land').addClass('showing').removeClass('dispear');
    $('.main_register').addClass('dispear').removeClass('showing');
    $('#registerBox').css('display','none');
})
/*  注册失败跳转登录  */
$('#registerReBtn1').on('click',function () {
    $('#registerBox1').css('display','none');
})
/*  登录提交按钮  */
$('.loginBtn').on('click',function () {
//解析localStorage数据
    var strA = localStorage.testObj.split(';');
    var newObj = {};
    for(var i=0;i<strA.length;i++){
        var tmp = strA[i].split('=');
        newObj[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp[1]);
    }
    //登录失败弹框
    if($('.userName').val()==''||$('.userPwd').val()==''||$('.userName').val()!=newObj.email||$('.userPwd').val()!=newObj.passd){
        $('#registerBox2').css('display','block');
        }
    //登录成功弹框
    else {
        $('#registerBox3').css('display','block');
    }
});
/*  登录失败跳转登录  */
$('#registerReBtn2').on('click',function () {
    $('#registerBox2').css('display','none');
})
/*  登录成功跳转  */
$('#registerReBtn3').on('click',function () {
    $('#registerBox3').css('display','none');
    $('.pesnName').text($('.userName').val());
    $('.login').css('display','none');
    $('.main_register').addClass('dispear').removeClass('showing');
    $('.main_land').addClass('dispear').removeClass('showing');
    $('.mainbody').css('display','block');
    $('.pesnName').css('display','block');
})
/*  登录注册切换  */
$('.subhead_land').click(function () {
    $('.main_register').addClass('dispear').removeClass('showing');
    $('.main_land').addClass('showing').removeClass('dispear');
})
$('.subhead_register').click(function () {
    $('.main_register').addClass('showing').removeClass('dispear');
    $('.main_land').addClass('dispear').removeClass('showing');
})
