import { FC } from "react";
import { FlatList, StyleSheet } from "react-native";
import AuthorListItem from "./AuthorListItem";
import { Author } from "types";

type AuthorListProps = {
  authors?: Author[];
  deleteAuthor: (id: number) => void;
  editAuthor: (item: Author) => void;
};
const AuthorList: FC<AuthorListProps> = ({
  authors,
  deleteAuthor,
  editAuthor,
}) => {
  return (
    <FlatList
      data={authors}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <AuthorListItem
          {...item}
          onPress={() => {}}
          onDelete={() => deleteAuthor(item.id)}
          onEdit={() => editAuthor(item)}
        />
      )}
      contentContainerStyle={styles.flatListContent}
    />
  );
};

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 32,
    paddingHorizontal: 16,
  },
});

export default AuthorList;
