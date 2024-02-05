import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Author } from "../types";

type AuthorTableRowProps = {
  isLabel?: boolean;
} & Omit<Author, "id">;

const AuthorTableRow: FC<AuthorTableRowProps> = ({
  firstName,
  lastName,
  middleName,
  isLabel = false,
}) => {
  const textStyle = isLabel ? styles.labelText : styles.text;
  return (
    <View style={styles.row}>
      <View style={styles.cell}>
        <Text style={textStyle} numberOfLines={1}>
          {lastName}
        </Text>
      </View>
      <View style={styles.cell}>
        <Text style={textStyle} numberOfLines={1}>
          {firstName}
        </Text>
      </View>
      <View style={styles.cell}>
        <Text style={textStyle} numberOfLines={1}>
          {middleName}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 8,
  },
  cell: {
    flex: 1,
    justifyContent: "flex-start",
  },
  text: { fontSize: 16 },
  labelText: { fontSize: 20, fontWeight: "500" },
});

export default AuthorTableRow;
