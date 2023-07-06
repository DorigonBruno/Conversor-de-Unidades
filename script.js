const inputNum = document.querySelector("#quant");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const btn = document.querySelector("button");
const resultElement = document.querySelector("#result");
const messageElement = document.querySelector(".message");

function convert(event) {
  event.preventDefault();
  const fromValue = fromElement.value;
  const toValue = toElement.value;
  const input = inputNum.value;

  if (fromValue === toValue) {
    resultElement.value = input;
    message.textContent = "";
    return;
  }

  let meters;
  switch (fromValue) {
    case "m":
      meters = input;
      break;
    case "km":
      meters = input * 1000;
      break;
    case "cm":
      meters = input / 100;
      break;
    case "mm":
      meters = input / 1000;
      break;
  }

  let result;
  switch (toValue) {
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

  resultElement.value = result;

  const fromLabel = fromElement.options[fromElement.selectedIndex].text;
  const toLabel = toElement.options[toElement.selectedIndex].text;

  const message = `${input} ${fromLabel} equivalem a ${result} ${toLabel}`;

  messageElement.textContent = message;

  return;
}

btn.addEventListener("click", convert);
