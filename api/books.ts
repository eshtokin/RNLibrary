import { Book } from "types";
import BOOKS_MOCK from "data/books";

let books = BOOKS_MOCK.slice();

export async function getAllBooks(): Promise<Book[]> {
  return books;
}

export async function deleteBookById(id: number) {
  books = books.filter((book) => book.id !== id);
}

export async function editBook(book: Book) {
  books = books.map((existingBook) => {
    return existingBook.id === book.id ? book : existingBook;
  });
}

export async function getSortedBooks(sortBy: keyof Book) {
  books.sort((a, b) => {
    if (a[sortBy]! < b[sortBy]!) return -1;
    if (a[sortBy]! > b[sortBy]!) return 1;
    return 0;
  });
}
