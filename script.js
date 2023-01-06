"use strict";

const array1 = [];
const numberOfProblemsGenerated = 25;
const setTimerButton = document.getElementById("setTimer");
const entireDivisionElement = document.getElementById("entire-div");
for (let i = 0; i <= numberOfProblemsGenerated; i++) {
  let divs = document.createElement("div");
  divs.classList.add("div-style");
  entireDivisionElement.appendChild(divs);
}
const divisionElements = document.querySelectorAll(".div-style");
const generateProblemsButton = document.getElementById("selectProblems");
const checkAnswersButton = document.querySelector(".checkanswers-button");
let numberOfCorrects = 0;
let intervalId;

const numberOfProblems = 113;
const timeDiv = document.getElementById("timeDiv");

const answers = [
  "b",
  "c",
  "d",
  "d",
  "a",
  "a",
  "d",
  "c",
  "484",
  "d",
  "c",
  "a",
  "e",
  "d",
  "c",
  "d",
  "e",
  "b",
  "13",
  "610",
  "e",
  "a",
  "a",
  "e",
  "d",
  "b",
  "9",
  "136",
  "d",
  "c",
  "e",
  "d",
  "c",
  "c",
  "d",
  "b",
  "h",
  "2161",
  "500",
  "c",
  "d",
  "c",
  "b",
  "d",
  "a",
  "a",
  "e",
  "e",
  "126",
  "c",
  "k",
  "m",
  "80",
  "d",
  "d",
  "e",
  "a",
  "420",
  "1261",
  "132",
  "2400",
  "28",
  "480",
  "6000000",
  "d",
  "c",
  "c",
  "c",
  "a",
  "d",
  "b",
  "d",
  "a",
  "e",
  "e",
  "d",
  "d",
  "c",
  "e",
  "6n-9",
  "040",
  "a",
  "e",
  "b",
  "b",
  "a",
  "e",
  "c",
  "d",
  "d",
  "112/125",
  "431",
  "139",
  "341",
  "c",
  "a",
  "a",
  "c",
  "b",
  "b",
  "d",
  "b",
  "e",
  "d",
  "a",
  "d",
  "107",
  "d",
  "c",
  "a",
  "b",
  "97",
  "d",
];

function openModal() {
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

console.clear();
console.log(array1);
let randomNumbers = [];

for (let j = 0; j < numberOfProblemsGenerated; j++) {
  let randomNumber = Math.trunc(Math.random() * numberOfProblems) + 1;
  while (1) {
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
      break;
    } else {
      randomNumber = Math.trunc(Math.random() * numberOfProblems) + 1;
    }
  }
}

console.log(randomNumbers);
for (let i = 0; i <= numberOfProblemsGenerated - 1; i++) {
  let image = document.createElement("img");
  image.src = `Questions/Q${randomNumbers[i]}.png`;
  image.classList.add("image");
  divisionElements[i].appendChild(image);
  let input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter your answer here!";
  input.classList.add("input-answer");
  divisionElements[i].appendChild(input);
  let replaceButton = document.createElement("button");
  replaceButton.textContent = "Replace Problem";
  replaceButton.classList.add("replace-button");
  divisionElements[i].appendChild(replaceButton);
}

checkAnswersButton.addEventListener("click", function () {
  let input = document.querySelectorAll(".input-answer");
  const matchingAnswers = [];
  for (let i = 0; i <= numberOfProblemsGenerated - 1; i++) {
    for (let j = 0; j <= numberOfProblemsGenerated - 1; j++) {
      matchingAnswers.push(answers[randomNumbers[j] - 1]);
    }
  }

  for (let i = 0; i <= numberOfProblemsGenerated - 1; i++) {
    if (input[i].value === matchingAnswers[i]) {
      numberOfCorrects++;
      let correct = document.createElement("div");
      correct.textContent = "Correct!";
      correct.classList.add("correct");
      divisionElements[i].appendChild(correct);
      let solution = document.createElement("img");
      solution.src = `Solutions/S${randomNumbers[i]}.png`;
      solution.classList.add("image");
      divisionElements[i].appendChild(solution);
    } else {
      let wrong = document.createElement("div");
      wrong.textContent = "Incorrect";
      wrong.classList.add("wrong");
      divisionElements[i].appendChild(wrong);
      let solution = document.createElement("img");
      solution.src = `Solutions/S${randomNumbers[i]}.png`;
      solution.classList.add("image");
      divisionElements[i].appendChild(solution);
    }
  }
  const corrects = document.createElement("div");
  corrects.textContent = `You got: ${numberOfCorrects}/${numberOfProblemsGenerated}`;
  corrects.classList.add("correct-statement");
  document.body.appendChild(corrects);
  clearInterval(intervalId);
  timeDiv.classList.add("hidden");
});

for (let i = 1; i <= numberOfProblems; i++) {
  array1.push(i);
}

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  intervalId = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.innerHTML = minutes + ":" + seconds;

    if (--timer < 0) {
      if (!document.querySelector(".time").classList.contains("hidden")) {
        openModal();
        let input = document.querySelectorAll(".input-answer");
        const matchingAnswers = [];
        for (let i = 0; i <= numberOfProblemsGenerated - 1; i++) {
          for (let j = 0; j <= numberOfProblemsGenerated - 1; j++) {
            matchingAnswers.push(answers[randomNumbers[j] - 1]);
          }
        }

        for (let i = 0; i <= numberOfProblemsGenerated - 1; i++) {
          if (input[i].value === matchingAnswers[i]) {
            numberOfCorrects++;
            let correct = document.createElement("div");
            correct.textContent = "Correct!";
            correct.classList.add("correct");
            divisionElements[i].appendChild(correct);
            let solution = document.createElement("img");
            solution.src = `Solutions/S${randomNumbers[i]}.png`;
            solution.classList.add("image");
            divisionElements[i].appendChild(solution);
          } else {
            let wrong = document.createElement("div");
            wrong.textContent = "Incorrect";
            wrong.classList.add("wrong");
            divisionElements[i].appendChild(wrong);
            let solution = document.createElement("img");
            solution.src = `Solutions/S${randomNumbers[i]}.png`;
            solution.classList.add("image");
            divisionElements[i].appendChild(solution);
          }
        }
        let corrects = document.createElement("div");
        corrects.textContent = `You got: ${numberOfCorrects}/${numberOfProblemsGenerated}`;
        corrects.classList.add("correct-statement");
        document.body.appendChild(corrects);
        document.querySelector(".time").classList.add("hidden");
      }
      const overlay = document.querySelector(".overlay");
      overlay.addEventListener("click", function () {
        const modal = document.querySelector(".modal");
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
      });
      const closeModalButton = document.querySelector(".close-modal");
      closeModalButton.addEventListener("click", function () {
        const modal = document.querySelector(".modal");
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
      });
      clearInterval(intervalId);
    }
  }, 1000);
}

setTimerButton.addEventListener("click", function () {
  var twentyFiveMinutes = 60 * 75,
    display = document.querySelector(".time");
  startTimer(twentyFiveMinutes, display);
});

const replaceButtons = document.querySelectorAll(".replace-button");
for (let i = 0; i <= numberOfProblemsGenerated - 1; i++) {
  replaceButtons[i].addEventListener("click", function () {
    let randomNumber = Math.trunc(Math.random() * numberOfProblems) + 1;
    while (1) {
      console.log(randomNumbers.includes(randomNumber));
      if (!randomNumbers.includes(randomNumber)) {
        let images = document.querySelectorAll(".image");
        images[i].remove();
        let image = document.createElement("img");
        image.src = `Questions/Q${randomNumber}.png`;
        image.classList.add("image");
        divisionElements[i].appendChild(image);
        randomNumbers[i] = randomNumber;
        break;
      } else {
        randomNumber = Math.trunc(Math.random() * numberOfProblems) + 1;
      }
    }
  });
}
