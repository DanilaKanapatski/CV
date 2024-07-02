import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import aboutPhoto from "../../../assets/images/about-photo.png"
import {FlexWrapper} from "../../../components/FlexWrapper";

export const About = () => {
    return (
        <StyledAbout>
            <SectionTitle>[about me]</SectionTitle>
            <FlexWrapper direction={"column"}>
                <FlexWrapper justify={"space-between"}>
                    <div>
                        <AboutTitle>My name is Danila Kanapatski, I am a frontend developer </AboutTitle>
                        <AboutText>Lorem ipsum young energetic front-end developer looking for the opportunities to grow
                            professionally. Having 4-year background in the IT field as a QA engineer I have a deep
                            understanding of all the software development processes and how Agile projects are
                            run.</AboutText>
                    </div>
                    <AboutPhoto src={aboutPhoto} alt="aboutPhoto"/>
                </FlexWrapper>
                <div>
                    <h3>Main Skills</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ea excepturi itaque magnam modi necessitatibus nulla, sapiente velit. Blanditiis cum delectus, in iste iure magni porro quia quisquam sunt vero.</p>
                    <button></button>
                </div>
            </FlexWrapper>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    min-height: 100vh;
    background-color: deeppink;
    display: flex;
    gap: 50px;
`

const AboutPhoto = styled.img`

`

const AboutTitle = styled.h2`

`

const AboutText = styled.p`

`
