

const MAX_RECIPE_NUMBER = 3;

let nbOfDices = parseInt(prompt("Combien de recettes veux-tu afficher ? (" + MAX_RECIPE_NUMBER + " max)"));

while (nbOfDices > MAX_DICE_NUMBER) {
   nbOfDices = parseInt(prompt("Combien de recettes veux-tu afficher ? (" + MAX_RECIPE_NUMBER + " max)"));
}


   const param = 1 'min';
   const param = 20 'max';
  

const getRecipes = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

console.log(getRecipes);

