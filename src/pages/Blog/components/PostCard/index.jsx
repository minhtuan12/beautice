import React from "react";
import styles from './styles.module.scss'

export default function PostCard({post}) {
    const {image, date, description} = post

    return <div className={styles.cardWrap}>
        <div className={styles.imageWrap}>
            <img alt={''} src={image}/>
        </div>
        <div className={styles.content}>
             <div className={styles.date}>{date}</div>
             <div className={styles.desc}>{description}</div>
        </div>
    </div>
}
