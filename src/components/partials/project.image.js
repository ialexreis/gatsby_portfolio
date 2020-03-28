import React from "react"
import styled from "styled-components"


const ProjectImage = styled.div`
  position: absolute;
  width: 25%;
  height: 255px;
  background: ${props => `url('${props.imgObj.url}');`}
  background-size: cover;
  filter: blur(4px);
  border-radius: 20px;
  z-index: 1;
`


const ImageLayer = ({ imgObj }) => {
  console.log(imgObj)
  return (
    <ProjectImage imgObj={imgObj}/>
  )
}

export default ImageLayer
