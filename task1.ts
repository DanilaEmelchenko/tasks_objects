// Создай функцию-конструктор Book, которая будет создавать объекты книги со следующими свойствами:
// title — название книги
// author — автор книги
// year — год издания
// getSummary() — метод, который возвращает строку вида: "Название: Война и мир, Автор: Лев Толстой, Год издания: 1869"

class Book implements Book {
  title: string;
  author: string;
  year: string | number;

  constructor(title: string, author: string, year: string | number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary(): string {
    return `Название: ${this.title}, Автор: ${this.author}, Год издания: ${this.year}`;
  }
}

const title: string = "Война и мир";
const author: string = "Лев Толстой";
const year: string | number = 1869;

if (!author && !year && !title) {
  console.log("Нужно ввести все данные книги");
} else if (!title && !author) {
  console.log("Нужно ввести год и автора книги");
} else if (!author && !year) {
  console.log("Нужно ввести автора и год книги");
} else {
  if (!title) console.log("Нужно ввести название книги");
  if (!author) console.log("Нужно ввести автора книги");
  if (!year) console.log("Нужно ввести год книги");
}

const book = new Book(title, author, year);

console.log(book.getSummary());
