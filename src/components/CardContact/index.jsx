import { StyledCardContact } from "./cardContact";
import edit from "../../img/edit.png";
import trash from "../../img/trash.png";


export const CardContact = ({ element }) => {

  return (
    <StyledCardContact key={element.id}>
      <div className="divLi">
        <h2>Nome: <p>{element.fullName}</p></h2>
        <h2>E-mail: <p>{element.email}</p></h2>
        <h2>Número: <p>{element.phone}</p></h2>
        <h2>Gênero: <p>{element.gender}</p></h2>
        <h2>Data de registro: <p>{element.dateRegister}</p></h2>
      </div>
      <div className="divIcons">
        <img src={edit} alt="" />
        <img src={trash} alt="" />
      </div>
   
    </StyledCardContact>
  );
};
