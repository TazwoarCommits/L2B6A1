interface Book {
    title : string ;
    author : string ;
    publishedYear : number ;
    isAvailable : boolean
}

const printBookDetails = (book: Book) => {
  if ( typeof book.title === "string" && 
    typeof book.author === "string" && 
    typeof book.publishedYear === "number" && 
    typeof book.isAvailable === "boolean" ) { 
     console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`);
   } else { throw new Error("Invalid Data Type"); }
};

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);

// `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`