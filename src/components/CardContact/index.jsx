// import { useContext } from "react";
// import { ContactContext } from "../../contexts/ContactContext";
// import { ModalEdit } from "../ModalEditDelet";
import { StyledCardContact } from "./cardContact";


export const CardContact = ({ element }) => {
//   const { modalIsEditOpen, handleEditModal, setEditSelect } =
//     useContext(ContactContext);

  return (
    <StyledCardContact key={element.id}>
      <h3>{element.title}</h3>
      <div className="divSpan">
        <span>{element.status}</span>
        <button
          type="button"
          className="buttonTrash"
          onClick={() => {
            handleEditModal();
            setEditSelect(element);
          }}
        ></button>
      </div>
      {/* {modalIsEditOpen && <ModalEdit element={element} />} */}
    </StyledCardContact>
  );
};