import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";

const items = ["main","about","skills","projects","contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <span>Danila Kanapatski</span>
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: darkcyan;
    display: flex;
    justify-content: space-between;
`