window.addEventListener("DOMContentLoaded", () => {
  //   menu
  const menuBtn = document.getElementById("menu-btn");
  const menuItems = document.getElementById("menu-items");

  menuBtn.addEventListener("click", () => {
    if (menuItems.style.display == "flex") {
      menuItems.style.display = "none";
    } else {
      menuItems.style.display = "flex";
    }
  });

  //   popup
  const cards = document.getElementsByClassName("card");
  const closeBtn = document.getElementById("popup-close-btn");
  const close = document.getElementById("popup-close");
  const popUp = document.getElementById("popup");

  for (var i = 0; i <= cards.length; i++) {
    cards[i].addEventListener("click", () => {
      popUp.style.display = "block";
      closeBtn.addEventListener("click", () => {
        popUp.style.display = "none";
      });
      close.addEventListener("click", () => {
        popUp.style.display = "none";
      });
    });
  }
});
