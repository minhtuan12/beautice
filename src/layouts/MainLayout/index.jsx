import React, {useEffect, useState} from "react";
import styles from './styles.module.scss'
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";
import {pathToIcon} from "../../utils/constants.js";

export default function MainLayout({children}) {
    const [isVisibleToTopBtn, setIsVisibleToTopBtn] = useState(false)

    const handleScroll = () => {
        const currentTop = window.pageYOffset || document.documentElement.scrollTop
        setIsVisibleToTopBtn(currentTop > 800)
    }

    const handleGoToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return <div className={styles.mainWrap}>
        <Header/>
        {children}
        <Footer/>
        {
            isVisibleToTopBtn ? <div className={styles.toTopBtn} onClick={handleGoToTop}>
                <img alt="" src={`${pathToIcon}/arrow-up.png`}/>
            </div> : ''
        }
    </div>
}
