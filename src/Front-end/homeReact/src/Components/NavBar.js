import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Importando o Link do React Router

// Estilos do componente NavBar
const NavBarContainer = styled.nav`
    margin-left: auto;
`;

const Menu = styled.ul`
    display: flex;
    align-items: center;
    margin: 0 15px;
    gap: 30px;
`;

const ItemMenu = styled.li`
    color: #FFFFFF; /* Cor branca para os links */
    text-decoration: none;
    font-size: 25px; /* Aumenta o tamanho da letra */
    transition: color 0.3s ease;
    list-style: none;

    &:hover {
        color: #CCCCCC; /* Muda a cor ao passar o mouse */
    }
`;

function NavBar() {
    return (
        <NavBarContainer>
            <Menu>
                <ItemMenu>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                </ItemMenu>
                <ItemMenu>
                    <Link to="/Instituto" style={{ color: 'inherit', textDecoration: 'none' }}>Instituto</Link>
                </ItemMenu>
                <ItemMenu>
                    <Link to="/Apoie" style={{ color: 'inherit', textDecoration: 'none' }}>Apoie</Link>
                </ItemMenu>
                <ItemMenu>
                    <Link to="/Contato" style={{ color: 'inherit', textDecoration: 'none' }}>Contato</Link>
                </ItemMenu>
                <ItemMenu>
                    <Link to="/Perfil" style={{ color: 'inherit', textDecoration: 'none' }}>Perfil</Link>
                </ItemMenu>
            </Menu>
        </NavBarContainer>
    );
}

export default NavBar;
