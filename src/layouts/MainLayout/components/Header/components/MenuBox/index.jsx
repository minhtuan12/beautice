import React from "react";
import styles from './styles.module.scss'
import {useLocation, useNavigate} from "react-router-dom";

export default function MenuBox({menu, isHomeMenu = false}) {
    const navigate = useNavigate()
    const location = useLocation()

    return <div className={`${styles.menuBoxWrap} ${isHomeMenu ? styles.homeMenuWrap : ''}`}>
        <div className={styles.menuList}>
            {
                menu.map((item, index) => (
                    <div key={index} className={location.pathname === item.href ? styles.activeItem : styles.menuItem}>
                        <div onClick={() => navigate(item.href)}
                             className={`${styles.title} ${item.title === 'Contact' ? '!text-[#FF64AE]' : ''}`}>
                            {item.title}
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
}
