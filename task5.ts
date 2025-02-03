// Создай объект store, который хранит информацию о товарах в магазине.
// Свойство products — массив объектов, где каждый объект представляет товар (название и цена).
// Метод addProduct(name, price) — добавляет новый товар в магазин.
// Метод getTotalValue() — возвращает общую стоимость всех товаров.

interface IProduct {
  title: string;
  price: number;
}

interface IStore {
  products: IProduct[];
  addProduct: (name: string, price: number) => IProduct[];
  getTotalValue: () => number;
}

const store: IStore = {
  products: [
    {
      title: "Монитор Acer Nitro",
      price: 11699,
    },
    {
      title: "Монитор Titan Army",
      price: 12699,
    },
  ],
  addProduct(name, price) {
    const newProduct = {
      title: name,
      price: price,
    };
    store.products.push(newProduct);
    return store.products;
  },
  getTotalValue() {
    return store.products.reduce((acc, item) => acc + item.price, 0);
  },
};

console.log(store.addProduct("Монитор Acer", 5000));
console.log(`Общая сумма всех товаров: ${store.getTotalValue()} рублей`);
