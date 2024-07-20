function compareNumbers() {
  let num1 = prompt("Enter the first number:");
  let num2 = prompt("Enter the second number:");
  num1 = Number(num1);
  num2 = Number(num2);
  let result = (num1 === num2);
  alert(result);
}
compareNumbers();
