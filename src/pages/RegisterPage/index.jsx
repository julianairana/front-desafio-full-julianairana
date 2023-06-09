import { Register } from "./registerPage";
import { useForm } from "react-hook-form";
import logo from "../../img/peopleContact.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import InputMask from "react-input-mask";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RegisterPage = () => {

    const {registerClient} = useContext(AuthContext);
    const [loading] = useState(false);
  
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm({
      mode: "onBlur",
      defaultValues: {
        name: "",
        email: "",
        password: "",
        image: "",
        phone: "",
        gender: "",
      },
      resolver: yupResolver(registerSchema),
    });
  
    const submit = async (data) => {
      const dataNew = { ...data };
      await registerClient(dataNew);
      reset();
    };
  
    return (
      <>
        <Register>
          <div className="divLeft">
            <img src={logo} alt="" />
            <span className="spanText">Crie sua agenda virtual</span>
            <span className="spanText">E tenha os seus contatos, na palma da mão!</span>
          </div>
          <div className="divRight">
            <div className="divRegister">
            <h2>Cadastro</h2>
            <Link to={`/`}>Voltar</Link>
            </div>
            <form onSubmit={handleSubmit(submit)} noValidate>
              <label htmlFor="name">Nome</label>
              <input
                type="name"
                placeholder="Digite aqui seu nome"
                {...register("name")}
              />
              {errors.name?.message && <span>{errors.name.message}</span>}
  
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Digite aqui seu email"
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
  
              <label htmlFor="phone">Contato</label>
              <InputMask
                type="text" 
                mask="(99) 99999-9999"
                placeholder="Digite seu número"
                {...register("phone")}
              />
              {errors.phone?.message && <span>{errors.phone.message}</span>}
              <label htmlFor="gender">Gênero</label>
              <select id="gender" {...register("gender")}>
                <option value="Prefer not to say">Prefiro não dizer</option>
                <option value="male">
                  Masculino
                </option>
                <option value="female">
                  Feminino
                </option>
                <option value="no binary">
                  Não Binário
                </option>
              </select>
              {errors.gender?.message && (
                <span>{errors.gender.message}</span>
              )}
              <button type="submit" disabled={loading}>
                {loading ? "Cadastrando..." : "Cadastrar"}
              </button>
            </form>

          </div>
        </Register>
  
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </>
    );
  };