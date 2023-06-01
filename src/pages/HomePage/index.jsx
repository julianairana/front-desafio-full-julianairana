import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { HomeCards, HomeContainer, HomeHeader, HomeNavBar } from "./homePage";
import { Link } from "react-router-dom";
import { CardContact } from "../../components/CardContact";
import { ModalAddContact } from "../../components/ModalAddContact";
import { ContactContext } from "../../contexts/ContactContext";
import { ModalEditContact } from "../../components/ModalEditContact";
import logo from "../../img/logo.png";
import { ModalEditClient } from "../../components/ModalEditClient";

export const HomePage = () => {
    const { client, newLoading, modalIsEditClientOpen, handleEditClientModal, setEditClientSelect } = useContext(AuthContext);

    const { modalIsOpen, handleModal, modalIsEditOpen } = useContext(ContactContext);

 
    return (
      <>
      {
        newLoading && <div>Carregando...</div>
      }
      {
        client && (
      <HomeContainer>
        <HomeNavBar>
        <img src={logo} alt="" />
          <Link to={`/`} onClick={()=>{
            client.client = null;
            localStorage.removeItem("@TOKEN");
          }}>Sair</Link>
        </HomeNavBar>
        <HomeHeader>
          {client?.client &&(
            <h2>Olá, {client.client.name}</h2>
          )}
          <div className="divPerfil">
            <img className="imgPerfil" src={client.client.image} alt="" />
            <button type="button" onClick={() => {handleEditClientModal(); setEditClientSelect()}}>Ver perfil</button>
          </div>
       
        </HomeHeader>
        <HomeCards>
            <div>
            <h3>Contatos</h3>
            <button type="button" onClick={() => handleModal()}>+</button>
            </div>
            <div className="divUl">
            <ul>
              {
                client?.contacts.map((element) =>(
                  <CardContact key={element.id} element={element}/>
                ))
              }
            </ul>
            </div>
          </HomeCards>  
          {modalIsOpen && <ModalAddContact/>}
          {modalIsEditOpen && <ModalEditContact/>}
          {modalIsEditClientOpen && <ModalEditClient/>}
      </HomeContainer>
      )}
      </>
    )
  
}