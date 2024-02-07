import { FC } from "react";
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

type HeaderProps = {
  title: string;
  rightActionLabel: string;
  onRightActionPress: () => void;
};
const Header: FC<HeaderProps> = ({
  title,
  rightActionLabel,
  onRightActionPress,
}) => (
  <View style={styles.header}>
    <Text style={styles.heading}>{title}</Text>
    <TouchableOpacity onPress={onRightActionPress}>
      <Text>{rightActionLabel}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
export default Header;
