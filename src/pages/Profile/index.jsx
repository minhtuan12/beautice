import MainLayout from "../../layouts/MainLayout/index.jsx";
import React from "react";
import styles from './styles.module.scss'
import _ from "lodash";
import {useSelector} from "react-redux";
import {Avatar, Skeleton, Tabs} from "antd";
import DefaultAvatar from '../../assets/images/logos/user-default.png'
import {PhoneOutlined} from '@ant-design/icons'
import './styles.scss'
import InformationTab from "./components/InformationTab/index.jsx";
import ChangePassword from "./components/ChangePassword/index.jsx";

export default function Profile() {
    const authUser = useSelector(state => state.auth.authUser)
    const isLoadingGetMe = false


    return <MainLayout>
        <div className={styles.profileWrap}>
                <div className={styles.backgroundWrap}>
                    {
                        isLoadingGetMe ? <Skeleton active={isLoadingGetMe}/> : <>
                            <div className={`${styles.avatarWrap} avatar-custom`}>
                                <Avatar
                                    src={(!_.isEmpty(authUser) && authUser?.avatar) ?
                                        authUser?.avatar : DefaultAvatar}
                                    className={styles.avatar}
                                />
                            </div>
                            <div className={styles.name}>
                                {
                                    !_.isEmpty(authUser) ? <span>{authUser?.full_name}</span> :
                                        <i>Updating ...</i>
                                }
                            </div>
                            <div className={styles.infoWrap}>
                                <div className={`${styles.info}`}>
                                    <PhoneOutlined className={'mr-1.5'}/>
                                    {
                                        (!_.isEmpty(authUser) && authUser?.phone) ?
                                            <span>{authUser?.phone}</span> :
                                            <i>Updating ...</i>
                                    }
                                </div>
                            </div>
                        </>
                    }
                </div>
                <div className={`tab-custom ${styles.tabsWrap}`}>
                    <Tabs
                        defaultActiveKey="1"
                        items={[
                            {
                                label: 'Information',
                                key: 'info',
                                children: <InformationTab/>,
                            },
                            {
                                label: 'Change password',
                                key: 'password',
                                children: <ChangePassword/>
                            },
                        ]}
                    />
                </div>
        </div>
    </MainLayout>
}
