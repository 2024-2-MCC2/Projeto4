import React, { useRef } from 'react';
import styled from 'styled-components'; 
import { MdOutlineEmail } from "react-icons/md"; // Importa o ícone de e-mail do pacote react-icons.
import { SiMinutemailer } from "react-icons/si"; // Importa o ícone de mensagem do pacote react-icons.
import { IoMdPerson } from "react-icons/io"; // Importa o ícone de pessoa do pacote react-icons.
import { useNavigate } from 'react-router-dom';


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
const Ods = styled.div` 
  flex-grow: 1;
  margin: 70px 10px; // Adiciona margens externas
  text-align: justify; // Justifica o texto
`;

const OdsP = styled.p`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 40px; // Adiciona margem lateral
  font-size: 25px; // Define o tamanho da fonte
  margin-top: 15px; // Adiciona margem superior
  line-height: 1.5; // Define o espaçamento entre as linhas do texto
  text-align: justify;
`;

// Estilização com styled-components
// Define o container principal da seção de contatos com padding e cor de fundo preta.
const Contatos = styled.div`    
  padding: 1.5rem;
  margin-top: 30px;
  background-color: #fff;
`;

// Estiliza o título da seção de contatos, centralizando o texto e definindo cor e tamanho da fonte.
const Contatoh1 = styled.h1`
  text-align: center; // Centraliza o texto
  margin-bottom: 40px;
  font-size: 30px;
  background-color: #0549b6;
  height: auto;
  padding:10px;
  border-radius: 10px;
  color: white;
  font-weight: bold; // Define o tamanho da fonte
`;

// Container para o mapa e formulário. Utiliza flexbox para organizar os itens centralizados e com espaçamento entre eles.
const Containerform = styled.div`
  display: flex;
  justify-content: center;
  /* gap: 2rem; */
  margin-bottom: 20px;
`;

// Estiliza o componente de mapa (iframe do Google Maps), definindo largura e altura máximas.
const Map = styled.iframe`
  width: 100%;
  max-width: 458px;
  height: 398px;
  border: 0;
  border-radius: 10px 0px 0 10px;
  box-shadow: -10px 0px  15px 10px rgba(0, 0, 0, 0.4);
`;

// Estiliza o formulário com fundo azul, padding e uma sombra leve.
const Form = styled.form`
  width: 450px;
  background-color: #0549b6;
  padding: 1.5rem;
  border-radius: 0 10px 10px 0;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 0px 15px 10px rgba(0, 0, 0, 0.4);
`;

// Estiliza o título do formulário com cor branca e espaçamento na parte inferior.
const FormTitle = styled.h3`
  text-align: center;
  color: #fff;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

// Define a estilização dos campos de entrada (inputs), utilizando flexbox para alinhar ícones e campos de texto.
const InputForm = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: #000;
  border-radius: 5px;
  margin-bottom: 0.75rem;
  color: #fff;

  // Estiliza os ícones dentro do campo de entrada.
  svg {
    margin-right: 0.5rem;
    font-size: 1.5rem;
  }
`;

// Estiliza os campos de entrada de texto (nome, e-mail), definindo padding e cores do campo e texto.
const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  background: #000;
  border: none;
  color: #fff;
  border-radius: 5px;
  outline: none;

  // Define a cor do texto placeholder dentro dos campos de entrada.
  &::placeholder {
    color: #ccc;
  }
`;


// Estiliza o botão de envio do formulário, definindo cores e comportamento de hover.
const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 0.75rem;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s ease;

  // Altera a cor de fundo quando o botão é focado ou clicado.
  &:hover {
    background-color: #ddd;
  }
`;

  function handleSubmit(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário (que seria recarregar a página)
    alert('Formulário enviado com sucesso!'); // Exibe uma mensagem de sucesso após envio do formulário
  
    // Limpa os campos do formulário
    document.getElementById("contactForm").reset(); // Reseta todos os campos do formulário
  }


// Componente de Contato
function Local() {
  const formRef = useRef(null); // Cria uma referência para o formulário
  const navigate = useNavigate();
  function validateForm(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um email válido.");
        return false; 
    }
      fetch('https://formsubmit.co/lucassmaciel2006@gmail.com', { // A URL precisa ser formatada corretamente
          method: 'POST', // Define o método de envio
          body: new FormData(formRef.current), // Envia os dados do formulário com FormData
      }).then(response => {
          if (response.ok) {
              alert("Formulário enviado com sucesso!");
              formRef.current.reset(); // Reseta o formulário após o envio
          } else {
              throw new Error('Erro ao enviar o formulário.');
          }
      }).catch(error => {
          console.error('Erro ao enviar o formulário:', error);
          alert("Ocorreu um erro ao enviar o formulário.");
      });
  
      return false; // Impede o envio padrão do formulário
  }
  return (
    <>
    <Container>
       <Títulos>
          <Título1>01</Título1>
          <Título> Entre em Contato com o Nosso Projeto Social de Futebol</Título>
        </Títulos>
         <Ods>
         <OdsP>O Projeto Luizão: Meninos da Sayb vai muito além das quatro linhas. Estamos comprometidos em promover inclusão, educação e oportunidades através do esporte, acreditando no poder transformador do futebol para unir comunidades, desenvolver habilidades e criar oportunidades para jovens em situações de vulnerabilidade. Através do futebol, promovemos valores como trabalho em equipe, disciplina, respeito e superação, ajudando cada participante a crescer tanto dentro quanto fora de campo.
      </OdsP>
        <OdsP>
      Seja um parceiro, voluntário ou simplesmente curioso, estamos aqui para ouvir suas sugestões e responder suas perguntas. Utilize o formulário abaixo para mandar sua mensagem e esclarecer suas dúvidas. Faremos o possível para responder o mais rápido possível.

      Estamos ansiosos para ouvir de você e fortalecer nossa missão juntos. Nosso compromisso é fazer a diferença, e você pode nos ajudar a continuar essa jornada.
    </OdsP>
  </Ods>
    <Contatos>
      <Contatoh1>Fale Conosco</Contatoh1>
      <Containerform>
        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5174.097244644716!2d-46.648209732558406!3d-23.50949999646874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef7dfa090233b%3A0x9710deefa3ef9d7e!2zR3LDqm1pbyBBbGlhbsOnYQ!5e0!3m2!1spt-BR!2sbr!4v1727264487985!5m2!1spt-BR!2sbr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <Form id="contactForm" onSubmit={handleSubmit}>
          <FormTitle>Deixe uma mensagem</FormTitle>
          <InputForm>
            <IoMdPerson />
            <Input type="text" name="name" placeholder="Nome" required />
          </InputForm>
          <InputForm>
            <MdOutlineEmail />
            <Input type="email" name="email" placeholder="E-mail" required />
          </InputForm>
          <InputForm>
            <SiMinutemailer />
            <Input name="message" placeholder="Mensagem" required />
          </InputForm>
          <SubmitButton type='submit'>Enviar</SubmitButton>
        </Form>
      </Containerform>
    </Contatos>
    </Container>
    </>
  );
}

export default Local; 