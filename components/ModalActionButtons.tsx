import { Button, View, StyleSheet } from "react-native";

type ModalActionButtonProps = {
  onCancelPress: () => void;
  onConfirmPress: () => void;
};
const ModalActionButtons: React.FC<ModalActionButtonProps> = ({
  onCancelPress,
  onConfirmPress,
}) => {
  return (
    <View style={styles.modalButtons}>
      <Button title="Cancel" onPress={onCancelPress} />
      <Button title="OK" onPress={onConfirmPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default ModalActionButtons;
