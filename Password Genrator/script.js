const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEL = document.getElementById("uppercase");
const lowercaseEL = document.getElementById("lowercase");
const symbolsEL = document.getElementById("symbol");
const genrate = document.getElementById("genrate");
const clipboardEl = document.getElementById("clipboard");
const numberEL = document.getElementById("number");

const randomFuc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerHTML;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();

  document.execCommand("copy");
  textarea.remove();
  alert("password copied to clipboard");
});

genrate.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEL.checked;
  const hasUpper = uppercaseEL.checked;
  const hasNumber = numberEL.checked;
  const hasSymbol = symbolsEL.checked;

  resultEl.innerText = genratePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

function genratePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";

  const typesCount = lower + upper + number + symbol;

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return " ";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFuc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*><{}?<>";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
