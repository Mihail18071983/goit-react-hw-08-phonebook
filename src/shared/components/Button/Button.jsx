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
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
}