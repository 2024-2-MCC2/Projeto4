import styled from "styled-components";
import React, { useEffect, useState } from "react";
import ImageText from "../Components/ImageText";
import p1 from "../Assets/p1.png";
import p2 from "../Assets/p2.png";
import p3 from "../Assets/p3.png";
import p4 from "../Assets/p4.png";
import p5 from "../Assets/p5.png";
import p6 from "../Assets/p6.png";
import p7 from "../Assets/p7.png";
import p8 from "../Assets/p8.png";
import p9 from "../Assets/p9.png";
import p10 from "../Assets/p10.png";
import p11 from "../Assets/p11.png";
import p12 from "../Assets/p12.png";
import p13 from "../Assets/p13.png";
import p14 from "../Assets/p14.png";
import p15 from "../Assets/p15.png";
import p16 from "../Assets/p16.png";
import p17 from "../Assets/p17.png";
import p18 from "../Assets/p18.png";
import p19 from "../Assets/p19.png";
import p20 from "../Assets/p20.png";

const Container = styled.div`
  margin-left: 70px;
  margin-right: 70px;
`;

const Instprojeto = styled.div`
  display: flex;
  flex-grow: 1;

  text-align: justify;
`;

const InstContainer = styled.div`
  text-align: center;

`;

const StyledHeader = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StyledParagraph = styled.p`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 40px;
  font-size: 28px;
  margin-top: 15px;
  line-height: 1.5;
  text-align: justify;
`;

const EntContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 20px;
  gap: 50px;
`;

const Patrocinio1 = styled.div`
  margin: 100px 20px;
`;

const Caixa = styled.div`
  width: 60vw;
  height: 12rem;
  background: grey;
  margin: 4rem auto 0 auto;
  border: solid 4px;
  display: flex;
  padding: 1rem;
  overflow-x: auto;
  align-items: center;
`;

const C1 = styled.div`
  min-width: 12rem;
  max-height: 12rem;
  background: red;
  border: solid 2px;
  margin-left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: bold 2rem sans-serif;
  color: white;
`;

function Sobre() {
  const Patrocinio = [
    { id: "1", src: p1, alt: "Patrocinador 1", title: "" },
    { id: "2", src: p2, alt: "Patrocinador 2", title: "" },
    { id: "3", src: p3, alt: "Patrocinador 3", title: "" },
    { id: "4", src: p4, alt: "Patrocinador 4", title: "" },
    { id: "5", src: p5, alt: "Patrocinador 5", title: "" },
    { id: "6", src: p6, alt: "Patrocinador 6", title: "" },
    { id: "7", src: p7, alt: "Patrocinador 7", title: "" },
    { id: "8", src: p8, alt: "Patrocinador 8", title: "" },
    { id: "9", src: p9, alt: "Patrocinador 9", title: "" },
    { id: "10", src: p10, alt: "Patrocinador 10", title: "" },
    { id: "11", src: p11, alt: "Patrocinador 11", title: "" },
    { id: "12", src: p12, alt: "Patrocinador 12", title: "" },
    { id: "13", src: p13, alt: "Patrocinador 13", title: "" },
    { id: "14", src: p14, alt: "Patrocinador 14", title: "" },
    { id: "15", src: p15, alt: "Patrocinador 15", title: "" },
    { id: "16", src: p16, alt: "Patrocinador 16", title: "" },
    { id: "17", src: p17, alt: "Patrocinador 17", title: "" },
    { id: "18", src: p18, alt: "Patrocinador 18", title: "" },
    { id: "19", src: p19, alt: "Patrocinador 19", title: "" },
    { id: "20", src: p20, alt: "Patrocinador 20", title: "" },
  ];

  const [highlightedPatrocinio, setHighlightedPatrocinio] = useState(Patrocinio.slice(0, 4)); // Inicializa com 4 imagens

  useEffect(() => {
    const rotatePatrocinio = () => {
      setHighlightedPatrocinio((prevPatrocinio) => {
        const currentIndex = Patrocinio.findIndex((s) => s.id === prevPatrocinio[0].id);
        const nextIndex = (currentIndex + 4) % Patrocinio.length; // Muda para 4
        return Patrocinio.slice(nextIndex, nextIndex + 4); // Muda para 4
      });
    };
  
    const intervalo = setInterval(rotatePatrocinio, 5000);
    return () => clearInterval(intervalo);
  }, [Patrocinio]);
  

  return (
    <>
      <Container>
        <Instprojeto>
          <InstContainer>
          <StyledHeader>Sobre o Projeto Luizão: Meninos da Sayb</StyledHeader>
          <StyledParagraph>
          O Projeto Luizão: Meninos da Sayb oferece uma oportunidade única para crianças da Zona Norte de São Paulo, realizando atividades esportivas todos os sábados. Com foco no futebol, o projeto busca proporcionar um dia de lazer e esporte, especialmente para jovens de áreas carentes. A missão é clara: utilizar o esporte como um caminho para um futuro melhor, afastando os participantes de atividades criminosas e apresentando a eles uma perspectiva de segurança e realização pessoal. Por meio da prática esportiva, buscamos inspirar essas crianças a sonhar e a acreditar em um futuro promissor.
            </StyledParagraph>
          <StyledHeader>Alinhamento com a ODS 3: Saúde e Bem-Estar</StyledHeader>
          <StyledHeader>Promovendo Saúde e Bem-Estar Através do Esporte</StyledHeader>
          <StyledParagraph>
           O Projeto Luizão: Meninos da Sayb está profundamente alinhado com o Objetivo de
            Desenvolvimento Sustentável (ODS) 3 da ONU, que visa garantir uma vida saudável e
            promover o bem-estar para todos. Através das atividades de futebol realizadas aos
            sábados, o projeto não apenas proporciona uma alternativa saudável e divertida para as
            crianças da Zona Norte de São Paulo, mas também contribui para a melhoria de sua
            saúde física e mental.
            </StyledParagraph>
            <StyledParagraph>
            Nosso compromisso vai além do simples treinamento esportivo. Ao integrar o esporte
            em nossas atividades, estamos promovendo um estilo de vida ativo, combatendo o
            sedentarismo e incentivando hábitos saudáveis. Além disso, oferecemos suporte
            emocional e social, ajudando as crianças a desenvolverem autoestima, habilidades de
            socialização e resiliência. Ao fazer isso, o Projeto Luizão está ajudando a criar uma base
            sólida para um futuro mais saudável e equilibrado, refletindo o espírito da ODS 3 e
            contribuindo para o bem-estar integral de nossos jovens participantes.
            </StyledParagraph>
            <StyledHeader>Como são nossas aulas?</StyledHeader>
            <StyledParagraph>
             Nossas aulas têm início todas as manhãs de sábado, quando o Luizão, nosso dedicado instrutor, aguarda a
              chegada de todos os alunos para começar os alongamentos. Após esse momento de preparação, ele dá início aos jogos entre as crianças. Ao longo das atividades, com um olhar atento, o professor percebe quando ocansaço começa a aparecer e, com carinho, sugere uma pausa. É nessas pausas que ele aproveita paracompartilhar sua sabedoria e, com sensibilidade, orientar as crianças a trilharem um caminho de vida saudável, longe das drogas e da criminalidade.
            </StyledParagraph>
          </InstContainer>
        </Instprojeto>

        {/* Seção de entrevistas */}
        <div className="entrevista">
          <StyledHeader>Entrevistas</StyledHeader>
          <StyledHeader>Aqui estão algumas reportagens sobre o nosso instituto:</StyledHeader>
          <EntContainer>
            <iframe
              width="650"
              height="450"
              src="https://www.youtube.com/embed/I5mcCOZnmU4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: "none" }}
            ></iframe>

            <iframe
              width="650"
              height="450"
              src="https://www.youtube.com/watch?v=gmzp5E4jlvs"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: "none" }}
            ></iframe>
          </EntContainer>
        </div>

        {/* Seção de patrocinadores */}
        <Patrocinio1>
          <StyledHeader>Patrocinadores</StyledHeader>
          <StyledHeader>Sua generosidade faz nossa missão brilhar! Obrigado, apoiadores!</StyledHeader>
          <Caixa>
            <C1>
              <img src={p1} alt="Patrocinador 1" style={{ width: "100%", height: "100%" }} />
            </C1>
            <C1>
              <img src={p2} alt="Patrocinador 2" style={{ width: "100%", height: "100%" }} />
            </C1>
            <C1>
              <img src={p3} alt="Patrocinador 3" style={{ width: "100%", height: "100%" }} />
            </C1>
            <C1>
              <img src={p4} alt="Patrocinador 3" style={{ width: "100%", height: "100%" }} />
            </C1>
            <C1>
              <img src={p5} alt="Patrocinador 3" style={{ width: "100%", height: "100%" }} />
            </C1>
            <C1>
              <img src={p6} alt="Patrocinador 3" style={{ width: "100%", height: "100%" }} />
            </C1>
            <C1>
              <img src={p7} alt="Patrocinador 3" style={{ width: "100%", height: "100%" }} />
            </C1>
            <C1>
              <img src={p8} alt="Patrocinador 3" style={{ width: "100%", height: "100%" }} />
            </C1>
            <C1>
              <img src={p9} alt="Patrocinador 3" style={{ width: "100%", height: "100%" }} />
            </C1>
            <C1>
              <img src={p10} alt="Patrocinador 3" style={{ width: "100%", height: "100%" }} />
            </C1>
            <C1>
              <img src={p11} alt="Patrocinador 3" style={{ width: "100%", height: "100%" }} />
            </C1>
            <C1>
              <img src={p12} alt="Patrocinador 3" style={{ width: "100%", height: "100%" }} />
            </C1>
            <C1>
              <img src={p13} alt="Patrocinador 3" style={{ width: "100%", height: "100%" }} />
            </C1>

            <C1>
              <img src={p3} alt="Patrocinador 3" style={{ width: "100%", height: "100%" }} />
            </C1>
            <C1>
              <img src={p14} alt="Patrocinador 3" style={{ width: "100%", height: "100%" }} />
            </C1>
            <C1>
              <img src={p15} alt="Patrocinador 3" style={{ width: "100%", height: "100%" }} />
            </C1>
            <C1>
              <img src={p16} alt="Patrocinador 3" style={{ width: "100%", height: "100%" }} />
            </C1>
            <C1>
              <img src={p17} alt="Patrocinador 3" style={{ width: "100%", height: "100%" }} />
            </C1>
            <C1>
              <img src={p18} alt="Patrocinador 3" style={{ width: "100%", height: "100%" }} />
            </C1>
            <C1>
              <img src={p19} alt="Patrocinador 3" style={{ width: "100%", height: "100%" }} />
            </C1>
            <C1>
              <img src={p20} alt="Patrocinador 3" style={{ width: "100%", height: "100%" }} />
            </C1>
          </Caixa>
        </Patrocinio1>

        {/* Destaque rotativo de patrocinadores */}
        <ImageText patrocinios={highlightedPatrocinio} />
      </Container>
    </>
  );
}

export default Sobre;
