import React from "react";
import styles from './styles.module.scss'
import {useSelector} from "react-redux";

export default function SectionWithSideImage(
    {
        imageUrl,
        title,
        subTitle,
        description,
        isReverse,
        contentWidth,
        descriptionWidth,
        subTitleWidth,
        imageClass = ''
    }) {
    const isVisibleSlidingBtn = useSelector(state => state.app.isVisibleSlidingBtn)

    return <div className={`${styles.sectionWrap} ${isReverse ? 'flex-row-reverse' : ''}`}>
        <div className={`${styles.imageWrap} ${imageClass}`}>
            <img alt={''} src={imageUrl}/>
        </div>
        <div className={`${styles.content} ${(isReverse && isVisibleSlidingBtn) ? 'ml-10' : ''}`}
             style={contentWidth ? {width: contentWidth} : {}}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.subTitle} style={subTitleWidth ? {width: subTitleWidth} : {}}>
                {subTitle}
            </div>
            <img alt={''} src={imageUrl} className={styles.imageUnderTitle}/>
            <div className={styles.description} style={descriptionWidth ? {width: descriptionWidth} : {}}>
                {description}
            </div>
        </div>
    </div>
}
