import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { modalEditClientSchema } from "./modalEditClientSchema";
import { createPortal } from "react-dom";
import { ContainerModal } from "./modalEditClient";
import { ContactContext } from "../../contexts/ContactContext";
import InputMask from "react-input-mask";

export const ModalEditClient = () => {

    const {handleClientModal, EditClient, loading, client, handleDeletModal } = useContext(ContactContext);

    const {register, handleSubmit, reset, formState: { errors }} = useForm({
        mode: "onBlur",
        defaultValues: {
            id: client.client.id,
            name: client.client.name,
            email: client.client.email,
            image: client.client.image,
            phone: client.client.phone,
            gender: client.client.gender,
          },
        resolver: yupResolver(modalEditClientSchema),
    });

    async function submit(data) {
        const information = { ...data };
        await EditClient(information);
        reset();
    }

const editClientModal = (
<ContainerModal>
      <div className="divModal">
        <div className="divModalHeader">
          <h2 className="modalTitle">Editar Cliente</h2>
          <button onClick={() => handleClientModal()} className="buttonCloseModal">
            X
          </button>
        </div>
        <form className="modalForm" onSubmit={handleSubmit(submit)} noValidate>
          <label htmlFor="name" className="modalLabel">
            Nome
          </label>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="modalInput"
            {...register("name")}
          />
           {errors.name?.message && <span>{errors.name.message}</span>}
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

              <label htmlFor="image" className="modalLabel">Imagem</label>
              <input
                type="url"
                name="image"
                placeholder="Coloque uma imagem"
                className="modalInput"
                {...register("image")}
              />
              {errors.image?.message && (
                <span>{errors.image.message}</span>
              )}

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
            <option value="Prefer not to say">Prefiro não dizer</option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
            <option value="no binary">Não Binário</option>
          </select>
          {errors.gender?.message && (
              <span>{errors.gender.message}</span>
            )}
          <button type="submit" className="buttonRegisterModal" disabled={loading}>
            {loading? "carregando": "Editar Cliente"}
          </button>
        </form>
          <button type="submit" className="buttonDeleteModal" onClick={() => {handleDeletModal()}}>Deletar conta</button>
      </div>
    </ContainerModal>
        )

        return (
            createPortal(editClientModal, document.getElementById("editClientModal-root"))
        )
    }