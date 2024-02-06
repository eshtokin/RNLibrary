import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  LayoutAnimation,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useAuthors from "hooks/useAuthors";
import AuthorTableRow from "components/AuthorTableRow";

const AuthorsList = () => {
  const { authors, isLoading, isError, deleteAuthorById } = useAuthors();

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
    <SafeAreaView style={styles.container} edges={["top"]}>
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
              deleteAuthorById(item.id);
            }}
          />
        )}
        contentContainerStyle={{
          paddingBottom: 32,
          paddingHorizontal: 16,
        }}
      />
    </SafeAreaView>
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
