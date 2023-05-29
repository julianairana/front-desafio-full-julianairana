import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { HomePage } from "./pages/HomePage";
import { ContactProvider } from "./contexts/ContactContext";

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/home" element={<ContactProvider>
        <HomePage/>
      </ContactProvider>}/>
      </Routes>    
  )}
  
export default App
