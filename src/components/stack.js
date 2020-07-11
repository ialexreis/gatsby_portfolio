import React from "react"
import StackItem from "../components/partials/stackItem"
import {faHtml5, faNodeJs, faLaravel, faPhp, faJava, faJs, faCss3 , faWordpress} from "@fortawesome/free-brands-svg-icons"
import  styled from "styled-components"

const StackSlider = styled.div`
  overflow-y: auto;
`

const stack = () => {
  return (
    <div className="section-light about-me" id="stack">
      <div className="container">
        <div className="column is-12 about-me">
          <h1 className="title has-text-centered section-title">Stack</h1>
        </div>
        <StackSlider className="columns">
          <StackItem icon={faHtml5} />
          <StackItem icon={faCss3} />
          <StackItem icon={faJs} />
          <StackItem icon={faNodeJs} />
          <StackItem icon={faPhp} />
          <StackItem icon={faLaravel} />
          <StackItem icon={faJava} />
          <StackItem icon={faWordpress} />
          <StackItem icon="icon-cplusplus" type="icomoon"/>
          <StackItem icon="icon-mongodb" type="icomoon"/>
          <StackItem icon="icon-mysql" type="icomoon"/>
          <StackItem icon="icon-gatsby" type="icomoon"/>
        </StackSlider>
      </div>
    </div>
  )
}

export default stack