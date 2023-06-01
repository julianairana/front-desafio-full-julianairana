import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { modalEditClientSchema } from "./modalEditClientSchema";
import { createPortal } from "react-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ContainerModal } from "./modalEditClient";

export const ModalEditClient = () => {

    const {handleEditClientModal, EditClient, loading, editClientSelect } = useContext(AuthContext);

    const {register, handleSubmit, reset, formState: { errors }} = useForm({
        mode: "onBlur",
        defaultValues: {
            id: editClientSelect.id,
            name: editClientSelect.name,
            email: editClientSelect.email,
            password: editClientSelect.password,
            image: editClientSelect.image,
            phone: editClientSelect.phone,
            gender: editClientSelect.gender,
          },
        resolver: yupResolver(modalEditClientSchema),
    });

    async function submit(data) {
        const information = { ...data };
        await EditClient(information);
        console.log(information);
        reset();
    }

const editClientModal = (
<ContainerModal>
      <div className="divModal">
        <div className="divModalHeader">
          <h2 className="modalTitle">Editar Cliente</h2>
          <button onClick={() => handleEditClientModal()} className="buttonCloseModal">
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

           <label htmlFor="password">Senha</label>
              <input
                type="password"
                placeholder="Digite aqui sua senha"
                {...register("password")}
              />
              {errors.password?.message && <span>{errors.password.message}</span>}

              <label htmlFor="image">Imagem</label>
              <input
                type="url"
                placeholder="Coloque uma imagem"
                {...register("image")}
              />
              {errors.image?.message && (
                <span>{errors.image.message}</span>
              )}

           <label htmlFor="phone" className="modalLabel">
            Número
          </label>
          <input
            type="text"
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
      </div>
    </ContainerModal>
        )

        return (
            createPortal(editClientModal, document.getElementById("editClientModal-root"))
        )
    }