import React from 'react'
import images from '../helpers/images'

const ImageGallery = (props) => {

  let leftImages = images.splice(0, images.length/2)
  let rightImages = images


  return(
    <div className="imageGallery">
      <div className="leftImageGallery">
        {
          leftImages.map(({id, src, title, description}) => {
            return (
              <div className="images">
                <a target="_blank" href={src}>
                <img key={id} src={src} title={title} alt={description} width="90%" />
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
          rightImages.map(({id, src, title, description}) => {
            return (
              <div className="images">
                <a target="_blank" href={src}>
                <img key={id} src={src} title={title} alt={description} width="90%" />
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