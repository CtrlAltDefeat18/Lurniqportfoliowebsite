// Typing animation
const typingText = [
  "Bridging the Gap in Education",
  "Empowering African Innovators",
  "Building a Better Future"
];
let typingIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function type() {
  if (typingElement && charIndex < typingText[typingIndex].length) {
    typingElement.textContent += typingText[typingIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (typingElement && charIndex > 0) {
    typingElement.textContent = typingText[typingIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    typingIndex = (typingIndex + 1) % typingText.length;
    setTimeout(type, 500);
  }
}

// Modal Elements
const modal = document.getElementById("bioModal");
const modalName = document.getElementById("modalName");
const modalRole = document.getElementById("modalRole");
const modalBio = document.getElementById("modalBio");
const closeModalBtn = document.getElementById("closeModal");

// Open modal with team member bio
function setupModalButtons() {
  document.querySelectorAll(".view-more-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const member = button.parentElement;
      modalName.textContent = member.getAttribute("data-name");
      modalRole.textContent = member.getAttribute("data-role");
      modalBio.textContent = member.getAttribute("data-bio");
      modal.style.display = "flex";
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden"; // Prevent scroll while modal open
    });
  });
}

// Close modal function
function closeModal() {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "auto";
}

document.addEventListener("DOMContentLoaded", () => {
  // Start typing animation if element exists
  if (typingElement) {
    type();
  }

  // Setup modal button click events
  setupModalButtons();

  // Close modal on close button click
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModal);
  }

  // Close modal on clicking outside modal content
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Close modal on Escape key press
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
      closeModal();
    }
  });
});

