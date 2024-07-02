import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>[skills]</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill title={"React"} iconId={"html"}></Skill>
                <Skill title={"Redux"} iconId={"html"}></Skill>
                <Skill title={"Typescript"} iconId={"html"}></Skill>
                <Skill title={"JavaScript"} iconId={"html"}></Skill>
                <Skill title={"Rest API"} iconId={"html"}></Skill>
                <Skill title={"Redux"} iconId={"html"}></Skill>
                <Skill title={"Html"} iconId={"html"}></Skill>
            </FlexWrapper>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: magenta;
    min-height: 100vh;
    display: flex;
    gap: 50px;
`
