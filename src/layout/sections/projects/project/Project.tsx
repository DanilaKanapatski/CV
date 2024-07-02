import React from 'react';
import styled from "styled-components";

type ProjectTypeProps = {
    src: string,
    title: string,
    text: string
}

export const Project = (props:ProjectTypeProps) => {
    return (
        <StyledProject>
            <Image src={props.src} alt={'project'}></Image>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: darkgrey;
    width: 30%;
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    height: 260px;
`

const Title = styled.h2`
    
`

const Text = styled.p`
    
`