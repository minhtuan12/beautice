import React from "react";
import styles from './styles.module.scss'

export default function OurSection(
    {
        imageUrl,
        title,
        subTitle,
        description,
        isReverse,
        contentWidth,
        descriptionWidth
    }) {
    return <div className={`${styles.sectionWrap} ${isReverse ? 'flex-row-reverse' : ''}`}>
        <div className={styles.imageWrap}>
            <img alt={''} src={imageUrl}/>
        </div>
        <div className={styles.content} style={contentWidth ? {width: contentWidth} : {}}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.subTitle}>
                {subTitle}
            </div>
            <div className={styles.description} style={descriptionWidth ? {width: descriptionWidth} : {}}>
                {description}
            </div>
        </div>
    </div>
}
