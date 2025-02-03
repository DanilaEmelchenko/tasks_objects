// Создай объект student со следующими свойствами:
// name — имя студента
// age — возраст студента
// grades — массив оценок
// Добавьте метод getAverageGrade(), который возвращает среднюю оценку студента.

interface IStudent {
  name: string;
  age: number;
  grades: number[];
  getAverageGrade: () => void;
}

const student: IStudent = {
  name: "Danila",
  age: 25,
  grades: [5, 3, 4, 5, 5, 4],

  getAverageGrade() {
    const res: number =
      this.grades.reduce((acc: number, item: number) => acc + item, 0) /
      this.grades.length;
    return res.toFixed(1);
  },
};

console.log(student.getAverageGrade());
