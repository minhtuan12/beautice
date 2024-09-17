import React from "react";
import {pathToIcon} from "../../../../utils/constants.js";
import tw, {css} from "twin.macro";

export default function NewsCard({news}) {
    return <div css={css`
      ${tw`w-[347px] h-full rounded-[25px] bg-white cursor-pointer border-none shadow-[0_25px_50px_5px_#F6F7FF] hover:border-[1px] hover:border-[#9BA2E0] large:(h-auto w-full flex-1) md:flex-none`};
      @media (min-width: 700px) and (max-width: 1430px) {
        ${tw`!w-[400px]`}
      }
    `}>
        <img alt={''} src={news.logo} tw={'w-full large:rounded-t-[25px]'}/>
        <div tw={'p-[54.5px_21px_72px_38px] large:(p-[20px] w-full)'}>
            <div
                tw={'leading-[22.5px] w-full h-[58px] text-[18px] font-[600] text-left text-[#091156] large:(h-auto text-[15px])'}>
                {news.name}
            </div>
            <div
                tw={'leading-[21px] w-full h-[74px] text-[14px] font-[400] tracking-widest text-left text-[#8B8B8B] p-[0_17px_0_0] large:(h-auto mt-2 text-[13px])'}>
                {news.description}
            </div>
            <div
                tw={'leading-[17.5px] mt-[15px] h-[19px] text-[14px] font-[600] text-left flex text-[#FF64AE] items-center large:text-[12.5px]'}>
                Learn more <img alt={''} src={`${pathToIcon}/angle-double-right.png`} tw={'ml-[9px]'}/>
            </div>
        </div>
    </div>
}
