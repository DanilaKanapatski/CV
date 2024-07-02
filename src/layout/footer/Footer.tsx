import React from 'react';
import styled from "styled-components";

export const Footer = () => {
    return (
        <StyledFooter>
            <FooterText>KANAPATSKI</FooterText>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: darksalmon;
    min-height: 30vh;
    text-align: center;
`

const FooterText = styled.p`
    
`