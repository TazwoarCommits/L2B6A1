{
  type Book = {
    title: string;
    rating: number;
  };

  const filterByRating = (books: Book[]): Book[] => {
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

