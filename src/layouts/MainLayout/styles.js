import styled, {keyframes} from "styled-components";
import tw from "twin.macro";

const scaleIn = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`

export const MainWrap = styled.div`
  ${tw`relative min-h-screen`}
`
export const ToTopBtn = styled.div`
  animation: ${scaleIn} 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  transform-origin: center;
  ${tw`fixed h-[36px] w-[36px] bottom-[171px] rounded-[5px] right-[65px] z-[999] bg-[#FF64AE] justify-center flex items-center cursor-pointer 
    exlg:(fixed h-[56px] w-[56px])
  `}
`
