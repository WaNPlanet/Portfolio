
// Ensure jQuery is loaded before this script.
var i = 0; // Current character index
var a = 0; // Current text index
var isBackspacing = false; // Backspacing state
var textArray = [
  "Developer.",
  "Graphics Designer.",
  "Data Analyst."
];

var speedTyping = 100; // Typing speed in ms
var speedErasing = 50; // Backspace speed in ms
var pauseDelay = 1000; // Pause before backspacing or typing

// Start the typing effect
typeWriter();

function typeWriter() {
  var dynamicText = $(".dynamic-text");

  if (!isBackspacing) {
    // Typing Mode
    if (i < textArray[a].length) {
      dynamicText.text(dynamicText.text() + textArray[a].charAt(i));
      i++;
      setTimeout(typeWriter, speedTyping);
    } else {
      isBackspacing = true; // Switch to backspacing after typing
      setTimeout(typeWriter, pauseDelay);
    }
  } else {
    // Backspacing Mode
    if (i > 0) {
      dynamicText.text(dynamicText.text().substring(0, dynamicText.text().length - 1));
      i--;
      setTimeout(typeWriter, speedErasing);
    } else {
      isBackspacing = false; // Switch to typing after backspacing
      a = (a + 1) % textArray.length; // Move to the next text in the array
      setTimeout(typeWriter, pauseDelay);
    }
  }
}
