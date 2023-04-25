const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients')
ingredients.forEach(function(ingredient) {
  const newLi = document.createElement('li');
  newLi.appendChild(document.createTextNode(ingredient));
  newLi.classList.add('item');
  ingredientsList.appendChild(newLi)
})
