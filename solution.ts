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
