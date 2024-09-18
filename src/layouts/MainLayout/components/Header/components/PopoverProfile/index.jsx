import React from 'react';
import styles from "./styles.module.scss";
import {removeAuthToken} from "../../../../../../utils/helpers.js";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import {requestGetMeFail} from "../../../../../../store/slices/auth/index.js";
import {setIsVisibleMenuBox} from "../../../../../../store/slices/app/index.js";

function PopoverProfile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authUser = useSelector(state => state.auth.authUser);

    const handleConfirmLogout = () => {
        dispatch(setIsVisibleMenuBox(false))
        removeAuthToken();
        dispatch(requestGetMeFail())
        navigate('/');
    }

    return (
        <div className={styles.modalInfoWrap}>
            <div className={styles.personalInformationWrap}>
                {
                    !_.isEmpty(authUser) ? <>
                        <div className={styles.role}>
                            {authUser?.full_name}
                        </div>
                    </> : ''
                }
            </div>
            <div className={styles.mainModalInfoWrap}>
                <ul className={styles.menuInfoWrap}>
                    {
                        _.isEmpty(authUser) ? <li
                                onClick={() => navigate('/login')}
                                className={styles.itemInfoWrap}
                            >
                                <div>
                                    <span className={styles.text}>Log in / Sign up</span>
                                </div>
                            </li> :
                            <>
                                <li
                                    onClick={() => navigate('/profile')}
                                    className={styles.itemInfoWrap}
                                >
                                    <div>
                                        <span className={styles.text}>Profile</span>
                                    </div>
                                </li>
                                <li
                                    onClick={() => handleConfirmLogout()}
                                    className={styles.itemInfoWrap}
                                >
                                    <div>
                                        <span className={styles.text}>Log out</span>
                                    </div>
                                </li>
                            </>
                    }
                </ul>
            </div>
        </div>
    );
}

export default PopoverProfile;
