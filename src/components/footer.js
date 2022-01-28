import React from "react"
import styled from "styled-components"

const CopyRef = styled.b`
  color: #151515;
  font-weight: lighter;
`

const Footer = () => {
  return (
    <footer className="has-text-black">
      <div className="container">
        <div className="content has-text-centered has-text-black">
          <p>
            Website made with ❤️ <a className="ml-0 pl-1 pr-0 has-text-black has-text-weight-bold" href="http://alexandreis.me">by Alex Reis</a>. The source code is licensed
            <a className="ml-0 pl-1 pr-0 has-text-black" href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            <br/>
            <CopyRef>Copyright © 2022, Alexandre Reis</CopyRef>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
