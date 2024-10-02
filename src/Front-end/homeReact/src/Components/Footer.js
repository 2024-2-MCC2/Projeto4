import React from "react";
import styled from "styled-components";
import { MdOutlineEmail } from "react-icons/md"; // Importa o ícone de e-mail do pacote react-icons.
import { SiWhatsapp } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

// Estilização do container do rodapé
const FooterContainer = styled.footer`
    width: 100%;
    color: #f5f5f5;
    background-color: #0549b6; // Cor de fundo do rodapé
`;

// Estilização do conteúdo do rodapé, organizado em 4 colunas
const FooterContent = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); // 4 colunas de tamanho igual
    padding: 3rem 3.5rem; // Espaçamento interno

    // Ajusta o layout para telas menores (ex.: tablets)
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr); // 2 colunas em telas pequenas
        gap: 2rem; // Espaçamento entre as colunas
    }

    // Ajusta o layout para telas ainda menores (ex.: celulares)
    @media screen and (max-width: 426px) {
        grid-template-columns: repeat(1, 1fr); // 1 coluna em telas muito pequenas
        padding: 3rem 2rem;
    }
`;

// Estilização do título do rodapé
const FooterTitle = styled.h1`
    margin-bottom: 0.75rem; // Espaçamento inferior do título
`;

// Estilização da seção de mídias sociais do rodapé
const FooterSocialMedia = styled.div`
    display: flex;
    gap: 2rem; // Espaçamento entre os ícones de redes sociais
    margin-top: 1.5rem;
`;

// Estilização dos links das redes sociais com cores e efeitos de hover
const SocialLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%; // Deixa os ícones em formato circular
    transition: all 0.4s; // Transição suave ao passar o mouse
    color: #f5f5f5;

    &:hover {
        opacity: 0.8; // Efeito de opacidade ao passar o mouse
    }

    // Estilização para redes sociais específicas (cores customizadas)
    &.instagram {
        background: linear-gradient(#7f37c9, #ff2992, #ff9807); // Gradiente para o Instagram
    }

    &.facebook {
        background-color: #4267b3; // Cor específica para o Facebook
    }

    &.whatsapp {
        background-color: #25d366; // Cor específica para o WhatsApp
    }
`;

// Lista de links com estilo vertical
const FooterList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.75rem; // Espaçamento entre os itens da lista
    list-style: none; // Remove os marcadores da lista
    margin-left: 10px;

    // Estilização do título dentro da lista
    & h3 {
        font-size: 1.5rem; // Consistência no tamanho da fonte
        margin-bottom: 0.75rem;
    }

    // Estilização dos links dentro da lista
    & .footer-link {
        color: #a8a29e; // Cor dos links
        transition: all 0.4s; // Transição suave ao passar o mouse

        &:hover {
            color: #7f37c9; // Cor dos links ao passar o mouse
        }
    }
`;

// Estilização da seção de subscrição (newsletter)
const FooterSubscribe = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem; // Espaçamento entre os elementos
    margin-left: 10px;
    list-style: none;

    // Estilização do título dentro da seção de subscrição
    & h3 {
        font-size: 1.5rem; // Consistência no tamanho da fonte
        margin-bottom: 0.75rem;
    }
`;

// Grupo de entrada do e-mail com botão de inscrição
const InputGroup = styled.div`
    display: flex;
    align-items: center;
    background-color: #0e0c0c; // Fundo escuro para o campo de entrada
    border-radius: 4px; // Bordas arredondadas

    // Estilização do campo de entrada de e-mail
    input {
        all: unset;
        padding: 0.75rem; // Espaçamento interno do campo
        width: 100%; // Ocupa 100% da largura disponível
    }

    // Estilização do botão de envio do formulário de inscrição
    button {
        background-color: #000000; // Cor do botão
        border: none; // Remove bordas
        color: #f5f5f5; // Cor do texto do botão
        padding: 0px 1.25rem; // Espaçamento interno do botão
        font-size: 1.125rem;
        height: 100%; // Ajusta a altura para preencher o container
        border-radius: 0px 4px 4px 0px; // Bordas arredondadas para o lado direito
        cursor: pointer; // Mostra o cursor de "mão" ao passar o mouse
        transition: all 0.4s;

        &:hover {
            opacity: 0.8; // Efeito de hover no botão
        }
    }
`;

// Estilização do campo de entrada de texto
const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: #000; // Fundo preto para o campo de entrada
  border: none; // Sem bordas
  color: #fff; // Texto branco
  border-radius: 5px;
  outline: none;

  // Estilização do placeholder (texto de exemplo dentro do campo)
  &::placeholder {
    color: #ccc;
  }
`;

// Estilização do container de direitos autorais no rodapé
const FooterCopyright = styled.div`
    display: flex;
    justify-content: center;
    background-color: #0549b6; // Cor de fundo igual ao restante do rodapé
    font-size: 0.9rem; // Tamanho da fonte para os direitos autorais
    padding: 1.5rem;
    font-weight: 100; // Peso leve para o texto
`;

// Função para manipular o envio do formulário de subscrição (newsletter)
function handleSubscribe(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)
    const email = event.target.elements.email.value; // Captura o valor do campo de e-mail
    alert(`Obrigado por se inscrever! Email: ${email}`); // Exibe um alerta com o e-mail inserido
}

// Componente principal do rodapé
function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                {/* Seção de contatos e redes sociais */}
                <div className="footer-contacts">
                    <FooterTitle>Meninos da Sayb</FooterTitle>
                    <p>Transforme sua saúde em<br /> um jogo de vitórias</p>

                    {/* Links para redes sociais */}
                    <FooterSocialMedia>
                        <SocialLink href="https://www.instagram.com/projetoluizao/" className="instagram">
                        <FaInstagram />
                            <i className="fa-brands fa-instagram"></i>
                        </SocialLink>
                        <SocialLink href="https://facebook.com/projetoluizao" className="facebook">
                        <FaFacebook />
                            <i className="fa-brands fa-facebook"></i>
                        </SocialLink>
                        <SocialLink href="#" className="whatsapp">
                        <SiWhatsapp />                           
                         <i className="fa-brands fa-whatsapp"></i>
                        </SocialLink>
                    </FooterSocialMedia>
                </div>

                {/* Lista de links de blog */}
                <FooterList>
                    <li>
                        <h3>Blog</h3>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Nomequalquer</a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Nomequalquer</a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Nomequalquer</a>
                    </li>
                </FooterList>

                {/* Lista de links de referências */}
                <FooterList>
                    <li>
                        <h3>Referências</h3>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Nomequalquer</a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Nomequalquer</a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Nomequalquer</a>
                    </li>
                </FooterList>

                {/* Seção de subscrição (newsletter) */}
                <FooterSubscribe>
                    <h3>Subscribe</h3>
                    <p>Coloque seu email para ficar por dentro de tudo sobre o projeto</p>

                    {/* Formulário de subscrição */}
                    <form onSubmit={handleSubscribe}>
                        <InputGroup>
                            <Input type="email" name="email" placeholder="E-mail" required />
                            <button type="submit">
                                <MdOutlineEmail />
                            </button>
                        </InputGroup>
                    </form>
                </FooterSubscribe>
            </FooterContent>

            {/* Direitos autorais no rodapé */}
            <FooterCopyright>
                <p>&#169; 2024 todos os direitos reservados</p>
            </FooterCopyright>
        </FooterContainer>
    );
}

export default Footer;

