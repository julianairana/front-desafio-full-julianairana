import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { HomeCards, HomeContainer, HomeHeader, HomeNavBar } from "./homePage";
import { Link, Navigate } from "react-router-dom";
import { CardContact } from "../../components/CardContact";
import { ModalAddContact } from "../../components/ModalAddContact";
import { ContactContext } from "../../contexts/ContactContext";
import { ModalEditContact } from "../../components/ModalEditContact";
import logo from "../../img/logo.png";
import { ModalEditClient } from "../../components/ModalEditClient";
import { ModalDeletClient } from "../../components/ModalDeletClient";
import { DownloadButton } from "../../components/Report";
import notContact from "../../img/notContact.png";

export const HomePage = () => {
    const { client, newLoading } = useContext(AuthContext);
    
    const { modalIsOpen, handleModal, modalIsEditOpen, modalIsClientOpen, handleClientModal, setClientSelect, modalIsDeletOpen } = useContext(ContactContext);

    if (newLoading) {
    return <div>Carregando...</div>;
  }

  if (!client) {
    return <Navigate to="/" />;
  }
 
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
          <Link to={`/`} onClick={() => {
            client.client = null;
            localStorage.removeItem("@TOKEN");
            localStorage.removeItem("@TOKENCLIENT");
          }}>Sair</Link>
        </HomeNavBar>
        <HomeHeader>
            <h2>Olá, {client.client.name}</h2>
          <div className="divPerfil">
            <img className="imgPerfil" src={client.client.image} alt="" />
            <button type="button" className="buttonPerfil" onClick={() => {handleClientModal(); setClientSelect(client.client)}}>Editar perfil</button>
          </div>
       
        </HomeHeader>
        <HomeCards>
            <div>
              <div className="divContacts">
            <h3>Contatos</h3>
            <DownloadButton/>
              </div>
            <button type="button" onClick={() => handleModal()}>+</button>
            </div>
            <div className="divUl">
            {client.contacts && client.contacts.length === 0 ? (
              <img src={notContact} className="notContact" alt=""/>
            ):(
            <ul>
              {
                client?.contacts.map((element) =>(
                  <CardContact key={element.id} element={element}/>
                  ))
                }
            </ul>
            )}
            </div>
          </HomeCards>  
          {modalIsOpen && <ModalAddContact/>}
          {modalIsEditOpen && <ModalEditContact/>}
          {modalIsClientOpen && <ModalEditClient/>}
          {modalIsDeletOpen && <ModalDeletClient/>}

      </HomeContainer>
      )}
      </>
    )
  
}