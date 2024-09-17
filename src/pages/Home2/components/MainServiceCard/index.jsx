import React from "react";
import {pathToIcon} from "../../../../utils/constants.js";
import tw, {css} from "twin.macro";

export default function MainServiceCard({service, index}) {
    return <div css={css`
      border: 1px solid #E2E2E2;
      scroll-snap-align: center;
      ${tw`h-[303px] rounded-[25px] w-[261px] p-[30px_36px_47px_35px] bg-white cursor-pointer hover:border-[1px] hover:border-[#9BA2E0] large:(w-[261px] h-[350px]) smd:w-[300px]`}
    `}
                style={index === 1 ? {border: '1px solid #9BA2E0'} : {}}
    >
        <img alt={''} src={service.logo}/>
        <div tw={'mt-[25px]'}>
            <div tw={'leading-[22.5px] w-full h-[37px] text-[18px] font-[600] text-left text-[#091156] large:h-auto'}>
                {service.name}
            </div>
            <div
                tw={'leading-[21px] w-full h-[63px] text-[14px] font-[400] tracking-widest text-left text-[#8B8B8B] large:(h-auto mt-2)'}>
                {service.description}
            </div>
            <div
                tw={'leading-[17.5px] mt-[17px] text-[14px] font-[600] text-left flex text-[#FF64AE] items-center large:text-[12.5px]'}>
                Learn more <img alt={''} src={`${pathToIcon}/angle-double-right.png`} tw={'ml-[9px] mt-[2px]'}/>
            </div>
        </div>
    </div>
}
