import tw from 'twin.macro'
import styled from "@emotion/styled/macro";

export const Section = styled.div`
  ${tw`p-[0_178px_0_178px] mt-[-132.89px] z-10 
    exlg:(p-0 w-[1085px] relative left-[50%] translate-x-[-50%]) 
    large:(p-[0_50px] w-full) 
    md:p-[0_30px] 
    smd:px-[16px]`
}
  ${({extraClassname}) => extraClassname ? tw`${extraClassname}` : ''}
`

export const Header = styled.div`
  ${tw`flex flex-col items-center large:!ml-0`}
  ${({extraClassname}) => extraClassname ? tw`${extraClassname}` : ''}
`
export const Description = styled.div`
  ${tw`leading-[24px] font-[400] text-[16px] tracking-widest h-[51px] text-center text-[#8B8B8B] mt-[12px]
      large:h-auto md:mt-[50px] ip15:mt-[20px]`
}
  ${({extraClassname}) => extraClassname ? tw`${extraClassname}` : ''}
`
export const SectionBox = styled.div`
  ${tw`mt-[82px] flex items-center justify-between large:(w-full mt-[40px] flex flex-wrap !justify-center gap-[40px])`}
  ${({extraClassname}) => extraClassname ? tw`${extraClassname}` : ''}
`

export const Title = tw.div`font-[600] leading-[20px] text-[16px] text-center text-[#FF64AE] large:h-auto`
export const SubTitle = tw.div`font-[600] leading-[45px] text-[36px] text-center h-[53px] text-[#091156] mt-[12px] large:h-auto`
