import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import photo from "../../../assets/images/proj-1.webp"

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>[projects]</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Project title={'Project 1'} text={'Lorem'} src={photo}/>
                <Project title={'Project 2'} text={'Lorem'} src={photo}/>
                <Project title={'Project 3'} text={'Lorem'} src={photo}/>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
    background-color: chocolate;
    display: flex;
    gap: 50px;
`