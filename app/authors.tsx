import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  LayoutAnimation,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useAuthors, { SortAuthorsByOptionType } from "hooks/useAuthors";
import AuthorTableRow from "components/AuthorTableRow";
import { Author } from "types";
import LoadingView from "components/LoadingView";
import ErrorView from "components/ErrorView";
import EditModal from "components/EditModal";

const AuthorsList = () => {
  const {
    authors,
    isLoading,
    isError,
    deleteAuthorByIdMutation,
    isFetching,
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

  const options: { label: string; value: SortAuthorsByOptionType }[] =
    Object.keys(authors![0]).map((k) => ({
      label: k,
      value: k as keyof Author,
    }));

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {isFetching && (
        <View style={[styles.absoluteFill, styles.loadingOverlay]}>
          <Text style={[styles.heading, styles.loadingText]}>Loading....</Text>
        </View>
      )}
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.heading}>Авторы</Text>
          <Pressable onPress={() => {}}>
            <Text>Добавить</Text>
          </Pressable>
        </View>
        <AuthorTableRow
          isLabel
          firstName="Имя"
          lastName="Фамилия"
          middleName="Отчество"
          onPress={() => {}}
          onDelete={() => {}}
          onEdit={() => {}}
        />
      </View>
      <FlatList
        data={authors}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <AuthorTableRow
            {...item}
            onPress={() => {}}
            onDelete={() => {
              LayoutAnimation.easeInEaseOut();
              deleteAuthorByIdMutation(item.id);
            }}
            onEdit={() => {
              setSelectedAuthor(item);
              setIsModalVisible(true);
            }}
          />
        )}
        contentContainerStyle={styles.flatListContent}
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
  centeredContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  absoluteFill: {
    ...StyleSheet.absoluteFillObject,
  },
  loadingOverlay: {
    backgroundColor: "rgba(0, 100, 0, 0.8)",
  },
  loadingText: {
    color: "white",
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flatListContent: {
    paddingBottom: 32,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default AuthorsList;
