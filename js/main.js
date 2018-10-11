$(document).ready(function(){

  $('.nav-in').on('click',function(){
    $('.label-nav').addClass('label-expand');
    $('.nav-content').addClass('nav-content-expand')
    $('.sp-1').addClass('sp-cross-1')
    $('.sp-2').addClass('sp-cross-2')
    $('.sp-3').addClass('sp-cross-3') 
    $('.hamburguer-button-2').addClass('index-cross');
    setTimeout(function(){
      $('.nav-content ul li a').addClass('opacity-1')
    },200)
    setTimeout(function(){
      $('.nav-content ul li a').addClass('opacity-1')
    },500)
  })

  $('.nav-out').on('click',function(){
    $('.label-nav').removeClass('label-expand');
    $('.nav-content').removeClass('nav-content-expand')
    $('.nav-content ul li a').removeClass('opacity-1')
    $('.sp-1').removeClass('sp-cross-1')
    $('.sp-2').removeClass('sp-cross-2')
    $('.sp-3').removeClass('sp-cross-3') 
    $('.hamburguer-button-2').removeClass('index-cross');
  })

})