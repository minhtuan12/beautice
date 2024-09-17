import React from "react";
import MainLayout from "../../layouts/MainLayout/index.jsx";
import {pathToIcon} from "../../utils/constants.js";
import ExpertSection from "../../components/ExpertSection/index.jsx";
import SectionWithSideImage from "../../components/SectionWithSideImage/index.jsx";
import {AboutWrap, Introduction} from "./styles.js";
import tw, {css} from 'twin.macro'

export default function About() {
    return <MainLayout>
        <AboutWrap>
            <Introduction>
                <div tw={'w-[732px] large:w-full'}>
                    <div
                        tw={'text-[16px] text-left text-[#FF64AE] ml-[1px] font-[600] leading-[20px] large:(h-auto text-center w-full)'}>
                        About
                    </div>
                    <div
                        tw={'h-[97px] text-[36px] text-left text-[#091156] mt-[12px] font-[600] leading-[45px] large:(h-auto text-center w-full)'}>
                        We are a leading beauty clinic that has been around since 2002
                    </div>
                    <div
                        tw={'h-[51px] text-[#8B8B8B] text-[16px] tracking-widest text-left mt-[12px] font-[400] leading-[24px] w-[680px] large:(h-auto text-center w-full)'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                        venenatis
                    </div>
                </div>
                <div tw={'mt-[62px] ml-[-1px] relative cursor-pointer shadow-[0_25px_50px_25px_#F6F7FF]'}>
                    <img alt={''} src={`${pathToIcon}/unsplash_DE6rYp1nAho.png`} tw={'w-full'}/>
                    <div
                        css={css`
                          ${tw`inline-block absolute w-[88px] h-[88px] rounded-[50%] bg-[#091156] text-[0] top-1/2 left-1/2 translate-x-[-49%] translate-y-[-50%] shadow-[0_4px_33px_10px_#E7E9FF]
                            before:content-[" "] before:block before:absolute ip15:(w-[40px] h-[40px])
                          `}
                        `}>
                        <div css={css`
                          border-bottom: 16px solid transparent;
                          border-top: 15px solid transparent;
                          border-left: 25.67px solid white;
                          ${tw`absolute top-1/2 left-1/2 translate-x-[-23%] translate-y-[-44%] w-[36.67px] h-[32.67px] ip15:(w-[20px] h-[20px])`}
                        `}></div>
                    </div>
                </div>
            </Introduction>

            <div tw={'relative z-[1] p-[655px_0_149.5px_0] mt-[-385px] h-[1533.5px] large:h-auto'}>
                <div tw={'absolute top-0 right-0 z-[-1]'}>
                    <img alt={''} src={`${pathToIcon}/Bubble BG.png`}/>
                </div>
                <div tw={'w-full'}>
                    <ExpertSection
                        title={'Professional Teams'}
                        subTitle={'The Professional expert'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.'}
                    />
                </div>
            </div>

            <div css={css`
              ${tw`w-full relative h-[529px] exlg:(h-[calc(100vw_/_2.72)] left-1/2 translate-x-[-50%]) large:(h-[340px] px-[50px]) md:(px-[30px] h-[260px]) smtab:(p-[20px_15px_0_15px] mt-[-50px] mb-[180px]) ip15:mb-[100px]`};
              @media (min-width: 1200px) and (max-width: 1430px) {
                ${tw`h-[450px] px-[250px] mb-[120px]`}
              }
              @media (min-width: 1070px) and (max-width: 1200px) {
                ${tw`!h-[340px] !px-[180px] !mb-[150px]`}
              }
            `}>
                <div tw={'hidden smtab:(flex flex-col)'}>
                    <div tw={'text-[16px] font-[600] leading-[20px] text-center text-[#ff64ae] h-auto'}>
                        Business Slogan
                    </div>
                    <div tw={'text-[26px] font-[600] leading-[34px] text-center text-[#091156] h-auto mt-[12px]'}>
                        Best responsibility and service
                        for our customers
                    </div>
                </div>
                <img alt={''} src={`${pathToIcon}/unsplash_Pe9IXUuC6QU.png`}
                     tw={'w-full absolute top-0 left-0 z-[-1] smtab:top-[180px]'}/>
                <img alt={''} src={`${pathToIcon}/Background Mask.png`}
                     tw={'w-full absolute top-0 left-0 z-[-1] smtab:top-[180px]'}/>
                <div css={css`
                  ${tw`w-full p-[164px_354px_168px_354px] 
                    exlg:(h-full flex flex-col justify-center)
                    large:(w-full p-0 relative top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%])
                    smtab:(top-[150px] left-0 translate-x-[0] translate-y-[0])
                    ip15:top-[80px]
                  `};
                  @media (min-width: 1200px) and (max-width: 1430px) {
                    ${tw`w-full p-0 relative top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]`}
                  }
                  @media (min-width: 670px) and (max-width: 680px) {
                    ${tw`!top-[180px] !px-[100px]`}
                  }
                  @media (min-width: 510px) and (max-width: 670px) {
                    ${tw`!top-[100px] !px-[30px]`}
                  }
                  @media (min-width: 440px) and (max-width: 680px) {
                    ${tw`!top-[100px]`}
                  }
                  @media (min-width: 370px) and (max-width: 385px) {
                    ${tw`!top-[75px]`}
                  }
                  @media (max-width: 370px) {
                    ${tw`!hidden`}
                  }
                `}>
                    <div
                        tw={'text-[16px] font-[600] leading-[20px] text-center text-[#ABB4FF] h-[20px] exlg:w-full large:(h-auto text-center w-full) smtab:hidden'}>
                        Business Slogan
                    </div>
                    <div
                        tw={'w-[732px] text-[36px] font-[600] leading-[45px] text-center text-white h-[97px] mt-[12px] p-[0_60px] exlg:w-full large:(h-auto text-center w-full) md:text-[28px] smtab:hidden'}>
                        Best responsibility and service
                        for our customers
                    </div>
                    <div
                        tw={'text-[16px] font-[400] leading-[24px] tracking-widest text-center text-[#CACACA] h-[56px] mt-[12px] ml-[26px] w-[680px] exlg:w-full large:(h-auto text-center w-full ml-0 px-12) md:ml-0 smtab:(ml-0 mt-0)'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                        venenatis
                    </div>
                </div>
            </div>

            <div css={css`
              ${tw`mt-[112px] relative ip15:(mb-[-200px] mt-[170px])`};
              @media (max-width: 900px) {
                ${tw`mt-[150px]`}
              }
              @media (min-width: 670px) and (max-width: 680px) {
                ${tw`!mt-[270px]`}
              }
            `}>
                <div tw={'top-[74px] absolute z-[-1] large:h-full'}>
                    <img alt={''} src={`${pathToIcon}/Bubble BG Footer.png`} tw={'large:h-[130%]'}/>
                </div>
                <div
                    tw={'w-full p-[0_150px_50px_149px] exlg:(w-[1440px] p-[0_153px_50px_150px] relative left-1/2 translate-x-[-50%]) large:p-[0_50px_50px_50px] md:px-[30px] smd:px-[16px]'}>
                    <div tw={'relative left-1/2 translate-x-[-50%]'}>
                        <SectionWithSideImage
                            imageUrl={`${pathToIcon}/Illustration-1.png`}
                            title={'Our Vision'}
                            subTitle={'Be the best and go international'}
                            description={<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.<br/><br/> Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</span>}
                        />
                    </div>
                    <div tw={'mt-[106px] relative left-1/2 translate-x-[-50%]'}>
                        <SectionWithSideImage
                            isReverse
                            contentWidth={'calc((100vw * 530) / 1440)'}
                            descriptionWidth={'calc((100vw * 483) / 1440)'}
                            imageUrl={`${pathToIcon}/Illustration-2.png`}
                            title={'Our Mission'}
                            subTitle={'Special & premium service to any clients'}
                            description={<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.<br/><br/> Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</span>}
                        />
                    </div>
                    <div tw={'mt-[123px] w-full p-[0_86px_0_89px] ml-[-13px] large:(w-full p-0 ml-0)'}>
                        <div tw={'text-[16px] font-[600] leading-[20px] text-center text-[#FF64AE] large:h-auto'}>
                            Our Clients
                        </div>
                        <div
                            tw={'text-[36px] font-[600] leading-[45px] text-center mt-[12px] h-[53px] text-[#091156] large:h-auto'}>
                            Well-known agencies
                        </div>
                        <div
                            tw={'text-[16px] font-[400] leading-[24px] tracking-widest text-center text-[#8B8B8B] h-[31px] mt-[12px] large:h-auto'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </div>
                        <div
                            tw={'mt-[96px] h-[84px] flex w-full justify-between ml-[11px] large:(flex-wrap ml-0 mt-12 gap-y-[20px] h-auto) md:justify-center'}>
                            <img alt={''} src={`${pathToIcon}/LOGO1.png`} tw={'w-[147px] h-[80px] ml-[2px] mt-[1px]'}/>
                            <img alt={''} src={`${pathToIcon}/LOGO2.png`} tw={'w-[147px] h-[80px] ml-[-4px] mt-[1px]'}/>
                            <img alt={''} src={`${pathToIcon}/LOGO3.png`} tw={'w-[147px] h-[80px] mt-[1px]'}/>
                            <img alt={''} src={`${pathToIcon}/LOGO4.png`}
                                 tw={'w-[147px] h-[84px] mt-[-3px] ml-[-1px]'}/>
                            <img alt={''} src={`${pathToIcon}/LOGO5.png`} tw={'w-[147px] h-[80px] mt-[1px] mr-[-2px]'}/>
                        </div>
                    </div>
                </div>
            </div>

        </AboutWrap>
    </MainLayout>
}
