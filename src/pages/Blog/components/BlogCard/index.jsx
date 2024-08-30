import React from "react";
import styles from './styles.module.scss'
import {pathToIcon} from "../../../../utils/constants.js";

export default function BlogCard({data}) {
    const {image, heading, subTitle, description} = data

    return <div className={styles.cardWrap}>
        <div className={styles.imageWrap}>
            <img alt={''} src={image}/>
        </div>
        <div className={styles.content}>
            <div className={styles.heading}>
                <img alt={''} src={`${pathToIcon}/Vector (3).png`}/> {heading}
            </div>
            <div className={styles.subTitle}>
                {subTitle}
            </div>
            <div className={styles.description}>
                {description}
            </div>
            <div className={styles.btnWrap}>
                <button>Read More <img alt={''} src={`${pathToIcon}/Vector (2).png`}/></button>
            </div>
        </div>
    </div>
}
