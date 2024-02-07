import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Book } from "types";

const BookListItem: FC<Book> = ({ title, author, publisher, year }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.title}>Название: {title}</Text>
    <Text style={styles.author}>Автор: {author}</Text>
    <Text style={styles.publisher}>Издательство: {publisher}</Text>
    <Text style={styles.year}>Год: {year}</Text>
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
