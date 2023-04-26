const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients')
const ingredientItems = ingredients.map(ingredient => {
  const newLi = document.createElement('li');
  newLi.classList.add('item');
  newLi.textContent = ingredient;
  return newLi
});

ingredientsList.append(...ingredientItems)
