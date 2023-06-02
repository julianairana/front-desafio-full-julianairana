import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext";
import { StyledCardContact } from "./cardContact";
import moment from "moment";
import "moment/locale/pt-br";

export const CardContact = ({element}) => {

  const dateTime = new Date(element.dateRegister)
  const dateFormated = moment(dateTime).format("DD/MM/YYYY")
  const timeFormated = moment(dateTime).format("HH:mm:ss")
  
  const { handleEditModal, deletContact, setEditSelect } = useContext(ContactContext);

  return (
    <StyledCardContact key={element.id}>
      <div className="divLi">
        <h2>Nome: <p>{element.fullName}</p></h2>
        <h2>E-mail: <p>{element.email}</p></h2>
        <h2>Número: <p>{element.phone}</p></h2>
        <h2>Gênero: <p>{element.gender}</p></h2>
        <h2>Data de registro: <p>{dateFormated}</p></h2>
        <h2>Hora: <p>{timeFormated}</p></h2>
      </div>
      <div className="divIcons">
       <button type="button" className="buttonEdit"  onClick={() => {handleEditModal(); setEditSelect(element)}}></button>
       <button className="buttonDelet" onClick={() => deletContact(element.id)}></button>
      </div>
    </StyledCardContact>
  );
};
