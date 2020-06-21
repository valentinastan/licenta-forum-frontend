import React from 'react'
import { useDispatch } from '../state-management/stores/store'
import { likeCommentQuery,  dislikeCommentQuery, postDeleteCommentsQuery} from '../requests/comments'

const Comment = (props) => {
  console.log('props', props)
  const dispatch = useDispatch()

  const likeComment = () => {
    likeCommentQuery({
      commentId: props.id,
    }).then((comment) => dispatch({
      type: 'UPDATE_COMMENT',
      comment,
    }))
  }

  const dislikeComment = () => {
    dislikeCommentQuery({
      commentId: props.id,
    }).then((comment) => dispatch({
      type: 'UPDATE_COMMENT',
      comment,
    }))
  }

  const deleteComment = () => {
    postDeleteCommentsQuery({
      id: props.id,
    }).then(() => dispatch({
      type: 'DELETE',
      id: props.id,
    }))
  }

  return (
    <React.Fragment>
      <div className='comment'>
        <div>{props.text}</div>
        <div>{props.sentiment}</div>
        <div className='reactions'>
          <button className='like' onClick={likeComment}>
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
          </button>
          <div className='likesNr'>{props.likes}</div>
          <button className='dislike' onClick={dislikeComment}>
            <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
          </button>
          <div className='dislikesNr'>{props.dislikes}</div>
        </div>
        <button className='deleteButton' onClick={deleteComment}>Delete comment</button>
      </div>
    </React.Fragment>
  )
}
export default Comment