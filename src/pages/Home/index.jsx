import React, {useRef} from "react";
import MainLayout from "../../layouts/MainLayout/index.jsx";
import {pathToIcon} from "../../utils/constants.js";
import styles from './styles.module.scss'
import ExpertCard from "./components/ExpertCard/index.jsx";
import ServiceCard from "./components/ServiceCard/index.jsx";
import {RightOutlined} from '@ant-design/icons'
import {useSelector} from "react-redux";
import {handleSlide} from "../../utils/helpers.js";

export default function Home() {
    const isVisibleSlidingBtn = useSelector(state => state.app.isVisibleSlidingBtn)
    const productWrapRef = useRef()
    const expertWrapRef = useRef()
    const experts = [
        {
            avatar: `${pathToIcon}/unsplash_pTrhfmj2jDA.png`,
            occupation: 'Surgeon',
            name: 'Briyan Nevalli',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
            facebookUrl: '',
            twitterUrl: '',
            instagramUrl: ''
        },
        {
            avatar: `${pathToIcon}/unsplash_FVh_yqLR9eA.png`,
            occupation: 'Dermatologist',
            name: 'Bella sebastian',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
            facebookUrl: '',
            twitterUrl: '',
            instagramUrl: ''
        },
        {
            avatar: `${pathToIcon}/unsplash_mEZ3PoFGs_k.png`,
            occupation: 'Stylist expert',
            name: 'Lilly Adams',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
            facebookUrl: '',
            twitterUrl: '',
            instagramUrl: ''
        }
    ]
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

    function handleSlideProduct(direction) {
        if (productWrapRef?.current) {
            const currentWidth = productWrapRef.current.scrollLeft
            const ableToScroll = productWrapRef.current.scrollWidth - 600

            handleSlide(currentWidth, ableToScroll, productWrapRef.current, direction)
        }
    }

    function handleSlideProfessionalExpert(direction) {
        if (expertWrapRef?.current) {
            const currentWidth = expertWrapRef.current.scrollLeft
            const ableToScroll = expertWrapRef.current.scrollWidth - 800

            handleSlide(currentWidth, ableToScroll, expertWrapRef.current, direction)
        }
    }

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

            {
                isVisibleSlidingBtn ? <>
                    <div className={styles.angleRight} onClick={() => handleSlideProduct('right')}>
                        <RightOutlined/>
                    </div>
                    <div className={styles.angleLeft} onClick={() => handleSlideProduct('left')}>
                        <RightOutlined/>
                    </div>
                </> : ''
            }

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
                <div className={styles.rightContent}>
                    <img src={`${pathToIcon}/unsplash_LRXYS0tSyGc.png`} alt=""/>
                </div>
            </div>
        </div>

        <div className={styles.professionalTeams}>
            <div className={styles.proHeader}>
                <div className={styles.proHeaderTitle}>Professional Teams</div>
                <div className={styles.proHeaderUnderTitle}>The Professional expert</div>
                <div className={styles.proHeaderDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam.
                </div>
            </div>

            {
                isVisibleSlidingBtn ? <>
                    <div className={styles.proAngleRight} onClick={() => handleSlideProfessionalExpert('right')}>
                        <RightOutlined/>
                    </div>
                    <div className={styles.proAngleLeft} onClick={() => handleSlideProfessionalExpert('left')}>
                        <RightOutlined/>
                    </div>
                </> : ''
            }

            <div className={styles.proBoxSectionWrap} ref={expertWrapRef}>
                {
                    experts.map((expert, index) => (
                        <ExpertCard key={index} expert={expert} index={index}/>
                    ))
                }
            </div>
        </div>

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
                <div className={styles.cuImage}>
                    <img alt="" src={`${pathToIcon}/Contact Animations.png`}/>
                </div>
                <div className={styles.cuFormWrap}>
                    <div className={styles.formTitle}>Contact Us</div>
                    <div className={styles.formUnderTitle}>Send your inquiry to<br/>our expert team</div>
                    <div className={styles.formDesc}>Lorem ipsum dolor sit amet nulla turapis tellus.</div>
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
