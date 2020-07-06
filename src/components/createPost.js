import React, { useState } from 'react'
import { useDispatch } from '../state-management/stores/store'
import { postPostRequest } from '../requests/posts'

const CreatePost = () => {

  const [state, setState] = useState({
    titlePost: '',
    textPost: ''
  })
  
  const dispatch = useDispatch()

  const sendPost = () => {
    postPostRequest({
      title: state.titlePost,
      text: state.textPost
    }).then((post) => dispatch({
      type: 'NEW_POST',
      post
    }))
  }

  return(
    <React.Fragment>
      <div className='createPost'>
        <div>Introduceti titlul</div>
        <textarea id="newTitle" rows="2" cols="55" onChange={(event) => setState({...state, titlePost: event.target.value})}></textarea> <br/>
        <div>Introduceti textul</div>
        <textarea id="newText" rows="4" cols="55" onChange={(event) => setState({...state, textPost: event.target.value})}></textarea> <br/>
        <button type='button' onClick={sendPost}>Adauga</button>
      </div>
    </React.Fragment>
  )
}
export default CreatePost
