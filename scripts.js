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
