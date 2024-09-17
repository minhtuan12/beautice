import tw from "twin.macro";
import styled from "styled-components";
import Input from "../../../components/Input/index.jsx";

export const BlogWrap = tw.div`relative top-[140px]`
export const BackgroundImageWithMask = tw.img`absolute top-0 left-0 z-[-1] w-full exlg:(h-full object-cover)`
export const TopContent = tw.div`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex w-full px-[calc(100vw_/_9.66)] justify-between mt-[2px] items-center
    exlg:(px-[400px]) large:px-[50px] md:px-[30px] smd:px-[16px]
`
export const Title = styled.div`
  ${tw`text-[36px] font-[600] leading-[45px] text-white`};
  @media (max-width: 500px) {
    ${tw`!text-[28px]`}
  }
  @media (max-width: 400px) {
    ${tw`!text-[22px]`}
  }
`
export const MainContent = styled.div`
  ${tw`mt-[108px] p-[0_150px_0_149px] w-full flex justify-between
    exlg:(w-[1440px] relative left-1/2 translate-x-[-50%] mt-[100px])
    large:(!px-[50px] !justify-between !gap-[100px])
    smd:!px-[16px]
  `};
  @media (max-width: 1040px) {
    ${tw`!gap-[40px]`}
  }
  @media (max-width: 860px) {
    ${tw`!justify-center !flex-col-reverse !px-[30px]`}
  }
  @media (max-width: 500px) {
    ${tw`!px-[16px]`}
  }
`
export const LeftContent = styled.div`
  ${tw`bg-transparent exlg:w-[730px] large:(!w-1/2 !flex-1)`};
  @media (max-width: 860px) {
    ${tw`!mt-[76px] !w-full`}
  }
  @media (max-width: 500px) {
    ${tw`!mt-[100px]`}
  }
`

export const RightContent = styled.div`
  ${tw`exlg:w-[350px]`};
  @media (max-width: 500px) {
    ${tw`!w-full`}
  }
`
export const SearchInput = tw(Input)`
  shadow-[-2px_4px_31px_9px_#F2F4FF] pl-[27px] rounded-[50px] w-full h-full border-none
  placeholder:text-[16px] placeholder:font-[400] placeholder:leading-[24px] placeholder:tracking-widest placeholder:text-[#8B8B8B]
`
export const Cards = styled.div`
  ${tw`mt-[76px]`};
  @media (max-width: 860px) {
    ${tw`flex flex-wrap gap-[30px] justify-between`}
  }
`
export const Post = styled.div`
  ${tw`mt-[28px]`};
  @media (max-width: 860px) {
    ${tw`mt-[30px] h-full`};
  }
  @media (max-width: 790px) {
    ${tw`!mt-10`};
  }
`
export const FlexBox = styled.div`
  @media (max-width: 860px) {
    ${tw`flex flex-col flex-wrap`};
  }
  @media (max-width: 664px) {
    ${tw`!w-full`};
  }
`