import React, {useState} from "react";
import AuthLayout from "../../../layouts/AuthLayout/index.jsx";
import {useForm} from "react-hook-form";
import _ from "lodash";
import ErrorMessage from "../../../components/ErrorMessage/index.jsx";
import {VALIDATE_PASSWORD_REGEX, VALIDATE_PHONE_REGEX} from "../../../utils/constants.js";
import InlineSVG from "react-inlinesvg";
import EyeIcon from '../../../assets/images/icons/solid/eye.svg'
import EyeSlashIcon from '../../../assets/images/icons/solid/eye-slash.svg'
import LoginIcon from '../../../assets/images/icons/solid/right-to-bracket.svg'
import LoadingIcon from '../../../assets/images/icons/solid/circle-notch.svg'
import {useMutation} from "@tanstack/react-query";
import {login as requestLogin} from '../../../api/auth/index.js'
import {notify, setAuthToken} from "../../../utils/helpers.js";
import {useNavigate} from "react-router-dom";
import Button from "../../../components/Button/index.jsx";
import Input from "../../../components/Input/index.jsx";
import tw from 'twin.macro'
import {queryClient} from "../../../utils/queryClient.js";

export default function Login() {
    const [loginData, setLoginData] = useState({
        phone: '',
        password: ''
    })
    const navigate = useNavigate()
    const [visiblePassword, setVisiblePassword] = useState(false)
    const [errorStatus, setErrorStatus] = useState(null)
    const {
        register,
        formState: {errors},
        handleSubmit,
        setError
    } = useForm({
        defaultValues: {
            phone: '',
            password: ''
        }
    })

    const handleChangeInput = (value, type) => {
        setLoginData({
            ...loginData,
            [type]: value
        })
    }

    /* handle request login to server */
    const {isPending, mutate: login} = useMutation({
        mutationKey: ['login'],
        mutationFn: () => requestLogin(loginData),
        onSuccess: async (data) => {
            setAuthToken(data.data.token)
            notify('success', 'Logged in successfully')
            navigate('/')
        },
        onError: (err) => {
            const responseStatus = err.status
            switch (responseStatus) {
                case 400: {
                    const errors = err.data?.details
                    if (!_.isEmpty(errors)) {
                        Object.keys(errors).forEach(field => {
                            setError(field, {
                                type: 'manual',
                                message: errors[field]
                            })
                        })
                    }
                    break
                }
                case 401:
                    setErrorStatus(401)
                    setError('password', {
                        type: 'manual',
                        message: err.data.message
                    })
                    break
                case 404:
                    notify('error', 'Account does not exist')
                    break
                case 500:
                    notify('error', 'Failed to log in')
                    break
            }
        }
    })

    const handleSubmitLogin = () => {
        login()
    }

    const handleChangePasswordVisibility = (type) => {
        setVisiblePassword(type !== 'hide')
        let passwordEle = document.getElementById('password')
        passwordEle.type = type === 'hide' ? 'password' : 'text'
    }

    return <AuthLayout title={'Login'}>
        <form onSubmit={handleSubmit(handleSubmitLogin)} className={'formWrap'}>
            <label tw={'flex mt-6 text-[18px] ml-1 font-medium'}>Phone number <div
                tw={'text-[red] ml-1'}>*</div></label>
            <Input
                className={(!_.isEmpty(errors.phone?.message) || errorStatus === 401) ? 'errorInput' : ''}
                {
                    ...register('phone',
                        {
                            required: 'Phone number is required!',
                            value: loginData.phone,
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

            <div className={'passwordInputWrap'}>
                <label tw={'flex mt-6 text-[18px] ml-1 font-medium'}>Password <div
                    tw={'text-[red] ml-1'}>*</div></label>
                <Input
                    id={'password'}
                    className={!_.isEmpty(errors.password?.message) ? 'errorInput' : ''}
                    type={'password'}
                    {
                        ...register('password',
                            {
                                required: 'Password is required!',
                                value: loginData.password,
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
                    visiblePassword ? <InlineSVG src={EyeIcon} width={22} height={22} className={'icon'}
                                                 onClick={() => handleChangePasswordVisibility('hide')}/> :
                        <InlineSVG src={EyeSlashIcon} width={22} height={22} className={'icon'}
                                   onClick={() => handleChangePasswordVisibility('reveal')}/>
                }
            </div>
            {!_.isEmpty(errors.password?.message) ? <ErrorMessage message={errors.password?.message}/> : ''}

            <Button type="submit" className={'submitBtn'} disabled={isPending}>
                {
                    isPending ?
                        <InlineSVG className={'loadingIcon'} src={LoadingIcon} width={22} height={22}/>
                        : ''
                }
                Log in
                <InlineSVG src={LoginIcon} width={22} height={22}/>
            </Button>

            <div className={'option'}>
                Not a member? <a href={'/register'}>Sign up now</a>
            </div>
        </form>
    </AuthLayout>
}
