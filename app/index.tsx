import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import useAuthors from "../hooks/useAuthors";
import AuthorTableRow from "../components/AuthorTableRow";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthorsList = () => {
  const { authors, isLoading, isError } = useAuthors();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error loading authors</Text>;
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={styles.heading}>Authors</Text>
        <AuthorTableRow
          isLabel
          firstName="Name"
          lastName="Sername"
          middleName="Middle"
        />
      </View>
      <FlatList
        data={authors}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponentStyle={{}}
        renderItem={({ item }) => <AuthorTableRow {...item} />}
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
