import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import Video from '../Assets/v1.mp4';

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 0 0 20px;
  position: relative;
  overflow: hidden;
  min-height: 700px;
  margin-bottom: 70px;
`;

const VideoBg = styled.video`
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
`;

const Intro = styled.div`
  text-align: center;
  width: 100%;
  margin: auto;
  max-width: 960px;
`;
const H1 = styled.h1 `

  background: #0549b6;
  color: #fff;

  font-size: 30px; /* Ajuste o tamanho da fonte conforme necessário */
  display: inline-block;

`

function Banner() {
  const [text, setText] = useState('');
  const fullText = 'Transforme sua saúde em um jogo de vitórias!';
  const [isDeleting, setIsDeleting] = useState(false); // Controla o estado de apagar
  const [index, setIndex] = useState(0); // Controla o índice da frase
  
  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isDeleting) {
        // Apaga o texto
        setText((prevText) => prevText.slice(0, prevText.length - 1));
        if (text.length === 0) {
          setIsDeleting(false); // Começa a escrever novamente
          setIndex(0); // Reinicia o índice para começar a digitar a frase novamente
        }
      } else {
        // Digita o texto
        if (index < fullText.length) {
          setText((prevText) => prevText + fullText[index]);
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsDeleting(true); // Começa a apagar quando a frase for toda digitada
        }
      }
    }, 100); // Tempo de digitação entre os caracteres (ajuste o valor conforme necessário)

    return () => clearInterval(typingInterval); // Limpeza do intervalo quando o componente for desmontado
  }, [text, isDeleting, index]); // O efeito depende do texto, da flag de apagamento e do índice

  return (
    <BannerContainer>
      <Intro>
        <H1>{text}</H1>
        <VideoBg autoPlay muted loop>
          <source src={Video} type="video/mp4" />
        </VideoBg>
      </Intro>
    </BannerContainer>
  );
}
export default Banner;






