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
  let name = document.forms["form-section"]["name"].value;
  let birthDate = document.forms["form-section"]["dob"].value;
  let gender = document.forms["form-section"]["gender"].value;
  let messages = document.forms["form-section"]["message"].value;
  let timeNow = new Date();

  let messageReturn = document.getElementById("returnText");

  if (messageReturn.classList == "returnText") {
    messageReturn.classList.toggle("returnText");
  }

  document.getElementById("time-api").innerHTML = timeNow;
  document.getElementById("sender-name").innerHTML = name;
  document.getElementById("sender-dob").innerHTML = birthDate;
  document.getElementById("sender-gender").innerHTML = gender;
  document.getElementById("sender-message").innerHTML = messages;

  return false;
}