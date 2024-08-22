import React, {useEffect, useState} from "react";
import styles from './styles.module.scss'
import menu from "./menu.js";
import {useNavigate} from "react-router-dom";
import {MenuOutlined} from '@ant-design/icons'

export default function Header() {
    const navigate = useNavigate()
    const [isVisibleMenuBtn, setIsVisibleMenuBtn] = useState(false)

    const handleNavigate = (pathname) => {
        navigate(pathname)
    }

    useEffect(() => {
        setIsVisibleMenuBtn(window.innerWidth <= 1430)
    }, [])

    return <div className={styles.headerWrap}>
        <img src="/src/assets/images/icons/figma/Main Logo.svg" alt=""/>
        <div className={styles.rightHeader}>
            {
                !isVisibleMenuBtn ? <div className={styles.mainMenu}>
                    {
                        menu.map((item, index) => (
                            <div key={index} className={item.title === 'Home' ? styles.homeOption : styles.option}
                                 onClick={() => handleNavigate(item.href)}
                            >
                                {item.title}
                                {
                                    item.title === 'Home' ?
                                        <img className={styles.plusIcon}
                                             src="/src/assets/images/icons/figma/Plus%20Icon.png"
                                             alt=""/> : ''
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
                isVisibleMenuBtn ? <div className={styles.menuBtn}>
                    <MenuOutlined/>
                </div> : ''
            }
        </div>
    </div>
}
