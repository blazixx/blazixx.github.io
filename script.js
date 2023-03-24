// функция, которая открывает и закрывает меню
function toggleMenu(menuId) {
  var menu = document.getElementById(menuId);
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// функция, которая закрывает все меню
function closeAllMenus() {
  var menus = document.getElementsByClassName("menu");
  for (var i = 0; i < menus.length; i++) {
    menus[i].style.display = "none";
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

// добавляем обработчик события на крестики
var closeIcons = document.getElementsByClassName("close-icon");
for (var i = 0; i < closeIcons.length; i++) {
  closeIcons[i
