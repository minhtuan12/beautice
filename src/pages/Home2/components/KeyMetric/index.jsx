import React from "react";
import styles from './styles.module.scss'

export default function KeyMetric({data, index}) {
    const isFirstMetric = index === 0

    return <div className={`${styles.metricWrap} ${index === 3 ? '!w-[214px]' : (isFirstMetric ? '!h-[64px]' : '')}`}>
        <div className={`${styles.iconWrap} ${index !== 0 ? 'mt-[-4px]' : ''}`}>
            <img alt={''} src={data.icon}/>
        </div>
        <div className={styles.mainContent}>
            <div className={`${styles.quantity} ${!isFirstMetric ? 'mt-[1px]' : ''}`}>
                {data.quantity}
            </div>
            <div className={`${styles.about} ${isFirstMetric ? '!text-[#FF9ACB]' : 'mt-[-1px]'}`}>
                {data.about}
            </div>
        </div>
    </div>
}
