/**
 * Created by Neo on 2016/3/3.
 */

$(function(){

    (function(){
        var picNum = 1;
        var wWith = $('.slideshow').width()
        var slideWidth = parseInt($('.slideshow').css('width'));
        $('.next').click(function(){
            var left = parseInt($('.slide').css('left'));
            var nLeft = left - wWith
            $('.slide').animate({left:nLeft},function(){
                picNum += 1;
                if(picNum >3) {
                    picNum = 1;
                    $('.slide').css('left',-slideWidth);
                }
            });
        });
        $('.prev').click(function(){
            var left = parseInt($('.slide').css('left'));
            var nLeft = left + slideWidth;
            $('.slide').animate({left:nLeft},function(){
                picNum -= 1;
                if(picNum <1) {
                    picNum = 3;
                    $('.slide').css('left',-3*slideWidth);
                }
            });
        });
    })();


    (function(){
        var avatar1 = {left:0,height:188,width:148,top:50}
        var avatar2 = {left:40,height:226,width:178,top:30}
        var avatar3 = {left:80,height:290,width:228,top:0}
        var avatar4 = {left:170,height:226,width:178,top:30}
        var avatar5 = {left:240,height:188,width:148,top:50}

        function move(element){
            if(parseInt($(element).css('left')) == 0){
                $(element).css('z-index',2)
                $(element).animate(avatar5,800)
            }
            if(parseInt($(element).css('left')) == 40){
                $(element).css('z-index',2)
                $(element).animate(avatar1,800)
            }
            if(parseInt($(element).css('left')) == 80){
                $(element).css('z-index',3)
                $(element).animate(avatar2,800)
            }
            if(parseInt($(element).css('left')) == 170){
                $(element).css('z-index',4)
                $(element).animate(avatar3,800)
            }
            if(parseInt($(element).css('left')) == 240){
                $(element).css('z-index',3)
                $(element).animate(avatar4,800)
            }
        }

        function moveAvatar(){
            move(".avatar1");
            move(".avatar2");
            move(".avatar3");
            move(".avatar4");
            move(".avatar5");
        }

        setInterval(function(){
            moveAvatar()
        },2000)
    })();






});

