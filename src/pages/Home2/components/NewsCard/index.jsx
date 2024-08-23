import React from "react";
import styles from './styles.module.scss'
import {pathToIcon} from "../../../../utils/constants.js";

export default function NewsCard({news}) {
    return <div className={styles.cardWrap}>
        <div className={styles.logoWrap}>
            <img alt={''} src={news.logo}/>
        </div>
        <div className={styles.content}>
            <div className={styles.name}>
                {news.name}
            </div>
            <div className={styles.description}>
                {news.description}
            </div>
            <div className={styles.learnMore}>
                Learn more <img alt={''} src={`${pathToIcon}/angle-double-right.png`}/>
            </div>
        </div>
    </div>
}
