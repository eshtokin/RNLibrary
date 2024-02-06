import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllAuthors, deleteAuthorById, editAuthor } from "api/authors";
import { sleep } from "utils/functions";

function useAuthors() {
  const client = useQueryClient();

  const {
    data: authors,
    isError,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["authors"],
    queryFn: async () => {
      // simulate deley for receiving data
      await sleep(700);
      return getAllAuthors();
    },
  });

  const { mutateAsync: deleteAuthorByIdMutation } = useMutation({
    mutationKey: ["authors"],
    mutationFn: deleteAuthorById,
    onSuccess: () => {
      sleep(500);
      client.invalidateQueries({ queryKey: ["authors"] });
    },
  });

  const { mutateAsync: editAuthorMutation } = useMutation({
    mutationKey: ["authors"],
    mutationFn: editAuthor,
    onSuccess: () => {
      sleep(500);
      client.invalidateQueries({ queryKey: ["authors"] });
    },
  });

  return {
    authors,
    isError,
    isLoading,
    deleteAuthorByIdMutation,
    isFetching,
    editAuthorMutation,
  };
}

export default useAuthors;
