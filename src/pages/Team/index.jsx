import React, {useEffect, useRef, useState} from "react";
import styles from './styles.module.scss'
import MainLayout from "../../layouts/MainLayout/index.jsx";
import {pathToIcon} from "../../utils/constants.js";
import ExpertSection from "../../components/ExpertSection/index.jsx";
import {assistanceTeamProfiles, customersResponse} from "./data.js";
import Profile from "./components/Profile/index.jsx";
import CustomerResponse from "./components/CustomerResponse/index.jsx";
import {handleSlide} from "../../utils/helpers.js";
import InlineSVG from "react-inlinesvg";
import InactiveArrow from '../../assets/images/icons/inactive-arrow.svg'

export default function Team() {
    const customersWrapRef = useRef(null)
    const [visibleSlidingBtn, setVisibleSlidingBtn] = useState({
        left: false,
        right: true
    })
    const [currentScrollLeft, setCurrentScrollLeft] = useState(0)
    const gapBetweenCard = customersWrapRef?.current ? parseInt(window.getComputedStyle(customersWrapRef?.current)?.getPropertyValue('gap')?.split(' ')[1]?.replace('px', '')) : 0

    const handleSlideFeedBack = (direction) => {
        if (customersWrapRef?.current) {
            const currentWidth = customersWrapRef.current?.scrollLeft
            const ableToScroll = customersWrapRef.current?.scrollWidth

            handleSlide(currentWidth, ableToScroll, customersWrapRef.current, direction)
        }
    }

    useEffect(() => {
        const lastItemWidth = customersWrapRef.current?.offsetWidth + currentScrollLeft + gapBetweenCard
        if (lastItemWidth >= customersWrapRef.current?.scrollWidth) {
            setVisibleSlidingBtn({
                left: true,
                right: false
            })
        } else if (currentScrollLeft === 0) {
            setVisibleSlidingBtn({
                left: false,
                right: true
            })
        } else {
            setVisibleSlidingBtn({
                left: true,
                right: true
            })
        }
    }, [currentScrollLeft])

    useEffect(() => {
        if (customersWrapRef?.current) {
            const handleSetCurrentScrollLeft = () => {
                setCurrentScrollLeft(customersWrapRef.current?.scrollLeft)
            }

            customersWrapRef.current?.addEventListener('scroll', handleSetCurrentScrollLeft)

            return () => {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                customersWrapRef.current?.removeEventListener('scroll', handleSetCurrentScrollLeft)
            }
        }
    }, [])

    return <MainLayout>
        <div className={styles.teamWrap}>
            <div className={styles.introduction}>
                <div className={styles.bgImage}>
                    <img alt={''} src={`${pathToIcon}/Bubble BG (2).png`}/>
                </div>
                <ExpertSection
                    extraClassname={'!mt-0'}
                    headerClassname={'!ml-[-80px]'}
                    boxSectionClassname={'!mt-[67px]'}
                    descClassname={'!mt-[15px]'}
                    title={'Our Team'} subTitle={'We are Professional'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.'}
                />
            </div>

            <div className={styles.assistanceTeam}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        Assistance Team
                    </div>
                    <div className={styles.subTitle}>
                        Meet the pro assistance
                    </div>
                    <div className={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                    </div>
                </div>
                <div className={styles.teamProfileWrap}>
                    {
                        assistanceTeamProfiles.map((profile, index) => (
                            <Profile key={index} data={profile} index={index} length={assistanceTeamProfiles.length}/>
                        ))
                    }
                </div>
            </div>

            <div className={styles.goal}>
                <img alt={''} src={`${pathToIcon}/unsplash_rE6FqsyyqwM.png`} className={styles.background}/>
                <img alt={''} src={`${pathToIcon}/Background Mask (3).png`} className={styles.backgroundMask}/>
                <div className={styles.goalContent}>
                    <div className={styles.goalTitle}>
                        Customer satisfaction is our main goal
                    </div>
                    <div className={styles.goalDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                        venenatis
                    </div>
                </div>
            </div>

            <div className={styles.testimonialsWrap}>
                <img alt={''} src={`${pathToIcon}/Group 1.png`} className={styles.topBg}/>
                <img alt={''} src={`${pathToIcon}/Group 2.png`} className={styles.bottomBg}/>
                <div className={styles.mainContent}>
                    <div className={styles.mainHeader}>
                        <div className={styles.mainTitle}>
                            Our Testimonials
                        </div>
                        <div className={styles.mainSubTitle}>
                            What our customer says
                        </div>
                        <div className={styles.mainDesc}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                        </div>
                    </div>
                    <div className={styles.bottomContent}>
                        <div className={styles.customersWrap} ref={customersWrapRef}>
                            {
                                customersResponse.map((response, index) => (
                                    <CustomerResponse key={index} data={response}/>
                                ))
                            }
                        </div>
                    </div>
                    {
                        visibleSlidingBtn.left ?
                            <img
                                onClick={() => handleSlideFeedBack('left')}
                                style={{rotate: '180deg'}}
                                alt={''} src={`${pathToIcon}/arrow-right.png`}
                                className={styles.arrowIconLeft}
                            /> : <div className={styles.inactiveArrowIconLeft}>
                                <InlineSVG
                                    src={InactiveArrow}
                                    className={`rotate-[-180deg]`}
                                    width={28} height={28}
                                />
                            </div>
                    }
                    {
                        visibleSlidingBtn.right ?
                            <img
                                onClick={() => handleSlideFeedBack('right')}
                                alt={''}
                                src={`${pathToIcon}/arrow-right.png`}
                                className={styles.arrowIconRight}
                            /> : <div className={styles.inactiveArrowIconRight}>
                                <InlineSVG
                                    src={InactiveArrow}
                                    width={28} height={28}
                                />
                            </div>
                    }
                </div>
            </div>
        </div>
    </MainLayout>
}
