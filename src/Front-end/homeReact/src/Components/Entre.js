import React, { useState } from 'react'; // Importa React e o hook useState
import { Link, useNavigate } from 'react-router-dom'; // Importa Link e useNavigate para navegação
import styled from 'styled-components'; // Importa styled-components para estilização
import { useAuth } from '../AuthContext'; // Importa o contexto de autenticação
import Video from '../Components/img/v2.mp4'; // Importa o vídeo de fundo

// Estiliza o contêiner principal que ocupa a altura total da tela
const MainContainer = styled.div`
  display: flex;
  height: 100vh; // Define a altura como 100% da altura da viewport
`;

// Estiliza o contêiner do vídeo
const VideoContainer = styled.div`
  flex: 1; // Permite que o contêiner ocupe uma fração do espaço disponível
  background-color: #000; // Define a cor de fundo como preto
  position: relative; // Permite que os elementos filhos sejam posicionados relativamente
  overflow: hidden; // Oculta qualquer conteúdo que ultrapasse os limites
`;

// Estiliza o vídeo em si
const VideoBg = styled.video`
  position: absolute; // Posiciona o vídeo de forma absoluta
  top: 50%; // Centraliza verticalmente
  left: 50%; // Centraliza horizontalmente
  transform: translate(-50%, -50%); // Ajusta a posição do vídeo
  min-width: 100%; // Garante que o vídeo tenha largura mínima de 100%
  min-height: 100%; // Garante que o vídeo tenha altura mínima de 100%
  object-fit: cover; // Faz o vídeo cobrir todo o contêiner sem distorção
`;

// Estiliza o contêiner do formulário de login
const LoginContainer = styled.div`
  flex: 1; // Ocupa uma fração do espaço disponível
  display: flex; // Utiliza flexbox para layout
  align-items: center; // Alinha os itens no centro verticalmente
  justify-content: center; // Centraliza os itens horizontalmente
  padding: 20px; // Adiciona preenchimento ao redor
`;

// Estiliza o conteúdo do formulário
const Content = styled.div`
  display: flex; // Utiliza flexbox
  flex-direction: column; // Alinha os itens em coluna
  align-items: center; // Centraliza os itens horizontalmente
  gap: 15px; // Espaçamento entre os itens
  width: 100%; // Define a largura como 100%
  max-width: 350px; // Define a largura máxima
  background-color: white; // Define a cor de fundo como branco
  padding: 20px; // Adiciona preenchimento
  border-radius: 5px; // Arredonda as bordas
  box-shadow: 0 1px 2px #0003; // Adiciona sombra ao redor
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

// Estiliza o botão de login
const Button = styled.button`
  padding: 16px 20px; // Adiciona preenchimento interno
  border: none; // Remove borda
  border-radius: 5px; // Arredonda as bordas
  width: 100%; // Define a largura como 100%
  cursor: pointer; // Altera o cursor para indicar que é clicável
  background-color: #046ee5; // Define a cor de fundo
  color: white; // Define a cor do texto como branco
  font-weight: 600; // Define o peso da fonte
  font-size: 16px; // Define o tamanho da fonte
`;

// Componente funcional de login
const Entre = () => {
  const { signin } = useAuth(); // Obtém a função de login do contexto de autenticação
  const navigate = useNavigate(); // Hook para navegação entre páginas
  const [email, setEmail] = useState(""); // Estado para armazenar o email
  const [senha, setSenha] = useState(""); // Estado para armazenar a senha
  const [error, setError] = useState(""); // Estado para armazenar mensagens de erro

  // Função para lidar com o envio do formulário de login
  const handleLogin = () => {
    // Verifica se os campos estão preenchidos
    if (!email || !senha) {
      setError("Preencha todos os campos"); // Exibe erro se campos estiverem vazios
      return; // Sai da função
    }

    // Tenta fazer login
    const res = signin(email, senha); // Chama a função de login

    // Verifica se houve erro no login
    if (res) {
      setError(res); // Exibe o erro retornado
      return; // Sai da função
    }

    navigate("/perfil"); // Navega para a página de perfil em caso de sucesso
  };

  // Renderização do componente
  return (
    <MainContainer>
      <VideoContainer>
        <VideoBg autoPlay muted loop> {/* Vídeo em loop, mudo e auto-iniciando */}
          <source src={Video} type="video/mp4" /> {/* Fonte do vídeo */}
          Seu navegador não suporta o elemento de vídeo. {/* Mensagem alternativa */}
        </VideoBg>
      </VideoContainer>
      <LoginContainer>
        <Content>
          <h1>SISTEMA DE LOGIN</h1> {/* Título do sistema de login */}
          <InputForm>
          <Input
            type="email" // Campo para e-mail
            placeholder="Digite seu E-mail" // Texto de dica
            value={email} // Valor do estado email
            onChange={(e) => [setEmail(e.target.value), setError("")]} // Atualiza email e limpa erro
          />
          </InputForm>
          <InputForm>
          <Input
            type="password" // Campo para senha
            placeholder="Digite sua Senha" // Texto de dica
            value={senha} // Valor do estado senha
            onChange={(e) => [setSenha(e.target.value), setError("")]} // Atualiza senha e limpa erro
          />
          </InputForm>
          {error && <label style={{ color: "red" }}>{error}</label>} {/* Exibe mensagem de erro se existir */}
          <Button onClick={handleLogin}>Entrar</Button> {/* Botão para login */}
          <Link to="/signup">Não tem uma conta? Registre-se</Link> {/* Link para página de registro */}
        </Content>
      </LoginContainer>
    </MainContainer>
  );
};

export default Entre; // Exporta o componente para uso em outras partes da aplicação
