function displayRecipe(response) {
  let recipeElement = document.querySelector("#recipe");
  recipeElement.innerHTML = response.data.answer;

  console.log(response.data.answer);
}

function generateRecipe(event) {
  event.preventDefault();

  let ingredientInput = document.querySelector("#ingredientInput");
  let recipeTypeInput = document.querySelector("#recipeTypeInput");

  let apiKey = `f9a47eo48c7db6t0bcbfca0c176bd333`;
  let prompt = `The user instructions are: Generate a ${recipeTypeInput.value} recipe using ${ingredientInput.value}`;
  let context = `You are an experienced recipe writer. Your mission is to generate a recipe following the user instructions.
  Write your answer using basic HTML only include the body part of HTML (but don't write body) and include the total time to prepare, the number of servings, the list of ingredients and the instructions`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);

  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
