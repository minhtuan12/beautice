import React from "react";
import styles from './styles.module.scss'
import MainLayout from "../../layouts/MainLayout/index.jsx";
import {pathToIcon} from "../../utils/constants.js";

export default function About() {
    return <MainLayout>
        <div className={styles.aboutWrap}>
            <div className={styles.introductionWrap}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        About
                    </div>
                    <div className={styles.subTitle}>
                        We are a leading beauty clinic that has been around since 2002
                    </div>
                    <div className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                    </div>
                </div>
                <div className={styles.videoWrap}>
                    <img alt={''} src={`${pathToIcon}/unsplash_DE6rYp1nAho.png`}/>
                    <div className={styles.playBtn}>
                        <div className={styles.triangle}></div>
                    </div>
                </div>
            </div>

        </div>
    </MainLayout>
}
