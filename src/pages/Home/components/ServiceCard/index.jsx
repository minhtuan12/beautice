import React from "react";
import styles from "../../styles.module.scss";
import {pathToIcon} from "../../../../utils/constants.js";

export default function ServiceCard({service}) {
    return <div className={styles.boxSection}>
        <div className={styles.boxImage}>
            {/*<img src={`${pathToIcon}/Ellipse 2.png`} alt="" className={styles.outerImg}/>*/}
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
