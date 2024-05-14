// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area
// fetch JavaScript objects representing specific elements in the DOM
document.addEventListener("DOMContentLoaded", function () {
  const inputTxt = document.getElementById("userInput1");
  const copyBtn = document.getElementById("copy");
  const outputDiv = document.querySelector(".output");

  // add an event listener on the target element
  copyBtn.addEventListener("click", handleInput);

  // callback function to handle event
  function handleInput() {
    outputDiv.textContent = inputTxt.value;
  }
});

// Exercise #2:
// when the user enters input text, copy the user input to the output area
// fetch JavaScript objects representing specific elements in the DOM
document.addEventListener("DOMContentLoaded", function () {
  const inputTxt2 = document.getElementById("userInput2");
  const outputP = document.querySelector("#inputEventExample > p");

  // add an event listener on the target element
  inputTxt2.addEventListener("input", handleInput);

  // callback function to handle event
  function handleInput() {
    outputP.textContent = userInput2.value;
  }
});
