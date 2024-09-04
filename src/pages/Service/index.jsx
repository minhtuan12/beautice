import React, {useState} from "react";
import MainLayout from "../../layouts/MainLayout/index.jsx";
import styles from './styles.module.scss'
import {pathToIcon} from "../../utils/constants.js";
import SectionWithSideImage from "../../components/SectionWithSideImage/index.jsx";
import {Menu} from "antd";
import {faqs} from "./data.js";
import './styles.scss'

export default function Service() {
    const [openKeys, setOpenKeys] = useState([])
    const customMotion = {
        motionName: 'custom-slide-down',
        motionAppear: true,
        onAppearStart: () => ({ height: 0 }),
        onAppearActive: () => ({ height: 'auto' }),
        onLeaveStart: () => ({ height: 'auto' }),
        onLeaveActive: () => ({ height: 0 }),
    };
    const isSubMenuOpened = (key) => openKeys?.includes(key)

    const customItems = faqs.map(item => {
        if (item.children) {
            return {
                ...item,
                expandIcon: <img
                    className={`transition-[.3s] ${isSubMenuOpened(item.key.toString()) ? 'rotate-[-180deg]' : ''}`}
                    alt={''} src={`${pathToIcon}/Vector (1).png`}/>
            }
        }
        return item
    })

    return <MainLayout>
        <div className={styles.serviceWrap}>
            <div className={styles.introduction}>
                <div className={styles.background}>
                    <img alt={''} src={`${pathToIcon}/Bubble BG (1).png`}/>
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        Our Services
                    </div>
                    <div className={styles.subTitle}>
                        We focus on your beauty
                    </div>
                    <div className={styles.description}>
                        Lorem ipsum dolor sit amet
                    </div>
                    <div className={styles.imagesWrap}>
                        <div className={styles.top}>
                            <img alt={''} src={`${pathToIcon}/unsplash_5TJ0Hoy5FLY.png`}/>
                            <img alt={''} src={`${pathToIcon}/unsplash_ZOT2Mewzmh8.png`} className={styles.hiddenImg}/>
                            <img alt={''} src={`${pathToIcon}/unsplash_pTrhfmj2jDA (1).png`} className={styles.squareImg}/>
                        </div>
                        <div className={styles.bottom}>
                            <img alt={''} src={`${pathToIcon}/unsplash_gzfIO69Q6eM.png`}/>
                            <img alt={''} src={`${pathToIcon}/unsplash_ZOT2Mewzmh8.png`} className={styles.rectImg}/>
                            <img alt={''} src={`${pathToIcon}/unsplash_pTrhfmj2jDA (1).png`} className={styles.hiddenImg}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.consultation}>
                <SectionWithSideImage
                    imageUrl={`${pathToIcon}/Animation1 (1).png`}
                    imageClass={'!mt-[-20px]'}
                    title={'Beauty Consultation'}
                    description={
                        <div className={styles.sectionDescription}>
                            <div className={styles.desc}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec
                                amet. Egestas volutpat facilisi eu libero.
                            </div>
                            <div className={styles.option}>Make an Appointment
                                <img alt={''} src={`${pathToIcon}/angle-double-right.png`}/>
                            </div>
                        </div>
                    }
                    subTitle={'We services beauty consultation'}
                />
            </div>
            <div className={styles.treatments}>
                <SectionWithSideImage
                    isReverse
                    imageUrl={`${pathToIcon}/Animation2 (1).png`}
                    imageClass={'!mt-[-17px] !ml-[-2px]'}
                    title={'Skin Treatements'}
                    description={
                        <div className={styles.sectionDescription}>
                            <div className={styles.desc}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                                quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.
                            </div>
                            <div className={styles.option}>Make an Appointment
                                <img alt={''} src={`${pathToIcon}/angle-double-right.png`}/>
                            </div>
                        </div>
                    }
                    subTitle={'Skin care and treatment by expert'}
                    subTitleWidth={'calc((100vw * 411) / 1440)'}
                />
            </div>
            <div className={styles.product}>
                <SectionWithSideImage
                    imageUrl={`${pathToIcon}/Animation3 (1).png`}
                    title={'Beauty Product'}
                    description={
                        <div className={styles.sectionDescription}>
                            <div className={styles.desc}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec
                                amet. Egestas volutpat facilisi eu libero.
                            </div>
                            <div className={styles.option}>Make an Appointment
                                <img alt={''} src={`${pathToIcon}/angle-double-right.png`}/>
                            </div>
                        </div>
                    }
                    subTitle={'We present quality beauty products'}
                    imageClass={'!mt-[-18px]'}
                />
            </div>

            <div className={styles.titleAboveVideo}>
                Best responsibility and service for our customers
            </div>
            <div className={styles.videoWrap}>
                <img alt={''} src={`${pathToIcon}/unsplash_NPjNtTExSJ4.png`} className={styles.bgImage}/>
                <img alt={''} src={`${pathToIcon}/Background Mask (1).png`} className={styles.bgMask}/>
                <div className={styles.videoContent}>
                    <div className={styles.left}>
                        <div className={styles.videoTitle}>
                            Best responsibility and service
                            for our customers
                        </div>
                        <div className={styles.videoDesc}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                            venenatis
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.playBtn}>
                            <img alt={''} src={`${pathToIcon}/Ellipse 3.png`} className={styles.ellipse}/>
                            <img alt={''} src={`${pathToIcon}/Polygon 1.png`} className={styles.polygon}/>
                        </div>
                        <div className={styles.text}>
                            Treatments Videos
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.faqWrap}>
                <div className={styles.heading}>
                    Services FAQ’s
                </div>
                <div className={`${styles.faqContent}`}>
                    <Menu
                        items={customItems}
                        className={'custom-faqs'}
                        mode="inline"
                        expandIcon={<img alt={''} src={`${pathToIcon}/Vector (1).png`}/>}
                        onOpenChange={(openKeys) => setOpenKeys(openKeys)}
                        motion={customMotion}
                    />
                </div>
            </div>
        </div>
    </MainLayout>
}
