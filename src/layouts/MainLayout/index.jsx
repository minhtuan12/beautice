import React, {useEffect, useState} from "react";
import styles from './styles.module.scss'
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";
import {pathToIcon} from "../../utils/constants.js";
import {
    goToPageSuccess,
    setIsVisibleSlidingBtn,
    setVisibleImageUnderTitle,
    setVisibleStickyHeader
} from "../../store/slices/app/index.js";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export default function MainLayout({children, isLightTheme = false}) {
    const [isVisibleToTopBtn, setIsVisibleToTopBtn] = useState(false)
    const goToPage = useSelector(state => state.app.goToPage)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleScroll = () => {
        const currentTop = window.pageYOffset || document.documentElement.scrollTop
        setIsVisibleToTopBtn(currentTop > 800)
        dispatch(setVisibleStickyHeader(currentTop > 340 && window.innerWidth >= 1440))
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
        window.scrollTo({top: 0, behavior: 'auto'})

        const handleSetVisibleSlidingBtn = () => {
            dispatch(setIsVisibleSlidingBtn(window.innerWidth <= 1430))
            dispatch(setVisibleImageUnderTitle(window.innerWidth <= 1300))
        }
        window.addEventListener('resize', handleSetVisibleSlidingBtn)

        return () => {
            window.removeEventListener('resize', handleSetVisibleSlidingBtn)
        }
    }, [dispatch])

    useEffect(() => {
        if (goToPage.path && !goToPage.redirected) {
            dispatch(goToPageSuccess());
            navigate(goToPage.path);
        }
    }, [goToPage, navigate, dispatch]);

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
