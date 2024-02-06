import React, { FC } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Author } from "types";

type AuthorTableRowProps = {
  isLabel?: boolean;
  onPress: () => void;
  onDelete: () => void;
} & Omit<Author, "id">;

const AuthorTableRow: FC<AuthorTableRowProps> = ({
  firstName,
  lastName,
  middleName,
  onPress,
  onDelete,
  isLabel = false,
}) => {
  const textStyle = isLabel ? styles.labelText : styles.text;
  return (
    <Pressable style={styles.row} onPress={onPress}>
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
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: 60,
            gap: 10,
          }}
        >
          {!isLabel && (
            <>
              <Pressable onPress={() => console.log("edit: ", middleName)}>
                <EvilIcons name="pencil" size={24} color="black" />
              </Pressable>
              <Pressable onPress={onDelete}>
                <EvilIcons name="trash" size={24} color="black" />
              </Pressable>
            </>
          )}
        </View>
      </View>
    </Pressable>
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
