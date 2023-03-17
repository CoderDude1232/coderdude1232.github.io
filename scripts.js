// Get references to DOM elements
const browseButton = document.querySelector('nav a[href="#browse"]');
const collectionsButton = document.querySelector('nav a[href="#collections"]');
const main = document.querySelector('main');

// Show some sample content when the "Browse" button is clicked
browseButton.addEventListener('click', () => {
  const section = document.createElement('section');
  section.innerHTML = `
    <h2>Browse Recipes</h2>
    <ul>
      <li><a href="#">Appetizers</a></li>
      <li><a href="#">Main Courses</a></li>
      <li><a href="#">Desserts</a></li>
      <li><a href="#">Drinks</a></li>
    </ul>
  `;
  main.innerHTML = '';
  main.appendChild(section);
});

// Show some sample content when the "Collections" button is clicked
collectionsButton.addEventListener('click', () => {
  const section = document.createElement('section');
  section.innerHTML = `
    <h2>Collections</h2>
    <ul>
      <li><a href="#">Healthy Recipes</a></li>
      <li><a href="#">Quick and Easy</a></li>
      <li><a href="#">Family Favorites</a></li>
      <li><a href="#">Seasonal Specialties</a></li>
    </ul>
  `;
  main.innerHTML = '';
  main.appendChild(section);
});

// Define a function to create a new recipe element
function createRecipe() {
  const featuredRecipes = document.querySelector(".featured-recipes");
  const newRecipe = document.createElement("li");
  newRecipe.innerHTML = "<img src='https://via.placeholder.com/300x200' alt='Recipe Image'><h3>New Recipe Title</h3>";
  featuredRecipes.querySelector("ul").appendChild(newRecipe);
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

