import React from "react";
import styles from './styles.module.scss'

export default function Card({title, children, extraClassname = ''}) {
    return <div className={`${styles.cardWrap} ${extraClassname}`}>
        <div className={styles.title}>
            {title}
        </div>
        {children}
    </div>
}
