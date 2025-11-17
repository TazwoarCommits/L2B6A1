const formatValue = (
  val: string | number | boolean
): string | number | boolean => {
  if (typeof val === "string") {
    return val.toUpperCase();
  } else if (typeof val === "number") {
    return val * 10;
  } else if (typeof val === "boolean") {
    return !val;
  } else {
    throw new Error(`${val} has invalid data type`);
  }
};

const getLength = (val: string | any[]): number => {
  if (typeof val === "string") {
    return val.length;
  } else if (Array.isArray(val)) {
    return val.length;
  } else {
    throw new Error(`${val} has invalid data type`);
  }
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    if (typeof this.name !== "string" || typeof this.age !== "number") {
      throw new Error("Invalid Data Type");
    }
    return `'Name : ${this.name} , Age : ${this.age}'`;
  }
}

type RatedBook = {
  title: string;
  rating: number;
};

const filterByRating = (books: RatedBook[]): RatedBook[] => {
  books.forEach((book) => {
    if (typeof book.rating !== "number") {
      throw new Error(`${book.title}'s rating must be a number`);
    }
  });

  return books.filter((book) => {
    if (book.rating < 0 || book.rating > 5) {
      throw new Error(`Rating of ${book.title} must be in range of 0 to 5`);
    }

    return book.rating >= 4;
  });
};

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: User[]): User[] => {
  users.forEach((user, idx) => {
    if (typeof user.id !== "number") {
      throw new Error(`Invalid data type in index ${idx}`);
    } else if (
      typeof user.name !== "string" ||
      typeof user.email !== "string"
    ) {
      throw new Error(`Invalid data type in index ${idx}`);
    } else if (typeof user.isActive !== "boolean") {
      throw new Error(`Invalid data type in index ${idx}`);
    }
  });

  return users.filter((user) => user.isActive === true);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  if (
    typeof book.title === "string" &&
    typeof book.author === "string" &&
    typeof book.publishedYear === "number" &&
    typeof book.isAvailable === "boolean"
  ) {
    console.log(
      `Title: ${book.title}, Author: ${book.author}, Published: ${
        book.publishedYear
      }, Available: ${book.isAvailable ? "Yes" : "No"}`
    );
  } else {
    throw new Error("Invalid Data Type");
  }
};





const getUniqueValues = (val1 : [any] , val2 : [any]) => {
  return(`Sorry`);
}




type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number | undefined;
};

const calculateTotalPrice = (products: Product[]) => {
   let total = 0;

  products.forEach((product: Product) => {
    const { name, price, quantity, discount = 0 } = product;
    if (
      typeof name === "string" &&
      typeof price === "number" &&
      typeof discount === "number" &&
      typeof quantity === "number"
    ) {
      const discountedPrice = price - (price * discount) / 100;
      total += discountedPrice * quantity;
     
    }
    else {
        throw new Error (`Invalid Data type`);    
    }

  });

  return total;

};


// =======================================

console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));

console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));

const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));