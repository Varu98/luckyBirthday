const birthdayInput = document.getElementById("birthdayDate");
const luckyInput = document.getElementById("luckyNo");
const form = document.getElementById("form");
const outputDiv = document.querySelector(".output-div");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const birthdayToString = birthdayInput.value.split("-").join("");
  let total = 0;
  for (const letter of birthdayToString) {
    total = total + Number(letter);
  }
  console.log(total);

  const luckyCheck = total % Number(luckyInput.value);
  console.log(luckyCheck);
  if (luckyCheck == 0) {
    outputDiv.style.display = "block";
    outputDiv.innerHTML = "Congratulations You Are Lucky";
  } else {
    outputDiv.style.display = "block";
    outputDiv.innerHTML = "Sorry Your Luck Did Not Favour You This Time";
  }
});
