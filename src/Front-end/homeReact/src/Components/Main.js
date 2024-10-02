import styled from 'styled-components';
import React from 'react';
import Video from '../Components/img/v1.mp4';
import Fototime from '../Components/img/imagem2.jpeg';
import Fototime2 from '../Components/img/foto-principal.jpeg';
import Fototime3 from '../Components/img/imagem3.jpeg';
import Fototime4 from '../Components/img/imagem4.jpeg';

// Estilização do container principal Hero, que envolve o vídeo e o conteúdo de introdução
const Hero = styled.div`
  display: flex; // Define um layout flexível
  justify-content: center; // Centraliza o conteúdo horizontalmente
  text-align: center; // Centraliza o texto
  color: white; // Define a cor do texto como branco
  padding: 200px 0; // Adiciona espaçamento (padding) acima e abaixo
  position: relative; // Define a posição relativa para facilitar o uso de posicionamento absoluto no vídeo de fundo
  overflow: hidden; // Oculta qualquer conteúdo que extrapole o container
  min-height: 50vh; // Define uma altura mínima de 50% da altura da viewport
  margin-bottom: 70px; // Adiciona uma margem inferior
`;

// Estilização para o background de vídeo
const VideoBg = styled.video`
  position: absolute; // Posiciona o vídeo de forma absoluta em relação ao container Hero
  z-index: -1; // Coloca o vídeo atrás de outros elementos (negativo para o fundo)
  top: 50%; // Centraliza verticalmente
  bottom: 0;
  left: 50%; // Centraliza horizontalmente
  transform: translate(-50%, -50%); // Ajusta a posição centralizada com base na metade do seu próprio tamanho
  min-width: 100%; // Garante que o vídeo cubra toda a largura do container
  min-height: 80%; // Garante que o vídeo cubra toda a altura do container
`;

// Estilização da seção de introdução, que inclui o texto principal
const Intro = styled.div`
  text-align: center; // Centraliza o texto
  width: 50%; // Define a largura do conteúdo como 80% do container
  margin: 0 auto; // Centraliza o conteúdo horizontalmente
  max-width: 960px; // Limita a largura máxima a 960px
`;

// Estilização para os títulos de seções de destaque (como "Transformando Vidas Através do Futebol")
const Odsh = styled.div`
  text-align: center; // Centraliza o texto
  margin-top: 10px; // Adiciona espaçamento superior
  font-size: 30px; // Define o tamanho da fonte
  font-weight: bold; // Define o texto como negrito
`;

// Container flexível para os elementos de texto e imagem
const Ods = styled.div`
  display: flex; // Define layout flexível para que o conteúdo fique lado a lado
  flex-grow: 1;
  margin: 70px 75px; // Adiciona margens externas
  text-align: justify; // Justifica o texto
`;

// Estilização da imagem que será exibida dentro do container Ods
const Odsimg = styled.img`
  width: 480px; // Define a largura da imagem
  height: 500px; // Define a altura da imagem
  border-radius: 10px; // Adiciona bordas arredondadas
`;
// const Odsimge = styled.img`
//   width: 400px; // Define a largura da imagem
//   height: 400px; // Define a altura da imagem
//   border-radius: 10px; // Adiciona bordas arredondadas
// `;

// Outro container flexível, mas em coluna, para acomodar os textos educacionais
// const OdsContainer = styled.div`
//   display: flex;
//   width: 40%; // Define a largura do conteúdo como 80% do container
//   flex-direction: column; // Organiza os elementos em uma coluna (verticalmente)
//   margin: 70px 75px; // Adiciona margens
//   text-align: justify; // Justifica o texto
// `;

// Estilização para os parágrafos de conteúdo descritivo dentro das seções
const OdsP = styled.p`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 40px; // Adiciona margem lateral
  font-size: 28px; // Define o tamanho da fonte
  margin-top: 15px; // Adiciona margem superior
  line-height: 1.5; // Define o espaçamento entre as linhas do texto
  text-align: justify;
`;
const OdsPg = styled.p`
  display: flex;
  flex-grow: 1;
  flex-direction: column-reverse;
  margin: 0 40px; // Adiciona margem lateral
  font-size: 28px; // Define o tamanho da fonte
  margin-top: 15px; // Adiciona margem superior
  line-height: 1.5; // Define o espaçamento entre as linhas do texto
  text-align: justify;
`;
// Centraliza o título "Relatos" na tela
const Relatos = styled.div`
  text-align: center; // Centraliza o texto
  margin: 20px 0; // Define margens verticais
  font-size: 2em;
  font-weight: bold; // Define o tamanho da fonte
`;

// Estilização do container para as caixas dos relatos
const BoxArea = styled.div`
  display: flex; // Organiza as caixas lado a lado em um layout flexível
  flex-wrap: wrap; // Permite que as caixas "quebrem" linha se necessário
  justify-content: center; // Centraliza as caixas horizontalmente
  gap: 20px; // Define espaçamento entre as caixas
  margin: 70px auto; // Adiciona margem e centraliza o container
`;

// Estilização das caixas individuais de relato
const SingleBox = styled.div`
  display: flex; // Define layout flexível para organizar o conteúdo da caixa
  flex-direction: column; // Organiza os elementos em uma coluna
  align-items: center; // Centraliza os elementos horizontalmente
  justify-content: center; // Centraliza verticalmente
  width: 300px; // Define a largura da caixa
  border-radius: 4px; // Adiciona bordas arredondadas
  background-color: #0549b6; // Define a cor de fundo azul
  text-align: center; // Centraliza o texto dentro da caixa
  padding: 20px; // Adiciona preenchimento interno
  transition: background-color 0.3s, color 0.3s; // Define uma transição suave nas mudanças de cor
  box-shadow: 1px 0 5px 0 rgba(0, 0, 0, 0.6); // Adiciona uma sombra à caixa

  &:hover { // Define o estilo quando o mouse está sobre a caixa
    background-color: darkblue; // Muda a cor de fundo para um azul mais escuro
    color: #fff; // Muda a cor do texto para branco
  }
`;

// Estilização para o avatar de cada relato, que será uma imagem de fundo circular
const ImgArea = styled.div`
  width: 80px; // Define a largura da área de imagem
  height: 80px; // Define a altura da área de imagem
  border: 6px solid #ddd; // Define uma borda ao redor da imagem
  border-radius: 50%; // Faz a imagem ser exibida como um círculo
  margin-bottom: 10px; // Adiciona margem inferior
  background-size: cover; // Garante que a imagem cubra todo o círculo
  background-position: center center; // Centraliza a imagem dentro do círculo
`;

// Estilização para o cabeçalho de texto dentro de cada caixa de relato
const HeaderText = styled.div`
  font-size: 24px; // Define o tamanho da fonte
  font-weight: bold; // Define o texto como negrito
  margin-bottom: 10px; // Adiciona margem inferior
`;

// Estilização para a descrição dentro da caixa de relato
const Line = styled.div`
  color: #fff; // Define a cor do texto como branco

  h3 { // Estiliza os títulos dentro de Line
    margin: 10px 0; // Define margem superior e inferior
  }

  p { // Estiliza os parágrafos dentro de Line
    font-size: 15px; // Define o tamanho da fonte
    font-weight: 400; // Define a espessura da fonte
    line-height: 30px; // Define o espaçamento entre linhas
  }
`;


// Componente principal que renderiza todo o conteúdo da página Home
function Main() {
  console.log('Home component is rendering');
  return (
    <>
      {/* Seção de introdução com vídeo de fundo */}
      <Hero>
        <Intro>
          <h1>Transforme sua saúde em um jogo de vitórias</h1>
          <VideoBg autoPlay muted loop>
            <source src={Video} type="video/mp4" /> {/* Fonte do vídeo */}
          </VideoBg>
        </Intro>
      </Hero>

      {/* Seção de texto "Transformando Vidas Através do Futebol" */}
      <Odsh>Transformando Vidas Através do Futebol</Odsh>
      <Ods>
        <Odsimg src={Fototime} alt="Foto do Luizao" title="Foto do Luizao" /> {/* Imagem do Luizão */}
        <div>
          <OdsP>
          O Projeto Luizão: Meninos da Sayb nasceu do sonho de Luizão
               de oferecer uma alternativa positiva para crianças e adolescentes.
               A missão é afastá-los do caminho do crime e aproximá-los do mundo
               do futebol, destacando a importância do esporte para o desenvolvimento
               pessoal e a construção de um futuro promissor. Acreditamos que o futebol
               não é apenas uma atividade recreativa, mas uma poderosa ferramenta educacional
              que pode moldar o caráter e abrir portas para novas oportunidades.
          </OdsP>
        </div>
      </Ods>

      {/* Seção de texto sobre "Futebol na educação" */}
      <Odsh>Futebol na educação</Odsh>
      <Ods>
        <Odsimg src={Fototime2} alt="Foto do Time" title="Foto do Time" /> {/* Imagem do Time */}
        <div>
          <OdsPg>
          No contexto educacional, o futebol pode ser entendido não apenas como uma prática esportiva, mas como uma linguagem universal e atemporal. Ele tem a capacidade de envolver os estudantes, funcionando como uma ferramenta que promove processos de ensino e aprendizagem significativos.
          Ao se conectar com os alunos, o futebol se torna uma ponte para a construção de conhecimentos.
          </OdsPg>
          <OdsPg>
          Além disso, o futebol é uma forma de expressão cultural que pode estimular valores como trabalho em equipe, disciplina e resiliência. Essa prática lúdica engaja os alunos em um ambiente de colaboração, onde aprendem não só sobre técnicas e táticas, mas também sobre a importância do respeito e da empatia, são diferentes estilos e ritmos de aprendizado, fortalecendo a motivação e o interesse dos estudantes pela educação. Dessa forma, o futebol se transforma em um elemento que promove um aprendizado mais completo e significativo.
          </OdsPg>
        </div>
      </Ods>
      {/* <div>
      <OdsP>
          Além disso, o futebol é uma forma de expressão cultural que pode estimular valores como trabalho em equipe, disciplina e resiliência. Essa prática lúdica engaja os alunos em um ambiente de colaboração, onde aprendem não só sobre técnicas e táticas, mas também sobre a importância do respeito e da empatia, são diferentes estilos e ritmos de aprendizado, fortalecendo a motivação e o interesse dos estudantes pela educação. Dessa forma, o futebol se transforma em um elemento que promove um aprendizado mais completo e significativo.
          </OdsP>
      </div> */}

      {/* Seção de relatos */}
      <Relatos>Relatos</Relatos>
      <BoxArea>
        {/* Relato do Luizão */}
        <SingleBox>
          <ImgArea style={{ backgroundImage: `url(${Fototime2})` }} /> {/* Imagem do Luizão */}
          <HeaderText><strong>Luizão</strong></HeaderText>
          <Line>
            <h3>Professor</h3>
            <p>"Ensinamos disciplina, trabalho em equipe e a importância de fazer boas escolhas. Acredito que, com dedicação e amor pelo esporte, podemos afastar nossos jovens das ruas."</p>
          </Line>
        </SingleBox>

        {/* Relato do Turbiani */}
        <SingleBox>
          <ImgArea style={{ backgroundImage: `url(${Fototime3})` }} /> 
          <HeaderText><strong>Turbiani</strong></HeaderText>
          <Line>
            <h3>Aluno e Programador</h3>
            <p>"Desenvolvi o site do projeto para ajudar a divulgar nosso trabalho e conectar mais pessoas. É ótimo ver a tecnologia fortalecendo nossa causa."</p>
          </Line>
        </SingleBox>

        {/* Relato do Vinícius */}
        <SingleBox>
          <ImgArea style={{ backgroundImage: `url(${Fototime4})` }} /> 
          <HeaderText><strong>Kauã</strong></HeaderText>
          <Line>
            <h3>Aluno</h3>
            <p>"Participar das aulas de futebol me ajudou a melhorar minha disciplina e trabalho em equipe. Além de aprender técnicas, ganhei confiança e foco para enfrentar desafios na vida."</p>
          </Line>
        </SingleBox>
      </BoxArea>
    </>
  );
}

export default Main;

    
