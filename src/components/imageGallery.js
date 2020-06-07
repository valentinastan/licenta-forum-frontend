import React from 'react'
import rasad2 from '../images/rasad2.jpg'

const ImageGallery = () => {
  return(
    <div className="imageGallery">
      <React.Fragment>
        <div className="leftImageGallery">
          <a target="_blank" href={rasad2}>
            <img src={rasad2} alt="Rasad2020" width="23%" height="200"></img ></a>
          <div class="desc">Add a description of the image here</div>
        </div>

        <div className="rightImageGallery">
        </div> 
      </React.Fragment>
    </div>
  )
}

export default ImageGallery