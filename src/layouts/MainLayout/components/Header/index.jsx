import React, {useEffect, useState} from "react";
import styles from './styles.module.scss'
import menu from "./menu.js";
import {useNavigate} from "react-router-dom";
import {CloseOutlined, MenuOutlined} from '@ant-design/icons'
import {pathToIcon} from "../../../../utils/constants.js";
import MenuBox from "./components/MenuBox/index.jsx";

export default function Header({isLightTheme}) {
    const navigate = useNavigate()
    const [isVisibleMenuBtn, setIsVisibleMenuBtn] = useState(window.innerWidth <= 1430)
    const [isVisibleMenuBox, setIsVisibleMenuBox] = useState(false)

    const handleNavigate = (pathname) => {
        navigate(pathname)
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
                        menu.map((item, index) => (
                            <div key={index} className={item.title === 'Home' ? styles.homeOption : styles.option}
                                 onClick={() => handleNavigate(item.href)}
                            >
                                {item.title}
                                {
                                    item.title === 'Home' ?
                                        (
                                            isLightTheme ? <img
                                                    className={styles.plusIcon}
                                                    src={`${pathToIcon}/Plus Icon (1).png`}
                                                    alt=""/>
                                                : <img
                                                    className={styles.plusIcon}
                                                    src={`${pathToIcon}/Plus Icon.png`}
                                                    alt=""/>
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
                        isVisibleMenuBox ? <MenuBox/> : ''
                    }
                </> : ''
            }
        </div>
    </div>
}
