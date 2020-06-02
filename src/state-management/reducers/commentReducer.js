export default function commentReducer(state, action) {
  switch(action.type) {
    case 'NEW_COMMENT':
      console.log('DISPATCHING')
      state.comments = [...state.comments, action.comment]

      return {...state}
    case 'UPDATE_LIKE':
      console.log('in reducer')
      console.log(state.comments)
      console.log(action.comment)

      state.comments[action.comment.id -1] = {...state.comments[action.comment.id -1], likes: action.comment.likes}
      // state.comments = {...state.comments}
      // state.comments[action.comment.id].likes = action.likes


      return {...state}
    case 'DELETE ':
      state.comments[action.comment.id -1] = []

      return {...state}
    case 'GET_COMMENTS':
      state.comments = action.comments

      return {...state}
    default:

      return {...state}
  }
}
