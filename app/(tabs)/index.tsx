import React, { useState } from "react";
import { View, StyleSheet, LayoutAnimation } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useAuthors, { SortAuthorsByOptionType } from "hooks/useAuthors";
import { Author } from "types";
import {
  LoadingView,
  ErrorView,
  EditModal,
  Filter,
  AuthorList,
  Header,
} from "components";

const AuthorsScreen = () => {
  const {
    authors,
    isLoading,
    isError,
    deleteAuthorByIdMutation,
    editAuthorMutation,
    sortAuthorsBy,
  } = useAuthors();

  const [isEditModalVisible, setIsModalVisible] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState<Author>();

  if (isLoading) {
    return <LoadingView />;
  }

  if (isError) {
    return <ErrorView />;
  }

  const deleteAuthor = (id: number) => {
    LayoutAnimation.easeInEaseOut();
    deleteAuthorByIdMutation(id);
  };

  const editAuthor = (author: Author) => {
    setSelectedAuthor(author);
    setIsModalVisible(true);
  };

  const addAuthor = () => {};

  // generate options for filter based on author
  const options: { label: string; value: SortAuthorsByOptionType }[] =
    Object.keys(authors![0]).map((k) => ({
      label: k,
      value: k as keyof Author,
    }));

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.contentContainer}>
        <Header
          title={"Авторы"}
          rightActionLabel={"Добавить"}
          onRightActionPress={addAuthor}
        />
        {/* Specify what type we use for filter */}
        <Filter<SortAuthorsByOptionType>
          sortByOptions={options}
          handleSortBy={sortAuthorsBy}
        />
      </View>
      <AuthorList
        authors={authors}
        deleteAuthor={deleteAuthor}
        editAuthor={editAuthor}
      />
      <EditModal
        isEditModalVisible={isEditModalVisible}
        setIsModalVisible={setIsModalVisible}
        selectedAuthor={selectedAuthor}
        setSelectedAuthor={setSelectedAuthor}
        editAuthorMutation={editAuthorMutation}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  absoluteFill: {
    ...StyleSheet.absoluteFillObject,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
});

export default AuthorsScreen;
