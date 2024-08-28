import React, {useState} from "react";
import styles from './styles.module.scss'
import {useLocation, useNavigate} from "react-router-dom";
import _ from "lodash";

export default function MenuBox({menu, isHomeMenu = false}) {
    const navigate = useNavigate()
    const location = useLocation()
    const [isOpenHomeMenu, setIsOpenHomeMenu] = useState(false)

    const handleClickMenuItem = (item) => {
        if (!_.isEmpty(item.children)) {
            setIsOpenHomeMenu(!isOpenHomeMenu)
        } else {
            navigate(item.href)
        }
    }

    const checkIsActiveRoute = (item) => {
        return _.isEmpty(item.children) ? (location.pathname === item.href) : item.children.some(item => item.href === location.pathname)
    }

    return <div className={`${styles.menuBoxWrap} ${isHomeMenu ? styles.homeMenuWrap : ''}`}>
        <div className={styles.menuList}>
            {
                menu.map((item, index) => {
                    const isContactBtn = item.title === 'Contact'

                    return (
                        <div key={index} onClick={() => handleClickMenuItem(item)}
                             className={`${checkIsActiveRoute(item) ? styles.activeItem : styles.menuItem} 
                                ${isContactBtn ? ' border-t-[1px]' : ''}`}
                        >
                            <div className={'flex items-center'}>
                                {!isHomeMenu ? item.icon : ''}
                                <div className={`${styles.title} ${isContactBtn ? '!text-[#FF64AE]' : ''}`}>
                                    {item.title} {!_.isEmpty(item.children) ? '+' : ''}
                                </div>
                            </div>
                            {
                                isOpenHomeMenu ? <div className={styles.childrenWrap}>
                                    {
                                        item.children.map((child, index) => (
                                            <div key={index}
                                                 className={`${styles.childItem} ${checkIsActiveRoute(child) ? '!text-[#091156] !font-semibold' : ''}`}
                                                 onClick={() => navigate(child.href)}
                                            >
                                                {child.icon}
                                                <span className={'ml-2'}>{child.title}</span>
                                            </div>
                                        ))
                                    }
                                </div> : ''
                            }
                        </div>
                    )
                })
            }
        </div>
    </div>
}
