import React, {useEffect, useState} from "react";
import styles from './styles.module.scss'
import {homeMenu, mainMenu} from "./menu.js";
import {useLocation, useNavigate} from "react-router-dom";
import {CloseOutlined, MenuOutlined} from '@ant-design/icons'
import {pathToIcon} from "../../../../utils/constants.js";
import MenuBox from "./components/MenuBox/index.jsx";

export default function Header({isLightTheme}) {
    const navigate = useNavigate()
    const location = useLocation()
    const [isVisibleMenuBtn, setIsVisibleMenuBtn] = useState(window.innerWidth <= 1430)
    const [isVisibleMenuBox, setIsVisibleMenuBox] = useState(false)
    const [isVisibleHomeMenu, setIsVisibleHomeMenu] = useState(false)

    const handleNavigate = (pathname) => {
        navigate(pathname)
    }

    const handleOpenHomeMenu = () => {
        setIsVisibleHomeMenu(!isVisibleHomeMenu)
    }

    useEffect(() => {
        const handleSetVisibleMenuBtn = () => {
            setIsVisibleMenuBtn(window.innerWidth <= 1430)
        }
        window.addEventListener('resize', handleSetVisibleMenuBtn)

        return () => {
            window.removeEventListener('resize', handleSetVisibleMenuBtn)
        }
    }, [])

    return <div className={styles.headerWrap}>
        {
            !isLightTheme ? <img src={`${pathToIcon}/Main Logo.svg`} alt=""/>
                : <img src={`${pathToIcon}/Main Logo.png`} alt="" className={'!mt-[2px] !h-auto !ml-0'}/>
        }

        <div className={styles.rightHeader}>
            {
                !isVisibleMenuBtn ? <div className={isLightTheme ? styles.themeLightMenu : styles.mainMenu}>
                    {
                        mainMenu.slice(0, -1).map((item, index) => (
                            <div key={index}
                                 className={`${item?.href === location.pathname ? styles.activeOption : styles.option} 
                                                        ${item.title === 'Home' ? 'w-[66px]' : ''}`}
                                 onClick={() => item.title === 'Home' ? handleOpenHomeMenu() :
                                     handleNavigate(item?.href)
                                 }
                            >
                                {item.title}
                                {
                                    (item.title === 'Home' && isVisibleHomeMenu) ?
                                        <MenuBox isHomeMenu menu={homeMenu}/> : ''
                                }
                                {
                                    item.title === 'Home' ?
                                        (
                                            !isVisibleHomeMenu ?
                                                (
                                                    isLightTheme ? <img
                                                            className={styles.plusIcon}
                                                            src={`${pathToIcon}/Plus Icon (1).png`}
                                                            alt=""/>
                                                        : <img
                                                            className={styles.plusIcon}
                                                            src={`${pathToIcon}/Plus Icon.png`}
                                                            alt=""/>
                                                ) : <span className={styles.minusIcon}>-</span>
                                        )
                                        : ''
                                }
                            </div>
                        ))
                    }
                </div> : ''
            }
            <div className={styles.contactBtn}>
                <button>Contact</button>
            </div>
            {
                isVisibleMenuBtn ? <>
                    <div className={`${styles.menuBtn} ${isVisibleMenuBox ? 'rotate-[90deg]' : ''}`}
                         onClick={() => setIsVisibleMenuBox(!isVisibleMenuBox)}>
                        {isVisibleMenuBox ? <CloseOutlined/> : <MenuOutlined/>}
                    </div>
                    {
                        isVisibleMenuBox ? <MenuBox menu={mainMenu}/> : ''
                    }
                </> : ''
            }
        </div>
    </div>
}
