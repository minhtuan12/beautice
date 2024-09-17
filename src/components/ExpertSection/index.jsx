import React, {useRef} from "react";
import {experts} from "./data.js";
import ExpertCard from "./components/ExpertCard/index.jsx";
import {Description, Header, Section, SectionBox, SubTitle, Title} from "./styles.js";

export default function ExpertSection(
    {
        title,
        subTitle,
        description,
        extraClassname = '',
        headerClassname = '',
        boxSectionClassname = '',
        descClassname = ''
    }) {
    const expertWrapRef = useRef()

    return <Section extraClassname={extraClassname}>
        <Header extraClassname={headerClassname}>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
            <Description extraClassname={descClassname}>{description}</Description>
        </Header>

        <SectionBox extraClassname={boxSectionClassname} ref={expertWrapRef}>
            {
                experts.map((expert, index) => (
                    <ExpertCard key={index} expert={expert} index={index}/>
                ))
            }
        </SectionBox>
    </Section>
}
