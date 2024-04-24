// script.js

// Function to fetch local news based on user's location
async function fetchLocalNews() {
    const locationInput = document.getElementById('locationInput').value;
    const newsContainer = document.getElementById('newsContainer');
    
    // Fetch news data based on location using a news API
    const apiKey = '4e2abbf6606c402eb6b63268921d0e55'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://newsapi.org/v2/everything?q=${locationInput}&apiKey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Clear previous news articles
        newsContainer.innerHTML = '';

        // Display news articles
        data.articles.forEach(article => {
            const articleElement = document.createElement('article');
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            `;
            newsContainer.appendChild(articleElement);
        });
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}
