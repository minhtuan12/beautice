import styled from "styled-components";
import tw from "twin.macro";

export const ProfileWrap = styled.div`
  ${tw`flex flex-wrap w-full justify-between items-center large:(justify-center gap-[50px])`}
  ${({index, length}) => index !== length - 1 ? tw`mb-[79px]` : tw``}
`
export const InformationSection = styled.div`
  ${tw`mt-[-11px] w-[434px] exlg:(mt-[-11px] w-[434px])`};
  @media (max-width: 930px) {
    ${tw`!w-[450px]`}
  };
  @media (max-width: 576px) {
    ${tw`!flex-1`}
  }
`
export const Top = styled.div`
  ${tw`text-[18px] font-[600] leading-[22.5px] text-[#091156] mt-[-1px]`};
  @media (max-width: 930px) {
    ${tw`text-center h-auto`}
  }
`
export const Description = styled.div`
  ${tw`text-[16px] font-[400] leading-[24px] tracking-widest text-[#8B8B8B] mt-[21px]`};
  @media (max-width: 930px) {
    ${tw`text-center h-auto`}
  }
`
