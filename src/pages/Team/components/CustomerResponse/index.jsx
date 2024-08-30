import React from "react";
import styles from './styles.module.scss'
import {pathToIcon} from "../../../../utils/constants.js";

export default function CustomerResponse({data}) {
    const {avatar, feedback, star} = data

    return <div className={styles.responseWrap}>
        <div className={styles.avatar}>
            <img alt={''} src={avatar}/>
        </div>
        <div className={styles.feedback}>
            {feedback}
        </div>
        <div className={styles.ratio}>
            {
                Array.from({length: star})
                    .map((_, index) =>
                        <img key={index} alt={''} src={`${pathToIcon}/star.png`}/>
                    )
            }
        </div>
    </div>
}
