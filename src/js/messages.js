const serverDir = "http://localhost/github/startbootstrap_frontend";
window.addEventListener("DOMContentLoaded", () => {
  //  creating the table
  const table = document.getElementById("table");

  table.innerHTML +=
    "<tr><th>Name</th><th>Number</th><th>Mail</th><th>Messages</th></tr>";

  fetch(`${serverDir}/apis/messages.php`)
    .then((response) => response.json())
    .then((data) => {
      for (var i = 0; i < data.length; i++) {
        table.innerHTML += `<tr><td>${data[i].user_name}</td><td>${data[i].user_number}</td><td>${data[i].user_mail}</td><td>${data[i].message}</td></tr>`;
      }
    });
});
