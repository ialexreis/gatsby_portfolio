import React from "react"
import StackItem from "../components/partials/stackItem"
import  styled from "styled-components"
import {
  AiOutlineHtml5, CgCPlusPlus,
  DiCss3, DiMysql,
  DiPhp, DiPostgresql, RiGatsbyLine, SiCsharp, SiDocker, SiJava, SiJavascript, SiKotlin,
  SiLaravel, SiTypescript, SiUnity, SiUnrealengine,

} from "react-icons/all"
const StackSlider = styled.div`
  overflow-y: auto;
`

const stackObject = {
  learning: [SiUnrealengine, SiUnity, CgCPlusPlus, SiKotlin],
  experienced: [
    AiOutlineHtml5, DiCss3,  SiJavascript, SiTypescript,
    RiGatsbyLine, DiPhp, SiLaravel, SiCsharp, SiJava,
    DiPostgresql, DiMysql, SiDocker],
}

const stack = () => {
  return (
    <div className="section-light about-me" id="stack">
      <div className="container">
        <div className="columns">
          <div className="column has-text-left is-half is-full-mobile is-full-tablet">
            <h1 className="subtitle is-full">
              Experienced
            </h1>
            <div className="columns is-multiline">
              {stackObject.experienced.map(lang => (
                <StackItem icon={lang} />
              ))}
            </div>
          </div>
          <div className="column has-text-right is-half is-full-mobile is-full-tablet">
            <h1 className="subtitle is-full">
              Learning
            </h1>
            <div className="columns is-multiline">
              {stackObject.learning.map(item => (
                <StackItem icon={item} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default stack