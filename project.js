
const playButton = document.getElementById("goAi")
const homepageSection = document.getElementById("homepage")
const vsAISection = document.getElementById("vsAI")

function showAiSection() {
  homepageSection.style.display = 'none';
  vsAISection.style.display = 'flex';
}

// FIX: Listen for the click eve
playButton.addEventListener("click", showAiSection);
