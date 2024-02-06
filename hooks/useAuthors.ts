import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import getAllAuthors from "api/getAllAuthors";
import { sleep } from "utils/functions";
import { Author } from "types";

function useAuthors() {
  const [deletedId, setDeletedId] = useState<number[]>([]);

  const {
    data: authors,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["authors"],
    queryFn: async () => {
      // simulate deley for receiving data
      await sleep(1000);
      return getAllAuthors();
    },
    select: (data) => data.filter((a) => !deletedId.includes(a.id)),
  });

  const deleteAuthorById = (id: number) => {
    if (deletedId.includes(id)) return;
    setDeletedId((di) => [...di, id]);
  };

  const addNewAuthor = () => {};

  return { authors, isError, isLoading, deleteAuthorById, addNewAuthor };
}

export default useAuthors;
