import styled from "styled-components";
import tw from "twin.macro";

export const Wrap = tw.div`relative top-[200px] h-[1200px]`

export const Background = styled.div`
  background-image: url("../../assets/images/logos/hero-bg.png");
  background-size: cover;
  background-position: 50%;
  ${tw`h-[300px] flex items-center justify-center flex-col`};
  @media (max-width: 1430px) {
    ${tw`px-[50px]`}
  }
  @media (max-width: 576px) {
    ${tw`px-[16px]`}
  }
`
export const Tab = styled.div`
  ${tw`mt-[10px] p-[0_150px_0_149px]`};
  @media (max-width: 1430px) {
    ${tw`px-[50px]`}
  }
  @media (max-width: 576px) {
    ${tw`px-[16px]`}
  }
`
