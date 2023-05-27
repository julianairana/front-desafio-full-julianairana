import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { HomeCards, HomeContainer, HomeHeader, HomeNavBar } from "./homePage";
import { Link, Navigate } from "react-router-dom";
import { CardContact } from "../../components/CardContact";
// import { ContactContext } from "../../contexts/ContactContext";

export const HomePage = () => {
    const { user, newLoading } = useContext(AuthContext);
    // const { modalIsOpen, handleModal, contact } = useContext(ContactContext);
  
    if(newLoading) {
      return null;
    }
  
    return user? (
      <HomeContainer>
        <HomeNavBar>
          {/* <img src={logo} alt="" /> */}
          <Link to={`/`} onClick={()=>{
            user.user = null;
            localStorage.removeItem("@TOKEN");
          }}>Sair</Link>
        </HomeNavBar>
        <HomeHeader>
          <h2>Olá, {user.name} </h2>
          {/* <span>{user.course_module}</span> */}
        </HomeHeader>
        <HomeCards>
            <div>
            <h3>Contatos</h3>
            <button type="button" onClick={() => handleModal()}>+</button>
            </div>
            <div className="divUl">
            <ul>
              <li><h2>oi</h2></li>
              {/* {contact.map((element) =>  */}
             <CardContact key={element.id} element={element} />
            {/* // )} */}
            </ul>
            </div>
          </HomeCards>  
          {/* {modalIsOpen && <ModalTechnology/>} */}
      </HomeContainer>
    ): <Navigate to={"/"}/>
  
}