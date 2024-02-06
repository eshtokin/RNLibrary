import { Author } from "types";
import AUTHORS_MOCK from "data/authors";
let authors = AUTHORS_MOCK.slice();

export async function getAllAuthors(): Promise<Author[]> {
  return authors;
}

export async function deleteAuthorById(id: number) {
  authors = authors.filter((a) => a.id !== id);
}

export async function editAuthor(author: Author) {
  authors = authors.map((a) => {
    return a.id === author.id ? author : a;
  });
}
