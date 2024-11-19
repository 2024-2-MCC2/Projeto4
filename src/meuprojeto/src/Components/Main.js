import styled from 'styled-components';
import React from 'react';
import Fototime from '../Assets/imagem2.jpeg';
import Fototime2 from '../Assets/imagem3.jpeg';
import Fototime3 from '../Assets/imagem4.jpeg';
import Fototime4 from '../Assets/foto-principal.jpeg';

const Container = styled.div`
  margin-left:70px;
  margin-right: 70px;

`
const Títulos = styled.div`
  display: flex;
  justify-content: justify;
  text-align: justify;
  margin-top: 50px;
  flex-grow: 1;
  width: 100%;
  height:100%;
  height: auto;
  width: auto;
`;
const Título = styled.div`
  text-align: center; // Centraliza o texto
  justify-content: center;
  display: flex;
  font-size: 30px; // Define o tamanho da fonte
  font-weight: bold; // Define o texto como negrito
  background-color: #0549b6;
  color: #fff;
  padding: 5px;
  padding-right: 10px;
  padding-top: 10px;
  border-radius: 0px 10px 10px 0px;
`;

const Título1 = styled.div`
  text-align: center; // Centraliza o texto
  display: flex;
  justify-content: center;
  font-size: 30px; // Define o tamanho da fonte
  font-weight: bold; // Define o texto como negrito
  background-color: #3D3939; //637FD3
  color: #fff;
  padding: 10px;
  padding-right: 10px;
  padding-top: 10px;
  border-radius: 10px 0px 0 10px;
`;



// Container flexível para os elementos de texto e imagem
const Texto = styled.div`
  display: flex; // Define layout flexível para que o conteúdo fique lado a lado
  flex-grow: 1;
  margin: 70px 10px; // Adiciona margens externas
  text-align: justify; // Justifica o texto
`;
const Texto2 = styled.div`
  flex-grow: 1;
  margin: 70px 10px; // Adiciona margens externas
  text-align: justify; // Justifica o texto
  margin-top: -50px;
`;

// Estilização da imagem que será exibida dentro do container Ods
const Odsimg = styled.img`
  width: 300px; // Define a largura da imagem
  height: 300px; // Define a altura da imagem
  border-radius: 10px; // Adiciona bordas arredondadas
  object-fit: cover;
  margin-top: 10px;
  box-shadow: -5px 10px 15px 10px rgba(0, 0, 0, 0.4);
  `;
const Odsimg2 = styled.img`
  width: 400px; // Define a largura da imagem
  height: 225px; // Define a altura da imagem
  border-radius: 10px; // Adiciona bordas arredondadas
  object-fit: cover;
  margin-top: 10px;
  box-shadow: -5px 10px 15px 10px rgba(0, 0, 0, 0.4);
  `;
  const TextoP = styled.p`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 40px; // Adiciona margem lateral
  font-size: 25px; // Define o tamanho da fonte
  margin-top: 15px; // Adiciona margem superior
  line-height: 1.5; // Define o espaçamento entre as linhas do texto
  text-align: justify;
`;
const TextoPg = styled.p`
  display: flex;
  flex-grow: 1;
  flex-direction: column-reverse;
  margin: 0 40px; // Adiciona margem lateral
  font-size: 25px; // Define o tamanho da fonte
  margin-top: 15px; // Adiciona margem superior
  line-height: 1.5; // Define o espaçamento entre as linhas do texto
  text-align: justify;
`;
const TextoPg2 = styled.p`
  flex-grow: 1;
  flex-direction: column-reverse;
  padding: 0;
  margin: 0 40px; // Adiciona margem lateral
  font-size: 25px; // Define o tamanho da fonte
  line-height: 1.5; // Define o espaçamento entre as linhas do texto
  text-align: justify;
`;
// Centraliza o título "Relatos" na tela
const Relatos = styled.div`
  text-align: center; // Centraliza o texto
  margin: 10px 0 10px; // Define margens verticais
  font-size: 30px;
  background-color: #0549b6;
  height: auto;
  padding:10px;
  border-radius: 10px;
  color: white;
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
  color: black;
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
    text-align: justify;
  }
`;


// Componente principal que renderiza todo o conteúdo da página Home
function Main() {
  return (
    <>
    <Container>
    <Títulos>
      <Título1>01</Título1>
      <Título>Transformando Vidas Através do Futebol</Título>
    </Títulos>
      <Texto>
        <div>
          <TextoP>
          O Projeto Luizão: Meninos da Sayb nasceu do sonho de Luizão
               de oferecer uma alternativa positiva para crianças e adolescentes.
               A missão é afastá-los do caminho do crime e aproximá-los do mundo
               do futebol, destacando a importância do esporte para o desenvolvimento
               pessoal e a construção de um futuro promissor. Acreditamos que o futebol
               não é apenas uma atividade recreativa, mas uma poderosa ferramenta educacional
              que pode moldar o caráter e abrir portas para novas oportunidades.
          </TextoP>
        </div>
        <Odsimg src={Fototime} alt="Foto do Luizao" title="Foto do Luizao" /> {/* Imagem do Luizão */}
      </Texto>

      {/* Seção de texto sobre "Futebol na educação" */}
      <Títulos>
      <Título1>02</Título1>
      <Título>Futebol na educação</Título>
      </Títulos>
      <Texto>
          <TextoPg>
          No contexto educacional, o futebol pode ser entendido não apenas como uma prática esportiva, mas como uma linguagem universal e atemporal. Ele tem a capacidade de envolver os estudantes, funcionando como uma ferramenta que promove processos de ensino e aprendizagem significativos.
          Ao se conectar com os alunos, o futebol se torna uma ponte para a construção de conhecimentos.
          </TextoPg>
          <Odsimg2 src={Fototime4} alt="Foto do Time" title="Foto do Time" /> {/* Imagem do Time */}
          </Texto>
          <Texto2>
          <TextoPg2>
          Além disso, o futebol é uma forma de expressão cultural que pode estimular valores como trabalho em equipe, disciplina e resiliência. Essa prática lúdica engaja os alunos em um ambiente de colaboração, onde aprendem não só sobre técnicas e táticas, mas também sobre a importância do respeito e da empatia, são diferentes estilos e ritmos de aprendizado, fortalecendo a motivação e o interesse dos estudantes pela educação. Dessa forma, o futebol se transforma em um elemento que promove um aprendizado mais completo e significativo.
          </TextoPg2>
      </Texto2>
      <Relatos>Relatos</Relatos>
      <BoxArea>
        {/* Relato do Luizão */}
        <SingleBox>
          <ImgArea style={{ backgroundImage: `url(${Fototime})` }} /> {/* Imagem do Luizão */}
          <HeaderText><strong>Luizão</strong></HeaderText>
          <Line>
            <h3>Professor</h3>
            <p>"Ensinamos disciplina, trabalho em equipe e a importância de fazer boas escolhas. Acredito que, com dedicação e amor pelo esporte, podemos afastar nossos jovens das ruas."</p>
          </Line>
        </SingleBox>

        {/* Relato do Turbiani */}
        <SingleBox>
          <ImgArea style={{ backgroundImage: `url(${Fototime2})` }} /> 
          <HeaderText><strong>Turbiani</strong></HeaderText>
          <Line>
            <h3>Aluno e Programador</h3>
            <p>"Desenvolvi o site do projeto para ajudar a divulgar nosso trabalho e conectar mais pessoas. É ótimo ver a tecnologia e o futebol andando lado a lado na minha vida, e poder usar os dois juntos para evoluir."</p>
          </Line>
        </SingleBox>

        {/* Relato do Vinícius */}
        <SingleBox>
          <ImgArea style={{ backgroundImage: `url(${Fototime3})` }} /> 
          <HeaderText><strong>Kauã</strong></HeaderText>
          <Line>
            <h3>Aluno</h3>
            <p>"Participar das aulas de futebol me ajudou a melhorar minha disciplina e trabalho em equipe. Além de aprender técnicas, ganhei confiança e foco para enfrentar desafios na vida."</p>
          </Line>
        </SingleBox>
      </BoxArea>
      </Container>
    </>
  );
}

export default Main;