// Typing animation
const typingText = ["Bridging the Gap in Education", "Empowering African Innovators", "Building a Better Future"];
let typingIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function type() {
    if (charIndex < typingText[typingIndex].length) {
        typingElement.textContent += typingText[typingIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = typingText[typingIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        typingIndex = (typingIndex + 1) % typingText.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (typingElement) {
        type();
    }
});
