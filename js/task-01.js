const categories = document.querySelector('#categories').style.background ='linear-gradient(0deg, rgba(97,45,253,0.6363139005602241) 29%, rgba(34,193,195,1) 61%)';//знаходимо елементи на по ідентифікатору. вст background
console.log(`Number of categories: ${categories.children.length}`);//виводимо в консолі к-сть категорій, які знайшли на сторінці вик-ючи властивість children.length
console.log(" ");//для естетики в консолі

const items = document.querySelectorAll('.item');//обираємо всі елем з класом '.item'
items.forEach((item) => {//ітерація кожного елементу з класом ('.item')
   console.log(`Category: ${item.firstElementChild.textContent}`);//назви категорій
   console.log(`Elements: ${item.lastElementChild.children.length}`);//кіл-сть елементів
   console.log(" ");
});
