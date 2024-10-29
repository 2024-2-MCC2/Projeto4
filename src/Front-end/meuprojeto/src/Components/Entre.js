import React, { useState } from 'react'; // Importa React e o hook useState
import { Link, useNavigate } from 'react-router-dom'; // Importa Link e useNavigate para navegação entre rotas
import styled from 'styled-components'; // Importa styled-components para estilização do componente
import { useAuth } from '../AuthContext'; // Importa o contexto de autenticação personalizado
import { MdOutlineEmail } from "react-icons/md"; // Importa ícone de e-mail
import { RiLockPasswordLine } from "react-icons/ri"; // Importa ícone de senha

const MainContainer = styled.div`
  display: flex;
  margin-left: 70px;
  margin-right: 70px;
  align-items: center;
  justify-content: center; // Centraliza os itens horizontalmente
  padding: 20px;
  margin-bottom: 20px;
`;

// Estiliza o conteúdo exibido no contêiner (formulário de login/saída)
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px; // Espaçamento entre os itens
  width: 100%;
  max-width: 350px; // Largura máxima do conteúdo
  background-color: white; // Fundo branco
  padding: 20px;
  border-radius: 5px; // Bordas arredondadas
  box-shadow: 0 1px 2px #0003; // Sombra leve ao redor
`;

// Estiliza cada campo de entrada com um ícone
const InputForm = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: #000; // Fundo preto
  border-radius: 5px;
  margin-bottom: 0.75rem;
  color: #fff; // Texto branco
  position: relative; // Necessário para o botão de alternar senha
  svg {
    margin-left: 0.5rem;
    font-size: 1.5rem; // Tamanho do ícone
  }
`;

// Estiliza os campos de entrada (e-mail e senha)
const Input = styled.input`
  width: 100%;
  padding: 8px 90px; // Definição do espaço interno
  background: #000; // Fundo preto
  border: none;
  color: #fff; // Texto branco
  border-radius: 5px;
  outline: none;
  &::placeholder {
    color: #ccc; // Cor do placeholder
  }
`;

const ToggleButton = styled.button`
  position: absolute; // Botão de alternar visibilidade da senha
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  background-color: black;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  padding: 0;
`;

// Estiliza o botão de login
const Button = styled.button`
  padding: 16px 20px; // Preenchimento interno do botão
  border: none; // Sem borda
  border-radius: 5px; // Bordas arredondadas
  width: 100%; // Botão ocupa toda a largura
  cursor: pointer;
  background-color: #046ee5; // Cor de fundo do botão
  color: white; // Texto branco
  font-weight: 600; // Peso da fonte
  font-size: 16px; // Tamanho da fonte
`;

// Componente funcional de login
const Entre = () => {
  const { signin } = useAuth(); // Obtém a função de login do contexto de autenticação
  const navigate = useNavigate(); // Hook para navegação entre páginas
  const [email, setEmail] = useState(""); // Estado para armazenar o email
  const [senha, setSenha] = useState(""); // Estado para armazenar a senha
  const [error, setError] = useState(""); // Estado para armazenar mensagens de erro
  const [showSenha, setShowSenha] = useState(false); // Estado para gerenciar a visibilidade da senha.

  const togglePasswordVisibility = () => {
    setShowSenha(!showSenha); // Alterna a visibilidade da senha.
  };

  const handleLogin = () => {
    if (!email || !senha) {
      setError("Preencha todos os campos"); // Exibe erro se algum campo estiver vazio
      return;
    }
    const res = signin(email, senha); 
    if (res) {
      setError(res); // Exibe o erro retornado
      return;
    }
    navigate("/perfil"); // Navega para a página de perfil após login bem-sucedido
  };

  // Renderização do componente
  return (
    <MainContainer>
      <Content>
        <h1>SISTEMA DE LOGIN</h1> {/* Título do formulário */}
        <InputForm>
          <MdOutlineEmail style={{ fontSize: '30px', marginLeft: '0.5rem' }} />
          <Input
            type="email" // Campo para e-mail
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]} // Atualiza estado do e-mail e limpa o erro
          />
        </InputForm>
        <InputForm>
          <RiLockPasswordLine style={{ fontSize: '30px', marginLeft: '0.5rem' }} />
          <Input
            type={showSenha ? 'text' : 'password'} // Campo para senha
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]} // Atualiza estado da senha e limpa o erro
          />
          <ToggleButton onClick={togglePasswordVisibility}>
            {showSenha ? 'Esconder' : 'Mostrar'} {/* Alterna o texto do botão */}
          </ToggleButton>
        </InputForm>
        {/* Exibe mensagem de erro se houver */}
        {error && <label style={{ color: "red" }}>{error}</label>}
        <Button onClick={handleLogin}>Entrar</Button> {/* Botão para login */}
        <Link to="/Senha">Esqueceu a senha?</Link>
        <Link to="/Signup">Não tem uma conta? Registre-se</Link> 
      </Content>
    </MainContainer>
  );
};

export default Entre; // Exporta o componente para uso
