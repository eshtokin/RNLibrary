export type Author = {
  id: number;
  firstName: string;
  lastName: string;
  middleName?: string;
};

export type Book = {
  id: number;
  title: string;
  author: Author;
  publisher: string;
  year: number;
};
