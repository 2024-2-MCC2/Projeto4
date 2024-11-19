import React from "react";
import styled from 'styled-components';
import { QRCodeSVG } from 'qrcode.react'; // Importa o componente QRCodeSVG


const Container = styled.div`
  margin-left:70px;
  margin-right: 70px;
  margin-bottom: 50px;
  margin-top: 50px;
`
const Títulos = styled.div`
  display: flex;
  justify-content: justify;
  text-align: justify;
  margin-top: 50px;
  margin-bottom: 70px;
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
const Ajuda = styled.div` 
  flex-grow: 1; 
  text-align: justify; 
`;

const ApoieP = styled.p`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 40px; 
  font-size: 25px; 
  margin-top: 15px; 
  line-height: 1.5; 
  text-align: justify;
`;

const QRCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const H = styled.div`
text-align: center;
font-weight: bold; 
padding-top: 10px;
margin-top: 50px;
font-size: 25px;
  background-color: #0549b6;
  height: auto;
  padding:10px;
  border-radius: 10px;
  color: white;
  font-weight: bold; // Define o tamanho da fonte
`
const H1 = styled.div`
text-align: center;
font-weight: bold; 
padding-top: 10px;
font-size: 20px;
`
function Ajude() {
    const pixLink = "00020101021126580014br.gov.bcb.pix013621ddc29e-b843-4e34-8b09-3e9a42844d0e5204000053039865802BR5918LUCAS SILVA MACIEL6009SAO PAULO62070503***6304D557"; // Seu link PIX

    return (
        <>  <Container>
            <Títulos>
              <Título1>01</Título1>
              <Título>Transforme Vidas Através do Futebol: Junte-se à Nossa Missão!</Título>
            </Títulos>
            <Ajuda>
                <ApoieP>
                    O Projeto Luizão: Meninos da Sayb vai muito além do futebol. Estamos comprometidos em transformar vidas por meio do esporte, promovendo inclusão, educação e oportunidades para jovens em situação de vulnerabilidade. Acreditamos no poder do futebol para unir comunidades, desenvolver habilidades e abrir portas para um futuro melhor.
                </ApoieP>

                <ApoieP>
                    Com o seu apoio, podemos continuar a promover valores como trabalho em equipe, disciplina, respeito e superação, ajudando cada jovem a crescer dentro e fora de campo. Suas doações são fundamentais para manter nossas atividades, fornecer materiais, organizar eventos e garantir que mais crianças tenham acesso a essas oportunidades.
                </ApoieP>

                <ApoieP>
                    Seja um doador, parceiro ou defensor da nossa causa! Sua contribuição, por menor que seja, faz uma grande diferença e é o combustível que nos impulsiona a continuar nossa jornada. Juntos, podemos fortalecer nossa missão e impactar positivamente a vida de muitos jovens. Agradecemos sinceramente pelo seu apoio!
                </ApoieP>
                <H>FAÇA SUA DOAÇÃO!</H>
                <QRCodeContainer>
                    <QRCodeSVG value={pixLink} size={256} /> {/* Gera o QR Code com o link fornecido */}
                </QRCodeContainer>
                <H1>Obrigado!</H1>
            </Ajuda>
            </Container>
        </>
    );
}

export default Ajude;
