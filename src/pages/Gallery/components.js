import tw from "twin.macro";
import styled from "@emotion/styled";

export const GalleryWrap = tw.div`relative top-[229px] h-auto`
export const Top = styled.div`
  ${tw`p-[0_150px] 
    exlg:(w-[1440px] relative left-1/2 translate-x-[-50%]) 
    large:!p-[0_50px]
    md:!px-[30px]
    smd:px-[16px]`
  };
  @media (max-width: 320px) {
    ${tw`px-[16px]`}
  }
`
export const Header = tw.div`
  flex flex-wrap justify-between items-center w-full pr-[20px] 
  large:(justify-center pr-0)
`
export const ImageSection = styled.div`
  ${tw`w-full mt-[75px] grid gap-y-[38px] gap-x-[36px] place-content-center grid-cols-[repeat(auto-fill,_356px)]
    large:justify-between
    smd:(!place-items-center !grid-cols-[repeat(auto-fill,_100%)])
  `};
  @media (max-width: 1240px) {
    ${tw`justify-center`}
  }
  @media (max-width: 1000px) {
    ${tw`grid-cols-[repeat(auto-fill,_500px)]`}
  }
`
export const Image = styled.img`
  @media (max-width: 1000px) {
    ${tw`!w-full`}
  }
`
export const Between = styled.div`
  ${tw`relative h-[628px] w-full mt-[126px] 
      exlg:h-[calc(100vw_/_2.29)]
      large:!h-[500px]`
  };
  @media (max-width: 1200px) {
    ${tw`!h-fit !mb-[100px]`}
  }
  @media (min-width: 1000px) and (max-width: 1200px) {
    ${tw`!mb-[50px]`}
  }
  @media (max-width: 1000px) {
    ${tw`!mb-[50px]`}
  }
  @media (max-width: 678px) {
    ${tw`!mb-0`}
  }
`
export const BackgroundImageWithMask = tw.img`absolute top-0 left-0 w-full`
export const BetweenContent = styled.div`
  ${tw`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-48%]
    exlg:w-[555px]
  `};
  @media (max-width: 1200px) {
    ${tw`!relative !translate-y-[20%]`}
  }
`

export const Bottom = styled.div`
  ${tw`relative h-[389.63px] pl-[150px] pt-[120px] pr-[206.56px] mb-[253px]
    exlg:w-full
    large:(!h-auto !pl-[200px] !pt-[200px])
    smd:!px-[16px]`
  };
  @media (max-width: 1000px) {
    ${tw`!pt-[150px] !pb-0 !px-[50px]`}
  }
  @media (max-width: 678px) {
    ${tw`!px-[30px] !mt-[30px]`}
  }
`
