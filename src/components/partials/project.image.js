import React from "react"
import styled from "styled-components"
import {faPlayCircle} from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Img from 'gatsby-image';

const ProjectImage = styled(Img)`
  position: absolute !important;
  width: 25%;
  height: 255px;
  background-size: cover;
  -webkit-box-shadow: 0px -1px 19px 0px rgba(0,0,0,0.41);
  -moz-box-shadow: 0px -1px 19px 0px rgba(0,0,0,0.41);
  box-shadow: 0px -1px 19px 0px rgba(0,0,0,0.41);
  filter:blur(1px);
  border-radius: 20px;
  z-index: 1;
`

const PlayIcon = styled.a`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    vertical-align: middle;
    text-decoration: none;
    color: #fff;
    font-size: 100px;
    height: 100%;
`


// se existir video colocar o react-modal-video
const ImageLayer = ({ imgObj }) => {
  return (
    <ProjectImage fluid={imgObj}>
        <PlayIcon><FontAwesomeIcon icon={faPlayCircle}/></PlayIcon>
    </ProjectImage>
  )
}

export default ImageLayer
