import React from 'react';
import styled from "styled-components";
import mainPhoto from "../../../assets/images/main-photo.png"
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
                <Photo src={mainPhoto} alt={"main Photo"}/>
                <div>
                    <MainTitle>Frontend Developer</MainTitle>
                    <MainText>I create user interfaces for websites, applications, or software.</MainText>
                </div>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    background-color: salmon;
    height: 100vh;
`

const Photo = styled.img`
    width: 1160px;
    height: 338px;
    object-fit: cover;
`

const MainTitle = styled.h1`

`
const MainText = styled.p`
`