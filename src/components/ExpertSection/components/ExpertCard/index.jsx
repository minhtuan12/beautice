import React from "react";
import {pathToIcon} from "../../../../utils/constants.js";
import {ExpertDesc, ExpertName, ExpertOccupation, ExpertSocial, SocialIcon} from "../index.js";
import tw from 'twin.macro'

export default function ExpertCard({expert}) {
    const handleClickSocialLink = (link) => {
        window.open(link)
    }

    return <div style={{transition: 'all 0.3s ease'}}
                tw={'mt-[5px] bg-transparent h-[626px] w-[270px] rounded-[42px] p-0 cursor-pointer p-[91px_0_96px_0] large:(flex-none h-fit w-[424px] shadow-[0_25px_50px_25px_#F6F7FF] p-[91px_77px_96px_77px] m-0 bg-white) md:(m-0 p-[90px] flex-none) smd:flex-1 ip15:(m-0 p-[75px_30px] w-full flex-none) hover:p-[91px_77px_96px_77px] hover:bg-white hover:w-[424px] hover:shadow-[0_25px_50px_25px_#F6F7FF]'}
    >
        <div tw={'flex justify-center'}>
            <img src={expert.avatar} alt=""/>
        </div>
        <div tw={'mt-[53px]'}>
            <ExpertOccupation>{expert.occupation}</ExpertOccupation>
            <ExpertName>{expert.name}</ExpertName>
            <ExpertDesc>{expert.description}</ExpertDesc>
            <div
                tw={'mt-[56px] flex items-center justify-between h-[49px] w-full p-[0_14px_0_10px] md:(mt-10 p-0 w-full) ip15:(mt-10 p-0 w-full)'}>
                <ExpertSocial onClick={() => handleClickSocialLink(expert.twitterUrl)}>
                    <SocialIcon src={`${pathToIcon}/Twitter (2).png`} alt=""/>
                </ExpertSocial>
                <ExpertSocial onClick={() => handleClickSocialLink(expert.facebookUrl)}>
                    <SocialIcon src={`${pathToIcon}/Facebook.png`} alt=""/>
                </ExpertSocial>
                <ExpertSocial onClick={() => handleClickSocialLink(expert.instagramUrl)}>
                    <SocialIcon src={`${pathToIcon}/Instagram (2).png`} alt=""/>
                </ExpertSocial>
            </div>
        </div>
    </div>
}
