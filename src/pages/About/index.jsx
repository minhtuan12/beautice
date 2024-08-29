import React from "react";
import styles from './styles.module.scss'
import MainLayout from "../../layouts/MainLayout/index.jsx";
import {pathToIcon} from "../../utils/constants.js";
import ExpertSection from "../../components/ExpertSection/index.jsx";
import OurSection from "./components/OurSection/index.jsx";

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

            <div className={styles.bottomContentWrap}>
                <div className={styles.bubbleBgFooter}>
                    <img alt={''} src={`${pathToIcon}/Bubble BG Footer.png`}/>
                </div>
                <div className={styles.mainContent}>
                    <div className={styles.ourVision}>
                        <OurSection
                            imageUrl={`${pathToIcon}/Illustration-1.png`}
                            title={'Our Vision'}
                            subTitle={'Be the best and go international'}
                            description={<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.<br/><br/> Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</span>}
                        />
                    </div>
                    <div className={styles.ourMission}>
                        <OurSection
                            isReverse
                            contentWidth={'calc((100vw * 530) / 1440)'}
                            descriptionWidth={'calc((100vw * 483) / 1440)'}
                            imageUrl={`${pathToIcon}/Illustration-2.png`}
                            title={'Our Mission'}
                            subTitle={'Special & premium service to any clients'}
                            description={<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.<br/><br/> Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</span>}
                        />
                    </div>
                    <div className={styles.ourClients}>
                        <div className={styles.ocTitle}>
                            Our Clients
                        </div>
                        <div className={styles.ocSubTitle}>
                            Well-known agencies
                        </div>
                        <div className={styles.ocDesc}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </div>
                        <div className={styles.logosWrap}>
                            <img alt={''} src={`${pathToIcon}/LOGO1.png`}/>
                            <img alt={''} src={`${pathToIcon}/LOGO2.png`}/>
                            <img alt={''} src={`${pathToIcon}/LOGO3.png`}/>
                            <img alt={''} src={`${pathToIcon}/LOGO4.png`}/>
                            <img alt={''} src={`${pathToIcon}/LOGO5.png`}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </MainLayout>
}
