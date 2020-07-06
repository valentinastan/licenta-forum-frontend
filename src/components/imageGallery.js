import React, { useEffect, useState } from 'react'
import images from '../helpers/images'

const ImageGallery = (props) => {
  const [ state, dispatch ] = useState({ leftImages: [], rightImages: []})


  useEffect(() => {
    dispatch({ leftImages: images.slice(0, images.length/2), rightImages: images.slice(images.length/2)})
  }, [])
  
  return(
    <div className="imageGallery">
      <div className="leftImageGallery">
        {
          state.leftImages.map(({id, src, title, description}) => {
            return (
              <div className="images">
                <a target="_blank" href={src}>
                <img key={id} src={src} title={title} alt={description} className="imgTag" />
                </a>
                <div class="desc">{description}</div> 
              </div>
          )})
        }
      </div>

      <div className="mainContainer">
        {props.children}
      </div>

      <div className="rightImageGallery">
        {
          state.rightImages.map(({id, src, title, description}) => {
            return (
              <div className="images">
                <a target="_blank" href={src}>
                <img key={id} src={src} title={title} alt={description} className="imgTag"/>
                </a>
                <div class="desc">{description}</div> 
              </div>
          )})
        }
      </div>
    </div>
  )
}

export default ImageGallery