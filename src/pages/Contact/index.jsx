import React from "react";
import styles from './styles.module.scss'
import MainLayout from "../../layouts/MainLayout/index.jsx";
import {pathToIcon} from "../../utils/constants.js";
import {contactInfo} from "./data.js";
import ContactMethod from "./components/ContactMethod/index.jsx";

export default function Contact() {
    return <MainLayout>
        <div className={styles.contactWrap}>
            <div className={styles.background}>
                <img alt={''} src={`${pathToIcon}/Background Bubble (2).png`}/>
            </div>
            <div className={styles.top}>
                <div className={styles.header}>
                    <div className={styles.heading}>
                        <div className={styles.title}>
                            Contact Us
                        </div>
                        <div className={styles.subTitle}>
                            Contact service for our customers
                        </div>
                    </div>
                    <div className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                        venenatis
                    </div>
                </div>
                <div className={styles.underHeader}>
                    <div className={styles.leftPart}>
                        <img alt={''} src={`${pathToIcon}/Contact Animations (1).png`}/>
                    </div>
                    <div className={styles.formWrap}>
                        <div className={styles.nameInput}>
                            <input placeholder="First name"/>
                            <input placeholder="Last name" className={styles.lastNameInput}/>
                        </div>
                        <div className={styles.inputWrap}>
                            <input placeholder="Email address"/>
                        </div>
                        <div className={styles.inputWrap}>
                            <input placeholder="Subject message"/>
                        </div>
                        <div className={`${styles.inputWrap} ${styles.inquiryInput}`}>
                            <textarea placeholder="Your inquiry here"></textarea>
                        </div>
                        <div className={styles.sendMsgBtn}>
                            <button>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.middle}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24529.67738535716!2d-122.43481304191728!3d37.71835733026586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7eea730e5111%3A0x40ed3d79a05891bc!2sGleneagles%20GC%20at%20McLaren%20Park!5e0!3m2!1sen!2s!4v1725347023505!5m2!1sen!2s"
                    width="100%" height="100%" style={{border: 0}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottomHeading}>
                    <div className={styles.contactTitle}>Get in Touch</div>
                    <div className={styles.contactSubTitle}>Get direct handling by us</div>
                    <div className={styles.contactDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                    </div>
                </div>
                <div className={styles.info}>
                    {
                        contactInfo.map((item, index) => (
                            <div key={index} className={styles.infoItem}>
                                <ContactMethod data={item}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </MainLayout>
}
