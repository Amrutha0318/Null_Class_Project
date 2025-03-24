const newsList = document.getElementById("newsList");

const newsArticles = [
  "Global stocks rally as inflation slows in key markets.",
  "Bitcoin surges past $60k amid renewed investor interest.",
  "Oil prices dip as demand outlook weakens.",
  "Fed hints at possible rate cuts later this year.",
  "Gold steady as traders weigh economic data.",
  "Tesla stock jumps after strong quarterly earnings.",
  "JP Morgan reports record profits, boosting bank sector.",
  "SEC tightens crypto regulations; altcoins react.",
  "Retail trading activity spikes amid market volatility.",
  "Nasdaq hits record high on tech stock surge."
];

function loadNewsFeed() {
  newsList.innerHTML = "";
  const shuffled = [...newsArticles].sort(() => 0.5 - Math.random());
  const selectedNews = shuffled.slice(0, 5); // Show 5 articles
  selectedNews.forEach(news => {
    const li = document.createElement("li");
    li.textContent = news;
    newsList.appendChild(li);
  });
}

// Load on page load
window.onload = loadNewsFeed;

// Auto refresh every 10 seconds
setInterval(loadNewsFeed, 10000);
