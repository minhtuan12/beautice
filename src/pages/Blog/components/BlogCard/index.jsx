import React from "react";
import {pathToIcon} from "../../../../utils/constants.js";
import Button from "../../../../components/Button/index.jsx";
import tw, {css} from "twin.macro";
import styled from "styled-components";

export default function BlogCard({data}) {
    const {image, heading, subTitle, description} = data
    const Card = tw.div`shadow-[10px_13px_80px_14px_#F2F4FF] h-[953px] rounded-[50px] w-[730px]
        exlg:w-[730px] 
        large:(relative left-1/2 translate-x-[-50%] w-full flex flex-col h-fit)`
    const Content = styled.div`
      ${tw`w-full p-[60px_62px_100px_76px] shadow-[10px_13px_80px_14px_#F2F4FF] 
        large:(p-[60px_62px_50px_76px] shadow-none flex-1)`
      };
      @media (max-width: 678px) {
        ${tw`!px-[40px]`}
      }
    `
    const Heading = tw.div`text-[16px] font-[600] leading-[20px] text-[#FF64AE] flex items-center justify-start`
    const SubTitle = styled.div`
      ${tw`text-[36px] font-[600] leading-[45px] text-[#091156] mt-[18px] h-[99px] w-full large:h-auto`};
      @media (max-width: 450px) {
        ${tw`!break-words`}
      }
    `
    const Description = tw.div`text-[16px] font-[400] leading-[24px] tracking-widest text-[#8B8B8B] mt-[12px] h-[119px] w-full large:h-auto`

    return <Card>
        <img alt={''} src={image} tw={'w-full'}/>
        <Content>
            <Heading>
                <img alt={''}
                     src={`${pathToIcon}/Vector (3).png`}
                     tw={'mr-[15px]'}
                /> {heading}
            </Heading>
            <SubTitle>{subTitle}</SubTitle>
            <Description>{description}</Description>
            <div css={css`
              ${tw`mt-[13px] w-[226px] h-[58px] large:mt-[50px]`};
              @media (max-width: 450px) {
                ${tw`!w-full`}
              }
            `}>
                <Button
                    tw={'w-full h-full text-[16px] font-[600] leading-[24px] tracking-widest text-white flex items-center justify-center gap-[10px] pl-[15px] shadow-[0_17px_22px_0_#FFEDF6]'}>
                    Read More <img alt={''} src={`${pathToIcon}/Vector (2).png`}/>
                </Button>
            </div>
        </Content>
    </Card>
}
