// js ile yeni element elave etmek
/*const parentItem = document.querySelector(".parent__item");
const newListItem = document.createElement("li");
newListItem.className = "child__item";
newListItem.textContent = "masalli";
newListItem.style.color = "red";
parentItem.appendChild(newListItem);

console.log(newListItem);
*/
// js ile bir elementi basqasi ile deyisdirmek(replace)
/*const oldTitle = document.querySelector("h1");
const parentTitle = oldTitle.parentElement;
const newtitle = document.createElement("h2");
newtitle.textContent = "LAST TITLE";
parentTitle.replaceChild(newtitle, oldTitle);

console.log(newtitle);
*/
// js ile bir elementi silmek
// parentItem.remove();
// newtitle.remove();
// parentItem.removeChild(document.querySelectorAll(".child__item")[3]);

// addEventListiner

// const button = document.querySelector(".link");
// button.addEventListener("click", backgroundUptdate);
// button.addEventListener("dblclick", backgroundUptdate);
// button.parentElement.addEventListener("mouseover", backgroundItemReplace);
// button.parentElement.addEventListener("mouseleave", backgroundItemNone);

// function backgroundUptdate(e) {
//   button.parentElement.style.background = "red";
//   e.preventDefault();
// }
// function backgroundItemReplace(e) {
//   button.style.background = "blue";
//   e.preventDefault();
// }
// function backgroundItemNone(e) {
//   button.style.background = "none";
//   e.preventDefault();
// }
// button.parentElement.addEventListener("mousemove", getGradientColor);
// const appItem = document.createElement("p");
// button.parentElement.appendChild(appItem);
// console.log(appItem);

// function getGradientColor(e) {
//   let r = e.clientX;
//   let g = e.clientY;
//   let b = r + g;
//   appItem.textContent = `R:${r} G:${g} B:${b}`;
//   button.parentElement.style.background = `rgb(${r % 255},${g % 255},${
//     b % 255
//   })`;
//   e.preventDefault();
// }

// form eventleri

// const myForm = document.querySelector("#form");
// const nameInput = document.querySelector("#name");
// const citys = document.querySelector("#citys");
// // const title = document.querySelector("#title");
// // const desc = document.querySelector("#name");
// // myForm.addEventListener("submit", showEvent)
// // nameInput.addEventListener("keydown", showEvent);
// // nameInput.addEventListener("keyup", showEvent);
// // nameInput.addEventListener("focus", showEvent);
// // nameInput.addEventListener("blur", showEvent);
// // nameInput.addEventListener("cut", showEvent);
// // nameInput.addEventListener("paste", showEvent);
// // nameInput.addEventListener("input", showEvent);
// citys.addEventListener("change", showEvent);

// function showEvent(e) {
//   // title.textContent = desc.value;
//   console.log(e.target.value);
//   console.log("event name:" + e.type);
//   e.preventDefault();
// }

// local storage & session storage

// localStorage.setItem("fname", "ceyhun");
// localStorage.setItem("lname", "resulov");

// sessionStorage.setItem("fname", "ceyhun");
// sessionStorage.setItem("lname", "resulov");

const myForm = document.querySelector("#form");
const parentItem = document.querySelector(".parent__item");

const a = JSON.parse(localStorage.getItem("itemList"));
a.forEach((nameItem) => {
  const newItem = document.createElement("li");
  newItem.textContent = nameItem;
  parentItem.appendChild(newItem);
});

myForm.addEventListener("submit", creatNewItem);
function creatNewItem(e) {
  const newInput = document.querySelector("#name").value;
  let nameList;
  if (localStorage.getItem("itemList") === null) {
    nameList = [];
  } else {
    nameList = JSON.parse(localStorage.getItem("itemList"));
  }
  nameList.push(newInput);
  localStorage.setItem("itemList", JSON.stringify(nameList));
  const newItem = document.createElement("li");
  const a = JSON.parse(localStorage.getItem("itemList"));

  newItem.textContent = newInput;
  parentItem.appendChild(newItem);

  e.preventDefault();
}
