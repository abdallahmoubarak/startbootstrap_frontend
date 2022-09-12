window.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const menuItems = document.getElementById("menu-items");

  menuBtn.addEventListener("click", () => {
    if (menuItems.style.display == "flex") {
      menuItems.style.display = "none";
    } else {
      menuItems.style.display = "flex";
    }
  });
});
