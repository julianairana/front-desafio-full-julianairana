import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext";
import { StyledCardContact } from "./cardContact";


export const CardContact = ({element}) => {

  const { handleEditModal, deletContact } = useContext(ContactContext);

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
       <button className="buttonEdit" onClick={() => handleEditModal()}></button>
       <button className="buttonDelet" onClick={() => deletContact(element.id)}></button>
      </div>
   
    </StyledCardContact>
  );
};
