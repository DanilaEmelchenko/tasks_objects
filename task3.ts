// Создай функцию-конструктор Calculator, которая будет создавать объекты с методами:
// add(a, b) — возвращает сумму чисел
// subtract(a, b) — возвращает разность чисел
// multiply(a, b) — возвращает произведение чисел
// divide(a, b) — возвращает частное чисел

class Calculator {
  add(a: number, b: number) {
    return a + b;
  }
  subtract(a: number, b: number) {
    return a - b;
  }
  multiply(a: number, b: number) {
    return a * b;
  }
  divide(a: number, b: number) {
    if (b === 0) return "Деление на ноль невозможно";
    return a / b;
  }
}

const calculator = new Calculator();

console.log(calculator.add(3, 2));
console.log(calculator.subtract(2, 2));
console.log(calculator.multiply(3, 2));
console.log(calculator.divide(2, 0));
