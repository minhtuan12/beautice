import React from "react";
import {Description, InformationSection, ProfileWrap, Top} from "./styles.js";
import tw from 'twin.macro'

export default function Profile({data, index, length}) {
    const {avatar, name, position, description} = data

    return <ProfileWrap index={index} length={length}>
        <div tw={'h-full'}>
            <img alt={''} src={avatar}/>
        </div>
        <InformationSection>
            <Top>
                {name} / <span tw={'text-[14px] italic font-[400] leading-[17.5px] text-[#8B8B8B]'}>
                {position}
            </span>
            </Top>
            <Description>{description}</Description>
        </InformationSection>
    </ProfileWrap>
}
