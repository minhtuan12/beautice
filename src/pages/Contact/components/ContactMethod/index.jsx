import React from "react";
import styles from './styles.module.scss'

export default function ContactMethod({data}) {
    const {icon, method, detail, description} = data

    return <div className={styles.cardWrap}>
        <div className={styles.icon}>
            <img alt={''} src={icon}/>
        </div>
        <div className={styles.info}>
            <div className={styles.method}>
                {method}
            </div>
            <div className={styles.detail}>
                {detail}
            </div>
            <div className={styles.description}>
                {description}
            </div>
        </div>
    </div>
}
