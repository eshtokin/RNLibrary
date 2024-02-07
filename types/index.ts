export type Author = {
  id: number;
  firstName: string;
  lastName: string;
  middleName?: string;
};

export type Book = {
  id: number;
  title: string;
  author: string;
  publisher: string;
  year: number | null;
};
