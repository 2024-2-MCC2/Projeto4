import Navbar from './NavBar'
import styled from 'styled-components'
import Logo from './img/luizao-logo.jpeg'
import React from 'react'
import { Link } from 'react-router-dom'

// const LogoLink = styled(Link)`
//     text-decoration: none;
// `

const HeaderFixed = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color:  #0549b6; /* Fundo azul claro */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para destaque */
    z-index: 1000;
    padding: 30px 0;
`
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    max-width: 1200px;
    margin: 0 auto;
`

const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
`
const LogoImage = styled.img`
    width: 20%; /* 20% do contêiner*/
    height: auto; /* Mantém a proporção */
    max-height: 50px; /* Limita a altura máxima */
    border-radius: 10px;
    margin-right: 5px; /* Espaço entre a imagem e o título */
`
const P = styled.p`
    font-weight: bold;
    font-size: 13px;
    color: white;
`

function Header() {

    return (
        <div className="Cabecalho">
            <HeaderFixed>
                <HeaderContainer>
                  <HeaderLogo>
                    {/* <Link to="/">
                        <LogoImage src = {Logo} alt="Logo do projeto" title= "Logo do  projeto"/>
                    </Link> */}
                    <LogoImage src = {Logo} alt="Logo do projeto" title= "Logo do  projeto"/> 
                    <P>
                        <p>Meninos da Sayb</p>
                    </P> 
                  </HeaderLogo>
                      <Navbar></Navbar>
             </HeaderContainer>
         </HeaderFixed>
        </div>
    );
  }

  export default Header;