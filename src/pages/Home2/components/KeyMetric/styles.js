import styled from "styled-components";
import tw from "twin.macro";

export const Wrap = styled.div`
  ${tw`flex justify-start h-[69px] w-[197px] exlg:w-auto md:(w-full items-center)`}
  ${({index}) => index === 3 ? tw`w-[214px]` : (index === 0 ? tw`h-[64px]` : tw``)}
`

export const Icon = styled.div`
  ${({index}) => index !== 0 ? tw`mt-[-4px]` : tw``}
`

export const Content = styled.div`
  ${tw`ml-[11px] exlg:ml-[20px] md:ml-[11px]`};
  @media (max-width: 430px) {
    ${tw`!ml-[-20px]`}
  }
`
export const Quantity = styled.div`
  ${tw`leading-[45px] text-[36px] font-[600] text-left h-[41px] text-white exlg:text-[46px] md:(leading-normal text-[22px] text-left h-auto)`};
  ${({index}) => index !== 0 ? tw`mt-[1px]` : tw``};
  @media (max-width: 430px) {
    ${tw`text-[18px]`}
  }
`

export const Desc = styled.div`
  ${tw`h-[23px] text-[16px] font-[600] text-left text-[#D8DCFF] exlg:text-[25px] md:(h-auto text-[12px] font-[600])`};
  ${({index}) => index === 0 ? tw`!text-[#FF9ACB]` : tw`mt-[-1px]`};
  @media (max-width: 430px) {
    ${tw`text-[10px]`}
  }
`
