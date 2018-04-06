if (window.matchMedia("(max-width: 999px)").matches) {
  // 변수 할당
  let nav = document.getElementsByClassName("navigation");
  let btn = document.getElementsByClassName("btn-menubar");
  let menu = document.getElementsByClassName("menu");
  let menuLists = document.getElementsByClassName("menu-list");
  let menuItems = document.getElementsByClassName("menu-item");
  let subMenus = document.getElementsByClassName("sub-menu");

  menuItems.setAttribute("aria-haspopup", "true");
  menuItems.setAttribute("aria-expanded", "false");
  menuItems.setAttribute("role", "button");
  menuItems.setAttribute("tabindex", "0");
  menuItems.classList.add("icon-plus");

  btn.addEventListner("click", function(e) {
    e.preventDefalut();
    nav.classList.add("is-act");
    if (nav.classList.contains("is-act")) {
      btn.classList.toggle("aria-label", "메인 메뉴 닫기");
    } else {
      btn.classList.toggle("aria-label", "메인 메뉴 열기");
    }
  });
}
