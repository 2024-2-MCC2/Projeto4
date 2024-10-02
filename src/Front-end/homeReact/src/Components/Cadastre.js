import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../AuthContext';
import Video from '../Components/img/v2.mp4'; // Certifique-se de que o caminho está correto

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const VideoContainer = styled.div`
  flex: 1;
  background-color: #000;
  position: relative;
  overflow: hidden;
`;

const VideoBg = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
`;
const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  max-width: 350px;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 1px 2px #0003;
`;
const InputForm = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: #000;
  border-radius: 5px;
  margin-bottom: 0.75rem;
  color: #fff;

  // Estiliza os ícones dentro do campo de entrada.
  svg {
    margin-right: 0.5rem;
    font-size: 1.5rem;
  }
`;

// Estiliza os campos de entrada de texto (nome, e-mail), definindo padding e cores do campo e texto.
const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: #000;
  border: none;
  color: #fff;
  border-radius: 5px;
  outline: none;

  // Define a cor do texto placeholder dentro dos campos de entrada.
  &::placeholder {
    color: #ccc;
  }
`;

const Button = styled.button`
  padding: 16px 20px;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: #046ee5;
  color: white;
  font-weight: 600;
  font-size: 16px;
`;

const Cadastre = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    // Validação para verificar se os campos estão preenchidos
    if (!email || !senha) {
      setError("Preencha todos os campos");
      return;
    }

    // Validação para garantir que a senha tenha ao menos 6 caracteres
    if (senha.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres");
      return;
    }

    // Tenta realizar o cadastro
    const res = signup(email, senha); // Verifica se há algum erro no processo de cadastro

    // Se houver erro, exibe a mensagem de erro
    if (res) {
      setError(res);
      return;
    }

    // Redireciona para a página de perfil após o cadastro com sucesso
    navigate("/perfil");
  };

  return (
      <MainContainer>
        <VideoContainer>
          <VideoBg autoPlay muted loop>
            <source src={Video} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </VideoBg>
        </VideoContainer>
        <LoginContainer>
    <Content>
      <h1>Cadastro</h1>
      <InputForm>
      <Input
        type="nome"
        placeholder="Digite seu Nome"
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
          setError(""); // Limpa o erro quando o usuário começa a digitar
        }}
      />
      </InputForm>
      <InputForm>
      <Input
        type="cpf"
        placeholder="Digite seu CPF"
        value={cpf}
        onChange={(e) => {
          setCPF(e.target.value);
          setError(""); // Limpa o erro quando o usuário começa a digitar
        }}
      />
      </InputForm>
      <InputForm>
      <Input
        type="telefone"
        placeholder="Digite seu Telefone"
        value={telefone}
        onChange={(e) => {
          setTelefone(e.target.value);
          setError(""); // Limpa o erro quando o usuário começa a digitar
        }}
      />
      </InputForm>
      <InputForm>
      <Input
        type="email"
        placeholder="Digite seu E-mail"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setError(""); // Limpa o erro quando o usuário começa a digitar
        }}
      />
      </InputForm>
      <InputForm>
      <Input
        type="password"
        placeholder="Digite sua Senha"
        value={senha}
        onChange={(e) => {
          setSenha(e.target.value);
          setError(""); // Limpa o erro quando o usuário começa a digitar
        }}
      />
      </InputForm>
      {/* Exibe o erro, se houver */}
      {error && <label style={{ color: "red" }}>{error}</label>}
      <Button onClick={handleSignup}>Cadastrar</Button>
    </Content>
    </LoginContainer>
    </MainContainer>
  )
};

export default Cadastre;
