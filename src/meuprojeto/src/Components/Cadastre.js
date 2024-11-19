// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import { useAuth } from '../AuthContext';
// import { MdOutlineEmail } from "react-icons/md";
// import { RiLockPasswordLine } from "react-icons/ri";
// import { FaPhoneAlt } from "react-icons/fa";
// import { IoMdPerson } from "react-icons/io";
// import { BsFillPersonVcardFill } from "react-icons/bs";

// const MainContainer = styled.div`
//   display: flex;
//   margin-left: 70px;
//   margin-right: 70px;
//   align-items: center;
//   justify-content: center; 
//   padding: 20px;
//   margin-bottom: 20px;
//   margin-top: -50px;
// `;

// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 15px; 
//   width: 100%;
//   max-width: 350px;
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

// const ToggleButton = styled.button`
//   position: absolute; // Botão de alternar visibilidade da senha
//   top: 50%;
//   right: 15px;
//   transform: translateY(-50%);
//   background-color: black;
//   border: none;
//   color: #fff;
//   cursor: pointer;
//   font-size: 14px;
//   padding: 0;
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
// const Cadastre = () => {
//   const { signup } = useAuth();
//   const navigate = useNavigate();
//   const [nome, setNome] = useState("");
//   const [cpf, setCPF] = useState("");
//   const [telefone, setTelefone] = useState("");
//   const [email, setEmail] = useState("");
//   const [senha, setSenha] = useState("");
//   const [error, setError] = useState("");
//   const [showSenha, setShowSenha] = useState(false); // Estado para gerenciar a visibilidade da senha.

//   const togglePasswordVisibility = () => {
//     setShowSenha(!showSenha); // Alterna a visibilidade da senha.
//   };

//   const handleSignup = () => {
//     if (!nome || !cpf || !telefone || !email || !senha) {
//       setError("Preencha todos os campos");
//       return;
//     }
//     if (senha.length < 6) {
//       setError("A senha deve ter pelo menos 6 caracteres");
//       return;
//     }
//     const res = signup(email, senha); 
//     if (res) {
//       setError(res);
//       return;
//     }
//     navigate("/perfil");
//   };

//   return (
//       <MainContainer>
//     <Content>
//       <h1>Cadastre</h1>
//       <InputForm>
//       <IoMdPerson  style={{fontSize: '30px', marginLeft: '0.5rem'}}/>
//       <Input
//         type="nome"
//         placeholder="Digite seu Nome"
//         value={nome}
//         onChange={(e) => {
//           setNome(e.target.value);
//           setError(""); // Limpa o erro quando o usuário começa a digitar
//         }}
//       />
//       </InputForm>
//       <InputForm>
//       <BsFillPersonVcardFill style={{fontSize: '30px', marginLeft: '0.5rem'}} />
//       <Input
//         type="cpf"
//         placeholder="Digite seu CPF"
//         value={cpf}
//         onChange={(e) => {
//           setCPF(e.target.value);
//           setError(""); // Limpa o erro quando o usuário começa a digitar
//         }}
//       />
//       </InputForm>
//       <InputForm>
//       <FaPhoneAlt style={{fontSize: '30px', marginLeft: '0.5rem'}}/>
//       <Input
//         type="telefone"
//         placeholder="Digite seu Telefone"
//         value={telefone}
//         onChange={(e) => {
//           setTelefone(e.target.value);
//           setError(""); // Limpa o erro quando o usuário começa a digitar
//         }}
//       />
//       </InputForm>
//       <InputForm>
//       <MdOutlineEmail style={{fontSize: '30px', marginLeft: '0.5rem'}}/>
//       <Input
//         type="email"
//         placeholder="Digite seu E-mail"
//         value={email}
//         onChange={(e) => {
//           setEmail(e.target.value);
//           setError(""); // Limpa o erro quando o usuário começa a digitar
//         }}
//       />
      
//       </InputForm>
//       <InputForm>
//       <RiLockPasswordLine style={{fontSize: '30px', marginLeft: '0.5rem'}}/>
//       <Input
//         type="password"
//         placeholder="Digite sua Senha"
//         value={senha}
//         onChange={(e) => {
//           setSenha(e.target.value);
//           setError(""); // Limpa o erro quando o usuário começa a digitar
//         }}
//       />
//       <ToggleButton onClick={togglePasswordVisibility}>
//             {showSenha ? 'Esconder' : 'Mostrar'} {/* Alterna o texto do botão */}
//           </ToggleButton>
//       </InputForm>
//       {/* Exibe o erro, se houver */}
//       {error && <label style={{ color: "red" }}>{error}</label>}
//       <Button onClick={handleSignup}>Cadastrar</Button>
//     </Content>
//     </MainContainer>
//   )
// };

// export default Cadastre;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../AuthContext';
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { BsFillPersonVcardFill } from "react-icons/bs";
import axios from 'axios';
import { useApiUrl } from '../context/ApiContext';

const MainContainer = styled.div`
  display: flex;
  margin-left: 70px;
  margin-right: 70px;
  align-items: center;
  justify-content: center; 
  padding: 20px;
  margin-bottom: 20px;
  margin-top: -50px;
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
  position: relative;
  svg {
    margin-left: 0.5rem;
    font-size: 1.5rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 90px;
  background: #000;
  border: none;
  color: #fff;
  border-radius: 5px;
  outline: none;
  &::placeholder {
    color: #ccc;
  }
`;

const ToggleButton = styled.button`
  position: absolute;
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
  const navigate = useNavigate();
  const apiUrl = useApiUrl();
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [showSenha, setShowSenha] = useState(false);

  const togglePasswordVisibility = () => {
    setShowSenha(!showSenha);
  };

  // Função para registrar usuário no backend
  const registerUser = async () => {
    try {
      const response = await axios.post(`${apiUrl}/auth/register`, {
        nome,
        cpf,
        telefone,
        email,
        senha,
      });
      alert('Usuário cadastrado com sucesso!');
      navigate("/perfil");
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      setError('Erro ao cadastrar usuário. Tente novamente.');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!nome || !cpf || !telefone || !email || !senha) {
      setError("Preencha todos os campos");
      return;
    }
    if (senha.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres");
      return;
    }
    registerUser();
  };

  return (
    <MainContainer>
      <Content>
        <h1>Cadastre-se</h1>
        <form onSubmit={handleSignup}>
          <InputForm>
            <IoMdPerson style={{ fontSize: '30px', marginLeft: '0.5rem' }} />
            <Input
              type="text"
              placeholder="Digite seu Nome"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
                setError("");
              }}
            />
          </InputForm>
          <InputForm>
            <BsFillPersonVcardFill style={{ fontSize: '30px', marginLeft: '0.5rem' }} />
            <Input
              type="text"
              placeholder="Digite seu CPF"
              value={cpf}
              onChange={(e) => {
                setCPF(e.target.value);
                setError("");
              }}
            />
          </InputForm>
          <InputForm>
            <FaPhoneAlt style={{ fontSize: '30px', marginLeft: '0.5rem' }} />
            <Input
              type="text"
              placeholder="Digite seu Telefone"
              value={telefone}
              onChange={(e) => {
                setTelefone(e.target.value);
                setError("");
              }}
            />
          </InputForm>
          <InputForm>
            <MdOutlineEmail style={{ fontSize: '30px', marginLeft: '0.5rem' }} />
            <Input
              type="email"
              placeholder="Digite seu E-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
            />
          </InputForm>
          <InputForm>
            <RiLockPasswordLine style={{ fontSize: '30px', marginLeft: '0.5rem' }} />
            <Input
              type={showSenha ? "text" : "password"}
              placeholder="Digite sua Senha"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
                setError("");
              }}
            />
            <ToggleButton onClick={togglePasswordVisibility}>
              {showSenha ? 'Esconder' : 'Mostrar'}
            </ToggleButton>
          </InputForm>
          {error && <label style={{ color: "red" }}>{error}</label>}
          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
    </MainContainer>
  );
};

export default Cadastre;
