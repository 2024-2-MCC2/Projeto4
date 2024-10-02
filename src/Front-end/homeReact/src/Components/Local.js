import React from 'react'; 
import styled from 'styled-components'; 
import { MdOutlineEmail } from "react-icons/md"; // Importa o ícone de e-mail do pacote react-icons.
import { SiMinutemailer } from "react-icons/si"; // Importa o ícone de mensagem do pacote react-icons.
import { IoMdPerson } from "react-icons/io"; // Importa o ícone de pessoa do pacote react-icons.

// Estilização com styled-components
// Define o container principal da seção de contatos com padding e cor de fundo preta.
const Contatos = styled.div`    
  padding: 1.5rem;
  margin-top: 50px;
  background-color: #000000;
`;

// Estiliza o título da seção de contatos, centralizando o texto e definindo cor e tamanho da fonte.
const Contatoh1 = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

// Container para o mapa e formulário. Utiliza flexbox para organizar os itens centralizados e com espaçamento entre eles.
const Containerform = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* gap: 2rem; */
  margin-bottom: 20px;
`;

// Estiliza o componente de mapa (iframe do Google Maps), definindo largura e altura máximas.
const Map = styled.iframe`
  width: 100%;
  max-width: 458px;
  height: 398px;
  border: 0;
`;

// Estiliza o formulário com fundo azul, padding e uma sombra leve.
const Form = styled.form`
  width: 100%;
  max-width: 450px;
  background-color: #0549b6;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
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
  padding: 0.75rem;
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


// Função de manipulação de formulário
// Impede o comportamento padrão de recarregar a página ao enviar o formulário, exibindo uma mensagem de sucesso.
function handleSubmit(event) {
  event.preventDefault(); // Impede o comportamento padrão do formulário de recarregar a página.
  alert('Formulário enviado com sucesso!'); // Exibe uma mensagem de sucesso quando o formulário é enviado.
}

// Componente de Contato
function Local() {
  function validateForm(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    var email = document.getElementById("email").value;

    // Verifica se o email é válido usando uma expressão regular
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um email válido.");
        return false; // Impede o envio do formulário
    }

    // Se a validação passar, envia os dados para o FormSubmit
    fetch('https://formsubmit.co/lucassmaciel2006@gmail.com', {
        method: 'POST',
        body: new FormData(document.getElementById('contactForm'))
    }).then(response => {
        if (response.ok) {
            alert("Formulário enviado com sucesso!");
            window.location.href = '../Components/Local'; // Redireciona para a home
        } else {
            throw new Error('Erro ao enviar o formulário.');
        }
    }).catch(error => {
        console.error('Erro ao enviar o formulário:', error);
        alert("Ocorreu um erro ao enviar o formulário.");
    });

    return false; // Impede o envio do formulário padrão, já que estamos usando fetch
}

  return (
    <Contatos>
      {/* Título da seção de contato */}
      <Contatoh1>Contato</Contatoh1>
      
      {/* Container que agrupa o mapa e o formulário */}
      <Containerform>
        {/* Mapa do Google Maps embutido na página */}
        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5174.097244644716!2d-46.648209732558406!3d-23.50949999646874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef7dfa090233b%3A0x9710deefa3ef9d7e!2zR3LDqm1pbyBBbGlhbsOnYQ!5e0!3m2!1spt-BR!2sbr!4v1727264487985!5m2!1spt-BR!2sbr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Formulário de contato */}
        <Form onSubmit={handleSubmit}>
          <FormTitle>Deixe uma mensagem</FormTitle>

          {/* Campo para entrada do nome, com ícone de pessoa */}
          <InputForm>
            <IoMdPerson />
            <Input type="text" name="name" placeholder="Nome" required />
          </InputForm>

          {/* Campo para entrada de e-mail, com ícone de e-mail */}
          <InputForm>
            <MdOutlineEmail />
            <Input type="email" name="email" placeholder="E-mail" required />
          </InputForm>

          {/* Área de texto para mensagem, com ícone de mensagem */}
          <InputForm>
            <SiMinutemailer />
            <Input name="message" placeholder="Mensagem" required />
          </InputForm>

          {/* Botão para enviar o formulário */}
          <SubmitButton type="submit">Enviar</SubmitButton>
        </Form>
      </Containerform>
    </Contatos>
  );
}

export default Local; 