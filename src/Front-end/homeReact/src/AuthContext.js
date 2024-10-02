// src/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// Criando o contexto de autenticação
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Verifica se o usuário já está logado ao carregar o componente
  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("user_token"));
    const usersStorage = JSON.parse(localStorage.getItem("users_bd")) || [];

    if (userToken) {
      const loggedUser = usersStorage.find(u => u.email === userToken.email);
      if (loggedUser) setUser(loggedUser);
    }
  }, []);

  // Função para login
  const signin = (email, senha) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd")) || [];

    const user = usersStorage.find(u => u.email === email && u.senha === senha);

    if (!user) {
      return "Credenciais inválidas";
    }

    // Armazenando o token de autenticação
    localStorage.setItem("user_token", JSON.stringify({ email }));
    setUser(user);
    return null;
  };

  // Função para cadastro
  const signup = (email, senha) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd")) || [];
  
    const hasUser = usersStorage.find(u => u.email === email);
  
    if (hasUser) {
      return "Usuário já cadastrado";
    }
  
    const newUser = { email, senha };
    usersStorage.push(newUser);
    localStorage.setItem("users_bd", JSON.stringify(usersStorage));
    localStorage.setItem("user_token", JSON.stringify({ email }));
  
    return null; // Retorna null indicando sucesso
  };
  
  // Função para logout
  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider value={{ user, signin, signup, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar o contexto de autenticação
export const useAuth = () => useContext(AuthContext);
