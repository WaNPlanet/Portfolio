const dynamicText = document.querySelector(".dynamic-text");
const words = ["Front-End Developer.", "Designer.", "Content Creator."]; // Add your words
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  dynamicText.textContent = currentWord.slice(0, charIndex) + "|";
  if (!isDeleting) {
    charIndex++;
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // Pause before deleting
      return;
    }
  } else {
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(typeEffect, 150); // Typing speed
}
typeEffect();
