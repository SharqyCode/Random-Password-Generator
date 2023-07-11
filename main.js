let generateBtn = document.querySelector("button");
let myInput = document.querySelector("input");
let copyBtn = document.querySelector("#copy");

generateBtn.addEventListener("click", () => {
  let alphaCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alphaSmall = "abcdefghijklmnopqrstuvwxyz";
  let specChars = "!@#$%^&*-_=+~";
  let randCap = alphaCap[Math.floor(Math.random() * alphaCap.length)];
  let randSmall = alphaSmall[Math.floor(Math.random() * alphaSmall.length)];
  let randSpec = specChars[Math.floor(Math.random() * specChars.length)];

  let pool = [alphaCap, alphaSmall, specChars];
  let pass = "";
  let passLength = 16;
  for (let i = 0; i < passLength; i++) {
    let currentType = pool[Math.floor(Math.random() * pool.length)];
    pass += currentType[Math.floor(Math.random() * currentType.length)];
  }
  myInput.value = pass;
});

copyBtn.addEventListener("click", () => {
  myInput.select();
  // myInput.setSelectionRange(0,9999)
  navigator.clipboard.writeText(myInput.value);
});
