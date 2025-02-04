// Создай объект textAnalyzer, который анализирует текст.
// Свойство text — строка текста
// Метод getWordCount() — возвращает количество слов в тексте
// Метод getCharacterCount() — возвращает количество символов (включая пробелы)

interface ITextAnalyzer {
  text: string;
  getWordCount: () => number;
  getCharacterCount: () => number;
}

const textAnalyzer: ITextAnalyzer = {
  text: "hello world hello",
  getWordCount() {
    return this.text.split(" ").length;
  },
  getCharacterCount() {
    return this.text.split("").length;
  },
};

console.log(`Колличество слов в тексте: ${textAnalyzer.getWordCount()}`);
console.log(
  `Колличество символов в тексте(включая пробелы): ${textAnalyzer.getCharacterCount()}`
);
