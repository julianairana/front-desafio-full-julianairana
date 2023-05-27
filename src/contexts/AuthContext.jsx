import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ newLoading, setNewLoading] = useState(true);

  const navigate = useNavigate();

  async function getUser() {
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
        setUser(response.data);
    }
    catch (error) {
        console.error(error);
    }
    finally  {
        setNewLoading(false);
    }
  }

  useEffect(() => {
    getUser();
    }, []);

  const loginUser = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/login", data);
      localStorage.setItem("@TOKEN", response.data.token);
      const { token, user: userResponse } = response.data;
      setUser(userResponse);
      localStorage.setItem("@TOKEN", token);
      toast.success("Login realizado com sucesso!");

      setTimeout(() => {
        navigate("/home");
      }, 3000);

    } catch (error) {
      toast.error("Login não realizado!");
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (data) => {
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
    <AuthContext.Provider value={{ loginUser, user, toast, loading, newLoading, setNewLoading, registerUser, getUser }}>
      {children}
    </AuthContext.Provider>
  );
}