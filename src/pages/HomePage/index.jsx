import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { HomeCards, HomeContainer, HomeNavBar } from "./homePage";
import { Link } from "react-router-dom";
import { CardContact } from "../../components/CardContact";
import { ModalAddContact } from "../../components/ModalAddContact";
import { ContactContext } from "../../contexts/ContactContext";

export const HomePage = () => {
    const { client, newLoading } = useContext(AuthContext);
    const { modalIsOpen, handleModal } = useContext(ContactContext);

    if(newLoading) {
      return null;
    }
  
    return (
      <HomeContainer>
        <HomeNavBar>
        {client?.client &&(
          <h2>Olá, {client.client.name}</h2>
        )}
          <img className="imgPerfil" src={client.client.image} alt="" />
          <Link to={`/`} onClick={()=>{
            client.client = null;
            localStorage.removeItem("@TOKEN");
          }}>Sair</Link>
        </HomeNavBar>
        {/* <HomeHeader>
       
        </HomeHeader> */}
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
      </HomeContainer>
    )
  
}