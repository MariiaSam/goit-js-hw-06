const categories = document.querySelector('#categories');
console.log(`Number of categories: ${categories.children.length}`);
console.log(" ");

const items = document.querySelectorAll('.item');
items.forEach((item) => {
   console.log(`Category: ${item.firstElementChild.textContent}`);
   console.log(`Elements: ${item.lastElementChild.children.length}`);
   console.log(" ");
});
