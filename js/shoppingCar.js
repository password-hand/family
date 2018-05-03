    /*********************/
    /*购物车生成内容及设置*/
    /*********************/
//添加加号点击事件
    $('.add').on('click',function () {
        //增加产品数量
        var inpVal1 ="";
        inpVal1 = Number(this.previousElementSibling.value)+1;
        this.previousElementSibling.value = inpVal1;
        //求金额数
        var price = this.parentElement.previousElementSibling.textContent;
        console.log(this.index)
        price=price.slice(1,5);
        var sums = inpVal1*price;
        $(this).parent().next().children('.money').text(sums);
        var newP=$(this).parent().parent().children().first().children("i").hasClass("choose_listBg2")
        //console.log($(this).parent().parent())
        if(newP){
            //调用总计函数方法
            tot();
        }
    })
    //添加减号点击事件
   $('.reduce').on('click',function () {
       var inpVal2 ="",
           sum=0;
       var leng =$('.choose_listBg2').length;
       if(Number(this.nextElementSibling.value)>=2) {
           inpVal2 = Number(this.nextElementSibling.value) - 1;
           this.nextElementSibling.value = inpVal2;
           //求金额数
           var price = this.parentElement.previousElementSibling.textContent;
           price = price.slice(1, 5);
           var sums = inpVal2*price;
           $(this).parent().next().children('.money').text(sums);
           var newP= $('.reduce').parent().parent().children().first().children("i").hasClass("choose_listBg2")
          // console.log($(this).parent().parent())
           if(newP){
               tot();
           }
       }
   })
    //频繁点击解除浏览器默认事件
    $('.add').bind("selectstart", function () { return false });
    $('.reduce').bind("selectstart", function () { return false });
//求总计函数方法
   function tot(){
       var leng =$('.choose_listBg2').length;
       var arr=[];
       var num=0;
       for (var i = 0; i < leng; i++){
           num += Number($('.choose_listBg2').eq(i).parent().next().next().next().next().children(".money").text());
       }
       $('.total').text(num);
    }

//商品数量获取函数
    function goodlists() {
        var arr=[];
        var leng =$('.choose_list').length;
        for(var i=0;i<leng;i++){
            var lists=$('.choose_list').eq(i).hasClass('choose_listBg2');
            if(lists){
                arr.push(lists);
            }
            $('.number').text(arr.length)
        }
    }

//商品选择框点击事件
    $('.choose_list').on('click',function () {
        $(this).toggleClass('choose_listBg2');
        goodlists();
        tot();
        var leng = $('.choose_list').length;
        var arr=[];
        for (var i = 0; i < leng; i++) {
         var num = Number($('.choose_list').eq(i).hasClass('choose_listBg2'))
            arr.push(num)
            var arrs = arr.reduce(function (a1,a2) {
                return a1+a2;
            })
            if(arrs==leng){
                $('.chooseBg').addClass('choose_listBg2').removeClass('choose_listBg3')
            }
            else if(arrs==0){
                $('.chooseBg').removeClass('choose_listBg3').removeClass('choose_listBg2')
            }
            else{
                $('.chooseBg').removeClass('choose_listBg2').addClass('choose_listBg3')
            }
        }
    })
//全选框点击事件
    $('.chooseBg').on('click',function () {
        //商品数量获取
        var arr=[];
        var leng =$('.choose_list').length;
        for(var i=0;i<leng;i++){
            var lists=Number($('.choose_list').eq(i).hasClass('choose_listBg2'));
           arr.push(lists);
        }
        var arrs = arr.reduce(function (a1,a2) {
            return a1+a2;
        })
        $('.chooseBg').toggleClass('choose_listBg2').removeClass('choose_listBg3');
        if(arrs==leng){
            $('.choose_list').removeClass('choose_listBg2')
        }
        else if(arrs==0){
            $('.choose_list').addClass('choose_listBg2')
        }
        else{
            $('.choose_list').addClass('choose_listBg2')
        }
        goodlists();
        tot();
    })

//删除按钮事件
    $('.delete_list').on('click',function () {
        var chooseClass=$(this).parent().parent().children().children("i").hasClass('choose_listBg2');
        if(chooseClass){
            $(this).parent().parent().remove();
            //商品数量获取函数方法
            goodlists();
            //调用总计函数方法
            tot();
            if(!$('.choose_list').hasClass('choose_listBg2')){
                $('.chooseBg').removeClass('choose_listBg2').removeClass('choose_listBg3');
            }
            else if($('.choose_list').hasClass('choose_listBg2')){
                $('.chooseBg').removeClass('choose_listBg3').addClass('choose_listBg2');
            }
        }
        else{
            alert("请选择需要删除的商品")
        }
    })

