import React from "react";
import styles from './styles.module.scss'
import PropTypes from "prop-types";

BoxHeader.PropTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    align: PropTypes.oneOf(['left', 'right', 'center']),
    classnames: {
        wrapClassName: PropTypes.string,
        titleExtraClassname: PropTypes.string,
        subTitleExtraClassname: PropTypes.string,
        descriptionExtraClassname: PropTypes.string,
        extraClassname: PropTypes.string
    }
}

BoxHeader.defaultProps = {
    classnames: {
        wrapClassName: '',
        titleExtraClassname: '',
        subTitleExtraClassname: '',
        descriptionExtraClassname: '',
        extraClassname: ''
    }
}

export default function BoxHeader({title, subTitle, description, classnames, align = 'left'}) {
    const extraClassname = (classname) => classname !== '' ? `!${classname}` : ''
    const formattedAlign = {
        text: align === 'left' ? 'text-left' : (align === 'right' ? 'text-right' : 'text-center'),
        box: align === 'left' ? 'items-start' : (align === 'right' ? 'items-end' : 'items-center')
    }

    return <div className={`${styles.header} ${formattedAlign.box} ${extraClassname(classnames.wrapClassName)}`}>
        <div className={`${styles.title} ${formattedAlign.text} 
            ${extraClassname(classnames.titleExtraClassname)}`}
        >
            {title}
        </div>
        <div className={`${styles.subTitle} ${formattedAlign.text} 
            ${extraClassname(classnames.subTitleExtraClassname)}`}
        >
            {subTitle}
        </div>
        <div className={`${styles.description} ${formattedAlign.text} 
            ${extraClassname(classnames.descriptionExtraClassname)}`}
        >
            {description}
        </div>
    </div>
}
