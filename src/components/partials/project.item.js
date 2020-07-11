import React from "react"
import ImageLayer from "./project.image"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from '@fortawesome/free-solid-svg-icons';



const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`

const Card = styled.div`
  position: relative;
  width: 95%;
  height: 525px;
 
  background: #fff;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2); 
  border-radius: 10px;
  top: 65px;
`

const Title = styled.h1`
  position: absolute;
  top: 40%;
  padding: 0 50px;
  font-weight: 700;
  font-size: 25px;
  font-family: "Baloo 2", cursive;
`

const Tags = styled.div`
  position: absolute;
  top: 47%;
  padding: 0 50px;
`

const Description = styled.p`
  position: absolute;
  top: 55%;
  padding: 0 50px;
`

const Social = styled.div`
  position: absolute;
  top: 85%;
  right: 10%;
`

const SocialIcon = styled.a`
  width: 150px;
  height: 100px;
  border-radius: 50%;
  font-size: 30px;
  color: #4a4a4a;
  padding: 10px 15px;
  &:hover {
    -webkit-box-shadow: 0px -1px 19px 0px rgba(0,0,0,0.41);
    -moz-box-shadow: 0px -1px 19px 0px rgba(0,0,0,0.41);
    box-shadow: 0px -1px 19px 0px rgba(0,0,0,0.41);
  }
`

const ProjectItem = (props) => {
  return(
    <div className="column is-medium is-one-third is-full-mobile is-full-tablet mg-btm project-item">
      <Wrapper>
        <ImageLayer imgObj={props.info.image.childImageSharp.fluid}/>
        <Card>
          <Title>{props.info.title}</Title>
          <Tags className="tags">
          {props.info.stack.split(",").map(value => (
            <span className="tag is-light mr-6" key={value}>{value}</span>
          ))}
          </Tags>
          <br/>
          <Description>
            {props.info.description}
          </Description>
          <Social>
          {props.info.live != null &&
              <SocialIcon target="_blank" href={props.info.live}><FontAwesomeIcon icon={faLink} /></SocialIcon>
          }
          {props.info.source != null &&
            <SocialIcon target="_blank" href={props.info.source}><FontAwesomeIcon icon={faGithub} /></SocialIcon>
          }
          </Social>
        </Card>
      </Wrapper>
  </div>
  )
}

export default ProjectItem
