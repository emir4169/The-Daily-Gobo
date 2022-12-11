var input = document.createElement("input");
var reason = document.createElement("input");
input.type = "text";
input.placeholder = "username";
inputwarn.type = "text";
inputwarn.placeholder = "Reason if giving a warning.";
var btn1 = document.createElement("button");
btn1.addEventListener("click", async function () {
  var response = await fetch(
    "/writer/" + document.querySelector("input").value + "/"
  );
  var data = await response.json();
  alert(data.status);
});
btn1.textContent = "Make Writer";
var btn2 = document.createElement("button");
btn2.addEventListener("click", async function () {
  var response = await fetch(
    "/mod/" + document.querySelector("input").value + "/"
  );
  var data = await response.json();
  alert(data.status);
});
btn2.textContent = "Make Moderator";
var btn3 = document.createElement("button");
btn3.addEventListener("click", async function () {
  var reason1 = prompt("what is the warning for? (Only kept incase of issues.)");
  if (document.querySelector("inputwarn").value) {
    var data = { user: document.querySelector("input").value, warning: document.querySelector("inputwarn").value };
    var response = await fetch("/warn/", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    var data = await response.text();
    alert("complete");
  } else {
    alert("cancelled");
  }
});
btn3.textContent = "Warn";
var div = document.createElement("div");
div.appendChild(input);
div.appendChild(reason);
div.appendChild(btn1);
div.appendChild(btn2);
div.appendChild(btn3);

document
  .querySelector("#view")
  .appendChild(createBox({ title: "Admin Panel", content: div }));
