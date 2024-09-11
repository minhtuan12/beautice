import React from "react";
import styles from './styles.module.scss'
import MainLayout from "../MainLayout/index.jsx";
import {pathToIcon} from "../../utils/constants.js";

export default function AuthLayout({children, title}) {
    return <MainLayout>
        <div className={styles.bg}>
            <img alt={''} src={`${pathToIcon}/fluid-pastel-background.png`}/>
        </div>
        <div className={styles.authWrap}>
            <div className={`${styles.authContainer}`}>
                <div className={styles.leftCard}>
                    <img alt={''} src={`${pathToIcon}/Contact Animations (1).png`}/>
                </div>
                <div className={styles.rightCard}>
                    <div className={styles.rightContainer}>
                        <div className={styles.title}>
                            {title}
                        </div>
                        <div className={styles.formWrap}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
}
