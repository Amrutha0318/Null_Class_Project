const sentimentData = [
    { name: "Tesla Inc.", sentiment: "Neutral" },
    { name: "Apple Inc.", sentiment: "Negative" },
    { name: "Bitcoin", sentiment: "Positive" },
    { name: "Gold", sentiment: "Neutral" },
    { name: "Amazon.com", sentiment: "Positive" },
    { name: "Meta Platforms", sentiment: "Negative" },
    { name: "NVIDIA Corp.", sentiment: "Positive" },
    { name: "Crude Oil", sentiment: "Neutral" }
  ];
  
  const colors = {
    Positive: "green",
    Negative: "red",
    Neutral: "gray"
  };
  
  const list = document.getElementById("sentimentList");
  const chartCanvas = document.getElementById("sentimentChart");
  const toggleModeBtn = document.getElementById("toggleMode");
  
  let chart;
  
  function renderSentiments() {
    list.innerHTML = "";
    sentimentData.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name}: ${item.sentiment}`;
      li.style.color = colors[item.sentiment];
      list.appendChild(li);
    });
  }
  
  function renderChart() {
    const counts = { Positive: 0, Negative: 0, Neutral: 0 };
    sentimentData.forEach(item => counts[item.sentiment]++);
  
    if (chart) chart.destroy();
  
    chart = new Chart(chartCanvas, {
      type: "bar",
      data: {
        labels: Object.keys(counts),
        datasets: [{
          label: "Sentiment Distribution",
          data: Object.values(counts),
          backgroundColor: Object.keys(counts).map(sentiment => colors[sentiment])
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
  
  document.getElementById("refreshBtn").addEventListener("click", () => {
    // Randomize sentiments
    sentimentData.forEach(item => {
      const sentiments = ["Positive", "Negative", "Neutral"];
      item.sentiment = sentiments[Math.floor(Math.random() * sentiments.length)];
    });
    renderSentiments();
    renderChart();
  });
  
  toggleModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  
  renderSentiments();
  renderChart();
  