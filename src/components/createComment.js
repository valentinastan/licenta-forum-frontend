import React, { useState } from 'react'
import { postCommentsQuery } from '../requests/comments'
import { useDispatch } from '../state-management/stores/store'

const CreateComment = (props) => {
  const [state, setState] = useState('');
  const dispatch = useDispatch()

  const sendComment = () => {
    postCommentsQuery({
      id: props.id,
      text: state
    }).then((comment) => dispatch({
      type: 'NEW_COMMENT',
      comment,
    }))
  }

  return (
    <React.Fragment>
      <div className='createComment'>
        <div>Comentariu nou</div>
        <textarea id="newComment" rows="4" cols="30" onChange={(event) => setState(event.target.value)}></textarea><br></br>
        {/* <h1>{state}</h1> */}
        <button type='button' onClick={sendComment}>Adauga</button>
      </div>
    </React.Fragment>
  )
}
export default CreateComment