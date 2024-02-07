import React, { FC } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useBooks, { SortByOptions } from "hooks/useBooks";
import { Filter, LoadingView, ErrorView } from "components";
import { Book } from "types";

const BookListScreen = () => {
  const { books, isLoading, isError, sortBooksBy } = useBooks();

  if (isLoading) {
    return <LoadingView />;
  }

  if (isError) {
    return <ErrorView />;
  }

  // generate options for filter based on author
  const options: { label: string; value: SortByOptions }[] = Object.keys(
    books![0]
  ).map((k) => ({
    label: k,
    value: k as keyof Book,
  }));

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Specify what type we use for filter */}
      <Filter<SortByOptions>
        sortByOptions={options}
        handleSortBy={sortBooksBy}
      />
      <FlatList
        data={books}
        renderItem={({ item }) => <BookItem {...item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const BookItem: FC<Book> = ({ title, author, publisher, year }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.title}>Название: {title}</Text>
    <Text style={styles.author}>Автор: {author}</Text>
    <Text style={styles.publisher}>Издательство: {publisher}</Text>
    <Text style={styles.year}>Год: {year}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: "#f0f0f0",
  },
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

export default BookListScreen;
