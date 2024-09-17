import tw from "twin.macro";

export const Introduction = tw.div`w-full h-[893px] relative top-[199px] large:h-auto`
export const ImageWrap = tw.div`flex justify-between 
    large:(justify-center flex-wrap gap-[50px]) 
    btab:(grid justify-between gap-[20px])
`

export const Image = tw.img`large:flex-1`
export const Section = tw.div`
    w-full p-[0_152px_0_149px]
    exlg:(w-[1440px] relative left-1/2 translate-x-[-50%])
    large:px-[50px]
    md:(px-[30px] ml-0)
    smd:px-[16px]
`
export const SectionDescription = tw.div`text-[16px] font-[400] leading-[24px] tracking-widest text-left h-[87px] large:h-auto smlg:text-center`
export const SectionOption = tw.div`flex mt-[9px] text-[#091156] text-[16px] font-[600] leading-[24px] tracking-widest cursor-pointer smlg:(w-full justify-center)`
export const SectionImage = tw.img`w-[25px] h-[25px] ml-[13px]`
export const BackgroundImageWithMask = tw.img`w-full absolute top-0 left-0 z-[-1]`
