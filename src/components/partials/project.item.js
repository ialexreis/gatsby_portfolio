import React from "react"
import ImageLayer from "./project.image"
import styled from "styled-components"


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

const Description = styled.p`
  position: absolute;
  top: 50%;
  padding: 0 50px;
`

const ProjectItem = (props) => {
  return(
    <div className="column is-medium is-4">
      <Wrapper>
        <ImageLayer imgObj={{url: props.image}}/>
        <Card>
          <Title>{props.title}</Title>
          <Description>{props.description}</Description>
        </Card>
      </Wrapper>
  </div>
  )
}

export default ProjectItem