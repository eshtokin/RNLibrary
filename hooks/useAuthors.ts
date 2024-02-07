import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAllAuthors,
  deleteAuthorById,
  editAuthor,
  getSortedAuthors,
} from "api/authors";
import { Author } from "types";
import { sleep } from "utils/functions";

export type SortAuthorsByOptionType = keyof Author;

const QUERY_KEY_AUTHORS = "authors";

function useAuthors() {
  const client = useQueryClient();

  const {
    data: authors,
    isError,
    isLoading,
  } = useQuery({
    queryKey: [QUERY_KEY_AUTHORS],
    queryFn: async () => {
      // simulate deley for receiving data
      await sleep(700);
      return getAllAuthors();
    },
  });

  const invalidateQueriesWithDelay = () => {
    // simulate deley for receiving data
    sleep(500);
    client.invalidateQueries({ queryKey: [QUERY_KEY_AUTHORS] });
  };

  const { mutateAsync: deleteAuthorByIdMutation } = useMutation({
    mutationKey: [QUERY_KEY_AUTHORS],
    mutationFn: deleteAuthorById,
    onSuccess: invalidateQueriesWithDelay,
  });

  const { mutateAsync: editAuthorMutation } = useMutation({
    mutationKey: [QUERY_KEY_AUTHORS],
    mutationFn: editAuthor,
    onSuccess: invalidateQueriesWithDelay,
  });

  const { mutateAsync: sortAuthorsBy } = useMutation({
    mutationKey: [QUERY_KEY_AUTHORS],
    mutationFn: getSortedAuthors,
    onSuccess: invalidateQueriesWithDelay,
  });

  return {
    authors,
    isError,
    isLoading,
    deleteAuthorByIdMutation,
    editAuthorMutation,
    sortAuthorsBy,
  };
}

export default useAuthors;
