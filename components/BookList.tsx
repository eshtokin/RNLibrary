import { FlatList } from "react-native";
import { Book } from "types";
import BookListItem from "./BookListItem";

type BookListProps = {
  books?: Book[];
};
const BookList: React.FC<BookListProps> = ({ books }) => (
  <FlatList
    data={books}
    renderItem={({ item }) => <BookListItem {...item} />}
    keyExtractor={(item) => item.id.toString()}
  />
);

export default BookList;
