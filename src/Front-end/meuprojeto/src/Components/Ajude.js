import React from "react";
import styled from 'styled-components';
import { QRCodeSVG } from 'qrcode.react'; // Importa o componente QRCodeSVG

const ApoieH = styled.div`
  text-align: center; 
  margin-top: 10px; 
  font-size: 30px; 
  font-weight: bold; 
`;

const Ajuda = styled.div` 
  flex-grow: 1;
  margin: 70px 75px; 
  text-align: justify; 
`;

const ApoieP = styled.p`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 40px; 
  font-size: 28px; 
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
`

function Ajude() {
    const pixLink = "00020101021126580014br.gov.bcb.pix013621ddc29e-b843-4e34-8b09-3e9a42844d0e5204000053039865802BR5918LUCAS SILVA MACIEL6009SAO PAULO62070503***6304D557"; // Seu link PIX

    return (
        <>
            <ApoieH>Transforme Vidas Através do Futebol: Junte-se à Nossa Missão!</ApoieH>
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

                <QRCodeContainer>
                    <QRCodeSVG value={pixLink} size={256} /> {/* Gera o QR Code com o link fornecido */}
                </QRCodeContainer>
                <H>FAÇA SUA DOAÇÃO!</H>
            </Ajuda>
        </>
    );
}

export default Ajude;
