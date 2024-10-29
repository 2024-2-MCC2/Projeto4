import React, { useEffect , useState } from 'react'
import styled from 'styled-components';
import NavBar from '../Components/NavBar';
import Logo from '../Assets/luizao-logo.jpeg'
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    display: flex; // Define que os elementos dentro do Header serão organizados em linha
    position: fixed; // Define que o cabeçalho permanecerá fixo no topo da tela
    width: 100%; // O cabeçalho ocupará 100% da largura da tela
    top: 0; // Posiciona o cabeçalho no topo da página
    left: 0; // Alinha o cabeçalho à esquerda
    justify-content: space-between; // Distribui os elementos (logotipo e NavBar) nos extremos (esquerda e direita)
    align-items: center; // Centraliza verticalmente os itens no container
    transition: 0.5s ease;
    background-color:  ${({isRolagem}) => (isRolagem ? '#0549b6' : 'transparent')};
    box-shadow: ${({isRolagem}) => (isRolagem ? '0 4px 8px rgba(0, 0, 0, 0.1)' : '0')};
    padding: 10px 20px; // Define um espaçamento interno: 10px em cima e embaixo, 20px nas laterais
    color: #fff; // Define a cor do texto como branca
    font-weight: bold; // Define o texto como negrito
    z-index: 1000; // Garante que o cabeçalho fique sobre outros elementos
    max-width: 1330px; // Limita a largura máxima do cabeçalho
    font-size: 20px;
`;


const StyledLink = styled(Link)`
    display: flex;

    &{
        text-decoration: none;
    }
`
const HeaderLogo = styled.div`
    display: flex; // Organiza a imagem e o texto do logotipo em uma linha
    align-items: center; // Centraliza verticalmente a imagem e o texto
    object-fit: cover;
    height: auto; /* Mantém a proporção */

    p{
    font-weight: bold; // Define o texto como negrito
    font-size: 16px; // Define o tamanho da fonte para 13px
    color: white; // Define a cor do texto como branco
    }
`;
const LogoImage = styled.img`
    width: 40%; // Define que a imagem ocupará 20% da largura do container pai
    height: auto; // Mantém a proporção original da imagem
    padding: 0 0 0 20px;
    max-height: 65px; // Limita a altura máxima da imagem a 50px
    /* border-radius: 10px; // Adiciona bordas arredondadas à imagem */
    margin-right: 5px; // Adiciona um espaço entre a imagem e o texto ao lado
`;
function Header() {
    const [isRolagem, setIsRolagem] = useState(false);

    function handleScroll(){
        if (window.scrollY > 500){
            setIsRolagem(true)
        } else {
            setIsRolagem(false)
        }
    }

    useEffect(function(){
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <HeaderContainer isRolagem={isRolagem}>
            <HeaderLogo>
                <StyledLink to ="/">
                <LogoImage src={Logo} alt="Logo do projeto" title="Logo do projeto"/>
                <p>Meninos da Sayb</p>
                </StyledLink>
            </HeaderLogo>
            <NavBar />
        </HeaderContainer>
    );
}

export default Header;

