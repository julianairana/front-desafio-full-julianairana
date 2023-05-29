import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
  const { client, getClient } = useContext(AuthContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsEditOpen, setIsEditOpen] = useState(false);
  const [editSelect, setEditSelect] = useState(null);
  const [loading, setLoading] = useState(false);

  const contact = client?.contacts;

  async function AddContact(data) {
    try {
      setLoading(true);
      await api.post("/contacts", data);
      getClient();
      setIsOpen(false);
      toast.success("Contato criado com sucesso!");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  }

  function handleModal() {
    setIsOpen(!modalIsOpen);
  }

  function handleEditModal() {
    setIsEditOpen(!modalIsEditOpen);
  }

  async function EditContact(data) {
    try {
      setLoading(true);
      await api.put(`/contacts/${data.id}`, data);
      getClient();
      setIsEditOpen(false);
      toast.success("Contato alterado com sucesso!");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function deletContact(id) {
    try {
      setLoading(true);

      await api.delete(`/contacts/${id}`);
      getClient();

      toast.info("Contato removido com sucesso!");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }



  return (
    <ContactContext.Provider
      value={{
        handleModal,
        modalIsOpen,
        setIsOpen,
        AddContact,
        setLoading,
        loading,
        client,
        contact,
        EditContact,
        editSelect,
        setEditSelect,
        modalIsEditOpen,
        setIsEditOpen,
        handleEditModal,
        deletContact
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};