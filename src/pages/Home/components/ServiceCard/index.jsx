import React from "react";
import styles from "../../styles.module.scss";

export default function ServiceCard({service}) {
    return <div className={styles.boxSection}>
        <div className={styles.boxImage}>
            <img src={service.logo} alt="" className={styles.innerImg}/>
        </div>
        <div className={styles.boxContent}>
            <div className={styles.boxTitle}>
                {service.title}
            </div>
            <div className={styles.boxDesc}>
                {service.description}
            </div>
        </div>
    </div>
}
