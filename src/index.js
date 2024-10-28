function displayRecipe(response) {
  let recipeElement = document.querySelector("#recipe");
  recipeElement.innerHTML = response.data.answer;
}

function generateRecipe(event) {
  event.preventDefault();

  let ingredientInput = document.querySelector("#ingredientInput");
  let recipeTypeInput = document.querySelector("#recipeTypeInput");
  let dietaryCheckbox = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  let dietaryInput = Array.from(dietaryCheckbox).map((x) => x.value);

  let apiKey = `f9a47eo48c7db6t0bcbfca0c176bd333`;
  let prompt = `The user instructions are: Generate a ${recipeTypeInput.value} recipe using ${ingredientInput.value} that is ${dietaryInput}`;
  let context = `You are an experienced recipe writer. 
  Your mission is to generate a recipe following the user instructions.
  Write your answer using basic HTML only include the body part of HTML (but don't write body or html) and include 
  the name of the recipe in h2, the total time to prepare (title in p strong), the number of servings (title in p strong), the list of ingredients (title in h3 and ingredients in li) and the instructions (title in h3 and steps in ol)`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");

  new Typewriter("#recipe", {
    strings: [`Generating recipe...`],
    autoStart: true,
    loop: true,
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
