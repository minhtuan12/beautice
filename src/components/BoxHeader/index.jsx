import tw from "twin.macro";

const Title = tw.div`text-[16px] font-[600] leading-[20px] text-[#FF64AE]`
const SubTitle = tw.div`text-[36px] font-[600] leading-[45px] text-[#091156]`
const Description = tw.div`text-[16px] font-[400] leading-[24px] text-[#8b8b8b]`

const BoxTitle = ({children}) => <Title>{children}</Title>
const BoxSubTitle = ({children}) => <SubTitle>{children}</SubTitle>
const BoxDescription = ({children}) => <Description>{children}</Description>
