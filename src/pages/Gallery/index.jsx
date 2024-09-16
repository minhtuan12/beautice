import React from "react";
import MainLayout from "../../layouts/MainLayout/index.jsx";
import {pathToIcon} from "../../utils/constants.js";
import PlayButton from "../../components/PlayButton/index.jsx";
import Button from "../../components/Button/index.jsx";
import {
    BackgroundImageWithMask,
    Between,
    BetweenContent,
    Bottom,
    GalleryWrap,
    Header,
    Image,
    ImageSection,
    Top
} from "./components.js";
import tw, {css} from "twin.macro";

export default function Gallery() {
    return <MainLayout>
        <GalleryWrap>
            <Top>
                <Header>
                    <div tw={'exlg:w-[615px] large:(w-full text-center)'}>
                        <div tw={'text-[16px] font-[600] leading-[20px] text-[#FF64AE]'}>
                            Our Gallery
                        </div>
                        <div css={css`
                          ${tw`text-[36px] font-[600] leading-[45px] text-[#091156] h-[104px] mt-[12px] exlg:w-full large:h-auto`}
                          width: calc((100vw * 615px) / (1440px))
                        `}>
                            Check out the collection pictures from our clinic
                        </div>
                    </div>
                    <div css={css`
                      ${tw`text-[16px] font-[400] leading-[24px] tracking-widest text-[#8B8B8B] exlg:w-[407px] large:(ml-2 w-full text-center h-auto mt-4)`}
                      width: calc((100vw * 407px) / (1440px))
                    `}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                        venenatis
                    </div>
                </Header>
                <ImageSection>
                    <Image alt={''} src={`${pathToIcon}/unsplash_FVh_yqLR9eA (1).png`}/>
                    <Image alt={''} src={`${pathToIcon}/unsplash_3ewkNkfJj2k (1).png`}/>
                    <Image alt={''} src={`${pathToIcon}/unsplash_xayCTz6N2nM.png`}/>
                    <Image alt={''} src={`${pathToIcon}/unsplash_Pe9IXUuC6QU (1).png`}/>
                    <Image alt={''} src={`${pathToIcon}/unsplash_fvInY-Gh7sc.png`}/>
                    <Image alt={''} src={`${pathToIcon}/unsplash_HEde-a_T4E8.png`}/>
                    <Image alt={''} src={`${pathToIcon}/unsplash_9Wa1HgE1XlA.png`}/>
                    <Image alt={''} src={`${pathToIcon}/unsplash_PqyzuzFiQfY.png`}/>
                    <Image alt={''} src={`${pathToIcon}/unsplash_4SUyx4KQ5Ik.png`}/>
                </ImageSection>
                <div css={css`
                  width: calc((100vw * 660px) / (1440px));
                  ${tw`mt-[66px] text-[16px] font-[400] leading-[24px] tracking-widest text-[#8B8B8B] 
                      exlg:w-[660px] 
                      large:(w-full text-center)`
                  }
                `}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                    lectus magna fringilla urna, porttitor rhoncus dolor purus non enim, <span tw={'text-[#091156]'}>our teams</span>.
                </div>
            </Top>

            <Between>
                <BackgroundImageWithMask alt={''} src={`${pathToIcon}/unsplash_eflLpWC1Geo.png`}/>
                <BackgroundImageWithMask alt={''} src={`${pathToIcon}/Background Mask (2).png`}/>
                <BetweenContent>
                    <div css={css`
                      ${tw`mt-[8px] ml-[1px]`};
                      @media (max-width: 320px) {
                        ${tw`hidden`}
                      }
                    `}>
                        <div
                            tw={'text-[36px] font-[600] leading-[45px] text-center text-white h-[51px] smd:text-[28px]'}>
                            Watch the video tour
                        </div>
                        <div css={css`
                          width: calc((100vw * 555px) / (1440px));
                          ${tw`text-[16px] font-[400] leading-[24px] tracking-widest text-center h-[56px] mt-[13px] text-[#CACACA] 
                          exlg:w-full
                          `};
                          @media (max-width: 1200px) {
                            ${tw`!px-[150px] !w-full`}
                          }
                          @media (max-width: 678px) {
                            ${tw`!hidden`}
                          }
                        `}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                            venenatis
                        </div>
                    </div>
                    <div tw={'grid place-items-center mt-[21px] ml-[7px] smd:(ml-0 mt-[-10px])'}>
                        <PlayButton/>
                    </div>
                </BetweenContent>
            </Between>

            <Bottom>
                <div tw={'absolute top-0 right-0 z-[-1]'}>
                    <img alt={''} src={`${pathToIcon}/Background Bubble (1).png`}/>
                </div>
                <div css={css`
                  ${tw`flex justify-between flex-wrap w-full 
                  exlg:(justify-center relative gap-y-[300px])
                  large:(!justify-between !flex-wrap)`};
                  @media (max-width: 320px) {
                    ${tw`!justify-center`}
                  }
                `}>
                    <div tw={'exlg:w-[642px]'}>
                        <div tw={'text-[16px] font-[600] leading-[20px] text-[#FF64AE] large:(w-full text-center)'}>
                            Get The Quota
                        </div>
                        <div css={css`
                          ${tw`w-[642px] text-[36px] font-[600] leading-[45px] text-[#091156] h-[94px] mt-[12px]
                            exlg:w-full large:(!h-auto !w-full !text-center)`}
                        `}>
                            Want to be handled by our professional team immediately?
                        </div>
                        <div css={css`
                          ${tw`w-[561px] text-[16px] font-[400] leading-[24px] tracking-widest text-[#8B8B8B] h-[64px] mt-[18px]
                          exlg:w-[561px] large:(!h-auto !w-full !text-center)`}
                        `}>
                            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.
                        </div>
                    </div>
                    <div tw={'w-[316px] h-[58px] shadow-[0_17px_22px_0_#FFEDF6] mt-[68px] large:(relative left-1/2 translate-x-[-50%] shadow-none)'}>
                        <Button tw={'w-full h-full text-[16px] font-[600] leading-[24px] tracking-widest'}>
                            Make an Appointment
                        </Button>
                    </div>
                </div>
            </Bottom>
        </GalleryWrap>
    </MainLayout>
}
