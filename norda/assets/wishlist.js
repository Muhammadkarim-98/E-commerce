let text = JSON.parse(localStorage.getItem("item"));
const items = document.getElementById("items");
let count = document.querySelector('.pro-count');
count.innerHTML = `<span>${items.children.length}</span>`
console.log(items.children.length);

items.innerHTML += text;
