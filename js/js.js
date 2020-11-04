// 點選導覽列按鈕，移動至該區域
$('#nav .nav-item').click(function () {
  $('html, body').animate({
  scrollTop: $($.attr(this, 'href')).offset().top-10
  }, 500);
  return false;
});


// 移動至該區域，導覽列相對應之按鈕做改變
for(let i=0;i<$("section").length;i++){
  if(i==0){
    $('section').eq(i).waypoint(function() {
      $("header .navbar-nav .nav-item").removeClass('active');
      $("header .navbar-nav .nav-item").eq(i).addClass('active');
    }, {
      offset: '-10'
    });
  }else{
    $('section').eq(i).waypoint(function() {
      $("header .navbar-nav .nav-item").removeClass('active');
      $("header .navbar-nav .nav-item").eq(i).addClass('active');
    }, {
      offset: '10'
    });
  }
  
}

// 導覽列進入/離開topBar時改變顏色
$('#room').waypoint(function() {
  $("#header").css("background-color", "#17a2b8");
}, {
  offset: '5%'
});
$('#room').waypoint(function() {
  $("#header").css("background-color", "#17a2b84d");
}, {
  offset: '10%'
});


// 回頂部按鈕
$('.btnBack').fadeOut(0);
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.btnBack').fadeIn('slow');
  } else {
    $('.btnBack').fadeOut('5000');
  }
});
$('.btnBack').click(function() {
  $('html,body').animate({scrollTop:0}, 500);
});
$('.navbar-brand').click(function() {
  $('html,body').animate({scrollTop:0}, 500);
});
