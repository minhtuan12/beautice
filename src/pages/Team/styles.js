import tw from "twin.macro";
import styled from "styled-components";

export const TeamProfileWrap = styled.div`
  ${tw`mt-[110px] w-full p-[0_286px_0_150px]
    exlg:(w-[1004px] p-0 relative left-1/2 translate-x-[-50%])
    large:p-[0_50px] md:px-[30px] smd:px-[16px]
  `};
  @media (max-width: 476px) {
    ${tw`!px-[50px]`}
  }
`
export const GoalContent = styled.div`
  ${tw`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] grid place-items-center
  large:(w-full px-[30px] mt-2)
  md:px-[30px] smd:px-[16px]
  `};
  @media (max-width: 476px) {
    ${tw`!px-[20px] !mt-2`}
  }
`
export const GoalTitle = styled.div`
  ${tw`text-[36px] font-[600] leading-[45px] text-center text-white h-[97px] ml-[24px] mt-[-23px] w-[480px]
    large:(w-full text-[30px] h-auto ml-0)
  `};
  @media (max-width: 476px) {
    ${tw`!text-[20px] !leading-[28px]`}
  }
`
export const GoalDesc = styled.div`
  ${tw`text-[16px] font-[400] leading-[24px] tracking-widest text-center text-[#CACACA] ml-[-2px] w-[680px]
    large:(w-full text-[14px] h-auto ml-0 mt-2)
  `};
  @media (max-width: 476px) {
    ${tw`!hidden`}
  }
`

export const TestimonialWrap = styled.div`
  ${tw`relative h-[706.1px] mb-[-100px] tab:mt-[90px]`};
  @media (max-width: 476px) {
    ${tw`mt-[100px] mb-[50px]`}
  }
`
export const MainContent = styled.div`
  ${tw`w-fit absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] mt-[7px]`}
`
export const Header = styled.div`
  ${tw`mb-[65px] w-[680px] large:w-full`}
`
export const ArrowIconLeft = styled.img`
  ${tw`absolute top-1/2 left-0 translate-y-[-320%] translate-x-[187%] cursor-pointer
    large:(translate-y-[-400%] translate-x-[360%] cursor-default)
  `};
  @media (max-width: 476px) {
    ${tw`!bottom-0 !translate-x-[-180%] !translate-y-[-80%] !top-[100%] !bg-white !border-[3px] !rounded-[50%] !p-2`}
  }
`
export const InactiveLeftArrowIcon = styled.div`
  ${tw`absolute top-1/2 left-0 translate-y-[280%] translate-x-[-165%] cursor-default
    large:(translate-y-[350%] translate-x-[-320%] cursor-default)
  `};
  @media (max-width: 476px) {
    ${tw`!bottom-0 !translate-x-[185%] !translate-y-[0%] !top-[105.9%] !bg-white !border-[3px] !rounded-[50%] !h-fit !w-fit !p-1.5`}
  }
`
export const ArrowIconRight = styled.img`
  ${tw`absolute top-1/2 right-0 translate-y-[330%] translate-x-[192%] cursor-pointer
    large:(translate-y-[350%] translate-x-[320%] cursor-pointer)
  `};
  @media (max-width: 476px) {
    ${tw`!bottom-0 !translate-x-[-180%] !translate-y-[80%] !top-[100%] !bg-white !border-[3px] !rounded-[50%] !p-2`}
  }
`
export const InactiveRightArrowIcon = styled.div`
  ${tw`absolute top-1/2 right-0 translate-y-[290%] translate-x-[170%] cursor-default
    large:(translate-y-[310%] translate-x-[290%] cursor-default)
  `};
  @media (max-width: 476px) {
    ${tw`!bottom-0 !translate-x-[-185%] !translate-y-[0%] !top-[105.9%] !bg-white !border-[3px] !rounded-[50%] !h-fit !w-fit !p-1.5`}
  }
`
