import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContainerModal } from "./modalEditContact";
import { modalEditSchema } from "./modalEditSchema";
import { createPortal } from "react-dom";
import { ContactContext } from "../../contexts/ContactContext";
import InputMask from "react-input-mask";

export const ModalEditContact = () => {

    const { handleEditModal, EditContact, loading, editSelect} = useContext(ContactContext);

    const {register, handleSubmit, reset, formState: { errors }} = useForm({
        mode: "onBlur",
        defaultValues: {
            id: editSelect.id,
            fullName: editSelect.fullName,
            email: editSelect.email,
            phone: editSelect.phone,
            gender: editSelect.gender,
          },
        resolver: yupResolver(modalEditSchema),
    });

    async function submit(data) {
        const information = { ...data };
        await EditContact(information);
        console.log(information);
        reset();
    }

const editContactModal = (
<ContainerModal>
      <div className="divModal">
        <div className="divModalHeader">
          <h2 className="modalTitle">Editar Contato</h2>
          <button onClick={() => handleEditModal()} className="buttonCloseModal">
            X
          </button>
        </div>
        <form className="modalForm" onSubmit={handleSubmit(submit)} noValidate>
          <label htmlFor="fullName" className="modalLabel">
            Nome
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Nome"
            className="modalInput"
            {...register("fullName")}
          />
           {errors.fullName?.message && <span>{errors.fullName.message}</span>}
           <label htmlFor="email" className="modalLabel">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="modalInput"
            {...register("email")}
          />
           {errors.email?.message && <span>{errors.email.message}</span>}
           <label htmlFor="phone" className="modalLabel">
            Número
          </label>
          <InputMask
            type="text"
            mask="(99) 99999-9999"
            name="phone"
            placeholder="Número"
            className="modalInput"
            {...register("phone")}
          />
           {errors.phone?.message && <span>{errors.phone.message}</span>}
          <label htmlFor="gender" className="modalLabel">
            Selecionar Gênero
          </label>
          <select
            name="gender"
            id="gender"
            className="modalSelect"
            {...register("gender")}
          >
            <option value="not informed">Não informado</option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
            <option value="no binary">Não Binário</option>
          </select>
          {errors.gender?.message && (
              <span>{errors.gender.message}</span>
            )}
          <button type="submit" className="buttonRegisterModal" disabled={loading}>
            {loading? "carregando": "Editar Contato"}
          </button>
        </form>
      </div>
    </ContainerModal>
        )

        return (
            createPortal(editContactModal, document.getElementById("editModal-root"))
        )
    }