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




type book = {
  title: string;
  rating: number;
};

const filterByRating = (books: book[]): book[] => {
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










