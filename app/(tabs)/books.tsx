import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useBooks, { SortByOptions } from "hooks/useBooks";
import { Filter, LoadingView, ErrorView, Header, BookList } from "components";
import { Book } from "types";

const BookListScreen = () => {
  const { books, isLoading, isError, sortBooksBy } = useBooks();

  if (isLoading) {
    return <LoadingView />;
  }

  if (isError) {
    return <ErrorView />;
  }

  // generate options for filter based on book's keys
  const options: { label: string; value: SortByOptions }[] = Object.keys(
    books![0]
  ).map((k) => ({
    label: k,
    value: k as keyof Book,
  }));

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header
        title={"Книги"}
        rightActionLabel={"Добавить"}
        onRightActionPress={() => {}}
      />
      {/* Specify what type we use for filter */}
      <Filter<SortByOptions>
        sortByOptions={options}
        handleSortBy={sortBooksBy}
      />
      <BookList books={books} editBook={() => {}} deleteBook={() => {}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#f0f0f0",
  },
});

export default BookListScreen;
