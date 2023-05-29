import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContainerModal } from "./modalAddContact";
import { modalAddSchema } from "./modalAddSchema";
import { createPortal } from "react-dom";
import { ContactContext } from "../../contexts/ContactContext";

export const ModalAddContact = () => {

    const { handleModal, AddContact, loading} = useContext(ContactContext);

    const {register, handleSubmit, reset, formState: { errors }} = useForm({
        mode: "onBlur",
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            gender: "",
          },
        resolver: yupResolver(modalAddSchema),
    });

    async function submit(data) {
        const information = { ...data };
        await AddContact(information);
        console.log(information);
        reset();
    }

const modalAddContact = (
<ContainerModal>
      <div
        className="divModal"
      >
        <div className="divModalHeader">
          <h2 className="modalTitle">Cadastrar Contato</h2>
          <button onClick={() => handleModal()} className="buttonCloseModal">
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
            classemail="modalInput"
            {...register("email")}
          />
           {errors.email?.message && <span>{errors.email.message}</span>}
           <label htmlFor="phone" className="modalLabel">
            Número
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Número"
            classphone="modalInput"
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
            {loading? "carregando": "Cadastrar Contato"}
          </button>
        </form>
      </div>
    </ContainerModal>
        )

        return (
            createPortal(modalAddContact, document.getElementById("addModal-root"))
        )
    }