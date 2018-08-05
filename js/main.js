$(function(){
  'use strict';

   //Feautred work shuffel
   $('.featured-work ul li').on('click' , function(){
       $(this).addClass('active').siblings().removeClass('active');
       if ($(this).data('class') === 'all'){
         $('.shuffel-images .col-md').css('opacity','1');
       }else{
         $('.shuffel-images .col-md').css('opacity','.09');
         $($(this).data('class')).parent().css('opacity','1');
       }
   });

});
