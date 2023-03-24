// функция, которая открывает и закрывает меню
function toggleMenu(menuId) {
  var menu = document.getElementById(menuId);
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// функция, которая закрывает меню
function closeMenu() {
  var menu = document.getElementsByClassName("menu");
  for (var i = 0; i < menu.length; i++) {
    menu[i].style.display = "none";
  }
}

// добавляем обработчик события на кнопки
var buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var menuId = this.getAttribute("data-menu-id");
    toggleMenu(menuId);
  });
}

// добавляем обработчик события на крестик
var closeIcon = document.getElementById("close-icon");
if (closeIcon) {
  closeIcon.addEventListener("click", function () {
    closeMenu();
  });
}

// добавляем обработчик события на клик вне меню
window.addEventListener("click", function (event) {
  var menu = document.getElementsByClassName("menu");
  var target = event.target;
  var clickedInsideMenu = false;

  for (var i = 0; i < menu.length; i++) {
    if (target == menu[i] || menu[i].contains(target)) {
      clickedInsideMenu = true;
      break;
    }
  }

  if (!clickedInsideMenu) {
    closeMenu();
  }
});
