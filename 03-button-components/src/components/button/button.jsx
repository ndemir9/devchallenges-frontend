import React from 'react'
import "./button.css"

const Button = (props) => {

    let variantClass
    if (props?.variant) { variantClass = props?.variant }
    let disableShadowClass = "shadow"
    if (props?.disableShadow) { disableShadowClass = "" }
    let sizeClass
    if (props?.size) { sizeClass = props?.size }
    let colorClass
    if (props?.color) { colorClass = props?.color }
    let startIcon
    if (props?.startIcon) { startIcon = props?.startIcon }
    let endIcon
    if (props?.endIcon) { endIcon = props?.endIcon }

    return (
        <button
            disabled={props.disabled}
            className={`${variantClass + " " + disableShadowClass + " " + sizeClass + " " + colorClass
                }`}
        >
            {startIcon && <span className="material-icons">{startIcon}</span>}
            {props.value ? props.value : "Default"}
            {endIcon && <span className="material-icons">{endIcon}</span>}
        </button>
    );
}

export default Button