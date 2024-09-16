import React from "react";
import styled from "styled-components";
import tw, {css} from "twin.macro";

export default function PostCard({post}) {
    const {image, date, description} = post
    const Post = styled.div`
      ${tw`flex justify-between h-[89px] w-full asmd:(justify-center gap-[30px])`};
      @media (max-width: 400px) {
        ${tw`!flex-wrap !justify-center !h-auto !gap-[10px] !mb-10`}
      }
    `
    const Info = styled.div`
      ${tw`tracking-widest`};
      @media (max-width: 400px) {
        ${tw`!text-center !w-full !h-auto`}
      }
    `
    const Date = tw(Info)`text-[14px] font-[600] leading-[21px] text-[#FF64AE] h-[25px]`
    const Description = tw(Info)`text-[12px] font-[400] leading-[18px] text-[#8B8B8B] mt-[5px]`

    return <Post>
        <div tw={'mt-[2px]'}>
            <img alt={''} src={image}/>
        </div>
        <div css={css`
          ${tw`w-[165px]`};
          @media (max-width: 400px) {
            ${tw`!w-full`}
          }
        `}>
            <Date>{date}</Date>
            <Description>{description}</Description>
        </div>
    </Post>
}
