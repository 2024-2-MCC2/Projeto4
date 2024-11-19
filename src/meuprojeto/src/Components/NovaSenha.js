// import React, { useState } from 'react'; // Importa React e o hook useState
// import styled from 'styled-components'; // Importa styled-components para estilização do componente
// import { useAuth } from '../AuthContext'; // Importa o contexto de autenticação personalizado
// import { useNavigate } from 'react-router-dom'; // Importa useNavigate para navegação entre rotas
// import { MdOutlineEmail } from "react-icons/md"; // Importa ícone de e-mail

// const MainContainer = styled.div`
//   display: flex;
//   margin-left: 70px;
//   margin-right: 70px;
//   align-items: center;
//   justify-content: center; // Centraliza os itens horizontalmente
//   padding: 20px;
//   margin-bottom: 20px;
// `;

// // Estiliza o conteúdo exibido no contêiner (formulário de login/saída)
// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 15px; // Espaçamento entre os itens
//   width: 100%;
//   max-width: 350px; // Largura máxima do conteúdo
//   background-color: white; // Fundo branco
//   padding: 20px;
//   border-radius: 5px; // Bordas arredondadas
//   box-shadow: 0 1px 2px #0003; // Sombra leve ao redor
// `;

// // Estiliza cada campo de entrada com um ícone
// const InputForm = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 0.5rem;
//   background: #000; // Fundo preto
//   border-radius: 5px;
//   margin-bottom: 0.75rem;
//   color: #fff; // Texto branco
//   position: relative; // Necessário para o botão de alternar senha
//   svg {
//     margin-left: 0.5rem;
//     font-size: 1.5rem; // Tamanho do ícone
//   }
// `;

// // Estiliza os campos de entrada (e-mail e senha)
// const Input = styled.input`
//   width: 100%;
//   padding: 8px 90px; // Definição do espaço interno
//   background: #000; // Fundo preto
//   border: none;
//   color: #fff; // Texto branco
//   border-radius: 5px;
//   outline: none;
//   &::placeholder {
//     color: #ccc; // Cor do placeholder
//   }
// `;

// // Estiliza o botão de login
// const Button = styled.button`
//   padding: 16px 20px; // Preenchimento interno do botão
//   border: none; // Sem borda
//   border-radius: 5px; // Bordas arredondadas
//   width: 100%; // Botão ocupa toda a largura
//   cursor: pointer;
//   background-color: #046ee5; // Cor de fundo do botão
//   color: white; // Texto branco
//   font-weight: 600; // Peso da fonte
//   font-size: 16px; // Tamanho da fonte
// `;

// // Componente funcional para "Esqueceu a Senha"
// const NovaSenha = () => {
//   const [email, setEmail] = useState(''); // Estado para armazenar o e-mail
//   const [error, setError] = useState(''); // Estado para armazenar mensagens de erro
//   const [message, setMessage] = useState(''); // Estado para armazenar mensagens de sucesso
//   const { resetPassword } = useAuth(); // Função de redefinição de senha do contexto de autenticação
//   const navigate = useNavigate(); // Hook para navegação entre páginas

//   const handleResetPassword = async () => {
//     if (!email) {
//       setError('Por favor, preencha seu e-mail'); // Exibe erro se o campo estiver vazio
//       return;
//     }

//     try {
//       await resetPassword(email); // Tenta redefinir a senha
//       setMessage('Verifique seu e-mail para redefinir sua senha'); // Mensagem de sucesso
//       setError(''); // Limpa erros anteriores
//     } catch (err) {
//       setError('Erro ao enviar o e-mail de redefinição'); // Mensagem de erro
//       setMessage(''); // Limpa mensagens de sucesso
//     }
//   };

//   return (
//     <MainContainer>
//       <Content>
//         <h1>Esqueceu a Senha?</h1> {/* Título do formulário */}
//         <InputForm>
//         <MdOutlineEmail style={{ fontSize: '30px', marginLeft: '0.5rem' }} />
//         <Input
//           type="email" // Campo para e-mail
//           placeholder="Digite seu E-mail"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do e-mail
//         />
//         </InputForm>
//         {error && <label style={{ color: 'red' }}>{error}</label>} {/* Mensagem de erro */}
//         {message && <label style={{ color: 'green' }}>{message}</label>} {/* Mensagem de sucesso */}
//         <Button onClick={handleResetPassword}>Enviar e-mail de redefinição</Button> {/* Botão para enviar e-mail */}
//       </Content>
//     </MainContainer>
//   );
// };

// export default NovaSenha; // Exporta o componente para uso
import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import { MdOutlineEmail } from "react-icons/md";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100vh;
  background-color: #f2f2f2;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  max-width: 350px;
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const InputForm = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: #000;
  border-radius: 5px;
  margin-bottom: 0.75rem;
  color: #fff;
  svg {
    margin-left: 0.5rem;
    font-size: 1.5rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  background: #000;
  border: none;
  color: #fff;
  border-radius: 5px;
  outline: none;
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
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #034c9e;
  }
`;

const Message = styled.p`
  color: ${({ type }) => (type === 'error' ? 'red' : 'green')};
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
`;

const NovaSenha = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    if (!email) {
      setError('Por favor, preencha seu e-mail');
      return;
    }

    try {
      await resetPassword(email);
      setMessage('Verifique seu e-mail para redefinir sua senha');
      setError('');

      // Limpa a mensagem após 5 segundos
      setTimeout(() => {
        setMessage('');
        navigate('/login'); // Navega para a página de login após a redefinição
      }, 5000);
    } catch (err) {
      setError('Erro ao enviar o e-mail de redefinição');
      setMessage('');
    }
  };

  return (
    <MainContainer>
      <Content role="form" aria-label="Formulário de recuperação de senha">
        <h1>Esqueceu a Senha?</h1>
        <InputForm>
          <MdOutlineEmail style={{ fontSize: '30px' }} />
          <Input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
              setMessage('');
            }}
            aria-label="Digite seu E-mail"
          />
        </InputForm>
        {error && <Message type="error">{error}</Message>}
        {message && <Message type="success">{message}</Message>}
        <Button onClick={handleResetPassword}>Enviar e-mail de redefinição</Button>
      </Content>
    </MainContainer>
  );
};

export default NovaSenha;
