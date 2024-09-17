import React, {useEffect, useRef, useState} from "react";
import MainLayout from "../../layouts/MainLayout/index.jsx";
import {pathToIcon} from "../../utils/constants.js";
import ExpertSection from "../../components/ExpertSection/index.jsx";
import {assistanceTeamProfiles, customersResponse} from "./data.js";
import Profile from "./components/Profile/index.jsx";
import CustomerResponse from "./components/CustomerResponse/index.jsx";
import {handleSlide} from "../../utils/helpers.js";
import InlineSVG from "react-inlinesvg";
import InactiveArrow from '../../assets/images/icons/inactive-arrow.svg'
import tw, {css} from 'twin.macro'
import {
    ArrowIconLeft,
    ArrowIconRight,
    GoalContent,
    GoalDesc,
    GoalTitle,
    Header,
    InactiveLeftArrowIcon,
    InactiveRightArrowIcon,
    MainContent,
    TeamProfileWrap,
    TestimonialWrap
} from "./styles.js";

const BackgroundImageWithMask = tw.img`absolute top-0 left-0`

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
        <>
            <div tw={'relative top-[229px]'}>
                <div tw={'absolute top-0 right-0 z-[-1]'}>
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

            <div tw={'mt-[382px]'}>
                <div tw={'large:px-[50px] md:px-[30px] smd:px-[16px]'}>
                    <div tw={'text-[16px] font-[600] leading-[20px] text-center text-[#FF64AE] large:h-auto'}>
                        Assistance Team
                    </div>
                    <div
                        tw={'mt-[12px] h-[57px] text-[36px] font-[600] leading-[45px] text-center text-[#091156] large:h-auto'}>
                        Meet the pro assistance
                    </div>
                    <div
                        tw={'mt-[12px] h-[28px] text-[16px] font-[400] leading-[24px] text-center tracking-widest text-[#8B8B8B] large:h-auto'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                    </div>
                </div>
                <TeamProfileWrap>
                    {
                        assistanceTeamProfiles.map((profile, index) => (
                            <Profile key={index} data={profile} index={index} length={assistanceTeamProfiles.length}/>
                        ))
                    }
                </TeamProfileWrap>
            </div>

            <div
                tw={'mt-[125px] relative h-[calc(100vw_/_2.72)] exlg:(h-[529px] left-1/2 translate-x-[-50%] w-[1440px])'}>
                <BackgroundImageWithMask alt={''} src={`${pathToIcon}/unsplash_rE6FqsyyqwM.png`} tw={'w-full'}/>
                <BackgroundImageWithMask alt={''} src={`${pathToIcon}/Background Mask (3).png`} tw={'w-full'}/>
                <GoalContent>
                    <GoalTitle>Customer satisfaction is our main goal</GoalTitle>
                    <GoalDesc>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                        venenatis
                    </GoalDesc>
                </GoalContent>
            </div>

            <TestimonialWrap>
                <BackgroundImageWithMask alt={''} src={`${pathToIcon}/Group 1.png`}/>
                <img alt={''} src={`${pathToIcon}/Group 2.png`} tw={'absolute bottom-0 right-0'}/>
                <MainContent>
                    <Header>
                        <div tw={'text-[16px] font-[600] leading-[20px] text-center text-[#FF64AE] large:h-auto'}>
                            Our Testimonials
                        </div>
                        <div
                            tw={'text-[36px] font-[600] leading-[45px] text-center text-[#091156] h-[57px] mt-[12px] large:h-auto'}>
                            What our customer says
                        </div>
                        <div
                            tw={'text-[16px] font-[400] leading-[24px] tracking-widest text-center text-[#8B8B8B] mt-[12px] large:h-auto'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                        </div>
                    </Header>
                    <div tw={'w-[545px] relative left-1/2 translate-x-[-50%] mt-[62px] ml-[2px] tab:w-[300px]'}>
                        <div css={css`
                          scroll-snap-type: x mandatory;
                          ${tw`grid grid-cols-[repeat(4,_544px)] overflow-auto w-auto place-content-start gap-x-[30px] scroll-smooth tab:grid-cols-[repeat(4,_300px)]`}`}
                             ref={customersWrapRef}
                        >
                            {
                                customersResponse.map((response, index) => (
                                    <CustomerResponse key={index} data={response}/>
                                ))
                            }
                        </div>
                    </div>
                    {
                        visibleSlidingBtn.left ?
                            <ArrowIconLeft
                                onClick={() => handleSlideFeedBack('left')}
                                style={{rotate: '180deg'}}
                                alt={''} src={`${pathToIcon}/arrow-right.png`}
                            /> : <InactiveLeftArrowIcon>
                                <InlineSVG
                                    src={InactiveArrow}
                                    className={`rotate-[-180deg]`}
                                    width={28} height={28}
                                />
                            </InactiveLeftArrowIcon>
                    }
                    {
                        visibleSlidingBtn.right ?
                            <ArrowIconRight
                                onClick={() => handleSlideFeedBack('right')}
                                alt={''}
                                src={`${pathToIcon}/arrow-right.png`}
                            /> : <InactiveRightArrowIcon>
                                <InlineSVG
                                    src={InactiveArrow}
                                    width={28} height={28}
                                />
                            </InactiveRightArrowIcon>
                    }
                </MainContent>
            </TestimonialWrap>
        </>
    </MainLayout>
}
