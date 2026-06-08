const result = document.getElementById("result");

function appendValue(value) {
  if (result.value === "0" || result.value === "Error") {
    result.value = value;
  } else {
    result.value += value;
  }
}

function clearDisplay() {
  result.value = "0";
}

function appendRoot() {
  if (result.value === "0" || result.value === "Error") {
    result.value = "√";
  } else {
    result.value += "√";
  }
}

function calculate() {
  try {
    let expression = result.value;

    // Convert √9 into Math.sqrt(9)
    expression = expression.replace(/√(\d+(\.\d+)?)/g, "Math.sqrt($1)");

    let answer = Function("return " + expression)();

    if (!isFinite(answer)) {
      result.value = "Error";
    } else {
      result.value = answer;
    }
  } catch {
    result.value = "Error";
  }
}
