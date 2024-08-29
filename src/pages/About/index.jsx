import React from "react";
import styles from './styles.module.scss'
import MainLayout from "../../layouts/MainLayout/index.jsx";
import {pathToIcon} from "../../utils/constants.js";
import ExpertSection from "../../components/ExpertSection/index.jsx";

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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                        venenatis
                    </div>
                </div>
                <div className={styles.videoWrap}>
                    <img alt={''} src={`${pathToIcon}/unsplash_DE6rYp1nAho.png`}/>
                    <div className={styles.playBtn}>
                        <div className={styles.triangle}></div>
                    </div>
                </div>
            </div>

            <div className={styles.expertsWrap}>
                <div className={styles.bubbleBackground}>
                    <img alt={''} src={`${pathToIcon}/Bubble BG.png`}/>
                </div>
                <div className={styles.content}>
                    <ExpertSection
                        title={'Professional Teams'}
                        subTitle={'The Professional expert'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.'}
                    />
                </div>
            </div>

            <div className={styles.businessSloganWrap}>
                <img alt={''} src={`${pathToIcon}/unsplash_Pe9IXUuC6QU.png`} className={styles.bgImage}/>
                <img alt={''} src={`${pathToIcon}/Background Mask.png`} className={styles.bgMask}/>
                <div className={styles.sloganContent}>
                    <div className={styles.sloganTitle}>
                        Business Slogan
                    </div>
                    <div className={styles.sloganSubTitle}>
                        Best responsibility and service
                        for our customers
                    </div>
                    <div className={styles.sloganDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                    </div>
                </div>
            </div>

        </div>
    </MainLayout>
}
