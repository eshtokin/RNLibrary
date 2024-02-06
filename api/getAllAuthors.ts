import { Author } from "types";

export default async function getAllAuthors(): Promise<Author[]> {
  try {
    const { authors } = require("../data/authors.json");
    return authors;
  } catch (e) {
    throw e;
  }
}
