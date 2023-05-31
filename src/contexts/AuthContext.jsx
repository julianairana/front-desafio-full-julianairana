import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ newLoading, setNewLoading] = useState(true);

  const navigate = useNavigate();

  const loginClient = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/login", data);
      localStorage.setItem("@TOKEN", response.data.token);
      const { token, client: clientResponse } = response.data;
      setClient(clientResponse);
      localStorage.setItem("@TOKEN", token);
      toast.success("Login realizado com sucesso!");
      
      getClient();

      setTimeout(() => {
        navigate("/home")
      }, 5000);

    } catch (error) {
      toast.error("Login não realizado!");
    } finally {
      setLoading(false);
    }
  };

  async function getClient() {
    const tokenValidate = localStorage.getItem("@TOKEN");

    if(!tokenValidate) {
        setNewLoading(false);
        return;
    }

    else if(tokenValidate){
      navigate("/home")
    }
    api.defaults.headers.common["Authorization"] = `Bearer ${tokenValidate}`

    try {
        const response = await api.get(`/clients/${tokenValidate}`);
        setClient(response.data);
    }
    catch (error) {
        console.error(error);
    }
    finally  {
        setNewLoading(false);
    }
  }

  useEffect(() => {
    getClient();
    }, []);

  const registerClient = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/clients", data);
      toast.success("Conta criada com sucesso!");

      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ loginClient, client, toast, loading, newLoading, setNewLoading, registerClient, getClient }}>
      {children}
    </AuthContext.Provider>
  );
}