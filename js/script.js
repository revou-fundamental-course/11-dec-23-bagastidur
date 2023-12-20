const targetWord = document.getElementById("targetWord");

window.onload = function() {
  const newWord = prompt("What is your name?");
  if (newWord) {
    targetWord.textContent = newWord;
  }
};

const nameInput = document.getElementById("name")
const dobInput = document.getElementById("dob")
const submitButton = document.getElementById("submit")

nameInput.addEventListener("keyup", function(event){
    var fullName = nameInput.value
    if (fullName == "") {
        submitButton.disabled = true
    } else {
        submitButton.disabled = false
    }
});

let currentIndex = 0
const images = document.querySelectorAll(".sliding-image")
const totalImages = images.length 

function changeImage() {
    images[currentIndex].style.display = "none"
    currentIndex = (currentIndex + 1) % totalImages
    images[currentIndex].style.display = "block"
}

setInterval(changeImage, 2000)