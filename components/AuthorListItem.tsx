import React, { FC } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Author } from "types";

type AuthorListItemProps = Author & {
  onPress?: () => void;
  onDelete: () => void;
  onEdit: () => void;
};

const AuthorListItem: FC<AuthorListItemProps> = ({
  id,
  firstName,
  lastName,
  middleName,
  onPress,
  onDelete,
  onEdit,
}) => (
  <TouchableOpacity style={styles.row} onPress={onPress} disabled={!onPress}>
    <Text
      style={styles.text}
      numberOfLines={1}
    >{`[${id}] ${lastName} ${firstName} ${middleName}`}</Text>
    <View style={styles.actionContainer}>
      <TouchableOpacity onPress={onEdit} style={styles.actionIconWrapper}>
        <EvilIcons name="pencil" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete} style={styles.actionIconWrapper}>
        <EvilIcons name="trash" size={24} color="black" />
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

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
  labelText: { fontSize: 20, fontWeight: "500" },
  text: {
    fontSize: 16,
    width: "80%",
  },
  actionContainer: {
    flexDirection: "row",
    width: 60,
    height: "100%",
    gap: 10,
  },
  actionIconWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AuthorListItem;
