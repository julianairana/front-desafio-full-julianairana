import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
  const { client, getClient } = useContext(AuthContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsEditOpen, setIsEditOpen] = useState(false);
  const [editSelect, setEditSelect] = useState(null);
  const [loading, setLoading] = useState(false);

  const [modalIsClientOpen, setIsClientOpen] = useState(false);
  const [clientSelect, setClientSelect] = useState(null);

  const [modalIsDeletOpen, setIsDeletOpen] = useState(false);
  const [deletSelect, setDeletSelect] = useState(null);

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

  function handleClientModal(client) {
    setClientSelect(client);
    setIsClientOpen(!modalIsClientOpen);
  }

  function handleDeletModal(client) {
    setDeletSelect(client);
    setIsDeletOpen(!modalIsDeletOpen);
  }



  async function EditContact(data) {
    try {
      setLoading(true);
      await api.patch(`/contacts/${data.id}`, data);
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


  async function EditClient(client) {
    try {
      setLoading(true);
      await api.patch(`/clients/${client.id}`, client);
      getClient();
      setIsClientOpen(false);
      toast.success("Cliente alterado com sucesso!");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const navigate = useNavigate();

  const deleteToken = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@TOKENCLIENT");
  };

  const redirectToLogin = () => {
    navigate("/");
  };

  async function DeletClient(id) {
    try {
      setLoading(true);

      await api.delete(`/clients/${id}`);
      getClient();

      toast.info("Cliente deletado com sucesso!");

      deleteToken();
      redirectToLogin();

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
        deletContact,
        clientSelect, 
        setClientSelect, 
        handleClientModal, 
        EditClient, 
        modalIsClientOpen, 
        setIsClientOpen,
        DeletClient,
        handleDeletModal,
        modalIsDeletOpen,
        setIsDeletOpen,
        setDeletSelect,
        deletSelect,
        deleteToken,
        redirectToLogin
        
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};