import React from "react";
import styles from './styles.module.scss'
import {pathToIcon} from "../../../../utils/constants.js";

export default function MainServiceCard({service, index}) {
    return <div className={styles.cardWrap} style={index === 1 ? {border: '1px solid #9BA2E0'} : {}}>
        <div className={styles.logoWrap}>
            <img alt={''} src={service.logo}/>
        </div>
        <div className={styles.content}>
            <div className={styles.name}>
                {service.name}
            </div>
            <div className={styles.description}>
                {service.description}
            </div>
            <div className={styles.learnMore}>
                Learn more <img alt={''} src={`${pathToIcon}/angle-double-right.png`}/>
            </div>
        </div>
    </div>
}
