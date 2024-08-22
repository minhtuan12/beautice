import React from "react";
import {pathToIcon} from "../../../../utils/constants.js";
import styles from './styles.module.scss'
import {section} from "./section.js";
import {useNavigate} from "react-router-dom";

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

    return <div className={styles.footerWrap}>
        <div className={styles.aboveBg}>
            <img src={`${pathToIcon}/Footer BG 1.png`} alt="" className={styles.upperImg}/>
            <img src={`${pathToIcon}/Footer BG 2.png`} alt="" className={styles.innerImg}/>
            <img src={`${pathToIcon}/Bottom BG.png`} alt="" className={styles.bottomImg}/>
        </div>
        <div className={styles.footerContent}>
            <div className={styles.upper}>
                <div className={styles.leftFooter}>
                    <img src={`${pathToIcon}/Footer Logo.png`} alt=""/>
                    <div className={styles.slogan}>
                        Beautice <span>is a Beauty Clinic WordPress Theme.</span>
                    </div>
                    <div className={styles.information}>
                        <div className={styles.address}>Baker Steet 101, NY, United States.</div>
                        <div className={styles.extraInfo}>
                            <div className={styles.phone}>+521 569 8966.</div>
                            <div className={styles.mail}>mail@company.com.</div>
                        </div>
                    </div>
                </div>
                <div className={styles.rightFooter}>
                    <div className={styles.section}>
                        <div className={styles.title}>Pages</div>
                        <div className={styles.list}>
                            {
                                section.pages.map((page, index) => (
                                    <div key={index} className={styles.item} onClick={() => handleNavigate(page.href)}>
                                        <img src={`${pathToIcon}/Vector.png`} alt=""/>
                                        <span>{page.title}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={`${styles.section} ${styles.informationSection}`}>
                        <div className={styles.title}>Informations</div>
                        <div className={styles.list}>
                            {
                                section.information.map((page, index) => (
                                    <div key={index} className={styles.item} onClick={() => handleNavigate(page.href)}>
                                        <img src={`${pathToIcon}/Vector.png`} alt=""/>
                                        <span>{page.title}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.lower}>
                <div className={styles.footerSocial}>
                    {
                        socialLinks.map((link, index) => (
                            <div key={index} className={styles.socialItem} onClick={() => handleNavigate(link.href)}>
                                <img alt="" src={link.icon}/>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.copyRight}>
                    © AltDesain Studio 2021 - All right reserved.
                </div>
            </div>
        </div>
    </div>
}
