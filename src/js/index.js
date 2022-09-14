const serverDir = "http://localhost/github/startbootstrap_frontend";
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
  var regex = /^[\w\.\-]+@([\w\-]+\.)+[a-zA-Z]+$/;

  sendBtn.addEventListener("click", () => {
    msg.innerHTML = "";
    console.log(name.value.length || !name.value);
    if (name.value.length < 5) {
      msg.innerHTML = "*Your name is not valid";
    }
    if (
      //   regex.test(mail.value) &
      (mail.value.indexOf("@") < 2) &
        (mail.value.length - mail.value.indexOf("@") < 5) ||
      !mail.value
    ) {
      msg.innerHTML += "<br/>*Your mail is not valid";
    }
    if (
      !(
        (number.value.startsWith("+96171") ||
          number.value.startsWith("+96170") ||
          number.value.startsWith("+96176")) &
          (number.value.length == 12) ||
        number.value.startsWith("+9613") & (number.value.length == 11)
      )
    ) {
      msg.innerHTML += "<br/>*Your number is not valid";
    }

    if (txtMsg.value.length <= 100) {
      msg.innerHTML += "<br/>*Your message should be more than 100 characters";
    }

    if (msg.innerHTML == "") {
      var formData = new FormData();
      formData.append("name", name.value);
      formData.append("mail", mail.value);
      formData.append("number", number.value);
      formData.append("message", txtMsg.value);

      fetch(`${serverDir}/apis/send.php`, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
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
