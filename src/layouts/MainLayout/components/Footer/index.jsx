import React from "react";
import {pathToIcon} from "../../../../utils/constants.js";
import {section} from "./section.js";
import {useNavigate} from "react-router-dom";
import {AboveBg, Content, FooterWrap} from "./styles.js";
import tw, {css} from 'twin.macro'

export default function Footer() {
    const navigate = useNavigate()
    const socialLinks = [
        {
            icon: `${pathToIcon}/facebook-f (1).png`,
            href: '/facebook'
        },
        {
            icon: `${pathToIcon}/twitter (1).png`,
            href: '/twitter'
        },
        {
            icon: `${pathToIcon}/linkedin-in.png`,
            href: '/linkedin'
        },
        {
            icon: `${pathToIcon}/youtube.png`,
            href: '/youtube'
        },
        {
            icon: `${pathToIcon}/instagram (1).png`,
            href: '/instagram'
        }
    ]

    const handleNavigate = (pathname) => {
        navigate(pathname)
    }

    return <FooterWrap>
        <AboveBg>
            <img src={`${pathToIcon}/Footer BG 1.png`} alt="" tw={'z-[1] w-auto absolute exlg:(absolute w-full h-full) large:hidden'}/>
            <img src={`${pathToIcon}/Footer BG 2.png`} alt="" tw={'w-auto absolute top-0 left-0 ml-[4px] exlg:(absolute w-full h-full) large:hidden'}/>
            <img src={`${pathToIcon}/Bottom BG.png`} alt="" tw={'absolute bottom-0 exlg:(absolute w-full h-full) large:(h-[600px] w-full) md:h-[800px] ip15:h-[1000px]'}/>
        </AboveBg>
        <Content>
            <div tw={'flex exlg:(absolute left-1/2 translate-x-[-50%]) large:(justify-between p-[0_50px]) md:(flex-col absolute left-1/2 translate-x-[-50%] p-0 w-3/4) ip15:w-[70%]'}>
                <div css={css`
                  ${tw`mt-[16px] h-[191px] w-[492px] large:(justify-between p-[0_50px]) md:w-full`};
                  @media (max-width: 1024px) {
                    ${tw`!p-0`}
                  }
                `}>
                    <img src={`${pathToIcon}/Footer Logo.png`} alt="" tw={'large:ml-[-30px]'}/>
                    <div tw={'pl-[32px] ml-[-1px] mt-[33px] text-[16px] font-bold leading-6 h-[21px] tracking-widest text-left text-[#D7DBFF] large:pl-0 ip15:h-auto'}>
                        Beautice <span tw={'font-[400] ml-[1px]'}>is a Beauty Clinic WordPress Theme.</span>
                    </div>
                    <div tw={'pl-[32px] mt-[26px] flex flex-col text-[#D7DBFF] large:pl-0'}>
                        <div tw={'font-[500] leading-[21px] text-[14px] italic text-left tracking-widest h-[24px] ml-[0.5px] mt-[-1px] large:mt-[10px]'}>
                            Baker Steet 101, NY, United States.
                        </div>
                        <div tw={'flex mt-[1px] italic h-[23px] large:mt-[10px] md:(flex-col mt-6)'}>
                            <div tw={'leading-[21px] w-[140px] text-[14px] italic tracking-widest text-left text-[#D7DBFF] ml-[-1px] mt-[0.5px] font-[500]'}>+521 569 8966.</div>
                            <div tw={'leading-[21px] italic tracking-widest text-left ml-[28px] underline text-[14px] text-[#D7DBFF] font-[500] md:m-0'}>mail@company.com.</div>
                        </div>
                    </div>
                </div>
                <div tw={'ml-[130px] flex mt-[0.5px] large:ml-[80px] md:(ml-0 mt-[90px] justify-between) ip15:(flex-wrap mt-[120px])'}>
                    <div tw={'w-[131px] h-[219px] text-white'}>
                        <div tw={'font-[600] leading-[27px] text-[18px] tracking-widest text-left h-[31px]'}>Pages</div>
                        <div tw={'mt-[24px] md:(ml-0 flex-wrap)'}>
                            {
                                section.pages.map((page, index) => (
                                    <div key={index}
                                         tw={'flex items-center text-[#D7DBFF] mb-[11px] ml-[4px] h-[24px] hover:text-white cursor-pointer large:!h-auto ip15:w-fit'}
                                         onClick={() => handleNavigate(page.href)}
                                    >
                                        <img src={`${pathToIcon}/Vector.png`} alt=""/>
                                        <span tw={'font-[400] leading-[24px] ml-[12px] text-[16px] tracking-widest text-left'}>{page.title}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div tw={'text-white ml-[173px] w-[215px] h-[184px] large:(ml-[10px] w-[215px] h-[184px]) md:(ml-0 flex-wrap) ip15:mt-[30px]'}>
                        <div tw={'font-[600] leading-[27px] text-[18px] tracking-widest text-left h-[31px]'}>Informations</div>
                        <div tw={'mt-[24px] md:(ml-0 flex-wrap) ip15:(flex flex-col)'}>
                            {
                                section.information.map((page, index) => (
                                    <div key={index}
                                         tw={'flex items-center text-[#D7DBFF] mb-[11px] ml-[4px] h-[24px] hover:text-white cursor-pointer large:!h-auto md:mb-[10px] ip15:w-fit'}
                                         onClick={() => handleNavigate(page.href)}>
                                        <img src={`${pathToIcon}/Vector.png`} alt=""/>
                                        <span tw={'font-[400] leading-[24px] ml-[12px] text-[16px] tracking-widest text-left'}>{page.title}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div tw={'flex items-center justify-between mt-[140px] h-[31.18px] exlg:(justify-center absolute bottom-[100px] left-1/2 translate-x-[-50%]) large:(items-center justify-center flex-col w-full mt-[180px]) md:(absolute bottom-[60px] left-0 p-[0_30px] w-full)'}>
                <div tw={'flex items-center h-[27.84px] large:(mr-0 gap-[50px]) md:(absolute bottom-[35px] left-1/2 translate-x-[-50%] gap-[50px]) norm:gap-[30px]'}>
                    {
                        socialLinks.map((link, index) => (
                            <div key={index}
                                 tw={'mr-[45px] large:(mr-0 w-[30px]) md:w-[25px]'}
                                 onClick={() => handleNavigate(link.href)}>
                                <img alt="" src={link.icon}/>
                            </div>
                        ))
                    }
                </div>
                <div tw={'font-[400] leading-[24px] w-[497px] h-[31.18px] text-[16px] tracking-widest text-left text-[#D7DBFF] mr-[-87px] large:(w-full mt-[30px] mr-0 text-center) md:(w-full text-center)'}>
                    © AltDesain Studio 2021 - All right reserved.
                </div>
            </div>
        </Content>
    </FooterWrap>
}
