import "../styles/auth.css";
import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e){
    e.preventDefault();
    const res = await api.post("/auth/login",{email,password});
    localStorage.setItem("token", res.data.token);
    navigate("/dashboard");
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={e=>setPassword(e.target.value)} />
      <button>Entrar</button>
    </form>
  );
}
