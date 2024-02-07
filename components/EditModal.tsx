import React from "react";
import { TextInput } from "react-native";
import { Author } from "types";
import ModalActionButtons from "./ModalActionButtons";
import { SlideModal } from "./SlideModal";

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
  <SlideModal visible={isEditModalVisible}>
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
    <ModalActionButtons
      onCancelPress={() => setIsModalVisible(false)}
      onConfirmPress={() => {
        if (!selectedAuthor) return;
        setIsModalVisible(false);
        editAuthorMutation({ ...selectedAuthor });
      }}
    />
  </SlideModal>
);

export default EditModal;
