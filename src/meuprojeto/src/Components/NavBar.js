import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavBarContainer = styled.nav`
    display: flex;
    justify-content:space-around;
    align-items: center;
    padding: 1em 1em;
`

const Menu = styled(Link)`
    justify-content:space-around;
    margin: 0 1em;
    cursor: pointer;
    color: #FFFFFF;
    font-weight: bold; // Torna o texto dos itens em negrito
    transition: color 0.3s ease; // Cria uma transição suave para a mudança de cor ao passar o mouse
    text-decoration: none;
    &:hover{
        text-decoration: underline;
        color: #CCCCCC;
    }
`

function NavBar(){
    return(
        <NavBarContainer>
            {/* <Menu>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                </Menu>
                <Menu>
                <Link to="/Instituto" style={{ color: 'inherit', textDecoration: 'none' }}>Instituto</Link>
                </Menu>
                <Menu>
                <Link to="/Apoie" style={{ color: 'inherit', textDecoration: 'none' }}>Apoie</Link>
                </Menu>
                <Menu>
                <Link to="/Contato" style={{ color: 'inherit', textDecoration: 'none' }}>Contato</Link>
                </Menu>
                <Menu>
                <Link to="/Perfil" style={{ color: 'inherit', textDecoration: 'none' }}>Perfil</Link>
                </Menu> */}
            <Menu to="/">Home</Menu>
            <Menu to="/Instituto">Instituto</Menu>
            <Menu to= "/Apoie">Apoie</Menu>
            <Menu to="/Contato">Contato</Menu>
            <Menu to="/Perfil">Perfil</Menu>
        </NavBarContainer>
    )
}

export default NavBar;