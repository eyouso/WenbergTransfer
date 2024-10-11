document.addEventListener("DOMContentLoaded", function () {
  // Array of GIFs
  const gifs = [
    "assets/fact-gifs/fact-gif-1.gif",
    "assets/fact-gifs/fact-gif-2.gif",
    "assets/fact-gifs/fact-gif-3.gif",
    "assets/fact-gifs/fact-gif-4.gif",
    "assets/fact-gifs/fact-gif-5.gif",
  ];

  const truckGif = document.getElementById("truck-gif");
  let currentIndex = 0;

  function showGif(index) {
    truckGif.src = gifs[index];

    // Restart the animation
    truckGif.style.animation = "none";
    void truckGif.offsetWidth; // Trigger reflow to restart the animation
    truckGif.style.animation = "drive 15s linear forwards";

    // Move to the next GIF after the current one finishes (15 seconds total)
    setTimeout(function () {
      currentIndex = (currentIndex + 1) % gifs.length; // Loop back to the first GIF
      showGif(currentIndex); // Recursively show the next GIF
    }, 15000);
  }

  // Start the loop with the first GIF
  showGif(currentIndex);
});
