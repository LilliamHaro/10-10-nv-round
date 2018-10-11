$(document).ready(function(){

  $('.hamburguer-button').on('click',function(){
    $('.label-nav').toggleClass('label-expand');
    $('.nav-content').toggleClass('nav-content-expand')
    $('.nav-content ul li a').toggleClass('opacity-1')

    $('.sp-1').toggleClass('sp-cross-1')
    $('.sp-2').toggleClass('sp-cross-2')
    $('.sp-3').toggleClass('sp-cross-3')

   
    
  })

})