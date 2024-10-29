import styled from "styled-components";
import React from "react";
import Video from '../Assets/v1.mp4';

const BannerContainer = styled.div`
  display: flex; // Define um layout flexível
  justify-content: center; // Centraliza o conteúdo horizontalmente
  text-align: center; // Centraliza o texto
  color: white; // Define a cor do texto como branco
  padding: 0 0 20px; // Adiciona espaçamento (padding) acima e abaixo
  position: relative; // Define a posição relativa para facilitar o uso de posicionamento absoluto no vídeo de fundo
  overflow: hidden; // Oculta qualquer conteúdo que extrapole o container
  min-height: 700px; // Define uma altura mínima de 50% da altura da viewport
  margin-bottom: 70px; // Adiciona uma margem inferior
`
const VideoBg = styled.video`
  position: absolute; // Posiciona o vídeo de forma absoluta em relação ao container Hero
  z-index: -1; // Coloca o vídeo atrás de outros elementos (negativo para o fundo)
  top: 50%; // Centraliza verticalmente
  bottom: 0;
  left: 50%; // Centraliza horizontalmente
  transform: translate(-50%, -50%); // Ajusta a posição centralizada com base na metade do seu próprio tamanho
  min-width: 100%; // Garante que o vídeo cubra toda a largura do container
  min-height: 100%; // Garante que o vídeo cubra toda a altura do container
`;

const Intro = styled.div`
  text-align: center; // Centraliza o texto
  width: 100%; // Define a largura do conteúdo como 80% do container
  margin: auto auto; // Centraliza o conteúdo horizontalmente
  max-width: 960px; // Limita a largura máxima a 960px
`;
function Banner(){
    return(
        <BannerContainer>
        <Intro>
          <h1>Transforme sua saúde em um jogo de vitórias</h1>
          <VideoBg autoPlay muted loop>
            <source src={Video} type="video/mp4" /> {/* Fonte do vídeo */}
          </VideoBg>
        </Intro>
      </BannerContainer>
    )
}
export default Banner