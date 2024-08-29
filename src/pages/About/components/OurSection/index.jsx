import React from "react";
import styles from './styles.module.scss'

export default function OurSection({imageUrl, title, subTitle, description}) {
    return <div className={styles.sectionWrap}>
        <div className={styles.imageWrap}>
            <img alt={''} src={imageUrl}/>
        </div>
        <div className={styles.content}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.subTitle}>
                {subTitle}
            </div>
            <div className={styles.description}>
                {description}
            </div>
        </div>
    </div>
}
