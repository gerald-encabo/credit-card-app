import React from 'react';
import './Button.scss';

const styles = ['btn--primary', 'btn--secondary']
const size = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']
const color = ['primary', 'blue', 'dark']

const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize, 
    buttonColor
}) => {
    const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0]
    const checkButtonSize = size.includes(buttonSize) ? buttonSize : size[0]
    const checkButtonColor = color.includes(buttonColor) ? buttonColor : color[null]

    return (
        <button className=
           {`btn ${checkButtonStyle} 
                 ${checkButtonSize}
                 ${checkButtonColor}
                 onClick={onClick}
                 type={type}
            `}>{children}</button>
    )
};

export default Button