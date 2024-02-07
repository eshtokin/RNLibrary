import { SortByOptions } from "hooks/useBooks";
import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

type FilterProps = {
  sortByOptions: { label: string; value: SortByOptions }[];
  handleSortBy: (property: SortByOptions) => void;
};

const Filter: React.FC<FilterProps> = ({ sortByOptions, handleSortBy }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Сортировать по:</Text>
      <ScrollView horizontal style={{}} contentContainerStyle={{ gap: 16 }}>
        {sortByOptions.map((option) => (
          <TouchableOpacity
            key={option.value}
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
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#f0f0f0",
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
