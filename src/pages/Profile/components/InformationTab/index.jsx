import React, {useEffect, useState} from 'react';
import {Avatar, Button, Skeleton, Upload} from "antd";
import InlineSVG from "react-inlinesvg";
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import styles from './styles.module.scss'
import DefaultAvatar from '../../../../assets/images/logos/user-default.png'
import {EditOutlined} from '@ant-design/icons'
import {capitalizeFirstLetter, notify, setAuthToken} from "../../../../utils/helpers.js";
import {VALIDATE_PHONE_REGEX} from "../../../../utils/constants.js";
import ErrorMessage from "../../../../components/ErrorMessage/index.jsx";
import LoadingIcon from "../../../../assets/images/icons/solid/circle-notch.svg";
import {useForm} from "react-hook-form";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {requestUpdateProfile} from "../../../../api/profile/index.js";
import {requestGetMeSuccess} from "../../../../store/slices/auth/index.js";
import Input from "../../../../components/Input/index.jsx";

const getBase64 = (img, callback) => {
    if (img?.type === 'image/jpeg' || img?.type === 'image/png') {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
}

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        notify('error', 'Only .jpeg and .jpeg accepted!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        notify('error', 'Cannot be larger than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

export default function InformationTab() {
    const dispatch = useDispatch();
    const authUser = useSelector(state => state.auth.authUser)
    const [updateProfileData, setUpdateProfile] = useState({
        fullName: authUser?.full_name,
        phone: authUser?.phone,
        avatar: authUser?.avatar
    })
    const isLoadingGetMe = useSelector(state => state.auth.isLoadingGetMe)
    const noAvatar = _.isEmpty(authUser.profile) || !authUser.profile?.avatar
    const [imageUrl, setImageUrl] = useState('');
    const {
        register,
        formState: {errors},
        handleSubmit,
        setError, setValue
    } = useForm({
        defaultValues: {
            fullName: authUser?.full_name,
            phone: authUser?.phone,
        }
    })
    const queryClient = useQueryClient();

    const handleChange = (info) => {
        getBase64(info.file.originFileObj, (url) => {
            setImageUrl(url);
            setUpdateProfile({
                ...updateProfile,
                avatar: url
            })
        });
    };

    const handleChangeInput = (value, type) => {
        setUpdateProfile({
            ...updateProfileData,
            [type]: value
        })
    }

    /* handling request to update profile */
    const {isPending, mutate: updateProfile} = useMutation({
        mutationKey: ['update-profile'],
        mutationFn: () => requestUpdateProfile(updateProfileData),
        onSuccess: async () => {
            notify('success', 'Updated successfully')
            await queryClient.invalidateQueries({queryKey: ['me']}).then(async () => {
                await queryClient.refetchQueries({queryKey: ['me']})
            })
            const newProfileData = queryClient.getQueryData(['me'])
            dispatch(requestGetMeSuccess(newProfileData.data))
        },
        onError: (err) => {
            console.log(err)
            // const responseStatus = err.status
            // if (responseStatus === 400) {
            //     const errors = err.data.details
            //     Object.keys(errors).forEach(field => {
            //         setError(field, {
            //             type: 'manual',
            //             message: errors[field]
            //         })
            //     })
            // } else {
            //     notify('error', 'Failed to sign up')
            // }
        },

    })

    const handleSubmitUpdateProfile = () => {
        updateProfile()
    }

    useEffect(() => {
        if (!_.isEmpty(authUser)) {
            if (authUser?.avatar) {
                setImageUrl(authUser?.avatar)
            }
        }
    }, [dispatch, authUser])

    useEffect(() => {
        setValue('fullName', capitalizeFirstLetter(updateProfileData.fullName))
    }, [updateProfileData, setValue])

    return (
        <div className={styles.cardWrap}>
            <div className={styles.title}>
                <p className={''}>Update information</p>
            </div>
            <div className={'px-10 py-7'}>
                {
                    isLoadingGetMe ? <Skeleton active={isLoadingGetMe}/>
                        : <div className={styles.childrenContainer}>
                            <div className={styles.uploadContainer}>
                                <div className={'w-fit border-[3px] rounded-[50%] h-fit hover:border-dashed'}>
                                    <Upload
                                        name="avatar"
                                        showUploadList={false}
                                        beforeUpload={beforeUpload}
                                        onChange={handleChange}
                                        customRequest={() => {
                                        }}
                                    >
                                        <div className={'relative'}>
                                            <Avatar
                                                src={imageUrl ? imageUrl : (noAvatar ? DefaultAvatar : imageUrl)}
                                                className={styles.avatar}
                                            />
                                            <div className={styles.avatarEdit}>
                                                <EditOutlined/>
                                            </div>
                                        </div>
                                    </Upload>
                                </div>
                            </div>

                            <div className={styles.personalInfoContainer}>
                                <form onSubmit={handleSubmit(handleSubmitUpdateProfile)} className={'formWrap'}>

                                    <label className={'flex mt-6 text-[18px] ml-1 font-medium'}>Full name <div
                                        className={'text-[red] ml-1'}>*</div></label>
                                    <Input
                                        className={!_.isEmpty(errors.fullName?.message) ? 'errorInput' : ''}
                                        {
                                            ...register('fullName',
                                                {
                                                    required: 'Full name is required!',
                                                    onChange: (e) => handleChangeInput(e.target.value, 'fullName')
                                                })
                                        }
                                        placeholder={'Full name'}
                                    />
                                    {!_.isEmpty(errors.fullName?.message) ?
                                        <ErrorMessage message={errors.fullName?.message}/> : ''}

                                    <label className={'flex mt-6 text-[18px] ml-1 font-medium'}>Phone number <div
                                        className={'text-[red] ml-1'}>*</div></label>
                                    <Input
                                        className={!_.isEmpty(errors.phone?.message) ? 'errorInput' : ''}
                                        {
                                            ...register('phone',
                                                {
                                                    required: 'Phone number is required!',
                                                    min: {
                                                        value: 10,
                                                        message: 'Invalid phone number!'
                                                    },
                                                    pattern: {
                                                        value: VALIDATE_PHONE_REGEX,
                                                        message: 'Invalid phone number!'
                                                    },
                                                    onChange: (e) => handleChangeInput(e.target.value, 'phone')
                                                })
                                        }
                                        placeholder={'Phone number'}
                                    />
                                    {!_.isEmpty(errors.phone?.message) ?
                                        <ErrorMessage message={errors.phone?.message}/> : ''}

                                    <Button type="submit" className={'submitBtn'} disabled={isPending}>
                                        {
                                            isPending ?
                                                <InlineSVG className={'loadingIcon'} src={LoadingIcon} width={22}
                                                           height={22}/>
                                                : ''
                                        }
                                        Update
                                    </Button>
                                </form>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
}
