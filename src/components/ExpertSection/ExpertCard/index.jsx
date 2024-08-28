import React from "react";
import styles from "../styles.module.scss";
import {pathToIcon} from "../../../utils/constants.js";

export default function ExpertCard({expert}) {
    const handleClickSocialLink = (link) => {
        window.open(link)
    }

    return <div className={`${styles.proBoxSection}`}>
        <div className={styles.proBoxImage}>
            <img src={expert.avatar} alt=""/>
        </div>
        <div className={styles.proBoxContent}>
            <div className={styles.proBoxOccupation}>{expert.occupation}</div>
            <div className={styles.proBoxTitle}>{expert.name}</div>
            <div className={styles.proBoxDesc}>
                {expert.description}
            </div>
            <div className={styles.proBoxSocial}>
                <div className={styles.icon} onClick={() => handleClickSocialLink(expert.twitterUrl)}>
                    <img src={`${pathToIcon}/Twitter (2).png`} alt="" className={styles.innerIcon}/>
                </div>
                <div className={styles.icon} onClick={() => handleClickSocialLink(expert.facebookUrl)}>
                    <img src={`${pathToIcon}/Facebook.png`} alt="" className={styles.innerIconFacebook}/>
                </div>
                <div className={styles.icon} onClick={() => handleClickSocialLink(expert.instagramUrl)}>
                    <img src={`${pathToIcon}/Instagram (2).png`} alt="" className={styles.innerIcon}/>
                </div>
            </div>
        </div>
    </div>
}
