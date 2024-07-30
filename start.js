
 // Initialize an array to store recent searches
let recentSearches = [];

// Function to add a search term to the array and remove duplicates
function addSearchTerm(term) {
    if (!recentSearches.includes(term)) {
        recentSearches.push(term);
        // You can limit the number of recent searches stored
        recentSearches = recentSearches.slice(-10); // Keep only the last 10 searches
    }
}

// Function to display recent searches
function displayRecentSearches() {
    const searchesContainer = $('#recentSearches');
    searchesContainer.empty(); // Clear previous searches

    // Loop through recent searches and create list items
    recentSearches.forEach(search => {
        const listItem = $('<li>');
        listItem.text(search);
        listItem.click(function () {
            $('#searchInput').val(search);
        });
        searchesContainer.append(listItem);
    });
}

// Add event listener to the search input
$('#searchInput').on('input', function () {
    const searchTerm = $(this).val();
    addSearchTerm(searchTerm);
    displayRecentSearches();
});