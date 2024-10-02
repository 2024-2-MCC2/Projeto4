import React from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Video from '../Components/img/v2.mp4';

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

const Login = () => {
  const { user, signout } = useAuth();
  const navigate = useNavigate();

  const handleSignout = () => {
    signout();
    navigate("/");
  };

  if (!user) {
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
            <h1>Você não está autenticado.</h1>
            <Button onClick={() => navigate("/")}>Faça Login</Button>
          </Content>
        </LoginContainer>
      </MainContainer>
    );
  }

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
          <h1>Bem-vindo, {user?.email}</h1>
          <Button onClick={handleSignout}>Sair</Button>
        </Content>
      </LoginContainer>
    </MainContainer>
  );
};

export default Login;
