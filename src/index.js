function generateRecipe(event) {
  event.preventDefault();

  let timeElement = document.querySelector("#time");
  timeElement.innerHTML = `Total time: 10min`;

  let servingsElement = document.querySelector("#servings");
  servingsElement.innerHTML = `Servings: 3`;

  let ingredientsElement = document.querySelector("#ingredients");
  ingredientsElement.innerHTML = `<strong>Ingredients:</strong>
            <br />
            Raw rice - ½ cup
            <br />
            Milk - 2-½ cups
            <br />
            Salt - to taste`;

            let instructionsElement = document.querySelector("#instructions");
            instructionsElement.innerHTML = `<strong>Instructions:</strong>
            <br />
            1. boil pasta`;
}



let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
