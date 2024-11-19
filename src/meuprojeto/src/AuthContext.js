import React, { createContext, useState, useContext, useEffect } from 'react';

// Cria o contexto de autenticação
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Define o estado para armazenar o usuário logado

  // useEffect para verificar se o usuário já está logado ao carregar o componente
  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("user_token")); // Busca o token no localStorage
    const usersStorage = JSON.parse(localStorage.getItem("users_bd")) || []; // Busca os usuários cadastrados

    if (userToken) {
      // Verifica se o usuário do token está registrado
      const loggedUser = usersStorage.find(u => u.email === userToken.email);
      if (loggedUser) setUser(loggedUser); // Define o usuário logado
    }
  }, []); // Executa quando o componente é montado

  // Função de login
  const signin = (email, senha) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd")) || []; // Busca os usuários cadastrados

    // Verifica se existe um usuário com o e-mail e senha fornecidos
    const user = usersStorage.find(u => u.email === email && u.senha === senha);

    if (!user) {
      return "Credenciais inválidas"; // Retorna erro se o usuário não for encontrado
    }

    // Armazena o token de autenticação no localStorage
    localStorage.setItem("user_token", JSON.stringify({ email }));
    setUser(user); // Define o usuário logado
    return null; // Retorna null indicando sucesso
  };

  // Função de cadastro
  const signup = (email, senha) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd")) || []; // Busca os usuários cadastrados
  
    // Verifica se já existe um usuário com o e-mail fornecido
    const hasUser = usersStorage.find(u => u.email === email);
  
    if (hasUser) {
      return "Usuário já cadastrado"; // Retorna erro se o usuário já existe
    }
  
    const newUser = { email, senha }; // Cria um novo usuário
    usersStorage.push(newUser); // Adiciona o novo usuário à lista de usuários
    localStorage.setItem("users_bd", JSON.stringify(usersStorage)); // Atualiza o localStorage
    localStorage.setItem("user_token", JSON.stringify({ email })); // Armazena o token de autenticação
  
    return null; // Retorna null indicando sucesso
  };
  
  // Função de logout
  const signout = () => {
    setUser(null); // Remove o usuário logado
    localStorage.removeItem("user_token"); // Remove o token do localStorage
  };

  return (
    <AuthContext.Provider value={{ user, signin, signup, signout }}>
      {children} {/* Renderiza os componentes filhos dentro do Provider */}
    </AuthContext.Provider>
  );
};

// Hook para usar o contexto de autenticação
export const useAuth = () => useContext(AuthContext); // Permite que outros componentes usem o contexto de autenticação
