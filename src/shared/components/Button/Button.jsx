import React from 'react';
import PropTypes from 'prop-types';



const Button = ({type, children}) => (
    <button type={type}>{children}</button>
)

Button.defaultProps = {
    type: "submit",
}

export default Button

Button.propTypes = {
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    children:PropTypes.element.isRequired
}