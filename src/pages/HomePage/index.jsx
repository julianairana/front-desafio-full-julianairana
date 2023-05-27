import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { HomeCards, HomeContainer, HomeHeader, HomeNavBar } from "./homePage";
import { Link } from "react-router-dom";

export const HomePage = () => {
    const { client, newLoading } = useContext(AuthContext);
  
    if(newLoading) {
      return null;
    }
  
    return (
      <HomeContainer>
        <HomeNavBar>
          {/* <img src={logo} alt="" /> */}
          <Link to={`/`} onClick={()=>{
            client.client = null;
            localStorage.removeItem("@TOKEN");
          }}>Sair</Link>
        </HomeNavBar>
        <HomeHeader>
        {client?.client &&(
          <h2>Olá, {client.client.name} </h2>
        )}
        </HomeHeader>
        <HomeCards>
            <div>
            <h3>Contatos</h3>
            <button type="button">+</button>
            </div>
            <div className="divUl">
            <ul>
              <li><h2>oi</h2></li>
            </ul>
            </div>
          </HomeCards>  
      </HomeContainer>
    )
  
}