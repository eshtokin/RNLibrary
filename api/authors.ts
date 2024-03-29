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

export async function getSortedAuthors(sortBy: keyof Author) {
  authors.sort((a, b) => {
    if (a[sortBy]! < b[sortBy]!) return -1;
    if (a[sortBy]! > b[sortBy]!) return 1;
    return 0;
  });
}

export async function createAuthor(author: Omit<Author, "id">) {
  const newId = new Date().getTime();
  authors.push({ id: newId, ...author });
}
