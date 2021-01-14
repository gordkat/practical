let input;
let total = 0;
while (input !== null) {
  input = prompt("Введите число");
  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }
  input = Number(input);
  const notANumber = Number.isNaN(input);
  if (notANumber) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  total += input;
}
