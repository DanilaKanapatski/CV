import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";

type SkillPropsType = {
    iconId: string,
    title: string
}

export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    display: flex;
    gap: 30px;
    background-color: aquamarine;
    width: 30%;
`

const SkillTitle = styled.h3`
    
`