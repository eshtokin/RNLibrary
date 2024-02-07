import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Book } from "types";

type BookListProps = Book & {
  onDeletePress: (id: number) => void;
  onEditBookPress: (book: Book) => void;
};
const BookListItem: FC<BookListProps> = ({
  onDeletePress,
  onEditBookPress,
  ...book
}) => (
  <View style={styles.itemContainer}>
    <Text style={styles.title}>Название: {book.title}</Text>
    <Text style={styles.author}>Автор: {book.author}</Text>
    <Text style={styles.publisher}>Издательство: {book.publisher}</Text>
    <Text style={styles.year}>Год: {book.year}</Text>
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  author: {
    fontSize: 16,
    marginBottom: 3,
    color: "#555",
  },
  publisher: {
    fontSize: 16,
    marginBottom: 3,
    color: "#555",
  },
  year: {
    fontSize: 16,
    marginBottom: 3,
    color: "#555",
  },
});

export default BookListItem;
