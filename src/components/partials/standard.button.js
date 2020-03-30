import React from "react"
import { Link } from "gatsby"


const Button = (props) => {
  return (
    <Link to={props.link} className={"cta" + (props.is_white ? " has-title-color" : "" )} >
      <span>{props.text}</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
    </Link>
  )
}

export default Button