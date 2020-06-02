import React from 'react'
import Comment from './comment'
import {useState, useDispatch} from '../state-management/stores/store'
import { getCommentsRequest } from '../requests/comments'

const Comments = () => {

  const dispatch = useDispatch()
  const comments = useState().commentState.comments

  React.useEffect(() => {
    getCommentsRequest({id: 1})
    .then((comments) => dispatch({
      type: 'GET_COMMENTS',
      comments,
    }))
  }, [])
console.log('comments: ' , comments)
  return (
    <React.Fragment>
      <h2>Comentarii:</h2>
      {(comments || []).map((el) => <Comment key={`comment_${el.id}`} {...el}></Comment>) }
    </React.Fragment>
  )
}
export default Comments