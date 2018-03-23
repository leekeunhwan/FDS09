$(document).ready(function() {
  var mainMenu = $('.main-menu > li');
  var tab = $('.tab');
  
  // 메인 메뉴 제어를 위한 스크립트
  mainMenu.hover(function() {
    $(this).siblings().find('.sub-menu').removeClass('sub-menu-active');
    $(this).find('.sub-menu').addClass('sub-menu-active');
  });
  mainMenu.focusin(function() {
    $(this).siblings().find('.sub-menu').removeClass('sub-menu-active');
    $(this).find('.sub-menu').addClass('sub-menu-active');
  });

// 공지사항 및 자료실 탭 제어를 위한 스크립트
  tab.on('click focusin', function() {
    $(this).parent().addClass('board-active')
      .siblings().removeClass('board-active');
  });
});