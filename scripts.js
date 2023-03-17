// Define a function to create a new recipe element
function createRecipe() {
  // Get the recipe details from the user
  const recipeName = prompt("Enter the name of the recipe:");
  const recipeDescription = prompt("Enter a brief description of the recipe:");
  const recipeSection = prompt("Enter the section where the recipe should be added:");

  // Find the section where the recipe should be added
  const section = document.querySelector(`.${recipeSection}`);

  // If the section exists, create a new recipe element and add it to the section
  if (section) {
    const newRecipe = document.createElement("li");
    newRecipe.innerHTML = `<img src='https://via.placeholder.com/300x200' alt='Recipe Image'><h3>${recipeName}</h3><p>${recipeDescription}</p>`;
    section.querySelector("ul").appendChild(newRecipe);
  } else {
    alert(`The section "${recipeSection}" does not exist.`);
  }
}

// Define a function to create a new recipe category element
function createCategory() {
  const browseRecipes = document.querySelector(".browse-recipes");
  const newCategory = document.createElement("li");
  newCategory.innerHTML = "<a href='#'>New Recipe Category</a>";
  browseRecipes.querySelector("ul").appendChild(newCategory);
}

// Get references to the button elements
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

// Add event listeners to each button
button1.addEventListener("click", createRecipe);
button2.addEventListener("click", createCategory);
