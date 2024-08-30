import React from "react";
import styles from './styles.module.scss'
import MainLayout from "../../layouts/MainLayout/index.jsx";
import {pathToIcon} from "../../utils/constants.js";
import PlayButton from "../../components/PlayButton/index.jsx";

export default function Gallery() {
    return <MainLayout>
        <div className={styles.galleryWrap}>
            <div className={styles.top}>
                <div className={styles.header}>
                    <div className={styles.heading}>
                        <div className={styles.title}>
                            Our Gallery
                        </div>
                        <div className={styles.subTitle}>
                            Check out the collection pictures from our clinic
                        </div>
                    </div>
                    <div className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                        venenatis
                    </div>
                </div>
                <div className={styles.imagesWrap}>
                    <img alt={''} src={`${pathToIcon}/unsplash_FVh_yqLR9eA (1).png`}/>
                    <img alt={''} src={`${pathToIcon}/unsplash_3ewkNkfJj2k (1).png`}/>
                    <img alt={''} src={`${pathToIcon}/unsplash_xayCTz6N2nM.png`}/>
                    <img alt={''} src={`${pathToIcon}/unsplash_Pe9IXUuC6QU (1).png`}/>
                    <img alt={''} src={`${pathToIcon}/unsplash_fvInY-Gh7sc.png`}/>
                    <img alt={''} src={`${pathToIcon}/unsplash_HEde-a_T4E8.png`}/>
                    <img alt={''} src={`${pathToIcon}/unsplash_9Wa1HgE1XlA.png`}/>
                    <img alt={''} src={`${pathToIcon}/unsplash_PqyzuzFiQfY.png`}/>
                    <img alt={''} src={`${pathToIcon}/unsplash_4SUyx4KQ5Ik.png`}/>
                </div>
                <div className={styles.bottomDesc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                    lectus magna fringilla urna, porttitor rhoncus dolor purus non enim, <span>our teams</span>.
                </div>
            </div>

            <div className={styles.between}>
                <img alt={''} src={`${pathToIcon}/unsplash_eflLpWC1Geo.png`} className={styles.bgImage}/>
                <img alt={''} src={`${pathToIcon}/Background Mask (2).png`} className={styles.bgMask}/>
                <div className={styles.content}>
                    <div className={styles.topContent}>
                        <div className={styles.videoTitle}>
                            Watch the video tour
                        </div>
                        <div className={styles.videoDesc}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                            venenatis
                        </div>
                    </div>
                    <div className={styles.playBtnWrap}>
                        <PlayButton/>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.bubbleBg}>
                    <img alt={''} src={`${pathToIcon}/Background Bubble (1).png`}/>
                </div>
                <div className={styles.quotaContent}>
                    <div className={styles.leftContent}>
                        <div className={styles.quotaTitle}>
                            Get The Quota
                        </div>
                        <div className={styles.quotaSubTitle}>
                            Want to be handled by our professional team immediately?
                        </div>
                        <div className={styles.quotaDesc}>
                            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.
                        </div>
                    </div>
                    <div className={styles.btnWrap}>
                        <button>Make an Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
}
