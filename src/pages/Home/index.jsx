import React, {useRef} from "react";
import MainLayout from "../../layouts/MainLayout/index.jsx";
import {pathToIcon} from "../../utils/constants.js";
import styles from './styles.module.scss'
import ServiceCard from "./components/ServiceCard/index.jsx";
import ExpertSection from "../../components/ExpertSection/index.jsx";
import {useSelector} from "react-redux";

export default function Home() {
    const productWrapRef = useRef()
    const visibleImageUnderTitle = useSelector(state => state.app.visibleImageUnderTitle)
    const services = [
        {
            logo: `${pathToIcon}/Animation1.png`,
            title: 'Beauty consultation',
            description: 'Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.'
        },
        {
            logo: `${pathToIcon}/Animation2.png`,
            title: 'Skin treatments',
            description: 'Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.'
        },
        {
            logo: `${pathToIcon}/Animation3.png`,
            title: 'Beauty product',
            description: 'Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.'
        }
    ]

    return <MainLayout>
        <div className={styles.mainSlider}>
            <div className={styles.firstBubble}>
                <img alt="" src={`${pathToIcon}/Bubble 1 (1).png`}/>
            </div>
            <div className={styles.secondBubble}>
                <img alt="" src={`${pathToIcon}/Bubble 2 (1).png`}/>
            </div>
            <div className={styles.content}>
                <div className={styles.leftPartSlider}>
                    <div className={styles.title}>
                        Clinic & beauty consultant
                    </div>
                    <div className={styles.description}>
                        It is a long established fact that a reader will be by the readable content of a page.
                    </div>
                    <div className={styles.detailBtn}>
                        <button>More Details</button>
                    </div>
                </div>
                <div className={styles.rightPartSlider}>
                    <img src={`${pathToIcon}/Frame 1.png`} alt=""/>
                </div>
            </div>
            <div className={styles.slideBtn}>
                <button className={styles.leftBtn}></button>
                <button className={styles.middleBtn}></button>
                <button className={styles.rightBtn}></button>
            </div>
        </div>

        <div className={styles.coreServices}>
            {/*<BoxHeader*/}
            {/*    title={'Main Services'}*/}
            {/*    subTitle={'Learn services to focus on your beauty'}*/}
            {/*    description={'Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.'}*/}
            {/*    align={'center'}*/}
            {/*    classnames={{*/}
            {/*        titleExtraClassname: styles.servicesTitle,*/}
            {/*        subTitleExtraClassname: styles.servicesDescription,*/}
            {/*        descriptionExtraClassname: styles.bottomDesc*/}
            {/*    }}*/}
            {/*/>*/}
            <div className={styles.header}>
                <div className={styles.servicesTitle}>
                    Main Services
                </div>
                <div className={styles.servicesDescription}>
                    Learn services to focus on your beauty
                </div>
                <div className={styles.bottomDesc}>
                    Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat
                    tellus sagittis, scelerisque eget nulla turpis.
                </div>
            </div>

            <div className={styles.boxSectionWrap} ref={productWrapRef}>
                {
                    services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index}/>
                    ))
                }
            </div>
        </div>

        <div className={styles.aboutUs}>
            <img src={`${pathToIcon}/Background Bubble.png`} alt="" className={styles.bubbleBackground}/>
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <div className={styles.contentTitle}>
                        About Us
                    </div>
                    <div className={styles.contentUnderTitle}>
                        We are the best beauty clinic
                    </div>
                    {
                        visibleImageUnderTitle ?
                            <div className={styles.underImageWrap}>
                                <img src={`${pathToIcon}/unsplash_LRXYS0tSyGc.png`} alt=""/>
                            </div> : ''
                    }
                    <div className={styles.contentDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet.
                        Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus
                        in suspendisse placerat.<br/><br/>
                        Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.
                    </div>
                    <div className={styles.optionBtn}>
                        <button>Learn More</button>
                        <div className={styles.playBtnOption}>
                            <img src={`${pathToIcon}/Play_button.png`} alt=""/>
                            <span className={styles.optionTitle}>Watch Video</span>
                        </div>
                    </div>
                </div>
                <div className={`${styles.rightContent} ${visibleImageUnderTitle ? '!hidden' : ''}`}>
                    <img src={`${pathToIcon}/unsplash_LRXYS0tSyGc.png`} alt=""/>
                </div>
            </div>
        </div>

        <ExpertSection
            title={'Professional Teams'}
            subTitle={'The Professional expert'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.'}
        />

        <div className={styles.contactUs}>
            <div className={styles.cuBubbleWrap}>
                <div className={styles.cuFirstBubble}>
                    <img src={`${pathToIcon}/Bubble 1.png`} alt=""/>
                </div>
                <div className={styles.cuSecondBubble}>
                    <img src={`${pathToIcon}/Bubble 2.png`} alt=""/>
                </div>
            </div>
            <div className={styles.cuContent}>
                <div className={`${styles.cuImage} ${visibleImageUnderTitle ? '!hidden' : ''}`}>
                    <img alt="" src={`${pathToIcon}/Contact Animations.png`}/>
                </div>
                <div className={styles.cuFormWrap}>
                    <div className={styles.formTitle}>Contact Us</div>
                    <div className={styles.formUnderTitle}>Send your inquiry to<br/>our expert team</div>
                    <div className={styles.formDesc}>Lorem ipsum dolor sit amet nulla turapis tellus.</div>
                    {
                        visibleImageUnderTitle ? <img alt="" src={`${pathToIcon}/Contact Animations.png`}/> : ''
                    }
                    <div className={styles.formContent}>
                        <div className={styles.nameInput}>
                            <input placeholder="First name"/>
                            <input placeholder="Last name" className={styles.lastNameInput}/>
                        </div>
                        <div className={styles.inputWrap}>
                            <input placeholder="Email address"/>
                        </div>
                        <div className={styles.inputWrap}>
                            <input placeholder="Subject message"/>
                        </div>
                        <div className={`${styles.inputWrap} ${styles.inquiryInput}`}>
                            <textarea placeholder="Your inquiry here"></textarea>
                        </div>
                        <div className={styles.sendMsgBtn}>
                            <button>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
}
