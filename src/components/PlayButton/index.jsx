import React from "react";
import styles from './styles.module.scss'
import {pathToIcon} from "../../utils/constants.js";

export default function PlayButton() {
    return <div className={styles.playBtn}>
        <img alt={''} src={`${pathToIcon}/Ellipse 3.png`} className={styles.ellipse}/>
        <img alt={''} src={`${pathToIcon}/Polygon 1.png`} className={styles.polygon}/>
    </div>
}
