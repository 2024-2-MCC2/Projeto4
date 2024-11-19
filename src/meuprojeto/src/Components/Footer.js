import React from "react";
import styled from "styled-components";
import { MdOutlineEmail } from "react-icons/md"; 
import { SiWhatsapp } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FooterContainer = styled.footer`
    width: 100%;
    color: #f5f5f5;
    background-color: #0549b6; 
`;

const FooterContent = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    padding: 3rem 3.5rem; 

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr); 
        gap: 2rem; 
    }

    @media screen and (max-width: 426px) {
        grid-template-columns: repeat(1, 1fr); 
        padding: 3rem 2rem;
    }
`;

const FooterTitle = styled.h1`
    margin-bottom: 0.75rem; 
`;

const FooterSocialMedia = styled.div`
    display: flex;
    gap: 2rem; 
    margin-top: 1.5rem;
`;

const SocialLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%; 
    transition: all 0.4s; 
    color: #f5f5f5;

    &:hover {
        opacity: 0.8; 
    }

    &.instagram {
        background: linear-gradient(#7f37c9, #ff2992, #ff9807); 
    }

    &.facebook {
        background-color: #4267b3; 
    }

    &.whatsapp {
        background-color: #25d366; 
    }
`;

const FooterList = styled.ul`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 0.75rem; 
    list-style: none; 
    margin-left: 10px;

    & h3 {
        font-size: 1.5rem; 
        margin-bottom: 0.75rem;
    }

    & .footer-link {
        color: #a8a29e; 
        transition: all 0.4s; 

        &:hover {
            color: #7f37c9; 
        }
    }
`;

const FooterSubscribe = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem; 
    margin-left: 10px;
    list-style: none;

    & h3 {
        font-size: 1.5rem; 
        margin-bottom: 0.75rem;
    }
`;

const InputGroup = styled.div`
    display: flex;
    align-items: center;
    background-color: black; 
    border-radius: 4px; 

    input {
        all: unset;
        padding: 0.75rem; 
        width: 100%; 
    }

    button {
        background-color: #000000; 
        border: none; 
        color: #f5f5f5; 
        padding: 0px 1.25rem; 
        font-size: 1.125rem;
        height: 100%; 
        border-radius: 0px 4px 4px 0px; 
        cursor: pointer; 
        transition: all 0.4s;

        &:hover {
            opacity: 0.8; 
        }
    }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: #000; 
  border: none; 
  color: #fff; 
  border-radius: 5px;
  outline: none;

  &::placeholder {
    color: #ccc;
  }
`;

const FooterCopyright = styled.div`
    display: flex;
    justify-content: center;
    background-color: #0549b6; 
    font-size: 0.9rem; 
    padding: 1.5rem;
    font-weight: 100; 
`;

const Line = styled.p`
    font-size: 20px;
    margin: auto;
    padding: auto;

`
function handleSubscribe(event) {
    event.preventDefault(); 
    const email = event.target.elements.email.value; 
    alert(`Obrigado por se inscrever! Email: ${email}`); 
}

function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                {/* Seção de contatos e redes sociais */}
                <div className="footer-contacts">
                    <FooterTitle>Meninos da Sayb</FooterTitle>
                    <p>Transforme sua saúde em<br /> um jogo de vitórias</p>

                    <FooterSocialMedia>
                        <SocialLink href="https://www.instagram.com/projetoluizao/" className="instagram">
                            <FaInstagram />
                        </SocialLink>
                        <SocialLink href="https://facebook.com/projetoluizao" className="facebook">
                            <FaFacebook />
                        </SocialLink>
                        <SocialLink href="#" className="whatsapp">
                            <SiWhatsapp />                           
                        </SocialLink>
                    </FooterSocialMedia>
                </div>

                {/* Lista de links de blog */}
                <FooterList>
                <li>
                        <h3>Feito por:</h3>
                    </li>
                    <li>
                        Bryan Ryan Sejas Matos
                    </li>
                    <li>
                        Guilherme Barioni
                    </li>
                    <li>
                        Leonardo Santos da Silva
                    </li>
                    <li>
                        Lucas Silva Maciel
                    </li>
                    <li>
                        Otávio Vecchi Zeferino
                    </li>
                </FooterList>

                {/* Lista de links de referências */}
                <FooterList>
                    <li>
                        <h3>Linkedin:</h3>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/bryan-matos-85718328b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2F0PX2BtORguEsV5jqx81Wg%3D%3D" className="footer-link">Linkedin</a>
                    </li>
                    <li>
                        <a href="https://br.linkedin.com/in/guilhermebarioni?trk=people-guest_people_search-card" className="footer-link">Linkedin</a>
                    </li>
                    <li>
                        <a href="https://br.linkedin.com/in/leonardo-santos-da-silva-415a26280?trk=people-guest_people_search-card" className="footer-link">Linkedin</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/lucas-silva-maciel-62492a201/" className="footer-link">Linkedin</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/otavio-vecchi-zeferino-0640b2318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="footer-link">Linkedin</a>
                    </li>
                </FooterList>

                {/* Seção de subscrição (newsletter) */}
                <FooterSubscribe>
                    <h3>Subscribe</h3>
                    <p>Coloque seu email para ficar por dentro de tudo sobre o projeto</p>

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

            <FooterCopyright>
                <p>&#169; 2024 todos os direitos reservados</p>
            </FooterCopyright>
        </FooterContainer>
    );
}

export default Footer;
