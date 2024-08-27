import React, {useRef} from "react";
import styles from './styles.module.scss'
import {RightOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";
import {handleSlide} from "../../utils/helpers.js";
import {experts} from "./data.js";
import ExpertCard from "./ExpertCard/index.jsx";

export default function ExpertSection({title, subTitle, description}) {
    const isVisibleSlidingBtn = useSelector(state => state.app.isVisibleSlidingBtn)
    const expertWrapRef = useRef()

    function handleSlideProfessionalExpert(direction) {
        if (expertWrapRef?.current) {
            const currentWidth = expertWrapRef.current.scrollLeft
            const ableToScroll = expertWrapRef.current.scrollWidth - 800

            handleSlide(currentWidth, ableToScroll, expertWrapRef.current, direction)
        }
    }

    return <div className={styles.professionalTeams}>
        <div className={styles.proHeader}>
            <div className={styles.proHeaderTitle}>{title}</div>
            <div className={styles.proHeaderUnderTitle}>{subTitle}</div>
            <div className={styles.proHeaderDesc}>{description}</div>
        </div>

        {
            isVisibleSlidingBtn ? <>
                <div className={styles.proAngleRight} onClick={() => handleSlideProfessionalExpert('right')}>
                    <RightOutlined/>
                </div>
                <div className={styles.proAngleLeft} onClick={() => handleSlideProfessionalExpert('left')}>
                    <RightOutlined/>
                </div>
            </> : ''
        }

        <div className={styles.proBoxSectionWrap} ref={expertWrapRef}>
            {
                experts.map((expert, index) => (
                    <ExpertCard key={index} expert={expert} index={index}/>
                ))
            }
        </div>
    </div>
}
