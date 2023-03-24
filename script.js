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

// функция, которая открывает окно
function openWindow(windowId) {
  var window = document.getElementById(windowId);
  window.style.display = "block";
}

// функция, которая закрывает окно
function closeWindow(windowId) {
  var window = document.getElementById(windowId);
  window.style.display = "none";
}

// добавляем обработчик события на кнопки
var buttons = document.querySelectorAll("nav ul li button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var menuId = this.getAttribute("data-menu-id");
    var windowId = this.getAttribute("data-window-id");
    if (menuId) {
      toggleMenu(menuId);
    }
    if (windowId) {
      openWindow(windowId);
    }
  });
}

// добавляем обработчик события на крестик
var closeIcons = document.getElementsByClassName("close-icon");
for (var i = 0; i < closeIcons.length; i++) {
  closeIcons[i].addEventListener("click", function () {
    var windowId = this.getAttribute("data-window-id");
    closeWindow(windowId);
  });
}

// добавляем обработчик события на клик вне меню и окон
window.addEventListener("click", function (event) {
  var menu = document.getElementsByClassName("menu");
  var window = document.getElementsByClassName("window");
  var target = event.target;
  var clickedInsideMenu = false;
  var clickedInsideWindow = false;

  for (var i = 0; i < menu.length; i++) {
    if (target == menu[i] || menu[i].contains(target)) {
      clickedInsideMenu = true;
      break;
    }
  }

  for (var i = 0; i < window.length; i++) {
    if (target == window[i] || window[i].contains(target)) {
      clickedInsideWindow = true;
      break;
    }
  }

  if (!clickedInsideMenu) {
    closeMenu();
  }

  if (!clickedInsideWindow) {
    for (var i = 0; i < window.length; i++) {
      closeWindow(window[i].getAttribute("id"));
    }
  }
});
