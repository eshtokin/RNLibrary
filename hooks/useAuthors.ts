import { useQuery } from "@tanstack/react-query";
import { Author } from "../types";

async function getAllAuthors(): Promise<Author[]> {
  return new Promise((resolve, reject) => {
    try {
      const { authors } = require("../data/authors.json");
      resolve(authors);
    } catch (e) {
      reject(e);
    }
  });
}

function useAuthors() {
  const {
    data: authors,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["authors"],
    queryFn: getAllAuthors,
  });
  return { authors, isError, isLoading };
}

export default useAuthors;
