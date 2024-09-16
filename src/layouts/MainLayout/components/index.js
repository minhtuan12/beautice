import styled from "@emotion/styled/macro";
import tw from "twin.macro";

export const HeaderWrap = styled.div`
  ${tw`w-[1141px] h-[63px] absolute top-[39px] left-[149px] flex justify-between items-center z-10
    exlg:(w-full h-[63px] absolute top-[41px] left-0 p-[0_120px] flex justify-between items-center)
    large:(w-screen px-[50px])
    md:(w-full p-[0_30px])
    smd:px-[16px]`}
  ${(visibleStickyHeader, isLightTheme) =>
          visibleStickyHeader ? (!isLightTheme ? tw`fixed bg-white w-full h-[95px] left-1/2 top-0 translate-x-[-50%] p-[25px_60px] z-[999]`
                  : tw`fixed bg-white w-full h-[95px] left-1/2 top-0 translate-x-[-50%] p-[25px_60px] z-[999]`) : ''
  }
`

export const MenuWrap = styled.div`
  ${tw`flex justify-between items-center w-[481px] h-[25px] text-[#8B8B8B] text-[16px] font-[500] leading-6 tracking-widest text-left large:hidden 
    md:(flex items-center justify-between cursor-pointer w-[66px] text-[#41487F])`
  }
  ${({isLightTheme}) => isLightTheme ? tw`text-[#D8DCFF]` : ''}
`