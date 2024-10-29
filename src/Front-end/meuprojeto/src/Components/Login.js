import React from 'react'; 
import { useAuth } from '../AuthContext'; 
import { useNavigate } from 'react-router-dom'; 
import styled from 'styled-components'; 

const MainContainer = styled.div`
  display: flex;
  margin-left:70px;
  margin-right: 70px;
  align-items: center;
  display: flex;
  justify-content: center; // Centraliza os itens horizontalmente
  padding: 20px;
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

// Estiliza o botão de login/saída
const Button = styled.button`
  padding: 16px 20px; // Preenchimento interno do botão
  border: none; // Remove a borda
  border-radius: 5px; // Bordas arredondadas
  width: 100%; // Ocupa toda a largura do contêiner pai
  cursor: pointer;
  background-color: #046ee5; // Cor de fundo do botão
  color: white; // Cor do texto
  font-weight: 600; // Peso da fonte
  font-size: 16px; // Tamanho da fonte
`;

// Componente de login/saída
const Login = () => {
  const { user, signout } = useAuth(); // Obtém o usuário autenticado e a função de logout do contexto de autenticação
  const navigate = useNavigate(); // Hook para navegação entre páginas

  // Função para lidar com o logout
  const handleSignout = () => {
    signout(); // Desloga o usuário
    navigate("/"); // Redireciona para a página inicial
  };

  // Se o usuário não estiver autenticado, exibe uma mensagem e o botão para fazer login
  if (!user) {
    return (
      <MainContainer>
          <Content>
            <h1>Você não está autenticado.</h1> 
            <Button onClick={() => navigate("/Signin")}>Faça Login</Button> 
          </Content>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
        <Content>
          <h1>Bem-vindo, {user?.email}</h1> {/* Saudação exibindo o e-mail do usuário autenticado */}
          <Button onClick={handleSignout}>Sair</Button> {/* Botão de logout */}
        </Content>
    </MainContainer>
  );
};

export default Login; 
