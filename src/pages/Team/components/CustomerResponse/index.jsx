import React from "react";
import {pathToIcon} from "../../../../utils/constants.js";
import {Feedback, Ratio, ResponseWrap} from "./styles.js";

export default function CustomerResponse({data}) {
    const {avatar, feedback, star} = data

    return <ResponseWrap>
        <img alt={''} src={avatar}/>
        <Feedback>{feedback}</Feedback>
        <Ratio>
            {
                Array.from({length: star})
                    .map((_, index) =>
                        <img key={index} alt={''} src={`${pathToIcon}/star.png`}/>
                    )
            }
        </Ratio>
    </ResponseWrap>
}
