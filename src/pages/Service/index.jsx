import React, {useState} from "react";
import MainLayout from "../../layouts/MainLayout/index.jsx";
import {pathToIcon} from "../../utils/constants.js";
import SectionWithSideImage from "../../components/SectionWithSideImage/index.jsx";
import {Menu} from "antd";
import {faqs} from "./data.js";
import './styles.scss'
import tw, {css} from 'twin.macro'
import {
    BackgroundImageWithMask,
    Image,
    ImageWrap,
    Introduction,
    Section,
    SectionDescription,
    SectionImage,
    SectionOption
} from "./components.js";

const TopImage = tw(Image)`btab:w-full`

export default function Service() {
    const [openKeys, setOpenKeys] = useState([])
    const customMotion = {
        motionName: 'custom-slide-down',
        motionAppear: true,
        onAppearStart: () => ({height: 0}),
        onAppearActive: () => ({height: 'auto'}),
        onLeaveStart: () => ({height: 'auto'}),
        onLeaveActive: () => ({height: 0}),
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
        <div tw={'w-full'}>
            <Introduction>
                <div tw={'w-full h-full absolute top-0 z-[-1]'}>
                    <img alt={''} src={`${pathToIcon}/Bubble BG (1).png`} tw={'w-full h-full'}/>
                </div>
                <div css={css`
                  ${tw`w-full p-[30px_170px_87px_170px]
                    exlg:(relative left-1/2 translate-x-[-50%] w-[1440px])
                    large:(w-full p-[30px_50px_87px_50px])
                    md:px-[30px]`};
                  @media (max-width: 820px) {
                    ${tw`px-[40px]`}
                  }
                  @media (max-width: 580px) {
                    ${tw`px-[16px]`}
                  }
                `}>
                    <div tw={'text-[16px] font-[600] leading-[20px] text-center text-[#FF64AE]'}>
                        Our Services
                    </div>
                    <div
                        tw={'text-[36px] font-[600] leading-[45px] text-center text-[#091156] h-[57px] mt-[12px] large:h-auto'}>
                        We focus on your beauty
                    </div>
                    <div
                        tw={'h-[28px] text-[16px] font-[400] leading-[24px] tracking-widest text-center text-[#8B8B8B] mt-[12px]'}>
                        Lorem ipsum dolor sit amet
                    </div>
                    <div tw={'mt-[70px]'}>
                        <ImageWrap tw={'btab:grid-cols-[repeat(auto-fill,_45%)]'}>
                            <TopImage alt={''} src={`${pathToIcon}/unsplash_5TJ0Hoy5FLY.png`}/>
                            <TopImage alt={''} src={`${pathToIcon}/unsplash_ZOT2Mewzmh8.png`} tw={'large:hidden'}/>
                            <TopImage alt={''} src={`${pathToIcon}/unsplash_pTrhfmj2jDA (1).png`}
                                      tw={'hidden large:flex'}/>
                        </ImageWrap>
                        <ImageWrap tw={'mt-[68px]'}>
                            <Image alt={''} src={`${pathToIcon}/unsplash_gzfIO69Q6eM.png`}/>
                            <Image alt={''} src={`${pathToIcon}/unsplash_ZOT2Mewzmh8.png`} tw={'hidden large:flex'}/>
                            <Image alt={''} src={`${pathToIcon}/unsplash_pTrhfmj2jDA (1).png`}
                                   tw={'large:hidden'}/>
                        </ImageWrap>
                    </div>
                </div>
            </Introduction>

            <Section tw={'mt-[272px] large:mt-[200px]'}>
                <SectionWithSideImage
                    imageUrl={`${pathToIcon}/Animation1 (1).png`}
                    imageClass={'!mt-[-20px]'}
                    title={'Beauty Consultation'}
                    description={
                        <>
                            <SectionDescription>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec
                                amet. Egestas volutpat facilisi eu libero.
                            </SectionDescription>
                            <SectionOption>Make an Appointment
                                <SectionImage alt={''} src={`${pathToIcon}/angle-double-right.png`}/>
                            </SectionOption>
                        </>
                    }
                    subTitle={'We services beauty consultation'}
                />
            </Section>
            <Section tw={'mt-[101px]'}>
                <SectionWithSideImage
                    isReverse
                    imageUrl={`${pathToIcon}/Animation2 (1).png`}
                    imageClass={'!mt-[-17px] !ml-[-2px]'}
                    title={'Skin Treatements'}
                    description={
                        <>
                            <SectionDescription>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec
                                amet. Egestas volutpat facilisi eu libero.
                            </SectionDescription>
                            <SectionOption>Make an Appointment
                                <SectionImage alt={''} src={`${pathToIcon}/angle-double-right.png`}/>
                            </SectionOption>
                        </>
                    }
                    subTitle={'Skin care and treatment by expert'}
                    subTitleWidth={window.innerWidth <= 1430 ? '100%' : 'calc((100vw * 411) / 1440)'}
                />
            </Section>
            <Section tw={'mt-[104px] ml-[1px]'}>
                <SectionWithSideImage
                    imageUrl={`${pathToIcon}/Animation3 (1).png`}
                    title={'Beauty Product'}
                    description={
                        <>
                            <SectionDescription>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec
                                amet. Egestas volutpat facilisi eu libero.
                            </SectionDescription>
                            <SectionOption>Make an Appointment
                                <SectionImage alt={''} src={`${pathToIcon}/angle-double-right.png`}/>
                            </SectionOption>
                        </>
                    }
                    subTitle={'We present quality beauty products'}
                    imageClass={'!mt-[-18px]'}
                />
            </Section>

            <div
                tw={'hidden btab:(flex text-[36px] font-[600] leading-[45px] text-[#091156] h-[97px] w-[80%] text-center w-full mt-[100px] mb-[-100px]) tab:px-[20px] smtab:(text-[28px] leading-[40px] mb-[-120px])'}>
                Best responsibility and service for our customers
            </div>
            <div css={css`
              ${tw`relative h-[529px] mt-[123px] p-[182px_200px_182px_150px]
                exlg:(h-[calc(100vw_/_2.72)] pl-[300px])
                md:px-[40px]
                smtab:px-[10px]
              `};
              @media (max-width: 510px) {
                ${tw`mt-[160px]`}
              }
              @media (max-width: 410px) {
                ${tw`mt-[200px]`}
              }
            `}>
                <BackgroundImageWithMask alt={''} src={`${pathToIcon}/unsplash_NPjNtTExSJ4.png`}/>
                <BackgroundImageWithMask alt={''} src={`${pathToIcon}/Background Mask (1).png`}/>
                <div css={css`
                  ${tw`flex flex-wrap justify-center relative h-full w-full items-center
                    large:(flex-col flex h-auto relative top-1/2 translate-y-[-50%])
                    md:translate-y-[-85%]
                    btab:translate-y-[-95%]
                    smtab:translate-y-[-120%]
                  `};
                  @media (max-width: 1200px) {
                    ${tw`translate-y-[-60%]`}
                  }
                  @media (max-width: 1080px) {
                    ${tw`translate-y-[-80%]`}
                  }
                  @media (max-width: 768px) {
                    ${tw`translate-y-[-115%]`}
                  }
                  @media (max-width: 580px) {
                    ${tw`translate-y-[-140%]`}
                  }
                  @media (max-width: 510px) {
                    ${tw`translate-y-[-200%]`}
                  }
                `}>
                    <div css={css`
                      width: calc((100vw * 732px) / (1440px)) ${tw`h-[165px] exlg:(h-[165px] w-[732px]) large:text-center`};
                      @media (max-width: 1080px) {
                        ${tw`w-full`}
                      }
                    `}>
                        <div
                            tw={'text-[36px] font-[600] leading-[45px] text-white h-[97px] w-[80%] large:(w-full h-auto) btab:hidden'}>
                            Best responsibility and service
                            for our customers
                        </div>
                        <div css={css`
                          ${tw`text-[16px] font-[400] leading-[24px] tracking-widest text-[#CACACA] mt-[12px] w-[80%] large:(w-full h-auto) btab:(mt-[100px] px-[40px] text-[20px]) smtab:px-5`};
                          @media (max-width: 580px) {
                            ${tw`hidden`}
                          }
                        `}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                            venenatis
                        </div>
                    </div>
                    <div css={css`
                      ${tw`h-[127px] flex-1 flex items-center large:mt-[40px] smtab:mb-[10px]`};
                      @media (max-width: 1200px) {
                        ${tw`mt-[40px]`}
                      }
                      @media (max-width: 1080px) {
                        ${tw`mt-[30px]`}
                      }
                      @media (max-width: 410px) {
                        ${tw`mt-[60px]`}
                      }
                    `}>
                        <div
                            tw={'relative w-[166px] h-[167px] ml-[-7px] cursor-pointer large:(w-[80px] h-[80px] ml-[-7px])'}>
                            <img alt={''} src={`${pathToIcon}/Ellipse 3.png`}
                                 tw={'absolute top-0 left-0 w-full large:w-[150px]'}/>
                            <img alt={''} src={`${pathToIcon}/Polygon 1.png`}
                                 tw={'absolute top-1/2 left-1/2 translate-x-[-40%] translate-y-[-50%] large:w-[25px]'}/>
                        </div>
                        <div tw={'text-[16px] font-[600] leading-[24px] tracking-widest text-white ml-[8px] mt-[-4px]'}>
                            Treatments Videos
                        </div>
                    </div>
                </div>
            </div>

            <div css={css`
              ${tw`mt-[116px] w-full p-[0_234px] mb-[95px] large:(mt-[120px] p-[0_50px]) md:(mt-[-100px] px-[20px])`};
              @media (max-width: 1200px) {
                ${tw`mt-[80px]`}
              }
              @media (max-width: 580px) {
                ${tw`mt-[-200px] px-[16px]`}
              }
              @media (max-width: 510px) {
                ${tw`px-[20px]`}
              }
              @media (max-width: 410px) {
                ${tw`mt-[-250px] mb-[-160px] px-0`}
              }
            `}>
                <div tw={"h-[66px] text-[36px] font-[600] leading-[45px] text-center relative ml-[10px] after:(ml-[-5px] bg-[#FF64AE] rounded-[5px] absolute block bottom-0 left-1/2 translate-x-[-50%] w-[40px] h-[5px] content-[' ']) ip15:text-[30px]"}>
                    Services FAQ’s
                </div>
                <div tw={'mt-[49px] large:mt-[49px]'}>
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
