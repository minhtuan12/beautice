import React, {useRef} from "react";
import styles from './styles.module.scss'
import {experts} from "./data.js";
import ExpertCard from "./ExpertCard/index.jsx";

export default function ExpertSection(
    {
        title,
        subTitle,
        description,
        extraClassname = '',
        headerClassname = '',
        boxSectionClassname = '',
        descClassname = ''
    }) {
    const expertWrapRef = useRef()

    return <div className={`${styles.professionalTeams} ${extraClassname}`}>
        <div className={`${styles.proHeader} ${headerClassname}`}>
            <div className={styles.proHeaderTitle}>{title}</div>
            <div className={styles.proHeaderUnderTitle}>{subTitle}</div>
            <div className={`${styles.proHeaderDesc} ${descClassname}`}>{description}</div>
        </div>

        <div className={`${styles.proBoxSectionWrap} ${boxSectionClassname}`} ref={expertWrapRef}>
            {
                experts.map((expert, index) => (
                    <ExpertCard key={index} expert={expert} index={index}/>
                ))
            }
        </div>
    </div>
}
