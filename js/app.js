/*global $, window*/
$(function(){
    "use strict";
    $(document).ready(function(){
        $(window).scroll(function(){
            var nav = $('.nav-container').offset();
            if($(window).scrollTop() >= nav.top){
                $('.circle').css({
                    display: 'none'
                });
                $('.logo .for-fixed').css({
                    display: 'block'
                });
                $('.nav-container .navbar').css({
                    marginTop: 0
                });
                $('.nav-container .above-links').css({
                    top: '63px'
                });
                $('.nav-container').css({
                    position: 'fixed',
                    top: 0,
                    right:0
                });
            }
            if($(window).scrollTop() < 20){
                if($( window ).width() > 768){
                    $('.circle').css({
                        display: 'block'
                    });
                    $('.logo .for-fixed').css({
                        display: 'none'
                    });
                }
                if ($(window).width() > 768){
                    $('.nav-container .navbar').css({
                        marginTop: '35px'
                    });
                }
                $('.nav-container .above-links').css({
                    top: '-25px'
                });
                $('.nav-container').css({
                    position: 'relative',
                    top: 'auto'
                });
            }
        });
    });
    
    $('.social .fa-search').on('click', function(){
        $('.search-form').fadeIn();
    });
    $('.fa-times').on('click', function(){
        $('.search-form input').val('');
        $('.search-form').fadeOut();
    });

    // close breaking-news
    $('.close').on("click", function(){
        $('.breaking-news').fadeOut();
    });

    $(window).scroll(function (e) {
        var connected = $("#connected").offset();
        var social = $('.news-details-social');
        if ($(window).scrollTop() > 500) {
            if (social.is(':hidden')) {
                social.fadeIn(400);
            }
        } else {
            social.fadeOut(400);
        }
        
    });

    $('.list').on("click", function(){
        var target = $(this).data('target');
        $("#player").prop("src", target);
        $('.play i').fadeIn();
        $('.play span').fadeOut();
        $(this).children('.row').children('.play').children('i').fadeOut();
        $(this).children('.row').children('.play').children('span').fadeIn();
    });


    // new-user
    $('#new-user-buttun').click(function(){
        if($('.sellect-log').innerHeight() <= 1){
            $('.sellect-log').animate({height: 40}, 300);
        }else{
            $('.sellect-log').animate({height: 0}, 300);
        }
    });
    $('.sellect-signup').click(function(){
        $('.login-ways-content').fadeOut(100);
        $('#new-user').fadeIn(200);
    });
    $('.sellect-login').click(function(){
        $('.login-ways-content').fadeOut(100);
        $('#login-user').fadeIn(200);
    });
    $('.cancle').click(function(){
        $('.login-ways-content').fadeIn();
        $('#new-user').fadeOut(100);
        $('#login-user').fadeOut(100);
    });


    $(document).ready(function () {
        $(document).on("click", "#ShareButton", function (e) {
            $("body").append('<input id="copyURL" type="text" value="" />');
            $("#copyURL").val(window.location.href).select();
            document.execCommand("copy");
            $('#copy-done').fadeIn(200).delay(700).fadeOut(400);
            $("#copyURL").remove();            
        });
    });
    
    // gallary
    var photoNum = $('.thumbnails').children().length,
        photoMargin = 0.5 * (photoNum - 1),
        photoWidth = (100 - photoMargin) / photoNum;

    $('.thumbnails img').css({
        width: photoWidth + '%',
        marginRight: '.5' + '%'
    });
    $('.thumbnails img:last-of-type').css({
        marginRight: 0
    });
    $('.thumbnails img').on('click', function () {
        $(this).addClass('sellected').siblings().removeClass('sellected');

        $('.master-img img').hide().attr('src', $(this).attr('src')).fadeIn(500);
    });
    $('.master-img .fa-chevron-right').click(function () {
        if ($('.thumbnails .sellected').is(':last-child')) {
            $('.thumbnails img').eq(0).click();
        } else {
            $('.thumbnails .sellected').next().click();
        }
    });
    $('.master-img .fa-chevron-left').click(function () {
        if ($('.thumbnails .sellected').is(':first-child')) {
            $('.thumbnails img:last').click();
        } else {
            $('.thumbnails .sellected').prev().click();
        }
    });
});