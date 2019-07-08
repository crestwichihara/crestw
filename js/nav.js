$(function(){
  $(".gnavi").click(function(){
    $(".nav ul li").slideToggle();
    return false;
  });
  $(window).resize(function(){
    var win = $(window).width();
    var p = 720;
    if(win > p){
      $(".nav ul li").show();
    }
  });
});
