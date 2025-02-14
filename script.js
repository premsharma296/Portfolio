const textArray = ["Prem Sharma", "from Hyderabad"]; // Add more phrases if needed
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100; // Typing speed
const delay = 1500; // Delay before deleting
const textElement = document.querySelector(".text");

function typeEffect() {
  let currentText = textArray[textIndex];
  
  if (isDeleting) {
    textElement.innerHTML = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    textElement.innerHTML = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentText.length) {
    setTimeout(() => (isDeleting = true), delay);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textArray.length;
  }

  setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

document.addEventListener("DOMContentLoaded", () => {
  textElement.innerHTML = ""; // Clear initial text
  typeEffect();
});
// -----------------------------button-----------------
