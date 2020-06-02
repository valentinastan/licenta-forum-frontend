import React from 'react'
import {postLikeCommentsQuery, postDeleteCommentsQuery} from '../requests/comments'
import { useDispatch } from '../state-management/stores/store'

const Comment = (props) => {
  console.log('props', props)
  const dispatch = useDispatch()

  const updateLike = () => {
    postLikeCommentsQuery({
      id: props.id,
      likes: props.likes
    }).then((comment) => dispatch({
      type: 'UPDATE_LIKE',
      comment,
    }))
  }

  const deleteComment = () => {
    postDeleteCommentsQuery({
      id: props.id,
    }).then((comment) => dispatch({
      type: 'DELETE',
      comment,
    }))
  }

  return (
    <React.Fragment>
      <div className='comment'>
        <div>Nenea user: {props.userId}</div>
        <div>Text comm: {props.text}</div>
        <div className='reactions'>
          <button className='like' onClick={updateLike}>
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
          </button>
          <div className='likesNr'>{props.likes}</div>
          <button className='dislike'>
            <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
          </button>
          <div className='dislikesNr'>{props.likes}</div>
        </div>
        <button className='deleteButton' onClick={deleteComment}>Delete comment</button>
      </div>
    </React.Fragment>
  )
}
export default Comment