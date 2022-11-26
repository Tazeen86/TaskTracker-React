import React from 'react'
import  PropTypes  from 'prop-types'
const Button = (props) => {
  return (
    <div>
      <button style={{backgroundColor:props.color}} onClick={props.onClick} className="btn">
        {props.text}</button>
    </div>
  )
}
Button.defaultProps ={
color: "blue",
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick:PropTypes.func.isRequired,
}
export default Button
