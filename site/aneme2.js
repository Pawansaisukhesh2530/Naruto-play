document.getElementById('upload-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('anime-title').value;
    const description = document.getElementById('anime-description').value;

    const animeList = document.querySelector('.anime-grid');
    const newAnimeCard = document.createElement('div');
    newAnimeCard.classList.add('anime-card');
    newAnimeCard.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
    
    animeList.appendChild(newAnimeCard);
    
    document.getElementById('upload-form').reset();
});
