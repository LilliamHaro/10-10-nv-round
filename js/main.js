$(document).ready(function(){

  $('.hamburguer-button').on('click',function(){
    $('.label-nav').toggleClass('label-expand')
    setTimeout(() => {
      $('.nav-content').toggle('slow')
    }, 800);
    
  })

})