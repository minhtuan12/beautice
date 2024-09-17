import React from "react";
import {Content, Desc, Icon, Quantity, Wrap} from "./styles.js";
import tw, {css} from "twin.macro";

export default function KeyMetric({data, index}) {
    return <Wrap index={index}>
        <Icon index={index}>
            <img alt={''} src={data.icon}
                 css={css`
                   ${tw`md:w-[80%]`};
                   @media (max-width: 430px) {
                     ${tw`!w-[50%]`};
                   }
                 `}
            />
        </Icon>
        <Content>
            <Quantity index={index}>{data.quantity}</Quantity>
            <Desc index={index}>{data.about}</Desc>
        </Content>
    </Wrap>
}
