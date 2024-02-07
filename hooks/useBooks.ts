import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAllBooks,
  deleteBookById,
  editBook,
  getSortedBooks,
} from "api/books";
import { sleep } from "utils/functions";
import { Book } from "types";

export type SortByOptions = keyof Book;

const QUERY_KEY_BOOK = "books";

function useBooks() {
  const client = useQueryClient();

  const {
    data: books,
    isError,
    isLoading,
    isFetching,
  } = useQuery<Book[]>({
    queryKey: ["books"],
    queryFn: async () => {
      await sleep(700);
      return getAllBooks();
    },
  });

  const invalidateQueriesWithDelay = () => {
    sleep(500);
    client.invalidateQueries({ queryKey: [QUERY_KEY_BOOK] });
  };

  const { mutateAsync: deleteBookByIdMutation } = useMutation({
    mutationKey: [QUERY_KEY_BOOK],
    mutationFn: deleteBookById,
    onSuccess: invalidateQueriesWithDelay,
  });

  const { mutateAsync: editBookMutation } = useMutation({
    mutationKey: [QUERY_KEY_BOOK],
    mutationFn: editBook,
    onSuccess: invalidateQueriesWithDelay,
  });

  const { mutateAsync: sortBooksBy } = useMutation({
    mutationKey: [QUERY_KEY_BOOK],
    mutationFn: getSortedBooks,
    onSuccess: invalidateQueriesWithDelay,
  });

  return {
    books,
    isError,
    isLoading,
    deleteBookByIdMutation,
    isFetching,
    editBookMutation,
    sortBooksBy,
  };
}

export default useBooks;
