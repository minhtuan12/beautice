import React from "react";
import styles from './styles.module.scss'
import menu from "../../menu.js";
import {useLocation, useNavigate} from "react-router-dom";

export default function MenuBox() {
    const navigate = useNavigate()
    const location = useLocation()

    return <div className={styles.menuBoxWrap}>
        <div className={styles.menuList}>
            {
                menu.map((item, index) => (
                    <div key={index} className={location.pathname === item.href ? styles.activeItem : styles.menuItem}>
                        <div onClick={() => navigate(item.href)} className={styles.title}>
                            {item.title}
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
}
