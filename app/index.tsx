import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  LayoutAnimation,
  Modal,
  TextInput,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useAuthors from "hooks/useAuthors";
import AuthorTableRow from "components/AuthorTableRow";
import { Author } from "types";

const AuthorsList = () => {
  const {
    authors,
    isLoading,
    isError,
    deleteAuthorByIdMutation,
    isFetching,
    editAuthorMutation,
  } = useAuthors();

  const [isEditModalVisible, setIsModalVisible] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState<Author>();

  if (isLoading) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Text style={styles.heading}>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Text style={styles.heading}>Error loading authors</Text>
      </View>
    );
  }

  return (
    <>
      <SafeAreaView style={styles.container} edges={["top"]}>
        {isFetching && (
          <View
            style={[
              StyleSheet.absoluteFillObject,
              {
                backgroundColor: "rgba(0, 100, 0, 0.8)",
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <Text style={[styles.heading, { color: "white" }]}>
              Loading....
            </Text>
          </View>
        )}
        <View style={{ paddingHorizontal: 16 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
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
          contentContainerStyle={{
            paddingBottom: 32,
            paddingHorizontal: 16,
          }}
        />
      </SafeAreaView>

      <Modal transparent animationType="slide" visible={isEditModalVisible}>
        <View
          style={{
            padding: 40,
            gap: 16,
            width: "100%",
            backgroundColor: "white",
            borderTopRightRadius: 18,
            borderTopLeftRadius: 18,
            position: "absolute",
            bottom: 0,
            borderTopEndRadius: 30,
            borderTopStartRadius: 30,
          }}
        >
          <TextInput
            placeholder={selectedAuthor?.firstName}
            onChangeText={(value: string) => {
              if (!selectedAuthor) return;
              setSelectedAuthor({ ...selectedAuthor, firstName: value });
            }}
          />
          <TextInput
            placeholder={selectedAuthor?.lastName}
            onChangeText={(value: string) => {
              if (!selectedAuthor) return;
              setSelectedAuthor({ ...selectedAuthor, lastName: value });
            }}
          />
          <TextInput
            placeholder={selectedAuthor?.middleName}
            onChangeText={(value: string) => {
              if (!selectedAuthor) return;
              setSelectedAuthor({ ...selectedAuthor, middleName: value });
            }}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Button title="Cancel" onPress={() => setIsModalVisible(false)} />
            <Button
              title="OK"
              onPress={() => {
                if (!selectedAuthor) return;
                setIsModalVisible(false);
                editAuthorMutation({ ...selectedAuthor });
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
  },
  authorItem: {
    marginBottom: 8,
  },
});

export default AuthorsList;
