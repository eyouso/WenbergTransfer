let facts = [];
let currentIndex = 0;
let interval;

// Fetch the facts from the JSON file
fetch('/data/facts.json')  // Correct path for facts.json
  .then(response => response.json())
  .then(data => {
    facts = data;
    showFact(currentIndex);
    startAutoScroll();  // Start automatic scroll
  });

// Display the current fact
function showFact(index) {
  const factDisplay = document.getElementById('fact-display');
  factDisplay.textContent = facts[index].fact;
}

// Move to the next fact
function nextFact() {
  currentIndex = (currentIndex + 1) % facts.length;  // Loop back to the start
  showFact(currentIndex);
  resetAutoScroll();
}

// Move to the previous fact
function prevFact() {
  currentIndex = (currentIndex - 1 + facts.length) % facts.length;  // Loop to the last fact
  showFact(currentIndex);
  resetAutoScroll();
}

// Automatically scroll facts every 5 seconds
function startAutoScroll() {
  interval = setInterval(() => {
    nextFact();
  }, 10000);  // Change interval as needed (5000 ms = 5 seconds)
}

// Reset the auto scroll when manual navigation occurs
function resetAutoScroll() {
  clearInterval(interval);
  startAutoScroll();
}
