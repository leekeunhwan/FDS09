$(document).ready(function() {
  var viewport = window.matchMedia("(max-width:999px)"); // window.matchMedia()메소드는 미디어 쿼리 자바스크립트 버젼이라고 보면 될 것 같습니다. 변수 viewport에 값으로 할당합니다.
  if (viewport.matches) {
    // matchMedia 함수는 MediaQueryList를 반환하는데 이 객체는 media와 match를 반환합니다.
    // matches는 현재 화면이 미디어 쿼리의 범위에 들어가면 true를 반환하고 아니면 false를 반환합니다.
    var nav = $(".navigation"); // 각각의 변수에 클래스를 값으로 할당합니다. 이로 인해 변수는 클래스를 지정한 요소를 제어할 수 있습니다.
    var btn = $(".btn-menubar");
    var menu = $(".menu");
    var menuLists = $(".menu-list");
    var menuItems = $(".menu-item");
    var subMenus = $(".sub-menu");
    var slogan = $(".slogan-heading");

    // 999px 이하에서 적용할 코드
    menuItems.attr("aria-haspopup", "true"); //  menuItems라는 변수에 true값이 입력된 aria-haspopup(서브메뉴의 표시여부를 나타내는 속성)이란 어트리뷰트를 부여합니다.
    menuItems.attr("aria-expanded", "false"); //  menuItems라는 변수에 false값이 입력된 aria-expanded(하위 메뉴가 펼쳐져있는지 알려주는 속성)이란 어트리뷰트를 부여합니다.
    menuItems.attr("role", "button"); // menuItems라는 변수에 값이 button인 role(해당 요소의 역할을 나타내는 속성)이란 어트리뷰트를 부여합니다.
    menuItems.attr("tabindex", "0"); // menuItems라는 변수에 값이 0인 tab-index(포커스를 받도록 해주는 속성)이란 어트리뷰트를 부여합니다.
    menuItems.addClass("icon-plus"); // 아이콘 추가를 위해 변수 menuItems에 icon-plus라는 클래스를 추가하였습니다. ( + 아이콘 )
    slogan.addClass("a11y-hidden");

    btn.on("click", function(e) {
      // 버튼이 클릭될때 이벤트를 실행합니다.
      e.preventDefault(); // preventDefault()메소드는 기본으로 정의된 이벤트를 작동하지 못하게 하는 메소드입니다.
      nav.toggleClass("is-act"); // nav요소에 is-act라는 새로운 클래스를 추가 혹은 제거하도록 해줍니다. (toggleClass()메소드는 해당 요소가 없으면 추가, 있으면 제거를 합니다.)
      if (nav.hasClass("is-act")) {
        // 만약 nav에 is-act 클래스가 있을경우
        btn.attr("aria-label", "메인 메뉴 닫기"); // 변수 btn에 메인 메뉴 닫기라는 값을 가진 aria-label(버튼과 같은 그래픽을 사용하는 요소를 시각화 시켜줍니다)이라는 어트리뷰트를 부여합니다.
      } else {
        // 없을경우
        btn.attr("aria-label", "메인 메뉴 열기"); // 변수 btn에 메인 메뉴 열기라는 값을 가진 aria-label이라는 어트리뷰트를 부여합니다.
      }
    });

    menuItems.on("click keydown", function(e) {
      //  menuItems에 클릭과 키입력시 이벤트를 수행합니다.
      menu.on("focusout", function() {ㄹ
        nav.removeClass("is-act");
      });

      menu.on("focusin", function() {
        nav.addClass("is-act");
      });
      if (e.type === "click" || (e.type === "keydown" && e.keyCode === 13)) {
        // 이벤트의 타입이 클릭인 경우 혹은 이벤트의 타입이 키코드가 13인 값을 가진 키가 눌렸을 때 아래의 내용을 수행합니다.
        menuLists.removeClass("is-act"); // 변수 menuLists의 is-act라는 클래스를 제거합니다.
        menuItems.addClass("icon-plus"); // 변수 menuItems에 icon-plus라는 클래스를 추가합니다.
        subMenus.css("display", "none"); // sebMenus에 display:none;이라는 css를 지정하여 하위 메뉴를 안보이게 합니다.
        $(this) // 또한 $(this) 선택자의 부모요소(클래스가 menu-list인 li태그)에 menu-act라는 클래스를 추가합니다.
          .parent()
          .addClass("menu-act");
        if (
          // 만약 $(this) 선택자의 부모요소가 menu-act라는 클래스를 가지고 있을경우
          $(this)
            .parent()
            .hasClass("menu-act")
        ) {
          $(this).attr("aria-expanded", "true"); // $(this) 선택자에 값이 true인 aria-expanded의 어트리뷰트를 부여합니다.
          $(this).addClass("icon-minus"); //  $(this) 선택자에 icon-minus 클래스를 부여합니다. ( - 아이콘 )
          $(this).removeClass("icon-plus"); // $(this) 선택자에 icon-plus 클래스를 제거합니다.
          $(this)
            .siblings()
            .css("display", "block"); // 또한 $(this) 선택자의 형제 선택자에 display:block;이라는 css를 지정하여 하위 메뉴를 보여주게 합니다.
        } else {
          $(this).attr("aria-expanded", "false"); // 만약 $(this) 선택자의 부모요소가 menu-act라는 클래스를 갖고 있지 않을 경우 $(this) 선택자에 값이 false인 aria-expanded의 어트리뷰트를 부여합니다.
        }
      }
    });
  } else {
    // 1000px 이상에서 사용할 코드
  }
});
