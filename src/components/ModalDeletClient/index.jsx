import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext";
import { ContainerModal } from "./modalDeletClient";
import { createPortal } from "react-dom";

export const ModalDeletClient = () => {

    const { client, handleDeletModal, DeletClient } = useContext(ContactContext);

const deletClientModal = (
<ContainerModal>
      <div className="divModal">
        <div className="divModalHeader">
          <h2 className="modalTitle">Deletar Cliente</h2>
          <button onClick={() => handleDeletModal()} className="buttonCloseModal">
            X
          </button>
        </div>
        <div className="modalForm">
        <h1 className="modalText">Você tem certeza que deseja excluir a sua conta?</h1>
        <div className="divButtons">
            <button type="submit" className="buttonDeleteModal"  onClick={() => DeletClient(client.client.id)}>Deletar</button>
            <button type="submit" className="buttonCancelModal" onClick={() => handleDeletModal()}>Cancelar</button>
        </div>
        </div>
      </div>
    </ContainerModal>
        )

        return (
            createPortal(deletClientModal, document.getElementById("deletClientModal-root"))
        )
    }