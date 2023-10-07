const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
let action = "+";

submitBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  const result = computeWithAction(input1, input2, action);
  printResult(result);
});

function computeWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);

  if (actionSymbol == "+") {
    return num1 + num2;
  } else if (actionSymbol == "-") {
    return num1 - num2;
  } else if (actionSymbol == "*") {
    return num1 * num2;
  } else if (actionSymbol == "/") {
    return num1 / num2;
  }
//  тернарный оператор
//   return actionSymbol == "+" ? num1 + num2 : num1 - num2
}

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
}

plusBtn.addEventListener("click", function () {
  action = "+";
});

minusBtn.addEventListener("click", function () {
  action = "-";
});

multiplyBtn.addEventListener("click", function () {
  action = "*";
});

divideBtn.addEventListener("click", function () {
  action = "/";
});
