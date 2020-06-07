import React from 'react'
import { Link } from 'react-router-dom'

const PreviewPost = (props) => {
  
  return(
    <React.Fragment>
      <div className='previewPost'>
        <h2>{props.title}</h2>
        <div>{props.text}</div>
        <Link to={`/test/${props.id}`}>Show More</Link>
      </div>
    </React.Fragment>
  )
}

export default PreviewPost