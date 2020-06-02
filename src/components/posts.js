import React from 'react'
import {useDispatch, useState} from '../state-management/stores/store'
import {getPostsRequest} from '../requests/posts'
import CreatePost from './createPost'
import PreviewPost from './previewPost'


const Posts = () => {
  // const posts = [
  //   {
  //     id: 1,
  //     userId: 1,
  //     title: "Titlu",
  //     text: 'Text',
  //   }
  // ]

  const dispatch = useDispatch()
  const posts = useState().postState.posts

  React.useEffect(() => {
    getPostsRequest().then(posts => dispatch({
      type: 'GET_POSTS',
      posts,
    }))
  }, [])

  return(
    <React.Fragment>
      <h1>Forumul agricultorului</h1>
      <CreatePost></CreatePost>
      <div className='posts'>
        {(posts || []).map((el) => <PreviewPost key={`post_${el.id}`} {...el}></PreviewPost>) }
      </div>
    </React.Fragment>
  )
}

export default Posts