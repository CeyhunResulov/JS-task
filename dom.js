// js ile yeni element elave etmek
const parentItem = document.querySelector(".parent__item");
const newListItem = document.createElement("li");
newListItem.className = "child__item";
newListItem.textContent = "masalli";
newListItem.style.color = "red";
parentItem.appendChild(newListItem);

console.log(newListItem);

// js ile bir elementi basqasi ile deyisdirmek(replace)
const oldTitle = document.querySelector("h1");
const parentTitle = oldTitle.parentElement;
const newtitle = document.createElement("h2");
newtitle.textContent = "LAST TITLE";
parentTitle.replaceChild(newtitle, oldTitle);

console.log(newtitle);

// js ile bir elementi silmek
// parentItem.remove();
// newtitle.remove();
parentItem.removeChild(document.querySelectorAll(".child__item")[3]);
parentItem.removeChild(document.querySelectorAll(".child__item")[3]);
