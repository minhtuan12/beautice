import React, {useEffect, useState} from "react";
import AuthLayout from "../../../layouts/AuthLayout/index.jsx";
import {useForm} from "react-hook-form";
import _ from "lodash";
import ErrorMessage from "../../../components/ErrorMessage/index.jsx";
import {VALIDATE_PASSWORD_REGEX, VALIDATE_PHONE_REGEX} from "../../../utils/constants.js";
import styles from './styles.module.scss'
import InlineSVG from "react-inlinesvg";
import EyeIcon from '../../../assets/images/icons/solid/eye.svg'
import EyeSlashIcon from '../../../assets/images/icons/solid/eye-slash.svg'
import RegisterIcon from '../../../assets/images/icons/solid/right-to-bracket.svg'
import {capitalizeFirstLetter, notify} from "../../../utils/helpers.js";
import LoadingIcon from "../../../assets/images/icons/solid/circle-notch.svg";
import {useMutation} from "@tanstack/react-query";
import {register as requestRegister} from '../../../api/auth/index.js'
import {useNavigate} from "react-router-dom";

export default function Register() {
    const [registerData, setRegisterData] = useState({
        fullName: '',
        phone: '',
        password: ''
    })
    const [visiblePassword, setVisiblePassword] = useState(false)
    const navigate = useNavigate()
    const {
        register,
        formState: {errors},
        handleSubmit,
        setValue,
        setError
    } = useForm({
        defaultValues: {
            fullName: '',
            phone: '',
            password: ''
        }
    })

    /* handle change input */
    const handleChangeInput = (value, type) => {
        setRegisterData({
            ...registerData,
            [type]: value
        })
    }

    /* handle request register to server */
    const {isPending, mutate: signup} = useMutation({
        mutationKey: ['register'],
        mutationFn: () => requestRegister(registerData),
        onSuccess: () => {
            notify('success', 'Signed up successfully')
            navigate('/login')
        },
        onError: (err) => {
            const responseStatus = err.status
            if (responseStatus === 400) {
                const errors = err.data.details
                Object.keys(errors).forEach(field => {
                    setError(field, {
                        type: 'manual',
                        message: errors[field]
                    })
                })
            } else {
                notify('error', 'Failed to sign up')
            }
        }
    })

    const handleSubmitRegister = () => {
        signup()
    }

    const handleChangePasswordVisibility = (type) => {
        setVisiblePassword(type !== 'hide')
        let passwordEle = document.getElementById('password')
        passwordEle.type = type === 'hide' ? 'password' : 'text'
    }

    useEffect(() => {
        setValue('fullName', capitalizeFirstLetter(registerData.fullName))
    }, [registerData, setValue])

    return <AuthLayout title={'Register'}>
        <form onSubmit={handleSubmit(handleSubmitRegister)} className={styles.formWrap}>
            <label className={'flex mt-6 text-[18px] ml-1 font-medium'}>Full Name <div
                className={'text-[red] ml-1'}>*</div></label>
            <input
                className={!_.isEmpty(errors.fullName?.message) ? styles.errorInput : ''}
                {
                    ...register('fullName',
                        {
                            required: 'Full name is required!',
                            onChange: (e) => handleChangeInput(e.target.value, 'fullName')
                        })
                }
                placeholder={'Full name'}
            />
            {!_.isEmpty(errors.fullName?.message) ? <ErrorMessage message={errors.fullName?.message}/> : ''}

            <label className={'flex mt-6 text-[18px] ml-1 font-medium'}>Phone number <div
                className={'text-[red] ml-1'}>*</div></label>
            <input
                className={!_.isEmpty(errors.phone?.message) ? styles.errorInput : ''}
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
            {!_.isEmpty(errors.phone?.message) ? <ErrorMessage message={errors.phone?.message}/> : ''}

            <div className={styles.passwordInputWrap}>
                <label className={'flex mt-6 text-[18px] ml-1 font-medium'}>Password <div
                    className={'text-[red] ml-1'}>*</div></label>
                <input
                    id={'password'}
                    className={!_.isEmpty(errors.password?.message) ? styles.errorInput : ''}
                    type={'password'}
                    {
                        ...register('password',
                            {
                                required: 'Password is required!',
                                min: {
                                    value: 8,
                                    message: 'Password must contain at least 8 characters!'
                                },
                                pattern: {
                                    value: VALIDATE_PASSWORD_REGEX,
                                    message: 'Password must contain at least 8 characters, uppercase and lowercase, numbers and special characters!'
                                },
                                onChange: (e) => handleChangeInput(e.target.value, 'password')
                            })
                    }
                    placeholder={'Password'}
                />
                {
                    visiblePassword ? <InlineSVG src={EyeIcon} width={22} height={22} className={styles.icon}
                                                 onClick={() => handleChangePasswordVisibility('hide')}/> :
                        <InlineSVG src={EyeSlashIcon} width={22} height={22} className={styles.icon}
                                   onClick={() => handleChangePasswordVisibility('reveal')}/>
                }
            </div>
            {!_.isEmpty(errors.password?.message) ? <ErrorMessage message={errors.password?.message}/> : ''}

            <button type="submit" className={styles.submitBtn} disabled={isPending}>
                {
                    isPending ?
                        <InlineSVG className={styles.loadingIcon} src={LoadingIcon} width={22} height={22}/>
                        : ''
                }
                Sign up
                <InlineSVG src={RegisterIcon} width={22} height={22}/>
            </button>

            <div className={styles.option}>
                Already have an account? <a href={'/login'}>Log in</a>
            </div>
        </form>
    </AuthLayout>
}
