import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  color: #1f2c6c;
`

const Button = (props) => {
  // let tagOpen = `<Link to={props.link} className="cta">`
  // let tagClose = `</Link>`
  //
  // if(props.is_white){
  //   tagOpen = `<StyledLink to={props.link} className="cta">`
  //   tagClose = `</StyledLink>`
  // }
  //
  return (
    <Link to={props.link} className="cta">
      <span>{props.text}</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
    </Link>
  )
}


export default Button