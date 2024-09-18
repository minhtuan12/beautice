import styled from "styled-components";
import tw from "twin.macro";

export const Wrap = styled.div`
  box-shadow: 0 3px 4px 0 #00000008;
  border: 1px solid #f1f1f4;
  ${tw`bg-[white] rounded-[8px] w-full h-full mt-3 pb-6`}
`

export const Title = styled.div`
  border-bottom: 1px solid #dbdfe9;
  ${tw`font-semibold text-[22px] px-10 py-6 text-[#172176] tracking-[0.03rem]`}
`

export const Container = styled.div`
  ${tw`flex justify-between`};
  @media (max-width: 992px) {
    ${tw`flex-col items-center`}
  }
`

export const UploadContainer = styled.div`
  ${tw`w-1/2 flex flex-col items-center justify-center ml-[-20px]`};
  @media (max-width: 428px) {
    ${tw`!ml-0 !mb-4`}
  }
  @media (max-width: 428px) and (min-width: 350px) {
    ${tw`!w-full !flex !flex-col !items-center !mt-0 !ml-0 !mb-8`}
  }
`

export const PersonalInfoContainer = styled.div`
  ${tw`w-2/3`};
  @media (max-width: 992px) {
    ${tw`w-full`}
  }
`