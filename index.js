const inputDiv = document.querySelector(".input-div");
const birthdayInput = document.getElementById("date");
const calcBtn = document.querySelector(".calc");
const luckyInput = document.getElementById("lucky-input");
const showDiv = document.querySelector(".show-lucky");

function calculateLucky() {
  const numIndate = parseInt(birthdayInput.value);

  console.log(numIndate);
}
// .match(/\d+/g)
