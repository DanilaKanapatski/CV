import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>[contacts]</SectionTitle>
            <FlexWrapper direction={"column"}>
                <ContactsTitle>Contact me in any way that suits you!</ContactsTitle>
                <ContactsText>Have questions? Message me on any messenger, and I'll respond promptly.</ContactsText>
            </FlexWrapper>
            <FlexWrapper wrap={"wrap"}>
                <Link href={"#"}>Telegram</Link>
                <Link href={"#"}>Inst</Link>
                <Link href={"#"}>Gmail</Link>
                <Link href={"#"}>Linkedin</Link>
            </FlexWrapper>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    background-color: coral;
    min-height: 50vh;
    display: flex;
    justify-content: space-between;
`

const ContactsTitle = styled.h3`

`

const ContactsText = styled.h3`

`

const Link = styled.a`
    
`