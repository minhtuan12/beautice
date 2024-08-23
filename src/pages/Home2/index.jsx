import React, {useRef} from "react";
import styles from './styles.module.scss'
import MainLayout from "../../layouts/MainLayout/index.jsx";
import {pathToIcon} from "../../utils/constants.js";
import MainServiceCard from "./components/MainServiceCard/index.jsx";
import KeyMetric from "./components/KeyMetric/index.jsx";
import NewsCard from "./components/NewsCard/index.jsx";
import {RightOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";
import {handleSlide} from "../../utils/helpers.js";

export default function Home2() {
    const isVisibleSlidingBtn = useSelector(state => state.app.isVisibleSlidingBtn)
    const mainServices = [
        {
            logo: `${pathToIcon}/icon-2.png`,
            name: 'Beauty consultation',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
        },
        {
            logo: `${pathToIcon}/icon-2 (1).png`,
            name: 'Skin treatments',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
        },
        {
            logo: `${pathToIcon}/icon-3.png`,
            name: 'Beauty product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
        }
    ]
    const keyMetrics = [
        {
            icon: `${pathToIcon}/handshake 1.png`,
            quantity: '100%',
            about: 'trusted clinic'
        },
        {
            icon: `${pathToIcon}/brotherhood 1.png`,
            quantity: '99%',
            about: 'customer love'
        },
        {
            icon: `${pathToIcon}/earth 1.png`,
            quantity: '75+',
            about: 'asian branch'
        },
        {
            icon: `${pathToIcon}/doctor 1.png`,
            quantity: '1.200+',
            about: 'licensed worker'
        }
    ]
    const newsList = [
        {
            logo: `${pathToIcon}/unsplash_3ewkNkfJj2k.png`,
            name: 'How much does a consultation cost at our clinic?',
            description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...'
        },
        {
            logo: `${pathToIcon}/unsplash_7tDGb3HrITg.png`,
            name: 'Watch out! don\'t choose the wrong beauty product',
            description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...'
        },
        {
            logo: `${pathToIcon}/unsplash_0_McYfdyEDA.png`,
            name: 'About skin care you need to know',
            description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...'
        }
    ]

    const serviceWrapRef = useRef()
    const newsWrapRef = useRef()

    const handleSlideService = (direction) => {
        if (serviceWrapRef?.current) {
            const currentWidth = serviceWrapRef.current.scrollLeft
            const ableToScroll = serviceWrapRef.current.scrollWidth - 600

            handleSlide(currentWidth, ableToScroll, serviceWrapRef.current, direction)
        }
    }

    const handleSlideNews = (direction) => {
        if (newsWrapRef?.current) {
            const scrollWidth = newsWrapRef?.current.clientWidth - 1 / 2 * window.innerWidth + 50
            newsWrapRef.current.scrollLeft += direction === 'right' ? scrollWidth : -scrollWidth
        }
    }

    return <MainLayout isLightTheme={true}>
        <div className={styles.homeWrap}>
            <div className={styles.backgroundSliderWrap}>
                <img alt={''} src={`${pathToIcon}/Background Slider.png`} className={styles.sliderImage}/>
                <div className={styles.sliderContent}>
                    <div className={styles.leftSlider}>
                        <div className={styles.title}>
                            Your beauty center place
                        </div>
                        <div className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa pellentesque arcu
                            fusce et magna consequat neque vitae lobortis.
                        </div>
                        <div className={styles.detailBtnWrap}>
                            <button>More Details</button>
                        </div>
                    </div>
                    <div className={styles.rightSlider}>
                        <img alt={''} src={`${pathToIcon}/Group 4.png`}/>
                        <div className={styles.rightText}>Tour Video</div>
                    </div>
                </div>
            </div>

            <div className={styles.aboutUsWrap}>
                <div className={styles.leftImageWrap}>
                    <img alt={''} src={`${pathToIcon}/Illustration-1.svg`}/>
                </div>
                <div className={styles.rightContent}>
                    <div className={styles.mainTitle}>
                        About Us
                    </div>
                    <div className={styles.underTitle}>
                        We are the best beauty clinic
                    </div>
                    <div className={styles.descriptionUnder}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet.
                        Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus
                        in suspendisse placerat.
                    </div>
                    <div className={styles.learnMoreBtnWrap}>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>

            <div className={styles.mainServices}>
                <div className={styles.waveLineBackground}>
                    <img alt={''} src={`${pathToIcon}/Wave Line.png`}/>
                </div>
                <div className={styles.header}>
                    <div className={styles.serviceTitle}>
                        Main Services
                    </div>
                    <div className={styles.subTitle}>
                        Our focus services
                    </div>
                    <div className={styles.serviceDescription}>
                        Lorem ipsum dolor sit amet.
                    </div>
                </div>
                <div className={styles.content}>
                    {
                        isVisibleSlidingBtn ? <>
                            <div className={'angleRight'} onClick={() => handleSlideService('right')}>
                                <RightOutlined/>
                            </div>
                            <div className={'angleLeft'} onClick={() => handleSlideService('left')}>
                                <RightOutlined/>
                            </div>
                        </> : ''
                    }
                    <div className={styles.cardsWrap} ref={serviceWrapRef}>
                        {
                            mainServices.map((service, index) => (
                                <MainServiceCard key={index} service={service} index={index}/>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className={styles.statisticsWrap}>
                <div className={styles.background}>
                    <img alt={''} src={`${pathToIcon}/Background.png`}/>
                </div>
                <div className={styles.statisticsContent}>
                    <div className={styles.leftStatistics}>
                        <div className={styles.whyTitle}>
                            Why choosing us?
                        </div>
                        <div className={styles.whyDesc}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                            venenatis.
                        </div>
                    </div>
                    <div className={styles.rightStatistics}>
                        {
                            keyMetrics.map((item, index) => (
                                <KeyMetric data={item} index={index} key={index}/>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className={styles.blogWrap}>
                <div className={styles.rightWaveLineBackground}>
                    <img alt={''} src={`${pathToIcon}/Wave Line Right.png`}/>
                </div>
                <div className={styles.bottomWaveLineBackground}>
                    <img alt={''} src={`${pathToIcon}/BG-Elements.png`}/>
                </div>
                <div className={styles.upperContent}>
                    <div className={styles.blogHeader}>
                        <div className={styles.blogMainTitle}>
                            The Blog
                        </div>
                        <div className={styles.blogSubTitle}>
                            Our latest news
                        </div>
                        <div className={styles.blogDescription}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                    </div>
                    <div className={styles.blogContent}>
                        {
                            isVisibleSlidingBtn ? <>
                                <div className={'angleRight'} onClick={() => handleSlideNews('right')}>
                                    <RightOutlined/>
                                </div>
                                <div className={'angleLeft'} onClick={() => handleSlideNews('left')}>
                                    <RightOutlined/>
                                </div>
                            </> : ''
                        }
                        <div className={styles.blogCardWrap} ref={newsWrapRef}>
                            {
                                newsList.map((news, index) => (
                                    <NewsCard news={news} key={index}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.lowerContent}>
                    <div className={styles.lowerLeftContent}>
                        <div className={styles.contentTitle}>
                            Request call services
                        </div>
                        <div className={styles.contentDescription}>
                            Lorem ipsum dolor sit amet, consect adipiscing elit <span>Contact Us</span>.
                        </div>
                    </div>
                    <div className={styles.lowerRightContent}>
                        <div className={styles.inputWrap}>
                            <input placeholder={'Insert your phone number here ...'}/>
                            <div className={styles.phoneImageWrap}>
                                <img alt={''} src={`${pathToIcon}/phone-volume.png`}/>
                            </div>
                        </div>
                        <div className={styles.underInput}>Toll free for our coverage areas.</div>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
}
