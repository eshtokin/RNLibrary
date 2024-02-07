import { FlatList } from "react-native";
import { Book } from "types";
import BookListItem from "./BookListItem";

type BookListProps = {
  books?: Book[];
  deleteBook: (id: number) => void;
  editBook: (book: Book) => void;
};
const BookList: React.FC<BookListProps> = ({ books, deleteBook, editBook }) => (
  <FlatList
    data={books}
    renderItem={({ item }) => (
      <BookListItem
        {...item}
        onDeletePress={deleteBook}
        onEditBookPress={editBook}
      />
    )}
    keyExtractor={(item) => item.id.toString()}
  />
);

export default BookList;
