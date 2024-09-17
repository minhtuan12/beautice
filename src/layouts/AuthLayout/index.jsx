import React from "react";
import MainLayout from "../MainLayout/index.jsx";
import {pathToIcon} from "../../utils/constants.js";
import tw, {css} from 'twin.macro'

export default function AuthLayout({children, title}) {
    return <MainLayout>
        <div tw={'absolute z-[-1] w-full h-full'}>
            <img alt={''} src={`${pathToIcon}/fluid-pastel-background.png`} tw={'w-full h-full'}/>
        </div>
        <div tw={'relative top-[250px] h-[1100px] large:(h-[950px] top-[250px]) smd:(px-[26px] w-full)'}>
            <div css={css`
              ${tw`rounded-[20px] bg-white h-auto w-[1100px] absolute left-1/2 translate-x-[-50%] flex shadow-[rgba(0,_0,_0,_0.2)_0_18px_50px_-10px] smd:(w-full static translate-x-[0])`};
              @media (max-width: 1200px) {
                ${tw`!w-[500px]`}
              }
            `}>
                <div css={css`
                  ${tw`w-1/2 p-10 grid place-content-center`};
                  @media (max-width: 1200px) {
                    ${tw`hidden`}
                  }
                `}>
                    <img alt={''} src={`${pathToIcon}/Contact Animations (1).png`}/>
                </div>
                <div css={css`
                  ${tw`py-20 px-14 bg-[#E4E7FFBF] w-1/2 rounded-r-[20px] smd:px-[20px]`};
                  @media (max-width: 1200px) {
                    ${tw`!w-full rounded-[20px]`}
                  }
                `}>
                    <div tw={'relative top-1/2 translate-y-[-50%]'}>
                        <div tw={'text-[32px] text-[#091156] font-medium text-center w-full'}>
                            {title}
                        </div>
                        <div tw={'mt-10 w-full'}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
}
