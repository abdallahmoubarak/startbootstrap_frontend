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

  // validation

  const sendBtn = document.getElementById("send-btn");
  const name = document.getElementById("name");
  const mail = document.getElementById("mail");
  const number = document.getElementById("number");
  const txtMsg = document.getElementById("txt-msg");
  const msg = document.getElementById("msg");

  sendBtn.addEventListener("click", () => {
    console.log(name.value.length);
    if (name.value.length < 5) {
      msg.innerHTML = "*Your name is not correct";
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
