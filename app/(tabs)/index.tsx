import React, { useState } from "react";
import { View, StyleSheet, LayoutAnimation, TextInput } from "react-native";
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
import CreateAuthorModal from "components/CreateAuthorModal";

const AuthorsScreen = () => {
  const {
    authors,
    isLoading,
    isError,
    deleteAuthorByIdMutation,
    editAuthorMutation,
    sortAuthorsMutation,
  } = useAuthors();

  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState<Author>();
  const [newAuthor, setNewAuthor] = useState<Author>();
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);

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
    setIsEditModalVisible(true);
  };

  const addAuthor = () => {
    setIsCreateModalVisible(true);
    setNewAuthor({
      id: new Date().getTime(),
      firstName: "",
      lastName: "",
      middleName: "",
    });

    // createAuthorMutation({
    //   firstName: "Aleksey",
    //   lastName: "Yeshtokin",
    //   middleName: "Aleksandrovich",
    // });
  };

  // generate options for filter based on author's keys
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
          handleSortBy={sortAuthorsMutation}
        />
      </View>
      <AuthorList
        authors={authors}
        deleteAuthor={deleteAuthor}
        editAuthor={editAuthor}
      />
      <EditModal
        isEditModalVisible={isEditModalVisible}
        setIsModalVisible={setIsEditModalVisible}
        selectedAuthor={selectedAuthor}
        setSelectedAuthor={setSelectedAuthor}
        editAuthorMutation={editAuthorMutation}
      />
      <CreateAuthorModal
        visible={isCreateModalVisible}
        newAuthor={newAuthor}
        setNewAuthor={setNewAuthor}
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
