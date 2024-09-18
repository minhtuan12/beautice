import MainLayout from "../../layouts/MainLayout/index.jsx";
import React from "react";
import _ from "lodash";
import {useSelector} from "react-redux";
import {Avatar, Skeleton, Tabs} from "antd";
import DefaultAvatar from '../../assets/images/logos/user-default.png'
import {PhoneOutlined} from '@ant-design/icons'
import './styles.scss'
import InformationTab from "./components/InformationTab/index.jsx";
import {Background, Tab, Wrap} from "./styles.js";
import tw from "twin.macro";
// import ChangePassword from "./components/ChangePassword/index.jsx";

export default function Profile() {
    const authUser = useSelector(state => state.auth.authUser)
    const isLoadingGetMe = false


    return <MainLayout>
        <Wrap>
            <Background>
                {
                    isLoadingGetMe ? <Skeleton active={isLoadingGetMe}/> : <>
                        <div className={`avatar-custom`} tw={'border-[#17c653]'}>
                            <Avatar
                                src={(!_.isEmpty(authUser) && authUser?.avatar) ?
                                    authUser?.avatar : DefaultAvatar}
                                className={`w-[130px] h-[130px]`}
                            />
                        </div>
                        <div tw={'font-semibold text-[26px] mt-4 text-[#091156] tracking-widest text-center'}>
                            {
                                !_.isEmpty(authUser) ? <span>{authUser?.full_name}</span> :
                                    <i>Updating ...</i>
                            }
                        </div>
                        <div css={css`
                          ${tw`text-[#8b8b8b] mt-4 text-[18px] font-[500] tracking-widest`};
                          @media (max-width: 428px) and (min-width: 350px) {
                            ${tw`flex justify-center flex-col items-center mb-5`}
                          }
                        `}>
                            <div tw={'flex justify-center items-center'}>
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
            </Background>
            <Tab className={`tab-custom`}>
                <Tabs
                    defaultActiveKey="1"
                    items={[
                        {
                            label: 'Information',
                            key: 'info',
                            children: <InformationTab/>,
                        },
                        // {
                        //     label: 'Change password',
                        //     key: 'password',
                        //     children: <ChangePassword/>
                        // },
                    ]}
                />
            </Tab>
        </Wrap>
    </MainLayout>
}
