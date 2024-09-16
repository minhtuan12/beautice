import React, {useEffect, useRef, useState} from "react";
import styles from './styles.module.scss'
import {mainMenu} from "./menu.js";
import {useLocation, useNavigate} from "react-router-dom";
import {CloseOutlined, EnterOutlined, MenuOutlined} from '@ant-design/icons'
import {pathToIcon} from "../../../../utils/constants.js";
import MenuBox from "./components/MenuBox/index.jsx";
import {Drawer, Menu} from "antd";
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import {removeAuthToken} from "../../../../utils/helpers.js";
import {requestGetMeFail} from "../../../../store/slices/auth/index.js";
import tw from 'twin.macro'
import Button from "../../../../components/Button/index.jsx";

export default function Header({isLightTheme}) {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const menuBtnRef = useRef()
    const homeMenuBtnRef = useRef()
    const [isVisibleMenuBtn, setIsVisibleMenuBtn] = useState(window.innerWidth <= 1430)
    const [isVisibleMenuBox, setIsVisibleMenuBox] = useState(false)
    const [isVisibleHomeMenu, setIsVisibleHomeMenu] = useState(false)
    const visibleStickyHeader = useSelector(state => state.app.visibleStickyHeader)
    const authUser = useSelector(state => state.auth.authUser)

    const handleNavigate = (pathname) => {
        navigate(pathname)
    }

    const handleToggleHomeMenu = (e) => {
        setIsVisibleHomeMenu(!isVisibleHomeMenu)
        e?.stopPropagation()
    }

    const handleToggleMainMenu = (e) => {
        setIsVisibleMenuBox(!isVisibleMenuBox)
        e?.stopPropagation()
    }

    const handleGoToHome = () => {
        navigate('/')
    }

    useEffect(() => {
        const handleSetVisibleMenuBtn = () => {
            setIsVisibleMenuBtn(window.innerWidth <= 1430)
        }
        const handleClickOut = (e) => {
            if (homeMenuBtnRef?.current && !homeMenuBtnRef?.current?.contains(e.target)) {
                setIsVisibleHomeMenu(false)
            }
            if (menuBtnRef?.current && !menuBtnRef?.current?.contains(e.target)) {
                setIsVisibleMenuBox(false)
            }
        }

        window.addEventListener('resize', handleSetVisibleMenuBtn)
        document.addEventListener("mousedown", handleClickOut)

        return () => {
            window.removeEventListener('resize', handleSetVisibleMenuBtn)
            document.addEventListener("mousedown", handleClickOut)
        }
    }, [])

    return <div
        className={`${styles.headerWrap} ${visibleStickyHeader ? (!isLightTheme ? styles.stickyHeader : styles.stickyDarkHeader) : ''}`}>
        {
            (!isLightTheme || visibleStickyHeader) ?
                <img src={`${pathToIcon}/Main Logo.svg`} alt="" onClick={handleGoToHome}/>
                : <img src={`${pathToIcon}/Main Logo.png`} alt=""
                       className={`!mt-[2px] !ml-0 !w-auto ${styles.darkThemeLogo} ${styles.lightThemeIcon}`}
                       onClick={handleGoToHome}/>
        }

        <div className={styles.rightHeader}>
            {
                !isVisibleMenuBtn ? <div className={isLightTheme ? styles.themeLightMenu : styles.mainMenu}>
                    {
                        mainMenu.slice(0, -2).map((item, index) => {
                            const isActivePage = item?.href === location.pathname || item?.children?.some(i => i.href === location.pathname)
                            return (
                                <div key={index}
                                     className={`${isActivePage ? ((isLightTheme && !visibleStickyHeader) ? styles.activeOption : styles.stickyActiveOption) : styles.option}
                                                        ${item.label === 'Home' ? 'w-[66px]' : ''}`}
                                     onClick={() => item.label === 'Home' ? handleToggleHomeMenu() :
                                         handleNavigate(item?.href)
                                     }
                                     ref={item.label === 'Home' ? homeMenuBtnRef : null}
                                     onBlur={() => setIsVisibleHomeMenu(!isVisibleHomeMenu)}
                                >
                                    {item.label}
                                    {
                                        (item.label === 'Home' && isVisibleHomeMenu) ?
                                            <MenuBox isHomeMenu menu={mainMenu[0].children}/> : ''
                                    }
                                    {
                                        item.label === 'Home' ?
                                            (
                                                !isVisibleHomeMenu ?
                                                    (
                                                        (isLightTheme && !visibleStickyHeader) ? <img
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
                            )
                        })
                    }
                </div> : ''
            }
            <div className={styles.contactBtn} onClick={() => navigate('/contact')}>
                <Button tw={'!w-[158px] !h-[52px] text-[16px] font-semibold leading-6 tracking-widest large:!hidden'}>
                    Contact
                </Button>
            </div>
            {/*<div className={styles.avatar}>*/}
            {/*    <Popover placement="bottomRight" content={PopoverProfile}*/}
            {/*             trigger="click">*/}
            {/*        <div className={styles.infoWrap}>*/}
            {/*            <div className={styles.avatarWrap}>*/}
            {/*                <img src={authUser?.avatar || DefaultAvatar}*/}
            {/*                     alt="" onError={(e) => {*/}
            {/*                    e.currentTarget.onerror = null;*/}
            {/*                    e.currentTarget.src = DefaultAvatar;*/}
            {/*                }}/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </Popover>*/}
            {/*</div>*/}
            {
                isVisibleMenuBtn ? <>
                    <div className={`${styles.menuBtn} ${isVisibleMenuBox ? 'rotate-[90deg]' : ''}`}
                         onClick={handleToggleMainMenu}
                    >
                        {
                            isVisibleMenuBox ? <CloseOutlined style={{fontSize: '26px'}}/>
                                : <MenuOutlined
                                    style={{
                                        fontSize: '26px',
                                        color: isLightTheme ? '#fff' : '',
                                        cursor: 'pointer'
                                    }}
                                />
                        }
                    </div>
                    {/*{*/}
                    {/*    isVisibleMenuBox ? <MenuBox menu={mainMenu}/> : ''*/}
                    {/*}*/}
                </> : ''
            }
            {
                isVisibleMenuBtn ?
                    <Drawer
                        width={window.innerWidth < 768 ? '100%' : 378}
                        className={'custom-drawer'}
                        title={
                            <div
                                className={`whitespace-nowrap overflow-hidden overflow-ellipsis text-[20px] ${window.innerWidth < 768 ? 'max-w-[calc(100vw_-_100px)]' : 'max-w-[250px]'} text-[#8b8b8b] font-medium`}>
                                {
                                    !_.isEmpty(authUser) ? `Hi, ${authUser?.full_name}` :
                                        <>
                                            <span className={'text-[#091156]'} onClick={() => navigate('/login')}>
                                                Log in
                                            </span> /
                                            <span onClick={() => navigate('/register')}>
                                                Sign up
                                            </span>
                                        </>
                                }
                            </div>
                        }
                        onClose={() => setIsVisibleMenuBox(false)}
                        open={isVisibleMenuBox}
                    >
                        <Menu
                            className={'custom-menu'}
                            onClick={(item) => {
                                if (item.key !== '/logout') {
                                    navigate(item.key)
                                } else {
                                    removeAuthToken()
                                    dispatch(requestGetMeFail())
                                }
                            }}
                            mode="inline"
                            items={
                                !_.isEmpty(authUser) ? [...mainMenu, {
                                    key: '/logout',
                                    label: 'Log out',
                                    href: '#',
                                    icon: <EnterOutlined/>,
                                }] : mainMenu
                            }
                            style={{
                                fontSize: '22px',
                            }}
                            selectedKeys={[location.pathname]}
                        />
                    </Drawer> : ''
            }
        </div>
    </div>
}
