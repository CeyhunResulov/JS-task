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

const button = document.querySelector(".link");
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
button.parentElement.addEventListener("mousemove", getGradientColor);
const appItem = document.createElement("p");
button.parentElement.appendChild(appItem);
console.log(appItem);

function getGradientColor(e) {
  let r = e.clientX;
  let g = e.clientY;
  let b = r + g;
  appItem.textContent = `R:${r} G:${g} B:${b}`;
  button.parentElement.style.background = `rgb(${r % 255},${g % 255},${
    b % 255
  })`;
  e.preventDefault();
}
