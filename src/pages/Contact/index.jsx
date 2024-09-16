import React from "react";
import MainLayout from "../../layouts/MainLayout/index.jsx";
import {pathToIcon} from "../../utils/constants.js";
import {contactInfo} from "./data.js";
import ContactMethod from "./components/ContactMethod/index.jsx";
import Input from "../../components/Input/index.jsx";
import tw from "twin.macro";
import Button from "../../components/Button/index.jsx";

export default function Contact() {
    return <MainLayout>
        <div tw={'relative top-[229px] mb-[353px]'}>
            <div tw={'absolute z-[-1] top-[85px] exlg:w-full'}>
                <img alt={''} src={`${pathToIcon}/Background Bubble (2).png`} tw={'exlg:w-full'}/>
            </div>
            <div tw={'w-full p-[0_149.68px_0_149px] exlg:(w-[1440px] relative left-1/2 translate-x-[-50%]) large:(w-full p-[0_50px]) md:px-[30px] smd:px-[16px]'}>
                <div tw={'flex justify-between w-full flex-wrap large:justify-center'}>
                    <div tw={'w-1/2 large:w-full'}>
                        <div tw={'text-[16px] font-[600] leading-[20px] text-[#FF64AE] large:text-center'}>
                            Contact Us
                        </div>
                        <div tw={'text-[36px] font-[600] leading-[45px] text-[#091156] mt-[12px] large:text-center'}>
                            Contact service for our customers
                        </div>
                    </div>
                    <div tw={'text-[16px] font-[400] leading-[24px] tracking-widest text-[#8B8B8B] mt-[32px] w-[407px] mr-[20.33px] large:(w-full text-center)'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                        venenatis
                    </div>
                </div>
                <div tw={'mt-[35px] flex justify-between flex-wrap large:justify-center'}>
                    <div tw={'w-fit h-fit'}>
                        <img alt={''} src={`${pathToIcon}/Contact Animations (1).png`}/>
                    </div>
                    <div tw={'flex flex-col mt-[24px] w-[520px] large:flex-1'}>
                        <div tw={'flex items-center w-full justify-between large:(flex-wrap gap-[40px])'}>
                            <Input placeholder={'First name'} tw={'w-[242px] h-[60px] large:w-full'}/>
                            <Input placeholder={'Last name'} tw={'!pl-[27px] w-[242px] h-[60px] large:w-full'}/>
                        </div>
                        <div tw={'mt-[39.5px]'}>
                            <Input placeholder={'Email address'} tw={'w-full h-[61px]'}/>
                        </div>
                        <div tw={'mt-[39.5px]'}>
                            <Input placeholder={'Subject message'} tw={'w-full h-[61px]'}/>
                        </div>
                        <div tw={'mt-[39.5px] h-[239.47px]'}>
                            <textarea placeholder="Your inquiry here" tw={'h-full w-full'}></textarea>
                        </div>
                        <div tw={'mt-[54.84px]'}>
                            <Button tw={'text-[16px] tracking-widest text-center w-[248px] h-[58px] leading-[24px] font-[600] smd:w-full'}>
                                Send Message
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div tw={'h-[418px] mt-[112px] w-full exlg:h-[618px]'}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24529.67738535716!2d-122.43481304191728!3d37.71835733026586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7eea730e5111%3A0x40ed3d79a05891bc!2sGleneagles%20GC%20at%20McLaren%20Park!5e0!3m2!1sen!2s!4v1725347023505!5m2!1sen!2s"
                    width="100%" height="100%" style={{border: 0}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            <div tw={'mt-[112px] w-full p-[0_201px] exlg:(w-[1440px] relative left-1/2 translate-x-[-50%]) large:p-[0_50px] md:px-[30px] smd:px-[16px]'}>
                <>
                    <div tw={'text-[16px] font-[600] leading-[20px] text-center text-[#FF64AE]'}>Get in Touch</div>
                    <div tw={'text-[36px] font-[600] leading-[45px] text-center text-[#091156] mt-[11px]'}>Get direct handling by us</div>
                    <div tw={'text-[16px] font-[400] leading-[24px] tracking-widest text-center text-[#8B8B8B] mt-[24px] ml-[1px]'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                    </div>
                </>
                <div tw={'mt-[96px] flex flex-wrap justify-between large:(justify-center gap-[50px])'}>
                    {
                        contactInfo.map((item, index) => (
                            <div key={index} tw={'transition-[all_0.3s_ease] h-[402px] p-[79px_0_71px_0] rounded-[42px] w-[270px] large:(shadow-[0_25px_50px_25px_#F6F7FF] p-[79px_77px_71px_77px] w-[424px] rounded-[42px]) smd:(h-auto p-[50px_40px] w-full hover:p-[50px_40px] hover:w-full) hover:shadow-[0_25px_50px_25px_#F6F7FF] hover:p-[79px_77px_71px_77px] hover:w-[424px]'}>
                                <ContactMethod data={item}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </MainLayout>
}
