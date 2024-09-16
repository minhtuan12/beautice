import React from "react";
import tw from 'twin.macro'

export default function ContactMethod({data}) {
    const {icon, method, detail, description} = data
    const Content = tw.div`smd:(w-full h-auto break-words)`
    const Method = tw(Content)`text-[16px] font-[600] leading-[20px] text-center text-[#FF64AE]`
    const Detail = tw(Content)`text-[24px] font-[600] leading-[30px] text-center text-[#091156] mt-[15px]`
    const Description = tw(Content)`text-[14px] font-[400] leading-[21px] tracking-widest text-center text-[#8B8B8B] mt-[13px]`

    return <div tw={'h-full cursor-pointer'}>
        <div tw={'relative left-1/2 translate-x-[-50%] w-fit'}>
            <img alt={''} src={icon}/>
        </div>
        <div tw={'w-full mt-[46px]'}>
            <Method>{method}</Method>
            <Detail>{detail}</Detail>
            <Description>{description}</Description>
        </div>
    </div>
}
