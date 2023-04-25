const list = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${list.length}`);

list.forEach ((category) => {
let title = category.querySelector('h2').textContent;
let text = category.querySelectorAll('li').length;
console.log(`Category: ${title}`);
console.log(`Elements: ${text}`);
})