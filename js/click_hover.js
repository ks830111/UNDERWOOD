$(function(){
    // header

    // 축약식
    // $('.menu_ul a').click(function(){
    //     $('.menu_ul li').removeClass('select');
    //     $(this).parent().addClass('select');
    // });

    $('.mh3_1').click(function(){
        $('.mh3_ul a').removeClass('select');
        $(this).find('a').addClass('select');
    });

    $('.mh3_2').click(function(){
        $('.mh3_ul a').removeClass('select');
        $(this).find('a').addClass('select');
    });

    $('.mh3_3').click(function(){
        $('.mh3_ul a').removeClass('select');
        $(this).find('a').addClass('select');
    });

    $('.mh3_4').click(function(){
        $('.mh3_ul a').removeClass('select');
        $(this).find('a').addClass('select');
    });

    // 아이콘
    $('.fas1').click(function(){
        $('.mh1 i').removeClass('select');
        $(this).find('i').addClass('select');
    });
    $('.fas2').click(function(){
        $('.mh1 i').removeClass('select');
        $(this).find('i').addClass('select');
    });
    $('.fas3').click(function(){
        $('.mh1 i').removeClass('select');
        $(this).find('i').addClass('select');
    });

});