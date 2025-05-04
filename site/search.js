document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    if (query) {
        searchAnime(query);
    }
});

function searchAnime(query) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    // Mock data for demonstration
    const animeList = [
        { title: "Naruto" },
        { title: "Attack on Titan" },
        { title: "My Hero Academia" },
        { title: "One Piece" },
        { title: "Demon Slayer" },
    ];

    const results = animeList.filter(anime => anime.title.toLowerCase().includes(query.toLowerCase()));

    if (results.length > 0) {
        results.forEach(anime => {
            const div = document.createElement('div');
            div.textContent = anime.title;
            resultsDiv.appendChild(div);
        });
    } else {
        resultsDiv.textContent = 'No results found';
    }
}
