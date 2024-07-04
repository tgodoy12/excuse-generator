/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let excuse = generateExcuse();
  document.querySelector("#excuse").innerHTML = excuse;
};

function generateExcuse() {
  //declaring arrays with the who, what, when and action
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = [" ate", " peed", " crushed", " broke"];
  let what = [" my homework", " my phone", " the car"];
  let when = [
    " before the class",
    " when I was sleeping",
    " while I was exercising",
    " during my lunch",
    " while I was praying"
  ];

  //declaring an array with the arrays declared before
  let sentences = [who, action, what, when];

  
  let randomNumber = "";

  //the sentense will be concatenated in the excuse variable
  let excuse = "";

  //first for will be for the sentences array 
  //and second for will be for the content of each arrays
  for (let i = 0; i < sentences.length; i++) {
    for (let j = 0; j < 1; j++) {
      randomNumber = Math.floor(Math.random() * sentences[i].length);
      excuse += sentences[i][randomNumber];
    }
  }

  return excuse;
}
