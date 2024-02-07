import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

type FilterProps<T> = {
  sortByOptions: {
    label: string;
    value: T;
  }[];
  handleSortBy: (property: T) => void;
};

const Filter = <T,>({ sortByOptions, handleSortBy }: FilterProps<T>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Сортировать по:</Text>
      <ScrollView horizontal contentContainerStyle={styles.scrollContent}>
        {sortByOptions.map((option) => (
          <TouchableOpacity
            key={String(option.value)}
            style={styles.button}
            onPress={() => handleSortBy(option.value)}
          >
            <Text style={styles.buttonText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    gap: 10,
    paddingVertical: 10,
    backgroundColor: "#f0f0f0",
  },
  scrollContent: {
    gap: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default Filter;
