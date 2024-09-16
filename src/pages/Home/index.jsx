import React, {useRef} from "react";
import MainLayout from "../../layouts/MainLayout/index.jsx";
import {pathToIcon} from "../../utils/constants.js";
import ServiceCard from "./components/ServiceCard/index.jsx";
import ExpertSection from "../../components/ExpertSection/index.jsx";
import {useSelector} from "react-redux";
import tw, {css} from 'twin.macro'
import Button from "../../components/Button/index.jsx";
import Input from "../../components/Input/index.jsx";
import styled from "@emotion/styled/macro";

const BubbleBgWrap = tw.div`absolute left-0 top-0 z-[-1] exlg:(left-[-50%] translate-x-[0])`
const RightImage = styled.div`
  ${tw`z-10 w-[476px] h-[350px] large:ml-[50px] md:w-full`};
  ${({visibleImageUnderTitle}) => visibleImageUnderTitle ? tw`!hidden` : ''};
  @media (max-width: 1300px) {
    ${tw`ml-[50%] translate-x-[-50%]`};
  }
`
const BottomBubbleBgWrap = tw.div`absolute left-0 exlg:(left-[-50%]) large:w-screen`
const BottomImageWrap = styled.div`
  ${tw`mt-[160px] md:w-full`};
  ${({visibleImageUnderTitle}) => visibleImageUnderTitle ? tw`!hidden` : ''};
  @media (max-width: 1300px) {
    ${tw`block ml-[50%] translate-x-[-50%]`}
  }
`
const Form = tw.div`flex flex-col mt-[44px] w-full h-[652px]`
const NameInput = tw(Input)`w-[242px] h-[60px] large:(w-[45%]) md:(w-full mt-[38px])`
const InputWrap = tw.div`mt-[39.5px]`
const InquiryInputWrap = tw(InputWrap)`h-[239.47px]`

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
        {/* eslint-disable-next-line react/no-unknown-property */}
        <div css={css`
          ${tw`select-none relative w-[1290.5px] h-[805px] exlg:(left-[50%] translate-x-[-50%]) large:(h-[700px] w-full overflow-hidden) md:(w-full overflow-hidden flex flex-col)`};
          @media (max-width: 1300px) {
            ${tw`h-[1200px]`};
          }
        `}>
            <BubbleBgWrap>
                <img alt="" src={`${pathToIcon}/Bubble 1 (1).png`}/>
            </BubbleBgWrap>
            <BubbleBgWrap>
                <img alt="" src={`${pathToIcon}/Bubble 2 (1).png`}/>
            </BubbleBgWrap>

            <div css={css`
              ${tw`absolute top-[266px] left-[189px] flex items-center exlg:(left-[50%] translate-x-[-50%]) large:(absolute top-[263px] flex items-center) md:(w-full absolute left-1/2 p-[0_30px] block) smd:px-[16px] ip15:(px-[20px] mt-[50px])`};
              @media (max-width: 1300px) {
                ${tw`top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col`};
              }
            `}>
                <div tw={'mt-[-21px] md:ml-10 smd:ml-0'}>
                    <div
                        tw={'text-[36px] font-[600] leading-[45px] text-[#091156] w-[430px] h-[128px] text-left md:text-[40px] md:w-[80%] smd:w-full smd:text-center ip15:h-auto ip15:w-full ip15:text-center'}>
                        Clinic & beauty consultant
                    </div>
                    <div
                        tw={'leading-[24px] font-[500] w-[474px] h-[54px] text-[16px] text-left tracking-widest text-[#091156] md:w-[80%] md:mt-[20px] smd:mt-16 smd:text-center smd:w-full'}>
                        It is a long established fact that a reader will be by the readable content of a page.
                    </div>
                    <div tw={'smd:w-full smd:text-center'}>
                        <Button
                            tw={'leading-[24px] font-[600] w-[200px] h-[58.36px] rounded-[50px] text-[16px] tracking-widest text-center mt-[28px] md:mt-[50px] smd:h-[50px] ip15:mt-[100px]'}>
                            More Details
                        </Button>
                    </div>
                </div>
                <div css={css`
                  ${tw`w-[601.5px] h-[397.5px] ml-[22px] mt-[-5.5px] md:(ml-0 w-full)`};
                  @media (max-width: 1300px) {
                    ${tw`mt-[100px]`};
                  }
                `}>
                    <img src={`${pathToIcon}/Frame 1.png`} tw={'md:w-full'} alt=""/>
                </div>
            </div>
            <div css={css`
              ${tw`absolute bottom-0 flex items-center justify-between w-[71px] h-[8.15px] left-[685px] exlg:(left-[50%] translate-x-[-50%]) large:left-[calc((100%_/_2)_-_35px)]`};
              @media (max-width: 1300px) {
                ${tw`left-[calc((100%_/_2)_-_35px)] bottom-[100px]`};
              }
            `}>
                <Button tw={'w-[14.82px] h-[3.09px] bg-[#EEEEEE]'}></Button>
                <Button tw={'w-[25.31px] h-[8.15px] bg-[#414880]'}></Button>
                <Button tw={'w-[14.82px] h-[3.09px] bg-[#EEEEEE]'}></Button>
            </div>
        </div>

        <div
            tw={'h-[732px] mt-[131px] p-[0_150px] exlg:(w-[1140px] p-0 relative left-[50%] translate-x-[-50%] z-[1]) large:(h-auto mt-[100px] p-[0_50px] relative) md:(p-[0_30px] mt-[60px]) smd:px-[16px]'}>
            <div tw={'flex flex-col items-center'}>
                <div tw={'font-[600] leading-[20px] text-[16px] text-center text-[#FF64AE] ml-[1px]'}>
                    Main Services
                </div>
                <div
                    tw={'p-[0_145px] font-[600] leading-[45px] h-[97px] w-[732px] text-[36px] text-center text-[#091156] mt-[12px] md:(w-full p-6 mb-4) ip15:h-auto'}>
                    Learn services to focus on your beauty
                </div>
                <div
                    tw={'leading-[24px] font-[400] h-[51px] w-[848px] text-[#8B8B8B] text-[16px] tracking-widest text-center mt-[12px] large:w-full md:(mt-[60px] mb-[20px]) ip15:(h-auto mt-0)'}>
                    Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat
                    tellus sagittis, scelerisque eget nulla turpis.
                </div>
            </div>

            <div
                tw={'mt-[82px] flex justify-between items-center large:(mt-[82px] flex flex-wrap items-center justify-center w-full gap-[30px]) ip15:mt-0'}
                ref={productWrapRef}
            >
                {
                    services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index}/>
                    ))
                }
            </div>
        </div>

        <div css={css`
          ${tw`pl-[150px] h-[1028.89px] mt-[-220px] relative large:(w-full p-[0_20px]) md:p-[0_30px] smd:px-[16px]`};
          @media (max-width: 1300px) {
            ${tw`p-0 h-[auto]`};
          }
        `}>
            <img src={`${pathToIcon}/Background Bubble.png`} alt=""
                 tw={'w-[948.15px] h-[1028.89px] absolute top-0 right-0'}/>
            <div css={css`
              ${tw`flex p-[354.44px_151.15px_275.09px_0] 
                exlg:(absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] mt-[50px] p-0) 
                large:(w-full pr-[50px] pl-[50px] justify-between) 
                md:px-0`
              };
              @media (max-width: 1300px) {
                ${tw`w-full flex-col-reverse px-0`}
              }
            `}>
                <div css={css`
                  ${tw`z-10 large:flex-1 md:(w-full mt-2) smd:mt-2`};
                  @media (max-width: 1300px) {
                    ${tw`ml-[50%] translate-x-[-50%] mt-14`}
                  }
                `}>
                    <div css={css`
                      ${tw`font-[600] leading-[20px] text-[16px] text-left text-[#FF64AE]`};
                      @media (max-width: 1300px) {
                        ${tw`text-center`}
                      }
                    `}>
                        About Us
                    </div>
                    <div css={css`
                      ${tw`font-[600] leading-[45px] h-[52px] w-[664px] text-[36px] text-left text-[#091156] mt-[12px] large:w-full ip15:h-auto`};
                      @media (max-width: 1300px) {
                        ${tw`w-full text-center`}
                      }
                    `}>
                        We are the best beauty clinic
                    </div>
                    {
                        visibleImageUnderTitle ?
                            <img src={`${pathToIcon}/unsplash_LRXYS0tSyGc.png`}
                                 tw={'large:(relative left-1/2 translate-x-[-50%]) md:(ml-[-5px] mb-[-40px]) smd:ml-[-5px] ip15:mt-0'}
                                 alt=""
                            /> : ''
                    }
                    <div css={css`
                      ${tw`leading-[24px] font-[400] w-[483px] h-[196px] text-[16px] tracking-widest text-left text-[#8B8B8B] mt-[12px] large:w-full md:(w-full mt-[50px]) ip15:h-auto`};
                      @media (max-width: 1300px) {
                        ${tw`text-center mt-8`}
                      }
                    `}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet.
                        Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus
                        in suspendisse placerat.<br/><br/>
                        Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.
                    </div>
                    <div css={css`
                      ${tw`flex items-center mt-[49px] md:mt-4 
                        smd:(w-[350px] mt-24 flex justify-center flex-wrap relative left-1/2 translate-x-[-50%]) 
                        ip15:(w-full flex-col)`
                      };
                      @media (max-width: 1300px) {
                        ${tw`justify-center`}
                      }
                    `}>
                        <Button
                            tw={'leading-[24px] font-[600] h-[58.36px] w-[200px] text-[16px] tracking-widest text-center smd:h-[50px]'}>
                            Learn More
                        </Button>
                        <div tw={'flex items-center ml-[44px] smd:(ml-0 mt-6)'}>
                            <img src={`${pathToIcon}/Play_button.png`} alt=""/>
                            <span
                                tw={'leading-[24px] font-[600] text-[16px] tracking-widest text-left text-[#8B8B8B] ml-[13px] cursor-pointer'}>
                                Watch Video
                            </span>
                        </div>
                    </div>
                </div>
                <RightImage visibleImageUnderTitle={visibleImageUnderTitle}>
                    <img src={`${pathToIcon}/unsplash_LRXYS0tSyGc.png`}
                         tw={'ml-[-75px] mt-[-30.44px] absolute'}
                         alt=""
                    />
                </RightImage>
            </div>
        </div>

        <ExpertSection
            title={'Professional Teams'}
            subTitle={'The Professional expert'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.'}
        />

        <div css={css`
          ${tw`w-[1290.33px] h-[1072px] mt-[-63px] exlg:(relative left-[50%] translate-x-[-50%]) large:w-full`};
          @media (max-width: 1300px) {
            ${tw`h-auto mt-[100px]`}
          }
        `}>
            <div tw={'relative'}>
                <BottomBubbleBgWrap tw={'top-[27.08px]'}>
                    <img src={`${pathToIcon}/Bubble 1.png`} alt="" tw={'large:w-full'}/>
                </BottomBubbleBgWrap>
                <BottomBubbleBgWrap tw={'top-0'}>
                    <img src={`${pathToIcon}/Bubble 2.png`} alt="" tw={'large:w-full'}/>
                </BottomBubbleBgWrap>
            </div>
            <div css={css`
              ${tw`relative flex p-[206px_0_0_150px] 
                large:(justify-between p-[206px_50px_0_50px]) 
                md:(p-[120px_30px_0_30px] w-full) 
                smd:px-[16px]`
              };
              @media (max-width: 1300px) {
                ${tw`flex-col pt-60 w-full`}
              }
            `}>
                {
                    !visibleImageUnderTitle ?
                        <BottomImageWrap>
                            <img alt="" src={`${pathToIcon}/Contact Animations.png`} tw={'md:w-full'}/>
                        </BottomImageWrap> : ''
                }
                <div css={css`
                  ${tw`ml-[100px] w-[520px] mt-[1px] large:flex-1 md:(w-full ml-0 ml-[50%] translate-x-[-50%])`};
                  @media (max-width: 1300px) {
                    ${tw`ml-0 ml-[50%] translate-x-[-50%]`}
                  }
                `}>
                    <div
                        tw={'text-[16px] font-[600] leading-[20px] text-left ml-[1px] text-[#FF64AE] md:text-center smd:w-full'}>Contact
                        Us
                    </div>
                    <div
                        tw={'font-[600] leading-[45px] h-[97px] text-[36px] text-left mt-[12px] text-[#091156] md:text-center smd:w-full ip15:h-auto'}>Send
                        your inquiry to<br/>our expert team
                    </div>
                    <div
                        tw={'text-[16px] tracking-widest text-left mt-[12px] h-[28px] text-[#8B8B8B] leading-[24px] font-[400] md:(text-center mt-[50px]) smd:(w-full mt-4) ip15:h-auto'}>Lorem
                        ipsum dolor sit amet nulla turapis tellus.
                    </div>
                    {
                        visibleImageUnderTitle ? <img alt="" tw={'md:(relative left-1/2 translate-x-[-50%])'}
                                                      src={`${pathToIcon}/Contact Animations.png`}/> : ''
                    }
                    <Form>
                        <div tw={'flex items-center w-full justify-between md:(items-start flex-col)'}>
                            <NameInput placeholder="First name"/>
                            <NameInput placeholder="Last name" tw={'!pl-[27px] !pt-[15px]'}/>
                        </div>
                        <InputWrap>
                            <Input placeholder="Email address" tw={'w-full h-[61px]'}/>
                        </InputWrap>
                        <InputWrap>
                            <Input placeholder="Subject message" tw={'w-full h-[61px]'}/>
                        </InputWrap>
                        <InquiryInputWrap>
                            <textarea placeholder="Your inquiry here" tw={'!h-full !w-full'}></textarea>
                        </InquiryInputWrap>
                        <div tw={'mt-[54.84px]'}>
                            <Button
                                tw={'text-[16px] tracking-widest text-center w-[248px] h-[58px] leading-[24px] font-[600] md:w-[45%] smd:(w-[200px] h-[50px])'}
                            >
                                Send Message
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </MainLayout>
}
