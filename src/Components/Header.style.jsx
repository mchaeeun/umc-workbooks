import styled from 'styled-components';
import { Link } from 'react-router-dom'
export const NavWrapper = styled.nav`
    display: grid;
    background-color: #081c24;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    margin: auto;

`;
export const Category = styled.li`
    list-style-type: none;
    display: inline;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 10px;
    margin: 0 10px;
`;

export const StyledUl = styled.ul`
    grid-column: span 3;
`;