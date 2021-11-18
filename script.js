const addButton = document.querySelector(".addbtn");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let message = document.querySelector("h1");

addButton.addEventListener("click", () => {
  let inputValue = input.value;
  if (inputValue) {
    let createDiv = document.createElement("div");
    let li = document.createElement("li");
    let liButton = document.createElement("button");
    let buttonNode = document.createTextNode("X");
    liButton.appendChild(buttonNode);
    ul.appendChild(createDiv);
    createDiv.appendChild(li);
    li.innerText = inputValue;
    li.appendChild(liButton);
    input.value = "";

    liButton.addEventListener("click", function () {
      ul.removeChild(createDiv);
    });
  } else {
    message.innerText = "Write your first to-do work today.";
  }
});
