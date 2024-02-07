import { TextInput } from "react-native";
import { SlideModal } from "./SlideModal";
import { Author } from "types";
import ModalActionButtons from "./ModalActionButtons";

type CreateAuthorModalProps = {
  visible: boolean;
  newAuthor: Author | undefined;
  setNewAuthor: (author: Author) => void;
};
const CreateAuthorModal: React.FC<CreateAuthorModalProps> = ({
  visible,
  newAuthor,
  setNewAuthor,
}) => {
  return (
    <SlideModal visible={visible}>
      <TextInput
        placeholder="Фамилия"
        value={newAuthor?.lastName}
        onChangeText={(value) => {
          if (!newAuthor) return;
          setNewAuthor({ ...newAuthor, lastName: value });
        }}
      />
      <TextInput
        placeholder="Имя"
        value={newAuthor?.firstName}
        onChangeText={(value) => {
          if (!newAuthor) return;
          setNewAuthor({ ...newAuthor, firstName: value });
        }}
      />
      <TextInput
        placeholder="Отчество"
        value={newAuthor?.middleName}
        onChangeText={(value) => {
          if (!newAuthor) return;
          setNewAuthor({ ...newAuthor, middleName: value });
        }}
      />
      <ModalActionButtons onCancelPress={() => {}} onConfirmPress={() => []} />
    </SlideModal>
  );
};

export default CreateAuthorModal;
