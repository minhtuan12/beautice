import React from "react";
import {pathToIcon} from "../../utils/constants.js";
import tw, {css} from "twin.macro";

export default function PlayButton() {
    return <div css={css`
      ${tw`relative w-[166px] h-[167px] ml-[-7px] cursor-pointer asmd:(w-[100px] h-[100px])`};
      @media (max-width: 476px) {
        ${tw`!w-[80px] !h-[80px]`}
      }
    `}>
        <img alt={''} src={`${pathToIcon}/Ellipse 3.png`}
            css={css`
              ${tw`absolute top-0 left-0 w-full asmd:w-[100px]`};
              @media (max-width: 476px) {
                ${tw`!w-[80px]`}
              }
            `}
        />
        <img alt={''} src={`${pathToIcon}/Polygon 1.png`}
             css={css`
              ${tw`absolute top-1/2 left-1/2 translate-x-[-40%] translate-y-[-50%] asmd:w-[30px]`};
              @media (max-width: 476px) {
                ${tw`!w-[20px]`}
              }
            `}
        />
    </div>
}
