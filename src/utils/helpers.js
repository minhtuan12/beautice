import CloseIcon from '../assets/images/icons/light/close.svg'
import success from '../assets/images/icons/notification/success_16x16.svg';
import error from '../assets/images/icons/notification/error_16x16.svg';
import warning from '../assets/images/icons/notification/warning_16x16.svg';
import {notification} from "antd";

const AUTH_TOKEN_STORE_KEY = 'token';

export function handleSlide(currentWidth, ableToScroll, scrollDiv, direction) {
    // if ((currentWidth < ableToScroll && direction === 'right') || (currentWidth > 0 && direction === 'left')) {
    scrollDiv.scrollLeft += direction === 'right' ? scrollDiv.clientWidth : -scrollDiv.clientWidth
    // }
}

export const removeAuthToken = () => {
    return localStorage.removeItem(AUTH_TOKEN_STORE_KEY);
}

export const setAuthToken = (token) => {
    return localStorage.setItem(AUTH_TOKEN_STORE_KEY, token);
}

export const getAuthToken = () => {
    return localStorage.getItem(AUTH_TOKEN_STORE_KEY)
}

export const capitalizeFirstLetter = (string) => {
    if (string) {
        return string
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
    }
}

const handleGetTypeNotification = (type) => {
    let notificationType = {};
    switch (type) {
        case "error":
            notificationType = {
                className: 'notification-error',
                icon: error,
            }
            break;
        case "warning":
            notificationType = {
                className: 'notification-warning',
                icon: warning,
            }
            break;
        default:
            notificationType = {
                className: 'notification-success',
                icon: success,
            }
    }
    return notificationType
}

export const notify = (type, content, duration = 3, align = 'top') => {
    let notificationType = handleGetTypeNotification(type);
    notification[type]({
        message: '',
        description: (
            <div className={`notification-content ${notificationType.className}`}>
                <div className={'icon-notification'}>
                    <img src={notificationType.icon} alt=""/>
                </div>
                <span className={'text-notification'}>{content}</span>
            </div>
        ),
        closeIcon: (
            <img src={CloseIcon} alt=""/>
        ),
        placement: align,
        duration: duration,
        style: {fontWeight: "normal"}
    });
};
