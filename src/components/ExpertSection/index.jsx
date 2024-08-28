import React, {useRef} from "react";
import styles from './styles.module.scss'
import {experts} from "./data.js";
import ExpertCard from "./ExpertCard/index.jsx";

export default function ExpertSection({title, subTitle, description}) {
    const expertWrapRef = useRef()

    return <div className={styles.professionalTeams}>
        <div className={styles.proHeader}>
            <div className={styles.proHeaderTitle}>{title}</div>
            <div className={styles.proHeaderUnderTitle}>{subTitle}</div>
            <div className={styles.proHeaderDesc}>{description}</div>
        </div>

        <div className={styles.proBoxSectionWrap} ref={expertWrapRef}>
            {
                experts.map((expert, index) => (
                    <ExpertCard key={index} expert={expert} index={index}/>
                ))
            }
        </div>
    </div>
}
