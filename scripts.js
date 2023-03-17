// Get references to DOM elements
const uploadButton = document.querySelector('nav a[href="#upload"]');
const uploadModal = document.querySelector('#upload-modal');
const closeModalButton = uploadModal.querySelector('button[type="button"]');
const uploadForm = uploadModal.querySelector('form');
const searchForm = document.querySelector('form.search');
const searchInput = searchForm.querySelector('input[type="search"]');
const searchResults = document.querySelector('#search-results');

// Show the upload modal when the "Upload" button is clicked
uploadButton.addEventListener('click', () => {
  uploadModal.classList.add('show');
});

// Hide the upload modal when the "Close" button is clicked
closeModalButton.addEventListener('click', () => {
  uploadModal.classList.remove('show');
});

// Submit the upload form when it's submitted
uploadForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // TODO: Handle form submission
  uploadModal.classList.remove('show');
});

// Perform a search when the search form is submitted
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value;
  // TODO: Perform search and display results
});

// Display search results
function displaySearchResults(results) {
  searchResults.innerHTML = '';
  if (results.length === 0) {
    searchResults.textContent = 'No results found.';
  } else {
    const ul = document.createElement('ul');
    results.forEach((result) => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = result.url;
      link.textContent = result.title;
      li.appendChild(link);
      ul.appendChild(li);
    });
    searchResults.appendChild(ul);
  }
}
