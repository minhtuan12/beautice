import React, {useState} from 'react';
import './styles.scss';
import styles from './styles.module.scss';
import _ from "lodash";
import ErrorMessage from "../../../../components/ErrorMessage/index.jsx";
import {VALIDATE_PASSWORD_REGEX, VALIDATE_PHONE_REGEX} from "../../../../utils/constants.js";
import InlineSVG from "react-inlinesvg";
import LoadingIcon from "../../../../assets/images/icons/solid/circle-notch.svg";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import EyeIcon from "../../../../assets/images/icons/solid/eye.svg";
import EyeSlashIcon from "../../../../assets/images/icons/solid/eye-slash.svg";
import Button from "../../../../components/Button/index.jsx";
import Input from "../../../../components/Input/index.jsx";

function ChangePassword() {
    const [changePasswordData, setChangePasswordData] = useState({
        currentPassword: '',
        newPassword: ''
    })
    const [visiblePassword, setVisiblePassword] = useState(false)
    const [visibleNewPassword, setVisibleNewPassword] = useState(false)
    const {
        register,
        formState: {errors},
        handleSubmit,
        setError
    } = useForm({
        defaultValues: {
            currentPassword: '',
            newPassword: '',
        }
    })

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleConfirmChangePassword()
        }
    }
    const handleChangePasswordVisibility = (type, isNewPassword = false) => {
        if (!isNewPassword) {
            setVisiblePassword(type !== 'hide')
        } else {
            setVisibleNewPassword(type !== 'hide')
        }
        let passwordEle = document.getElementById(isNewPassword ? 'new-password' : 'password')
        passwordEle.type = type === 'hide' ? 'password' : 'text'
    }


    const handleChangeInput = (value) => {

    }

    const handleConfirmChangePassword = () => {

    }

    const {isPending, mutate: changePassword} = useMutation({
        mutationKey: ['change-password'],
        // mutationFn: () => requestRegister(registerData),
        // onSuccess: () => {
        //     notify('success', 'Signed up successfully')
        //     navigate('/login')
        // },
        // onError: (err) => {
        //     const responseStatus = err.status
        //     if (responseStatus === 400) {
        //         const errors = err.data.details
        //         Object.keys(errors).forEach(field => {
        //             setError(field, {
        //                 type: 'manual',
        //                 message: errors[field]
        //             })
        //         })
        //     } else {
        //         notify('error', 'Failed to sign up')
        //     }
        // }
    })

    return (
        <div className={styles.cardWrap}>
            <div className={styles.title}>
                <p className={''}>Change password</p>
            </div>
            <div className={'px-10 py-7'}>
                <div className={styles.contentWrap}>
                    <form onSubmit={handleSubmit(handleConfirmChangePassword)} className={'formWrap'}>
                        <div className={'passwordInputWrap'}>
                            <label className={'flex mt-6 text-[18px] ml-1 font-medium'}>Current password <div
                                className={'text-[red] ml-1'}>*</div></label>
                            <Input
                                type={'password'}
                                id={'password'}
                                className={!_.isEmpty(errors.currentPassword?.message) ? 'errorInput' : ''}
                                {
                                    ...register('currentPassword',
                                        {
                                            required: 'Current password is required!',
                                            min: {
                                                value: 8,
                                                message: 'Password must contain at least 8 characters!'
                                            },
                                            pattern: {
                                                value: VALIDATE_PASSWORD_REGEX,
                                                message: 'Password must contain at least 8 characters, uppercase and lowercase, numbers and special characters!'
                                            },
                                            onChange: (e) => handleChangeInput(e.target.value, 'currentPassword')
                                        })
                                }
                                placeholder={'Current password'}
                            />
                            {
                                visiblePassword ? <InlineSVG src={EyeIcon} width={22} height={22} className={'icon'}
                                                             onClick={() => handleChangePasswordVisibility('hide')}/> :
                                    <InlineSVG src={EyeSlashIcon} width={22} height={22} className={'icon'}
                                               onClick={() => handleChangePasswordVisibility('reveal')}/>
                            }
                        </div>
                        {!_.isEmpty(errors.currentPassword?.message) ?
                            <ErrorMessage message={errors.currentPassword?.message}/> : ''}

                        <div className={'passwordInputWrap'}>
                            <label className={'flex mt-6 text-[18px] ml-1 font-medium'}>New password <div
                                className={'text-[red] ml-1'}>*</div></label>
                            <Input
                                type={'password'}
                                id={'new-password'}
                                className={!_.isEmpty(errors.newPassword?.message) ? 'errorInput' : ''}
                                {
                                    ...register('newPassword',
                                        {
                                            required: 'New password is required!',
                                            min: {
                                                value: 8,
                                                message: 'Password must contain at least 8 characters!'
                                            },
                                            pattern: {
                                                value: VALIDATE_PASSWORD_REGEX,
                                                message: 'Password must contain at least 8 characters, uppercase and lowercase, numbers and special characters!'
                                            },
                                            onChange: (e) => handleChangeInput(e.target.value, 'newPassword')
                                        })
                                }
                                placeholder={'New password'}
                            />
                            {
                                visibleNewPassword ? <InlineSVG src={EyeIcon} width={22} height={22} className={'icon'}
                                                                onClick={() => handleChangePasswordVisibility('hide', true)}/> :
                                    <InlineSVG src={EyeSlashIcon} width={22} height={22} className={'icon'}
                                               onClick={() => handleChangePasswordVisibility('reveal', true)}/>
                            }
                        </div>
                        {!_.isEmpty(errors.newPassword?.message) ?
                            <ErrorMessage message={errors.newPassword?.message}/> : ''}

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
        </div>
    );
}

export default ChangePassword;
