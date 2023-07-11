let generateBtn = document.querySelector("button");
let myInput = document.querySelector("#passText");
let copyBtn = document.querySelector("#copy");
let lenInput = document.querySelector("#passLength");

generateBtn.addEventListener("click", () => {
  let alphaCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alphaSmall = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789";
  let specChars = "!@#$%^&*-_=+~";

  let pool = [alphaCap, alphaSmall, numbers, specChars];
  let pass = "";
  let passLength = Number(lenInput.value) | 10;
  if (passLength <= 30) {
    for (let i = 0; i < passLength; i++) {
      let currentType = pool[Math.floor(Math.random() * pool.length)];
      pass += currentType[Math.floor(Math.random() * currentType.length)];
    }
  } else {
    alert("Max password length: 30");
  }
  myInput.value = pass;
});

copyBtn.addEventListener("click", () => {
  myInput.select();
  // myInput.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(myInput.value);
});

lenInput.addEventListener("wheel", (e) => {
  e.preventDefault();
  e.stopPropagation();

  return false;
});
