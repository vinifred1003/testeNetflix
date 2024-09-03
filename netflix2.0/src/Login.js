import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [response] = useState('');
  const navigate = useNavigate();

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangeSenha = (e) => setSenha(e.target.value);

  const entrar = async () => {
    try {
      const resp = await axios.post("http://localhost:3001/login", { email, senha });
      if (resp?.data?.sessionID) {
        sessionStorage.setItem("sessionID", resp.data.sessionID);
        sessionStorage.setItem("userAge", resp.data.age);
        navigate('home');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Login</h1>
        <label>Email:</label>
        <input type="email" value={email} onChange={onChangeEmail} placeholder="Digite seu email" />
        <label>Senha:</label>
        <input type="password" value={senha} onChange={onChangeSenha} placeholder="Digite sua senha" />
        <button className="entrar" onClick={entrar}>Entrar</button>
        <button className="cadastrar" onClick={""}>Cadastrar</button>
        {response && <div>{response}</div>}
      </header>
    </div>
  );
}

export default Login;
