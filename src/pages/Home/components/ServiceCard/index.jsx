import React from "react";
import tw from "twin.macro";

const Section = tw.div`
    bg-[#fff] h-[458px] w-[343px] rounded-[42px] p-[59px_35px_52px_34px] shadow-[0_25px_50px_25px_#F6F7FF] z-10
    large:(m-0 flex-1 h-auto)
    md:flex-none
    ip15:(w-full h-auto mt-[100px])
`

export default function ServiceCard({service}) {
    return <Section>
        <div tw={'relative flex justify-center'}>
            <img src={service.logo} alt="" tw={'absolute'}/>
        </div>
        <div tw={'mt-[223px] ml-[0.5px]'}>
            <div
                tw={'font-[600] leading-[22.5px] mt-[58px] w-full h-[37px] text-[18px] text-center text-[#091156] ip15:h-auto'}>
                {service.title}
            </div>
            <div
                tw={'font-[400] leading-[21px] mt-[6px] w-[274px] h-[80px] text-[14px] tracking-widest text-center text-[#8B8B8B] large:(w-full h-auto) ip15:(w-full h-auto mt-[20px])'}>
                {service.description}
            </div>
        </div>
    </Section>
}
