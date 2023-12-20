const targetWord = document.getElementById("targetWord");

window.onload = function() {
  const newWord = prompt("What is your name?");
  if (newWord) {
    targetWord.textContent = newWord;
  }
};
