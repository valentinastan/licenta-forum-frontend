import React, {useState} from 'react'
import { getOnePostRequest } from '../requests/posts'
import Comment from '../components/comment'
import CreateComment from './createComment'
import {useStore} from '../state-management/stores/store'

const Post = (props) => {

  const [globalState, dispatch] = useStore()
  const [state, setState] = useState({})

  React.useEffect(() => {
    getOnePostRequest(props.match.params.id)
    .then(post => {
      dispatch({
        type: "GET_COMMENTS",
        comments: post[0].Comments
      })
      setState(post[0])
    })
  }, [])

  console.log('state:', state)
  return(
    <React.Fragment>
      <div className='post'>
        <h2>{state.title}</h2>
        <div>{state.text}</div>
      </div>
        {(globalState.commentState.comments || []).map((el) => <Comment key={`comment_${el.id}`} {...el}></Comment>) }
        <br/>
      <CreateComment id={props.match.params.id}></CreateComment>
    </React.Fragment>
  )
}

export default Post
