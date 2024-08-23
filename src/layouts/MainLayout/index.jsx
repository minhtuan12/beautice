import React, {useEffect, useState} from "react";
import styles from './styles.module.scss'
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";
import {pathToIcon} from "../../utils/constants.js";
import {setIsVisibleSlidingBtn} from "../../store/slices/app/index.js";
import {useDispatch} from "react-redux";

export default function MainLayout({children, isLightTheme}) {
    const [isVisibleToTopBtn, setIsVisibleToTopBtn] = useState(false)
    const dispatch = useDispatch()

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

    useEffect(() => {
        const handleSetVisibleSlidingBtn = () => {
            dispatch(setIsVisibleSlidingBtn(window.innerWidth <= 1430))
        }
        window.addEventListener('resize', handleSetVisibleSlidingBtn)

        return () => {
            window.removeEventListener('resize', handleSetVisibleSlidingBtn)
        }
    }, [dispatch])

    return <div className={styles.mainWrap}>
        <Header isLightTheme={isLightTheme}/>
        {children}
        <Footer/>
        {
            isVisibleToTopBtn ? <div className={styles.toTopBtn} onClick={handleGoToTop}>
                <img alt="" src={`${pathToIcon}/arrow-up.png`}/>
            </div> : ''
        }
    </div>
}
