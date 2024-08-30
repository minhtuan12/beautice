import React from "react";
import styles from './styles.module.scss'

export default function Profile({data, index, length}) {
    const {avatar, name, position, description} = data

    return <div className={`${styles.profileWrap} ${index !== length - 1 ? 'mb-[79px]' : ''}`}>
        <div className={styles.avatar}>
            <img alt={''} src={avatar}/>
        </div>
        <div className={styles.information}>
            <div className={styles.top}>
                {name} / <span>{position}</span>
            </div>
            <div className={styles.description}>
                {description}
            </div>
        </div>
    </div>
}
