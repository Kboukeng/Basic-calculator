function performCalculation(operation) {
    var firstNumber = document.getElementById("firstNumber").value;
    var secondNumber = document.getElementById("secondNumber").value;
  
    // Check if either input field is empty
    if (firstNumber === "" || secondNumber === "") {
      alert("Please enter both numbers before performing a calculation.");
      return;
    }
  
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
  
    var result;
  
    switch (operation) {
      case 'add':
        result = firstNumber + secondNumber;
        break;
      case 'subtract':
        result = firstNumber - secondNumber;
        break;
      case 'multiply':
        result = firstNumber * secondNumber;
        break;
      case 'divide':
        result = firstNumber / secondNumber;
        break;
    }
  
    document.getElementById("result").textContent = "Result: " + result;
  }
  
  function reset() {
    document.getElementById("firstNumber").value = "";
    document.getElementById("secondNumber").value = "";
    document.getElementById("result").textContent = "Result: ";
  }