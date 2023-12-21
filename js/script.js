const targetWord = document.getElementById("targetWord");

window.onload = function () {
  const newWord = prompt("What is your name?");
  if (newWord) {
    targetWord.textContent = newWord;
  }
};

let currentIndex = 0
const images = document.querySelectorAll(".sliding-image")
const totalImages = images.length

function changeImage() {
  images[currentIndex].style.display = "none"
  currentIndex = (currentIndex + 1) % totalImages
  images[currentIndex].style.display = "block"
}

setInterval(changeImage, 2000);

const nameInput = document.getElementById("name")
const submitButton = document.getElementById("submit")

nameInput.addEventListener("input", () => {
  if (nameInput.value.trim() !== "") {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

function validateForm() {
  const textarea = document.getElementById("message");
  const textLength = textarea.value.trim().length;

  if (textLength < 10) {
    alert("Please enter at least 10 characters in the textarea.");
    textarea.focus(); 
    return false; 
  }

  return true; 
}

const form = document.getElementById("form-section");
form.addEventListener("submit", validateForm);
