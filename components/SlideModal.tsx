import { FC, PropsWithChildren } from "react";
import { Modal, View, StyleSheet } from "react-native";

export const SlideModal: FC<PropsWithChildren & { visible: boolean }> = ({
  children,
  visible,
}) => (
  <Modal transparent animationType="slide" visible={visible}>
    <View style={styles.modalContainer}>{children}</View>
  </Modal>
);

const styles = StyleSheet.create({
  modalContainer: {
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
  },
});
