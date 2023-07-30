const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientsItems = ingredients.map((ingredient) => {//map-ом перебираємо масив ingredients, ingredientsItems - новий масив
    const item = document.createElement('li');// для кожного інгр ств елемент
      item.textContent = ingredient; // текст елем = ingredient
      item.classList.add('js-item'); // на ЛІ всст клас('js-item')
      return item;
});

ingredientsList.append(...ingredientsItems);// всі елем з новост масиву ingredientsItems додаємо методом append (в кінець)до батьківського елемента ingredientsList

