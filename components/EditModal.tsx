import React from "react";
import { View, TextInput, Button, Modal, StyleSheet } from "react-native";
import { Author } from "types";

interface EditModalProps {
  isEditModalVisible: boolean;
  selectedAuthor?: Author;
  setIsModalVisible: (visible: boolean) => void;
  setSelectedAuthor: (author?: Author) => void;
  editAuthorMutation: (author: Author) => void;
}

const EditModal: React.FC<EditModalProps> = ({
  isEditModalVisible,
  setIsModalVisible,
  selectedAuthor,
  setSelectedAuthor,
  editAuthorMutation,
}) => (
  <Modal transparent animationType="slide" visible={isEditModalVisible}>
    <View style={styles.modalContainer}>
      <TextInput
        placeholder={selectedAuthor?.firstName}
        onChangeText={(value: string) => {
          if (!selectedAuthor) return;
          setSelectedAuthor({ ...selectedAuthor, firstName: value });
        }}
      />
      <TextInput
        placeholder={selectedAuthor?.lastName}
        onChangeText={(value: string) => {
          if (!selectedAuthor) return;
          setSelectedAuthor({ ...selectedAuthor, lastName: value });
        }}
      />
      <TextInput
        placeholder={selectedAuthor?.middleName}
        onChangeText={(value: string) => {
          if (!selectedAuthor) return;
          setSelectedAuthor({ ...selectedAuthor, middleName: value });
        }}
      />
      <View style={styles.modalButtons}>
        <Button title="Cancel" onPress={() => setIsModalVisible(false)} />
        <Button
          title="OK"
          onPress={() => {
            if (!selectedAuthor) return;
            setIsModalVisible(false);
            editAuthorMutation({ ...selectedAuthor });
          }}
        />
      </View>
    </View>
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
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default EditModal;
