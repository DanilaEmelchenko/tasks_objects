// Создай функцию-конструктор Car, которая будет иметь следующие свойства и методы:
// make — марка автомобиля
// model — модель автомобиля
// year — год выпуска
// getAge() — метод, который возвращает возраст автомобиля относительно текущего года

class Car implements Car {
  make: string;
  model: string;
  year: any;

  constructor(make: string, model: string, year: string|number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getAge(): string {
    const date: any = new Date();
    const res: number = date.getFullYear() - this.year;
    return `Возраст автомобиля составляет: ${res} лет`;
  }
}

const make: string = "Honda";
const model: string  = "Civic";
const year: number| string = 2008;

if (!make && !year && !model) {
  console.log("Нужно ввести все данные автомобиля");
} else if (!model && !make) {
  console.log("Нужно ввести год и марку автомобиля");
} else if (!make && !year) {
  console.log("Нужно ввести марку и год автомобиля");
} else {
  if (!model) console.log("Нужно ввести модель автомобиля");
  if (!make) console.log("Нужно ввести марку автомобиля");
  if (!year) console.log("Нужно ввести год автомобиля");
}

const carAge = new Car(make, model, year);
console.log(carAge.getAge());
