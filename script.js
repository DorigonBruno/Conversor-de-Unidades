const inputNum = document.querySelector("#quant");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const btn = document.querySelector("button");
const resultElement = document.querySelector("#result");
const message = document.querySelector(".message");

function convert(event) {
  event.preventDefault();
  const fromValue = fromElement.value;
  const toValue = toElement.value;

  if (fromValue === toValue) {
    resultElement.value = inputNum.value;
    message.textContent = "";
    return;
  }

  let meters;
  switch (fromValue) {
    case "m":
      meters = inputNum.value;
      break;
    case "km":
      meters = inputNum.value * 1000;
      break;
    case "cm":
      meters = inputNum.value / 100;
      break;
    case "mm":
      meters = inputNum.value / 1000;
      break;
  }

  let result;
  switch(toValue){
    case "m":
      result = meters;
      break;
    case "km":
      result = meters / 1000;
      break;
    case "cm":
      result = meters * 100;
      break;
    case "mm":
      result = meters * 1000;
      break;
  }

  console.log(fromValue, toValue);
  console.log(meters, result);
}

btn.addEventListener("click", convert);
